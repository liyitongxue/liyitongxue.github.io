<template><div><p>Vue是一套用于构建用户界面的渐进式JavaScript框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用（SPA）提供驱动。</p>
<!-- more -->
<p><strong>前言</strong></p>
<p>上一篇博文已经对Node.js的安装与配置进行了详细介绍，详见<a href="https://blog.csdn.net/qq_42006801/article/details/124830995" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qq_42006801/article/details/124830995<ExternalLinkIcon/></a></p>
<p>另外：文中项目存放的路径及项目名称可根据自身实际情况进行更改。</p>
<h1 id="一、vue-js简述" tabindex="-1"><a class="header-anchor" href="#一、vue-js简述" aria-hidden="true">#</a> 一、Vue.js简述</h1>
<p>  Vue是一套用于构建用户界面的渐进式JavaScript框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用（SPA）提供驱动。</p>
<h1 id="二、搭建vue脚手架" tabindex="-1"><a class="header-anchor" href="#二、搭建vue脚手架" aria-hidden="true">#</a> 二、搭建Vue脚手架</h1>
<h2 id="_1-直接用-script-标签引入" tabindex="-1"><a class="header-anchor" href="#_1-直接用-script-标签引入" aria-hidden="true">#</a> 1. 直接用 &lt;script&gt;标签引入</h2>
<p>直接下载并用&lt;script&gt;标签引入，Vue 会被注册为一个全局变量。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.jsdelivr.net/npm/vue/dist/vue.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-通过npm安装vue" tabindex="-1"><a class="header-anchor" href="#_2-通过npm安装vue" aria-hidden="true">#</a> 2. 通过NPM安装Vue</h2>
<p>在用 Vue 构建大型应用时推荐使用 NPM 安装。NPM 能很好地和诸如 webpack 或 Browserify 模块打包器配合使用。同时 Vue 也提供配套工具来开发单文件组件。</p>
<p>2.1 安装Vue脚手架</p>
<p>在Cmd命令行窗口中输入如下命令安装Vue脚手架。</p>
<div class="language-powershell ext-powershell line-numbers-mode"><pre v-pre class="language-powershell"><code>npm install @vue/<span class="token function">cli</span> <span class="token operator">-</span>g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p>
<div class="language-powershell ext-powershell line-numbers-mode"><pre v-pre class="language-powershell"><code>cnpm install @vue/<span class="token function">cli</span> <span class="token operator">-</span>g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当然前提是已安装配置了npm或者cnpm，如未安装可见博文：<a href="https://blog.csdn.net/qq_42006801/article/details/124830995" target="_blank" rel="noopener noreferrer">Node.js安装与配置（详细步骤）<ExternalLinkIcon/></a></p>
<p>执行cnpm install @vue/cli -g后如下图所示：
<img src="https://img-blog.csdnimg.cn/17137253d00748828e8ad4a019f9a1ed.png" alt="在这里插入图片描述">
2.2 查看安装的Vue版本</p>
<p>cmd命令行窗口输入vue -V查看@vue/cli是否安装成功</p>
<div class="language-powershell ext-powershell line-numbers-mode"><pre v-pre class="language-powershell"><code>vue <span class="token operator">-</span>V
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如下图所示，vue脚手架即安装成功
<img src="https://img-blog.csdnimg.cn/c9f729a4e85e42ae9190ac7964e9d8cc.png" alt="在这里插入图片描述"></p>
<h1 id="三、安装webpack及webpack-cli" tabindex="-1"><a class="header-anchor" href="#三、安装webpack及webpack-cli" aria-hidden="true">#</a> 三、安装webpack及webpack-cli</h1>
<h2 id="_1-安装webpack" tabindex="-1"><a class="header-anchor" href="#_1-安装webpack" aria-hidden="true">#</a> 1.安装webpack</h2>
<p>由于webpack5及以上的版本变动较大，所以如果是采用vue3创建vue项目，用webpack4的版本更能互相的兼容。此处安装webpack@4.42.0版本，命令如下：</p>
<div class="language-powershell ext-powershell line-numbers-mode"><pre v-pre class="language-powershell"><code>cnpm install webpack@4<span class="token punctuation">.</span>42<span class="token punctuation">.</span>0 <span class="token operator">-</span>g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装成功后，cmd命令行窗口如下图所示：
<img src="https://img-blog.csdnimg.cn/e4a49470a7e8485eb863114de16fed6f.png" alt="在这里插入图片描述"></p>
<h2 id="_2-安装webpack-cli" tabindex="-1"><a class="header-anchor" href="#_2-安装webpack-cli" aria-hidden="true">#</a> 2.安装webpack-cli</h2>
<p>**另外：**由于webpack的版本需要webpack-cli一起配合使用，执行如下命令安装webpack-cli：</p>
<div class="language-powershell ext-powershell line-numbers-mode"><pre v-pre class="language-powershell"><code>cnpm install webpack-<span class="token function">cli</span> <span class="token operator">-</span>g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装成功后，cmd命令行窗口如下图所示：
<img src="https://img-blog.csdnimg.cn/b7a1edf5ce9449b5aa4c14193f5727bf.png" alt="在这里插入图片描述"></p>
<h2 id="_3-检查是否安装成功" tabindex="-1"><a class="header-anchor" href="#_3-检查是否安装成功" aria-hidden="true">#</a> 3.检查是否安装成功</h2>
<p>cmd命令行窗口输入如下命令：</p>
<div class="language-powershell ext-powershell line-numbers-mode"><pre v-pre class="language-powershell"><code>webpack <span class="token operator">-</span>v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如下图所示，webpack和webpack-cli已经安装成功。
<img src="https://img-blog.csdnimg.cn/827df2f31b4a4fbfa9b850142666a808.png" alt="在这里插入图片描述"></p>
<h1 id="四、新建一个默认的vue项目" tabindex="-1"><a class="header-anchor" href="#四、新建一个默认的vue项目" aria-hidden="true">#</a> 四、新建一个默认的Vue项目</h1>
<h2 id="_1-创建项目" tabindex="-1"><a class="header-anchor" href="#_1-创建项目" aria-hidden="true">#</a> 1.创建项目</h2>
<p>首先进入【E:\codes\web】路径下（此处创建在E:\codes\web下，请根据自身实际情况更改），然后进入此文件夹的cmd命令行窗口。
<img src="https://img-blog.csdnimg.cn/7ade0b535e4c4103afba82cae775eeaa.png" alt="在这里插入图片描述">
执行如下命令创建一个名为【hello-vue】的Vue项目：</p>
<div class="language-powershell ext-powershell line-numbers-mode"><pre v-pre class="language-powershell"><code>vue create hello-vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/6d256abd39e64f2bae81e78393d52fb2.png" alt="在这里插入图片描述">
点击回车后，会自动下载所需文件（包括node_modules），创建成功后如下图所示：
<img src="https://img-blog.csdnimg.cn/29f8912a2efe482880607ec7ab32c7e9.png" alt="在这里插入图片描述"></p>
<h2 id="_2-启动项目" tabindex="-1"><a class="header-anchor" href="#_2-启动项目" aria-hidden="true">#</a> 2.启动项目</h2>
<p>首先进入【E:\codes\web\hello-vue】文件夹，然后进入此文件夹的cmd命令行窗口
<img src="https://img-blog.csdnimg.cn/546737a9ffcd4e3ab8db3d62951ca279.png" alt="在这里插入图片描述">执行如下指令运行该项目：</p>
<div class="language-powershell ext-powershell line-numbers-mode"><pre v-pre class="language-powershell"><code>npm run serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/aba2c989a8964430bc37d778cf43df0a.png" alt="在这里插入图片描述">
如上图项目启动成功，在浏览器打开http:#localhost:8080/进行访问，效果如下图所示：</p>
<p><img src="https://img-blog.csdnimg.cn/540885e8d8d84855bc06bd882555fc5c.png" alt="在这里插入图片描述">
<strong>写在最后</strong></p>
</div></template>
