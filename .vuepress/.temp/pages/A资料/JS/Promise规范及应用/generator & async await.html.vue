<template><div><h1 id="generator-和-async-简介" tabindex="-1"><a class="header-anchor" href="#generator-和-async-简介" aria-hidden="true">#</a> Generator 和 Async 简介</h1>
<p>在讲Generator之前, 咱们要来先了解另外一个概念, 迭代器.</p>
<h2 id="迭代器-iterator" tabindex="-1"><a class="header-anchor" href="#迭代器-iterator" aria-hidden="true">#</a> 迭代器 Iterator</h2>
<p>迭代器Iterator 是 ES6 引入的一种新的遍历机制，同时也是一种特殊对象，它具有一些专门为迭代过程设计的专有接口。</p>
<p>每个迭代器对象都有一个next()方法，每次调用都返回一个当前结果对象。当前结果对象中有两个属性：</p>
<ol>
<li>
<p>value：当前属性的值</p>
</li>
<li>
<p>done：用于判断是否遍历结束，当没有更多可返回的数据时，返回true</p>
</li>
</ol>
<p>每调用一次next()方法，都会返回下一个可用的值，直到遍历结束。</p>
<h2 id="生成器-generator" tabindex="-1"><a class="header-anchor" href="#生成器-generator" aria-hidden="true">#</a> 生成器 Generator</h2>
<p>生成器是一种返回迭代器的函数，通过function关键字后的星号(*)来表示，函数中会用到新的关键字yield。星号可以紧挨着function关键字，也可以在中间添加一个空格.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">generator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">yield</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">let</span> g <span class="token operator">=</span> <span class="token function">generator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {value: 1, done: false}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {value: 2, done: false}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {value: 3, done: false}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {value: undefined, done: true}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h3>
<ol>
<li>每当执行完一条yield语句后函数就会自动停止执行, 直到再次调用next();</li>
<li>yield关键字只可在生成器内部使用，在其他地方使用会导致程序抛出错误;</li>
<li>可以通过函数表达式来创建生成器, 但是不能使用箭头函数
<code v-pre>let generator = function *(){}</code></li>
</ol>
<h2 id="async-和-await" tabindex="-1"><a class="header-anchor" href="#async-和-await" aria-hidden="true">#</a> Async 和 Await</h2>
<p>这个就比较简单了, 非常常用, 就不多赘述了.</p>
<p>但是同学们想不想知道怎么封装一个函数, 能够让generator自动执行到完毕?</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">longTimeFn</span><span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">asyncFunc</span><span class="token punctuation">(</span><span class="token parameter">generator</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> iterator <span class="token operator">=</span> <span class="token function">generator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 接下来要执行next</span>
    <span class="token comment">// data为第一次执行之后的返回结果，用于传给第二次执行</span>
    <span class="token keyword">const</span> <span class="token function-variable function">next</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span>
            value<span class="token punctuation">,</span>
            done
        <span class="token punctuation">}</span> <span class="token operator">=</span> iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 第二次执行，并接收第一次的请求结果 value 和 done</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>done<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token comment">// 执行完毕, 直接返回</span>
        <span class="token comment">// 第一次执行next时，yield返回的 promise实例 赋值给了 value</span>
        value<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token function">next</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 当第一次value 执行完毕且成功时，执行下一步(并把第一次的结果传递下一步)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">asyncFunc</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">longTimeFn</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    data <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">longTimeFn</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
