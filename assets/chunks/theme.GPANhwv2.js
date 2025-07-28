const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.CDZo1qqx.js","assets/chunks/framework.Bfdr4H5E.js"])))=>i.map(i=>d[i]);
import{d as B,c as k,r as C,n as ie,o as y,a as gt,t as te,b as q,w as D,T as oo,e as F,_ as H,u as gd,i as _d,f as vd,g as ao,h as G,j as R,k as P,l as Qt,m as Di,p as Q,q as st,s as Ds,v as Ze,x as lo,y as co,z as yd,A as Ed,F as le,B as Oe,C as sn,D as yc,E as Ls,G as j,H as tt,I as Ec,J as mr,K as Nt,L as Os,M as Td,N as Tc,O as Li,P as Ic,Q as wc,R as Ms,S as Id,U as wd,V as Ad,W as Ac,X as bc,Y as bd,Z as Pd,$ as Sd,a0 as ts,a1 as kd,a2 as Oi,a3 as Za,a4 as Rd,a5 as Cd}from"./framework.Bfdr4H5E.js";const Vd=B({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(n){return(e,t)=>(y(),k("span",{class:ie(["VPBadge",e.type])},[C(e.$slots,"default",{},()=>[gt(te(e.text),1)])],2))}}),Nd={key:0,class:"VPBackdrop"},Dd=B({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(n){return(e,t)=>(y(),q(oo,{name:"fade"},{default:D(()=>[e.show?(y(),k("div",Nd)):F("",!0)]),_:1}))}}),Ld=H(Dd,[["__scopeId","data-v-c79a1216"]]),Z=gd;function Od(n,e){let t,r=!1;return()=>{t&&clearTimeout(t),r?t=setTimeout(n,e):(n(),(r=!0)&&setTimeout(()=>r=!1,e))}}function Mi(n){return n.startsWith("/")?n:`/${n}`}function uo(n){const{pathname:e,search:t,hash:r,protocol:s}=new URL(n,"http://a.com");if(_d(n)||n.startsWith("#")||!s.startsWith("http")||!vd(e))return n;const{site:o}=Z(),a=e.endsWith("/")||e.endsWith(".html")?n:n.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,o.value.cleanUrls?"":".html")}${t}${r}`);return ao(a)}function gr({correspondingLink:n=!1}={}){const{site:e,localeIndex:t,page:r,theme:s,hash:o}=Z(),a=G(()=>{var h,d;return{label:(h=e.value.locales[t.value])==null?void 0:h.label,link:((d=e.value.locales[t.value])==null?void 0:d.link)||(t.value==="root"?"/":`/${t.value}/`)}});return{localeLinks:G(()=>Object.entries(e.value.locales).flatMap(([h,d])=>a.value.label===d.label?[]:{text:d.label,link:Md(d.link||(h==="root"?"/":`/${h}/`),s.value.i18nRouting!==!1&&n,r.value.relativePath.slice(a.value.link.length-1),!e.value.cleanUrls)+o.value})),currentLang:a}}function Md(n,e,t,r){return e?n.replace(/\/$/,"")+Mi(t.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,r?".html":"")):n}const $d={class:"NotFound"},Fd={class:"code"},Ud={class:"title"},xd={class:"quote"},Bd={class:"action"},jd=["href","aria-label"],Hd=B({__name:"NotFound",setup(n){const{theme:e}=Z(),{currentLang:t}=gr();return(r,s)=>{var o,a,c,h,d;return y(),k("div",$d,[R("p",Fd,te(((o=P(e).notFound)==null?void 0:o.code)??"404"),1),R("h1",Ud,te(((a=P(e).notFound)==null?void 0:a.title)??"PAGE NOT FOUND"),1),s[0]||(s[0]=R("div",{class:"divider"},null,-1)),R("blockquote",xd,te(((c=P(e).notFound)==null?void 0:c.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),R("div",Bd,[R("a",{class:"link",href:P(ao)(P(t).link),"aria-label":((h=P(e).notFound)==null?void 0:h.linkLabel)??"go to home"},te(((d=P(e).notFound)==null?void 0:d.linkText)??"Take me home"),9,jd)])])}}}),qd=H(Hd,[["__scopeId","data-v-d6be1790"]]);function Pc(n,e){if(Array.isArray(n))return ns(n);if(n==null)return[];e=Mi(e);const t=Object.keys(n).sort((s,o)=>o.split("/").length-s.split("/").length).find(s=>e.startsWith(Mi(s))),r=t?n[t]:[];return Array.isArray(r)?ns(r):ns(r.items,r.base)}function zd(n){const e=[];let t=0;for(const r in n){const s=n[r];if(s.items){t=e.push(s);continue}e[t]||e.push({items:[]}),e[t].items.push(s)}return e}function Wd(n){const e=[];function t(r){for(const s of r)s.text&&s.link&&e.push({text:s.text,link:s.link,docFooterText:s.docFooterText}),s.items&&t(s.items)}return t(n),e}function $i(n,e){return Array.isArray(e)?e.some(t=>$i(n,t)):Qt(n,e.link)?!0:e.items?$i(n,e.items):!1}function ns(n,e){return[...n].map(t=>{const r={...t},s=r.base||e;return s&&r.link&&(r.link=s+r.link),r.items&&(r.items=ns(r.items,s)),r})}function yt(){const{frontmatter:n,page:e,theme:t}=Z(),r=Di("(min-width: 960px)"),s=Q(!1),o=G(()=>{const U=t.value.sidebar,M=e.value.relativePath;return U?Pc(U,M):[]}),a=Q(o.value);st(o,(U,M)=>{JSON.stringify(U)!==JSON.stringify(M)&&(a.value=o.value)});const c=G(()=>n.value.sidebar!==!1&&a.value.length>0&&n.value.layout!=="home"),h=G(()=>d?n.value.aside==null?t.value.aside==="left":n.value.aside==="left":!1),d=G(()=>n.value.layout==="home"?!1:n.value.aside!=null?!!n.value.aside:t.value.aside!==!1),m=G(()=>c.value&&r.value),g=G(()=>c.value?zd(a.value):[]);function E(){s.value=!0}function N(){s.value=!1}function O(){s.value?N():E()}return{isOpen:s,sidebar:a,sidebarGroups:g,hasSidebar:c,hasAside:d,leftAside:h,isSidebarEnabled:m,open:E,close:N,toggle:O}}function Gd(n,e){let t;Ds(()=>{t=n.value?document.activeElement:void 0}),Ze(()=>{window.addEventListener("keyup",r)}),lo(()=>{window.removeEventListener("keyup",r)});function r(s){s.key==="Escape"&&n.value&&(e(),t==null||t.focus())}}function Kd(n){const{page:e,hash:t}=Z(),r=Q(!1),s=G(()=>n.value.collapsed!=null),o=G(()=>!!n.value.link),a=Q(!1),c=()=>{a.value=Qt(e.value.relativePath,n.value.link)};st([e,n,t],c),Ze(c);const h=G(()=>a.value?!0:n.value.items?$i(e.value.relativePath,n.value.items):!1),d=G(()=>!!(n.value.items&&n.value.items.length));Ds(()=>{r.value=!!(s.value&&n.value.collapsed)}),co(()=>{(a.value||h.value)&&(r.value=!1)});function m(){s.value&&(r.value=!r.value)}return{collapsed:r,collapsible:s,isLink:o,isActiveLink:a,hasActiveLink:h,hasChildren:d,toggle:m}}function Qd(){const{hasSidebar:n}=yt(),e=Di("(min-width: 960px)"),t=Di("(min-width: 1280px)");return{isAsideEnabled:G(()=>!t.value&&!e.value?!1:n.value?t.value:e.value)}}const Jd=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,Fi=[];function Sc(n){return typeof n.outline=="object"&&!Array.isArray(n.outline)&&n.outline.label||n.outlineTitle||"On this page"}function ho(n){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(t=>t.id&&t.hasChildNodes()).map(t=>{const r=Number(t.tagName[1]);return{element:t,title:Xd(t),link:"#"+t.id,level:r}});return Yd(e,n)}function Xd(n){let e="";for(const t of n.childNodes)if(t.nodeType===1){if(Jd.test(t.className))continue;e+=t.textContent}else t.nodeType===3&&(e+=t.textContent);return e.trim()}function Yd(n,e){if(e===!1)return[];const t=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[r,s]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t;return tf(n,r,s)}function Zd(n,e){const{isAsideEnabled:t}=Qd(),r=Od(o,100);let s=null;Ze(()=>{requestAnimationFrame(o),window.addEventListener("scroll",r)}),yd(()=>{a(location.hash)}),lo(()=>{window.removeEventListener("scroll",r)});function o(){if(!t.value)return;const c=window.scrollY,h=window.innerHeight,d=document.body.offsetHeight,m=Math.abs(c+h-d)<1,g=Fi.map(({element:N,link:O})=>({link:O,top:ef(N)})).filter(({top:N})=>!Number.isNaN(N)).sort((N,O)=>N.top-O.top);if(!g.length){a(null);return}if(c<1){a(null);return}if(m){a(g[g.length-1].link);return}let E=null;for(const{link:N,top:O}of g){if(O>c+Ed()+4)break;E=N}a(E)}function a(c){s&&s.classList.remove("active"),c==null?s=null:s=n.value.querySelector(`a[href="${decodeURIComponent(c)}"]`);const h=s;h?(h.classList.add("active"),e.value.style.top=h.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function ef(n){let e=0;for(;n!==document.body;){if(n===null)return NaN;e+=n.offsetTop,n=n.offsetParent}return e}function tf(n,e,t){Fi.length=0;const r=[],s=[];return n.forEach(o=>{const a={...o,children:[]};let c=s[s.length-1];for(;c&&c.level>=a.level;)s.pop(),c=s[s.length-1];if(a.element.classList.contains("ignore-header")||c&&"shouldIgnore"in c){s.push({level:a.level,shouldIgnore:!0});return}a.level>t||a.level<e||(Fi.push({element:a.element,link:a.link}),c?c.children.push(a):r.push(a),s.push(a))}),r}const nf=["href","title"],rf=B({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(n){function e({target:t}){const r=t.href.split("#")[1],s=document.getElementById(decodeURIComponent(r));s==null||s.focus({preventScroll:!0})}return(t,r)=>{const s=sn("VPDocOutlineItem",!0);return y(),k("ul",{class:ie(["VPDocOutlineItem",t.root?"root":"nested"])},[(y(!0),k(le,null,Oe(t.headers,({children:o,link:a,title:c})=>(y(),k("li",null,[R("a",{class:"outline-link",href:a,onClick:e,title:c},te(c),9,nf),o!=null&&o.length?(y(),q(s,{key:0,headers:o},null,8,["headers"])):F("",!0)]))),256))],2)}}}),kc=H(rf,[["__scopeId","data-v-b933a997"]]),sf={class:"content"},of={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},af=B({__name:"VPDocAsideOutline",setup(n){const{frontmatter:e,theme:t}=Z(),r=yc([]);Ls(()=>{r.value=ho(e.value.outline??t.value.outline)});const s=Q(),o=Q();return Zd(s,o),(a,c)=>(y(),k("nav",{"aria-labelledby":"doc-outline-aria-label",class:ie(["VPDocAsideOutline",{"has-outline":r.value.length>0}]),ref_key:"container",ref:s},[R("div",sf,[R("div",{class:"outline-marker",ref_key:"marker",ref:o},null,512),R("div",of,te(P(Sc)(P(t))),1),j(kc,{headers:r.value,root:!0},null,8,["headers"])])],2))}}),lf=H(af,[["__scopeId","data-v-a5bbad30"]]),cf={class:"VPDocAsideCarbonAds"},uf=B({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(n){const e=()=>null;return(t,r)=>(y(),k("div",cf,[j(P(e),{"carbon-ads":t.carbonAds},null,8,["carbon-ads"])]))}}),hf={class:"VPDocAside"},df=B({__name:"VPDocAside",setup(n){const{theme:e}=Z();return(t,r)=>(y(),k("div",hf,[C(t.$slots,"aside-top",{},void 0,!0),C(t.$slots,"aside-outline-before",{},void 0,!0),j(lf),C(t.$slots,"aside-outline-after",{},void 0,!0),r[0]||(r[0]=R("div",{class:"spacer"},null,-1)),C(t.$slots,"aside-ads-before",{},void 0,!0),P(e).carbonAds?(y(),q(uf,{key:0,"carbon-ads":P(e).carbonAds},null,8,["carbon-ads"])):F("",!0),C(t.$slots,"aside-ads-after",{},void 0,!0),C(t.$slots,"aside-bottom",{},void 0,!0)]))}}),ff=H(df,[["__scopeId","data-v-3f215769"]]);function pf(){const{theme:n,page:e}=Z();return G(()=>{const{text:t="Edit this page",pattern:r=""}=n.value.editLink||{};let s;return typeof r=="function"?s=r(e.value):s=r.replace(/:path/g,e.value.filePath),{url:s,text:t}})}function mf(){const{page:n,theme:e,frontmatter:t}=Z();return G(()=>{var d,m,g,E,N,O,U,M;const r=Pc(e.value.sidebar,n.value.relativePath),s=Wd(r),o=gf(s,J=>J.link.replace(/[?#].*$/,"")),a=o.findIndex(J=>Qt(n.value.relativePath,J.link)),c=((d=e.value.docFooter)==null?void 0:d.prev)===!1&&!t.value.prev||t.value.prev===!1,h=((m=e.value.docFooter)==null?void 0:m.next)===!1&&!t.value.next||t.value.next===!1;return{prev:c?void 0:{text:(typeof t.value.prev=="string"?t.value.prev:typeof t.value.prev=="object"?t.value.prev.text:void 0)??((g=o[a-1])==null?void 0:g.docFooterText)??((E=o[a-1])==null?void 0:E.text),link:(typeof t.value.prev=="object"?t.value.prev.link:void 0)??((N=o[a-1])==null?void 0:N.link)},next:h?void 0:{text:(typeof t.value.next=="string"?t.value.next:typeof t.value.next=="object"?t.value.next.text:void 0)??((O=o[a+1])==null?void 0:O.docFooterText)??((U=o[a+1])==null?void 0:U.text),link:(typeof t.value.next=="object"?t.value.next.link:void 0)??((M=o[a+1])==null?void 0:M.link)}}})}function gf(n,e){const t=new Set;return n.filter(r=>{const s=e(r);return t.has(s)?!1:t.add(s)})}const qe=B({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(n){const e=n,t=G(()=>e.tag??(e.href?"a":"span")),r=G(()=>e.href&&Ec.test(e.href)||e.target==="_blank");return(s,o)=>(y(),q(tt(t.value),{class:ie(["VPLink",{link:s.href,"vp-external-link-icon":r.value,"no-icon":s.noIcon}]),href:s.href?P(uo)(s.href):void 0,target:s.target??(r.value?"_blank":void 0),rel:s.rel??(r.value?"noreferrer":void 0)},{default:D(()=>[C(s.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),_f={class:"VPLastUpdated"},vf=["datetime"],yf=B({__name:"VPDocFooterLastUpdated",setup(n){const{theme:e,page:t,lang:r}=Z(),s=G(()=>new Date(t.value.lastUpdated)),o=G(()=>s.value.toISOString()),a=Q("");return Ze(()=>{Ds(()=>{var c,h,d;a.value=new Intl.DateTimeFormat((h=(c=e.value.lastUpdated)==null?void 0:c.formatOptions)!=null&&h.forceLocale?r.value:void 0,((d=e.value.lastUpdated)==null?void 0:d.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(s.value)})}),(c,h)=>{var d;return y(),k("p",_f,[gt(te(((d=P(e).lastUpdated)==null?void 0:d.text)||P(e).lastUpdatedText||"Last updated")+": ",1),R("time",{datetime:o.value},te(a.value),9,vf)])}}}),Ef=H(yf,[["__scopeId","data-v-e98dd255"]]),Tf={key:0,class:"VPDocFooter"},If={key:0,class:"edit-info"},wf={key:0,class:"edit-link"},Af={key:1,class:"last-updated"},bf={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},Pf={class:"pager"},Sf=["innerHTML"],kf=["innerHTML"],Rf={class:"pager"},Cf=["innerHTML"],Vf=["innerHTML"],Nf=B({__name:"VPDocFooter",setup(n){const{theme:e,page:t,frontmatter:r}=Z(),s=pf(),o=mf(),a=G(()=>e.value.editLink&&r.value.editLink!==!1),c=G(()=>t.value.lastUpdated),h=G(()=>a.value||c.value||o.value.prev||o.value.next);return(d,m)=>{var g,E,N,O;return h.value?(y(),k("footer",Tf,[C(d.$slots,"doc-footer-before",{},void 0,!0),a.value||c.value?(y(),k("div",If,[a.value?(y(),k("div",wf,[j(qe,{class:"edit-link-button",href:P(s).url,"no-icon":!0},{default:D(()=>[m[0]||(m[0]=R("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),gt(" "+te(P(s).text),1)]),_:1,__:[0]},8,["href"])])):F("",!0),c.value?(y(),k("div",Af,[j(Ef)])):F("",!0)])):F("",!0),(g=P(o).prev)!=null&&g.link||(E=P(o).next)!=null&&E.link?(y(),k("nav",bf,[m[1]||(m[1]=R("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),R("div",Pf,[(N=P(o).prev)!=null&&N.link?(y(),q(qe,{key:0,class:"pager-link prev",href:P(o).prev.link},{default:D(()=>{var U;return[R("span",{class:"desc",innerHTML:((U=P(e).docFooter)==null?void 0:U.prev)||"Previous page"},null,8,Sf),R("span",{class:"title",innerHTML:P(o).prev.text},null,8,kf)]}),_:1},8,["href"])):F("",!0)]),R("div",Rf,[(O=P(o).next)!=null&&O.link?(y(),q(qe,{key:0,class:"pager-link next",href:P(o).next.link},{default:D(()=>{var U;return[R("span",{class:"desc",innerHTML:((U=P(e).docFooter)==null?void 0:U.next)||"Next page"},null,8,Cf),R("span",{class:"title",innerHTML:P(o).next.text},null,8,Vf)]}),_:1},8,["href"])):F("",!0)])])):F("",!0)])):F("",!0)}}}),Df=H(Nf,[["__scopeId","data-v-e257564d"]]),Lf={class:"container"},Of={class:"aside-container"},Mf={class:"aside-content"},$f={class:"content"},Ff={class:"content-container"},Uf={class:"main"},xf=B({__name:"VPDoc",setup(n){const{theme:e}=Z(),t=mr(),{hasSidebar:r,hasAside:s,leftAside:o}=yt(),a=G(()=>t.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(c,h)=>{const d=sn("Content");return y(),k("div",{class:ie(["VPDoc",{"has-sidebar":P(r),"has-aside":P(s)}])},[C(c.$slots,"doc-top",{},void 0,!0),R("div",Lf,[P(s)?(y(),k("div",{key:0,class:ie(["aside",{"left-aside":P(o)}])},[h[0]||(h[0]=R("div",{class:"aside-curtain"},null,-1)),R("div",Of,[R("div",Mf,[j(ff,null,{"aside-top":D(()=>[C(c.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":D(()=>[C(c.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":D(()=>[C(c.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":D(()=>[C(c.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":D(()=>[C(c.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":D(()=>[C(c.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):F("",!0),R("div",$f,[R("div",Ff,[C(c.$slots,"doc-before",{},void 0,!0),R("main",Uf,[j(d,{class:ie(["vp-doc",[a.value,P(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),j(Df,null,{"doc-footer-before":D(()=>[C(c.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),C(c.$slots,"doc-after",{},void 0,!0)])])]),C(c.$slots,"doc-bottom",{},void 0,!0)],2)}}}),Bf=H(xf,[["__scopeId","data-v-39a288b8"]]),jf=B({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(n){const e=n,t=G(()=>e.href&&Ec.test(e.href)),r=G(()=>e.tag||(e.href?"a":"button"));return(s,o)=>(y(),q(tt(r.value),{class:ie(["VPButton",[s.size,s.theme]]),href:s.href?P(uo)(s.href):void 0,target:e.target??(t.value?"_blank":void 0),rel:e.rel??(t.value?"noreferrer":void 0)},{default:D(()=>[gt(te(s.text),1)]),_:1},8,["class","href","target","rel"]))}}),Hf=H(jf,[["__scopeId","data-v-fa7799d5"]]),qf=["src","alt"],zf=B({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(n){return(e,t)=>{const r=sn("VPImage",!0);return e.image?(y(),k(le,{key:0},[typeof e.image=="string"||"src"in e.image?(y(),k("img",Nt({key:0,class:"VPImage"},typeof e.image=="string"?e.$attrs:{...e.image,...e.$attrs},{src:P(ao)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,qf)):(y(),k(le,{key:1},[j(r,Nt({class:"dark",image:e.image.dark,alt:e.image.alt},e.$attrs),null,16,["image","alt"]),j(r,Nt({class:"light",image:e.image.light,alt:e.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):F("",!0)}}}),ds=H(zf,[["__scopeId","data-v-8426fc1a"]]),Wf={class:"container"},Gf={class:"main"},Kf={class:"heading"},Qf=["innerHTML"],Jf=["innerHTML"],Xf=["innerHTML"],Yf={key:0,class:"actions"},Zf={key:0,class:"image"},ep={class:"image-container"},tp=B({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(n){const e=Os("hero-image-slot-exists");return(t,r)=>(y(),k("div",{class:ie(["VPHero",{"has-image":t.image||P(e)}])},[R("div",Wf,[R("div",Gf,[C(t.$slots,"home-hero-info-before",{},void 0,!0),C(t.$slots,"home-hero-info",{},()=>[R("h1",Kf,[t.name?(y(),k("span",{key:0,innerHTML:t.name,class:"name clip"},null,8,Qf)):F("",!0),t.text?(y(),k("span",{key:1,innerHTML:t.text,class:"text"},null,8,Jf)):F("",!0)]),t.tagline?(y(),k("p",{key:0,innerHTML:t.tagline,class:"tagline"},null,8,Xf)):F("",!0)],!0),C(t.$slots,"home-hero-info-after",{},void 0,!0),t.actions?(y(),k("div",Yf,[(y(!0),k(le,null,Oe(t.actions,s=>(y(),k("div",{key:s.link,class:"action"},[j(Hf,{tag:"a",size:"medium",theme:s.theme,text:s.text,href:s.link,target:s.target,rel:s.rel},null,8,["theme","text","href","target","rel"])]))),128))])):F("",!0),C(t.$slots,"home-hero-actions-after",{},void 0,!0)]),t.image||P(e)?(y(),k("div",Zf,[R("div",ep,[r[0]||(r[0]=R("div",{class:"image-bg"},null,-1)),C(t.$slots,"home-hero-image",{},()=>[t.image?(y(),q(ds,{key:0,class:"image-src",image:t.image},null,8,["image"])):F("",!0)],!0)])])):F("",!0)])],2))}}),np=H(tp,[["__scopeId","data-v-4f9c455b"]]),rp=B({__name:"VPHomeHero",setup(n){const{frontmatter:e}=Z();return(t,r)=>P(e).hero?(y(),q(np,{key:0,class:"VPHomeHero",name:P(e).hero.name,text:P(e).hero.text,tagline:P(e).hero.tagline,image:P(e).hero.image,actions:P(e).hero.actions},{"home-hero-info-before":D(()=>[C(t.$slots,"home-hero-info-before")]),"home-hero-info":D(()=>[C(t.$slots,"home-hero-info")]),"home-hero-info-after":D(()=>[C(t.$slots,"home-hero-info-after")]),"home-hero-actions-after":D(()=>[C(t.$slots,"home-hero-actions-after")]),"home-hero-image":D(()=>[C(t.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):F("",!0)}}),sp={class:"box"},ip={key:0,class:"icon"},op=["innerHTML"],ap=["innerHTML"],lp=["innerHTML"],cp={key:4,class:"link-text"},up={class:"link-text-value"},hp=B({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(n){return(e,t)=>(y(),q(qe,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:D(()=>[R("article",sp,[typeof e.icon=="object"&&e.icon.wrap?(y(),k("div",ip,[j(ds,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(y(),q(ds,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(y(),k("div",{key:2,class:"icon",innerHTML:e.icon},null,8,op)):F("",!0),R("h2",{class:"title",innerHTML:e.title},null,8,ap),e.details?(y(),k("p",{key:3,class:"details",innerHTML:e.details},null,8,lp)):F("",!0),e.linkText?(y(),k("div",cp,[R("p",up,[gt(te(e.linkText)+" ",1),t[0]||(t[0]=R("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):F("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),dp=H(hp,[["__scopeId","data-v-a3976bdc"]]),fp={key:0,class:"VPFeatures"},pp={class:"container"},mp={class:"items"},gp=B({__name:"VPFeatures",props:{features:{}},setup(n){const e=n,t=G(()=>{const r=e.features.length;if(r){if(r===2)return"grid-2";if(r===3)return"grid-3";if(r%3===0)return"grid-6";if(r>3)return"grid-4"}else return});return(r,s)=>r.features?(y(),k("div",fp,[R("div",pp,[R("div",mp,[(y(!0),k(le,null,Oe(r.features,o=>(y(),k("div",{key:o.title,class:ie(["item",[t.value]])},[j(dp,{icon:o.icon,title:o.title,details:o.details,link:o.link,"link-text":o.linkText,rel:o.rel,target:o.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):F("",!0)}}),_p=H(gp,[["__scopeId","data-v-a6181336"]]),vp=B({__name:"VPHomeFeatures",setup(n){const{frontmatter:e}=Z();return(t,r)=>P(e).features?(y(),q(_p,{key:0,class:"VPHomeFeatures",features:P(e).features},null,8,["features"])):F("",!0)}}),yp=B({__name:"VPHomeContent",setup(n){const{width:e}=Td({initialWidth:0,includeScrollbar:!1});return(t,r)=>(y(),k("div",{class:"vp-doc container",style:Tc(P(e)?{"--vp-offset":`calc(50% - ${P(e)/2}px)`}:{})},[C(t.$slots,"default",{},void 0,!0)],4))}}),Ep=H(yp,[["__scopeId","data-v-8e2d4988"]]),Tp=B({__name:"VPHome",setup(n){const{frontmatter:e,theme:t}=Z();return(r,s)=>{const o=sn("Content");return y(),k("div",{class:ie(["VPHome",{"external-link-icon-enabled":P(t).externalLinkIcon}])},[C(r.$slots,"home-hero-before",{},void 0,!0),j(rp,null,{"home-hero-info-before":D(()=>[C(r.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":D(()=>[C(r.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":D(()=>[C(r.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":D(()=>[C(r.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":D(()=>[C(r.$slots,"home-hero-image",{},void 0,!0)]),_:3}),C(r.$slots,"home-hero-after",{},void 0,!0),C(r.$slots,"home-features-before",{},void 0,!0),j(vp),C(r.$slots,"home-features-after",{},void 0,!0),P(e).markdownStyles!==!1?(y(),q(Ep,{key:0},{default:D(()=>[j(o)]),_:1})):(y(),q(o,{key:1}))],2)}}}),Ip=H(Tp,[["__scopeId","data-v-8b561e3d"]]),wp={},Ap={class:"VPPage"};function bp(n,e){const t=sn("Content");return y(),k("div",Ap,[C(n.$slots,"page-top"),j(t),C(n.$slots,"page-bottom")])}const Pp=H(wp,[["render",bp]]),Sp=B({__name:"VPContent",setup(n){const{page:e,frontmatter:t}=Z(),{hasSidebar:r}=yt();return(s,o)=>(y(),k("div",{class:ie(["VPContent",{"has-sidebar":P(r),"is-home":P(t).layout==="home"}]),id:"VPContent"},[P(e).isNotFound?C(s.$slots,"not-found",{key:0},()=>[j(qd)],!0):P(t).layout==="page"?(y(),q(Pp,{key:1},{"page-top":D(()=>[C(s.$slots,"page-top",{},void 0,!0)]),"page-bottom":D(()=>[C(s.$slots,"page-bottom",{},void 0,!0)]),_:3})):P(t).layout==="home"?(y(),q(Ip,{key:2},{"home-hero-before":D(()=>[C(s.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":D(()=>[C(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":D(()=>[C(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":D(()=>[C(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":D(()=>[C(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":D(()=>[C(s.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":D(()=>[C(s.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":D(()=>[C(s.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":D(()=>[C(s.$slots,"home-features-after",{},void 0,!0)]),_:3})):P(t).layout&&P(t).layout!=="doc"?(y(),q(tt(P(t).layout),{key:3})):(y(),q(Bf,{key:4},{"doc-top":D(()=>[C(s.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":D(()=>[C(s.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":D(()=>[C(s.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":D(()=>[C(s.$slots,"doc-before",{},void 0,!0)]),"doc-after":D(()=>[C(s.$slots,"doc-after",{},void 0,!0)]),"aside-top":D(()=>[C(s.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":D(()=>[C(s.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":D(()=>[C(s.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":D(()=>[C(s.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":D(()=>[C(s.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":D(()=>[C(s.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),kp=H(Sp,[["__scopeId","data-v-1428d186"]]),Rp={class:"container"},Cp=["innerHTML"],Vp=["innerHTML"],Np=B({__name:"VPFooter",setup(n){const{theme:e,frontmatter:t}=Z(),{hasSidebar:r}=yt();return(s,o)=>P(e).footer&&P(t).footer!==!1?(y(),k("footer",{key:0,class:ie(["VPFooter",{"has-sidebar":P(r)}])},[R("div",Rp,[P(e).footer.message?(y(),k("p",{key:0,class:"message",innerHTML:P(e).footer.message},null,8,Cp)):F("",!0),P(e).footer.copyright?(y(),k("p",{key:1,class:"copyright",innerHTML:P(e).footer.copyright},null,8,Vp)):F("",!0)])],2)):F("",!0)}}),Dp=H(Np,[["__scopeId","data-v-e315a0ad"]]);function Lp(){const{theme:n,frontmatter:e}=Z(),t=yc([]),r=G(()=>t.value.length>0);return Ls(()=>{t.value=ho(e.value.outline??n.value.outline)}),{headers:t,hasLocalNav:r}}const Op={class:"menu-text"},Mp={class:"header"},$p={class:"outline"},Fp=B({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(n){const e=n,{theme:t}=Z(),r=Q(!1),s=Q(0),o=Q(),a=Q();function c(g){var E;(E=o.value)!=null&&E.contains(g.target)||(r.value=!1)}st(r,g=>{if(g){document.addEventListener("click",c);return}document.removeEventListener("click",c)}),Li("Escape",()=>{r.value=!1}),Ls(()=>{r.value=!1});function h(){r.value=!r.value,s.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function d(g){g.target.classList.contains("outline-link")&&(a.value&&(a.value.style.transition="none"),Ic(()=>{r.value=!1}))}function m(){r.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(g,E)=>(y(),k("div",{class:"VPLocalNavOutlineDropdown",style:Tc({"--vp-vh":s.value+"px"}),ref_key:"main",ref:o},[g.headers.length>0?(y(),k("button",{key:0,onClick:h,class:ie({open:r.value})},[R("span",Op,te(P(Sc)(P(t))),1),E[0]||(E[0]=R("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(y(),k("button",{key:1,onClick:m},te(P(t).returnToTopLabel||"Return to top"),1)),j(oo,{name:"flyout"},{default:D(()=>[r.value?(y(),k("div",{key:0,ref_key:"items",ref:a,class:"items",onClick:d},[R("div",Mp,[R("a",{class:"top-link",href:"#",onClick:m},te(P(t).returnToTopLabel||"Return to top"),1)]),R("div",$p,[j(kc,{headers:g.headers},null,8,["headers"])])],512)):F("",!0)]),_:1})],4))}}),Up=H(Fp,[["__scopeId","data-v-8a42e2b4"]]),xp={class:"container"},Bp=["aria-expanded"],jp={class:"menu-text"},Hp=B({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(n){const{theme:e,frontmatter:t}=Z(),{hasSidebar:r}=yt(),{headers:s}=Lp(),{y:o}=wc(),a=Q(0);Ze(()=>{a.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),Ls(()=>{s.value=ho(t.value.outline??e.value.outline)});const c=G(()=>s.value.length===0),h=G(()=>c.value&&!r.value),d=G(()=>({VPLocalNav:!0,"has-sidebar":r.value,empty:c.value,fixed:h.value}));return(m,g)=>P(t).layout!=="home"&&(!h.value||P(o)>=a.value)?(y(),k("div",{key:0,class:ie(d.value)},[R("div",xp,[P(r)?(y(),k("button",{key:0,class:"menu","aria-expanded":m.open,"aria-controls":"VPSidebarNav",onClick:g[0]||(g[0]=E=>m.$emit("open-menu"))},[g[1]||(g[1]=R("span",{class:"vpi-align-left menu-icon"},null,-1)),R("span",jp,te(P(e).sidebarMenuLabel||"Menu"),1)],8,Bp)):F("",!0),j(Up,{headers:P(s),navHeight:a.value},null,8,["headers","navHeight"])])],2)):F("",!0)}}),qp=H(Hp,[["__scopeId","data-v-a6f0e41e"]]);function zp(){const n=Q(!1);function e(){n.value=!0,window.addEventListener("resize",s)}function t(){n.value=!1,window.removeEventListener("resize",s)}function r(){n.value?t():e()}function s(){window.outerWidth>=768&&t()}const o=mr();return st(()=>o.path,t),{isScreenOpen:n,openScreen:e,closeScreen:t,toggleScreen:r}}const Wp={},Gp={class:"VPSwitch",type:"button",role:"switch"},Kp={class:"check"},Qp={key:0,class:"icon"};function Jp(n,e){return y(),k("button",Gp,[R("span",Kp,[n.$slots.default?(y(),k("span",Qp,[C(n.$slots,"default",{},void 0,!0)])):F("",!0)])])}const Xp=H(Wp,[["render",Jp],["__scopeId","data-v-1d5665e3"]]),Yp=B({__name:"VPSwitchAppearance",setup(n){const{isDark:e,theme:t}=Z(),r=Os("toggle-appearance",()=>{e.value=!e.value}),s=Q("");return co(()=>{s.value=e.value?t.value.lightModeSwitchTitle||"Switch to light theme":t.value.darkModeSwitchTitle||"Switch to dark theme"}),(o,a)=>(y(),q(Xp,{title:s.value,class:"VPSwitchAppearance","aria-checked":P(e),onClick:P(r)},{default:D(()=>a[0]||(a[0]=[R("span",{class:"vpi-sun sun"},null,-1),R("span",{class:"vpi-moon moon"},null,-1)])),_:1,__:[0]},8,["title","aria-checked","onClick"]))}}),fo=H(Yp,[["__scopeId","data-v-5337faa4"]]),Zp={key:0,class:"VPNavBarAppearance"},em=B({__name:"VPNavBarAppearance",setup(n){const{site:e}=Z();return(t,r)=>P(e).appearance&&P(e).appearance!=="force-dark"&&P(e).appearance!=="force-auto"?(y(),k("div",Zp,[j(fo)])):F("",!0)}}),tm=H(em,[["__scopeId","data-v-6c893767"]]),po=Q();let Rc=!1,Ti=0;function nm(n){const e=Q(!1);if(Ms){!Rc&&rm(),Ti++;const t=st(po,r=>{var s,o,a;r===n.el.value||(s=n.el.value)!=null&&s.contains(r)?(e.value=!0,(o=n.onFocus)==null||o.call(n)):(e.value=!1,(a=n.onBlur)==null||a.call(n))});lo(()=>{t(),Ti--,Ti||sm()})}return Id(e)}function rm(){document.addEventListener("focusin",Cc),Rc=!0,po.value=document.activeElement}function sm(){document.removeEventListener("focusin",Cc)}function Cc(){po.value=document.activeElement}const im={class:"VPMenuLink"},om=["innerHTML"],am=B({__name:"VPMenuLink",props:{item:{}},setup(n){const{page:e}=Z();return(t,r)=>(y(),k("div",im,[j(qe,{class:ie({active:P(Qt)(P(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon},{default:D(()=>[R("span",{innerHTML:t.item.text},null,8,om)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),$s=H(am,[["__scopeId","data-v-35975db6"]]),lm={class:"VPMenuGroup"},cm={key:0,class:"title"},um=B({__name:"VPMenuGroup",props:{text:{},items:{}},setup(n){return(e,t)=>(y(),k("div",lm,[e.text?(y(),k("p",cm,te(e.text),1)):F("",!0),(y(!0),k(le,null,Oe(e.items,r=>(y(),k(le,null,["link"in r?(y(),q($s,{key:0,item:r},null,8,["item"])):F("",!0)],64))),256))]))}}),hm=H(um,[["__scopeId","data-v-69e747b5"]]),dm={class:"VPMenu"},fm={key:0,class:"items"},pm=B({__name:"VPMenu",props:{items:{}},setup(n){return(e,t)=>(y(),k("div",dm,[e.items?(y(),k("div",fm,[(y(!0),k(le,null,Oe(e.items,r=>(y(),k(le,{key:JSON.stringify(r)},["link"in r?(y(),q($s,{key:0,item:r},null,8,["item"])):"component"in r?(y(),q(tt(r.component),Nt({key:1,ref_for:!0},r.props),null,16)):(y(),q(hm,{key:2,text:r.text,items:r.items},null,8,["text","items"]))],64))),128))])):F("",!0),C(e.$slots,"default",{},void 0,!0)]))}}),mm=H(pm,[["__scopeId","data-v-b98bc113"]]),gm=["aria-expanded","aria-label"],_m={key:0,class:"text"},vm=["innerHTML"],ym={key:1,class:"vpi-more-horizontal icon"},Em={class:"menu"},Tm=B({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(n){const e=Q(!1),t=Q();nm({el:t,onBlur:r});function r(){e.value=!1}return(s,o)=>(y(),k("div",{class:"VPFlyout",ref_key:"el",ref:t,onMouseenter:o[1]||(o[1]=a=>e.value=!0),onMouseleave:o[2]||(o[2]=a=>e.value=!1)},[R("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":s.label,onClick:o[0]||(o[0]=a=>e.value=!e.value)},[s.button||s.icon?(y(),k("span",_m,[s.icon?(y(),k("span",{key:0,class:ie([s.icon,"option-icon"])},null,2)):F("",!0),s.button?(y(),k("span",{key:1,innerHTML:s.button},null,8,vm)):F("",!0),o[3]||(o[3]=R("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(y(),k("span",ym))],8,gm),R("div",Em,[j(mm,{items:s.items},{default:D(()=>[C(s.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),mo=H(Tm,[["__scopeId","data-v-cf11d7a2"]]),Im=["href","aria-label","innerHTML"],wm=B({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(n){const e=n,t=Q();Ze(async()=>{var o;await Ic();const s=(o=t.value)==null?void 0:o.children[0];s instanceof HTMLElement&&s.className.startsWith("vpi-social-")&&(getComputedStyle(s).maskImage||getComputedStyle(s).webkitMaskImage)==="none"&&s.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${e.icon}.svg')`)});const r=G(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}"></span>`);return(s,o)=>(y(),k("a",{ref_key:"el",ref:t,class:"VPSocialLink no-icon",href:s.link,"aria-label":s.ariaLabel??(typeof s.icon=="string"?s.icon:""),target:"_blank",rel:"noopener",innerHTML:r.value},null,8,Im))}}),Am=H(wm,[["__scopeId","data-v-bd121fe5"]]),bm={class:"VPSocialLinks"},Pm=B({__name:"VPSocialLinks",props:{links:{}},setup(n){return(e,t)=>(y(),k("div",bm,[(y(!0),k(le,null,Oe(e.links,({link:r,icon:s,ariaLabel:o})=>(y(),q(Am,{key:r,icon:s,link:r,ariaLabel:o},null,8,["icon","link","ariaLabel"]))),128))]))}}),Fs=H(Pm,[["__scopeId","data-v-7bc22406"]]),Sm={key:0,class:"group translations"},km={class:"trans-title"},Rm={key:1,class:"group"},Cm={class:"item appearance"},Vm={class:"label"},Nm={class:"appearance-action"},Dm={key:2,class:"group"},Lm={class:"item social-links"},Om=B({__name:"VPNavBarExtra",setup(n){const{site:e,theme:t}=Z(),{localeLinks:r,currentLang:s}=gr({correspondingLink:!0}),o=G(()=>r.value.length&&s.value.label||e.value.appearance||t.value.socialLinks);return(a,c)=>o.value?(y(),q(mo,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:D(()=>[P(r).length&&P(s).label?(y(),k("div",Sm,[R("p",km,te(P(s).label),1),(y(!0),k(le,null,Oe(P(r),h=>(y(),q($s,{key:h.link,item:h},null,8,["item"]))),128))])):F("",!0),P(e).appearance&&P(e).appearance!=="force-dark"&&P(e).appearance!=="force-auto"?(y(),k("div",Rm,[R("div",Cm,[R("p",Vm,te(P(t).darkModeSwitchLabel||"Appearance"),1),R("div",Nm,[j(fo)])])])):F("",!0),P(t).socialLinks?(y(),k("div",Dm,[R("div",Lm,[j(Fs,{class:"social-links-list",links:P(t).socialLinks},null,8,["links"])])])):F("",!0)]),_:1})):F("",!0)}}),Mm=H(Om,[["__scopeId","data-v-bb2aa2f0"]]),$m=["aria-expanded"],Fm=B({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(n){return(e,t)=>(y(),k("button",{type:"button",class:ie(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:t[0]||(t[0]=r=>e.$emit("click"))},t[1]||(t[1]=[R("span",{class:"container"},[R("span",{class:"top"}),R("span",{class:"middle"}),R("span",{class:"bottom"})],-1)]),10,$m))}}),Um=H(Fm,[["__scopeId","data-v-e5dd9c1c"]]),xm=["innerHTML"],Bm=B({__name:"VPNavBarMenuLink",props:{item:{}},setup(n){const{page:e}=Z();return(t,r)=>(y(),q(qe,{class:ie({VPNavBarMenuLink:!0,active:P(Qt)(P(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,tabindex:"0"},{default:D(()=>[R("span",{innerHTML:t.item.text},null,8,xm)]),_:1},8,["class","href","target","rel","no-icon"]))}}),jm=H(Bm,[["__scopeId","data-v-e56f3d57"]]),Hm=B({__name:"VPNavBarMenuGroup",props:{item:{}},setup(n){const e=n,{page:t}=Z(),r=o=>"component"in o?!1:"link"in o?Qt(t.value.relativePath,o.link,!!e.item.activeMatch):o.items.some(r),s=G(()=>r(e.item));return(o,a)=>(y(),q(mo,{class:ie({VPNavBarMenuGroup:!0,active:P(Qt)(P(t).relativePath,o.item.activeMatch,!!o.item.activeMatch)||s.value}),button:o.item.text,items:o.item.items},null,8,["class","button","items"]))}}),qm={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},zm=B({__name:"VPNavBarMenu",setup(n){const{theme:e}=Z();return(t,r)=>P(e).nav?(y(),k("nav",qm,[r[0]||(r[0]=R("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(y(!0),k(le,null,Oe(P(e).nav,s=>(y(),k(le,{key:JSON.stringify(s)},["link"in s?(y(),q(jm,{key:0,item:s},null,8,["item"])):"component"in s?(y(),q(tt(s.component),Nt({key:1,ref_for:!0},s.props),null,16)):(y(),q(Hm,{key:2,item:s},null,8,["item"]))],64))),128))])):F("",!0)}}),Wm=H(zm,[["__scopeId","data-v-dc692963"]]);function Gm(n){const{localeIndex:e,theme:t}=Z();function r(s){var O,U,M;const o=s.split("."),a=(O=t.value.search)==null?void 0:O.options,c=a&&typeof a=="object",h=c&&((M=(U=a.locales)==null?void 0:U[e.value])==null?void 0:M.translations)||null,d=c&&a.translations||null;let m=h,g=d,E=n;const N=o.pop();for(const J of o){let K=null;const ne=E==null?void 0:E[J];ne&&(K=E=ne);const fe=g==null?void 0:g[J];fe&&(K=g=fe);const ze=m==null?void 0:m[J];ze&&(K=m=ze),ne||(E=K),fe||(g=K),ze||(m=K)}return(m==null?void 0:m[N])??(g==null?void 0:g[N])??(E==null?void 0:E[N])??""}return r}const Km=["aria-label"],Qm={class:"DocSearch-Button-Container"},Jm={class:"DocSearch-Button-Placeholder"},el=B({__name:"VPNavBarSearchButton",setup(n){const t=Gm({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(r,s)=>(y(),k("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":P(t)("button.buttonAriaLabel")},[R("span",Qm,[s[0]||(s[0]=R("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),R("span",Jm,te(P(t)("button.buttonText")),1)]),s[1]||(s[1]=R("span",{class:"DocSearch-Button-Keys"},[R("kbd",{class:"DocSearch-Button-Key"}),R("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,Km))}}),Xm={class:"VPNavBarSearch"},Ym={id:"local-search"},Zm={key:1,id:"docsearch"},eg=B({__name:"VPNavBarSearch",setup(n){const e=wd(()=>Ad(()=>import("./VPLocalSearchBox.CDZo1qqx.js"),__vite__mapDeps([0,1]))),t=()=>null,{theme:r}=Z(),s=Q(!1),o=Q(!1);Ze(()=>{});function a(){s.value||(s.value=!0,setTimeout(c,16))}function c(){const g=new Event("keydown");g.key="k",g.metaKey=!0,window.dispatchEvent(g),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||c()},16)}function h(g){const E=g.target,N=E.tagName;return E.isContentEditable||N==="INPUT"||N==="SELECT"||N==="TEXTAREA"}const d=Q(!1);Li("k",g=>{(g.ctrlKey||g.metaKey)&&(g.preventDefault(),d.value=!0)}),Li("/",g=>{h(g)||(g.preventDefault(),d.value=!0)});const m="local";return(g,E)=>{var N;return y(),k("div",Xm,[P(m)==="local"?(y(),k(le,{key:0},[d.value?(y(),q(P(e),{key:0,onClose:E[0]||(E[0]=O=>d.value=!1)})):F("",!0),R("div",Ym,[j(el,{onClick:E[1]||(E[1]=O=>d.value=!0)})])],64)):P(m)==="algolia"?(y(),k(le,{key:1},[s.value?(y(),q(P(t),{key:0,algolia:((N=P(r).search)==null?void 0:N.options)??P(r).algolia,onVnodeBeforeMount:E[2]||(E[2]=O=>o.value=!0)},null,8,["algolia"])):F("",!0),o.value?F("",!0):(y(),k("div",Zm,[j(el,{onClick:a})]))],64)):F("",!0)])}}}),tg=B({__name:"VPNavBarSocialLinks",setup(n){const{theme:e}=Z();return(t,r)=>P(e).socialLinks?(y(),q(Fs,{key:0,class:"VPNavBarSocialLinks",links:P(e).socialLinks},null,8,["links"])):F("",!0)}}),ng=H(tg,[["__scopeId","data-v-0394ad82"]]),rg=["href","rel","target"],sg=["innerHTML"],ig={key:2},og=B({__name:"VPNavBarTitle",setup(n){const{site:e,theme:t}=Z(),{hasSidebar:r}=yt(),{currentLang:s}=gr(),o=G(()=>{var h;return typeof t.value.logoLink=="string"?t.value.logoLink:(h=t.value.logoLink)==null?void 0:h.link}),a=G(()=>{var h;return typeof t.value.logoLink=="string"||(h=t.value.logoLink)==null?void 0:h.rel}),c=G(()=>{var h;return typeof t.value.logoLink=="string"||(h=t.value.logoLink)==null?void 0:h.target});return(h,d)=>(y(),k("div",{class:ie(["VPNavBarTitle",{"has-sidebar":P(r)}])},[R("a",{class:"title",href:o.value??P(uo)(P(s).link),rel:a.value,target:c.value},[C(h.$slots,"nav-bar-title-before",{},void 0,!0),P(t).logo?(y(),q(ds,{key:0,class:"logo",image:P(t).logo},null,8,["image"])):F("",!0),P(t).siteTitle?(y(),k("span",{key:1,innerHTML:P(t).siteTitle},null,8,sg)):P(t).siteTitle===void 0?(y(),k("span",ig,te(P(e).title),1)):F("",!0),C(h.$slots,"nav-bar-title-after",{},void 0,!0)],8,rg)],2))}}),ag=H(og,[["__scopeId","data-v-1168a8e4"]]),lg={class:"items"},cg={class:"title"},ug=B({__name:"VPNavBarTranslations",setup(n){const{theme:e}=Z(),{localeLinks:t,currentLang:r}=gr({correspondingLink:!0});return(s,o)=>P(t).length&&P(r).label?(y(),q(mo,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:P(e).langMenuLabel||"Change language"},{default:D(()=>[R("div",lg,[R("p",cg,te(P(r).label),1),(y(!0),k(le,null,Oe(P(t),a=>(y(),q($s,{key:a.link,item:a},null,8,["item"]))),128))])]),_:1},8,["label"])):F("",!0)}}),hg=H(ug,[["__scopeId","data-v-88af2de4"]]),dg={class:"wrapper"},fg={class:"container"},pg={class:"title"},mg={class:"content"},gg={class:"content-body"},_g=B({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(n){const e=n,{y:t}=wc(),{hasSidebar:r}=yt(),{frontmatter:s}=Z(),o=Q({});return co(()=>{o.value={"has-sidebar":r.value,home:s.value.layout==="home",top:t.value===0,"screen-open":e.isScreenOpen}}),(a,c)=>(y(),k("div",{class:ie(["VPNavBar",o.value])},[R("div",dg,[R("div",fg,[R("div",pg,[j(ag,null,{"nav-bar-title-before":D(()=>[C(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":D(()=>[C(a.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),R("div",mg,[R("div",gg,[C(a.$slots,"nav-bar-content-before",{},void 0,!0),j(eg,{class:"search"}),j(Wm,{class:"menu"}),j(hg,{class:"translations"}),j(tm,{class:"appearance"}),j(ng,{class:"social-links"}),j(Mm,{class:"extra"}),C(a.$slots,"nav-bar-content-after",{},void 0,!0),j(Um,{class:"hamburger",active:a.isScreenOpen,onClick:c[0]||(c[0]=h=>a.$emit("toggle-screen"))},null,8,["active"])])])])]),c[1]||(c[1]=R("div",{class:"divider"},[R("div",{class:"divider-line"})],-1))],2))}}),vg=H(_g,[["__scopeId","data-v-6aa21345"]]),yg={key:0,class:"VPNavScreenAppearance"},Eg={class:"text"},Tg=B({__name:"VPNavScreenAppearance",setup(n){const{site:e,theme:t}=Z();return(r,s)=>P(e).appearance&&P(e).appearance!=="force-dark"&&P(e).appearance!=="force-auto"?(y(),k("div",yg,[R("p",Eg,te(P(t).darkModeSwitchLabel||"Appearance"),1),j(fo)])):F("",!0)}}),Ig=H(Tg,[["__scopeId","data-v-b44890b2"]]),wg=["innerHTML"],Ag=B({__name:"VPNavScreenMenuLink",props:{item:{}},setup(n){const e=Os("close-screen");return(t,r)=>(y(),q(qe,{class:"VPNavScreenMenuLink",href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,onClick:P(e)},{default:D(()=>[R("span",{innerHTML:t.item.text},null,8,wg)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),bg=H(Ag,[["__scopeId","data-v-df37e6dd"]]),Pg=["innerHTML"],Sg=B({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(n){const e=Os("close-screen");return(t,r)=>(y(),q(qe,{class:"VPNavScreenMenuGroupLink",href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,onClick:P(e)},{default:D(()=>[R("span",{innerHTML:t.item.text},null,8,Pg)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Vc=H(Sg,[["__scopeId","data-v-3e9c20e4"]]),kg={class:"VPNavScreenMenuGroupSection"},Rg={key:0,class:"title"},Cg=B({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(n){return(e,t)=>(y(),k("div",kg,[e.text?(y(),k("p",Rg,te(e.text),1)):F("",!0),(y(!0),k(le,null,Oe(e.items,r=>(y(),q(Vc,{key:r.text,item:r},null,8,["item"]))),128))]))}}),Vg=H(Cg,[["__scopeId","data-v-8133b170"]]),Ng=["aria-controls","aria-expanded"],Dg=["innerHTML"],Lg=["id"],Og={key:0,class:"item"},Mg={key:1,class:"item"},$g={key:2,class:"group"},Fg=B({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(n){const e=n,t=Q(!1),r=G(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function s(){t.value=!t.value}return(o,a)=>(y(),k("div",{class:ie(["VPNavScreenMenuGroup",{open:t.value}])},[R("button",{class:"button","aria-controls":r.value,"aria-expanded":t.value,onClick:s},[R("span",{class:"button-text",innerHTML:o.text},null,8,Dg),a[0]||(a[0]=R("span",{class:"vpi-plus button-icon"},null,-1))],8,Ng),R("div",{id:r.value,class:"items"},[(y(!0),k(le,null,Oe(o.items,c=>(y(),k(le,{key:JSON.stringify(c)},["link"in c?(y(),k("div",Og,[j(Vc,{item:c},null,8,["item"])])):"component"in c?(y(),k("div",Mg,[(y(),q(tt(c.component),Nt({ref_for:!0},c.props,{"screen-menu":""}),null,16))])):(y(),k("div",$g,[j(Vg,{text:c.text,items:c.items},null,8,["text","items"])]))],64))),128))],8,Lg)],2))}}),Ug=H(Fg,[["__scopeId","data-v-b9ab8c58"]]),xg={key:0,class:"VPNavScreenMenu"},Bg=B({__name:"VPNavScreenMenu",setup(n){const{theme:e}=Z();return(t,r)=>P(e).nav?(y(),k("nav",xg,[(y(!0),k(le,null,Oe(P(e).nav,s=>(y(),k(le,{key:JSON.stringify(s)},["link"in s?(y(),q(bg,{key:0,item:s},null,8,["item"])):"component"in s?(y(),q(tt(s.component),Nt({key:1,ref_for:!0},s.props,{"screen-menu":""}),null,16)):(y(),q(Ug,{key:2,text:s.text||"",items:s.items},null,8,["text","items"]))],64))),128))])):F("",!0)}}),jg=B({__name:"VPNavScreenSocialLinks",setup(n){const{theme:e}=Z();return(t,r)=>P(e).socialLinks?(y(),q(Fs,{key:0,class:"VPNavScreenSocialLinks",links:P(e).socialLinks},null,8,["links"])):F("",!0)}}),Hg={class:"list"},qg=B({__name:"VPNavScreenTranslations",setup(n){const{localeLinks:e,currentLang:t}=gr({correspondingLink:!0}),r=Q(!1);function s(){r.value=!r.value}return(o,a)=>P(e).length&&P(t).label?(y(),k("div",{key:0,class:ie(["VPNavScreenTranslations",{open:r.value}])},[R("button",{class:"title",onClick:s},[a[0]||(a[0]=R("span",{class:"vpi-languages icon lang"},null,-1)),gt(" "+te(P(t).label)+" ",1),a[1]||(a[1]=R("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),R("ul",Hg,[(y(!0),k(le,null,Oe(P(e),c=>(y(),k("li",{key:c.link,class:"item"},[j(qe,{class:"link",href:c.link},{default:D(()=>[gt(te(c.text),1)]),_:2},1032,["href"])]))),128))])],2)):F("",!0)}}),zg=H(qg,[["__scopeId","data-v-858fe1a4"]]),Wg={class:"container"},Gg=B({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(n){const e=Q(null),t=Ac(Ms?document.body:null);return(r,s)=>(y(),q(oo,{name:"fade",onEnter:s[0]||(s[0]=o=>t.value=!0),onAfterLeave:s[1]||(s[1]=o=>t.value=!1)},{default:D(()=>[r.open?(y(),k("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[R("div",Wg,[C(r.$slots,"nav-screen-content-before",{},void 0,!0),j(Bg,{class:"menu"}),j(zg,{class:"translations"}),j(Ig,{class:"appearance"}),j(jg,{class:"social-links"}),C(r.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):F("",!0)]),_:3}))}}),Kg=H(Gg,[["__scopeId","data-v-f2779853"]]),Qg={key:0,class:"VPNav"},Jg=B({__name:"VPNav",setup(n){const{isScreenOpen:e,closeScreen:t,toggleScreen:r}=zp(),{frontmatter:s}=Z(),o=G(()=>s.value.navbar!==!1);return bc("close-screen",t),Ds(()=>{Ms&&document.documentElement.classList.toggle("hide-nav",!o.value)}),(a,c)=>o.value?(y(),k("header",Qg,[j(vg,{"is-screen-open":P(e),onToggleScreen:P(r)},{"nav-bar-title-before":D(()=>[C(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":D(()=>[C(a.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":D(()=>[C(a.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":D(()=>[C(a.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),j(Kg,{open:P(e)},{"nav-screen-content-before":D(()=>[C(a.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":D(()=>[C(a.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):F("",!0)}}),Xg=H(Jg,[["__scopeId","data-v-ae24b3ad"]]),Yg=["role","tabindex"],Zg={key:1,class:"items"},e_=B({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(n){const e=n,{collapsed:t,collapsible:r,isLink:s,isActiveLink:o,hasActiveLink:a,hasChildren:c,toggle:h}=Kd(G(()=>e.item)),d=G(()=>c.value?"section":"div"),m=G(()=>s.value?"a":"div"),g=G(()=>c.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),E=G(()=>s.value?void 0:"button"),N=G(()=>[[`level-${e.depth}`],{collapsible:r.value},{collapsed:t.value},{"is-link":s.value},{"is-active":o.value},{"has-active":a.value}]);function O(M){"key"in M&&M.key!=="Enter"||!e.item.link&&h()}function U(){e.item.link&&h()}return(M,J)=>{const K=sn("VPSidebarItem",!0);return y(),q(tt(d.value),{class:ie(["VPSidebarItem",N.value])},{default:D(()=>[M.item.text?(y(),k("div",Nt({key:0,class:"item",role:E.value},bd(M.item.items?{click:O,keydown:O}:{},!0),{tabindex:M.item.items&&0}),[J[1]||(J[1]=R("div",{class:"indicator"},null,-1)),M.item.link?(y(),q(qe,{key:0,tag:m.value,class:"link",href:M.item.link,rel:M.item.rel,target:M.item.target},{default:D(()=>[(y(),q(tt(g.value),{class:"text",innerHTML:M.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(y(),q(tt(g.value),{key:1,class:"text",innerHTML:M.item.text},null,8,["innerHTML"])),M.item.collapsed!=null&&M.item.items&&M.item.items.length?(y(),k("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:U,onKeydown:Pd(U,["enter"]),tabindex:"0"},J[0]||(J[0]=[R("span",{class:"vpi-chevron-right caret-icon"},null,-1)]),32)):F("",!0)],16,Yg)):F("",!0),M.item.items&&M.item.items.length?(y(),k("div",Zg,[M.depth<5?(y(!0),k(le,{key:0},Oe(M.item.items,ne=>(y(),q(K,{key:ne.text,item:ne,depth:M.depth+1},null,8,["item","depth"]))),128)):F("",!0)])):F("",!0)]),_:1},8,["class"])}}}),t_=H(e_,[["__scopeId","data-v-b3fd67f8"]]),n_=B({__name:"VPSidebarGroup",props:{items:{}},setup(n){const e=Q(!0);let t=null;return Ze(()=>{t=setTimeout(()=>{t=null,e.value=!1},300)}),Sd(()=>{t!=null&&(clearTimeout(t),t=null)}),(r,s)=>(y(!0),k(le,null,Oe(r.items,o=>(y(),k("div",{key:o.text,class:ie(["group",{"no-transition":e.value}])},[j(t_,{item:o,depth:0},null,8,["item"])],2))),128))}}),r_=H(n_,[["__scopeId","data-v-c40bc020"]]),s_={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},i_=B({__name:"VPSidebar",props:{open:{type:Boolean}},setup(n){const{sidebarGroups:e,hasSidebar:t}=yt(),r=n,s=Q(null),o=Ac(Ms?document.body:null);st([r,s],()=>{var c;r.open?(o.value=!0,(c=s.value)==null||c.focus()):o.value=!1},{immediate:!0,flush:"post"});const a=Q(0);return st(e,()=>{a.value+=1},{deep:!0}),(c,h)=>P(t)?(y(),k("aside",{key:0,class:ie(["VPSidebar",{open:c.open}]),ref_key:"navEl",ref:s,onClick:h[0]||(h[0]=ts(()=>{},["stop"]))},[h[2]||(h[2]=R("div",{class:"curtain"},null,-1)),R("nav",s_,[h[1]||(h[1]=R("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),C(c.$slots,"sidebar-nav-before",{},void 0,!0),(y(),q(r_,{items:P(e),key:a.value},null,8,["items"])),C(c.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):F("",!0)}}),o_=H(i_,[["__scopeId","data-v-319d5ca6"]]),a_=B({__name:"VPSkipLink",setup(n){const{theme:e}=Z(),t=mr(),r=Q();st(()=>t.path,()=>r.value.focus());function s({target:o}){const a=document.getElementById(decodeURIComponent(o.hash).slice(1));if(a){const c=()=>{a.removeAttribute("tabindex"),a.removeEventListener("blur",c)};a.setAttribute("tabindex","-1"),a.addEventListener("blur",c),a.focus(),window.scrollTo(0,0)}}return(o,a)=>(y(),k(le,null,[R("span",{ref_key:"backToTop",ref:r,tabindex:"-1"},null,512),R("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:s},te(P(e).skipToContentLabel||"Skip to content"),1)],64))}}),l_=H(a_,[["__scopeId","data-v-0b0ada53"]]),c_=B({__name:"Layout",setup(n){const{isOpen:e,open:t,close:r}=yt(),s=mr();st(()=>s.path,r),Gd(e,r);const{frontmatter:o}=Z(),a=kd(),c=G(()=>!!a["home-hero-image"]);return bc("hero-image-slot-exists",c),(h,d)=>{const m=sn("Content");return P(o).layout!==!1?(y(),k("div",{key:0,class:ie(["Layout",P(o).pageClass])},[C(h.$slots,"layout-top",{},void 0,!0),j(l_),j(Ld,{class:"backdrop",show:P(e),onClick:P(r)},null,8,["show","onClick"]),j(Xg,null,{"nav-bar-title-before":D(()=>[C(h.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":D(()=>[C(h.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":D(()=>[C(h.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":D(()=>[C(h.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":D(()=>[C(h.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":D(()=>[C(h.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),j(qp,{open:P(e),onOpenMenu:P(t)},null,8,["open","onOpenMenu"]),j(o_,{open:P(e)},{"sidebar-nav-before":D(()=>[C(h.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":D(()=>[C(h.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),j(kp,null,{"page-top":D(()=>[C(h.$slots,"page-top",{},void 0,!0)]),"page-bottom":D(()=>[C(h.$slots,"page-bottom",{},void 0,!0)]),"not-found":D(()=>[C(h.$slots,"not-found",{},void 0,!0)]),"home-hero-before":D(()=>[C(h.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":D(()=>[C(h.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":D(()=>[C(h.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":D(()=>[C(h.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":D(()=>[C(h.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":D(()=>[C(h.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":D(()=>[C(h.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":D(()=>[C(h.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":D(()=>[C(h.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":D(()=>[C(h.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":D(()=>[C(h.$slots,"doc-before",{},void 0,!0)]),"doc-after":D(()=>[C(h.$slots,"doc-after",{},void 0,!0)]),"doc-top":D(()=>[C(h.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":D(()=>[C(h.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":D(()=>[C(h.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":D(()=>[C(h.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":D(()=>[C(h.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":D(()=>[C(h.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":D(()=>[C(h.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":D(()=>[C(h.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),j(Dp),C(h.$slots,"layout-bottom",{},void 0,!0)],2)):(y(),q(m,{key:1}))}}}),u_=H(c_,[["__scopeId","data-v-5d98c3a5"]]),h_={class:"profile"},d_={class:"avatar"},f_=["src","alt"],p_={class:"data"},m_={class:"name"},g_={key:0,class:"affiliation"},__={key:0,class:"title"},v_={key:1,class:"at"},y_=["innerHTML"],E_={key:2,class:"links"},T_={key:0,class:"sp"},I_=B({__name:"VPTeamMembersItem",props:{size:{default:"medium"},member:{}},setup(n){return(e,t)=>(y(),k("article",{class:ie(["VPTeamMembersItem",[e.size]])},[R("div",h_,[R("figure",d_,[R("img",{class:"avatar-img",src:e.member.avatar,alt:e.member.name},null,8,f_)]),R("div",p_,[R("h1",m_,te(e.member.name),1),e.member.title||e.member.org?(y(),k("p",g_,[e.member.title?(y(),k("span",__,te(e.member.title),1)):F("",!0),e.member.title&&e.member.org?(y(),k("span",v_," @ ")):F("",!0),e.member.org?(y(),q(qe,{key:2,class:ie(["org",{link:e.member.orgLink}]),href:e.member.orgLink,"no-icon":""},{default:D(()=>[gt(te(e.member.org),1)]),_:1},8,["class","href"])):F("",!0)])):F("",!0),e.member.desc?(y(),k("p",{key:1,class:"desc",innerHTML:e.member.desc},null,8,y_)):F("",!0),e.member.links?(y(),k("div",E_,[j(Fs,{links:e.member.links},null,8,["links"])])):F("",!0)])]),e.member.sponsor?(y(),k("div",T_,[j(qe,{class:"sp-link",href:e.member.sponsor,"no-icon":""},{default:D(()=>[t[0]||(t[0]=R("span",{class:"vpi-heart sp-icon"},null,-1)),gt(" "+te(e.member.actionText||"Sponsor"),1)]),_:1,__:[0]},8,["href"])])):F("",!0)],2))}}),w_=H(I_,[["__scopeId","data-v-f3fa364a"]]),A_={class:"container"},b_=B({__name:"VPTeamMembers",props:{size:{default:"medium"},members:{}},setup(n){const e=n,t=G(()=>[e.size,`count-${e.members.length}`]);return(r,s)=>(y(),k("div",{class:ie(["VPTeamMembers",t.value])},[R("div",A_,[(y(!0),k(le,null,Oe(r.members,o=>(y(),k("div",{key:o.name,class:"item"},[j(w_,{size:r.size,member:o},null,8,["size","member"])]))),128))])],2))}}),UA=H(b_,[["__scopeId","data-v-6cb0dbc4"]]),tl={Layout:u_,enhanceApp:({app:n})=>{n.component("Badge",Vd)}},P_=()=>{};var nl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},S_=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[t++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[t++],a=n[t++],c=n[t++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Dc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,c=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,m=o>>2,g=(o&3)<<4|c>>4;let E=(c&15)<<2|d>>6,N=d&63;h||(N=64,a||(E=64)),r.push(t[m],t[g],t[E],t[N])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Nc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):S_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,o==null||c==null||d==null||g==null)throw new k_;const E=o<<2|c>>4;if(r.push(E),d!==64){const N=c<<4&240|d>>2;if(r.push(N),g!==64){const O=d<<6&192|g;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class k_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const R_=function(n){const e=Nc(n);return Dc.encodeByteArray(e,!0)},fs=function(n){return R_(n).replace(/\./g,"")},Lc=function(n){try{return Dc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_=()=>C_().__FIREBASE_DEFAULTS__,N_=()=>{if(typeof process>"u"||typeof nl>"u")return;const n=nl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},D_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Lc(n[1]);return e&&JSON.parse(e)},Us=()=>{try{return P_()||V_()||N_()||D_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Oc=n=>{var e,t;return(t=(e=Us())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},L_=n=>{const e=Oc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Mc=()=>{var n;return(n=Us())==null?void 0:n.config},$c=n=>{var e;return(e=Us())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Fc(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[fs(JSON.stringify(t)),fs(JSON.stringify(a)),""].join(".")}const Zn={};function $_(){const n={prod:[],emulator:[]};for(const e of Object.keys(Zn))Zn[e]?n.emulator.push(e):n.prod.push(e);return n}function F_(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let rl=!1;function Uc(n,e){if(typeof window>"u"||typeof document>"u"||!Sn(window.location.host)||Zn[n]===e||Zn[n]||rl)return;Zn[n]=e;function t(E){return`__firebase__banner__${E}`}const r="__firebase__banner",o=$_().prod.length>0;function a(){const E=document.getElementById(r);E&&E.remove()}function c(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function h(E,N){E.setAttribute("width","24"),E.setAttribute("id",N),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function d(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{rl=!0,a()},E}function m(E,N){E.setAttribute("id",N),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function g(){const E=F_(r),N=t("text"),O=document.getElementById(N)||document.createElement("span"),U=t("learnmore"),M=document.getElementById(U)||document.createElement("a"),J=t("preprendIcon"),K=document.getElementById(J)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const ne=E.element;c(ne),m(M,U);const fe=d();h(K,J),ne.append(K,O,M,fe),document.body.appendChild(ne)}o?(O.innerText="Preview backend disconnected.",K.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(K.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",N)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function U_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function x_(){var e;const n=(e=Us())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function B_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function j_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function H_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function q_(){const n=Le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function z_(){return!x_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function W_(){try{return typeof indexedDB=="object"}catch{return!1}}function G_(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var o;e(((o=s.error)==null?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_="FirebaseError";class Et extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=K_,Object.setPrototypeOf(this,Et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_r.prototype.create)}}class _r{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?Q_(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Et(s,c,r)}}function Q_(n,e){return n.replace(J_,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const J_=/\{\$([^}]+)}/g;function X_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Jt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const o=n[s],a=e[s];if(sl(o)&&sl(a)){if(!Jt(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function sl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Jn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,o]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(o)}}),e}function Xn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Y_(n,e){const t=new Z_(n,e);return t.subscribe.bind(t)}class Z_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");ev(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ii),s.error===void 0&&(s.error=Ii),s.complete===void 0&&(s.complete=Ii);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ev(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ii(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(n){return n&&n._delegate?n._delegate:n}class Xt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new O_;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rv(e))try{this.getOrInitializeService({instanceIdentifier:zt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=zt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zt){return this.instances.has(e)}getOptions(e=zt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nv(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zt){return this.component?this.component.multipleInstances?e:zt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nv(n){return n===zt?void 0:n}function rv(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new tv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ee||(ee={}));const iv={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},ov=ee.INFO,av={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},lv=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=av[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class go{constructor(e){this.name=e,this._logLevel=ov,this._logHandler=lv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const cv=(n,e)=>e.some(t=>n instanceof t);let il,ol;function uv(){return il||(il=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hv(){return ol||(ol=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xc=new WeakMap,Ui=new WeakMap,Bc=new WeakMap,wi=new WeakMap,_o=new WeakMap;function dv(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(Dt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&xc.set(t,n)}).catch(()=>{}),_o.set(e,n),e}function fv(n){if(Ui.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Ui.set(n,e)}let xi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ui.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Bc.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Dt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function pv(n){xi=n(xi)}function mv(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ai(this),e,...t);return Bc.set(r,e.sort?e.sort():[e]),Dt(r)}:hv().includes(n)?function(...e){return n.apply(Ai(this),e),Dt(xc.get(this))}:function(...e){return Dt(n.apply(Ai(this),e))}}function gv(n){return typeof n=="function"?mv(n):(n instanceof IDBTransaction&&fv(n),cv(n,uv())?new Proxy(n,xi):n)}function Dt(n){if(n instanceof IDBRequest)return dv(n);if(wi.has(n))return wi.get(n);const e=gv(n);return e!==n&&(wi.set(n,e),_o.set(e,n)),e}const Ai=n=>_o.get(n);function _v(n,e,{blocked:t,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,e),c=Dt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Dt(a.result),h.oldVersion,h.newVersion,Dt(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const vv=["get","getKey","getAll","getAllKeys","count"],yv=["put","add","delete","clear"],bi=new Map;function al(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(bi.get(e))return bi.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=yv.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||vv.includes(t)))return;const o=async function(a,...c){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&h.done]))[0]};return bi.set(e,o),o}pv(n=>({...n,get:(e,t,r)=>al(e,t)||n.get(e,t,r),has:(e,t)=>!!al(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Tv(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Tv(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bi="@firebase/app",ll="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=new go("@firebase/app"),Iv="@firebase/app-compat",wv="@firebase/analytics-compat",Av="@firebase/analytics",bv="@firebase/app-check-compat",Pv="@firebase/app-check",Sv="@firebase/auth",kv="@firebase/auth-compat",Rv="@firebase/database",Cv="@firebase/data-connect",Vv="@firebase/database-compat",Nv="@firebase/functions",Dv="@firebase/functions-compat",Lv="@firebase/installations",Ov="@firebase/installations-compat",Mv="@firebase/messaging",$v="@firebase/messaging-compat",Fv="@firebase/performance",Uv="@firebase/performance-compat",xv="@firebase/remote-config",Bv="@firebase/remote-config-compat",jv="@firebase/storage",Hv="@firebase/storage-compat",qv="@firebase/firestore",zv="@firebase/ai",Wv="@firebase/firestore-compat",Gv="firebase",Kv="12.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji="[DEFAULT]",Qv={[Bi]:"fire-core",[Iv]:"fire-core-compat",[Av]:"fire-analytics",[wv]:"fire-analytics-compat",[Pv]:"fire-app-check",[bv]:"fire-app-check-compat",[Sv]:"fire-auth",[kv]:"fire-auth-compat",[Rv]:"fire-rtdb",[Cv]:"fire-data-connect",[Vv]:"fire-rtdb-compat",[Nv]:"fire-fn",[Dv]:"fire-fn-compat",[Lv]:"fire-iid",[Ov]:"fire-iid-compat",[Mv]:"fire-fcm",[$v]:"fire-fcm-compat",[Fv]:"fire-perf",[Uv]:"fire-perf-compat",[xv]:"fire-rc",[Bv]:"fire-rc-compat",[jv]:"fire-gcs",[Hv]:"fire-gcs-compat",[qv]:"fire-fst",[Wv]:"fire-fst-compat",[zv]:"fire-vertex","fire-js":"fire-js",[Gv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=new Map,Jv=new Map,Hi=new Map;function cl(n,e){try{n.container.addComponent(e)}catch(t){_t.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Tn(n){const e=n.name;if(Hi.has(e))return _t.debug(`There were multiple attempts to register component ${e}.`),!1;Hi.set(e,n);for(const t of ps.values())cl(t,n);for(const t of Jv.values())cl(t,n);return!0}function vo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function He(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Lt=new _r("app","Firebase",Xv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=Kv;function jc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:ji,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Lt.create("bad-app-name",{appName:String(s)});if(t||(t=Mc()),!t)throw Lt.create("no-options");const o=ps.get(s);if(o){if(Jt(t,o.options)&&Jt(r,o.config))return o;throw Lt.create("duplicate-app",{appName:s})}const a=new sv(s);for(const h of Hi.values())a.addComponent(h);const c=new Yv(t,r,a);return ps.set(s,c),c}function Hc(n=ji){const e=ps.get(n);if(!e&&n===ji&&Mc())return jc();if(!e)throw Lt.create("no-app",{appName:n});return e}function Ot(n,e,t){let r=Qv[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_t.warn(a.join(" "));return}Tn(new Xt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv="firebase-heartbeat-database",ey=1,or="firebase-heartbeat-store";let Pi=null;function qc(){return Pi||(Pi=_v(Zv,ey,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(or)}catch(t){console.warn(t)}}}}).catch(n=>{throw Lt.create("idb-open",{originalErrorMessage:n.message})})),Pi}async function ty(n){try{const t=(await qc()).transaction(or),r=await t.objectStore(or).get(zc(n));return await t.done,r}catch(e){if(e instanceof Et)_t.warn(e.message);else{const t=Lt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_t.warn(t.message)}}}async function ul(n,e){try{const r=(await qc()).transaction(or,"readwrite");await r.objectStore(or).put(e,zc(n)),await r.done}catch(t){if(t instanceof Et)_t.warn(t.message);else{const r=Lt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});_t.warn(r.message)}}}function zc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny=1024,ry=30;class sy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new oy(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=hl();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>ry){const a=ay(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){_t.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=hl(),{heartbeatsToSend:r,unsentEntries:s}=iy(this._heartbeatsCache.heartbeats),o=fs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return _t.warn(t),""}}}function hl(){return new Date().toISOString().substring(0,10)}function iy(n,e=ny){const t=[];let r=n.slice();for(const s of n){const o=t.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),dl(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),dl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class oy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return W_()?G_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ty(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ul(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ul(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function dl(n){return fs(JSON.stringify({version:2,heartbeats:n})).length}function ay(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(n){Tn(new Xt("platform-logger",e=>new Ev(e),"PRIVATE")),Tn(new Xt("heartbeat",e=>new sy(e),"PRIVATE")),Ot(Bi,ll,n),Ot(Bi,ll,"esm2020"),Ot("fire-js","")}ly("");var cy="firebase",uy="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot(cy,uy,"app");function Wc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hy=Wc,Gc=new _r("auth","Firebase",Wc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=new go("@firebase/auth");function dy(n,...e){ms.logLevel<=ee.WARN&&ms.warn(`Auth (${kn}): ${n}`,...e)}function rs(n,...e){ms.logLevel<=ee.ERROR&&ms.error(`Auth (${kn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(n,...e){throw yo(n,...e)}function nt(n,...e){return yo(n,...e)}function Kc(n,e,t){const r={...hy(),[e]:t};return new _r("auth","Firebase",r).create(e,{appName:n.name})}function dt(n){return Kc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Gc.create(n,...e)}function W(n,e,...t){if(!n)throw yo(e,...t)}function ut(n){const e="INTERNAL ASSERTION FAILED: "+n;throw rs(e),new Error(e)}function vt(n,e){n||ut(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function fy(){return fl()==="http:"||fl()==="https:"}function fl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fy()||j_()||"connection"in navigator)?navigator.onLine:!0}function my(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,t){this.shortDelay=e,this.longDelay=t,vt(t>e,"Short delay should be less than long delay!"),this.isMobile=U_()||H_()}get(){return py()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(n,e){vt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],vy=new yr(3e4,6e4);function Tt(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function It(n,e,t,r,s={}){return Jc(n,s,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const c=vr({key:n.config.apiKey,...a}).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:h,...o};return B_()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Sn(n.emulatorConfig.host)&&(d.credentials="include"),Qc.fetch()(await Xc(n,n.config.apiHost,t,c),d)})}async function Jc(n,e,t){n._canInitEmulator=!1;const r={...gy,...e};try{const s=new Ey(n),o=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Kr(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const c=o.ok?a.errorMessage:a.error.message,[h,d]=c.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Kr(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw Kr(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw Kr(n,"user-disabled",a);const m=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Kc(n,m,d);Ye(n,m)}}catch(s){if(s instanceof Et)throw s;Ye(n,"network-request-failed",{message:String(s)})}}async function Er(n,e,t,r,s={}){const o=await It(n,e,t,r,s);return"mfaPendingCredential"in o&&Ye(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function Xc(n,e,t,r){const s=`${e}${t}?${r}`,o=n,a=o.config.emulator?Eo(n.config,s):`${n.config.apiScheme}://${s}`;return _y.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}function yy(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ey{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(nt(this.auth,"network-request-failed")),vy.get())})}}function Kr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=nt(n,e,r);return s.customData._tokenResponse=t,s}function pl(n){return n!==void 0&&n.enterprise!==void 0}class Ty{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return yy(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Iy(n,e){return It(n,"GET","/v2/recaptchaConfig",Tt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wy(n,e){return It(n,"POST","/v1/accounts:delete",e)}async function gs(n,e){return It(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ay(n,e=!1){const t=je(n),r=await t.getIdToken(e),s=To(r);W(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:er(Si(s.auth_time)),issuedAtTime:er(Si(s.iat)),expirationTime:er(Si(s.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Si(n){return Number(n)*1e3}function To(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return rs("JWT malformed, contained fewer than 3 sections"),null;try{const s=Lc(t);return s?JSON.parse(s):(rs("Failed to decode base64 JWT payload"),null)}catch(s){return rs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ml(n){const e=To(n);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ar(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Et&&by(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function by({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=er(this.lastLoginAt),this.creationTime=er(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _s(n){var g;const e=n.auth,t=await n.getIdToken(),r=await ar(n,gs(e,{idToken:t}));W(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const o=(g=s.providerUserInfo)!=null&&g.length?Yc(s.providerUserInfo):[],a=ky(n.providerData,o),c=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=c?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new zi(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,m)}async function Sy(n){const e=je(n);await _s(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ky(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Yc(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ry(n,e){const t=await Jc(n,{},async()=>{const r=vr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=n.config,a=await Xc(n,s,"/v1/token",`key=${o}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:c,body:r};return n.emulatorConfig&&Sn(n.emulatorConfig.host)&&(h.credentials="include"),Qc.fetch()(a,h)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Cy(n,e){return It(n,"POST","/v2/accounts:revokeToken",Tt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ml(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){W(e.length!==0,"internal-error");const t=ml(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:o}=await Ry(e,t);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:o}=t,a=new gn;return r&&(W(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(W(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gn,this.toJSON())}_performRefresh(){return ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(n,e){W(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Je{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Py(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new zi(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ar(this,this.stsTokenManager.getToken(this.auth,e));return W(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ay(this,e)}reload(){return Sy(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Je({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await _s(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(He(this.auth.app))return Promise.reject(dt(this.auth));const e=await this.getIdToken();return await ar(this,wy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,o=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,h=t._redirectEventId??void 0,d=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:g,emailVerified:E,isAnonymous:N,providerData:O,stsTokenManager:U}=t;W(g&&U,e,"internal-error");const M=gn.fromJSON(this.name,U);W(typeof g=="string",e,"internal-error"),St(r,e.name),St(s,e.name),W(typeof E=="boolean",e,"internal-error"),W(typeof N=="boolean",e,"internal-error"),St(o,e.name),St(a,e.name),St(c,e.name),St(h,e.name),St(d,e.name),St(m,e.name);const J=new Je({uid:g,auth:e,email:s,emailVerified:E,displayName:r,isAnonymous:N,photoURL:a,phoneNumber:o,tenantId:c,stsTokenManager:M,createdAt:d,lastLoginAt:m});return O&&Array.isArray(O)&&(J.providerData=O.map(K=>({...K}))),h&&(J._redirectEventId=h),J}static async _fromIdTokenResponse(e,t,r=!1){const s=new gn;s.updateFromServerResponse(t);const o=new Je({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await _s(o),o}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];W(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?Yc(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),c=new gn;c.updateFromIdToken(r);const h=new Je({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new zi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,d),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl=new Map;function ht(n){vt(n instanceof Function,"Expected a class definition");let e=gl.get(n);return e?(vt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,gl.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Zc.type="NONE";const _l=Zc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(n,e,t){return`firebase:${n}:${e}:${t}`}class _n{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=ss(this.userKey,s.apiKey,o),this.fullPersistenceKey=ss("persistence",s.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await gs(this.auth,{idToken:e}).catch(()=>{});return t?Je._fromGetAccountInfoResponse(this.auth,t,e):null}return Je._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new _n(ht(_l),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=s[0]||ht(_l);const a=ss(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const m=await d._get(a);if(m){let g;if(typeof m=="string"){const E=await gs(e,{idToken:m}).catch(()=>{});if(!E)break;g=await Je._fromGetAccountInfoResponse(e,E,m)}else g=Je._fromJSON(e,m);d!==o&&(c=g),o=d;break}}catch{}const h=s.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new _n(o,e,r):(o=h[0],c&&await o._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new _n(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ru(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(eu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(iu(e))return"Blackberry";if(ou(e))return"Webos";if(tu(e))return"Safari";if((e.includes("chrome/")||nu(e))&&!e.includes("edge/"))return"Chrome";if(su(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function eu(n=Le()){return/firefox\//i.test(n)}function tu(n=Le()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nu(n=Le()){return/crios\//i.test(n)}function ru(n=Le()){return/iemobile/i.test(n)}function su(n=Le()){return/android/i.test(n)}function iu(n=Le()){return/blackberry/i.test(n)}function ou(n=Le()){return/webos/i.test(n)}function Io(n=Le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Vy(n=Le()){var e;return Io(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Ny(){return q_()&&document.documentMode===10}function au(n=Le()){return Io(n)||su(n)||ou(n)||iu(n)||/windows phone/i.test(n)||ru(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(n,e=[]){let t;switch(n){case"Browser":t=vl(Le());break;case"Worker":t=`${vl(Le())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${kn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,c)=>{try{const h=e(o);a(h)}catch(h){c(h)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ly(n,e={}){return It(n,"GET","/v2/passwordPolicy",Tt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy=6;class My{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Oy,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yl(this),this.idTokenSubscription=new yl(this),this.beforeStateQueue=new Dy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ht(t)),this._initializationPromise=this.queue(async()=>{var r,s,o;if(!this._deleted&&(this.persistenceManager=await _n.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)==null?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await gs(this,{idToken:e}),r=await Je._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var o;if(He(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(o=this.redirectUser)==null?void 0:o._redirectEventId,c=r==null?void 0:r._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===c)&&(h!=null&&h.user)&&(r=h.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await _s(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=my()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(He(this.app))return Promise.reject(dt(this));const t=e?je(e):null;return t&&W(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return He(this.app)?Promise.reject(dt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return He(this.app)?Promise.reject(dt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ht(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ly(this),t=new My(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _r("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Cy(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ht(e)||this._popupRedirectResolver;W(t,this,"argument-error"),this.redirectPersistenceManager=await _n.create(this,[ht(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(c,this,"internal-error"),c.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,s);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(He(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&dy(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function xt(n){return je(n)}class yl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Y_(t=>this.observer=t)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Fy(n){xs=n}function cu(n){return xs.loadJS(n)}function Uy(){return xs.recaptchaEnterpriseScript}function xy(){return xs.gapiScript}function By(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class jy{constructor(){this.enterprise=new Hy}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Hy{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const qy="recaptcha-enterprise",uu="NO_RECAPTCHA";class zy{constructor(e){this.type=qy,this.auth=xt(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,c)=>{Iy(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new Ty(h);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(h=>{c(h)})})}function s(o,a,c){const h=window.grecaptcha;pl(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:e}).then(d=>{a(d)}).catch(()=>{a(uu)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new jy().execute("siteKey",{action:"verify"}):new Promise((o,a)=>{r(this.auth).then(c=>{if(!t&&pl(window.grecaptcha))s(c,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let h=Uy();h.length!==0&&(h+=c),cu(h).then(()=>{s(c,o,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function El(n,e,t,r=!1,s=!1){const o=new zy(n);let a;if(s)a=uu;else try{a=await o.verify(t)}catch{a=await o.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const h=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const h=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function vs(n,e,t,r,s){var o;if((o=n._getRecaptchaConfig())!=null&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await El(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await El(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(n,e){const t=vo(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),o=t.getOptions();if(Jt(o,e??{}))return s;Ye(s,"already-initialized")}return t.initialize({options:e})}function Gy(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ht);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ky(n,e,t){const r=xt(n);W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,o=hu(e),{host:a,port:c}=Qy(e),h=c===null?"":`:${c}`,d={url:`${o}//${a}${h}/`},m=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){W(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),W(Jt(d,r.config.emulator)&&Jt(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,Sn(a)?(Fc(`${o}//${a}${h}`),Uc("Auth",!0)):Jy()}function hu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Qy(n){const e=hu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:Tl(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Tl(a)}}}function Tl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Jy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ut("not implemented")}_getIdTokenResponse(e){return ut("not implemented")}_linkToIdToken(e,t){return ut("not implemented")}_getReauthenticationResolver(e){return ut("not implemented")}}async function Xy(n,e){return It(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yy(n,e){return Er(n,"POST","/v1/accounts:signInWithPassword",Tt(n,e))}async function Zy(n,e){return It(n,"POST","/v1/accounts:sendOobCode",Tt(n,e))}async function eE(n,e){return Zy(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tE(n,e){return Er(n,"POST","/v1/accounts:signInWithEmailLink",Tt(n,e))}async function nE(n,e){return Er(n,"POST","/v1/accounts:signInWithEmailLink",Tt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends wo{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new lr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new lr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vs(e,t,"signInWithPassword",Yy);case"emailLink":return tE(e,{email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vs(e,r,"signUpPassword",Xy);case"emailLink":return nE(e,{idToken:t,email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vn(n,e){return Er(n,"POST","/v1/accounts:signInWithIdp",Tt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE="http://localhost";class Yt extends wo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Yt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ye("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...o}=t;if(!r||!s)return null;const a=new Yt(r,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return vn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,vn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vn(e,t)}buildRequest(){const e={requestUri:rE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=vr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function iE(n){const e=Jn(Xn(n)).link,t=e?Jn(Xn(e)).deep_link_id:null,r=Jn(Xn(n)).deep_link_id;return(r?Jn(Xn(r)).link:null)||r||t||e||n}class Ao{constructor(e){const t=Jn(Xn(e)),r=t.apiKey??null,s=t.oobCode??null,o=sE(t.mode??null);W(r&&s&&o,"argument-error"),this.apiKey=r,this.operation=o,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=iE(e);try{return new Ao(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this.providerId=Rn.PROVIDER_ID}static credential(e,t){return lr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ao.parseLink(t);return W(r,"argument-error"),lr._fromEmailAndCode(e,r.code,r.tenantId)}}Rn.PROVIDER_ID="password";Rn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Rn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends du{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends Tr{constructor(){super("facebook.com")}static credential(e){return Yt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";kt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends Tr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Yt._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Rt.credential(t,r)}catch{return null}}}Rt.GOOGLE_SIGN_IN_METHOD="google.com";Rt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends Tr{constructor(){super("github.com")}static credential(e){return Yt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch{return null}}}Ct.GITHUB_SIGN_IN_METHOD="github.com";Ct.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Tr{constructor(){super("twitter.com")}static credential(e,t){return Yt._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Vt.credential(t,r)}catch{return null}}}Vt.TWITTER_SIGN_IN_METHOD="twitter.com";Vt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oE(n,e){return Er(n,"POST","/v1/accounts:signUp",Tt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const o=await Je._fromIdTokenResponse(e,r,s),a=Il(r);return new Zt({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Il(r);return new Zt({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Il(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends Et{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ys.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ys(e,t,r,s)}}function fu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ys._fromErrorAndOperation(n,o,e,r):o})}async function aE(n,e,t=!1){const r=await ar(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Zt._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lE(n,e,t=!1){const{auth:r}=n;if(He(r.app))return Promise.reject(dt(r));const s="reauthenticate";try{const o=await ar(n,fu(r,s,e,n),t);W(o.idToken,r,"internal-error");const a=To(o.idToken);W(a,r,"internal-error");const{sub:c}=a;return W(n.uid===c,r,"user-mismatch"),Zt._forOperation(n,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ye(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pu(n,e,t=!1){if(He(n.app))return Promise.reject(dt(n));const r="signIn",s=await fu(n,r,e),o=await Zt._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(o.user),o}async function cE(n,e){return pu(xt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mu(n){const e=xt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function uE(n,e,t){const r=xt(n);await vs(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",eE)}async function hE(n,e,t){if(He(n.app))return Promise.reject(dt(n));const r=xt(n),a=await vs(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",oE).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&mu(n),h}),c=await Zt._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function dE(n,e,t){return He(n.app)?Promise.reject(dt(n)):cE(je(n),Rn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&mu(n),r})}function fE(n,e,t,r){return je(n).onIdTokenChanged(e,t,r)}function pE(n,e,t){return je(n).beforeAuthStateChanged(e,t)}function gu(n,e,t,r){return je(n).onAuthStateChanged(e,t,r)}function mE(n){return je(n).signOut()}const Es="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Es,"1"),this.storage.removeItem(Es),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE=1e3,_E=10;class vu extends _u{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=au(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,h)=>{this.notifyListeners(a,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);Ny()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,_E):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},gE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vu.type="LOCAL";const vE=vu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu extends _u{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}yu.type="SESSION";const Eu=yu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Bs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:o}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,o)),h=await yE(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((c,h)=>{const d=bo("",20);s.port1.start();const m=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const E=g;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(m),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(E.data.response);break;default:clearTimeout(m),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return window}function TE(n){rt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function IE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wE(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function AE(){return Tu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu="firebaseLocalStorageDb",bE=1,Ts="firebaseLocalStorage",wu="fbase_key";class Ir{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function js(n,e){return n.transaction([Ts],e?"readwrite":"readonly").objectStore(Ts)}function PE(){const n=indexedDB.deleteDatabase(Iu);return new Ir(n).toPromise()}function Wi(){const n=indexedDB.open(Iu,bE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ts,{keyPath:wu})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ts)?e(r):(r.close(),await PE(),e(await Wi()))})})}async function wl(n,e,t){const r=js(n,!0).put({[wu]:e,value:t});return new Ir(r).toPromise()}async function SE(n,e){const t=js(n,!1).get(e),r=await new Ir(t).toPromise();return r===void 0?null:r.value}function Al(n,e){const t=js(n,!0).delete(e);return new Ir(t).toPromise()}const kE=800,RE=3;class Au{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>RE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bs._getInstance(AE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await IE(),!this.activeServiceWorker)return;this.sender=new EE(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wi();return await wl(e,Es,"1"),await Al(e,Es),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>wl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>SE(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Al(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=js(s,!1).getAll();return new Ir(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Au.type="LOCAL";const CE=Au;new yr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(n,e){return e?ht(e):(W(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po extends wo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return vn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return vn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function NE(n){return pu(n.auth,new Po(n),n.bypassAuthState)}function DE(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),lE(t,new Po(n),n.bypassAuthState)}async function LE(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),aE(t,new Po(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,t,r,s,o=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:o,error:a,type:c}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return NE;case"linkViaPopup":case"linkViaRedirect":return LE;case"reauthViaPopup":case"reauthViaRedirect":return DE;default:Ye(this.auth,"internal-error")}}resolve(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE=new yr(2e3,1e4);class mn extends bu{constructor(e,t,r,s,o){super(e,t,s,o),this.provider=r,this.authWindow=null,this.pollId=null,mn.currentPopupAction&&mn.currentPopupAction.cancel(),mn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){vt(this.filter.length===1,"Popup operations only handle one event");const e=bo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OE.get())};e()}}mn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME="pendingRedirect",is=new Map;class $E extends bu{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=is.get(this.auth._key());if(!e){try{const r=await FE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}is.set(this.auth._key(),e)}return this.bypassAuthState||is.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FE(n,e){const t=BE(e),r=xE(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function UE(n,e){is.set(n._key(),e)}function xE(n){return ht(n._redirectPersistence)}function BE(n){return ss(ME,n.config.apiKey,n.name)}async function jE(n,e,t=!1){if(He(n.app))return Promise.reject(dt(n));const r=xt(n),s=VE(r,e),a=await new $E(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=10*60*1e3;class qE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Pu(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(nt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HE&&this.cachedEventUids.clear(),this.cachedEventUids.has(bl(e))}saveEventToCache(e){this.cachedEventUids.add(bl(e)),this.lastProcessedEventTime=Date.now()}}function bl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Pu({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pu(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WE(n,e={}){return It(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KE=/^https?/;async function QE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await WE(n);for(const t of e)try{if(JE(t))return}catch{}Ye(n,"unauthorized-domain")}function JE(n){const e=qi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!KE.test(t))return!1;if(GE.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=new yr(3e4,6e4);function Pl(){const n=rt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function YE(n){return new Promise((e,t)=>{var s,o,a;function r(){Pl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pl(),t(nt(n,"network-request-failed"))},timeout:XE.get()})}if((o=(s=rt().gapi)==null?void 0:s.iframes)!=null&&o.Iframe)e(gapi.iframes.getContext());else if((a=rt().gapi)!=null&&a.load)r();else{const c=By("iframefcb");return rt()[c]=()=>{gapi.load?r():t(nt(n,"network-request-failed"))},cu(`${xy()}?onload=${c}`).catch(h=>t(h))}}).catch(e=>{throw os=null,e})}let os=null;function ZE(n){return os=os||YE(n),os}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT=new yr(5e3,15e3),tT="__/auth/iframe",nT="emulator/auth/iframe",rT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iT(n){const e=n.config;W(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Eo(e,nT):`https://${n.config.authDomain}/${tT}`,r={apiKey:e.apiKey,appName:n.name,v:kn},s=sT.get(n.config.apiHost);s&&(r.eid=s);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${vr(r).slice(1)}`}async function oT(n){const e=await ZE(n),t=rt().gapi;return W(t,n,"internal-error"),e.open({where:document.body,url:iT(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rT,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const a=nt(n,"network-request-failed"),c=rt().setTimeout(()=>{o(a)},eT.get());function h(){rt().clearTimeout(c),s(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lT=500,cT=600,uT="_blank",hT="http://localhost";class Sl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dT(n,e,t,r=lT,s=cT){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const h={...aT,width:r.toString(),height:s.toString(),top:o,left:a},d=Le().toLowerCase();t&&(c=nu(d)?uT:t),eu(d)&&(e=e||hT,h.scrollbars="yes");const m=Object.entries(h).reduce((E,[N,O])=>`${E}${N}=${O},`,"");if(Vy(d)&&c!=="_self")return fT(e||"",c),new Sl(null);const g=window.open(e||"",c,m);W(g,n,"popup-blocked");try{g.focus()}catch{}return new Sl(g)}function fT(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT="__/auth/handler",mT="emulator/auth/handler",gT=encodeURIComponent("fac");async function kl(n,e,t,r,s,o){W(n.config.authDomain,n,"auth-domain-config-required"),W(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:kn,eventId:s};if(e instanceof du){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",X_(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,g]of Object.entries({}))a[m]=g}if(e instanceof Tr){const m=e.getScopes().filter(g=>g!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const h=await n._getAppCheckToken(),d=h?`#${gT}=${encodeURIComponent(h)}`:"";return`${_T(n)}?${vr(c).slice(1)}${d}`}function _T({config:n}){return n.emulator?Eo(n,mT):`https://${n.authDomain}/${pT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki="webStorageSupport";class vT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Eu,this._completeRedirectFn=jE,this._overrideRedirectResult=UE}async _openPopup(e,t,r,s){var a;vt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await kl(e,t,r,qi(),s);return dT(e,o,bo())}async _openRedirect(e,t,r,s){await this._originValidation(e);const o=await kl(e,t,r,qi(),s);return TE(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:o}=this.eventManagers[t];return s?Promise.resolve(s):(vt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await oT(e),r=new qE(e);return t.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ki,{type:ki},s=>{var a;const o=(a=s==null?void 0:s[0])==null?void 0:a[ki];o!==void 0&&t(!!o),Ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=QE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return au()||tu()||Io()}}const yT=vT;var Rl="@firebase/auth",Cl="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function IT(n){Tn(new Xt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;W(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lu(n)},d=new $y(r,s,o,h);return Gy(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Tn(new Xt("auth-internal",e=>{const t=xt(e.getProvider("auth").getImmediate());return(r=>new ET(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(Rl,Cl,TT(n)),Ot(Rl,Cl,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT=5*60,AT=$c("authIdTokenMaxAge")||wT;let Vl=null;const bT=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>AT)return;const s=t==null?void 0:t.token;Vl!==s&&(Vl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function PT(n=Hc()){const e=vo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Wy(n,{popupRedirectResolver:yT,persistence:[CE,vE,Eu]}),r=$c("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=bT(o.toString());pE(t,a,()=>a(t.currentUser)),fE(t,c=>a(c))}}const s=Oc("auth");return s&&Ky(t,`http://${s}`),t}function ST(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Fy({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const o=nt("internal-error");o.customData=s,t(o)},r.type="text/javascript",r.charset="UTF-8",ST().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});IT("Browser");var Nl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var So;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,p){function v(){}v.prototype=p.prototype,w.D=p.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(T,I,b){for(var _=Array(arguments.length-2),at=2;at<arguments.length;at++)_[at-2]=arguments[at];return p.prototype[I].apply(T,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,p,v){v||(v=0);var T=Array(16);if(typeof p=="string")for(var I=0;16>I;++I)T[I]=p.charCodeAt(v++)|p.charCodeAt(v++)<<8|p.charCodeAt(v++)<<16|p.charCodeAt(v++)<<24;else for(I=0;16>I;++I)T[I]=p[v++]|p[v++]<<8|p[v++]<<16|p[v++]<<24;p=w.g[0],v=w.g[1],I=w.g[2];var b=w.g[3],_=p+(b^v&(I^b))+T[0]+3614090360&4294967295;p=v+(_<<7&4294967295|_>>>25),_=b+(I^p&(v^I))+T[1]+3905402710&4294967295,b=p+(_<<12&4294967295|_>>>20),_=I+(v^b&(p^v))+T[2]+606105819&4294967295,I=b+(_<<17&4294967295|_>>>15),_=v+(p^I&(b^p))+T[3]+3250441966&4294967295,v=I+(_<<22&4294967295|_>>>10),_=p+(b^v&(I^b))+T[4]+4118548399&4294967295,p=v+(_<<7&4294967295|_>>>25),_=b+(I^p&(v^I))+T[5]+1200080426&4294967295,b=p+(_<<12&4294967295|_>>>20),_=I+(v^b&(p^v))+T[6]+2821735955&4294967295,I=b+(_<<17&4294967295|_>>>15),_=v+(p^I&(b^p))+T[7]+4249261313&4294967295,v=I+(_<<22&4294967295|_>>>10),_=p+(b^v&(I^b))+T[8]+1770035416&4294967295,p=v+(_<<7&4294967295|_>>>25),_=b+(I^p&(v^I))+T[9]+2336552879&4294967295,b=p+(_<<12&4294967295|_>>>20),_=I+(v^b&(p^v))+T[10]+4294925233&4294967295,I=b+(_<<17&4294967295|_>>>15),_=v+(p^I&(b^p))+T[11]+2304563134&4294967295,v=I+(_<<22&4294967295|_>>>10),_=p+(b^v&(I^b))+T[12]+1804603682&4294967295,p=v+(_<<7&4294967295|_>>>25),_=b+(I^p&(v^I))+T[13]+4254626195&4294967295,b=p+(_<<12&4294967295|_>>>20),_=I+(v^b&(p^v))+T[14]+2792965006&4294967295,I=b+(_<<17&4294967295|_>>>15),_=v+(p^I&(b^p))+T[15]+1236535329&4294967295,v=I+(_<<22&4294967295|_>>>10),_=p+(I^b&(v^I))+T[1]+4129170786&4294967295,p=v+(_<<5&4294967295|_>>>27),_=b+(v^I&(p^v))+T[6]+3225465664&4294967295,b=p+(_<<9&4294967295|_>>>23),_=I+(p^v&(b^p))+T[11]+643717713&4294967295,I=b+(_<<14&4294967295|_>>>18),_=v+(b^p&(I^b))+T[0]+3921069994&4294967295,v=I+(_<<20&4294967295|_>>>12),_=p+(I^b&(v^I))+T[5]+3593408605&4294967295,p=v+(_<<5&4294967295|_>>>27),_=b+(v^I&(p^v))+T[10]+38016083&4294967295,b=p+(_<<9&4294967295|_>>>23),_=I+(p^v&(b^p))+T[15]+3634488961&4294967295,I=b+(_<<14&4294967295|_>>>18),_=v+(b^p&(I^b))+T[4]+3889429448&4294967295,v=I+(_<<20&4294967295|_>>>12),_=p+(I^b&(v^I))+T[9]+568446438&4294967295,p=v+(_<<5&4294967295|_>>>27),_=b+(v^I&(p^v))+T[14]+3275163606&4294967295,b=p+(_<<9&4294967295|_>>>23),_=I+(p^v&(b^p))+T[3]+4107603335&4294967295,I=b+(_<<14&4294967295|_>>>18),_=v+(b^p&(I^b))+T[8]+1163531501&4294967295,v=I+(_<<20&4294967295|_>>>12),_=p+(I^b&(v^I))+T[13]+2850285829&4294967295,p=v+(_<<5&4294967295|_>>>27),_=b+(v^I&(p^v))+T[2]+4243563512&4294967295,b=p+(_<<9&4294967295|_>>>23),_=I+(p^v&(b^p))+T[7]+1735328473&4294967295,I=b+(_<<14&4294967295|_>>>18),_=v+(b^p&(I^b))+T[12]+2368359562&4294967295,v=I+(_<<20&4294967295|_>>>12),_=p+(v^I^b)+T[5]+4294588738&4294967295,p=v+(_<<4&4294967295|_>>>28),_=b+(p^v^I)+T[8]+2272392833&4294967295,b=p+(_<<11&4294967295|_>>>21),_=I+(b^p^v)+T[11]+1839030562&4294967295,I=b+(_<<16&4294967295|_>>>16),_=v+(I^b^p)+T[14]+4259657740&4294967295,v=I+(_<<23&4294967295|_>>>9),_=p+(v^I^b)+T[1]+2763975236&4294967295,p=v+(_<<4&4294967295|_>>>28),_=b+(p^v^I)+T[4]+1272893353&4294967295,b=p+(_<<11&4294967295|_>>>21),_=I+(b^p^v)+T[7]+4139469664&4294967295,I=b+(_<<16&4294967295|_>>>16),_=v+(I^b^p)+T[10]+3200236656&4294967295,v=I+(_<<23&4294967295|_>>>9),_=p+(v^I^b)+T[13]+681279174&4294967295,p=v+(_<<4&4294967295|_>>>28),_=b+(p^v^I)+T[0]+3936430074&4294967295,b=p+(_<<11&4294967295|_>>>21),_=I+(b^p^v)+T[3]+3572445317&4294967295,I=b+(_<<16&4294967295|_>>>16),_=v+(I^b^p)+T[6]+76029189&4294967295,v=I+(_<<23&4294967295|_>>>9),_=p+(v^I^b)+T[9]+3654602809&4294967295,p=v+(_<<4&4294967295|_>>>28),_=b+(p^v^I)+T[12]+3873151461&4294967295,b=p+(_<<11&4294967295|_>>>21),_=I+(b^p^v)+T[15]+530742520&4294967295,I=b+(_<<16&4294967295|_>>>16),_=v+(I^b^p)+T[2]+3299628645&4294967295,v=I+(_<<23&4294967295|_>>>9),_=p+(I^(v|~b))+T[0]+4096336452&4294967295,p=v+(_<<6&4294967295|_>>>26),_=b+(v^(p|~I))+T[7]+1126891415&4294967295,b=p+(_<<10&4294967295|_>>>22),_=I+(p^(b|~v))+T[14]+2878612391&4294967295,I=b+(_<<15&4294967295|_>>>17),_=v+(b^(I|~p))+T[5]+4237533241&4294967295,v=I+(_<<21&4294967295|_>>>11),_=p+(I^(v|~b))+T[12]+1700485571&4294967295,p=v+(_<<6&4294967295|_>>>26),_=b+(v^(p|~I))+T[3]+2399980690&4294967295,b=p+(_<<10&4294967295|_>>>22),_=I+(p^(b|~v))+T[10]+4293915773&4294967295,I=b+(_<<15&4294967295|_>>>17),_=v+(b^(I|~p))+T[1]+2240044497&4294967295,v=I+(_<<21&4294967295|_>>>11),_=p+(I^(v|~b))+T[8]+1873313359&4294967295,p=v+(_<<6&4294967295|_>>>26),_=b+(v^(p|~I))+T[15]+4264355552&4294967295,b=p+(_<<10&4294967295|_>>>22),_=I+(p^(b|~v))+T[6]+2734768916&4294967295,I=b+(_<<15&4294967295|_>>>17),_=v+(b^(I|~p))+T[13]+1309151649&4294967295,v=I+(_<<21&4294967295|_>>>11),_=p+(I^(v|~b))+T[4]+4149444226&4294967295,p=v+(_<<6&4294967295|_>>>26),_=b+(v^(p|~I))+T[11]+3174756917&4294967295,b=p+(_<<10&4294967295|_>>>22),_=I+(p^(b|~v))+T[2]+718787259&4294967295,I=b+(_<<15&4294967295|_>>>17),_=v+(b^(I|~p))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+p&4294967295,w.g[1]=w.g[1]+(I+(_<<21&4294967295|_>>>11))&4294967295,w.g[2]=w.g[2]+I&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.u=function(w,p){p===void 0&&(p=w.length);for(var v=p-this.blockSize,T=this.B,I=this.h,b=0;b<p;){if(I==0)for(;b<=v;)s(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<p;)if(T[I++]=w.charCodeAt(b++),I==this.blockSize){s(this,T),I=0;break}}else for(;b<p;)if(T[I++]=w[b++],I==this.blockSize){s(this,T),I=0;break}}this.h=I,this.o+=p},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var p=1;p<w.length-8;++p)w[p]=0;var v=8*this.o;for(p=w.length-8;p<w.length;++p)w[p]=v&255,v/=256;for(this.u(w),w=Array(16),p=v=0;4>p;++p)for(var T=0;32>T;T+=8)w[v++]=this.g[p]>>>T&255;return w};function o(w,p){var v=c;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=p(w)}function a(w,p){this.h=p;for(var v=[],T=!0,I=w.length-1;0<=I;I--){var b=w[I]|0;T&&b==p||(v[I]=b,T=!1)}this.g=v}var c={};function h(w){return-128<=w&&128>w?o(w,function(p){return new a([p|0],0>p?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return g;if(0>w)return M(d(-w));for(var p=[],v=1,T=0;w>=v;T++)p[T]=w/v|0,v*=4294967296;return new a(p,0)}function m(w,p){if(w.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(w.charAt(0)=="-")return M(m(w.substring(1),p));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(p,8)),T=g,I=0;I<w.length;I+=8){var b=Math.min(8,w.length-I),_=parseInt(w.substring(I,I+b),p);8>b?(b=d(Math.pow(p,b)),T=T.j(b).add(d(_))):(T=T.j(v),T=T.add(d(_)))}return T}var g=h(0),E=h(1),N=h(16777216);n=a.prototype,n.m=function(){if(U(this))return-M(this).m();for(var w=0,p=1,v=0;v<this.g.length;v++){var T=this.i(v);w+=(0<=T?T:4294967296+T)*p,p*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(O(this))return"0";if(U(this))return"-"+M(this).toString(w);for(var p=d(Math.pow(w,6)),v=this,T="";;){var I=fe(v,p).g;v=J(v,I.j(p));var b=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=I,O(v))return b+T;for(;6>b.length;)b="0"+b;T=b+T}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function O(w){if(w.h!=0)return!1;for(var p=0;p<w.g.length;p++)if(w.g[p]!=0)return!1;return!0}function U(w){return w.h==-1}n.l=function(w){return w=J(this,w),U(w)?-1:O(w)?0:1};function M(w){for(var p=w.g.length,v=[],T=0;T<p;T++)v[T]=~w.g[T];return new a(v,~w.h).add(E)}n.abs=function(){return U(this)?M(this):this},n.add=function(w){for(var p=Math.max(this.g.length,w.g.length),v=[],T=0,I=0;I<=p;I++){var b=T+(this.i(I)&65535)+(w.i(I)&65535),_=(b>>>16)+(this.i(I)>>>16)+(w.i(I)>>>16);T=_>>>16,b&=65535,_&=65535,v[I]=_<<16|b}return new a(v,v[v.length-1]&-2147483648?-1:0)};function J(w,p){return w.add(M(p))}n.j=function(w){if(O(this)||O(w))return g;if(U(this))return U(w)?M(this).j(M(w)):M(M(this).j(w));if(U(w))return M(this.j(M(w)));if(0>this.l(N)&&0>w.l(N))return d(this.m()*w.m());for(var p=this.g.length+w.g.length,v=[],T=0;T<2*p;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var I=0;I<w.g.length;I++){var b=this.i(T)>>>16,_=this.i(T)&65535,at=w.i(I)>>>16,Nn=w.i(I)&65535;v[2*T+2*I]+=_*Nn,K(v,2*T+2*I),v[2*T+2*I+1]+=b*Nn,K(v,2*T+2*I+1),v[2*T+2*I+1]+=_*at,K(v,2*T+2*I+1),v[2*T+2*I+2]+=b*at,K(v,2*T+2*I+2)}for(T=0;T<p;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=p;T<2*p;T++)v[T]=0;return new a(v,0)};function K(w,p){for(;(w[p]&65535)!=w[p];)w[p+1]+=w[p]>>>16,w[p]&=65535,p++}function ne(w,p){this.g=w,this.h=p}function fe(w,p){if(O(p))throw Error("division by zero");if(O(w))return new ne(g,g);if(U(w))return p=fe(M(w),p),new ne(M(p.g),M(p.h));if(U(p))return p=fe(w,M(p)),new ne(M(p.g),p.h);if(30<w.g.length){if(U(w)||U(p))throw Error("slowDivide_ only works with positive integers.");for(var v=E,T=p;0>=T.l(w);)v=ze(v),T=ze(T);var I=Fe(v,1),b=Fe(T,1);for(T=Fe(T,2),v=Fe(v,2);!O(T);){var _=b.add(T);0>=_.l(w)&&(I=I.add(v),b=_),T=Fe(T,1),v=Fe(v,1)}return p=J(w,I.j(p)),new ne(I,p)}for(I=g;0<=w.l(p);){for(v=Math.max(1,Math.floor(w.m()/p.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),b=d(v),_=b.j(p);U(_)||0<_.l(w);)v-=T,b=d(v),_=b.j(p);O(b)&&(b=E),I=I.add(b),w=J(w,_)}return new ne(I,w)}n.A=function(w){return fe(this,w).h},n.and=function(w){for(var p=Math.max(this.g.length,w.g.length),v=[],T=0;T<p;T++)v[T]=this.i(T)&w.i(T);return new a(v,this.h&w.h)},n.or=function(w){for(var p=Math.max(this.g.length,w.g.length),v=[],T=0;T<p;T++)v[T]=this.i(T)|w.i(T);return new a(v,this.h|w.h)},n.xor=function(w){for(var p=Math.max(this.g.length,w.g.length),v=[],T=0;T<p;T++)v[T]=this.i(T)^w.i(T);return new a(v,this.h^w.h)};function ze(w){for(var p=w.g.length+1,v=[],T=0;T<p;T++)v[T]=w.i(T)<<1|w.i(T-1)>>>31;return new a(v,w.h)}function Fe(w,p){var v=p>>5;p%=32;for(var T=w.g.length-v,I=[],b=0;b<T;b++)I[b]=0<p?w.i(b+v)>>>p|w.i(b+v+1)<<32-p:w.i(b+v);return new a(I,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,So=a}).apply(typeof Nl<"u"?Nl:typeof self<"u"?self:typeof window<"u"?window:{});var Qr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Su,Yn,ku,as,Gi,Ru,Cu,Vu;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,u){return i==Array.prototype||i==Object.prototype||(i[l]=u.value),i};function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qr=="object"&&Qr];for(var l=0;l<i.length;++l){var u=i[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=t(this);function s(i,l){if(l)e:{var u=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var A=i[f];if(!(A in u))break e;u=u[A]}i=i[i.length-1],f=u[i],l=l(f),l!=f&&l!=null&&e(u,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var u=0,f=!1,A={next:function(){if(!f&&u<i.length){var S=u++;return{value:l(S,i[S]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function d(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function m(i,l,u){return i.call.apply(i.bind,arguments)}function g(i,l,u){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),i.apply(l,A)}}return function(){return i.apply(l,arguments)}}function E(i,l,u){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:g,E.apply(null,arguments)}function N(i,l){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function O(i,l){function u(){}u.prototype=l.prototype,i.aa=l.prototype,i.prototype=new u,i.prototype.constructor=i,i.Qb=function(f,A,S){for(var $=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)$[ae-2]=arguments[ae];return l.prototype[A].apply(f,$)}}function U(i){const l=i.length;if(0<l){const u=Array(l);for(let f=0;f<l;f++)u[f]=i[f];return u}return[]}function M(i,l){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const A=i.length||0,S=f.length||0;i.length=A+S;for(let $=0;$<S;$++)i[A+$]=f[$]}else i.push(f)}}class J{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function K(i){return/^[\s\xa0]*$/.test(i)}function ne(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function fe(i){return fe[" "](i),i}fe[" "]=function(){};var ze=ne().indexOf("Gecko")!=-1&&!(ne().toLowerCase().indexOf("webkit")!=-1&&ne().indexOf("Edge")==-1)&&!(ne().indexOf("Trident")!=-1||ne().indexOf("MSIE")!=-1)&&ne().indexOf("Edge")==-1;function Fe(i,l,u){for(const f in i)l.call(u,i[f],f,i)}function w(i,l){for(const u in i)l.call(void 0,i[u],u,i)}function p(i){const l={};for(const u in i)l[u]=i[u];return l}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(i,l){let u,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(u in f)i[u]=f[u];for(let S=0;S<v.length;S++)u=v[S],Object.prototype.hasOwnProperty.call(f,u)&&(i[u]=f[u])}}function I(i){var l=1;i=i.split(":");const u=[];for(;0<l&&i.length;)u.push(i.shift()),l--;return i.length&&u.push(i.join(":")),u}function b(i){c.setTimeout(()=>{throw i},0)}function _(){var i=Xs;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class at{constructor(){this.h=this.g=null}add(l,u){const f=Nn.get();f.set(l,u),this.h?this.h.next=f:this.g=f,this.h=f}}var Nn=new J(()=>new Oh,i=>i.reset());class Oh{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let Dn,Ln=!1,Xs=new at,Zo=()=>{const i=c.Promise.resolve(void 0);Dn=()=>{i.then(Mh)}};var Mh=()=>{for(var i;i=_();){try{i.h.call(i.g)}catch(u){b(u)}var l=Nn;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}Ln=!1};function wt(){this.s=this.s,this.C=this.C}wt.prototype.s=!1,wt.prototype.ma=function(){this.s||(this.s=!0,this.N())},wt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Pe(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}Pe.prototype.h=function(){this.defaultPrevented=!0};var $h=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};c.addEventListener("test",u,l),c.removeEventListener("test",u,l)}catch{}return i}();function On(i,l){if(Pe.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var u=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(ze){e:{try{fe(l.nodeName);var A=!0;break e}catch{}A=!1}A||(l=null)}}else u=="mouseover"?l=i.fromElement:u=="mouseout"&&(l=i.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Fh[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&On.aa.h.call(this)}}O(On,Pe);var Fh={2:"touch",3:"pen",4:"mouse"};On.prototype.h=function(){On.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Rr="closure_listenable_"+(1e6*Math.random()|0),Uh=0;function xh(i,l,u,f,A){this.listener=i,this.proxy=null,this.src=l,this.type=u,this.capture=!!f,this.ha=A,this.key=++Uh,this.da=this.fa=!1}function Cr(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Vr(i){this.src=i,this.g={},this.h=0}Vr.prototype.add=function(i,l,u,f,A){var S=i.toString();i=this.g[S],i||(i=this.g[S]=[],this.h++);var $=Zs(i,l,f,A);return-1<$?(l=i[$],u||(l.fa=!1)):(l=new xh(l,this.src,S,!!f,A),l.fa=u,i.push(l)),l};function Ys(i,l){var u=l.type;if(u in i.g){var f=i.g[u],A=Array.prototype.indexOf.call(f,l,void 0),S;(S=0<=A)&&Array.prototype.splice.call(f,A,1),S&&(Cr(l),i.g[u].length==0&&(delete i.g[u],i.h--))}}function Zs(i,l,u,f){for(var A=0;A<i.length;++A){var S=i[A];if(!S.da&&S.listener==l&&S.capture==!!u&&S.ha==f)return A}return-1}var ei="closure_lm_"+(1e6*Math.random()|0),ti={};function ea(i,l,u,f,A){if(Array.isArray(l)){for(var S=0;S<l.length;S++)ea(i,l[S],u,f,A);return null}return u=ra(u),i&&i[Rr]?i.K(l,u,d(f)?!!f.capture:!1,A):Bh(i,l,u,!1,f,A)}function Bh(i,l,u,f,A,S){if(!l)throw Error("Invalid event type");var $=d(A)?!!A.capture:!!A,ae=ri(i);if(ae||(i[ei]=ae=new Vr(i)),u=ae.add(l,u,f,$,S),u.proxy)return u;if(f=jh(),u.proxy=f,f.src=i,f.listener=u,i.addEventListener)$h||(A=$),A===void 0&&(A=!1),i.addEventListener(l.toString(),f,A);else if(i.attachEvent)i.attachEvent(na(l.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function jh(){function i(u){return l.call(i.src,i.listener,u)}const l=Hh;return i}function ta(i,l,u,f,A){if(Array.isArray(l))for(var S=0;S<l.length;S++)ta(i,l[S],u,f,A);else f=d(f)?!!f.capture:!!f,u=ra(u),i&&i[Rr]?(i=i.i,l=String(l).toString(),l in i.g&&(S=i.g[l],u=Zs(S,u,f,A),-1<u&&(Cr(S[u]),Array.prototype.splice.call(S,u,1),S.length==0&&(delete i.g[l],i.h--)))):i&&(i=ri(i))&&(l=i.g[l.toString()],i=-1,l&&(i=Zs(l,u,f,A)),(u=-1<i?l[i]:null)&&ni(u))}function ni(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[Rr])Ys(l.i,i);else{var u=i.type,f=i.proxy;l.removeEventListener?l.removeEventListener(u,f,i.capture):l.detachEvent?l.detachEvent(na(u),f):l.addListener&&l.removeListener&&l.removeListener(f),(u=ri(l))?(Ys(u,i),u.h==0&&(u.src=null,l[ei]=null)):Cr(i)}}}function na(i){return i in ti?ti[i]:ti[i]="on"+i}function Hh(i,l){if(i.da)i=!0;else{l=new On(l,this);var u=i.listener,f=i.ha||i.src;i.fa&&ni(i),i=u.call(f,l)}return i}function ri(i){return i=i[ei],i instanceof Vr?i:null}var si="__closure_events_fn_"+(1e9*Math.random()>>>0);function ra(i){return typeof i=="function"?i:(i[si]||(i[si]=function(l){return i.handleEvent(l)}),i[si])}function Se(){wt.call(this),this.i=new Vr(this),this.M=this,this.F=null}O(Se,wt),Se.prototype[Rr]=!0,Se.prototype.removeEventListener=function(i,l,u,f){ta(this,i,l,u,f)};function Me(i,l){var u,f=i.F;if(f)for(u=[];f;f=f.F)u.push(f);if(i=i.M,f=l.type||l,typeof l=="string")l=new Pe(l,i);else if(l instanceof Pe)l.target=l.target||i;else{var A=l;l=new Pe(f,i),T(l,A)}if(A=!0,u)for(var S=u.length-1;0<=S;S--){var $=l.g=u[S];A=Nr($,f,!0,l)&&A}if($=l.g=i,A=Nr($,f,!0,l)&&A,A=Nr($,f,!1,l)&&A,u)for(S=0;S<u.length;S++)$=l.g=u[S],A=Nr($,f,!1,l)&&A}Se.prototype.N=function(){if(Se.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var u=i.g[l],f=0;f<u.length;f++)Cr(u[f]);delete i.g[l],i.h--}}this.F=null},Se.prototype.K=function(i,l,u,f){return this.i.add(String(i),l,!1,u,f)},Se.prototype.L=function(i,l,u,f){return this.i.add(String(i),l,!0,u,f)};function Nr(i,l,u,f){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,S=0;S<l.length;++S){var $=l[S];if($&&!$.da&&$.capture==u){var ae=$.listener,Te=$.ha||$.src;$.fa&&Ys(i.i,$),A=ae.call(Te,f)!==!1&&A}}return A&&!f.defaultPrevented}function sa(i,l,u){if(typeof i=="function")u&&(i=E(i,u));else if(i&&typeof i.handleEvent=="function")i=E(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(i,l||0)}function ia(i){i.g=sa(()=>{i.g=null,i.i&&(i.i=!1,ia(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class qh extends wt{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:ia(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mn(i){wt.call(this),this.h=i,this.g={}}O(Mn,wt);var oa=[];function aa(i){Fe(i.g,function(l,u){this.g.hasOwnProperty(u)&&ni(l)},i),i.g={}}Mn.prototype.N=function(){Mn.aa.N.call(this),aa(this)},Mn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ii=c.JSON.stringify,zh=c.JSON.parse,Wh=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function oi(){}oi.prototype.h=null;function la(i){return i.h||(i.h=i.i())}function ca(){}var $n={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ai(){Pe.call(this,"d")}O(ai,Pe);function li(){Pe.call(this,"c")}O(li,Pe);var Bt={},ua=null;function Dr(){return ua=ua||new Se}Bt.La="serverreachability";function ha(i){Pe.call(this,Bt.La,i)}O(ha,Pe);function Fn(i){const l=Dr();Me(l,new ha(l))}Bt.STAT_EVENT="statevent";function da(i,l){Pe.call(this,Bt.STAT_EVENT,i),this.stat=l}O(da,Pe);function $e(i){const l=Dr();Me(l,new da(l,i))}Bt.Ma="timingevent";function fa(i,l){Pe.call(this,Bt.Ma,i),this.size=l}O(fa,Pe);function Un(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},l)}function xn(){this.g=!0}xn.prototype.xa=function(){this.g=!1};function Gh(i,l,u,f,A,S){i.info(function(){if(i.g)if(S)for(var $="",ae=S.split("&"),Te=0;Te<ae.length;Te++){var se=ae[Te].split("=");if(1<se.length){var ke=se[0];se=se[1];var Re=ke.split("_");$=2<=Re.length&&Re[1]=="type"?$+(ke+"="+se+"&"):$+(ke+"=redacted&")}}else $=null;else $=S;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+l+`
`+u+`
`+$})}function Kh(i,l,u,f,A,S,$){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+l+`
`+u+`
`+S+" "+$})}function ln(i,l,u,f){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+Jh(i,u)+(f?" "+f:"")})}function Qh(i,l){i.info(function(){return"TIMEOUT: "+l})}xn.prototype.info=function(){};function Jh(i,l){if(!i.g)return l;if(!l)return null;try{var u=JSON.parse(l);if(u){for(i=0;i<u.length;i++)if(Array.isArray(u[i])){var f=u[i];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var S=A[0];if(S!="noop"&&S!="stop"&&S!="close")for(var $=1;$<A.length;$++)A[$]=""}}}}return ii(u)}catch{return l}}var Lr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},pa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ci;function Or(){}O(Or,oi),Or.prototype.g=function(){return new XMLHttpRequest},Or.prototype.i=function(){return{}},ci=new Or;function At(i,l,u,f){this.j=i,this.i=l,this.l=u,this.R=f||1,this.U=new Mn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ma}function ma(){this.i=null,this.g="",this.h=!1}var ga={},ui={};function hi(i,l,u){i.L=1,i.v=Ur(lt(l)),i.m=u,i.P=!0,_a(i,null)}function _a(i,l){i.F=Date.now(),Mr(i),i.A=lt(i.v);var u=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),Va(u.i,"t",f),i.C=0,u=i.j.J,i.h=new ma,i.g=Qa(i.j,u?l:null,!i.m),0<i.O&&(i.M=new qh(E(i.Y,i,i.g),i.O)),l=i.U,u=i.g,f=i.ca;var A="readystatechange";Array.isArray(A)||(A&&(oa[0]=A.toString()),A=oa);for(var S=0;S<A.length;S++){var $=ea(u,A[S],f||l.handleEvent,!1,l.h||l);if(!$)break;l.g[$.key]=$}l=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),Fn(),Gh(i.i,i.u,i.A,i.l,i.R,i.m)}At.prototype.ca=function(i){i=i.target;const l=this.M;l&&ct(i)==3?l.j():this.Y(i)},At.prototype.Y=function(i){try{if(i==this.g)e:{const Re=ct(this.g);var l=this.g.Ba();const hn=this.g.Z();if(!(3>Re)&&(Re!=3||this.g&&(this.h.h||this.g.oa()||Fa(this.g)))){this.J||Re!=4||l==7||(l==8||0>=hn?Fn(3):Fn(2)),di(this);var u=this.g.Z();this.X=u;t:if(va(this)){var f=Fa(this.g);i="";var A=f.length,S=ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jt(this),Bn(this);var $="";break t}this.h.i=new c.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,i+=this.h.i.decode(f[l],{stream:!(S&&l==A-1)});f.length=0,this.h.g+=i,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=u==200,Kh(this.i,this.u,this.A,this.l,this.R,Re,u),this.o){if(this.T&&!this.K){t:{if(this.g){var ae,Te=this.g;if((ae=Te.g?Te.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(ae)){var se=ae;break t}}se=null}if(u=se)ln(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fi(this,u);else{this.o=!1,this.s=3,$e(12),jt(this),Bn(this);break e}}if(this.P){u=!0;let We;for(;!this.J&&this.C<$.length;)if(We=Xh(this,$),We==ui){Re==4&&(this.s=4,$e(14),u=!1),ln(this.i,this.l,null,"[Incomplete Response]");break}else if(We==ga){this.s=4,$e(15),ln(this.i,this.l,$,"[Invalid Chunk]"),u=!1;break}else ln(this.i,this.l,We,null),fi(this,We);if(va(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Re!=4||$.length!=0||this.h.h||(this.s=1,$e(16),u=!1),this.o=this.o&&u,!u)ln(this.i,this.l,$,"[Invalid Chunked Response]"),jt(this),Bn(this);else if(0<$.length&&!this.W){this.W=!0;var ke=this.j;ke.g==this&&ke.ba&&!ke.M&&(ke.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),yi(ke),ke.M=!0,$e(11))}}else ln(this.i,this.l,$,null),fi(this,$);Re==4&&jt(this),this.o&&!this.J&&(Re==4?za(this.j,this):(this.o=!1,Mr(this)))}else pd(this.g),u==400&&0<$.indexOf("Unknown SID")?(this.s=3,$e(12)):(this.s=0,$e(13)),jt(this),Bn(this)}}}catch{}finally{}};function va(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Xh(i,l){var u=i.C,f=l.indexOf(`
`,u);return f==-1?ui:(u=Number(l.substring(u,f)),isNaN(u)?ga:(f+=1,f+u>l.length?ui:(l=l.slice(f,f+u),i.C=f+u,l)))}At.prototype.cancel=function(){this.J=!0,jt(this)};function Mr(i){i.S=Date.now()+i.I,ya(i,i.I)}function ya(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Un(E(i.ba,i),l)}function di(i){i.B&&(c.clearTimeout(i.B),i.B=null)}At.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Qh(this.i,this.A),this.L!=2&&(Fn(),$e(17)),jt(this),this.s=2,Bn(this)):ya(this,this.S-i)};function Bn(i){i.j.G==0||i.J||za(i.j,i)}function jt(i){di(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,aa(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function fi(i,l){try{var u=i.j;if(u.G!=0&&(u.g==i||pi(u.h,i))){if(!i.K&&pi(u.h,i)&&u.G==3){try{var f=u.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<i.F)zr(u),Hr(u);else break e;vi(u),$e(18)}}else u.za=A[1],0<u.za-u.T&&37500>A[2]&&u.F&&u.v==0&&!u.C&&(u.C=Un(E(u.Za,u),6e3));if(1>=Ia(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else qt(u,11)}else if((i.K||u.g==i)&&zr(u),!K(l))for(A=u.Da.g.parse(l),l=0;l<A.length;l++){let se=A[l];if(u.T=se[0],se=se[1],u.G==2)if(se[0]=="c"){u.K=se[1],u.ia=se[2];const ke=se[3];ke!=null&&(u.la=ke,u.j.info("VER="+u.la));const Re=se[4];Re!=null&&(u.Aa=Re,u.j.info("SVER="+u.Aa));const hn=se[5];hn!=null&&typeof hn=="number"&&0<hn&&(f=1.5*hn,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const We=i.g;if(We){const Gr=We.g?We.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gr){var S=f.h;S.g||Gr.indexOf("spdy")==-1&&Gr.indexOf("quic")==-1&&Gr.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(mi(S,S.h),S.h=null))}if(f.D){const Ei=We.g?We.g.getResponseHeader("X-HTTP-Session-Id"):null;Ei&&(f.ya=Ei,ue(f.I,f.D,Ei))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-i.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var $=i;if(f.qa=Ka(f,f.J?f.ia:null,f.W),$.K){wa(f.h,$);var ae=$,Te=f.L;Te&&(ae.I=Te),ae.B&&(di(ae),Mr(ae)),f.g=$}else Ha(f);0<u.i.length&&qr(u)}else se[0]!="stop"&&se[0]!="close"||qt(u,7);else u.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?qt(u,7):_i(u):se[0]!="noop"&&u.l&&u.l.ta(se),u.v=0)}}Fn(4)}catch{}}var Yh=class{constructor(i,l){this.g=i,this.map=l}};function Ea(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ta(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Ia(i){return i.h?1:i.g?i.g.size:0}function pi(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function mi(i,l){i.g?i.g.add(l):i.h=l}function wa(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}Ea.prototype.cancel=function(){if(this.i=Aa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Aa(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const u of i.g.values())l=l.concat(u.D);return l}return U(i.i)}function Zh(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var l=[],u=i.length,f=0;f<u;f++)l.push(i[f]);return l}l=[],u=0;for(f in i)l[u++]=i[f];return l}function ed(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var l=[];i=i.length;for(var u=0;u<i;u++)l.push(u);return l}l=[],u=0;for(const f in i)l[u++]=f;return l}}}function ba(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var u=ed(i),f=Zh(i),A=f.length,S=0;S<A;S++)l.call(void 0,f[S],u&&u[S],i)}var Pa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function td(i,l){if(i){i=i.split("&");for(var u=0;u<i.length;u++){var f=i[u].indexOf("="),A=null;if(0<=f){var S=i[u].substring(0,f);A=i[u].substring(f+1)}else S=i[u];l(S,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Ht(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Ht){this.h=i.h,$r(this,i.j),this.o=i.o,this.g=i.g,Fr(this,i.s),this.l=i.l;var l=i.i,u=new qn;u.i=l.i,l.g&&(u.g=new Map(l.g),u.h=l.h),Sa(this,u),this.m=i.m}else i&&(l=String(i).match(Pa))?(this.h=!1,$r(this,l[1]||"",!0),this.o=jn(l[2]||""),this.g=jn(l[3]||"",!0),Fr(this,l[4]),this.l=jn(l[5]||"",!0),Sa(this,l[6]||"",!0),this.m=jn(l[7]||"")):(this.h=!1,this.i=new qn(null,this.h))}Ht.prototype.toString=function(){var i=[],l=this.j;l&&i.push(Hn(l,ka,!0),":");var u=this.g;return(u||l=="file")&&(i.push("//"),(l=this.o)&&i.push(Hn(l,ka,!0),"@"),i.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&i.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(Hn(u,u.charAt(0)=="/"?sd:rd,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",Hn(u,od)),i.join("")};function lt(i){return new Ht(i)}function $r(i,l,u){i.j=u?jn(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function Fr(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function Sa(i,l,u){l instanceof qn?(i.i=l,ad(i.i,i.h)):(u||(l=Hn(l,id)),i.i=new qn(l,i.h))}function ue(i,l,u){i.i.set(l,u)}function Ur(i){return ue(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function jn(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Hn(i,l,u){return typeof i=="string"?(i=encodeURI(i).replace(l,nd),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function nd(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var ka=/[#\/\?@]/g,rd=/[#\?:]/g,sd=/[#\?]/g,id=/[#\?@]/g,od=/#/g;function qn(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function bt(i){i.g||(i.g=new Map,i.h=0,i.i&&td(i.i,function(l,u){i.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}n=qn.prototype,n.add=function(i,l){bt(this),this.i=null,i=cn(this,i);var u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(l),this.h+=1,this};function Ra(i,l){bt(i),l=cn(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function Ca(i,l){return bt(i),l=cn(i,l),i.g.has(l)}n.forEach=function(i,l){bt(this),this.g.forEach(function(u,f){u.forEach(function(A){i.call(l,A,f,this)},this)},this)},n.na=function(){bt(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),u=[];for(let f=0;f<l.length;f++){const A=i[f];for(let S=0;S<A.length;S++)u.push(l[f])}return u},n.V=function(i){bt(this);let l=[];if(typeof i=="string")Ca(this,i)&&(l=l.concat(this.g.get(cn(this,i))));else{i=Array.from(this.g.values());for(let u=0;u<i.length;u++)l=l.concat(i[u])}return l},n.set=function(i,l){return bt(this),this.i=null,i=cn(this,i),Ca(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function Va(i,l,u){Ra(i,l),0<u.length&&(i.i=null,i.g.set(cn(i,l),U(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var u=0;u<l.length;u++){var f=l[u];const S=encodeURIComponent(String(f)),$=this.V(f);for(f=0;f<$.length;f++){var A=S;$[f]!==""&&(A+="="+encodeURIComponent(String($[f]))),i.push(A)}}return this.i=i.join("&")};function cn(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function ad(i,l){l&&!i.j&&(bt(i),i.i=null,i.g.forEach(function(u,f){var A=f.toLowerCase();f!=A&&(Ra(this,f),Va(this,A,u))},i)),i.j=l}function ld(i,l){const u=new xn;if(c.Image){const f=new Image;f.onload=N(Pt,u,"TestLoadImage: loaded",!0,l,f),f.onerror=N(Pt,u,"TestLoadImage: error",!1,l,f),f.onabort=N(Pt,u,"TestLoadImage: abort",!1,l,f),f.ontimeout=N(Pt,u,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else l(!1)}function cd(i,l){const u=new xn,f=new AbortController,A=setTimeout(()=>{f.abort(),Pt(u,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:f.signal}).then(S=>{clearTimeout(A),S.ok?Pt(u,"TestPingServer: ok",!0,l):Pt(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),Pt(u,"TestPingServer: error",!1,l)})}function Pt(i,l,u,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(u)}catch{}}function ud(){this.g=new Wh}function hd(i,l,u){const f=u||"";try{ba(i,function(A,S){let $=A;d(A)&&($=ii(A)),l.push(f+S+"="+encodeURIComponent($))})}catch(A){throw l.push(f+"type="+encodeURIComponent("_badmap")),A}}function xr(i){this.l=i.Ub||null,this.j=i.eb||!1}O(xr,oi),xr.prototype.g=function(){return new Br(this.l,this.j)},xr.prototype.i=function(i){return function(){return i}}({});function Br(i,l){Se.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(Br,Se),n=Br.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,Wn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Wn(this)),this.g&&(this.readyState=3,Wn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Na(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Na(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?zn(this):Wn(this),this.readyState==3&&Na(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,zn(this))},n.Qa=function(i){this.g&&(this.response=i,zn(this))},n.ga=function(){this.g&&zn(this)};function zn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Wn(i)}n.setRequestHeader=function(i,l){this.u.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=l.next();return i.join(`\r
`)};function Wn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Br.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Da(i){let l="";return Fe(i,function(u,f){l+=f,l+=":",l+=u,l+=`\r
`}),l}function gi(i,l,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=Da(u),typeof i=="string"?u!=null&&encodeURIComponent(String(u)):ue(i,l,u))}function pe(i){Se.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(pe,Se);var dd=/^https?$/i,fd=["POST","PUT"];n=pe.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,l,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ci.g(),this.v=this.o?la(this.o):la(ci),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(S){La(this,S);return}if(i=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)u.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())u.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(S=>S.toLowerCase()=="content-type"),A=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(fd,l,void 0))||f||A||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,$]of u)this.g.setRequestHeader(S,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$a(this),this.u=!0,this.g.send(i),this.u=!1}catch(S){La(this,S)}};function La(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,Oa(i),jr(i)}function Oa(i){i.A||(i.A=!0,Me(i,"complete"),Me(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Me(this,"complete"),Me(this,"abort"),jr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jr(this,!0)),pe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ma(this):this.bb())},n.bb=function(){Ma(this)};function Ma(i){if(i.h&&typeof a<"u"&&(!i.v[1]||ct(i)!=4||i.Z()!=2)){if(i.u&&ct(i)==4)sa(i.Ea,0,i);else if(Me(i,"readystatechange"),ct(i)==4){i.h=!1;try{const $=i.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var u;if(!(u=l)){var f;if(f=$===0){var A=String(i.D).match(Pa)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),f=!dd.test(A?A.toLowerCase():"")}u=f}if(u)Me(i,"complete"),Me(i,"success");else{i.m=6;try{var S=2<ct(i)?i.g.statusText:""}catch{S=""}i.l=S+" ["+i.Z()+"]",Oa(i)}}finally{jr(i)}}}}function jr(i,l){if(i.g){$a(i);const u=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||Me(i,"ready");try{u.onreadystatechange=f}catch{}}}function $a(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function ct(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<ct(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),zh(l)}};function Fa(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function pd(i){const l={};i=(i.g&&2<=ct(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(K(i[f]))continue;var u=I(i[f]);const A=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const S=l[A]||[];l[A]=S,S.push(u)}w(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gn(i,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||l}function Ua(i){this.Aa=0,this.i=[],this.j=new xn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Gn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Gn("baseRetryDelayMs",5e3,i),this.cb=Gn("retryDelaySeedMs",1e4,i),this.Wa=Gn("forwardChannelMaxRetries",2,i),this.wa=Gn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Ea(i&&i.concurrentRequestLimit),this.Da=new ud,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ua.prototype,n.la=8,n.G=1,n.connect=function(i,l,u,f){$e(0),this.W=i,this.H=l||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=Ka(this,null,this.W),qr(this)};function _i(i){if(xa(i),i.G==3){var l=i.U++,u=lt(i.I);if(ue(u,"SID",i.K),ue(u,"RID",l),ue(u,"TYPE","terminate"),Kn(i,u),l=new At(i,i.j,l),l.L=2,l.v=Ur(lt(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=l.v,u=!0),u||(l.g=Qa(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Mr(l)}Ga(i)}function Hr(i){i.g&&(yi(i),i.g.cancel(),i.g=null)}function xa(i){Hr(i),i.u&&(c.clearTimeout(i.u),i.u=null),zr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function qr(i){if(!Ta(i.h)&&!i.s){i.s=!0;var l=i.Ga;Dn||Zo(),Ln||(Dn(),Ln=!0),Xs.add(l,i),i.B=0}}function md(i,l){return Ia(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Un(E(i.Ga,i,l),Wa(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const A=new At(this,this.j,i);let S=this.o;if(this.S&&(S?(S=p(S),T(S,this.S)):S=this.S),this.m!==null||this.O||(A.H=S,S=null),this.P)e:{for(var l=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=u;break e}if(l===4096||u===this.i.length-1){l=u+1;break e}}l=1e3}else l=1e3;l=ja(this,A,l),u=lt(this.I),ue(u,"RID",i),ue(u,"CVER",22),this.D&&ue(u,"X-HTTP-Session-Id",this.D),Kn(this,u),S&&(this.O?l="headers="+encodeURIComponent(String(Da(S)))+"&"+l:this.m&&gi(u,this.m,S)),mi(this.h,A),this.Ua&&ue(u,"TYPE","init"),this.P?(ue(u,"$req",l),ue(u,"SID","null"),A.T=!0,hi(A,u,null)):hi(A,u,l),this.G=2}}else this.G==3&&(i?Ba(this,i):this.i.length==0||Ta(this.h)||Ba(this))};function Ba(i,l){var u;l?u=l.l:u=i.U++;const f=lt(i.I);ue(f,"SID",i.K),ue(f,"RID",u),ue(f,"AID",i.T),Kn(i,f),i.m&&i.o&&gi(f,i.m,i.o),u=new At(i,i.j,u,i.B+1),i.m===null&&(u.H=i.o),l&&(i.i=l.D.concat(i.i)),l=ja(i,u,1e3),u.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),mi(i.h,u),hi(u,f,l)}function Kn(i,l){i.H&&Fe(i.H,function(u,f){ue(l,f,u)}),i.l&&ba({},function(u,f){ue(l,f,u)})}function ja(i,l,u){u=Math.min(i.i.length,u);var f=i.l?E(i.l.Na,i.l,i):null;e:{var A=i.i;let S=-1;for(;;){const $=["count="+u];S==-1?0<u?(S=A[0].g,$.push("ofs="+S)):S=0:$.push("ofs="+S);let ae=!0;for(let Te=0;Te<u;Te++){let se=A[Te].g;const ke=A[Te].map;if(se-=S,0>se)S=Math.max(0,A[Te].g-100),ae=!1;else try{hd(ke,$,"req"+se+"_")}catch{f&&f(ke)}}if(ae){f=$.join("&");break e}}}return i=i.i.splice(0,u),l.D=i,f}function Ha(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;Dn||Zo(),Ln||(Dn(),Ln=!0),Xs.add(l,i),i.v=0}}function vi(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Un(E(i.Fa,i),Wa(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,qa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Un(E(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,$e(10),Hr(this),qa(this))};function yi(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function qa(i){i.g=new At(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=lt(i.qa);ue(l,"RID","rpc"),ue(l,"SID",i.K),ue(l,"AID",i.T),ue(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&ue(l,"TO",i.ja),ue(l,"TYPE","xmlhttp"),Kn(i,l),i.m&&i.o&&gi(l,i.m,i.o),i.L&&(i.g.I=i.L);var u=i.g;i=i.ia,u.L=1,u.v=Ur(lt(l)),u.m=null,u.P=!0,_a(u,i)}n.Za=function(){this.C!=null&&(this.C=null,Hr(this),vi(this),$e(19))};function zr(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function za(i,l){var u=null;if(i.g==l){zr(i),yi(i),i.g=null;var f=2}else if(pi(i.h,l))u=l.D,wa(i.h,l),f=1;else return;if(i.G!=0){if(l.o)if(f==1){u=l.m?l.m.length:0,l=Date.now()-l.F;var A=i.B;f=Dr(),Me(f,new fa(f,u)),qr(i)}else Ha(i);else if(A=l.s,A==3||A==0&&0<l.X||!(f==1&&md(i,l)||f==2&&vi(i)))switch(u&&0<u.length&&(l=i.h,l.i=l.i.concat(u)),A){case 1:qt(i,5);break;case 4:qt(i,10);break;case 3:qt(i,6);break;default:qt(i,2)}}}function Wa(i,l){let u=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(u*=2),u*l}function qt(i,l){if(i.j.info("Error code "+l),l==2){var u=E(i.fb,i),f=i.Xa;const A=!f;f=new Ht(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||$r(f,"https"),Ur(f),A?ld(f.toString(),u):cd(f.toString(),u)}else $e(2);i.G=0,i.l&&i.l.sa(l),Ga(i),xa(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),$e(2)):(this.j.info("Failed to ping google.com"),$e(1))};function Ga(i){if(i.G=0,i.ka=[],i.l){const l=Aa(i.h);(l.length!=0||i.i.length!=0)&&(M(i.ka,l),M(i.ka,i.i),i.h.i.length=0,U(i.i),i.i.length=0),i.l.ra()}}function Ka(i,l,u){var f=u instanceof Ht?lt(u):new Ht(u);if(f.g!="")l&&(f.g=l+"."+f.g),Fr(f,f.s);else{var A=c.location;f=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var S=new Ht(null);f&&$r(S,f),l&&(S.g=l),A&&Fr(S,A),u&&(S.l=u),f=S}return u=i.D,l=i.ya,u&&l&&ue(f,u,l),ue(f,"VER",i.la),Kn(i,f),f}function Qa(i,l,u){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new pe(new xr({eb:u})):new pe(i.pa),l.Ha(i.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ja(){}n=Ja.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Wr(){}Wr.prototype.g=function(i,l){return new Be(i,l)};function Be(i,l){Se.call(this),this.g=new Ua(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!K(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!K(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new un(this)}O(Be,Se),Be.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Be.prototype.close=function(){_i(this.g)},Be.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.u&&(u={},u.__data__=ii(i),i=u);l.i.push(new Yh(l.Ya++,i)),l.G==3&&qr(l)},Be.prototype.N=function(){this.g.l=null,delete this.j,_i(this.g),delete this.g,Be.aa.N.call(this)};function Xa(i){ai.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){e:{for(const u in l){i=u;break e}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}O(Xa,ai);function Ya(){li.call(this),this.status=1}O(Ya,li);function un(i){this.g=i}O(un,Ja),un.prototype.ua=function(){Me(this.g,"a")},un.prototype.ta=function(i){Me(this.g,new Xa(i))},un.prototype.sa=function(i){Me(this.g,new Ya)},un.prototype.ra=function(){Me(this.g,"b")},Wr.prototype.createWebChannel=Wr.prototype.g,Be.prototype.send=Be.prototype.o,Be.prototype.open=Be.prototype.m,Be.prototype.close=Be.prototype.close,Vu=function(){return new Wr},Cu=function(){return Dr()},Ru=Bt,Gi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Lr.NO_ERROR=0,Lr.TIMEOUT=8,Lr.HTTP_ERROR=6,as=Lr,pa.COMPLETE="complete",ku=pa,ca.EventType=$n,$n.OPEN="a",$n.CLOSE="b",$n.ERROR="c",$n.MESSAGE="d",Se.prototype.listen=Se.prototype.K,Yn=ca,pe.prototype.listenOnce=pe.prototype.L,pe.prototype.getLastError=pe.prototype.Ka,pe.prototype.getLastErrorCode=pe.prototype.Ba,pe.prototype.getStatus=pe.prototype.Z,pe.prototype.getResponseJson=pe.prototype.Oa,pe.prototype.getResponseText=pe.prototype.oa,pe.prototype.send=pe.prototype.ea,pe.prototype.setWithCredentials=pe.prototype.Ha,Su=pe}).apply(typeof Qr<"u"?Qr:typeof self<"u"?self:typeof window<"u"?window:{});const Dl="@firebase/firestore",Ll="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ve.UNAUTHENTICATED=new Ve(null),Ve.GOOGLE_CREDENTIALS=new Ve("google-credentials-uid"),Ve.FIRST_PARTY=new Ve("first-party-uid"),Ve.MOCK_USER=new Ve("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cn="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new go("@firebase/firestore");function dn(){return en.logLevel}function x(n,...e){if(en.logLevel<=ee.DEBUG){const t=e.map(ko);en.debug(`Firestore (${Cn}): ${n}`,...t)}}function tn(n,...e){if(en.logLevel<=ee.ERROR){const t=e.map(ko);en.error(`Firestore (${Cn}): ${n}`,...t)}}function Hs(n,...e){if(en.logLevel<=ee.WARN){const t=e.map(ko);en.warn(`Firestore (${Cn}): ${n}`,...t)}}function ko(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Nu(n,r,t)}function Nu(n,e,t){let r=`FIRESTORE (${Cn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw tn(r),new Error(r)}function me(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Nu(e,s,r)}function ce(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Et{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ve.UNAUTHENTICATED))}shutdown(){}}class RT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class CT{constructor(e){this.t=e,this.currentUser=Ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){me(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new Gt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Gt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Gt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string",31837,{l:r}),new Du(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string",2055,{h:e}),new Ve(e)}}class VT{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ve.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class NT{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new VT(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ol{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class DT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,He(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){me(this.o===void 0,3512);const r=o=>{o.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,x("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const s=o=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ol(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(me(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ol(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=LT(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<t&&(r+=e.charAt(s[o]%62))}return r}}function oe(n,e){return n<e?-1:n>e?1:0}function Ki(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),o=e.charAt(r);if(s!==o)return Ri(s)===Ri(o)?oe(s,o):Ri(s)?1:-1}return oe(n.length,e.length)}const OT=55296,MT=57343;function Ri(n){const e=n.charCodeAt(0);return e>=OT&&e<=MT}function In(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml="__name__";class et{constructor(e,t,r){t===void 0?t=0:t>e.length&&Y(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Y(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return et.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof et?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const o=et.compareSegments(e.get(s),t.get(s));if(o!==0)return o}return oe(e.length,t.length)}static compareSegments(e,t){const r=et.isNumericId(e),s=et.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?et.extractNumericId(e).compare(et.extractNumericId(t)):Ki(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return So.fromString(e.substring(4,e.length-2))}}class ge extends et{construct(e,t,r){return new ge(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ge(t)}static emptyPath(){return new ge([])}}const $T=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ae extends et{construct(e,t,r){return new Ae(e,t,r)}static isValidIdentifier(e){return $T.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ml}static keyField(){return new Ae([Ml])}static fromServerFormat(e){const t=[];let r="",s=0;const o=()=>{if(r.length===0)throw new z(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new z(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new z(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new z(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ae(t)}static emptyPath(){return new Ae([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(ge.fromString(e))}static fromName(e){return new X(ge.fromString(e).popFirst(5))}static empty(){return new X(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new ge(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(n,e,t){if(!t)throw new z(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function UT(n,e,t,r){if(e===!0&&r===!0)throw new z(L.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function $l(n){if(!X.isDocumentKey(n))throw new z(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Lu(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Co(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Y(12329,{type:typeof n})}function Qi(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new z(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Co(n);throw new z(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(n,e){const t={typeString:n};return e&&(t.value=e),t}function wr(n,e){if(!Lu(n))throw new z(L.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,o="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${r}' field to equal '${o.value}'`;break}}if(t)throw new z(L.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=-62135596800,Ul=1e6;class de{static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Ul);return new de(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Fl)throw new z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ul}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:de._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(wr(e,de._jsonSchema))return new de(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Fl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}de._jsonSchemaVersion="firestore/timestamp/1.0",de._jsonSchema={type:ve("string",de._jsonSchemaVersion),seconds:ve("number"),nanoseconds:ve("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{static fromTimestamp(e){return new he(e)}static min(){return new he(new de(0,0))}static max(){return new he(new de(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=-1;function xT(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new de(t+1,0):new de(t,r));return new Mt(s,X.empty(),e)}function BT(n){return new Mt(n.readTime,n.key,cr)}class Mt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Mt(he.min(),X.empty(),cr)}static max(){return new Mt(he.max(),X.empty(),cr)}}function jT(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=X.comparator(n.documentKey,e.documentKey),t!==0?t:oe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==HT)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let s=0,o=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++o,a&&o===s&&t()},h=>r(h))}),a=!0,o===s&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(s=>s?V.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,o)=>{r.push(t.call(this,s,o))}),this.waitFor(r)}static mapArray(e,t){return new V((r,s)=>{const o=e.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next(m=>{a[d]=m,++c,c===o&&r(a)},m=>s(m))}})}static doWhile(e,t){return new V((r,s)=>{const o=()=>{e()===!0?t().next(()=>{o()},s):r()};o()})}}function zT(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ar(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}No.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=-1;function Lo(n){return n==null}function Is(n){return n===0&&1/n==-1/0}function WT(n){return typeof n=="number"&&Number.isInteger(n)&&!Is(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou="";function GT(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=xl(e)),e=KT(n.get(t),e);return xl(e)}function KT(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":t+="";break;case Ou:t+="";break;default:t+=o}}return t}function xl(n){return n+Ou+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Vn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Mu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t){this.comparator=e,this.root=t||Ie.EMPTY}insert(e,t){return new xe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ie.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ie.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Jr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Jr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Jr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Jr(this.root,e,this.comparator,!0)}}class Jr{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ie{constructor(e,t,r,s,o){this.key=e,this.value=t,this.color=r??Ie.RED,this.left=s??Ie.EMPTY,this.right=o??Ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,o){return new Ie(e??this.key,t??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const o=r(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,t,r),null):o===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ie.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ie.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}}Ie.EMPTY=null,Ie.RED=!0,Ie.BLACK=!1;Ie.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,t,r,s,o){return this}insert(e,t,r){return new Ie(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new jl(this.data.getIterator())}getIteratorFrom(e){return new jl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof be)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new be(this.comparator);return t.data=e,t}}class jl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.fields=e,e.sort(Ae.comparator)}static empty(){return new Xe([])}unionWith(e){let t=new be(Ae.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Xe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return In(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new QT("Invalid base64 string: "+o):o}}(e);return new it(t)}static fromUint8Array(e){const t=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(e);return new it(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const JT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nn(n){if(me(!!n,39018),typeof n=="string"){let e=0;const t=JT.exec(n);if(me(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:we(n.seconds),nanos:we(n.nanos)}}function we(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function wn(n){return typeof n=="string"?it.fromBase64String(n):it.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u="server_timestamp",Fu="__type__",Uu="__previous_value__",xu="__local_write_time__";function Oo(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Fu])==null?void 0:r.stringValue)===$u}function Mo(n){const e=n.mapValue.fields[Uu];return Oo(e)?Mo(e):e}function ws(n){const e=nn(n.mapValue.fields[xu].timestampValue);return new de(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,t,r,s,o,a,c,h,d,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=m}}const As="(default)";class bs{constructor(e,t){this.projectId=e,this.database=t||As}static empty(){return new bs("","")}get isDefaultDatabase(){return this.database===As}isEqual(e){return e instanceof bs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu="__type__",YT="__max__",Xr={mapValue:{}},ju="__vector__",Ji="value";function rn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Oo(n)?4:eI(n)?9007199254740991:ZT(n)?10:11:Y(28295,{value:n})}function ot(n,e){if(n===e)return!0;const t=rn(n);if(t!==rn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ws(n).isEqual(ws(e));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=nn(s.timestampValue),c=nn(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,o){return wn(s.bytesValue).isEqual(wn(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,o){return we(s.geoPointValue.latitude)===we(o.geoPointValue.latitude)&&we(s.geoPointValue.longitude)===we(o.geoPointValue.longitude)}(n,e);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return we(s.integerValue)===we(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=we(s.doubleValue),c=we(o.doubleValue);return a===c?Is(a)===Is(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return In(n.arrayValue.values||[],e.arrayValue.values||[],ot);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Bl(a)!==Bl(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!ot(a[h],c[h])))return!1;return!0}(n,e);default:return Y(52216,{left:n})}}function ur(n,e){return(n.values||[]).find(t=>ot(t,e))!==void 0}function An(n,e){if(n===e)return 0;const t=rn(n),r=rn(e);if(t!==r)return oe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return oe(n.booleanValue,e.booleanValue);case 2:return function(o,a){const c=we(o.integerValue||o.doubleValue),h=we(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,e);case 3:return Hl(n.timestampValue,e.timestampValue);case 4:return Hl(ws(n),ws(e));case 5:return Ki(n.stringValue,e.stringValue);case 6:return function(o,a){const c=wn(o),h=wn(a);return c.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const m=oe(c[d],h[d]);if(m!==0)return m}return oe(c.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const c=oe(we(o.latitude),we(a.latitude));return c!==0?c:oe(we(o.longitude),we(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ql(n.arrayValue,e.arrayValue);case 10:return function(o,a){var E,N,O,U;const c=o.fields||{},h=a.fields||{},d=(E=c[Ji])==null?void 0:E.arrayValue,m=(N=h[Ji])==null?void 0:N.arrayValue,g=oe(((O=d==null?void 0:d.values)==null?void 0:O.length)||0,((U=m==null?void 0:m.values)==null?void 0:U.length)||0);return g!==0?g:ql(d,m)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===Xr.mapValue&&a===Xr.mapValue)return 0;if(o===Xr.mapValue)return 1;if(a===Xr.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let g=0;g<h.length&&g<m.length;++g){const E=Ki(h[g],m[g]);if(E!==0)return E;const N=An(c[h[g]],d[m[g]]);if(N!==0)return N}return oe(h.length,m.length)}(n.mapValue,e.mapValue);default:throw Y(23264,{he:t})}}function Hl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return oe(n,e);const t=nn(n),r=nn(e),s=oe(t.seconds,r.seconds);return s!==0?s:oe(t.nanos,r.nanos)}function ql(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const o=An(t[s],r[s]);if(o)return o}return oe(t.length,r.length)}function bn(n){return Xi(n)}function Xi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=nn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return wn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return X.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const o of t.values||[])s?s=!1:r+=",",r+=Xi(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Xi(t.fields[a])}`;return s+"}"}(n.mapValue):Y(61005,{value:n})}function ls(n){switch(rn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Mo(n);return e?16+ls(e):16;case 5:return 2*n.stringValue.length;case 6:return wn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+ls(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Vn(r.fields,(o,a)=>{s+=o.length+ls(a)}),s}(n.mapValue);default:throw Y(13486,{value:n})}}function Yi(n){return!!n&&"integerValue"in n}function $o(n){return!!n&&"arrayValue"in n}function cs(n){return!!n&&"mapValue"in n}function ZT(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Bu])==null?void 0:r.stringValue)===ju}function tr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Vn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=tr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=tr(n.arrayValue.values[t]);return e}return{...n}}function eI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===YT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.value=e}static empty(){return new Ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!cs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=tr(t)}setAll(e){let t=Ae.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const h=this.getFieldsMap(t);this.applyChanges(h,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=tr(a):s.push(c.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,s)}delete(e){const t=this.field(e.popLast());cs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ot(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];cs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Vn(t,(s,o)=>e[s]=o);for(const s of r)delete e[s]}clone(){return new Ke(tr(this.value))}}function Hu(n){const e=[];return Vn(n.fields,(t,r)=>{const s=new Ae([t]);if(cs(r)){const o=Hu(r.mapValue).fields;if(o.length===0)e.push(s);else for(const a of o)e.push(s.child(a))}else e.push(s)}),new Xe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,t,r,s,o,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ge(e,0,he.min(),he.min(),he.min(),Ke.empty(),0)}static newFoundDocument(e,t,r,s){return new Ge(e,1,t,he.min(),r,s,0)}static newNoDocument(e,t){return new Ge(e,2,t,he.min(),he.min(),Ke.empty(),0)}static newUnknownDocument(e,t){return new Ge(e,3,t,he.min(),he.min(),Ke.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,t){this.position=e,this.inclusive=t}}function zl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const o=e[s],a=n.position[s];if(o.field.isKeyField()?r=X.comparator(X.fromName(a.referenceValue),t.key):r=An(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ot(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,t="asc"){this.field=e,this.dir=t}}function tI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{}class Ee extends qu{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new rI(e,t,r):t==="array-contains"?new oI(e,r):t==="in"?new aI(e,r):t==="not-in"?new lI(e,r):t==="array-contains-any"?new cI(e,r):new Ee(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new sI(e,r):new iI(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(An(t,this.value)):t!==null&&rn(this.value)===rn(t)&&this.matchesComparison(An(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $t extends qu{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new $t(e,t)}matches(e){return zu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function zu(n){return n.op==="and"}function Wu(n){return nI(n)&&zu(n)}function nI(n){for(const e of n.filters)if(e instanceof $t)return!1;return!0}function Zi(n){if(n instanceof Ee)return n.field.canonicalString()+n.op.toString()+bn(n.value);if(Wu(n))return n.filters.map(e=>Zi(e)).join(",");{const e=n.filters.map(t=>Zi(t)).join(",");return`${n.op}(${e})`}}function Gu(n,e){return n instanceof Ee?function(r,s){return s instanceof Ee&&r.op===s.op&&r.field.isEqual(s.field)&&ot(r.value,s.value)}(n,e):n instanceof $t?function(r,s){return s instanceof $t&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,c)=>o&&Gu(a,s.filters[c]),!0):!1}(n,e):void Y(19439)}function Ku(n){return n instanceof Ee?function(t){return`${t.field.canonicalString()} ${t.op} ${bn(t.value)}`}(n):n instanceof $t?function(t){return t.op.toString()+" {"+t.getFilters().map(Ku).join(" ,")+"}"}(n):"Filter"}class rI extends Ee{constructor(e,t,r){super(e,t,r),this.key=X.fromName(r.referenceValue)}matches(e){const t=X.comparator(e.key,this.key);return this.matchesComparison(t)}}class sI extends Ee{constructor(e,t){super(e,"in",t),this.keys=Qu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class iI extends Ee{constructor(e,t){super(e,"not-in",t),this.keys=Qu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Qu(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>X.fromName(r.referenceValue))}class oI extends Ee{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return $o(t)&&ur(t.arrayValue,this.value)}}class aI extends Ee{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ur(this.value.arrayValue,t)}}class lI extends Ee{constructor(e,t){super(e,"not-in",t)}matches(e){if(ur(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ur(this.value.arrayValue,t)}}class cI extends Ee{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!$o(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ur(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e,t=null,r=[],s=[],o=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.Te=null}}function Gl(n,e=null,t=[],r=[],s=null,o=null,a=null){return new uI(n,e,t,r,s,o,a)}function Fo(n){const e=ce(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Zi(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Lo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>bn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>bn(r)).join(",")),e.Te=t}return e.Te}function Uo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!tI(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Gu(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Wl(n.startAt,e.startAt)&&Wl(n.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,t=null,r=[],s=[],o=null,a="F",c=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function hI(n,e,t,r,s,o,a,c){return new qs(n,e,t,r,s,o,a,c)}function dI(n){return new qs(n)}function Kl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function fI(n){return n.collectionGroup!==null}function nr(n){const e=ce(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ie.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new be(Ae.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ie.push(new Ss(o,r))}),t.has(Ae.keyField().canonicalString())||e.Ie.push(new Ss(Ae.keyField(),r))}return e.Ie}function Kt(n){const e=ce(n);return e.Ee||(e.Ee=pI(e,nr(n))),e.Ee}function pI(n,e){if(n.limitType==="F")return Gl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Ss(s.field,o)});const t=n.endAt?new Ps(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ps(n.startAt.position,n.startAt.inclusive):null;return Gl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function eo(n,e,t){return new qs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ju(n,e){return Uo(Kt(n),Kt(e))&&n.limitType===e.limitType}function Xu(n){return`${Fo(Kt(n))}|lt:${n.limitType}`}function Qn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Ku(s)).join(", ")}]`),Lo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>bn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>bn(s)).join(",")),`Target(${r})`}(Kt(n))}; limitType=${n.limitType})`}function xo(n,e){return e.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):X.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,s){for(const o of nr(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,h){const d=zl(a,c,h);return a.inclusive?d<=0:d<0}(r.startAt,nr(r),s)||r.endAt&&!function(a,c,h){const d=zl(a,c,h);return a.inclusive?d>=0:d>0}(r.endAt,nr(r),s))}(n,e)}function mI(n){return(e,t)=>{let r=!1;for(const s of nr(n)){const o=gI(s,e,t);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function gI(n,e,t){const r=n.field.isKeyField()?X.comparator(e.key,t.key):function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?An(h,d):Y(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Y(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Vn(this.inner,(t,r)=>{for(const[s,o]of r)e(s,o)})}isEmpty(){return Mu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=new xe(X.comparator);function ks(){return _I}const Yu=new xe(X.comparator);function Yr(...n){let e=Yu;for(const t of n)e=e.insert(t.key,t);return e}function Zu(n){let e=Yu;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Wt(){return rr()}function eh(){return rr()}function rr(){return new on(n=>n.toString(),(n,e)=>n.isEqual(e))}const vI=new xe(X.comparator),yI=new be(X.comparator);function Ne(...n){let e=yI;for(const t of n)e=e.add(t);return e}const EI=new be(oe);function TI(){return EI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Is(e)?"-0":e}}function th(n){return{integerValue:""+n}}function II(n,e){return WT(e)?th(e):Bo(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(){this._=void 0}}function wI(n,e,t){return n instanceof hr?function(s,o){const a={fields:{[Fu]:{stringValue:$u},[xu]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Oo(o)&&(o=Mo(o)),o&&(a.fields[Uu]=o),{mapValue:a}}(t,e):n instanceof dr?rh(n,e):n instanceof fr?sh(n,e):function(s,o){const a=nh(s,o),c=Ql(a)+Ql(s.Ae);return Yi(a)&&Yi(s.Ae)?th(c):Bo(s.serializer,c)}(n,e)}function AI(n,e,t){return n instanceof dr?rh(n,e):n instanceof fr?sh(n,e):t}function nh(n,e){return n instanceof Rs?function(r){return Yi(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class hr extends zs{}class dr extends zs{constructor(e){super(),this.elements=e}}function rh(n,e){const t=ih(e);for(const r of n.elements)t.some(s=>ot(s,r))||t.push(r);return{arrayValue:{values:t}}}class fr extends zs{constructor(e){super(),this.elements=e}}function sh(n,e){let t=ih(e);for(const r of n.elements)t=t.filter(s=>!ot(s,r));return{arrayValue:{values:t}}}class Rs extends zs{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Ql(n){return we(n.integerValue||n.doubleValue)}function ih(n){return $o(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,t){this.field=e,this.transform=t}}function PI(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof dr&&s instanceof dr||r instanceof fr&&s instanceof fr?In(r.elements,s.elements,ot):r instanceof Rs&&s instanceof Rs?ot(r.Ae,s.Ae):r instanceof hr&&s instanceof hr}(n.transform,e.transform)}class SI{constructor(e,t){this.version=e,this.transformResults=t}}class ft{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ft}static exists(e){return new ft(void 0,e)}static updateTime(e){return new ft(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function us(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ws{}function oh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new lh(n.key,ft.none()):new br(n.key,n.data,ft.none());{const t=n.data,r=Ke.empty();let s=new be(Ae.comparator);for(let o of e.fields)if(!s.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new an(n.key,r,new Xe(s.toArray()),ft.none())}}function kI(n,e,t){n instanceof br?function(s,o,a){const c=s.value.clone(),h=Xl(s.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof an?function(s,o,a){if(!us(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=Xl(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(ah(s)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function sr(n,e,t,r){return n instanceof br?function(o,a,c,h){if(!us(o.precondition,a))return c;const d=o.value.clone(),m=Yl(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof an?function(o,a,c,h){if(!us(o.precondition,a))return c;const d=Yl(o.fieldTransforms,h,a),m=a.data;return m.setAll(ah(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(o,a,c){return us(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function RI(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),o=nh(r.transform,s||null);o!=null&&(t===null&&(t=Ke.empty()),t.set(r.field,o))}return t||null}function Jl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&In(r,s,(o,a)=>PI(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class br extends Ws{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class an extends Ws{constructor(e,t,r,s,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function ah(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Xl(n,e,t){const r=new Map;me(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const o=n[s],a=o.transform,c=e.data.field(o.field);r.set(o.field,AI(a,c,t[s]))}return r}function Yl(n,e,t){const r=new Map;for(const s of n){const o=s.transform,a=t.data.field(s.field);r.set(s.field,wI(o,a,e))}return r}class lh extends Ws{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class CI extends Ws{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&kI(o,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=sr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=sr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=eh();return this.mutations.forEach(s=>{const o=e.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=t.has(s.key)?null:c;const h=oh(a,c);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ne())}isEqual(e){return this.batchId===e.batchId&&In(this.mutations,e.mutations,(t,r)=>Jl(t,r))&&In(this.baseMutations,e.baseMutations,(t,r)=>Jl(t,r))}}class jo{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){me(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return vI}();const o=e.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new jo(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e,re;function DI(n){switch(n){case L.OK:return Y(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return Y(15467,{code:n})}}function LI(n){if(n===void 0)return tn("GRPC error has no .code"),L.UNKNOWN;switch(n){case _e.OK:return L.OK;case _e.CANCELLED:return L.CANCELLED;case _e.UNKNOWN:return L.UNKNOWN;case _e.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case _e.INTERNAL:return L.INTERNAL;case _e.UNAVAILABLE:return L.UNAVAILABLE;case _e.UNAUTHENTICATED:return L.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case _e.NOT_FOUND:return L.NOT_FOUND;case _e.ALREADY_EXISTS:return L.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return L.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case _e.ABORTED:return L.ABORTED;case _e.OUT_OF_RANGE:return L.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return L.UNIMPLEMENTED;case _e.DATA_LOSS:return L.DATA_LOSS;default:return Y(39323,{code:n})}}(re=_e||(_e={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new So([4294967295,4294967295],0);class OI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function to(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function MI(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function $I(n,e){return to(n,e.toTimestamp())}function yn(n){return me(!!n,49232),he.fromTimestamp(function(t){const r=nn(t);return new de(r.seconds,r.nanos)}(n))}function ch(n,e){return no(n,e).canonicalString()}function no(n,e){const t=function(s){return new ge(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function FI(n){const e=ge.fromString(n);return me(WI(e),10190,{key:e.toString()}),e}function ro(n,e){return ch(n.databaseId,e.path)}function UI(n){const e=FI(n);return e.length===4?ge.emptyPath():BI(e)}function xI(n){return new ge(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function BI(n){return me(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Zl(n,e,t){return{name:ro(n,e),fields:t.value.mapValue.fields}}function jI(n,e){let t;if(e instanceof br)t={update:Zl(n,e.key,e.value)};else if(e instanceof lh)t={delete:ro(n,e.key)};else if(e instanceof an)t={update:Zl(n,e.key,e.data),updateMask:zI(e.fieldMask)};else{if(!(e instanceof CI))return Y(16599,{Vt:e.type});t={verify:ro(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof hr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof dr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof fr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Rs)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw Y(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:$I(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:Y(27497)}(n,e.precondition)),t}function HI(n,e){return n&&n.length>0?(me(e!==void 0,14353),n.map(t=>function(s,o){let a=s.updateTime?yn(s.updateTime):yn(o);return a.isEqual(he.min())&&(a=yn(o)),new SI(a,s.transformResults||[])}(t,e))):[]}function qI(n){let e=UI(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){me(r===1,65062);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let o=[];t.where&&(o=function(g){const E=uh(g);return E instanceof $t&&Wu(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(E=>function(O){return new Ss(fn(O.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(E))}(t.orderBy));let c=null;t.limit&&(c=function(g){let E;return E=typeof g=="object"?g.value:g,Lo(E)?null:E}(t.limit));let h=null;t.startAt&&(h=function(g){const E=!!g.before,N=g.values||[];return new Ps(N,E)}(t.startAt));let d=null;return t.endAt&&(d=function(g){const E=!g.before,N=g.values||[];return new Ps(N,E)}(t.endAt)),hI(e,s,a,o,c,"F",h,d)}function uh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=fn(t.unaryFilter.field);return Ee.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=fn(t.unaryFilter.field);return Ee.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=fn(t.unaryFilter.field);return Ee.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=fn(t.unaryFilter.field);return Ee.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}}(n):n.fieldFilter!==void 0?function(t){return Ee.create(fn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return $t.create(t.compositeFilter.filters.map(r=>uh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y(1026)}}(t.compositeFilter.op))}(n):Y(30097,{filter:n})}function fn(n){return Ae.fromServerFormat(n.fieldPath)}function zI(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function WI(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e){this.yt=e}}function KI(n){const e=qI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?eo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(){this.Cn=new JI}addToCollectionParentIndex(e,t){return this.Cn.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(Mt.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(Mt.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class JI{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new be(ge.comparator),o=!s.has(r);return this.index[t]=s.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new be(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},hh=41943040;class Ue{static withCacheSize(e){return new Ue(e,Ue.DEFAULT_COLLECTION_PERCENTILE,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ue.DEFAULT_COLLECTION_PERCENTILE=10,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ue.DEFAULT=new Ue(hh,Ue.DEFAULT_COLLECTION_PERCENTILE,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ue.DISABLED=new Ue(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Pn(0)}static cr(){return new Pn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc="LruGarbageCollector",XI=1048576;function nc([n,e],[t,r]){const s=oe(n,t);return s===0?oe(e,r):s}class YI{constructor(e){this.Ir=e,this.buffer=new be(nc),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();nc(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ZI{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){x(tc,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ar(t)?x(tc,"Ignoring IndexedDB error during garbage collection: ",t):await Vo(t)}await this.Vr(3e5)})}}class ew{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return V.resolve(No.ce);const r=new YI(t);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(ec)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ec):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,o,a,c,h,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(r=g,c=Date.now(),this.removeTargets(e,r,t))).next(g=>(o=g,h=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(d=Date.now(),dn()<=ee.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${g} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:g})))}}function tw(n,e){return new ew(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(){this.changes=new on(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ge.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&sr(r.mutation,s,Xe.empty(),de.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Ne()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Ne()){const s=Wt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(o=>{let a=Yr();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Wt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Ne()))}populateOverlays(e,t,r){const s=[];return r.forEach(o=>{t.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(e,s).next(o=>{o.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let o=ks();const a=rr(),c=function(){return rr()}();return t.forEach((h,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof an)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),sr(m.mutation,d,m.mutation.getFieldMask(),de.now())):a.set(d.key,Xe.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),t.forEach((d,m)=>c.set(d,new rw(m,a.get(d)??null))),c))}recalculateAndSaveOverlays(e,t){const r=rr();let s=new xe((a,c)=>a-c),o=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(h=>{const d=t.get(h);if(d===null)return;let m=r.get(h)||Xe.empty();m=c.applyToLocalView(d,m),r.set(h,m);const g=(s.get(c.batchId)||Ne()).add(h);s=s.insert(c.batchId,g)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,m=h.value,g=eh();m.forEach(E=>{if(!o.has(E)){const N=oh(t.get(E),r.get(E));N!==null&&g.set(E,N),o=o.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return X.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):fI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-o.size):V.resolve(Wt());let c=cr,h=o;return a.next(d=>V.forEach(d,(m,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),o.get(m)?V.resolve():this.remoteDocumentCache.getEntry(e,m).next(E=>{h=h.insert(m,E)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,Ne())).next(m=>({batchId:c,changes:Zu(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next(r=>{let s=Yr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const o=t.collectionGroup;let a=Yr();return this.indexManager.getCollectionParents(e,o).next(c=>V.forEach(c,h=>{const d=function(g,E){return new qs(E,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(m=>{m.forEach((g,E)=>{a=a.insert(g,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,s))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Ge.newInvalidDocument(m)))});let c=Yr();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&sr(m.mutation,d,Xe.empty(),de.now()),xo(t,d)&&(c=c.insert(h,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return V.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:yn(s.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(s){return{name:s.name,query:KI(s.bundledQuery),readTime:yn(s.readTime)}}(t)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(){this.overlays=new xe(X.comparator),this.qr=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Wt();return V.forEach(t,s=>this.getOverlay(e,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,o)=>{this.St(e,t,o)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.qr.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const s=Wt(),o=t.length+1,a=new X(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return V.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let o=new xe((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=Wt(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=Wt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>c.set(d,m)),!(c.size()>=s)););return V.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new NI(t,r));let o=this.qr.get(t);o===void 0&&(o=Ne(),this.qr.set(t,o)),this.qr.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(){this.sessionToken=it.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(){this.Qr=new be(ye.$r),this.Ur=new be(ye.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new ye(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new ye(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new X(new ge([])),r=new ye(t,e),s=new ye(t,e+1),o=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),o.push(a.key)}),o}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new X(new ge([])),r=new ye(t,e),s=new ye(t,e+1);let o=Ne();return this.Ur.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new ye(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ye{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return X.comparator(e.key,t.key)||oe(e.Yr,t.Yr)}static Kr(e,t){return oe(e.Yr,t.Yr)||X.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new be(ye.$r)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new VI(o,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new ye(c.key,o)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,t){return V.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),o=s<0?0:s;return V.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Do:this.tr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ye(t,0),s=new ye(t,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,s],a=>{const c=this.Xr(a.Yr);o.push(c)}),V.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new be(oe);return t.forEach(s=>{const o=new ye(s,0),a=new ye(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],c=>{r=r.add(c.Yr)})}),V.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let o=r;X.isDocumentKey(o)||(o=o.child(""));const a=new ye(new X(o),0);let c=new be(oe);return this.Zr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(h.Yr)),!0)},a),V.resolve(this.ti(c))}ti(e){const t=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){me(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return V.forEach(t.mutations,s=>{const o=new ye(s.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new ye(t,0),s=this.Zr.firstAfterOrEqual(r);return V.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e){this.ri=e,this.docs=function(){return new xe(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),o=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():Ge.newInvalidDocument(t))}getEntries(e,t){let r=ks();return t.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Ge.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let o=ks();const a=t.path,c=new X(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||jT(BT(m),r)<=0||(s.has(m.key)||xo(t,m))&&(o=o.insert(m.key,m.mutableCopy()))}return V.resolve(o)}getAllFromCollectionGroup(e,t,r,s){Y(9500)}ii(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new uw(this)}getSize(e){return V.resolve(this.size)}}class uw extends nw{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e){this.persistence=e,this.si=new on(t=>Fo(t),Uo),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.oi=0,this._i=new Ho,this.targetCount=0,this.ai=Pn.ur()}forEachTarget(e,t){return this.si.forEach((r,s)=>t(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),V.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Pn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Pr(t),V.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let s=0;const o=[];return this.si.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),V.waitFor(o).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),V.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,o=[];return s&&t.forEach(a=>{o.push(s.markPotentiallyOrphaned(e,a))}),V.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,t){this.ui={},this.overlays={},this.ci=new No(0),this.li=!1,this.li=!0,this.hi=new aw,this.referenceDelegate=e(this),this.Pi=new hw(this),this.indexManager=new QI,this.remoteDocumentCache=function(s){return new cw(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new GI(t),this.Ii=new iw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ow,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new lw(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){x("MemoryPersistence","Starting transaction:",e);const s=new dw(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(o=>this.referenceDelegate.di(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ai(e,t){return V.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class dw extends qT{constructor(e){super(),this.currentSequenceNumber=e}}class qo{constructor(e){this.persistence=e,this.Ri=new Ho,this.Vi=null}static mi(e){return new qo(e)}get fi(){if(this.Vi)return this.Vi;throw Y(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),V.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(o=>this.fi.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.fi,r=>{const s=X.fromPath(r);return this.gi(e,s).next(o=>{o||t.removeEntry(s,he.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return V.or([()=>V.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Cs{constructor(e,t){this.persistence=e,this.pi=new on(r=>GT(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=tw(this,t)}static mi(e,t){return new Cs(e,t)}Ei(){}di(e){return V.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return V.forEach(this.pi,(r,s)=>this.br(e,r,s).next(o=>o?V.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ii(e,a=>this.br(e,a,t).next(c=>{c||(r++,o.removeEntry(a,he.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),V.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),V.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ls(e.data.value)),t}br(e,t,r){return V.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=Ne(),s=Ne();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new zo(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return z_()?8:zT(Le())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const o={result:null};return this.ys(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ws(e,t,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new fw;return this.Ss(e,t,a).next(c=>{if(o.result=c,this.Vs)return this.bs(e,t,a,c.size)})}).next(()=>o.result)}bs(e,t,r,s){return r.documentReadCount<this.fs?(dn()<=ee.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",Qn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),V.resolve()):(dn()<=ee.DEBUG&&x("QueryEngine","Query:",Qn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(dn()<=ee.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",Qn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kt(t))):V.resolve())}ys(e,t){if(Kl(t))return V.resolve(null);let r=Kt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=eo(t,null,"F"),r=Kt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=Ne(...o);return this.ps.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(h=>{const d=this.Ds(t,c);return this.Cs(t,d,a,h.readTime)?this.ys(e,eo(t,null,"F")):this.vs(e,d,t,h)}))})))}ws(e,t,r,s){return Kl(t)||s.isEqual(he.min())?V.resolve(null):this.ps.getDocuments(e,r).next(o=>{const a=this.Ds(t,o);return this.Cs(t,a,r,s)?V.resolve(null):(dn()<=ee.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qn(t)),this.vs(e,a,t,xT(s,cr)).next(c=>c))})}Ds(e,t){let r=new be(mI(e));return t.forEach((s,o)=>{xo(e,o)&&(r=r.add(o))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ss(e,t,r){return dn()<=ee.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Qn(t)),this.ps.getDocumentsMatchingQuery(e,t,Mt.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw="LocalStore";class gw{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new xe(oe),this.xs=new on(o=>Fo(o),Uo),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sw(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function _w(n,e,t,r){return new gw(n,e,t,r)}async function fh(n,e){const t=ce(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let h=Ne();for(const d of s){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){c.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return t.localDocuments.getDocuments(r,h).next(d=>({Ls:d,removedBatchIds:a,addedBatchIds:c}))})})}function vw(n,e){const t=ce(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),o=t.Ns.newChangeBuffer({trackRemovals:!0});return function(c,h,d,m){const g=d.batch,E=g.keys();let N=V.resolve();return E.forEach(O=>{N=N.next(()=>m.getEntry(h,O)).next(U=>{const M=d.docVersions.get(O);me(M!==null,48541),U.version.compareTo(M)<0&&(g.applyToRemoteDocument(U,d),U.isValidDocument()&&(U.setReadTime(d.commitVersion),m.addEntry(U)))})}),N.next(()=>c.mutationQueue.removeMutationBatch(h,g))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=Ne();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function yw(n){const e=ce(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function Ew(n,e){const t=ce(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Do),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class rc{constructor(){this.activeTargetIds=TI()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Tw{constructor(){this.Mo=new rc,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new rc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc="ConnectivityMonitor";class ic{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){x(sc,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){x(sc,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zr=null;function so(){return Zr===null?Zr=function(){return 268435456+Math.round(2147483648*Math.random())}():Zr++,"0x"+Zr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="RestConnection",ww={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Aw{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===As?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,o){const a=so(),c=this.zo(e,t.toUriEncodedString());x(Ci,`Sending RPC '${e}' ${a}:`,c,r);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,s,o);const{host:d}=new URL(c),m=Sn(d);return this.Jo(e,c,h,r,m).then(g=>(x(Ci,`Received RPC '${e}' ${a}: `,g),g),g=>{throw Hs(Ci,`RPC '${e}' ${a} failed with error: `,g,"url: ",c,"request:",r),g})}Ho(e,t,r,s,o,a){return this.Go(e,t,r,s,o)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Cn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,o)=>e[o]=s),r&&r.headers.forEach((s,o)=>e[o]=s)}zo(e,t){const r=ww[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce="WebChannelConnection";class Pw extends Aw{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,o){const a=so();return new Promise((c,h)=>{const d=new Su;d.setWithCredentials(!0),d.listenOnce(ku.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case as.NO_ERROR:const g=d.getResponseJson();x(Ce,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),c(g);break;case as.TIMEOUT:x(Ce,`RPC '${e}' ${a} timed out`),h(new z(L.DEADLINE_EXCEEDED,"Request time out"));break;case as.HTTP_ERROR:const E=d.getStatus();if(x(Ce,`RPC '${e}' ${a} failed with status:`,E,"response text:",d.getResponseText()),E>0){let N=d.getResponseJson();Array.isArray(N)&&(N=N[0]);const O=N==null?void 0:N.error;if(O&&O.status&&O.message){const U=function(J){const K=J.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(K)>=0?K:L.UNKNOWN}(O.status);h(new z(U,O.message))}else h(new z(L.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new z(L.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{x(Ce,`RPC '${e}' ${a} completed.`)}});const m=JSON.stringify(s);x(Ce,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",m,r,15)})}T_(e,t,r){const s=so(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Vu(),c=Cu(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const m=o.join("");x(Ce,`Creating RPC '${e}' stream ${s}: ${m}`,h);const g=a.createWebChannel(m,h);this.I_(g);let E=!1,N=!1;const O=new bw({Yo:M=>{N?x(Ce,`Not sending because RPC '${e}' stream ${s} is closed:`,M):(E||(x(Ce,`Opening RPC '${e}' stream ${s} transport.`),g.open(),E=!0),x(Ce,`RPC '${e}' stream ${s} sending:`,M),g.send(M))},Zo:()=>g.close()}),U=(M,J,K)=>{M.listen(J,ne=>{try{K(ne)}catch(fe){setTimeout(()=>{throw fe},0)}})};return U(g,Yn.EventType.OPEN,()=>{N||(x(Ce,`RPC '${e}' stream ${s} transport opened.`),O.o_())}),U(g,Yn.EventType.CLOSE,()=>{N||(N=!0,x(Ce,`RPC '${e}' stream ${s} transport closed`),O.a_(),this.E_(g))}),U(g,Yn.EventType.ERROR,M=>{N||(N=!0,Hs(Ce,`RPC '${e}' stream ${s} transport errored. Name:`,M.name,"Message:",M.message),O.a_(new z(L.UNAVAILABLE,"The operation could not be completed")))}),U(g,Yn.EventType.MESSAGE,M=>{var J;if(!N){const K=M.data[0];me(!!K,16349);const ne=K,fe=(ne==null?void 0:ne.error)||((J=ne[0])==null?void 0:J.error);if(fe){x(Ce,`RPC '${e}' stream ${s} received error:`,fe);const ze=fe.status;let Fe=function(v){const T=_e[v];if(T!==void 0)return LI(T)}(ze),w=fe.message;Fe===void 0&&(Fe=L.INTERNAL,w="Unknown error status: "+ze+" with message "+fe.message),N=!0,O.a_(new z(Fe,w)),g.close()}else x(Ce,`RPC '${e}' stream ${s} received:`,K),O.u_(K)}}),U(c,Ru.STAT_EVENT,M=>{M.stat===Gi.PROXY?x(Ce,`RPC '${e}' stream ${s} detected buffering proxy`):M.stat===Gi.NOPROXY&&x(Ce,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{O.__()},0),O}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Vi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(n){return new OI(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,t,r=1e3,s=1.5,o=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="PersistentStream";class Sw{constructor(e,t,r,s,o,a,c,h){this.Mi=e,this.S_=r,this.b_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ph(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===L.RESOURCE_EXHAUSTED?(tn(t.toString()),tn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new z(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return x(oc,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(x(oc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kw extends Sw{constructor(e,t,r,s,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return me(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){me(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=HI(e.writeResults,e.commitTime),r=yn(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=xI(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>jI(this.serializer,r))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{}class Cw extends Rw{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new z(L.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Go(e,no(t,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(L.UNKNOWN,o.toString())})}Ho(e,t,r,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Ho(e,no(t,r),s,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new z(L.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Vw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(tn(t),this.aa=!1):x("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr="RemoteStore";class Nw{constructor(e,t,r,s,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{kr(this)&&(x(Pr,"Restarting streams for network reachability change."),await async function(h){const d=ce(h);d.Ea.add(4),await Sr(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Ks(d)}(this))})}),this.Ra=new Vw(r,s)}}async function Ks(n){if(kr(n))for(const e of n.da)await e(!0)}async function Sr(n){for(const e of n.da)await e(!1)}function kr(n){return ce(n).Ea.size===0}async function mh(n,e,t){if(!Ar(e))throw e;n.Ea.add(1),await Sr(n),n.Ra.set("Offline"),t||(t=()=>yw(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x(Pr,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Ks(n)})}function gh(n,e){return e().catch(t=>mh(n,t,e))}async function Qs(n){const e=ce(n),t=Ft(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Do;for(;Dw(e);)try{const s=await Ew(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,Lw(e,s)}catch(s){await mh(e,s)}_h(e)&&vh(e)}function Dw(n){return kr(n)&&n.Ta.length<10}function Lw(n,e){n.Ta.push(e);const t=Ft(n);t.O_()&&t.X_&&t.ea(e.mutations)}function _h(n){return kr(n)&&!Ft(n).x_()&&n.Ta.length>0}function vh(n){Ft(n).start()}async function Ow(n){Ft(n).ra()}async function Mw(n){const e=Ft(n);for(const t of n.Ta)e.ea(t.mutations)}async function $w(n,e,t){const r=n.Ta.shift(),s=jo.from(r,e,t);await gh(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Qs(n)}async function Fw(n,e){e&&Ft(n).X_&&await async function(r,s){if(function(a){return DI(a)&&a!==L.ABORTED}(s.code)){const o=r.Ta.shift();Ft(r).B_(),await gh(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Qs(r)}}(n,e),_h(n)&&vh(n)}async function ac(n,e){const t=ce(n);t.asyncQueue.verifyOperationInProgress(),x(Pr,"RemoteStore received new credentials");const r=kr(t);t.Ea.add(3),await Sr(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ks(t)}async function Uw(n,e){const t=ce(n);e?(t.Ea.delete(2),await Ks(t)):e||(t.Ea.add(2),await Sr(t),t.Ra.set("Unknown"))}function Ft(n){return n.fa||(n.fa=function(t,r,s){const o=ce(t);return o.sa(),new kw(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Ow.bind(null,n),r_:Fw.bind(null,n),ta:Mw.bind(null,n),na:$w.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await Qs(n)):(await n.fa.stop(),n.Ta.length>0&&(x(Pr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,t,r,s,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,o){const a=Date.now()+r,c=new Wo(e,t,a,s,o);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yh(n,e){if(tn("AsyncQueue",`${e}: ${n}`),Ar(n))return new z(L.UNAVAILABLE,`${e}: ${n}`);throw n}class xw{constructor(){this.queries=lc(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=ce(t),o=s.queries;s.queries=lc(),o.forEach((a,c)=>{for(const h of c.Sa)h.onError(r)})})(this,new z(L.ABORTED,"Firestore shutting down"))}}function lc(){return new on(n=>Xu(n),Ju)}function Bw(n){n.Ca.forEach(e=>{e.next()})}var cc,uc;(uc=cc||(cc={})).Ma="default",uc.Cache="cache";const jw="SyncEngine";class Hw{constructor(e,t,r,s,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new on(c=>Xu(c),Ju),this.Iu=new Map,this.Eu=new Set,this.du=new xe(X.comparator),this.Au=new Map,this.Ru=new Ho,this.Vu={},this.mu=new Map,this.fu=Pn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function qw(n,e,t){const r=Kw(n);try{const s=await function(a,c){const h=ce(a),d=de.now(),m=c.reduce((N,O)=>N.add(O.key),Ne());let g,E;return h.persistence.runTransaction("Locally write mutations","readwrite",N=>{let O=ks(),U=Ne();return h.Ns.getEntries(N,m).next(M=>{O=M,O.forEach((J,K)=>{K.isValidDocument()||(U=U.add(J))})}).next(()=>h.localDocuments.getOverlayedDocuments(N,O)).next(M=>{g=M;const J=[];for(const K of c){const ne=RI(K,g.get(K.key).overlayedDocument);ne!=null&&J.push(new an(K.key,ne,Hu(ne.value.mapValue),ft.exists(!0)))}return h.mutationQueue.addMutationBatch(N,d,J,c)}).next(M=>{E=M;const J=M.applyToLocalDocumentSet(g,U);return h.documentOverlayCache.saveOverlays(N,M.batchId,J)})}).then(()=>({batchId:E.batchId,changes:Zu(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,h){let d=a.Vu[a.currentUser.toKey()];d||(d=new xe(oe)),d=d.insert(c,h),a.Vu[a.currentUser.toKey()]=d}(r,s.batchId,t),await Js(r,s.changes),await Qs(r.remoteStore)}catch(s){const o=yh(s,"Failed to persist write");t.reject(o)}}function hc(n,e,t){const r=ce(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((o,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const h=ce(a);h.onlineState=c;let d=!1;h.queries.forEach((m,g)=>{for(const E of g.Sa)E.va(c)&&(d=!0)}),d&&Bw(h)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function zw(n,e){const t=ce(n),r=e.batch.batchId;try{const s=await vw(t.localStore,e);Th(t,r,null),Eh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Js(t,s)}catch(s){await Vo(s)}}async function Ww(n,e,t){const r=ce(n);try{const s=await function(a,c){const h=ce(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,c).next(g=>(me(g!==null,37113),m=g.keys(),h.mutationQueue.removeMutationBatch(d,g))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(r.localStore,e);Th(r,e,t),Eh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Js(r,s)}catch(s){await Vo(s)}}function Eh(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function Th(n,e,t){const r=ce(n);let s=r.Vu[r.currentUser.toKey()];if(s){const o=s.get(e);o&&(t?o.reject(t):o.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}async function Js(n,e,t){const r=ce(n),s=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((c,h)=>{a.push(r.pu(h,e,t).then(d=>{var m;if((d||t)&&r.isPrimaryClient){const g=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(h.targetId))==null?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,g?"current":"not-current")}if(d){s.push(d);const g=zo.As(h.targetId,d);o.push(g)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(h,d){const m=ce(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>V.forEach(d,E=>V.forEach(E.Es,N=>m.persistence.referenceDelegate.addReference(g,E.targetId,N)).next(()=>V.forEach(E.ds,N=>m.persistence.referenceDelegate.removeReference(g,E.targetId,N)))))}catch(g){if(!Ar(g))throw g;x(mw,"Failed to update sequence numbers: "+g)}for(const g of d){const E=g.targetId;if(!g.fromCache){const N=m.Ms.get(E),O=N.snapshotVersion,U=N.withLastLimboFreeSnapshotVersion(O);m.Ms=m.Ms.insert(E,U)}}}(r.localStore,o))}async function Gw(n,e){const t=ce(n);if(!t.currentUser.isEqual(e)){x(jw,"User change. New user:",e.toKey());const r=await fh(t.localStore,e);t.currentUser=e,function(o,a){o.mu.forEach(c=>{c.forEach(h=>{h.reject(new z(L.CANCELLED,a))})}),o.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Js(t,r.Ls)}}function Kw(n){const e=ce(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ww.bind(null,e),e}class Vs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Gs(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return _w(this.persistence,new pw,e.initialUser,this.serializer)}Cu(e){return new dh(qo.mi,this.serializer)}Du(e){return new Tw}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vs.provider={build:()=>new Vs};class Qw extends Vs{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){me(this.persistence.referenceDelegate instanceof Cs,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ZI(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ue.withCacheSize(this.cacheSizeBytes):Ue.DEFAULT;return new dh(r=>Cs.mi(r,t),this.serializer)}}class io{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>hc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gw.bind(null,this.syncEngine),await Uw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new xw}()}createDatastore(e){const t=Gs(e.databaseInfo.databaseId),r=function(o){return new Pw(o)}(e.databaseInfo);return function(o,a,c,h){return new Cw(o,a,c,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,o,a,c){return new Nw(r,s,o,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>hc(this.syncEngine,t,0),function(){return ic.v()?new ic:new Iw}())}createSyncEngine(e,t){return function(s,o,a,c,h,d,m){const g=new Hw(s,o,a,c,h,d);return m&&(g.gu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const o=ce(s);x(Pr,"RemoteStore shutting down."),o.Ea.add(5),await Sr(o),o.Aa.shutdown(),o.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}io.provider={build:()=>new io};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="FirestoreClient";class Jw{constructor(e,t,r,s,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ve.UNAUTHENTICATED,this.clientId=Ro.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{x(Ut,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(x(Ut,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=yh(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ni(n,e){n.asyncQueue.verifyOperationInProgress(),x(Ut,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await fh(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function dc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Xw(n);x(Ut,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>ac(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>ac(e.remoteStore,s)),n._onlineComponents=e}async function Xw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x(Ut,"Using user provided OfflineComponentProvider");try{await Ni(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Hs("Error using user provided cache. Falling back to memory cache: "+t),await Ni(n,new Vs)}}else x(Ut,"Using default OfflineComponentProvider"),await Ni(n,new Qw(void 0));return n._offlineComponents}async function Yw(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x(Ut,"Using user provided OnlineComponentProvider"),await dc(n,n._uninitializedComponentsProvider._online)):(x(Ut,"Using default OnlineComponentProvider"),await dc(n,new io))),n._onlineComponents}function Zw(n){return Yw(n).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh="firestore.googleapis.com",pc=!0;class mc{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new z(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=wh,this.ssl=pc}else this.host=e.host,this.ssl=e.ssl??pc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=hh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<XI)throw new z(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}UT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ih(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Go{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new kT;switch(r.type){case"firstParty":return new NT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=fc.get(t);r&&(x("ComponentProvider","Removing Datastore"),fc.delete(t),r.terminate())}(this),Promise.resolve()}}function eA(n,e,t,r={}){var d;n=Qi(n,Go);const s=Sn(e),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(Fc(`https://${c}`),Uc("Firestore",!0)),o.host!==wh&&o.host!==c&&Hs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:c,ssl:s,emulatorOptions:r};if(!Jt(h,a)&&(n._setSettings(h),r.mockUserToken)){let m,g;if(typeof r.mockUserToken=="string")m=r.mockUserToken,g=Ve.MOCK_USER;else{m=M_(r.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new z(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Ve(E)}n._authCredentials=new RT(new Du(m,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ko(this.firestore,e,this._query)}}class De{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new De(this.firestore,e,this._key)}toJSON(){return{type:De._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(wr(t,De._jsonSchema))return new De(e,r||null,new X(ge.fromString(t.referencePath)))}}De._jsonSchemaVersion="firestore/documentReference/1.0",De._jsonSchema={type:ve("string",De._jsonSchemaVersion),referencePath:ve("string")};class pr extends Ko{constructor(e,t,r){super(e,t,dI(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new De(this.firestore,null,new X(e))}withConverter(e){return new pr(this.firestore,e,this._path)}}function tA(n,e,...t){if(n=je(n),arguments.length===1&&(e=Ro.newId()),FT("doc","path",e),n instanceof Go){const r=ge.fromString(e,...t);return $l(r),new De(n,null,new X(r))}{if(!(n instanceof De||n instanceof pr))throw new z(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ge.fromString(e,...t));return $l(r),new De(n.firestore,n instanceof pr?n.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc="AsyncQueue";class _c{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ph(this,"async_queue_retry"),this._c=()=>{const r=Vi();r&&x(gc,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Vi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Vi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Gt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ar(e))throw e;x(gc,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,tn("INTERNAL UNHANDLED ERROR: ",vc(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Wo.createAndSchedule(this,e,t,r,o=>this.hc(o));return this.tc.push(s),s}uc(){this.nc&&Y(47125,{Pc:vc(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function vc(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Ah extends Go{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new _c,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _c(e),this._firestoreClient=void 0,await e}}}function nA(n,e){const t=typeof n=="object"?n:Hc(),r=typeof n=="string"?n:As,s=vo(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=L_("firestore");o&&eA(s,...o)}return s}function rA(n){if(n._terminated)throw new z(L.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||sA(n),n._firestoreClient}function sA(n){var r,s,o;const e=n._freezeSettings(),t=function(c,h,d,m){return new XT(c,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Ih(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Jw(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qe(it.fromBase64String(e))}catch(t){throw new z(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Qe(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Qe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(wr(e,Qe._jsonSchema))return Qe.fromBase64String(e.bytes)}}Qe._jsonSchemaVersion="firestore/bytes/1.0",Qe._jsonSchema={type:ve("string",Qe._jsonSchemaVersion),bytes:ve("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new z(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new z(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new z(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:pt._jsonSchemaVersion}}static fromJSON(e){if(wr(e,pt._jsonSchema))return new pt(e.latitude,e.longitude)}}pt._jsonSchemaVersion="firestore/geoPoint/1.0",pt._jsonSchema={type:ve("string",pt._jsonSchemaVersion),latitude:ve("number"),longitude:ve("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:mt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(wr(e,mt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new mt(e.vectorValues);throw new z(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}mt._jsonSchemaVersion="firestore/vectorValue/1.0",mt._jsonSchema={type:ve("string",mt._jsonSchemaVersion),vectorValues:ve("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA=/^__.*__$/;class oA{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new an(e,this.data,this.fieldMask,t,this.fieldTransforms):new br(e,this.data,t,this.fieldTransforms)}}function bh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{Ac:n})}}class Xo{constructor(e,t,r,s,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Xo({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ns(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(bh(this.Ac)&&iA.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class aA{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Gs(e)}Cc(e,t,r,s=!1){return new Xo({Ac:e,methodName:t,Dc:r,path:Ae.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lA(n){const e=n._freezeSettings(),t=Gs(n._databaseId);return new aA(n._databaseId,!!e.ignoreUndefinedProperties,t)}function cA(n,e,t,r,s,o={}){const a=n.Cc(o.merge||o.mergeFields?2:0,e,t,s);Rh("Data must be an object, but it was:",a,r);const c=Sh(r,a);let h,d;if(o.merge)h=new Xe(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const g of o.mergeFields){const E=uA(e,g,t);if(!a.contains(E))throw new z(L.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);dA(m,E)||m.push(E)}h=new Xe(m),d=a.fieldTransforms.filter(g=>h.covers(g.field))}else h=null,d=a.fieldTransforms;return new oA(new Ke(c),h,d)}class Yo extends Jo{_toFieldTransform(e){return new bI(e.path,new hr)}isEqual(e){return e instanceof Yo}}function Ph(n,e){if(kh(n=je(n)))return Rh("Unsupported field value:",e,n),Sh(n,e);if(n instanceof Jo)return function(r,s){if(!bh(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const c of r){let h=Ph(c,s.wc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,s){if((r=je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return II(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=de.fromDate(r);return{timestampValue:to(s.serializer,o)}}if(r instanceof de){const o=new de(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:to(s.serializer,o)}}if(r instanceof pt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qe)return{bytesValue:MI(s.serializer,r._byteString)};if(r instanceof De){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ch(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof mt)return function(a,c){return{mapValue:{fields:{[Bu]:{stringValue:ju},[Ji]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw c.Sc("VectorValues must only contain numeric values.");return Bo(c.serializer,d)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Co(r)}`)}(n,e)}function Sh(n,e){const t={};return Mu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vn(n,(r,s)=>{const o=Ph(s,e.mc(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function kh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof de||n instanceof pt||n instanceof Qe||n instanceof De||n instanceof Jo||n instanceof mt)}function Rh(n,e,t){if(!kh(t)||!Lu(t)){const r=Co(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function uA(n,e,t){if((e=je(e))instanceof Qo)return e._internalPath;if(typeof e=="string")return Ch(n,e);throw Ns("Field path arguments must be of type string or ",n,!1,void 0,t)}const hA=new RegExp("[~\\*/\\[\\]]");function Ch(n,e,t){if(e.search(hA)>=0)throw Ns(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Qo(...e.split("."))._internalPath}catch{throw Ns(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ns(n,e,t,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new z(L.INVALID_ARGUMENT,c+n+h)}function dA(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,t,r,s,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new De(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Nh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class fA extends Vh{data(){return super.data()}}function Nh(n,e){return typeof e=="string"?Ch(n,e):e instanceof Qo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class es{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class En extends Vh{constructor(e,t,r,s,o,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new hs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Nh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=En._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}En._jsonSchemaVersion="firestore/documentSnapshot/1.0",En._jsonSchema={type:ve("string",En._jsonSchemaVersion),bundleSource:ve("string","DocumentSnapshot"),bundleName:ve("string"),bundle:ve("string")};class hs extends En{data(e={}){return super.data(e)}}class ir{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new es(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new hs(this._firestore,this._userDataWriter,r.key,r,new es(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new z(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const h=new hs(s._firestore,s._userDataWriter,c.doc.key,c.doc,new es(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new hs(s._firestore,s._userDataWriter,c.doc.key,c.doc,new es(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:mA(c.type),doc:h,oldIndex:d,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ir._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ro.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(t.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function mA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:n})}}ir._jsonSchemaVersion="firestore/querySnapshot/1.0",ir._jsonSchema={type:ve("string",ir._jsonSchemaVersion),bundleSource:ve("string","QuerySnapshot"),bundleName:ve("string"),bundle:ve("string")};function gA(n,e,t){n=Qi(n,De);const r=Qi(n.firestore,Ah),s=pA(n.converter,e);return _A(r,[cA(lA(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,ft.none())])}function _A(n,e){return function(r,s){const o=new Gt;return r.asyncQueue.enqueueAndForget(async()=>qw(await Zw(r),s,o)),o.promise}(rA(n),e)}function vA(){return new Yo("serverTimestamp")}(function(e,t=!0){(function(s){Cn=s})(kn),Tn(new Xt("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new Ah(new CT(r.getProvider("auth-internal")),new DT(a,r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new z(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bs(d.options.projectId,m)}(a,s),a);return o={useFetchStreams:t,...o},c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Ot(Dl,Ll,e),Ot(Dl,Ll,"esm2020")})();const yA={apiKey:"AIzaSyAXlYXYjKu1LEJ23myiGmVz2mZtt0CNtEY",authDomain:"ys-trading-coach.firebaseapp.com",projectId:"ys-trading-coach",storageBucket:"ys-trading-coach.firebasestorage.app",messagingSenderId:"253278058744",appId:"1:253278058744:web:72f58b7afefe4af4fde30d"},Dh=jc(yA),pn=PT(Dh),EA=nA(Dh),TA={class:"login-wrapper"},IA={key:0},wA={key:1},AA=["disabled"],bA={class:"form-switch"},PA={key:0,class:"reset-link"},SA={key:1,class:"error-msg"},kA={__name:"FirebaseLogin",setup(n){const e=Q(""),t=Q(""),r=Q(""),s=Q(!1),o=Q(!0),a=Q(null);Ze(()=>{gu(pn,g=>{a.value=g,g&&window.location.pathname==="/my-account"&&(window.location.href="/trading-with-price-action-volume")})});const c=async()=>{r.value="",s.value=!0;try{if(o.value){const E=(await dE(pn,e.value,t.value)).user;window.posthog&&(window.posthog.identify(E.uid,{email:E.email,login_method:"firebase"}),window.posthog.capture("user_logged_in",{method:"firebase"}))}else{const E=(await hE(pn,e.value,t.value)).user;await gA(tA(EA,"users",E.uid),{email:e.value,createdAt:vA()}),window.posthog&&(window.posthog.identify(E.uid,{email:E.email,login_method:"firebase"}),window.posthog.capture("user_registered",{method:"firebase"}))}}catch(g){r.value=g.message.replace("Firebase: ","")}finally{s.value=!1}},h=()=>{o.value=!o.value,r.value=""},d=async()=>{if(r.value="",!e.value){r.value="Enter your email to reset password";return}try{await uE(pn,e.value),r.value="Password reset email sent."}catch(g){r.value=g.message.replace("Firebase: ","")}},m=async()=>{window.posthog&&window.posthog.capture("user_logged_out"),await mE(pn),a.value=null};return(g,E)=>(y(),k("div",TA,[a.value?(y(),k("div",IA,[R("p",null,"👋 Welcome, "+te(a.value.email),1),R("button",{onClick:m},"Log out")])):(y(),k("div",wA,[R("form",{onSubmit:ts(c,["prevent"])},[R("h2",null,te(o.value?"Log In":"Register"),1),Oi(R("input",{"onUpdate:modelValue":E[0]||(E[0]=N=>e.value=N),type:"email",placeholder:"Email",required:""},null,512),[[Za,e.value]]),Oi(R("input",{"onUpdate:modelValue":E[1]||(E[1]=N=>t.value=N),type:"password",placeholder:"Password",required:""},null,512),[[Za,t.value]]),R("button",{type:"submit",disabled:s.value},te(s.value?"Please wait...":o.value?"Log In":"Register"),9,AA),R("p",bA,[R("a",{href:"#",onClick:ts(h,["prevent"])},te(o.value?"Don't have an account? Register":"Already have an account? Log In"),1)]),o.value?(y(),k("p",PA,[R("a",{href:"#",onClick:ts(d,["prevent"])},"Forgot password?")])):F("",!0),r.value?(y(),k("p",SA,te(r.value),1)):F("",!0)],32)]))]))}},Lh=H(kA,[["__scopeId","data-v-901d67c9"]]),RA={key:0,class:"loading"},CA={key:1},VA={key:2,class:"lock-screen"},NA={__name:"ProtectedPage",setup(n){const e=Q(null),t=Q(!0);return Ze(()=>{gu(pn,r=>{e.value=r,t.value=!1})}),(r,s)=>t.value?(y(),k("div",RA,"Loading...")):e.value?(y(),k("div",CA,[C(r.$slots,"default",{},void 0,!0)])):(y(),k("div",VA,[s[0]||(s[0]=R("h2",null,"🔐 Content is for registered users only.",-1)),s[1]||(s[1]=R("p",null,"Please log in or register (FREE) to access this article.",-1)),j(Lh)]))}},DA=H(NA,[["__scopeId","data-v-c301e23a"]]),LA={key:0,class:"gc-loading"},OA={key:1,class:"gc-fallback"},MA={__name:"GraphComment",setup(n){const e=Q(null),t=Q(!1),r=Q(!1),s=mr();function o(){e.value&&(e.value.innerHTML="");const a={graphcommentId:"vitepresssk",behaviour:{uid:window.location.pathname}};if(typeof window.__semio__gc_graphlogin=="function")window.__semio__gc_graphlogin(a),t.value=!0;else if(window.__semio__params=a,window.__semio__onload=()=>{typeof window.__semio__gc_graphlogin=="function"&&(window.__semio__gc_graphlogin(a),t.value=!0)},!document.getElementById("graphcomment-script")){const c=document.createElement("script");c.id="graphcomment-script",c.async=!0,c.defer=!0,c.onload=window.__semio__onload,c.src="https://integration.graphcomment.com/gc_graphlogin.js?"+Date.now(),document.body.appendChild(c)}setTimeout(()=>{document.querySelector("#graphcomment iframe, #graphcomment .gc__header")||(r.value=!0)},5e3)}return Ze(o),st(()=>s.path,()=>{t.value=!1,r.value=!1,o()}),(a,c)=>(y(),k("div",null,[!t.value&&!r.value?(y(),k("div",LA," Loading comments... ")):F("",!0),r.value?(y(),k("div",OA," Comments couldn't load. You may be using an ad blocker or tracker blocker. ")):F("",!0),Oi(R("div",{id:"graphcomment",ref_key:"gcContainer",ref:e},null,512),[[Rd,t.value]])]))}},$A=H(MA,[["__scopeId","data-v-78f9e9f3"]]),BA={extends:tl,Layout:()=>Cd(tl.Layout),enhanceApp({app:n,router:e,siteData:t}){n.component("FirebaseLogin",Lh),n.component("ProtectedPage",DA),n.component("GraphComment",$A)}};if(typeof window<"u"){const n=navigator.userAgent.toLowerCase();(n.includes("chrome")||n.includes("firefox")||n.includes("safari"))&&document.documentElement.classList.add("rainbow")}export{BA as R,UA as V,Gm as c,Z as u};
