import{r as F,o as l,c as a,e,w as t,a as o,F as c,f as r,b as n,t as D}from"./app.a79a9890.js";const y=o(`<h1 id="scrollbar" tabindex="-1">Scrollbar <a class="header-anchor" href="#scrollbar" aria-hidden="true">#</a></h1><h2 id="vertical-scroll" tabindex="-1">Vertical scroll <a class="header-anchor" href="#vertical-scroll" aria-hidden="true">#</a></h2><details class="details custom-block"><summary>Click me to view the Vue code</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">el-scrollbar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">v-scroll</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">400px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item in 20</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scrollbar-demo-item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{ item }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">el-scrollbar</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details>`,3),i=o(`<div class="vp-code-group"><div class="tabs"><input type="radio" name="group-4n6zq" id="tab-savE67Q" checked="checked"><label for="tab-savE67Q">Python</label></div><div class="blocks"><div class="language-Python active"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">js_handle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">  const container = document.querySelector(&#39;#v-scroll .el-scrollbar__wrap&#39;)</span></span>
<span class="line"><span style="color:#C3E88D;">  container.scrollTop = 100</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 👆 The list scroll to top 100px</span></span>
<span class="line"><span style="color:#A6ACCD;">page</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">evaluate</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">js_handle</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div></div></div><h2 id="horizontal-scroll" tabindex="-1">Horizontal scroll <a class="header-anchor" href="#horizontal-scroll" aria-hidden="true">#</a></h2><details class="details custom-block"><summary>Click me to view the Vue code</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">el-scrollbar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">h-scroll</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scrollbar-flex-content</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item in 50</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scrollbar-demo-item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {{ item }}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">el-scrollbar</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details>`,3),d={class:"scrollbar-flex-content"},u=o(`<div class="vp-code-group"><div class="tabs"><input type="radio" name="group-YUgg0" id="tab-AD_aDle" checked="checked"><label for="tab-AD_aDle">Python</label></div><div class="blocks"><div class="language-Python active"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">js_handle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">  const container = document.querySelector(&#39;#h-scroll .el-scrollbar__wrap&#39;)</span></span>
<span class="line"><span style="color:#C3E88D;">  container.scrollLeft = 200</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 👈 The list scroll to left 200px</span></span>
<span class="line"><span style="color:#A6ACCD;">page</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">evaluate</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">js_handle</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div></div></div>`,1),b=JSON.parse('{"title":"Scrollbar","description":"","frontmatter":{},"headers":[{"level":2,"title":"Vertical scroll","slug":"vertical-scroll","link":"#vertical-scroll","children":[]},{"level":2,"title":"Horizontal scroll","slug":"horizontal-scroll","link":"#horizontal-scroll","children":[]}],"relativePath":"python/ele/scrollbar.md"}'),_={name:"python/ele/scrollbar.md"},m=Object.assign(_,{setup(C){return(h,A)=>{const p=F("el-scrollbar");return l(),a("div",null,[y,e(p,{id:"v-scroll",height:"400px"},{default:t(()=>[(l(),a(c,null,r(20,s=>n("p",{key:s,class:"scrollbar-demo-item"},D(s),1)),64))]),_:1}),i,e(p,{id:"h-scroll"},{default:t(()=>[n("div",d,[(l(),a(c,null,r(50,s=>n("p",{key:s,class:"scrollbar-demo-item"},D(s),1)),64))])]),_:1}),u])}}});export{b as __pageData,m as default};