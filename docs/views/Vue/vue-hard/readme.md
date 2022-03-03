# 原理篇

## vue 数据双向绑定原理

双向绑定建立在 MVVM 的模型基础上的：

- 数据层 model ：应用的数据以及业务逻辑
- 视图层 View：应用的展示效果
- 业务逻辑层 ViewModel：负责将数据和视图关联起来

> 数据变化后更新视图，视图变化后更新数据

包含两个主要的组成部门

- 监听器 Observer ：对所有数据进行监听
- 解析器 Compiler：对每个元素节点的指令进行扫描和解析，根据指令替换数据，绑定对应的更新函数。

### 实现原理

1. new Vue()执行初始化，对 data 通过 Object.defineProperty 进行响应化处理，这个过程发生在 Observer 中，每一个 key 都会有一个 dep 实例来存储 watcher 实例数组
2. 对模板进行编译时，v-开头的关键词作为指令解析，找到动态绑定的数据，从 data 中获取数据并初始化视图，这过程发生在 Compiler 里，如果遇到了 v-model，就监听 input 事件，更新 data 对应的数值。
3. 在解析指令的过程中，每一个指令都会定义一个更新函数和 watcher，之后对应数据变化时候 watcher 会调用更新函数（watcher 是对数据 key 的观察）。new watcher 实例的过程中会读取 data 的 key，触发 getter 的响应式收集，将对应的 watcher 添加到 dep 里。
4. 将来 data 中的数据一旦发生变化，会找到对应的 dep，通知所有的 watcher 执行更新函数。

### 实现一个响应式函数,对一个对象内的所有 key 添加响应式特性

> 数据更新，劫持 setter

```js
const loglog = (key, val) => {
  console.log(`set key=${key},val=${val}`);
};
const deep = (obj, key, val) => {
  // if (typeof obj[key] == 'object') {
  //     reactive(obj[key])
  // }
  reactive(val); //直接把val传给 reactive前面有判断
  Object.defineProperty(obj, key, {
    get() {
      return val; //必须return
    },
    set(newVal) {
      if (val == newVal) {
        return;
      } //diff

      val = newVal;
      loglog(key, newVal);
    },
  });
};

const reactive = (obj) => {
  if (typeof obj == "object") {
    for (let key in obj) {
      deep(obj, key, obj[key]);
    }
  }
};
const data = {
  a: 1,
  b: 2,
  c: {
    c1: {
      af: 999,
    },
    c2: 4,
  },
};

reactive(data);

//期望输出
data.a = 15; //set key=a,val=15
data.b = 17; //set key=b,val=17
data.c.c2 = 4; //更改的值和之前一样 不输出
data.c.c1.af = 121; //set key=af,val=121
```

## Vue 对于数组类型怎么处理的？简单模拟下数组方法的监听，最终输出如下

```js
const render = (hand, ...arg) => {
  console.log(`Action=${hand},arg=${arg.join(",")}`);
};
const arrPrototype = Array.prototype; //拿出数组原型
const newArrPrototype = Object.create(arrPrototype); //创建新原型对象，把数组原型给他

const handArr = [
  "push",
  "pop",
  "shift",
  "unshift",
  "map",
  "reverse",
  "sort",
  "fillter",
  "slice",
  "splice",
  "reverse",
];
handArr.forEach((methodsName) => {
  newArrPrototype[methodsName] = function() {
    arrPrototype[methodsName].call(this, ...arguments); //执行数组方法
    render(methodsName, ...arguments); //触发渲染
  };
});

const reactive = (obj) => {
  if (Array.isArray(obj)) {
    obj.__proto__ = newArrPrototype; //改变数组原型，把新定义的原型对象给他
  }
};
const data = [1, 2, 3, 4];
reactive(data);
data.push(5); //Action= push ,arg=5
data.splice(0, 2); //Action= splice,arg=0.2

data.map((item) => {
  return item * item;
});
```

## 实现基于 proxy 的响应式？能够监听对象的删除操作？要求最终的输出如下方代码所示

```js
let observeStore = new Map();
function makeObserveable(target) {
  let handerName = Symbol("handler");
  observeStore.set(handerName, []);

  target.observe = function(handerArr) {
    observeStore.get(handerName).push(handerArr);
  };
  const proxyHandler = {
    get(target, property, receiver) {
      //proxy的get针对嵌套对象处理
      if (typeof target[property] === "object" && target[property] !== null) {
        return new Proxy(target[property], proxyHandler);
      }

      let success = Reflect.get(...arguments);

      if (success) {
        observeStore.get(handerName).forEach((element) => {
          element("GET", property, target[property]);
        });
      }

      return success;
    },
    set(target, property, value, receiver) {
      let success = Reflect.set(...arguments);

      if (success) {
        observeStore.get(handerName).forEach((element) => {
          element("SET", property, value);
        });
      }

      return success;
    },
    deleteProperty(target, property) {
      let success = Reflect.deleteProperty(...arguments);

      if (success) {
        observeStore.get(handerName).forEach((element) => {
          element("DELETE", property);
        });
      }

      return success;
    },
  };

  //创建proxy拦截更改
  return new Proxy(target, proxyHandler);
}

let user = {};

user = makeObserveable(user);
user.observe((action, key, value) => {
  console.log(`${action} key=${key} value=${value || ""}`);
});

user.name = "xiaoming"; //SET  key=name value =xiaoming
console.log(user.name); //GET  key=name value =xiaoming
delete user.name; //DELETE key=name value=
```

## 了解虚拟 dom 吗，浅谈优缺点

对于真实 Dom 的抽象，用嵌套对象表示，用属性来描述节点，最终通过一系列操作映射到真实 dom 上

### 优点：

1. 保证性能下限 在不进行手动优化的前提下，也可以提供过得去的性能
2. 无需手动操作DOM
3. 跨平台 比如服务端渲染 比如uniapp

### 缺点：

1. 首次渲染大量dom的时候，由于多了一层虚拟dom的计算，会比innerHTML的插入速度快
2. 做一些针对性的优化，真实dom的操作更快

### code

- 给你一段数据结构，将其转换成真实 dom

```js
console.log("start");
//虚拟dom转真dom
const vnode = {
  tag: "div",
  attrs: {
    id: "app",
    class: "bpx",
  },
  children: [
    {
      tag: "span",
      children: [
        {
          tag: "a",
          children: [],
        },
      ],
    },
    {
      tag: "span",
      children: [
        {
          tag: "a",
          attrs: {
            src: "123",
            href: 132,
          },
          children: [],
        },
        {
          tag: "a",
          children: [],
        },
      ],
    },
  ],
};

function render(vnode) {
  if (typeof vnode === "number") {
    vnode = String(vnode);
  }

  if (typeof vnode === "string") {
    return document.createTextNode(vnode); //创建文本节点
  }

  var elementApp = document.createElement(vnode.tag);
  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach((item) => {
      elementApp.setAttribute(item, vnode.attrs[item]);
    });
  }

  if (vnode.children.length) {
    vnode.children.forEach((element) => {
      elementApp.appendChild(render(element)); //加到子节点 递归
    });
  }

  return elementApp;
}

render(vnode);

console.log(render(vnode));

//思考题： 阿拉伯数字转中文
```

## symbol

1. 用来解决属性名冲突问题，构造唯一的属性名或者变量
2. 私有属性

### coding

1. 如何让一个对象可遍历用 for of？

   - 用 symbol 迭代器实现

   ```js
   const obj = {
     count: 0,
     tets: Symbol("132"),
     aaa: undefined,
     a: () => {
       console.log(456);
     },
     // ban: banji,
     //迭代器
     [Symbol.iterator]: () => {
       return {
         next: () => {
           //next函数
           obj.count++;
           if (obj.count <= 10) {
             return {
               value: obj.count,
               done: false,
             };
           } else {
             return {
               value: undefined,
               done: true,
             };
           }
         },
       };
     },
   };

   for (let i of obj) {
     console.log(i);
   }
   ```

2. JSON.stringify 会忽略 symbol 吗？除了这个 还会忽略什么？

   - undefined
   - function

3. 如果对象有循环引用，可以 JSON.stringify 来处理吗？

   - 不可以，会报错(序列化的时候会出现无限循环)

4. 实现一个深拷贝

   ```js
   let obj = {
     a: {
       b: 1,
       c: 12,
     },
     qwe: [132, 456, 465465, 4, 65465],
   };
   ```


    function deepClone(obj, hash = new WeakMap()) {
        //WeakMap弱引用,可以用对象作为一个key，又不会持有这个对象的引用，不影响垃圾回收
        if (obj === null) {
            return null
        }
        if (obj instanceof Date) {
            return new Date(obj)
        }
        if (obj instanceof RegExp) {
            return new RegExp(obj)
        }
        if (typeof obj !== 'object') {
            return obj
        }
        if (hash.has(obj)) {
            console.log('hash');
            return hash.get(obj)
        }

        const resObj = Array.isArray(obj) ? [] : {}

        hash.set(obj, resObj)//破解循环引用

        Reflect.ownKeys(obj).forEach(key => {
            resObj[key] = deepClone(obj[key], hash);
        });
        return resObj

    }

    console.log(deepClone(obj));
    ```

5. 如何判断是对象类型 ，分别适用于哪些场景

   ```js
   console.log(typeof obj);
   console.log(obj instanceof Object);
   console.log(Object.prototype.toString.call(obj)); //改变this指向实现 toString返回类型
   console.log(Array.isArray(obj));
   //通过查找对象的隐式原型 是否严格等于对应类型的显示原型
   ```

6. instanceof 原理，实现 instance of

```js
function my_instanceof(left, right) {
  if (typeof left !== "object" || left === null) {
    return false;
  }
  // console.log(right.prototype);
  while (true) {
    console.log(left);
    if (left === null) {
      return false;
    }
    if (left.__proto__ === right.prototype) {
      return true;
    }
    left = left.__proto__;
  }
}
console.log(my_instanceof([], Object));
console.log(my_instanceof([], Array));
console.log(my_instanceof(213, Number));
```
