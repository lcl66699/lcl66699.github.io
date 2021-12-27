(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{387:function(e,t,s){"use strict";s.r(t);var r=s(42),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"promisea-规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promisea-规范"}},[e._v("#")]),e._v(" PromiseA+规范")]),e._v(" "),s("h3",{attrs:{id:"术语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#术语"}},[e._v("#")]),e._v(" 术语")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://promisesaplus.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PromiseA+规范"),s("OutboundLink")],1)]),e._v(" "),s("ul",[s("li",[e._v("promise 是一个有then法的对象或者是函数，行为遵循本规范")]),e._v(" "),s("li",[e._v("thenable  是一个有then方法的对象或者是函数")]),e._v(" "),s("li",[e._v("value 是promise状态成功时的值，也就是resolve的参数, 包括各种数据类型, 也包括undefined/thenable或者是 promise")]),e._v(" "),s("li",[e._v("reason 是promise状态失败时的值, 也就是reject的参数, 表示拒绝的")]),e._v(" "),s("li",[e._v("exception  是一个使用throw抛出的异常值")])]),e._v(" "),s("h2",{attrs:{id:"规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#规范"}},[e._v("#")]),e._v(" 规范")]),e._v(" "),s("h3",{attrs:{id:"promise-status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promise-status"}},[e._v("#")]),e._v(" Promise Status")]),e._v(" "),s("p",[e._v("有三种状态")]),e._v(" "),s("ol",[s("li",[s("strong",[e._v("pending")]),e._v(" "),s("ol",[s("li",[e._v("初始的状态可以改变")]),e._v(" "),s("li",[e._v("一个Promise在实例化后，resolve/reject都处于这个状态")]),e._v(" "),s("li",[e._v("resolve：可以把pending改成fulfilled状态")]),e._v(" "),s("li",[e._v("reject：可以把pending改成reject状态")])])]),e._v(" "),s("li",[s("strong",[e._v("fulfilled")]),e._v(" "),s("ol",[s("li",[e._v("最状态，不可改变")]),e._v(" "),s("li",[e._v("一个promise被resolve后会变成这个状态")]),e._v(" "),s("li",[e._v("then之后返回的是新promise，必须有一个value值，不传是undefind")])])]),e._v(" "),s("li",[s("strong",[e._v("rejected")]),e._v(" "),s("ol",[s("li",[e._v("最状态，不可改变")]),e._v(" "),s("li",[e._v("一个promise被rejected后会变成这个状态")]),e._v(" "),s("li",[e._v("必须有一个reason值，不传是undefind")])])])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("状态流转")]),e._v(" "),s("p",[e._v("pending -> reslove(value) -> fulfilled")]),e._v(" "),s("p",[e._v("pending -> reject(reason) -> rejected")])]),e._v(" "),s("h3",{attrs:{id:"then方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#then方法"}},[e._v("#")]),e._v(" then方法")]),e._v(" "),s("p",[e._v("promise应该有一个then方法，用来访问最终结果")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("Promise"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("onFulfilled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("onRejected"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("ol",[s("li",[s("p",[e._v("参数要求")]),e._v(" "),s("ol",[s("li",[e._v("必须是函数类型，如果不是函数，应该被"),s("strong",[e._v("忽略")])])])]),e._v(" "),s("li",[s("p",[e._v("onFulfilled特性")]),e._v(" "),s("ol",[s("li",[e._v("promise变成fulfilled时，应该调用onFulfilled，参数是value")]),e._v(" "),s("li",[e._v("promise变成fulfilled之前不应该被调用")]),e._v(" "),s("li",[e._v("只能被调用一次(需要一个变量来限制执行次数)")])])]),e._v(" "),s("li",[s("p",[e._v("onRejected特性")]),e._v(" "),s("ol",[s("li",[e._v("promise变成rejected时，应该调用onRejected，参数是value")]),e._v(" "),s("li",[e._v("promise变成rejected之前不应该被调用")]),e._v(" "),s("li",[e._v("只能被调用一次(需要一个变量来限制执行次数)")])])]),e._v(" "),s("li",[s("p",[e._v("onFulfilled,onRejected执行环境应该在微任务里")]),e._v(" "),s("ul",[s("li",[e._v("queueMicrotask(()=>{})  来实现微任务调用")])])]),e._v(" "),s("li",[s("p",[e._v("then方法可调用多次（可以用数组去存）")]),e._v(" "),s("ol",[s("li",[e._v("promise状态变成fulfilled后，所有的onFulfilled回调都需要按照then的原始调用顺序执行")]),e._v(" "),s("li",[e._v("promise状态变成rejected后，所有的onRejected回调都需要按照then的原始调用顺序执行")])])]),e._v(" "),s("li",[s("p",[e._v("返回值")]),e._v(" "),s("ol",[s("li",[e._v("then方法的返回值应该是一个"),s("strong",[e._v("新的Promise")])])]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" promise1"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Promise")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" promise2"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("promise"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("cb1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("cb2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//最后的then是上一个.then返回的promise")]),e._v("\n")])])]),s("ol",[s("li",[e._v("onFulfilled或者onRejected执行结果为x，调用 "),s("strong",[e._v("resolvePromise()")])]),e._v(" "),s("li",[e._v("onFulfilled或者onRejected执行时报错了，promise2就需要被reject")]),e._v(" "),s("li",[e._v("onFulfilled如果不是一个函数，promise2以promise1的value，触发fulfilled")]),e._v(" "),s("li",[e._v("onRejected如果不是一个函数，promise2以promise1的reason，触发rejected")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("resolvePromise")])]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("resolvePromise")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("promise2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" resolve"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" reject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("ol",[s("li",[e._v("如果 promise2 和 x 相等，以 Tyeperror 作为 reason 去 reject promise。（reject TypeError）")]),e._v(" "),s("li",[e._v("如果 x 是一个 promsie\n"),s("ul",[s("li",[e._v("如果x是pending态，那么promise必须保持pending,直到 x 变成 fulfilled or rejected.")]),e._v(" "),s("li",[e._v("如果 x 被 fulfilled, 以相同的 value 去 fulfill promise。")]),e._v(" "),s("li",[e._v("如果 x 被 rejected, 以相同的 reason 去 reject promise。")])])]),e._v(" "),s("li",[e._v("否则，如果 x 是一个 object 或者 是一个 function\n"),s("ul",[s("li",[e._v("let then = x.then")]),e._v(" "),s("li",[e._v("如果取属性 x.then 会导致抛出异常 e，则以 e 为 reason reject promise。")]),e._v(" "),s("li",[e._v("如果 then 是一个函数，then.call(x, resolvePromiseFn, rejectPromise)，让 x 作为 this 调用它，第一个参数为 resolvePromise，第二个参数为 rejectPromise，然后：\n"),s("ul",[s("li",[e._v("resolvePromiseFn 的 入参是 y, 执行 resolvePromise(promise2, y, resolve, reject);")]),e._v(" "),s("li",[e._v("rejectPromise 的 入参是 r, reject promise with r.")]),e._v(" "),s("li",[e._v("如果 resolvePromise 和 rejectPromise 都被调用了，或多次调用同一参数，那么第一个调用优先，其他的调用都会被忽略。")]),e._v(" "),s("li",[e._v("如果调用then抛出异常e\n"),s("ul",[s("li",[e._v("如果 resolvePromise 或 rejectPromise 已经被调用，那么忽略它")]),e._v(" "),s("li",[e._v("否则， 把 e 作为 reason reject promise")])])])])]),e._v(" "),s("li",[e._v("如果 then 不是一个function. 将 x 作为参数执行 promise。")])])]),e._v(" "),s("li",[e._v("如果 x 不是一个对象或者函数，将 x 作为参数执行 promise。")])])])]),e._v(" "),s("h6",{attrs:{id:"结合代码来看会好很多"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结合代码来看会好很多"}},[e._v("#")]),e._v(" 结合代码来看会好很多")]),e._v(" "),s("h2",{attrs:{id:"实现一个promise"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现一个promise"}},[e._v("#")]),e._v(" 实现一个Promise")]),e._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[e._v("设置初始状态 status value reason")]),e._v(" "),s("li",[e._v("resolve / reject\n"),s("ol",[s("li",[e._v("更改status pedding -> fulfilled/rejected")]),e._v(" "),s("li",[e._v("入参 value/reason")])])]),e._v(" "),s("li",[e._v("promise构造函数的入参\n"),s("ol",[s("li",[e._v("入参是一个函数，函数接收两个参数(reslove,reject)")]),e._v(" "),s("li",[e._v("new Promise的时候，就要执行这个函数，并且有任何错误都要reject出去")])])]),e._v(" "),s("li",[e._v("then函数")])])])}),[],!1,null,null,null);t.default=n.exports}}]);