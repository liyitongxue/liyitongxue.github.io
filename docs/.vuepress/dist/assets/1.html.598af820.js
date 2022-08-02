import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as l,c as r,a as e,d as n,b as a,e as t,r as o}from"./app.e0df2d62.js";const c={},d=e("strong",null,"Preface",-1),p=a(" The installation and configuration of node.js have been introduced in detail in the last blog post. See"),h={href:"https://blog.csdn.net/qq_42006801/article/details/124830995",target:"_blank",rel:"noopener noreferrer"},u=a("https://blog.csdn.net/qq_42006801/article/details/124830995"),g=t(`<p>In addition, the storage path and project name of the project in the text can be changed according to their actual situation.</p><h2 id="\u4E00\u3001vue-js-sketch" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001vue-js-sketch" aria-hidden="true">#</a> \u4E00\u3001Vue.js Sketch</h2><p>\u2002\u2002Vue is a progressive JavaScript framework for building user interfaces. Unlike other large frameworks, Vue is designed to be applied layer by layer from the bottom up. Vue&#39;s core library only focuses on view layers, which is not only easy to use, but also easy to integrate with third-party libraries or existing projects. On the other hand, when combined with modern tool chains and various supporting class libraries, Vue is also fully capable of providing drivers for complex single page applications (SPA).</p><h2 id="\u4E8C\u3001build-vue-js" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001build-vue-js" aria-hidden="true">#</a> \u4E8C\u3001Build Vue.js</h2><h3 id="_1-direct-introduction-with-script-label" tabindex="-1"><a class="header-anchor" href="#_1-direct-introduction-with-script-label" aria-hidden="true">#</a> 1. Direct Introduction With&lt;script&gt;Label</h3><p>Direct download and introduction with&lt;script&gt;label,then Vue will be registered as a global variable.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://cdn.jsdelivr.net/npm/vue/dist/vue.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-install-vue-through-npm" tabindex="-1"><a class="header-anchor" href="#_2-install-vue-through-npm" aria-hidden="true">#</a> 2. Install Vue Through NPM</h3><p>NPM installation is recommended when building large applications with Vue NPM works well with module packers such as webpack or browserify Vue also provides supporting tools to develop single file components</p><p>2.1 Install Vue.js</p><p>Enter the following command in the CMD command line window to install Vue.js.</p><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>npm install @vue/<span class="token function">cli</span> <span class="token operator">-</span>g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Or</p><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>cnpm install @vue/<span class="token function">cli</span> <span class="token operator">-</span>g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,14),b=a("Of course, the premise is that NPM or cnpm has been installed and configured. If it is not installed, you can see the blog:"),m={href:"https://blog.csdn.net/qq_42006801/article/details/124830995",target:"_blank",rel:"noopener noreferrer"},f=a("Node.js\u5B89\u88C5\u4E0E\u914D\u7F6E\uFF08\u8BE6\u7EC6\u6B65\u9AA4\uFF09"),w=t(`<p>Execute cnpm install @vue/cli -g as shown in the following figure: <img src="https://img-blog.csdnimg.cn/17137253d00748828e8ad4a019f9a1ed.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"> 2.2 View the installed Vue version</p><p>CMD command line window, enter Vue -v to check whether @vue/cli is successfully installed</p><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>vue <span class="token operator">-</span>V
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>As shown in the figure below, Vue.js is installed successfully <img src="https://img-blog.csdnimg.cn/c9f729a4e85e42ae9190ac7964e9d8cc.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><h2 id="\u4E09\u3001install-webpack-webpack-cli" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001install-webpack-webpack-cli" aria-hidden="true">#</a> \u4E09\u3001Install webpack&amp;webpack-cli</h2><h3 id="_1-install-webpack" tabindex="-1"><a class="header-anchor" href="#_1-install-webpack" aria-hidden="true">#</a> 1.Install webpack</h3><p>Because the versions of webpack5 and above change greatly, if vue3 is used to create Vue projects, the versions of webpack4 are more compatible with each other. Install here webpack@4.42.0 Version, the command is as follows:</p><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>cnpm install webpack@4<span class="token punctuation">.</span>42<span class="token punctuation">.</span>0 <span class="token operator">-</span>g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After successful installation, the CMD command line window is shown in the following figure: <img src="https://img-blog.csdnimg.cn/e4a49470a7e8485eb863114de16fed6f.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><h3 id="_2-install-webpack-cli" tabindex="-1"><a class="header-anchor" href="#_2-install-webpack-cli" aria-hidden="true">#</a> 2.Install webpack-cli</h3><p>**In Addition:**Since the version of webpack needs to be used together with webpack cli, execute the following command to install webpack cli:</p><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>cnpm install webpack-<span class="token function">cli</span> <span class="token operator">-</span>g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After successful installation, the CMD command line window is shown in the following figure: <img src="https://img-blog.csdnimg.cn/b7a1edf5ce9449b5aa4c14193f5727bf.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><h3 id="_3-check-whether-the-installation-is-successful" tabindex="-1"><a class="header-anchor" href="#_3-check-whether-the-installation-is-successful" aria-hidden="true">#</a> 3.Check Whether The Installation Is Successful</h3><p>CMD command line window, enter the following command:</p><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>webpack <span class="token operator">-</span>v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>As shown in the figure below, webpack and webpack cli have been successfully installed. <img src="https://img-blog.csdnimg.cn/827df2f31b4a4fbfa9b850142666a808.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><h2 id="\u56DB\u3001create-a-default-vue-js-project" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001create-a-default-vue-js-project" aria-hidden="true">#</a> \u56DB\u3001Create A Default Vue.js Project</h2><h3 id="_1-create-project" tabindex="-1"><a class="header-anchor" href="#_1-create-project" aria-hidden="true">#</a> 1.Create Project</h3><p>First,Enter\u3010E:\\codes\\web\u3011route(I created in E:\\codes\\web,please change it according to your actual situation),then enter the CMD command line window of this folder. <img src="https://img-blog.csdnimg.cn/7ade0b535e4c4103afba82cae775eeaa.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"> Execute the following command to create a Vue project named [Hello Vue]:</p><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>vue create hello-vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/6d256abd39e64f2bae81e78393d52fb2.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"> After clicking enter, the required files (including node_modules) will be automatically downloaded. After the creation is successful, it is shown in the following figure: <img src="https://img-blog.csdnimg.cn/29f8912a2efe482880607ec7ab32c7e9.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><h3 id="_2-start-project" tabindex="-1"><a class="header-anchor" href="#_2-start-project" aria-hidden="true">#</a> 2.Start Project</h3><p>First,enter\u3010E:\\codes\\web\\hello-vue\u3011folder\uFF0CThen enter the CMD command line window of this folder <img src="https://img-blog.csdnimg.cn/546737a9ffcd4e3ab8db3d62951ca279.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0">Execute the following instructions to run the project:</p><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>npm run serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/aba2c989a8964430bc37d778cf43df0a.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"> As shown in the above figure, the project is successfully started. Open http:\\localhost:8080/ in the browser to access it. The effect is shown in the following figure:</p><p><img src="https://img-blog.csdnimg.cn/540885e8d8d84855bc06bd882555fc5c.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"><strong>The End</strong></p>`,27);function v(k,_){const s=o("ExternalLinkIcon");return l(),r("div",null,[e("p",null,[d,p,e("a",h,[u,n(s)])]),g,e("p",null,[b,e("a",m,[f,n(s)])]),w])}var V=i(c,[["render",v],["__file","1.html.vue"]]);export{V as default};
