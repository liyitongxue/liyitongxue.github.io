<template><div><p>在浏览器中，如网页内容过多则会有横向和纵向两条滚动条，默认样式比较丑，可根据网页样式对其进行调整。</p>
<!-- more -->
<h2 id="_1-滚动条取消" tabindex="-1"><a class="header-anchor" href="#_1-滚动条取消" aria-hidden="true">#</a> 1 滚动条取消</h2>
<p>取消显示滚动条共有如下两种方式：</p>
<h3 id="_1-1-在css内使用overflow取消滚动条" tabindex="-1"><a class="header-anchor" href="#_1-1-在css内使用overflow取消滚动条" aria-hidden="true">#</a> 1.1 在css内使用overflow取消滚动条</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">&lt;style>
body</span><span class="token punctuation">{</span>
    <span class="token comment">/* 去掉水平滚动条 */</span>
    <span class="token property">overflow-x</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token comment">/* 去掉竖直滚动条 */</span>
    <span class="token property">overflow-y</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token comment">/* 去掉水平滚动条，显示竖直滚动条 */</span>
    <span class="token property">overflow-x</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span><span class="token property">overflow-y</span><span class="token punctuation">:</span>scroll<span class="token punctuation">;</span>
    <span class="token comment">/* 水平和竖直方向滚动条全部隐藏 */</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-在body标签使用scroll-no-隐藏水平和竖直方向滚动条" tabindex="-1"><a class="header-anchor" href="#_1-2-在body标签使用scroll-no-隐藏水平和竖直方向滚动条" aria-hidden="true">#</a> 1.2 在body标签使用<code v-pre>scroll=&quot;no&quot;</code>隐藏水平和竖直方向滚动条</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 表示全部隐藏 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span> <span class="token attr-name">scroll</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>滚动条具有以下四种属性：</p>
<p>overflow-x : visible | auto | hidden | scroll</p>
<p>visible：不剪切内容也不添加滚动条。</p>
<p>auto：在需要时剪切内容并添加滚动条。</p>
<p>hidden：不显示超过对象高度的内容。</p>
<p>scroll：总是显示纵向滚动条。</p>
<h2 id="_2-滚动条美化" tabindex="-1"><a class="header-anchor" href="#_2-滚动条美化" aria-hidden="true">#</a> 2 滚动条美化</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* ::-webkit-scrollbar仅仅在支持WebKit的浏览器 (例如, 谷歌Chrome, 苹果Safari)可以使用 */</span>

<span class="token comment">/* 整个滚动条 */</span>
<span class="token selector">::-webkit-scrollbar</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">/* 滚动条上的按钮 (上下箭头) */</span>
<span class="token selector">::-webkit-scrollbar-button</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">/* 滚动条上的滚动滑块 */</span>
<span class="token selector">::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">/* 滚动条轨道 */</span>
<span class="token selector">::-webkit-scrollbar-track</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">/* 滚动条没有滑块的轨道部分 */</span>
<span class="token selector">::-webkit-scrollbar-track-piece</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">/* 当同时有垂直滚动条和水平滚动条时交汇的部分 */</span>
<span class="token selector">::-webkit-scrollbar-corner</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-美化实例" tabindex="-1"><a class="header-anchor" href="#_2-1-美化实例" aria-hidden="true">#</a> 2.1 美化实例</h3>
<h4 id="_2-1-1-css代码" tabindex="-1"><a class="header-anchor" href="#_2-1-1-css代码" aria-hidden="true">#</a> 2.1.1 CSS代码</h4>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>&lt;style>
  <span class="token comment">/* 滚动条上的滚动滑块 */</span>
  <span class="token selector">::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #55abe6<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/* 整个滚动条 */</span>
  <span class="token selector">::-webkit-scrollbar</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/* 滚动条没有滑块的轨道部分 */</span>
  <span class="token selector">::-webkit-scrollbar-track-piece</span> <span class="token punctuation">{</span>
      <span class="token property">border-radius</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> .1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
&lt;/style>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-2-浏览器截图" tabindex="-1"><a class="header-anchor" href="#_2-1-2-浏览器截图" aria-hidden="true">#</a> 2.1.2 浏览器截图</h4>
<p><img src="http://files.liyitongxue.com/image-20220819162448075.png" alt="image-20220819162448075"></p>
</div></template>
