const Ae=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};Ae();function w(){}const te=e=>e;function ge(e){return e()}function le(){return Object.create(null)}function L(e){e.forEach(ge)}function ne(e){return typeof e=="function"}function ie(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let B;function ce(e,t){return B||(B=document.createElement("a")),B.href=t,e===B.href}function Me(e){return Object.keys(e).length===0}function Pe(e,...t){if(e==null)return w;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Je(e,t,n){e.$$.on_destroy.push(Pe(t,n))}function je(e,t,n){return e.set(n),t}const ve=typeof window!="undefined";let ye=ve?()=>window.performance.now():()=>Date.now(),re=ve?e=>requestAnimationFrame(e):w;const C=new Set;function be(e){C.forEach(t=>{t.c(e)||(C.delete(t),t.f())}),C.size!==0&&re(be)}function ke(e){let t;return C.size===0&&re(be),{promise:new Promise(n=>{C.add(t={c:e,f:n})}),abort(){C.delete(t)}}}function b(e,t){e.appendChild(t)}function we(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function ze(e){const t=y("style");return Be(we(e),t),t.sheet}function Be(e,t){b(e.head||e,t)}function E(e,t,n){e.insertBefore(t,n||null)}function $(e){e.parentNode.removeChild(e)}function Fe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function $e(e){return document.createTextNode(e)}function R(){return $e(" ")}function P(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function g(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function He(e){return Array.from(e.childNodes)}function Ie(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function F(e,t){e.value=t==null?"":t}function J(e,t,n,i){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function Ue(e,t,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n,!1,t),i}const D=new Map;let W=0;function qe(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function De(e,t){const n={stylesheet:ze(t),rules:{}};return D.set(e,n),n}function xe(e,t,n,i,r,o,u,c=0){const f=16.666/i;let s=`{
`;for(let _=0;_<=1;_+=f){const h=t+(n-t)*o(_);s+=_*100+`%{${u(h,1-h)}}
`}const a=s+`100% {${u(n,1-n)}}
}`,l=`__svelte_${qe(a)}_${c}`,p=we(e),{stylesheet:d,rules:v}=D.get(p)||De(p,e);v[l]||(v[l]=!0,d.insertRule(`@keyframes ${l} ${a}`,d.cssRules.length));const m=e.style.animation||"";return e.style.animation=`${m?`${m}, `:""}${l} ${i}ms linear ${r}ms 1 both`,W+=1,l}function Z(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?o=>o.indexOf(t)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(e.style.animation=i.join(", "),W-=r,W||We())}function We(){re(()=>{W||(D.forEach(e=>{const{stylesheet:t}=e;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.rules={}}),D.clear())})}let se;function j(e){se=e}const M=[],ue=[],I=[],fe=[],Qe=Promise.resolve();let T=!1;function Ve(){T||(T=!0,Qe.then(Ee))}function x(e){I.push(e)}const G=new Set;let H=0;function Ee(){const e=se;do{for(;H<M.length;){const t=M[H];H++,j(t),Ge(t.$$)}for(j(null),M.length=0,H=0;ue.length;)ue.pop()();for(let t=0;t<I.length;t+=1){const n=I[t];G.has(n)||(G.add(n),n())}I.length=0}while(M.length);for(;fe.length;)fe.pop()();T=!1,G.clear(),j(e)}function Ge(e){if(e.fragment!==null){e.update(),L(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(x)}}let A;function Se(){return A||(A=Promise.resolve(),A.then(()=>{A=null})),A}function Q(e,t,n){e.dispatchEvent(Ue(`${t?"intro":"outro"}${n}`))}const U=new Set;let S;function Le(){S={r:0,c:[],p:S}}function Ne(){S.r||L(S.c),S=S.p}function k(e,t){e&&e.i&&(U.delete(e),e.i(t))}function V(e,t,n,i){if(e&&e.o){if(U.has(e))return;U.add(e),S.c.push(()=>{U.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}}const Oe={duration:0};function z(e,t,n){let i=t(e,n),r=!1,o,u,c=0;function f(){o&&Z(e,o)}function s(){const{delay:l=0,duration:p=300,easing:d=te,tick:v=w,css:m}=i||Oe;m&&(o=xe(e,0,1,p,l,d,m,c++)),v(0,1);const _=ye()+l,h=_+p;u&&u.abort(),r=!0,x(()=>Q(e,!0,"start")),u=ke(N=>{if(r){if(N>=h)return v(1,0),Q(e,!0,"end"),f(),r=!1;if(N>=_){const oe=d((N-_)/p);v(oe,1-oe)}}return r})}let a=!1;return{start(){a||(a=!0,Z(e),ne(i)?(i=i(),Se().then(s)):s())},invalidate(){a=!1},end(){r&&(f(),r=!1)}}}function Ye(e,t,n){let i=t(e,n),r=!0,o;const u=S;u.r+=1;function c(){const{delay:f=0,duration:s=300,easing:a=te,tick:l=w,css:p}=i||Oe;p&&(o=xe(e,1,0,s,f,a,p));const d=ye()+f,v=d+s;x(()=>Q(e,!1,"start")),ke(m=>{if(r){if(m>=v)return l(0,1),Q(e,!1,"end"),--u.r||L(u.c),!1;if(m>=d){const _=a((m-d)/s);l(1-_,_)}}return r})}return ne(i)?Se().then(()=>{i=i(),c()}):c(),{end(f){f&&i.tick&&i.tick(1,0),r&&(o&&Z(e,o),r=!1)}}}function ae(e){e&&e.c()}function X(e,t,n,i){const{fragment:r,on_mount:o,on_destroy:u,after_update:c}=e.$$;r&&r.m(t,n),i||x(()=>{const f=o.map(ge).filter(ne);u?u.push(...f):L(f),e.$$.on_mount=[]}),c.forEach(x)}function K(e,t){const n=e.$$;n.fragment!==null&&(L(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ze(e,t){e.$$.dirty[0]===-1&&(M.push(e),Ve(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ce(e,t,n,i,r,o,u,c=[-1]){const f=se;j(e);const s=e.$$={fragment:null,ctx:null,props:o,update:w,not_equal:r,bound:le(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:le(),dirty:c,skip_bound:!1,root:t.target||f.$$.root};u&&u(s.root);let a=!1;if(s.ctx=n?n(e,t.props||{},(l,p,...d)=>{const v=d.length?d[0]:p;return s.ctx&&r(s.ctx[l],s.ctx[l]=v)&&(!s.skip_bound&&s.bound[l]&&s.bound[l](v),a&&Ze(e,l)),p}):[],s.update(),a=!0,L(s.before_update),s.fragment=i?i(s.ctx):!1,t.target){if(t.hydrate){const l=He(t.target);s.fragment&&s.fragment.l(l),l.forEach($)}else s.fragment&&s.fragment.c();t.intro&&k(e.$$.fragment),X(e,t.target,t.anchor,t.customElement),Ee()}j(f)}class Re{$destroy(){K(this,1),this.$destroy=w}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!Me(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const O=[];function Te(e,t=w){let n;const i=new Set;function r(c){if(ie(e,c)&&(e=c,n)){const f=!O.length;for(const s of i)s[1](),O.push(s,e);if(f){for(let s=0;s<O.length;s+=2)O[s][0](O[s+1]);O.length=0}}}function o(c){r(c(e))}function u(c,f=w){const s=[c,f];return i.add(s),i.size===1&&(n=t(r)||w),c(e),()=>{i.delete(s),i.size===0&&(n(),n=null)}}return{set:r,update:o,subscribe:u}}let q=Te(JSON.parse(localStorage.getItem("link_store"))||[{link:"http://www.youtube.com/",src:"https://imgs.search.brave.com/fx_jWgOxhgaeHV6M86OnqgVM0MG_iusDDEXrtSstecg/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5s/S1o3eGxMaXhHb2Zr/cFNyVVdYYlBnSGFI/YSZwaWQ9QXBp"},{link:"https://github.com/tasmankingsley",src:"https://imgs.search.brave.com/4EEUAkhTWot3uz4922e4wNEJhRSDkDacv7AC05BQb4k/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5I/NzhlNjJJZ09LSHFM/bUlEYlRONGlnSGFI/YSZwaWQ9QXBp"},{link:"https://tasmankingsley.github.io/",src:"https://tasmankingsley.github.io/images/spotify-profile.jpg"},{link:"https://mail.protonmail.com/u/0/inbox",src:"https://play-lh.googleusercontent.com/99IPL5W1HvN1TM7awcJ2gihUie-LQ5Ae7W9g0FgCBFJ8hNZnFIOJElyBPNcx4Wcx7A"}]);q.subscribe(e=>localStorage.link_store=JSON.stringify(e));function Xe(e){const t=e-1;return t*t*t+1}function ee(e,{delay:t=0,duration:n=400,easing:i=te}={}){const r=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:i,css:o=>`opacity: ${o*r}`}}function Y(e,{delay:t=0,duration:n=400,easing:i=Xe,x:r=0,y:o=0,opacity:u=0}={}){const c=getComputedStyle(e),f=+c.opacity,s=c.transform==="none"?"":c.transform,a=f*(1-u);return{delay:t,duration:n,easing:i,css:(l,p)=>`
			transform: ${s} translate(${(1-l)*r}px, ${(1-l)*o}px);
			opacity: ${f-a*p}`}}function Ke(e){let t,n,i,r,o,u,c;return{c(){t=y("div"),n=y("a"),i=y("img"),g(i,"class","icon svelte-n9vrh2"),ce(i.src,r=e[1])||g(i,"src",r),g(i,"alt",""),g(n,"href",e[0]),g(t,"class","icon-div svelte-n9vrh2")},m(f,s){E(f,t,s),b(t,n),b(n,i),c=!0},p(f,[s]){(!c||s&2&&!ce(i.src,r=f[1]))&&g(i,"src",r),(!c||s&1)&&g(n,"href",f[0])},i(f){c||(x(()=>{u&&u.end(1),o=z(t,ee,{}),o.start()}),c=!0)},o(f){o&&o.invalidate(),u=Ye(t,ee,{}),c=!1},d(f){f&&$(t),f&&u&&u.end()}}}function et(e,t,n){let{web_link:i}=t,{icon_src:r}=t;return e.$$set=o=>{"web_link"in o&&n(0,i=o.web_link),"icon_src"in o&&n(1,r=o.icon_src)},[i,r]}class de extends Re{constructor(t){super(),Ce(this,t,et,Ke,ie,{web_link:0,icon_src:1})}}function pe(e,t,n){const i=e.slice();return i[11]=t[n],i[13]=n,i}function me(e){let t,n,i,r,o,u,c,f,s,a;return{c(){t=y("input"),i=R(),r=y("input"),u=R(),c=y("button"),c.textContent="add link",g(t,"class","input"),g(t,"type","text"),g(t,"placeholder","paste link"),g(r,"class","input"),g(r,"type","text"),g(r,"placeholder","paste icon link"),g(c,"class","button svelte-cd29v9")},m(l,p){E(l,t,p),F(t,e[0]),E(l,i,p),E(l,r,p),F(r,e[1]),E(l,u,p),E(l,c,p),s||(a=[P(t,"input",e[8]),P(r,"input",e[9]),P(c,"click",e[5])],s=!0)},p(l,p){p&1&&t.value!==l[0]&&F(t,l[0]),p&2&&r.value!==l[1]&&F(r,l[1])},i(l){n||x(()=>{n=z(t,Y,{x:-400,duration:400}),n.start()}),o||x(()=>{o=z(r,Y,{x:-400,duration:400}),o.start()}),f||x(()=>{f=z(c,Y,{x:400,duration:400}),f.start()})},o:w,d(l){l&&$(t),l&&$(i),l&&$(r),l&&$(u),l&&$(c),s=!1,L(a)}}}function _e(e){let t,n,i,r;function o(){return e[10](e[13])}return{c(){t=y("div"),t.textContent="\u24E7",g(t,"class","rm_div svelte-cd29v9")},m(u,c){E(u,t,c),i||(r=P(t,"click",o),i=!0)},p(u,c){e=u},i(u){n||x(()=>{n=z(t,ee,{}),n.start()})},o:w,d(u){u&&$(t),i=!1,r()}}}function he(e){let t,n,i,r,o,u;var c=de;function f(a){return{props:{web_link:a[11].link,icon_src:a[11].src}}}c&&(i=new c(f(e)));let s=e[2]&&_e(e);return{c(){t=y("div"),n=y("div"),i&&ae(i.$$.fragment),r=R(),s&&s.c(),o=R(),J(n,"opacity",e[2]?.6:1),g(t,"class","inner_comp_div svelte-cd29v9"),J(t,"position","relative")},m(a,l){E(a,t,l),b(t,n),i&&X(i,n,null),b(t,r),s&&s.m(t,null),b(t,o),u=!0},p(a,l){const p={};if(l&16&&(p.web_link=a[11].link),l&16&&(p.icon_src=a[11].src),c!==(c=de)){if(i){Le();const d=i;V(d.$$.fragment,1,0,()=>{K(d,1)}),Ne()}c?(i=new c(f(a)),ae(i.$$.fragment),k(i.$$.fragment,1),X(i,n,null)):i=null}else c&&i.$set(p);(!u||l&4)&&J(n,"opacity",a[2]?.6:1),a[2]?s?(s.p(a,l),l&4&&k(s,1)):(s=_e(a),s.c(),k(s,1),s.m(t,o)):s&&(s.d(1),s=null)},i(a){u||(i&&k(i.$$.fragment,a),k(s),u=!0)},o(a){i&&V(i.$$.fragment,a),u=!1},d(a){a&&$(t),i&&K(i),s&&s.d()}}}function tt(e){let t,n,i,r,o,u,c,f,s,a,l=e[2]&&me(e),p=e[4],d=[];for(let m=0;m<p.length;m+=1)d[m]=he(pe(e,p,m));const v=m=>V(d[m],1,1,()=>{d[m]=null});return{c(){t=y("main"),n=y("span"),i=$e(e[3]),r=R(),o=y("div"),l&&l.c(),u=R(),c=y("div");for(let m=0;m<d.length;m+=1)d[m].c();g(n,"class","edit svelte-cd29v9"),g(o,"class","edit_div svelte-cd29v9"),J(o,"height",e[2]?"100px":"0px"),g(c,"class","comp_div svelte-cd29v9"),g(t,"class","svelte-cd29v9")},m(m,_){E(m,t,_),b(t,n),b(n,i),b(t,r),b(t,o),l&&l.m(o,null),b(t,u),b(t,c);for(let h=0;h<d.length;h+=1)d[h].m(c,null);f=!0,s||(a=P(n,"click",e[7]),s=!0)},p(m,[_]){if((!f||_&8)&&Ie(i,m[3]),m[2]?l?(l.p(m,_),_&4&&k(l,1)):(l=me(m),l.c(),k(l,1),l.m(o,null)):l&&(l.d(1),l=null),(!f||_&4)&&J(o,"height",m[2]?"100px":"0px"),_&84){p=m[4];let h;for(h=0;h<p.length;h+=1){const N=pe(m,p,h);d[h]?(d[h].p(N,_),k(d[h],1)):(d[h]=he(N),d[h].c(),k(d[h],1),d[h].m(c,null))}for(Le(),h=p.length;h<d.length;h+=1)v(h);Ne()}},i(m){if(!f){k(l);for(let _=0;_<p.length;_+=1)k(d[_]);f=!0}},o(m){d=d.filter(Boolean);for(let _=0;_<d.length;_+=1)V(d[_]);f=!1},d(m){m&&$(t),l&&l.d(),Fe(d,m),s=!1,a()}}}function nt(e,t,n){let i;Je(e,q,v=>n(4,i=v));let r="",o="",u=!1,c="\uFF0B";function f(){je(q,i=[...i,{link:r,src:o}],i),n(0,r=""),n(1,o="")}function s(v){i.splice(v,1),q.set(i)}function a(){n(2,u=!u),u===!0?n(3,c="\uFF0D"):n(3,c="\uFF0B")}function l(){r=this.value,n(0,r)}function p(){o=this.value,n(1,o)}return[r,o,u,c,i,f,s,a,l,p,v=>s(v)]}class it extends Re{constructor(t){super(),Ce(this,t,nt,tt,ie,{})}}new it({target:document.getElementById("app")});
