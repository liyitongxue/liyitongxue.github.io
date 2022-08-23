<template><div><p>In the browser, if there are too many pages, there will be two scroll bars, horizontal and vertical, the default style is ugly, you can adjust it according to the style of the page.</p>
<!-- more -->
<h2 id="_1-cancel-scroll-bar" tabindex="-1"><a class="header-anchor" href="#_1-cancel-scroll-bar" aria-hidden="true">#</a> 1 Cancel Scroll Bar</h2>
<p>You can cancel the scroll bar display in the following two ways:</p>
<h3 id="_1-1-use-overflow-inside-css-to-unscroll" tabindex="-1"><a class="header-anchor" href="#_1-1-use-overflow-inside-css-to-unscroll" aria-hidden="true">#</a> 1.1 Use Overflow Inside CSS to Unscroll</h3>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-on-the-body-tag-use-scroll-no-to-hide-the-horizontal-and-vertical-scroll-bars" tabindex="-1"><a class="header-anchor" href="#_1-2-on-the-body-tag-use-scroll-no-to-hide-the-horizontal-and-vertical-scroll-bars" aria-hidden="true">#</a> 1.2 On the body tag, use <code v-pre>scroll=&quot;no&quot;</code> to hide the horizontal and vertical scroll bars</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 表示全部隐藏 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span> <span class="token attr-name">scroll</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Scroll bars have the following four properties:</p>
<p>overflow-x : visible | auto | hidden | scroll</p>
<p>Visible: does not cut content and does not add scroll bars.</p>
<p>Auto: Cuts content and adds scroll bars when needed.</p>
<p>Hidden: Does not display content higher than the height of the object.</p>
<p>Scroll: Always displays the longitudinal scroll bar.</p>
<h2 id="_2-beautify-scroll-bar" tabindex="-1"><a class="header-anchor" href="#_2-beautify-scroll-bar" aria-hidden="true">#</a> 2 Beautify Scroll Bar</h2>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-the-instance-of-beautify" tabindex="-1"><a class="header-anchor" href="#_2-1-the-instance-of-beautify" aria-hidden="true">#</a> 2.1 The Instance Of Beautify</h3>
<h4 id="_2-1-1-css-code" tabindex="-1"><a class="header-anchor" href="#_2-1-1-css-code" aria-hidden="true">#</a> 2.1.1 CSS Code</h4>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-2-screenshot-in-the-browser" tabindex="-1"><a class="header-anchor" href="#_2-1-2-screenshot-in-the-browser" aria-hidden="true">#</a> 2.1.2 Screenshot In the Browser</h4>
<p><img src="http://files.liyitongxue.com/image-20220819162448075.png" alt="image-20220819162448075"></p>
</div></template>
