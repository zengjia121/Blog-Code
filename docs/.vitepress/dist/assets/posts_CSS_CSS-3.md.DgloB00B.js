import{_ as t,c as a,o as e,a9 as i}from"./chunks/framework.G_nFLsES.js";const o="/assets/blog-2024-04-08-21-52-37.DhcF6WmO.png",r="/assets/blog-2024-04-08-21-47-04.D4SXqaY1.png",_=JSON.parse('{"title":"position 布局","description":"","frontmatter":{"title":"position 布局","tags":["面试","CSS"],"categories":[["面试","CSS"]],"abbrlink":"7591b14f","date":"2024-04-08T21:38:54.000Z"},"headers":[],"relativePath":"posts/CSS/CSS-3.md","filePath":"posts/CSS/CSS-3.md","lastUpdated":null}'),l={name:"posts/CSS/CSS-3.md"},d=i('<h1 id="position-布局" tabindex="-1">Position 布局 <a class="header-anchor" href="#position-布局" aria-label="Permalink to &quot;Position 布局&quot;">​</a></h1><ul><li><a href="#position-布局">Position 布局</a><ul><li><a href="#html-中的布局方式">HTML 中的布局方式</a></li><li><a href="#定位布局">定位布局</a><ul><li><a href="#position-可选参数">position 可选参数</a></li><li><a href="#static">static</a></li><li><a href="#absolute">absolute</a></li><li><a href="#relative">relative</a></li><li><a href="#fixed">fixed</a></li><li><a href="#sticky了解即可兼容性差ie-不支持">sticky（了解即可，兼容性差，IE 不支持</a></li></ul></li></ul></li></ul><h2 id="html-中的布局方式" tabindex="-1">HTML 中的布局方式 <a class="header-anchor" href="#html-中的布局方式" aria-label="Permalink to &quot;HTML 中的布局方式&quot;">​</a></h2><p>HTML 中的两大元素 : 块级元素、内联元素</p><table><thead><tr><th>常见块级元素</th><th>常见内联元素</th></tr></thead><tbody><tr><td>独占一行</td><td>和相临元素在同一行</td></tr><tr><td>div</td><td>a</td></tr><tr><td>h1~h6</td><td>span</td></tr><tr><td>ol、ul、li</td><td>img</td></tr><tr><td>table</td><td>input</td></tr><tr><td>p</td><td>…</td></tr></tbody></table><h2 id="定位布局" tabindex="-1">定位布局 <a class="header-anchor" href="#定位布局" aria-label="Permalink to &quot;定位布局&quot;">​</a></h2><p><img src="'+o+'" alt="定位总结"></p><h3 id="position-可选参数" tabindex="-1">position 可选参数 <a class="header-anchor" href="#position-可选参数" aria-label="Permalink to &quot;position 可选参数&quot;">​</a></h3><table><thead><tr><th>position 参数</th><th>解释</th></tr></thead><tbody><tr><td>static</td><td>默认值，元素按照标准流正常的显示</td></tr><tr><td>relative</td><td>相对定位，元素依然处于正常的文档流中，可以通过 left ， right，bottom，top 改变元素的位置</td></tr><tr><td>absolute</td><td>绝对定位，元素脱离文档流，可以通过 left ， right，bottom，top 改变元素的位置，它会基于游览器的四个边角进行定位</td></tr><tr><td>fixed</td><td>固定定位，使用 top，left，right，bottom 定位，会脱离正常文档流，不受标准流的约束，并拥有层级的概念</td></tr><tr><td>inherit</td><td>会继承父元素的属性</td></tr></tbody></table><h3 id="static" tabindex="-1">static <a class="header-anchor" href="#static" aria-label="Permalink to &quot;static&quot;">​</a></h3><p>默认定位，无定位的意思，无边偏移。</p><h3 id="absolute" tabindex="-1">absolute <a class="header-anchor" href="#absolute" aria-label="Permalink to &quot;absolute&quot;">​</a></h3><p>绝对于&quot;网页页面&quot;的布局.这个页面就是指网页从开始一直到网页尾部为止的页面，如果祖先元素有定位（相对、绝对、固定），以最近一级的有祖先定位元素为参考点移动位置。，<strong>后写的元素会覆盖先写的元素</strong><br><img src="'+r+'" alt="absolute布局"></p><h3 id="relative" tabindex="-1">relative <a class="header-anchor" href="#relative" aria-label="Permalink to &quot;relative&quot;">​</a></h3><p>相对布局相对的是其父布局的一种布局.可以通过 left，right，top，bottom 移动元素，并且后写的元素会覆盖先写的元素<br> “<strong>子绝父相</strong>”最常用，指的是子级是绝对定位（不需要占位），父级要用相对定位（需要占位）。</p><h3 id="fixed" tabindex="-1">fixed <a class="header-anchor" href="#fixed" aria-label="Permalink to &quot;fixed&quot;">​</a></h3><p>使用 fixed 固定定位的元素不会受其它元素的约束，它也是以游览器的四个边角为基准，但是<strong>当页面发生滚动的时候</strong>，使用 fixed 定位的元素，<strong>会依然在页面中的位置固定不动</strong></p><h3 id="sticky-了解即可-兼容性差-ie-不支持" tabindex="-1">sticky（了解即可，兼容性差，IE 不支持 <a class="header-anchor" href="#sticky-了解即可-兼容性差-ie-不支持" aria-label="Permalink to &quot;sticky（了解即可，兼容性差，IE 不支持&quot;">​</a></h3><p>在屏幕范围时该元素的位置并不受到定位影响(设置是 top、left 等属性无效),当该元素的位置将要移出偏移范围时,定位又会变成 fixed,根据设置的 left、top 等属性成 fixed(固定布局)的效果.</p>',19),s=[d];function h(n,c,p,b,f,u){return e(),a("div",null,s)}const S=t(l,[["render",h]]);export{_ as __pageData,S as default};
