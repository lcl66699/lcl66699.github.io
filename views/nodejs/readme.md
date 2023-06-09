# nodejs

## 基础
### express的req传参
`nodemon .\app.js`

req 接来的传参

req.body 处理post
req.query 处理get

req.params 针对于 /users/:id

仅针对我的nodejs服务目录架构
- config 配置文件
- controller 解析用户
- model 数据持久层
- middleware 编写中间件
- router 路由
- util 工具模块
- app.js 入口



### node.js 常见内置模块

- fs: nodejs的api调用文件系统，能够读取写⼊当前安装系统环境中硬盘的数据
```js
//文件系统,使用绝对路径更好
const fs = require('fs')
const path = require('path')

const pathToFile = path.resolve(__dirname, 'util')

//异步的
fs.readFile(pathToFile, 'utf-8', function (err, res) {
if (err) {
    console.log(err);
    return err
}
})

//同步的
const content = fs.readFileSync(pathToFile, 'utf-8')
```
- path: 路径系统，能够处理路径之间的问题
```js
const path = require('path')

const resolvePath = path.resolve('a', 'b', 'c')//* 返回路径本身,绝对路径
const joinPath = path.join('a', 'b', 'c')//返回路径

console.log(__dirname);//当前文件夹名称
console.log(__filename);//当前文件夹名称,包含文件名.xx
```
- crypto: 加密相关模块，能够以标准的加密⽅式对我们的内容进行加解密
- dns: 处理 dns 相关内容，例如我们可以设置 dns 服务器等等
- http: 设置⼀个 http 服务器，发送 http 请求，监听响应等等
```js
const http = require('http')

const proxy = http.createServer((req, res) => {
    res.end('hello')
})
proxy.listen(8888, '127.0.0.1', () => {
    console.log('server start');
})
```
- readline: 读取 stdin 的⼀行内容，可以读取、增加、删除我们命令行中的内容
- os: 操作系统层⾯的⼀些 api，例如告诉你当前系统类型及⼀些参数
- vm: ⼀个专门处理沙箱的虚拟机模块，底层主要来调用 v8 相关 api 进行代码解析。
  - 把一个字符串变成可执行的代码过程，可以实现类似commonjs


#### node.js 版本切换
在个⼈电脑上，我们可以安装⼀些⼯具，对 node.js 版
本进行切换，例如 nvm 和 n。

nvm 的全称就是 node version manager，意思就是能够管理 node 版本的⼀个⼯具，它提供了⼀种直接通过shell 执行的⽅式来进行安装。简单来说，就是通过将多个 node 版本安装在指定路径，然后通过 nvm 命令切换时，就会切换我们环境变量中 node 命令指定的实际执行的软件路径。
```
curl -o https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

```

### node.js 的底层依赖

node.js 的主要依赖⼦模块有以下内容：
- V8 引擎：主要是 JS 语法的解析，有了它才能识别JS语法
- libuv: c语言实现的⼀个⾼性能异步非阻塞 IO 库，用来实现 node.js 的事件循环
- http-parser/llhttp: 底层处理 http 请求，处理报文，解析请求包等内容
- openssl: 处理加密算法，各种框架运用⼴泛
- zlib: 处理压缩等内容

#### 包管理⼯具 npm

npx 是 npm@5 之后新增的⼀个命令，它使得我们可以
在不安装模块到当前环境的前提下，使用⼀些 cli 功能。


## Events

events模块是node的核心模块之一，几乎所有常用的node模块都继承了events模块，比如http、fs等。

模块本身非常简单，API虽然也不少，但常用的就那么几个，这里举几个简单例子。


### 例子1：单个事件监听器

```js
var EventEmitter = require('events');

class Man extends EventEmitter {}

var man = new Man();

man.on('wakeup', function(){
    console.log('man has woken up');
});

man.emit('wakeup');
// 输出如下：
// man has woken up
```

### 例子2：同个事件，多个事件监听器

可以看到，事件触发时，事件监听器按照注册的顺序执行。

```js
var EventEmitter = require('events');

class Man extends EventEmitter {}

var man = new Man();

man.on('wakeup', function(){
    console.log('man has woken up');
});

man.on('wakeup', function(){
    console.log('man has woken up again');
});

man.emit('wakeup');

// 输出如下：
// man has woken up
// man has woken up again
```

### 例子3：只运行一次的事件监听器

```js
var EventEmitter = require('events');

class Man extends EventEmitter {}

var man = new Man();

man.on('wakeup', function(){
    console.log('man has woken up');
});

man.once('wakeup', function(){
    console.log('man has woken up again');
});

man.emit('wakeup');
man.emit('wakeup');

// 输出如下：
// man has woken up
// man has woken up again
// man has woken up
```

### 例子4：注册事件监听器前，事件先触发

可以看到，注册事件监听器前，事件先触发，则该事件会直接被忽略。

```js
var EventEmitter = require('events');

class Man extends EventEmitter {}

var man = new Man();

man.emit('wakeup', 1);

man.on('wakeup', function(index){
    console.log('man has woken up ->' + index);
});

man.emit('wakeup', 2);
// 输出如下：
// man has woken up ->2
```

### 例子5：异步执行，还是顺序执行

例子很简单，但非常重要。究竟是代码1先执行，还是代码2先执行，这点差异，无论对于我们理解别人的代码，还是自己编写node程序，都非常关键。

实践证明，代码1先执行了

```js
var EventEmitter = require('events');

class Man extends EventEmitter {}

var man = new Man();

man.on('wakeup', function(){
    console.log('man has woken up'); // 代码1
});

man.emit('wakeup');

console.log('woman has woken up');  // 代码2

// 输出如下：
// man has woken up
// woman has woken up
```

### 例子6：移除事件监听器

```js
var EventEmitter = require('events');

function wakeup(){
    console.log('man has woken up');
}

class Man extends EventEmitter {}

var man = new Man();

man.on('wakeup', wakeup);
man.emit('wakeup');

man.removeListener('wakeup', wakeup);
man.emit('wakeup');

// 输出如下：
// man has woken up
```

### 手写实现EventEmitter
```js
class EventEmitter {
    constructor(maxListeners) {
        this.events = {}
        this.maxListeners = maxListeners || Infinity;
    }
    //触发监听事件
    emit(event, ...args) {
        const cbs = this.events[event]

        if (!cbs) {
            console.warn(`${event} event is not registered.`);
            return this;
        }

        cbs.forEach(cb => cb.apply(this, args))

        return this
    }
    //创建监听事件
    on(event, cb) {
        if (!this.events[event]) {
            this.events[event] = []
        }

        if (this.maxListeners !== Infinity && this.events[event].length >= this.maxListeners) {
            console.warn(`${event} has reached max listeners.`)
            return this;
        }
        this.events[event].push(cb)

        return this
    }
    //只触发一次
    once(event, cb) {
        const func = (...args) => {
            this.off(event, func)
            cb.apply(this, args)
        }
        this.on(event, func)

        return this
    }
    //移除一次的事件
    off(event, cb) {
        if (!cb) {
            this.events[event] = null
        } else {
            this.events[event] = this.events[event].filter(item => item !== cb);
        }

        return this
    }

}


const add = (a, b) => console.log(a + b)
const log = (...args) => console.log(...args)
const event = new EventEmitter()

event.on('add', add)
event.on('log', log)
event.emit('add', 1, 2) // 3
event.emit('log', 'hi~') // 'hi~'
event.off('add')
event.emit('add', 1, 2) // Error: add event is not registered.
event.once('once', add)
event.emit('once', 1, 2) // 3
event.emit('once', 1, 2)
event.emit('once', 1, 2)
```

event.js





## 全局对象Global


JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可以在程序的任何地方访问，即全局变量。

在浏览器 JavaScript 中，通常 window 是全局对象， 而 Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。

在 Node.js 我们可以直接访问到 global 的属性，而不需要在应用中包含它。


### 全局对象和全局变量

global 最根本的作用是作为全局变量的宿主。按照 ECMAScript 的定义，满足以下条件的变量是全局变量：

- 在最外层定义的变量；
- 全局对象的属性；
- 隐式定义的变量（未定义直接赋值的变量）。
- 当你定义一个全局变量时，这个变量同时也会成为全局对象的属性，反之亦然。需要注 意的是，在 Node.js 中你不可能在最外层定义变量，因为所有用户代码都是属于当前模块的， 而模块本身不是最外层上下文。

注意： 永远使用 var 定义变量以避免引入全局变量，因为全局变量会污染命名空间，提高代码的耦合风险。


### __filename

__filename 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 如果在模块中，返回的值是模块文件的路径。

```js
console.log( __filename );
```

### __dirname

__dirname 表示当前执行脚本所在的目录。

```js
console.log( __dirname );
```

- setTimeout(cb, ms)

setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。

返回一个代表定时器的句柄值。


```js
function printHello(){
   console.log( "Hello, World!");
}
// 两秒后执行以上函数
setTimeout(printHello, 2000);

```

- clearTimeout

- setInterval

- clearInterval

- console

### process

process 是一个全局变量，即 global 对象的属性。

它用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口。通常在写本地命令行程序的时候，少不了要和它打交道。
下面将会介绍 process 对象的一些最常用的成员方法。

1. exit
当进程准备退出时触发。

2. beforeExit
当 node 清空事件循环，并且没有其他安排时触发这个事件。通常来说，当没有进程安排时 node 退出，但是 ‘beforeExit’ 的监听器可以异步调用，这样 node 就会继续执行。

3. uncaughtException
当一个异常冒泡回到事件循环，触发这个事件。如果给异常添加了监视器，默认的操作（打印堆栈跟踪信息并退出）就不会发生。

4. Signal 事件
当进程接收到信号时就触发。信号列表详见标准的 POSIX 信号名，如 SIGINT、SIGUSR1 等。

```js
process.on('exit', function(code) {
  // 以下代码setTimeout永远不会执行，已经退出了
  setTimeout(function() {
    console.log("该代码不会执行");
  }, 0);
   
  console.log('退出码为:', code);
});
console.log("程序执行结束");

```

### 退出的状态码

1. Uncaught Fatal Exception
有未捕获异常，并且没有被域或 uncaughtException 处理函数处理。

3	Internal JavaScript Parse Error
JavaScript的源码启动 Node 进程时引起解析错误。非常罕见，仅会在开发 Node 时才会有。

4	Internal JavaScript Evaluation Failure
JavaScript 的源码启动 Node 进程，评估时返回函数失败。非常罕见，仅会在开发 Node 时才会有。

5	Fatal Error
V8 里致命的不可恢复的错误。通常会打印到 stderr ，内容为： FATAL ERROR

6	Non-function Internal Exception Handler
未捕获异常，内部异常处理函数不知为何设置为on-function，并且不能被调用。

7	Internal Exception Handler Run-Time Failure
未捕获的异常， 并且异常处理函数处理时自己抛出了异常。例如，如果 process.on(‘uncaughtException’) 或 domain.on(‘error’) 抛出了异常。

9	Invalid Argument
可能是给了未知的参数，或者给的参数没有值。

10	Internal JavaScript Run-Time Failure
JavaScript的源码启动 Node 进程时抛出错误，非常罕见，仅会在开发 Node 时才会有。

12	Invalid Debug Argument
设置了参数–debug 和/或 –debug-brk，但是选择了错误端口。

>128	Signal Exits
如果 Node 接收到致命信号，比如SIGKILL 或 SIGHUP，那么退出代码就是128 加信号代码。这是标准的 Unix 做法，退出信号代码放在高位。

```js
// 输出到终端
process.stdout.write("Hello World!" + "\n");
 
// 通过参数读取
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});
 
// 获取执行路局
console.log(process.execPath);
 
// 平台信息
console.log(process.platform);

```

### node中的this

NodeJS全局范围中的这个是当前模块。导出对象，而不是全局对象。
```js
// this in NodeJS global scope is the current module.exports object, not the global object.

console.log(this);    // {}

module.exports.foo = 5;

console.log(this);   // { foo:5 }
```


## node.js 事件循环模型

:::tip 小tips
这里我在js模块下面，很详细的说了我对事件循环的理解，但是对nodejs一些描述的比较少
:::

### 什么是事件循环

事件循环使 Node.js 可以通过将操作转移到系统内核中来执行非阻塞 I/O 操作（尽管 JavaScript 是单线程的）。

由于大多数现代内核都是多线程的，因此它们可以处理在后台执行的多个操作。 当这些操作之一完成时，内核会告诉 Node.js，以便可以将适当的回调添加到轮询队列中以最终执行。


Node.js 启动时，它将初始化事件循环，处理提供的输入脚本，这些脚本可能会进行异步 API 调用，调度计时器或调用 process.nextTick， 然后开始处理事件循环。

```
   ┌───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘
```

每个阶段都有一个要执行的回调 FIFO 队列。 尽管每个阶段都有其自己的特殊方式，但是通常，当事件循环进入给定阶段时，它将执行该阶段特定的任何操作，然后在该阶段的队列中执行回调，直到队列耗尽或执行回调的最大数量为止。 当队列已为空或达到回调限制时，事件循环将移至下一个阶段，依此类推。


### 各阶段概览

1. timers：此阶段执行由 setTimeout 和 setInterval 设置的回调。
2. pending callbacks：执行推迟到下一个循环迭代的 I/O 回调。
3. idle, prepare, ：仅在内部使用。
4. poll：取出新完成的 I/O 事件；执行与 I/O 相关的回调（除了关闭回调，计时器调度的回调和 setImmediate 之外，几乎所有这些回调） 适当时，node 将在此处阻塞。
5. check：在这里调用 setImmediate 回调。
6. close callbacks：一些关闭回调，例如 socket.on('close', ...)。

在每次事件循环运行之间，Node.js 会检查它是否正在等待任何异步 I/O 或 timers，如果没有，则将其干净地关闭。

### 各阶段详细解析

#### timers 计时器阶段

计时器可以在回调后面指定时间阈值，但这不是我们希望其执行的确切时间。 计时器回调将在经过指定的时间后尽早运行。 但是，操作系统调度或其他回调的运行可能会延迟它们。-- 执行的实际时间不确定

```js
const fs = require('fs');

function someAsyncOperation(callback) {
  // Assume this takes 95ms to complete
  fs.readFile('/path/to/file', callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation(() => {
  const startCallback = Date.now();

  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
});
```

当事件循环进入 poll 阶段时，它有一个空队列（fs.readFile 尚未完成），因此它将等待直到达到最快的计时器 timer 阈值为止。 
等待 95 ms 过去时，fs.readFile 完成读取文件，并将需要 10ms 完成的其回调添加到轮询 (poll) 队列并执行。 
回调完成后，队列中不再有回调，此时事件循环已达到最早计时器 (timer) 的阈值 (100ms)，然后返回到计时器 (timer) 阶段以执行计时器的回调。 
在此示例中，您将看到计划的计时器与执行的回调之间的总延迟为 105ms。


#### pending callbacks 阶段

此阶段执行某些系统操作的回调，例如 TCP 错误。 平时无需关注

#### 轮询 poll 阶段

轮询阶段具有两个主要功能：

1. 计算应该阻塞并 I/O 轮询的时间
2. 处理轮询队列 (poll queue) 中的事件

当事件循环进入轮询 (poll) 阶段并且没有任何计时器调度 (timers scheduled) 时，将发生以下两种情况之一：

1. 如果轮询队列 (poll queue) 不为空，则事件循环将遍历其回调队列，使其同步执行，直到队列用尽或达到与系统相关的硬限制为止 (到底是哪些硬限制？)。
2. 如果轮询队列为空，则会发生以下两种情况之一：
    2.1 如果已通过 setImmediate 调度了脚本，则事件循环将结束轮询 poll 阶段，并继续执行 check 阶段以执行那些调度的脚本。
    2.2 如果脚本并没有 setImmediate 设置回调，则事件循环将等待 poll 队列中的回调，然后立即执行它们。
    
一旦轮询队列 (poll queue) 为空，事件循环将检查哪些计时器 timer 已经到时间。 如果一个或多个计时器 timer 准备就绪，则事件循环将返回到计时器阶段，以执行这些计时器的回调。



#### 检查阶段 check

此阶段允许在轮询 poll 阶段完成后立即执行回调。 如果轮询 poll 阶段处于空闲，并且脚本已使用 setImmediate 进入 check 队列，则事件循环可能会进入 check 阶段，而不是在 poll 阶段等待。

setImmediate 实际上是一个特殊的计时器，它在事件循环的单独阶段运行。 它使用 libuv API，该 API 计划在轮询阶段完成后执行回调。

通常，在执行代码时，事件循环最终将到达轮询 poll 阶段，在该阶段它将等待传入的连接，请求等。但是，如果已使用 setImmediate 设置回调并且轮询阶段变为空闲，则它将将结束并进入 check 阶段，而不是等待轮询事件。

#### close callbacks 阶段

如果套接字或句柄突然关闭（例如 socket.destroy），则在此阶段将发出 'close' 事件。 否则它将通过 process.nextTick 发出。


### setImmediate 和 setTimeout 的区别

setImmediate 和 setTimeout 相似，但是根据调用时间的不同，它们的行为也不同。

* setImmediate 设计为在当前轮询 poll 阶段完成后执行脚本。
* setTimeout 计划在以毫秒为单位的最小阈值过去之后运行脚本。

:::tip
计时器的执行顺序将根据调用它们的上下文而有所不同。 如果两者都是主模块中调用的，则时序将受到进程性能的限制.
::: 

看两个例子：

1. 在主模块中执行

    两者的执行顺序是不固定的, 可能timeout在前, 也可能immediate在前
   
   ```js
   setTimeout(() => {
    console.log('timeout');
    }, 0);

    setImmediate(() => {
    console.log('immediate');
    });
   ```

2. 在同一个I/O回调里执行
    
    setImmediate总是先执行

    ```js
    const fs = require('fs');

    fs.readFile(__filename, () => {
        setTimeout(() => {
            console.log('timeout');
        }, 0);
        setImmediate(() => {
            console.log('immediate');
        });
    });
    ```

问题：那为什么在外部 (比如主代码部分 mainline) 这两者的执行顺序不确定呢？

解答：在 主代码 部分执行 setTimeout 设置定时器 (此时还没有写入队列)，与 setImmediate 写入 check 队列。

mainline 执行完开始事件循环，第一阶段是 timers，这时候 timers 队列可能为空，也可能有回调；
如果没有那么执行 check 队列的回调，下一轮循环在检查并执行 timers 队列的回调；
如果有就先执行 timers 的回调，再执行 check 阶段的回调。因此这是 timers 的不确定性导致的。


### process.nextTick微任务

在同一微任务队列里，他在微任务里面优先级最高

process.nextTick 从技术上讲不是事件循环的一部分。
 相反，无论事件循环的当前阶段如何，都将在当前操作完成之后处理 nextTickQueue

#### process.nextTick 和 setImmediate 的区别

* process.nextTick 在同一阶段立即触发
* setImmediate fires on the following iteration or 'tick' of the event loop (在事件循环接下来的阶段迭代中执行 - check 阶段)。


### nextTick在事件循环中的位置

```
           ┌───────────────────────────┐
        ┌─>│           timers          │
        │  └─────────────┬─────────────┘
        │           nextTickQueue
        │  ┌─────────────┴─────────────┐
        │  │     pending callbacks     │
        │  └─────────────┬─────────────┘
        │           nextTickQueue
        │  ┌─────────────┴─────────────┐
        |  |     idle, prepare         │
        |  └─────────────┬─────────────┘
  nextTickQueue     nextTickQueue
        |  ┌─────────────┴─────────────┐
        |  │           poll            │
        │  └─────────────┬─────────────┘
        │           nextTickQueue
        │  ┌─────────────┴─────────────┐
        │  │           check           │
        │  └─────────────┬─────────────┘
        │           nextTickQueue
        │  ┌─────────────┴─────────────┐
        └──┤       close callbacks     │
           └───────────────────────────┘
```

### Microtasks 微任务

在 Node 领域，微任务是来自以下对象的回调：

1. process.nextTick()
2. then()

在主线结束后以及事件循环的每个阶段之后，立即运行微任务回调。

resolved 的 promise.then 回调像微处理一样执行，就像 process.nextTick 一样。 虽然，如果两者都在同一个微任务队列中，则将首先执行 process.nextTick 的回调。

优先级： process.nextTick > promise.then

### 代码输出顺序

```js
async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}
async function async2() {
    console.log('async2')
}
console.log('script start')
setTimeout(function () {
    console.log('setTimeout0')
    setTimeout(function () {
        console.log('setTimeout1');
    }, 0);
    setImmediate(() => console.log('setImmediate'));
}, 0)

process.nextTick(() => console.log('nextTick'));
async1();
new Promise(function (resolve) {
    console.log('promise1')
    resolve();
    console.log('promise2')
}).then(function () {
    console.log('promise3')
})
console.log('script end')

```



#### node.js CommonJS

V8 引擎：https://github.com/v8/v8 / 
https://chromium.googlesource.com/v8/v8.git

引擎只是解析层⾯，具体的上层还有许多具体环境的封
装.
vm可以实现

cjs源码在node/lib/internal/modules/cjs文件下

## node.js 周边⼯具
### debug 

对于浏览器的 JS 代码来说，我们可以通过断点进行分步
调试，每⼀步打印当前上下文中的变量结果，来定位具
体问题出现在哪⼀步。
我们可以借助 VSC 或者⾃行打断点的形式，来进行分步
node.js 调试。
对于 JS 内存泄漏，我们也可以使用同样的道理，借助⼯
具，打印每次的内存快照，对⽐得出代码中的问题。

### quickjs
 另⼀种 JS 解析引擎 quickjs，可以放在嵌入式里面

quickjs 是⼀个 JS 的解析引擎，轻量代码量也不⼤，与
之功能类似的就是 V8 引擎。
他最⼤的特点就是，⾮常⾮常轻量，这点从源码中也能
提现，事实上并没有太多的代码，它的主要特点和优
势：
轻量⽽且易于嵌⼊：只需⼏个C文件，没有外部依
赖，⼀个x86下的简单的“hello world”程序只要180
KiB。
具有极低启动时间的快速解释器： 在⼀台单核的台式
PC上，⼤约在100秒内运行ECMAScript 测试套件1
56000次。运行时实例的完整⽣命周期在不到300微
秒的时间内完成。
⼏乎完整实现ES2019⽀持，包括： 模块，异步⽣成
器和和完整Annex B⽀持 (传统的Web兼容性)。许
多ES2020中带来的特性也依然会被⽀持。
通过100％的ECMAScript Test Suite测试。
可以将Javascript源编译为没有外部依赖的可执行文
件。

### deno

deno 是⼀类类似于 node.js 的 JS 运行时环境，同时他
也是由 node.js 之⽗⼀⼿打造出来的，他和 node.js ⽐
有什么区别呢？
相同点：
deno 也是基于 V8 ，上层封装⼀些系统级别的调用
我们的 deno 应用也可以使用 JS 开发
不同点：
deno 基于 rust 和 typescript 开发⼀些上层模块，所
以我们可以直接在 deno 应用中书写 ts
deno ⽀持从 url 加载模块，同时⽀持 top level
await 等特性
