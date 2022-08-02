<template><div><h2 id="一、背景" tabindex="-1"><a class="header-anchor" href="#一、背景" aria-hidden="true">#</a> 一、背景</h2>
<p>运行SpringBoot项目后，使用Postman测试接口时，Idea的控制台有如下提示：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Initializing</span> <span class="token class-name">Spring</span> <span class="token class-name">DispatcherServlet</span> 'dispatcherServlet'
<span class="token class-name">Initializing</span> <span class="token class-name">Servlet</span> 'dispatcherServlet'
<span class="token class-name">Completed</span> initialization in <span class="token number">1</span> ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、原因分析" tabindex="-1"><a class="header-anchor" href="#二、原因分析" aria-hidden="true">#</a> 二、原因分析</h2>
<p>spring boot load-on-startup默认值是-1，项目启动时，默认不会初始化DispatcherServlet，也就是不会调用Servlet接口的init()方法。</p>
<h2 id="三、解决方法" tabindex="-1"><a class="header-anchor" href="#三、解决方法" aria-hidden="true">#</a> 三、解决方法</h2>
<p>将<strong>spring.mvc.servlet.load-on-startup</strong>设置成<strong>0或正整数</strong>，项目启动时执行初始化即可解决。</p>
<h3 id="方法1、在application-properties配置文件中添加如下配置" tabindex="-1"><a class="header-anchor" href="#方法1、在application-properties配置文件中添加如下配置" aria-hidden="true">#</a> 方法1、在application.properties配置文件中添加如下配置</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>spring.mvc.servlet.load-on-startup=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="方法2、在application-yml配置文件中添加如下配置" tabindex="-1"><a class="header-anchor" href="#方法2、在application-yml配置文件中添加如下配置" aria-hidden="true">#</a> 方法2、在application.yml配置文件中添加如下配置</h3>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">mvc</span><span class="token punctuation">:</span>
    <span class="token key atrule">servlet</span><span class="token punctuation">:</span>
      <span class="token key atrule">load-on-startup</span><span class="token punctuation">:</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法1和方法2等价于在 Spring MVC 项目的web.xml文件中添加如下配置：</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet</span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">></span></span>dispatcher<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-class</span><span class="token punctuation">></span></span>org.springframework.web.servlet.DispatcherServlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-class</span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>async-supported</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>async-supported</span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>load-on-startup</span><span class="token punctuation">></span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>load-on-startup</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-mapping</span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">></span></span>dispatcher<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url-pattern</span><span class="token punctuation">></span></span>/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url-pattern</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-mapping</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>写在最后</strong></p>
<p>重新运行项目后，调用接口，Idea控制台已无<strong>dispatcherServlet</strong>的相关提示，解决成功。</p>
</div></template>
