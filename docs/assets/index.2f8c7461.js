const Re=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};Re();function w(){}const ee=e=>e;function be(e){return e()}function ue(){return Object.create(null)}function L(e){e.forEach(be)}function te(e){return typeof e=="function"}function ne(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let z;function fe(e,t){return z||(z=document.createElement("a")),z.href=t,e===z.href}function Ae(e){return Object.keys(e).length===0}function Ce(e,...t){if(e==null)return w;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Me(e,t,n){e.$$.on_destroy.push(Ce(t,n))}function Pe(e,t,n){return e.set(n),t}const ve=typeof window!="undefined";let we=ve?()=>window.performance.now():()=>Date.now(),ie=ve?e=>requestAnimationFrame(e):w;const O=new Set;function ke(e){O.forEach(t=>{t.c(e)||(O.delete(t),t.f())}),O.size!==0&&ie(ke)}function $e(e){let t;return O.size===0&&ie(ke),{promise:new Promise(n=>{O.add(t={c:e,f:n})}),abort(){O.delete(t)}}}function y(e,t){e.appendChild(t)}function Ee(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Je(e){const t=v("style");return ze(Ee(e),t),t.sheet}function ze(e,t){y(e.head||e,t)}function j(e,t,n){e.insertBefore(t,n||null)}function N(e){e.parentNode.removeChild(e)}function Be(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function v(e){return document.createElement(e)}function re(e){return document.createTextNode(e)}function J(){return re(" ")}function Fe(){return re("")}function M(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function g(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function He(e){return Array.from(e.childNodes)}function Ie(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function B(e,t){e.value=t==null?"":t}function Ue(e,t,n,i){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function qe(e,t,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n,!1,t),i}const q=new Map;let D=0;function De(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function We(e,t){const n={stylesheet:Je(t),rules:{}};return q.set(e,n),n}function xe(e,t,n,i,r,o,u,c=0){const s=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=s){const x=t+(n-t)*o(m);l+=m*100+`%{${u(x,1-x)}}
`}const d=l+`100% {${u(n,1-n)}}
}`,p=`__svelte_${De(d)}_${c}`,f=Ee(e),{stylesheet:h,rules:a}=q.get(f)||We(f,e);a[p]||(a[p]=!0,h.insertRule(`@keyframes ${p} ${d}`,h.cssRules.length));const _=e.style.animation||"";return e.style.animation=`${_?`${_}, `:""}${p} ${i}ms linear ${r}ms 1 both`,D+=1,p}function Z(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?o=>o.indexOf(t)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(e.style.animation=i.join(", "),D-=r,D||Qe())}function Qe(){ie(()=>{D||(q.forEach(e=>{const{stylesheet:t}=e;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.rules={}}),q.clear())})}let se;function P(e){se=e}const C=[],ae=[],H=[],de=[],Ve=Promise.resolve();let T=!1;function Ge(){T||(T=!0,Ve.then(Ne))}function E(e){H.push(e)}const Y=new Set;let F=0;function Ne(){const e=se;do{for(;F<C.length;){const t=C[F];F++,P(t),Ye(t.$$)}for(P(null),C.length=0,F=0;ae.length;)ae.pop()();for(let t=0;t<H.length;t+=1){const n=H[t];Y.has(n)||(Y.add(n),n())}H.length=0}while(C.length);for(;de.length;)de.pop()();T=!1,Y.clear(),P(e)}function Ye(e){if(e.fragment!==null){e.update(),L(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(E)}}let A;function Le(){return A||(A=Promise.resolve(),A.then(()=>{A=null})),A}function W(e,t,n){e.dispatchEvent(qe(`${t?"intro":"outro"}${n}`))}const I=new Set;let k;function Q(){k={r:0,c:[],p:k}}function V(){k.r||L(k.c),k=k.p}function b(e,t){e&&e.i&&(I.delete(e),e.i(t))}function $(e,t,n,i){if(e&&e.o){if(I.has(e))return;I.add(e),k.c.push(()=>{I.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}}const Se={duration:0};function oe(e,t,n){let i=t(e,n),r=!1,o,u,c=0;function s(){o&&Z(e,o)}function l(){const{delay:p=0,duration:f=300,easing:h=ee,tick:a=w,css:_}=i||Se;_&&(o=xe(e,0,1,f,p,h,_,c++)),a(0,1);const m=we()+p,x=m+f;u&&u.abort(),r=!0,E(()=>W(e,!0,"start")),u=$e(G=>{if(r){if(G>=x)return a(1,0),W(e,!0,"end"),s(),r=!1;if(G>=m){const ce=h((G-m)/f);a(ce,1-ce)}}return r})}let d=!1;return{start(){d||(d=!0,Z(e),te(i)?(i=i(),Le().then(l)):l())},invalidate(){d=!1},end(){r&&(s(),r=!1)}}}function le(e,t,n){let i=t(e,n),r=!0,o;const u=k;u.r+=1;function c(){const{delay:s=0,duration:l=300,easing:d=ee,tick:p=w,css:f}=i||Se;f&&(o=xe(e,1,0,l,s,d,f));const h=we()+s,a=h+l;E(()=>W(e,!1,"start")),$e(_=>{if(r){if(_>=a)return p(0,1),W(e,!1,"end"),--u.r||L(u.c),!1;if(_>=h){const m=d((_-h)/l);p(1-m,m)}}return r})}return te(i)?Le().then(()=>{i=i(),c()}):c(),{end(s){s&&i.tick&&i.tick(1,0),r&&(o&&Z(e,o),r=!1)}}}function pe(e){e&&e.c()}function X(e,t,n,i){const{fragment:r,on_mount:o,on_destroy:u,after_update:c}=e.$$;r&&r.m(t,n),i||E(()=>{const s=o.map(be).filter(te);u?u.push(...s):L(s),e.$$.on_mount=[]}),c.forEach(E)}function K(e,t){const n=e.$$;n.fragment!==null&&(L(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ze(e,t){e.$$.dirty[0]===-1&&(C.push(e),Ge(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Oe(e,t,n,i,r,o,u,c=[-1]){const s=se;P(e);const l=e.$$={fragment:null,ctx:null,props:o,update:w,not_equal:r,bound:ue(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:ue(),dirty:c,skip_bound:!1,root:t.target||s.$$.root};u&&u(l.root);let d=!1;if(l.ctx=n?n(e,t.props||{},(p,f,...h)=>{const a=h.length?h[0]:f;return l.ctx&&r(l.ctx[p],l.ctx[p]=a)&&(!l.skip_bound&&l.bound[p]&&l.bound[p](a),d&&Ze(e,p)),f}):[],l.update(),d=!0,L(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){const p=He(t.target);l.fragment&&l.fragment.l(p),p.forEach(N)}else l.fragment&&l.fragment.c();t.intro&&b(e.$$.fragment),X(e,t.target,t.anchor,t.customElement),Ne()}P(s)}class je{$destroy(){K(this,1),this.$destroy=w}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!Ae(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const S=[];function Te(e,t=w){let n;const i=new Set;function r(c){if(ne(e,c)&&(e=c,n)){const s=!S.length;for(const l of i)l[1](),S.push(l,e);if(s){for(let l=0;l<S.length;l+=2)S[l][0](S[l+1]);S.length=0}}}function o(c){r(c(e))}function u(c,s=w){const l=[c,s];return i.add(l),i.size===1&&(n=t(r)||w),c(e),()=>{i.delete(l),i.size===0&&(n(),n=null)}}return{set:r,update:o,subscribe:u}}let U=Te(JSON.parse(localStorage.getItem("link_store"))||[{link:"http://www.youtube.com/",src:"https://imgs.search.brave.com/fx_jWgOxhgaeHV6M86OnqgVM0MG_iusDDEXrtSstecg/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5s/S1o3eGxMaXhHb2Zr/cFNyVVdYYlBnSGFI/YSZwaWQ9QXBp"},{link:"https://github.com/tasmankingsley",src:"https://imgs.search.brave.com/4EEUAkhTWot3uz4922e4wNEJhRSDkDacv7AC05BQb4k/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5I/NzhlNjJJZ09LSHFM/bUlEYlRONGlnSGFI/YSZwaWQ9QXBp"},{link:"https://tasmankingsley.github.io/",src:"https://tasmankingsley.github.io/images/spotify-profile.jpg"},{link:"https://mail.protonmail.com/u/0/inbox",src:"https://play-lh.googleusercontent.com/99IPL5W1HvN1TM7awcJ2gihUie-LQ5Ae7W9g0FgCBFJ8hNZnFIOJElyBPNcx4Wcx7A"}]);U.subscribe(e=>localStorage.link_store=JSON.stringify(e));function R(e,{delay:t=0,duration:n=400,easing:i=ee}={}){const r=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:i,css:o=>`opacity: ${o*r}`}}function Xe(e){let t,n,i,r,o,u,c;return{c(){t=v("div"),n=v("a"),i=v("img"),g(i,"class","icon svelte-1dj97gt"),fe(i.src,r=e[1])||g(i,"src",r),g(i,"alt",""),g(n,"href",e[0]),g(t,"class","icon-div svelte-1dj97gt")},m(s,l){j(s,t,l),y(t,n),y(n,i),c=!0},p(s,[l]){(!c||l&2&&!fe(i.src,r=s[1]))&&g(i,"src",r),(!c||l&1)&&g(n,"href",s[0])},i(s){c||(E(()=>{u&&u.end(1),o=oe(t,R,{}),o.start()}),c=!0)},o(s){o&&o.invalidate(),u=le(t,R,{}),c=!1},d(s){s&&N(t),s&&u&&u.end()}}}function Ke(e,t,n){let{web_link:i}=t,{icon_src:r}=t;return e.$$set=o=>{"web_link"in o&&n(0,i=o.web_link),"icon_src"in o&&n(1,r=o.icon_src)},[i,r]}class me extends je{constructor(t){super(),Oe(this,t,Ke,Xe,ne,{web_link:0,icon_src:1})}}function _e(e,t,n){const i=e.slice();return i[11]=t[n],i[13]=n,i}function he(e){let t,n,i,r,o,u,c,s,l,d,p;return{c(){t=v("div"),n=v("input"),i=J(),r=v("input"),o=J(),u=v("button"),u.textContent="add link",g(n,"type","text"),g(n,"placeholder","paste link"),g(r,"type","text"),g(r,"placeholder","paste icon link"),g(u,"class","svelte-1wmio0a"),Ue(t,"padding","20px")},m(f,h){j(f,t,h),y(t,n),B(n,e[0]),y(t,i),y(t,r),B(r,e[1]),y(t,o),y(t,u),l=!0,d||(p=[M(n,"input",e[8]),M(r,"input",e[9]),M(u,"click",e[5])],d=!0)},p(f,h){h&1&&n.value!==f[0]&&B(n,f[0]),h&2&&r.value!==f[1]&&B(r,f[1])},i(f){l||(E(()=>{s&&s.end(1),c=oe(t,R,{}),c.start()}),l=!0)},o(f){c&&c.invalidate(),s=le(t,R,{}),l=!1},d(f){f&&N(t),f&&s&&s.end(),d=!1,L(p)}}}function ge(e){let t,n,i,r,o,u;function c(){return e[10](e[13])}return{c(){t=v("span"),t.textContent="\u24E7",g(t,"class","svelte-1wmio0a")},m(s,l){j(s,t,l),r=!0,o||(u=M(t,"click",c),o=!0)},p(s,l){e=s},i(s){r||(E(()=>{i&&i.end(1),n=oe(t,R,{}),n.start()}),r=!0)},o(s){n&&n.invalidate(),i=le(t,R,{}),r=!1},d(s){s&&N(t),s&&i&&i.end(),o=!1,u()}}}function ye(e){let t,n,i,r;var o=me;function u(s){return{props:{web_link:s[11].link,icon_src:s[11].src}}}o&&(t=new o(u(e)));let c=e[2]&&ge(e);return{c(){t&&pe(t.$$.fragment),n=J(),c&&c.c(),i=Fe()},m(s,l){t&&X(t,s,l),j(s,n,l),c&&c.m(s,l),j(s,i,l),r=!0},p(s,l){const d={};if(l&16&&(d.web_link=s[11].link),l&16&&(d.icon_src=s[11].src),o!==(o=me)){if(t){Q();const p=t;$(p.$$.fragment,1,0,()=>{K(p,1)}),V()}o?(t=new o(u(s)),pe(t.$$.fragment),b(t.$$.fragment,1),X(t,n.parentNode,n)):t=null}else o&&t.$set(d);s[2]?c?(c.p(s,l),l&4&&b(c,1)):(c=ge(s),c.c(),b(c,1),c.m(i.parentNode,i)):c&&(Q(),$(c,1,1,()=>{c=null}),V())},i(s){r||(t&&b(t.$$.fragment,s),b(c),r=!0)},o(s){t&&$(t.$$.fragment,s),$(c),r=!1},d(s){t&&K(t,s),s&&N(n),c&&c.d(s),s&&N(i)}}}function et(e){let t,n,i,r,o,u,c,s,l,d=e[2]&&he(e),p=e[4],f=[];for(let a=0;a<p.length;a+=1)f[a]=ye(_e(e,p,a));const h=a=>$(f[a],1,1,()=>{f[a]=null});return{c(){t=v("main"),n=v("span"),i=re(e[3]),r=J(),d&&d.c(),o=J(),u=v("div");for(let a=0;a<f.length;a+=1)f[a].c();g(n,"class","edit svelte-1wmio0a"),g(u,"class","comp_div svelte-1wmio0a"),g(t,"class","svelte-1wmio0a")},m(a,_){j(a,t,_),y(t,n),y(n,i),y(t,r),d&&d.m(t,null),y(t,o),y(t,u);for(let m=0;m<f.length;m+=1)f[m].m(u,null);c=!0,s||(l=M(n,"click",e[7]),s=!0)},p(a,[_]){if((!c||_&8)&&Ie(i,a[3]),a[2]?d?(d.p(a,_),_&4&&b(d,1)):(d=he(a),d.c(),b(d,1),d.m(t,o)):d&&(Q(),$(d,1,1,()=>{d=null}),V()),_&84){p=a[4];let m;for(m=0;m<p.length;m+=1){const x=_e(a,p,m);f[m]?(f[m].p(x,_),b(f[m],1)):(f[m]=ye(x),f[m].c(),b(f[m],1),f[m].m(u,null))}for(Q(),m=p.length;m<f.length;m+=1)h(m);V()}},i(a){if(!c){b(d);for(let _=0;_<p.length;_+=1)b(f[_]);c=!0}},o(a){$(d),f=f.filter(Boolean);for(let _=0;_<f.length;_+=1)$(f[_]);c=!1},d(a){a&&N(t),d&&d.d(),Be(f,a),s=!1,l()}}}function tt(e,t,n){let i;Me(e,U,a=>n(4,i=a));let r="",o="",u=!1,c="\uFF0B";function s(){Pe(U,i=[...i,{link:r,src:o}],i),n(0,r=""),n(1,o="")}function l(a){i.splice(a,1),U.set(i)}function d(){n(2,u=!u),u===!0?n(3,c="\uFF0D"):n(3,c="\uFF0B")}function p(){r=this.value,n(0,r)}function f(){o=this.value,n(1,o)}return[r,o,u,c,i,s,l,d,p,f,a=>l(a)]}class nt extends je{constructor(t){super(),Oe(this,t,tt,et,ne,{})}}new nt({target:document.getElementById("app")});
