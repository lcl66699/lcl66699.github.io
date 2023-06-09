<template><div><h1 id="promisea-规范" tabindex="-1"><a class="header-anchor" href="#promisea-规范" aria-hidden="true">#</a> PromiseA+规范</h1>
<p>讲解PromiseA+规范前, 咱们先来了解一下这些术语, 以便在后续提到的时候有明确且统一的概念.</p>
<h2 id="术语" tabindex="-1"><a class="header-anchor" href="#术语" aria-hidden="true">#</a> 术语</h2>
<ol>
<li>promise 是一个有then方法的对象或者是函数，行为遵循本规范</li>
<li>thenable 是一个有then方法的对象或者是函数</li>
<li>value 是promise状态成功时的值，也就是resolve的参数, 包括各种数据类型, 也包括undefined/thenable或者是 promise</li>
<li>reason 是promise状态失败时的值, 也就是reject的参数, 表示拒绝的原因</li>
<li>exception 是一个使用throw抛出的异常值</li>
</ol>
<h2 id="规范" tabindex="-1"><a class="header-anchor" href="#规范" aria-hidden="true">#</a> 规范</h2>
<p>接下来分几部分来讲解PromiseA+规范.</p>
<h3 id="promise-states" tabindex="-1"><a class="header-anchor" href="#promise-states" aria-hidden="true">#</a> Promise States</h3>
<p>promise应该有三种状态. 要注意他们之间的流转关系.</p>
<ol>
<li>
<p>pending</p>
<p>1.1 初始的状态, 可改变.
1.2 一个promise在resolve或者reject前都处于这个状态。
1.3 可以通过 resolve -&gt; fulfilled 状态;
1.4 可以通过 reject -&gt; rejected 状态;</p>
</li>
<li>
<p>fulfilled</p>
<p>2.1 最终态, 不可变.
2.2 一个promise被resolve后会变成这个状态.
2.3 必须拥有一个value值</p>
</li>
<li>
<p>rejected</p>
<p>3.1 最终态, 不可变.
3.2 一个promise被reject后会变成这个状态
3.3 必须拥有一个reason</p>
</li>
</ol>
<p>Tips: 总结一下, 就是promise的状态流转是这样的</p>
<p>pending -&gt; resolve(value) -&gt; fulfilled
pending -&gt; reject(reason) -&gt; rejected</p>
<p>看一下图, 可能会更清晰一点, https://www.processon.com/diagraming/606569d1e401fd13004977d2</p>
<h3 id="then" tabindex="-1"><a class="header-anchor" href="#then" aria-hidden="true">#</a> then</h3>
<p>promise应该提供一个then方法, 用来访问最终的结果, 无论是value还是reason.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>onFulfilled<span class="token punctuation">,</span> onRejected<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol>
<li>
<p>参数要求</p>
<p>1.1 onFulfilled 必须是函数类型, 如果不是函数, 应该被忽略.
1.2 onRejected 必须是函数类型, 如果不是函数, 应该被忽略.</p>
</li>
<li>
<p>onFulfilled 特性</p>
<p>2.1 在promise变成 fulfilled 时，应该调用 onFulfilled, 参数是value
2.2 在promise变成 fulfilled 之前, 不应该被调用.
2.3 只能被调用一次(所以在实现的时候需要一个变量来限制执行次数)</p>
</li>
<li>
<p>onRejected 特性</p>
<p>3.1 在promise变成 rejected 时，应该调用 onRejected, 参数是reason
3.2 在promise变成 rejected 之前, 不应该被调用.
3.3 只能被调用一次(所以在实现的时候需要一个变量来限制执行次数)</p>
</li>
<li>
<p>onFulfilled 和 onRejected 应该是微任务</p>
<p>这里用queueMicrotask来实现微任务的调用.</p>
</li>
<li>
<p>then方法可以被调用多次</p>
<p>5.1 promise状态变成 fulfilled 后，所有的 onFulfilled 回调都需要按照then的顺序执行, 也就是按照注册顺序执行(所以在实现的时候需要一个数组来存放多个onFulfilled的回调)
5.2 promise状态变成 rejected 后，所有的 onRejected 回调都需要按照then的顺序执行, 也就是按照注册顺序执行(所以在实现的时候需要一个数组来存放多个onRejected的回调)</p>
</li>
<li>
<p>返回值</p>
<p>then 应该返回一个promise</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>promise2 <span class="token operator">=</span> promise1<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>onFulfilled<span class="token punctuation">,</span> onRejected<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>6.1 onFulfilled 或 onRejected 执行的结果为x, 调用 resolvePromise( 这里大家可能难以理解, 可以先保留疑问, 下面详细讲一下resolvePromise是什么东西 )
6.2 如果 onFulfilled 或者 onRejected 执行时抛出异常e, promise2需要被reject
6.3 如果 onFulfilled 不是一个函数, promise2 以promise1的value 触发fulfilled
6.4 如果 onRejected 不是一个函数, promise2 以promise1的reason 触发rejected</p>
</li>
<li>
<p>resolvePromise</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">resolvePromise</span><span class="token punctuation">(</span>promise2<span class="token punctuation">,</span> x<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>7.1 如果 promise2 和 x 相等，那么 reject TypeError
7.2 如果 x 是一个 promsie
如果x是pending态，那么promise必须要在pending,直到 x 变成 fulfilled or rejected.
如果 x 被 fulfilled, fulfill promise with the same value.
如果 x 被 rejected, reject promise with the same reason.
7.3 如果 x 是一个 object 或者 是一个 function
let then = x.then.
如果 x.then 这步出错，那么 reject promise with e as the reason.
如果 then 是一个函数，then.call(x, resolvePromiseFn, rejectPromise)
resolvePromiseFn 的 入参是 y, 执行 resolvePromise(promise2, y, resolve, reject);
rejectPromise 的 入参是 r, reject promise with r.
如果 resolvePromise 和 rejectPromise 都调用了，那么第一个调用优先，后面的调用忽略。
如果调用then抛出异常e
如果 resolvePromise 或 rejectPromise 已经被调用，那么忽略
则，reject promise with e as the reason
如果 then 不是一个function. fulfill promise with x.</p>
<p>这段描述看起来非常的空洞乏味, 最重要的是看不懂！ 所以待会实现代码的时候, 同学们注意一下resolvePromise函数具体的实现, 结合代码来看会好很多.</p>
</li>
</ol>
</div></template>
