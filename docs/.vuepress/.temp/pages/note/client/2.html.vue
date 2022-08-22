<template><div><p>html禁止对元素拖拽、选择和鼠标右键操作，使得用户在浏览web页面时不能拖拽、右键图片，优化体验。
也可在文字标签上使用，使用户鼠标移入文字时，鼠标不变为选中状态（即鼠标样式变为：I）</p>
<!-- more -->
<h2 id="_1-禁止拖拽、鼠标右键" tabindex="-1"><a class="header-anchor" href="#_1-禁止拖拽、鼠标右键" aria-hidden="true">#</a> 1 禁止拖拽、鼠标右键</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
	<span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>图片地址<span class="token punctuation">"</span></span>
	<span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>unselectable<span class="token punctuation">"</span></span>
	<span class="token attr-name">draggable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
	<span class="token attr-name">oncontextmenu</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>return false;<span class="token punctuation">"</span></span>
 <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>其中<code v-pre>class=&quot;unselectable&quot;</code>是添加一个名为<code v-pre>unselectable</code>的CSS类，<code v-pre>draggable=&quot;false&quot;</code>为禁止拖拽，<code v-pre>oncontextmenu=&quot;return false;&quot;</code>为禁止鼠标右键。</p>
</div>
<h2 id="_2-添加css属性禁止选中" tabindex="-1"><a class="header-anchor" href="#_2-添加css属性禁止选中" aria-hidden="true">#</a> 2 添加css属性禁止选中</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">&lt;style>
	.unselectable</span> <span class="token punctuation">{</span>
	  <span class="token property">-moz-user-select</span><span class="token punctuation">:</span> -moz-none<span class="token punctuation">;</span>
	  <span class="token property">-khtml-user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	  <span class="token property">-webkit-user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	  <span class="token property">-o-user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	  <span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
&lt;style>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考链接：<a href="https://blog.csdn.net/weixin_45066149/article/details/119520229" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/weixin_45066149/article/details/119520229<ExternalLinkIcon/></a></p>
<p>另外：Vue.js可在元素标签内添加<code v-pre>@dragstart.prevent</code>、<code v-pre>@selectstart.prevent</code>阻止拖拽、选择。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">@dragstart.prevent</span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">@selectstart.prevent</span><span class="token punctuation">></span></span>Copyright © 2021-2022 LIYITONGXUE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
