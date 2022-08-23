<template><div><p>编辑ngnix的安装目录下的conf/nginx.conf文件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server {
　　listen 80;
　　server_name www.xxx.com xxx.com;
　　if ($host != 'www.xxx.com') {
　　rewrite ^/(.*)$ http://www.xxx.com/$1 permanent;
　　}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server {
　　listen 443;
　　server_name www.xxx.com xxx.com;
　　if ($host != 'www.xxx.com') {
　　rewrite ^/(.*)$ https://www.xxx.com/$1 permanent;
　　}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>其中xxx.com为您的网站地址</p>
</div>
<p>参考链接：<a href="https://blog.csdn.net/gdali/article/details/108941584" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/gdali/article/details/108941584<ExternalLinkIcon/></a></p>
</div></template>
