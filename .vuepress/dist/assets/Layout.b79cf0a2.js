var pe=Object.defineProperty,de=Object.defineProperties;var me=Object.getOwnPropertyDescriptors;var se=Object.getOwnPropertySymbols;var ve=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;var oe=(e,t,n)=>t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,I=(e,t)=>{for(var n in t||(t={}))ve.call(t,n)&&oe(e,n,t[n]);if(se)for(var n of se(t))ge.call(t,n)&&oe(e,n,t[n]);return e},ae=(e,t)=>de(e,me(t));import{i as he,Z as fe,$ as _e,_ as C,m as P,h as w,l as _,P as j,o as r,c,b as h,N as o,Q as $,y as f,t as b,r as k,F as x,E,B as W,d as v,I as z,J as be,g as re,w as U,e as H,Y as le,C as ke,D as ye,f as X,a0 as Le,j as Ne,n as ce,u as Be,K as Ce,L as Pe,a1 as Ae,H as Se,a2 as G,T as we}from"./app.95e7e63f.js";import{r as Ie,L as ue,u as $e,C as Oe}from"./index.b1883f41.js";import{P as xe,a as Ee,t as Ue,b as Ve}from"./Pagation.ef78b3cf.js";const Fe={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},ze=({docsRepo:e,docsBranch:t,docsDir:n,path:p,editLinkPattern:a})=>{const l=Ie(e);let i;if(a?i=a:l!==null&&(i=Fe[l]),!i)return null;const s=p.replace(/\.html$/,".md");return i.replace(/:repo/,he(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,fe(`${_e(n)}/${s}`))};function R(){const e=["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87","#e15b64","#f47e60","#f8b26a","#f26d6d","#67cc86","#fb9b5f","#3498db"],t=Math.floor(Math.random()*e.length);return e[t]}let M=null,F=null;const Xe={wait:()=>M,pending:()=>{M=new Promise(e=>F=e)},resolve:()=>{F==null||F(),M=null,F=null}},je=()=>Xe,Ge={class:"hero-content"},Me=["src"],Te={key:1},We={key:2},He=P({__name:"Banner",setup(e){const t=w(),n=_(()=>{var l,i,s,u;return(i=(l=t.value)==null?void 0:l.banner)!=null&&i.heroImage?j((u=(s=t.value)==null?void 0:s.banner)==null?void 0:u.heroImage):null}),p=_(()=>t.value.banner.heroImageStyle||{}),a=_(()=>{var u;const{bgImageStyle:l,bgImage:i}=((u=t.value)==null?void 0:u.banner)||{},s=i?{textAlign:"center",overflow:"hidden",background:`url(${j(i)}) center/cover no-repeat`}:{};return l?I(I({},s),l):s});return(l,i)=>{var s,u,m,d,g,L,N,y;return r(),c("section",{class:"banner-wrapper",style:$(I({},o(a)))},[h("div",Ge,[o(n)?(r(),c("img",{key:0,src:o(n),style:$({heroImageStyle:o(p)}),alt:"heroImage"},null,12,Me)):f("",!0),(u=(s=o(t))==null?void 0:s.banner)!=null&&u.heroText?(r(),c("h1",Te,b((d=(m=o(t))==null?void 0:m.banner)==null?void 0:d.heroText),1)):f("",!0),(L=(g=o(t))==null?void 0:g.banner)!=null&&L.tagline?(r(),c("p",We,b((y=(N=o(t))==null?void 0:N.banner)==null?void 0:y.tagline),1)):f("",!0)])],4)}}});var Re=C(He,[["__file","Banner.vue"]]);const De={class:"hero-content"},Qe=["src"],Ye={class:"hero-text"},qe={key:0},Je={key:1},Ke={key:2,class:"btn-group"},Ze={key:3,class:"social-links"},et=P({__name:"BannerBrand",setup(e){const t=w(),n=_(()=>{var s,u,m,d;return(u=(s=t.value)==null?void 0:s.bannerBrand)!=null&&u.heroImage?j((d=(m=t.value)==null?void 0:m.bannerBrand)==null?void 0:d.heroImage):null}),p=_(()=>{var s,u;return((u=(s=t.value)==null?void 0:s.bannerBrand)==null?void 0:u.buttons)||[]}),a=_(()=>{var s,u;return(((u=(s=t.value)==null?void 0:s.bannerBrand)==null?void 0:u.socialLinks)||[]).map(m=>(m.color||(m.color=R()),m))}),l=_(()=>t.value.bannerBrand.heroImageStyle||{}),i=_(()=>{var d;const{bgImageStyle:s,bgImage:u}=((d=t.value)==null?void 0:d.bannerBrand)||{},m=u?{overflow:"hidden",background:`url(${j(u)}) center/cover no-repeat`}:{};return s?I(I({},m),s):m});return(s,u)=>{var d,g,L,N,y,A,S,V;const m=k("Xicons");return r(),c("section",{class:"banner-brand-wrapper",style:$(I({},o(i)))},[h("div",De,[o(n)?(r(),c("img",{key:0,src:o(n),style:$({heroImageStyle:o(l)}),alt:"heroImage"},null,12,Qe)):f("",!0),h("div",Ye,[(g=(d=o(t))==null?void 0:d.bannerBrand)!=null&&g.heroText?(r(),c("h1",qe,b((N=(L=o(t))==null?void 0:L.bannerBrand)==null?void 0:N.heroText),1)):f("",!0),(A=(y=o(t))==null?void 0:y.bannerBrand)!=null&&A.tagline?(r(),c("p",Je,b((V=(S=o(t))==null?void 0:S.bannerBrand)==null?void 0:V.tagline),1)):f("",!0),o(p).length>0?(r(),c("ul",Ke,[(r(!0),c(x,null,E(o(p),(B,O)=>(r(),c("li",{class:W(B.type),key:O},[v(m,{icon:B.icon,text:B.text,link:B.link,"icon-size":"20","text-size":"14"},null,8,["icon","text","link"])],2))),128))])):f("",!0),o(a).length>0?(r(),c("ul",Ze,[(r(!0),c(x,null,E(o(a),(B,O)=>(r(),c("li",{class:"social-item",key:O},[v(m,{icon:B.icon,link:B.link,style:$({color:B.color}),target:"_blank"},null,8,["icon","link","style"])]))),128))])):f("",!0)])])],4)}}});var tt=C(et,[["__file","BannerBrand.vue"]]);const nt=P({setup(e,t){const n=z(),p=w(),a=_(()=>{var l,i;return(((i=(l=p.value)==null?void 0:l.blog)==null?void 0:i.socialLinks)||[]).map(s=>(s.color||(s.color=R()),s))});return{themeLocal:n,socialLinks:a}}}),st={class:"personal-info-wrapper"},ot=["src"],at={key:1,class:"name"},rt={class:"social-links"},it=h("hr",null,null,-1);function lt(e,t,n,p,a,l){const i=k("Xicons");return r(),c("div",st,[e.themeLocal.authorAvatar?(r(),c("img",{key:0,class:"personal-img",src:e.$withBase(e.themeLocal.authorAvatar),alt:"author-avatar"},null,8,ot)):f("",!0),e.themeLocal.author?(r(),c("p",at,b(e.themeLocal.author),1)):f("",!0),h("ul",rt,[(r(!0),c(x,null,E(e.socialLinks,(s,u)=>(r(),c("li",{class:"social-item",key:u},[v(i,{icon:s.icon,link:s.link,style:$({color:s.color}),target:"_blank"},null,8,["icon","link","style"])]))),128))]),it])}var ct=C(nt,[["render",lt],["__file","PersonalInfo.vue"]]);const ut={class:"home-blog-content"},pt={class:"blog-list"},dt={class:"info-wrapper"},mt={class:"module-title"},vt={class:"category-wrapper"},gt={class:"text"},ht={class:"num"},ft={class:"module-title"},_t={class:"tag-wrapper"},bt=P({__name:"Blog",setup(e){const{posts:t,classificationSummary:n}=be(),p=re(1),a=re(0),l=10,i=_(()=>{var d,g;return((g=(d=n.value)==null?void 0:d.categories)==null?void 0:g.items)||[]}),s=_(()=>{var d,g;return((g=(d=n.value)==null?void 0:d.tags)==null?void 0:g.items)||[]}),u=_(()=>{const d=(p.value-1)*l,g=p.value*l;return(t.value||[]).slice(d,g)});let m=d=>{};return m=d=>{if(p.value=d,a.value===0){const g=document.querySelector(".home-blog-content");g&&(a.value=g.getBoundingClientRect().top)}setTimeout(()=>{window.scrollTo({left:0,top:-a.value,behavior:"smooth"})},100)},(d,g)=>{const L=k("Xicons"),N=k("router-link");return r(),c("section",ut,[h("section",pt,[v(xe,{data:o(u),total:o(t).length,"page-size":10,"current-page":p.value},null,8,["data","total","current-page"]),v(Ee,{currentPage:p.value,total:o(t).length,onChange:o(m)},null,8,["currentPage","total","onChange"])]),h("section",dt,[v(ct),h("h4",mt,[v(L,{icon:"Folder",text:"Categories"})]),h("ul",vt,[(r(!0),c(x,null,E(o(i),(y,A,S)=>(r(),c("li",{class:"category-item",key:S},[v(N,{class:"category-link",to:`/categories/${A}/1/`},{default:U(()=>[h("span",gt,b(y.label),1),h("span",ht,b(y.length),1)]),_:2},1032,["to"])]))),128))]),h("h4",ft,[v(L,{icon:"Tag",text:"Tags"})]),h("ul",_t,[(r(!0),c(x,null,E(o(s),(y,A,S)=>(r(),c("li",{class:"tag-item",key:S,style:$({borderColor:o(R)()})},[v(N,{class:"tag-link",to:`/tags/${A}/1/`},{default:U(()=>[H(b(y.label),1)]),_:2},1032,["to"])],4))),128))])])])}}});var kt=C(bt,[["__file","Blog.vue"]]);const yt={},Lt={class:"theme-reco-default-content"};function Nt(e,t){const n=k("Content");return r(),c("section",Lt,[v(n)])}var Bt=C(yt,[["render",Nt],["__file","MdContent.vue"]]),Ct="data:image/png;base64,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";const Pt="vuepress-theme-reco",At="2.0.0-beta.33",St="> TODO: description",wt="https://github.com/recoluan/vuepress-theme-reco#readme",It={url:"https://github.com/recoluan/vuepress-theme-reco/issues"},$t={type:"git",url:"git+https://github.com/recoluan/vuepress-theme-reco.git"},Ot="MIT",xt="reco_luan <recoluan@qq.com>",Et="lib/node/index.js",Ut="lib/node/index.d.ts",Vt={lib:"lib",test:"__tests__"},Ft=["lib","templates"],zt={access:"public"},Xt={"@vicons/tabler":"^0.12.0","@vicons/fa":"^0.12.0","@vuepress-reco/shared":"2.0.0-beta.33","@vuepress-reco/tailwindcss-config":"2.0.0-beta.33","@vuepress-reco/vuepress-plugin-bulletin-popover":"2.0.0-beta.33","@vuepress-reco/vuepress-plugin-comments":"2.0.0-beta.33","@vuepress-reco/vuepress-plugin-page":"2.0.0-beta.33","@vuepress-reco/vuepress-plugin-code-copy":"2.0.0-beta.33","@vuepress-reco/vuepress-plugin-vue-preview":"2.0.0-beta.33","@vuepress/bundler-vite":"2.0.0-beta.48","@vuepress/bundler-webpack":"2.0.0-beta.48","@vuepress/client":"2.0.0-beta.48","@vuepress/core":"2.0.0-beta.48","@vuepress/plugin-active-header-links":"2.0.0-beta.48","@vuepress/plugin-back-to-top":"^2.0.0-beta.48","@vuepress/plugin-container":"2.0.0-beta.48","@vuepress/plugin-external-link-icon":"2.0.0-beta.48","@vuepress/plugin-git":"2.0.0-beta.48","@vuepress/plugin-nprogress":"2.0.0-beta.48","@vuepress/plugin-palette":"2.0.0-beta.48","@vuepress/plugin-prismjs":"2.0.0-beta.48","@vuepress/plugin-register-components":"2.0.0-beta.48","@vuepress/plugin-search":"2.0.0-beta.48","@vuepress/plugin-theme-data":"2.0.0-beta.48","@vuepress/shared":"2.0.0-beta.48","@vuepress/utils":"2.0.0-beta.48",autoprefixer:"10.4.7",md5:"2.3.0",postcss:"8.4.14","postcss-each":"1.1.0","postcss-import":"14.0.2",tailwindcss:"3.1.6",vue:"^3.2.36","vue-router":"^4.0.16"},jt={"eslint-config-vuepress":"3.2.1","eslint-config-vuepress-typescript":"2.2.1",prettier:"2.2.1","sort-package-json":"1.44.0"},Gt={test:'echo "Error: run tests from root" && exit 1',build:"tsc --build tsconfig.build.json","build:watch":"tsc --build -w tsconfig.build.json",clean:"rimraf lib *.tsbuildinfo",copy:'cpx "src/**/*.{d.ts,vue,scss,css,svg,png,jpg}" lib'};var Mt={name:Pt,version:At,description:St,homepage:wt,bugs:It,repository:$t,license:Ot,author:xt,main:Et,types:Ut,directories:Vt,files:Ft,publishConfig:zt,dependencies:Xt,devDependencies:jt,scripts:Gt};const Tt={class:"footer-wrapper"},Wt={key:0},Ht={key:0},Rt=H("\xA0\xA0 "),Dt={key:1},Qt={key:1,class:"cyber-security"},Yt=h("img",{src:Ct,alt:""},null,-1),qt=["href"],Jt={__name:"Footer",setup(e){const t=z(),n=w(),{solution:p,options:a}=le(),{version:l}=Mt,i=_(()=>p.value!=="valine"?!1:a.value.visitor!=!1);return(s,u)=>{var L,N,y,A,S,V,B,O,D,Q,Y,q;const m=k("Xicons"),d=k("ValineViews"),g=k("Comments");return r(),c("div",Tt,[h("span",null,[v(m,{icon:"Palette",link:"http://v2.vuepress-reco.recoluan.com",target:"_blank",text:`vuepress-theme-reco@${o(l)}`},null,8,["text"])]),(N=(L=o(n))==null?void 0:L.footer)!=null&&N.record?(r(),c("span",Wt,[v(m,{icon:"ShieldCheck",link:((A=(y=o(n))==null?void 0:y.footer)==null?void 0:A.recordLink)||"#",text:(V=(S=o(n))==null?void 0:S.footer)==null?void 0:V.record,target:"_blank"},null,8,["link","text"])])):f("",!0),h("span",null,[v(m,{icon:"Copyright"},{default:U(()=>{var J,K,Z,ee,te,ne;return[o(t).author?(r(),c("a",Ht,b(o(t).author),1)):f("",!0),Rt,((K=(J=o(n))==null?void 0:J.footer)==null?void 0:K.startYear)&&((ee=(Z=o(n))==null?void 0:Z.footer)==null?void 0:ee.startYear)!=new Date().getFullYear()?(r(),c("a",Dt,b((ne=(te=o(n))==null?void 0:te.footer)==null?void 0:ne.startYear)+" - ",1)):f("",!0),H(" "+b(new Date().getFullYear()),1)]}),_:1})]),ke(h("span",null,[v(m,{icon:"Eye"},{default:U(()=>[v(d,{idVal:"/",numStyle:{}})]),_:1})],512),[[ye,o(i)]]),(O=(B=o(n))==null?void 0:B.footer)!=null&&O.cyberSecurityRecord?(r(),c("p",Qt,[Yt,h("a",{href:((Q=(D=o(n))==null?void 0:D.footer)==null?void 0:Q.cyberSecurityLink)||"#"},b((q=(Y=o(n))==null?void 0:Y.footer)==null?void 0:q.cyberSecurityRecord),9,qt)])):f("",!0),v(g,{"hide-comments":!0})])}}};var Kt=C(Jt,[["__file","Footer.vue"]]);const Zt={class:"home-wrapper"},en=P({name:"HomeWrapper",components:{Banner:Re,BannerBrand:tt,Blog:kt,MdContent:Bt,Footer:Kt}}),tn=P(ae(I({},en),{setup(e){const t=w();return(n,p)=>(r(),c("div",Zt,[(r(!0),c(x,null,E(o(t).modules||["Banner","Blog","Footer"],a=>(r(),X(Le(a),{key:a}))),128))]))}}));var nn=C(tn,[["__file","index.vue"]]);const ie=e=>e===!1?null:Ce(e)?Pe(e):Ae(e)?e:!1,T=(e,t,n)=>{const p=e.findIndex(a=>a.link===t);if(p!==-1){const a=e[p+n];return a!=null&&a.link?a:null}for(const a of e)if(a.children){const l=T(a.children,t,n);if(l)return l}return null},sn=P({name:"PageNav",components:{Link:ue},setup(){const e=w(),t=Ne(),n=ce(),p=Be(),a=_(()=>{const s=ie(e.value.prev);return s!==!1?s:T(t.value,n.path,-1)}),l=_(()=>{const s=ie(e.value.next);return s!==!1?s:T(t.value,n.path,1)});return{prevNavLink:a,nextNavLink:l,go:s=>{p.push(s)}}}}),on={key:0,class:"page-nav"};function an(e,t,n,p,a,l){return e.prevNavLink||e.nextNavLink?(r(),c("nav",on,[h("p",{class:W(["inner",{hasPrev:!!e.prevNavLink,hasNext:!!e.nextNavLink}])},[e.prevNavLink?(r(),c("span",{key:0,class:"page-nav-item prev",onClick:t[0]||(t[0]=i=>e.go(e.prevNavLink.link))}," \u2190 "+b(e.prevNavLink.text),1)):f("",!0),e.nextNavLink?(r(),c("span",{key:1,class:"page-nav-item next",onClick:t[1]||(t[1]=i=>e.go(e.nextNavLink.link))},b(e.nextNavLink.text)+" \u2192 ",1)):f("",!0)],2)])):f("",!0)}var rn=C(sn,[["render",an],["__file","PageNav.vue"]]);const ln=()=>{const e=z(),t=G(),n=w();return _(()=>{var d,g;if(!((g=(d=n.value.editLink)!=null?d:e.value.editLink)!=null?g:!0))return null;const{repo:a,docsRepo:l=a,docsBranch:i="main",docsDir:s="",editLinkText:u}=e.value;if(!l)return null;const m=ze({docsRepo:l,docsBranch:i,docsDir:s,path:t.value.filePathRelative,editLinkPattern:e.value.editLinkPattern});return m?{text:u!=null?u:"Edit this page",link:m,icon:"Edit",hideExternalLinkIcon:!0}:null})},cn=()=>{Se();const e=z(),t=G(),n=w();return _(()=>{var l,i,s,u;if(!((i=(l=n.value.lastUpdated)!=null?l:e.value.lastUpdated)!=null?i:!0)||!((s=t.value.git)!=null&&s.updatedTime))return null;const a=new Date((u=t.value.git)==null?void 0:u.updatedTime);return Ue(a)})},un=P({name:"PageMeta",components:{Link:ue},setup(){const e=z(),t=ln(),n=cn();return{themeLocal:e,editNavLink:t,lastUpdated:n}}}),pn={class:"page-meta"},dn={key:0,class:"meta-item edit-link"},mn={key:1,class:"meta-item last-updated"};function vn(e,t,n,p,a,l){const i=k("Xicons");return r(),c("footer",pn,[e.editNavLink?(r(),c("div",dn,[v(i,{class:"meta-item-label",icon:e.editNavLink.icon,text:e.editNavLink.text,link:e.editNavLink.link,target:"_blank","icon-size":"20","text-size":"14"},null,8,["icon","text","link"])])):f("",!0),e.lastUpdated?(r(),c("div",mn,[v(i,{class:"meta-item-label",icon:"CalendarTime",text:`${e.themeLocal.lastUpdatedText||"Last Updated"} ${e.lastUpdated}`,"icon-size":"20","text-size":"14"},null,8,["text"])])):f("",!0)])}var gn=C(un,[["render",vn],["__file","PageMeta.vue"]]);const hn=P({name:"Page",components:{PageInfo:Ve,PageNav:rn,PageMeta:gn},setup(){const e=G(),{options:t}=le();ce();const n=_(()=>{var a,l,i;return((l=(a=e==null?void 0:e.value)==null?void 0:a.frontmatter)==null?void 0:l.title)||((i=e==null?void 0:e.value)==null?void 0:i.title)||""}),p=_(()=>{var i;const{hideComments:a}=(i=e==null?void 0:e.value)==null?void 0:i.frontmatter,{hideComments:l}=t.value;return a===!0||a!==!1&&l===!0});return{title:n,pageData:e,shouldHideComments:p}}}),fn={class:"page-container"},_n={key:0,class:"page-title"},bn={class:"theme-reco-default-content"};function kn(e,t,n,p,a,l){const i=k("PageInfo"),s=k("Content"),u=k("PageMeta"),m=k("PageNav"),d=k("Comments");return r(),c("main",fn,[e.title?(r(),c("h1",_n,b(e.title),1)):f("",!0),v(i,{"page-data":e.pageData},null,8,["page-data"]),h("div",bn,[v(s)]),v(u),v(m),v(d,{"hide-comments":e.shouldHideComments},null,8,["hide-comments"])])}var yn=C(hn,[["render",kn],["__file","Page.vue"]]);const Ln={class:"theme-container"},Nn=P({__name:"Layout",setup(e){const t=G(),n=w(),{isShowSidebar:p,isShowCatalog:a}=$e(),l=je(),i=l.resolve,s=l.pending;return(u,m)=>(r(),c("div",Ln,[v(Oe,null,{default:U(()=>[o(n).home===!0?(r(),X(nn,{key:0})):(r(),X(we,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:o(i),onBeforeLeave:o(s)},{default:U(()=>[(r(),X(yn,{key:o(t).path,class:W({"show-series":o(p),"show-catalog":o(a)})},null,8,["class"]))]),_:1},8,["onBeforeEnter","onBeforeLeave"]))]),_:1})]))}});var Sn=C(Nn,[["__file","Layout.vue"]]);export{Sn as default};
