import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as r,a as e,d as a,e as l,b as n,r as c}from"./app.82c47ead.js";const d={},o=l(`<p>\u7F16\u8F91ngnix\u7684\u5B89\u88C5\u76EE\u5F55\u4E0B\u7684conf/nginx.conf\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server {
\u3000\u3000listen 80;
\u3000\u3000server_name www.xxx.com xxx.com;
\u3000\u3000if ($host != &#39;www.xxx.com&#39;) {
\u3000\u3000rewrite ^/(.*)$ http://www.xxx.com/$1 permanent;
\u3000\u3000}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server {
\u3000\u3000listen 443;
\u3000\u3000server_name www.xxx.com xxx.com;
\u3000\u3000if ($host != &#39;www.xxx.com&#39;) {
\u3000\u3000rewrite ^/(.*)$ https://www.xxx.com/$1 permanent;
\u3000\u3000}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5176\u4E2Dxxx.com\u4E3A\u60A8\u7684\u7F51\u7AD9\u5730\u5740</p></div>`,4),v=n("\u53C2\u8003\u94FE\u63A5\uFF1A"),m={href:"https://blog.csdn.net/gdali/article/details/108941584",target:"_blank",rel:"noopener noreferrer"},x=n("https://blog.csdn.net/gdali/article/details/108941584");function u(p,_){const i=c("ExternalLinkIcon");return t(),r("div",null,[o,e("p",null,[v,e("a",m,[x,a(i)])])])}var h=s(d,[["render",u],["__file","4.html.vue"]]);export{h as default};
