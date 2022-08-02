import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as s,e as t}from"./app.37fe4f84.js";const e={},l=t(`<h2 id="\u4E00\u3001background" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001background" aria-hidden="true">#</a> \u4E00\u3001Background</h2><p>After running the springboot project, when using postman to test the interface, the console of idea has the following prompt:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Initializing</span> <span class="token class-name">Spring</span> <span class="token class-name">DispatcherServlet</span> &#39;dispatcherServlet&#39;
<span class="token class-name">Initializing</span> <span class="token class-name">Servlet</span> &#39;dispatcherServlet&#39;
<span class="token class-name">Completed</span> initialization in <span class="token number">1</span> ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C\u3001cause-analysis" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001cause-analysis" aria-hidden="true">#</a> \u4E8C\u3001Cause Analysis</h2><p>The default value of spring boot load on startup is -1. When the project is started, the dispatcherservlet will not be initialized by default, that is, the init () method of the servlet interface will not be called.</p><h2 id="\u4E09\u3001resolvent" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001resolvent" aria-hidden="true">#</a> \u4E09\u3001Resolvent</h2><p>Set <strong>spring.mvc.servlet.load-on-startup</strong> to <strong>0 or a positive integer</strong>, and execute initialization when the project starts.</p><h3 id="method1\u3001add-the-following-configuration-in-the-application-properties-configuration-file" tabindex="-1"><a class="header-anchor" href="#method1\u3001add-the-following-configuration-in-the-application-properties-configuration-file" aria-hidden="true">#</a> Method1\u3001Add the following configuration in the application.properties configuration file</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>spring.mvc.servlet.load-on-startup=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="method2\u3001add-the-following-configuration-in-the-application-yml-configuration-file" tabindex="-1"><a class="header-anchor" href="#method2\u3001add-the-following-configuration-in-the-application-yml-configuration-file" aria-hidden="true">#</a> Method2\u3001Add the following configuration in the application.yml configuration file</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">mvc</span><span class="token punctuation">:</span>
    <span class="token key atrule">servlet</span><span class="token punctuation">:</span>
      <span class="token key atrule">load-on-startup</span><span class="token punctuation">:</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Methods 1 and 2 are equivalent to adding the following configuration in the web.xml file of the spring MVC project:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet</span><span class="token punctuation">&gt;</span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">&gt;</span></span>dispatcher<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">&gt;</span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-class</span><span class="token punctuation">&gt;</span></span>org.springframework.web.servlet.DispatcherServlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-class</span><span class="token punctuation">&gt;</span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>async-supported</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>async-supported</span><span class="token punctuation">&gt;</span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>load-on-startup</span><span class="token punctuation">&gt;</span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>load-on-startup</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-mapping</span><span class="token punctuation">&gt;</span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">&gt;</span></span>dispatcher<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">&gt;</span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url-pattern</span><span class="token punctuation">&gt;</span></span>/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url-pattern</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-mapping</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>The End</strong></p><p>After re running the project, call the interface, and the idea console has no relevant prompt of <strong>dispatcherservlet</strong>, which is solved successfully.</p>`,15),p=[l];function i(o,c){return a(),s("div",null,p)}var d=n(e,[["render",i],["__file","1.html.vue"]]);export{d as default};
