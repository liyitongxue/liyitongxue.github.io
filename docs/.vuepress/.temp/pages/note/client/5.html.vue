<template><div><p>dayjs是一个轻量的处理时间和日期的 JavaScript 库。国内官方文档：<a href="https://dayjs.gitee.io/zh-CN/" target="_blank" rel="noopener noreferrer">https://dayjs.gitee.io/zh-CN/<ExternalLinkIcon/></a></p>
<!--more-->
<h2 id="_1-安装dayjs包" tabindex="-1"><a class="header-anchor" href="#_1-安装dayjs包" aria-hidden="true">#</a> 1 安装dayjs包</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install dayjs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-导入dayjs" tabindex="-1"><a class="header-anchor" href="#_2-导入dayjs" aria-hidden="true">#</a> 2 导入dayjs</h2>
<p>在vue项目的<code v-pre>main.js</code>文件中添加import dayjs from 'dayjs'导入dayjs，如下图所示：</p>
<p><img src="http://files.liyitongxue.com/image-20220817182445897.png?watermark/1/image/a29kbzovL2xpeWl0b25neHVlLXNvdXRoL3dhdGVyLnBuZw==/dissolve/30/gravity/SouthEast/dx/8/dy/8" alt="image-20220817182445897"></p>
<h2 id="_3-添加test-vue" tabindex="-1"><a class="header-anchor" href="#_3-添加test-vue" aria-hidden="true">#</a> 3 添加test.vue</h2>
<p>创建<code v-pre>test.vue</code>并在<code v-pre>index.js</code>中添加test页面,，如下图所示：</p>
<p><img src="http://files.liyitongxue.com/image-20220817183003203.png?watermark/1/image/a29kbzovL2xpeWl0b25neHVlLXNvdXRoL3dhdGVyLnBuZw==/dissolve/30/gravity/SouthEast/dx/8/dy/8" alt="image-20220817183003203"></p>
<p>在views/下添加test.vue文件，其页面代码如下：</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-测试" tabindex="-1"><a class="header-anchor" href="#_4-测试" aria-hidden="true">#</a> 4 测试</h2>
<p>在浏览器中打开此test地址，成功:</p>
<p><img src="http://files.liyitongxue.com/image-20220817183223398.png?watermark/1/image/a29kbzovL2xpeWl0b25neHVlLXNvdXRoL3dhdGVyLnBuZw==/dissolve/30/gravity/SouthEast/dx/8/dy/8" alt="image-20220817183223398"></p>
<p><img src="http://files.liyitongxue.com/2022-08-17-18-35-37.gif?watermark/1/image/a29kbzovL2xpeWl0b25neHVlLXNvdXRoL3dhdGVyLnBuZw==/dissolve/30/gravity/SouthEast/dx/8/dy/8" alt="2022-08-17-18-35-37"></p>
</div></template>
