import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.5f1d67d1.js";const t={},l=e(`<p>In the browser, if there are too many pages, there will be two scroll bars, horizontal and vertical, the default style is ugly, you can adjust it according to the style of the page.</p><h2 id="_1-cancel-scroll-bar" tabindex="-1"><a class="header-anchor" href="#_1-cancel-scroll-bar" aria-hidden="true">#</a> 1 Cancel Scroll Bar</h2><p>You can cancel the scroll bar display in the following two ways:</p><h3 id="_1-1-use-overflow-inside-css-to-unscroll" tabindex="-1"><a class="header-anchor" href="#_1-1-use-overflow-inside-css-to-unscroll" aria-hidden="true">#</a> 1.1 Use Overflow Inside CSS to Unscroll</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
body</span><span class="token punctuation">{</span>
    <span class="token comment">/* \u53BB\u6389\u6C34\u5E73\u6EDA\u52A8\u6761 */</span>
    <span class="token property">overflow-x</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token comment">/* \u53BB\u6389\u7AD6\u76F4\u6EDA\u52A8\u6761 */</span>
    <span class="token property">overflow-y</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token comment">/* \u53BB\u6389\u6C34\u5E73\u6EDA\u52A8\u6761\uFF0C\u663E\u793A\u7AD6\u76F4\u6EDA\u52A8\u6761 */</span>
    <span class="token property">overflow-x</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span><span class="token property">overflow-y</span><span class="token punctuation">:</span>scroll<span class="token punctuation">;</span>
    <span class="token comment">/* \u6C34\u5E73\u548C\u7AD6\u76F4\u65B9\u5411\u6EDA\u52A8\u6761\u5168\u90E8\u9690\u85CF */</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-on-the-body-tag-use-scroll-no-to-hide-the-horizontal-and-vertical-scroll-bars" tabindex="-1"><a class="header-anchor" href="#_1-2-on-the-body-tag-use-scroll-no-to-hide-the-horizontal-and-vertical-scroll-bars" aria-hidden="true">#</a> 1.2 On the body tag, use <code>scroll=&quot;no&quot;</code> to hide the horizontal and vertical scroll bars</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- \u8868\u793A\u5168\u90E8\u9690\u85CF --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span> <span class="token attr-name">scroll</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Scroll bars have the following four properties:</p><p>overflow-x : visible | auto | hidden | scroll</p><p>Visible: does not cut content and does not add scroll bars.</p><p>Auto: Cuts content and adds scroll bars when needed.</p><p>Hidden: Does not display content higher than the height of the object.</p><p>Scroll: Always displays the longitudinal scroll bar.</p><h2 id="_2-beautify-scroll-bar" tabindex="-1"><a class="header-anchor" href="#_2-beautify-scroll-bar" aria-hidden="true">#</a> 2 Beautify Scroll Bar</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* ::-webkit-scrollbar\u4EC5\u4EC5\u5728\u652F\u6301WebKit\u7684\u6D4F\u89C8\u5668 (\u4F8B\u5982, \u8C37\u6B4CChrome, \u82F9\u679CSafari)\u53EF\u4EE5\u4F7F\u7528 */</span>

<span class="token comment">/* \u6574\u4E2A\u6EDA\u52A8\u6761 */</span>
<span class="token selector">::-webkit-scrollbar</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">/* \u6EDA\u52A8\u6761\u4E0A\u7684\u6309\u94AE (\u4E0A\u4E0B\u7BAD\u5934) */</span>
<span class="token selector">::-webkit-scrollbar-button</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">/* \u6EDA\u52A8\u6761\u4E0A\u7684\u6EDA\u52A8\u6ED1\u5757 */</span>
<span class="token selector">::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">/* \u6EDA\u52A8\u6761\u8F68\u9053 */</span>
<span class="token selector">::-webkit-scrollbar-track</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">/* \u6EDA\u52A8\u6761\u6CA1\u6709\u6ED1\u5757\u7684\u8F68\u9053\u90E8\u5206 */</span>
<span class="token selector">::-webkit-scrollbar-track-piece</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">/* \u5F53\u540C\u65F6\u6709\u5782\u76F4\u6EDA\u52A8\u6761\u548C\u6C34\u5E73\u6EDA\u52A8\u6761\u65F6\u4EA4\u6C47\u7684\u90E8\u5206 */</span>
<span class="token selector">::-webkit-scrollbar-corner</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-the-instance-of-beautify" tabindex="-1"><a class="header-anchor" href="#_2-1-the-instance-of-beautify" aria-hidden="true">#</a> 2.1 The Instance Of Beautify</h3><h4 id="_2-1-1-css-code" tabindex="-1"><a class="header-anchor" href="#_2-1-1-css-code" aria-hidden="true">#</a> 2.1.1 CSS Code</h4><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>&lt;style&gt;
  <span class="token comment">/* \u6EDA\u52A8\u6761\u4E0A\u7684\u6EDA\u52A8\u6ED1\u5757 */</span>
  <span class="token selector">::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #55abe6<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/* \u6574\u4E2A\u6EDA\u52A8\u6761 */</span>
  <span class="token selector">::-webkit-scrollbar</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/* \u6EDA\u52A8\u6761\u6CA1\u6709\u6ED1\u5757\u7684\u8F68\u9053\u90E8\u5206 */</span>
  <span class="token selector">::-webkit-scrollbar-track-piece</span> <span class="token punctuation">{</span>
      <span class="token property">border-radius</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> .1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-2-screenshot-in-the-browser" tabindex="-1"><a class="header-anchor" href="#_2-1-2-screenshot-in-the-browser" aria-hidden="true">#</a> 2.1.2 Screenshot In the Browser</h4><p><img src="http://files.liyitongxue.com/image-20220819162448075.png" alt="image-20220819162448075"></p>`,20),c=[l];function o(i,p){return s(),a("div",null,c)}var u=n(t,[["render",o],["__file","3.html.vue"]]);export{u as default};
