<template><div><p>Dayjs is a lightweight JavaScript library that handles time and date.</p>
<p>Chinese official documents:<a href="https://dayjs.gitee.io/zh-CN/" target="_blank" rel="noopener noreferrer">https://dayjs.gitee.io/zh-CN/<ExternalLinkIcon/></a></p>
<!--more-->
<h2 id="_1-install-dayjs-package" tabindex="-1"><a class="header-anchor" href="#_1-install-dayjs-package" aria-hidden="true">#</a> 1 Install Dayjs Package</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install dayjs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-import-dayjs" tabindex="-1"><a class="header-anchor" href="#_2-import-dayjs" aria-hidden="true">#</a> 2 Import Dayjs</h2>
<p>In <code v-pre>main.js</code>file,add import dayjs from 'dayjs' to import dayjs,as shown in the following figure:</p>
<p><img src="http://files.liyitongxue.com/image-20220817182445897.png?watermark/1/image/a29kbzovL2xpeWl0b25neHVlLXNvdXRoL3dhdGVyLnBuZw==/dissolve/30/gravity/SouthEast/dx/8/dy/8" alt="image-20220817182445897"></p>
<h2 id="_3-add-test-vue" tabindex="-1"><a class="header-anchor" href="#_3-add-test-vue" aria-hidden="true">#</a> 3 Add test.vue</h2>
<p>create <code v-pre>test.vue</code>and add a test page in <code v-pre>index.js</code>,as shown in the following figure:</p>
<p><img src="http://files.liyitongxue.com/image-20220817183003203.png?watermark/1/image/a29kbzovL2xpeWl0b25neHVlLXNvdXRoL3dhdGVyLnBuZw==/dissolve/30/gravity/SouthEast/dx/8/dy/8" alt="image-20220817183003203"></p>
<p>add test.vue file below views/ package,The page code is as follows:</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	{{currentTime}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> dayjs <span class="token keyword">from</span> <span class="token string">'dayjs'</span><span class="token punctuation">;</span>
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">currentTime</span><span class="token operator">:</span> <span class="token function">dayjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'YYYY年MM月DD日 HH:mm:ss'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
				self<span class="token punctuation">.</span>currentTime <span class="token operator">=</span> <span class="token function">dayjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'YYYY年MM月DD日 HH:mm:ss'</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">//组件销毁时，清除定时器</span>
				<span class="token function">clearInterval</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>timer<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-test" tabindex="-1"><a class="header-anchor" href="#_4-test" aria-hidden="true">#</a> 4 Test</h2>
<p>Open this test address in the browser. Success:</p>
<p><img src="http://files.liyitongxue.com/image-20220817183223398.png?watermark/1/image/a29kbzovL2xpeWl0b25neHVlLXNvdXRoL3dhdGVyLnBuZw==/dissolve/30/gravity/SouthEast/dx/8/dy/8" alt="image-20220817183223398"></p>
<p><img src="http://files.liyitongxue.com/2022-08-17-18-35-37.gif?watermark/1/image/a29kbzovL2xpeWl0b25neHVlLXNvdXRoL3dhdGVyLnBuZw==/dissolve/30/gravity/SouthEast/dx/8/dy/8" alt="2022-08-17-18-35-37"></p>
</div></template>
