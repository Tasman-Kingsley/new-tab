const Re=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};Re();function w(){}const te=e=>e;function ge(e){return e()}function le(){return Object.create(null)}function L(e){e.forEach(ge)}function ne(e){return typeof e=="function"}function ie(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let U;function ce(e,t){return U||(U=document.createElement("a")),U.href=t,e===U.href}function Je(e){return Object.keys(e).length===0}function Ae(e,...t){if(e==null)return w;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Ce(e,t,n){e.$$.on_destroy.push(Ae(t,n))}function Pe(e,t,n){return e.set(n),t}const ye=typeof window!="undefined";let ve=ye?()=>window.performance.now():()=>Date.now(),re=ye?e=>requestAnimationFrame(e):w;const M=new Set;function be(e){M.forEach(t=>{t.c(e)||(M.delete(t),t.f())}),M.size!==0&&re(be)}function ke(e){let t;return M.size===0&&re(be),{promise:new Promise(n=>{M.add(t={c:e,f:n})}),abort(){M.delete(t)}}}function b(e,t){e.appendChild(t)}function we(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function ze(e){const t=v("style");return Ue(we(e),t),t.sheet}function Ue(e,t){b(e.head||e,t)}function j(e,t,n){e.insertBefore(t,n||null)}function $(e){e.parentNode.removeChild(e)}function Fe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function v(e){return document.createElement(e)}function $e(e){return document.createTextNode(e)}function O(){return $e(" ")}function A(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function g(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function He(e){return Array.from(e.childNodes)}function We(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function F(e,t){e.value=t==null?"":t}function C(e,t,n,i){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function Be(e,t,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n,!1,t),i}const Q=new Map;let q=0;function Ie(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Qe(e,t){const n={stylesheet:ze(t),rules:{}};return Q.set(e,n),n}function xe(e,t,n,i,r,o,u,c=0){const f=16.666/i;let s=`{
`;for(let _=0;_<=1;_+=f){const h=t+(n-t)*o(_);s+=_*100+`%{${u(h,1-h)}}
`}const a=s+`100% {${u(n,1-n)}}
}`,l=`__svelte_${Ie(a)}_${c}`,p=we(e),{stylesheet:d,rules:y}=Q.get(p)||Qe(p,e);y[l]||(y[l]=!0,d.insertRule(`@keyframes ${l} ${a}`,d.cssRules.length));const m=e.style.animation||"";return e.style.animation=`${m?`${m}, `:""}${l} ${i}ms linear ${r}ms 1 both`,q+=1,l}function G(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?o=>o.indexOf(t)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(e.style.animation=i.join(", "),q-=r,q||qe())}function qe(){re(()=>{q||(Q.forEach(e=>{const{stylesheet:t}=e;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.rules={}}),Q.clear())})}let se;function P(e){se=e}const J=[],ue=[],W=[],fe=[],De=Promise.resolve();let T=!1;function Ve(){T||(T=!0,De.then(je))}function x(e){W.push(e)}const X=new Set;let H=0;function je(){const e=se;do{for(;H<J.length;){const t=J[H];H++,P(t),Xe(t.$$)}for(P(null),J.length=0,H=0;ue.length;)ue.pop()();for(let t=0;t<W.length;t+=1){const n=W[t];X.has(n)||(X.add(n),n())}W.length=0}while(J.length);for(;fe.length;)fe.pop()();T=!1,X.clear(),P(e)}function Xe(e){if(e.fragment!==null){e.update(),L(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(x)}}let R;function Se(){return R||(R=Promise.resolve(),R.then(()=>{R=null})),R}function D(e,t,n){e.dispatchEvent(Be(`${t?"intro":"outro"}${n}`))}const B=new Set;let S;function Le(){S={r:0,c:[],p:S}}function Ee(){S.r||L(S.c),S=S.p}function k(e,t){e&&e.i&&(B.delete(e),e.i(t))}function V(e,t,n,i){if(e&&e.o){if(B.has(e))return;B.add(e),S.c.push(()=>{B.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}}const Ne={duration:0};function z(e,t,n){let i=t(e,n),r=!1,o,u,c=0;function f(){o&&G(e,o)}function s(){const{delay:l=0,duration:p=300,easing:d=te,tick:y=w,css:m}=i||Ne;m&&(o=xe(e,0,1,p,l,d,m,c++)),y(0,1);const _=ve()+l,h=_+p;u&&u.abort(),r=!0,x(()=>D(e,!0,"start")),u=ke(E=>{if(r){if(E>=h)return y(1,0),D(e,!0,"end"),f(),r=!1;if(E>=_){const oe=d((E-_)/p);y(oe,1-oe)}}return r})}let a=!1;return{start(){a||(a=!0,G(e),ne(i)?(i=i(),Se().then(s)):s())},invalidate(){a=!1},end(){r&&(f(),r=!1)}}}function Ze(e,t,n){let i=t(e,n),r=!0,o;const u=S;u.r+=1;function c(){const{delay:f=0,duration:s=300,easing:a=te,tick:l=w,css:p}=i||Ne;p&&(o=xe(e,1,0,s,f,a,p));const d=ve()+f,y=d+s;x(()=>D(e,!1,"start")),ke(m=>{if(r){if(m>=y)return l(0,1),D(e,!1,"end"),--u.r||L(u.c),!1;if(m>=d){const _=a((m-d)/s);l(1-_,_)}}return r})}return ne(i)?Se().then(()=>{i=i(),c()}):c(),{end(f){f&&i.tick&&i.tick(1,0),r&&(o&&G(e,o),r=!1)}}}function ae(e){e&&e.c()}function Y(e,t,n,i){const{fragment:r,on_mount:o,on_destroy:u,after_update:c}=e.$$;r&&r.m(t,n),i||x(()=>{const f=o.map(ge).filter(ne);u?u.push(...f):L(f),e.$$.on_mount=[]}),c.forEach(x)}function K(e,t){const n=e.$$;n.fragment!==null&&(L(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ge(e,t){e.$$.dirty[0]===-1&&(J.push(e),Ve(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Me(e,t,n,i,r,o,u,c=[-1]){const f=se;P(e);const s=e.$$={fragment:null,ctx:null,props:o,update:w,not_equal:r,bound:le(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:le(),dirty:c,skip_bound:!1,root:t.target||f.$$.root};u&&u(s.root);let a=!1;if(s.ctx=n?n(e,t.props||{},(l,p,...d)=>{const y=d.length?d[0]:p;return s.ctx&&r(s.ctx[l],s.ctx[l]=y)&&(!s.skip_bound&&s.bound[l]&&s.bound[l](y),a&&Ge(e,l)),p}):[],s.update(),a=!0,L(s.before_update),s.fragment=i?i(s.ctx):!1,t.target){if(t.hydrate){const l=He(t.target);s.fragment&&s.fragment.l(l),l.forEach($)}else s.fragment&&s.fragment.c();t.intro&&k(e.$$.fragment),Y(e,t.target,t.anchor,t.customElement),je()}P(f)}class Oe{$destroy(){K(this,1),this.$destroy=w}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!Je(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const N=[];function Te(e,t=w){let n;const i=new Set;function r(c){if(ie(e,c)&&(e=c,n)){const f=!N.length;for(const s of i)s[1](),N.push(s,e);if(f){for(let s=0;s<N.length;s+=2)N[s][0](N[s+1]);N.length=0}}}function o(c){r(c(e))}function u(c,f=w){const s=[c,f];return i.add(s),i.size===1&&(n=t(r)||w),c(e),()=>{i.delete(s),i.size===0&&(n(),n=null)}}return{set:r,update:o,subscribe:u}}let I=Te(JSON.parse(localStorage.getItem("link_store"))||[{link:"http://www.youtube.com/",src:"https://imgs.search.brave.com/fx_jWgOxhgaeHV6M86OnqgVM0MG_iusDDEXrtSstecg/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5s/S1o3eGxMaXhHb2Zr/cFNyVVdYYlBnSGFI/YSZwaWQ9QXBp"},{link:"https://github.com/tasmankingsley",src:"https://imgs.search.brave.com/4EEUAkhTWot3uz4922e4wNEJhRSDkDacv7AC05BQb4k/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5I/NzhlNjJJZ09LSHFM/bUlEYlRONGlnSGFI/YSZwaWQ9QXBp"},{link:"https://tasmankingsley.github.io/",src:"https://tasmankingsley.github.io/images/spotify-profile.jpg"},{link:"https://mail.proton.me/u/1/inbox",src:"https://play-lh.googleusercontent.com/99IPL5W1HvN1TM7awcJ2gihUie-LQ5Ae7W9g0FgCBFJ8hNZnFIOJElyBPNcx4Wcx7A"},{link:"https://www.icloud.com/",src:"https://imgs.search.brave.com/_gOv2QfAAwR0sXy-ox2N_y_JrWciUkW9Se1Td-a7iqk/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/bm5nSWNvSzFTcFJ3/S2MzZXpuMk1nSGFI/YSZwaWQ9QXBp"}]);I.subscribe(e=>localStorage.link_store=JSON.stringify(e));function Ye(e){const t=e-1;return t*t*t+1}function ee(e,{delay:t=0,duration:n=400,easing:i=te}={}){const r=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:i,css:o=>`opacity: ${o*r}`}}function Z(e,{delay:t=0,duration:n=400,easing:i=Ye,x:r=0,y:o=0,opacity:u=0}={}){const c=getComputedStyle(e),f=+c.opacity,s=c.transform==="none"?"":c.transform,a=f*(1-u);return{delay:t,duration:n,easing:i,css:(l,p)=>`
			transform: ${s} translate(${(1-l)*r}px, ${(1-l)*o}px);
			opacity: ${f-a*p}`}}function Ke(e){let t,n,i,r,o,u,c;return{c(){t=v("div"),n=v("a"),i=v("img"),g(i,"class","icon svelte-12ohs05"),ce(i.src,r=e[1])||g(i,"src",r),g(i,"alt",""),g(n,"href",e[0]),g(t,"class","icon-div svelte-12ohs05")},m(f,s){j(f,t,s),b(t,n),b(n,i),c=!0},p(f,[s]){(!c||s&2&&!ce(i.src,r=f[1]))&&g(i,"src",r),(!c||s&1)&&g(n,"href",f[0])},i(f){c||(x(()=>{u&&u.end(1),o=z(t,ee,{}),o.start()}),c=!0)},o(f){o&&o.invalidate(),u=Ze(t,ee,{}),c=!1},d(f){f&&$(t),f&&u&&u.end()}}}function et(e,t,n){let{web_link:i}=t,{icon_src:r}=t;return e.$$set=o=>{"web_link"in o&&n(0,i=o.web_link),"icon_src"in o&&n(1,r=o.icon_src)},[i,r]}class de extends Oe{constructor(t){super(),Me(this,t,et,Ke,ie,{web_link:0,icon_src:1})}}function pe(e,t,n){const i=e.slice();return i[11]=t[n],i[13]=n,i}function me(e){let t,n,i,r,o,u,c,f,s,a;return{c(){t=v("input"),i=O(),r=v("input"),u=O(),c=v("button"),c.textContent="add link",g(t,"class","input"),g(t,"type","text"),g(t,"placeholder","paste link"),g(r,"class","input"),g(r,"type","text"),g(r,"placeholder","paste icon link"),g(c,"class","button svelte-18y23j6")},m(l,p){j(l,t,p),F(t,e[0]),j(l,i,p),j(l,r,p),F(r,e[1]),j(l,u,p),j(l,c,p),s||(a=[A(t,"input",e[8]),A(r,"input",e[9]),A(c,"click",e[5])],s=!0)},p(l,p){p&1&&t.value!==l[0]&&F(t,l[0]),p&2&&r.value!==l[1]&&F(r,l[1])},i(l){n||x(()=>{n=z(t,Z,{x:-400,duration:400}),n.start()}),o||x(()=>{o=z(r,Z,{x:-400,duration:400}),o.start()}),f||x(()=>{f=z(c,Z,{x:400,duration:400}),f.start()})},o:w,d(l){l&&$(t),l&&$(i),l&&$(r),l&&$(u),l&&$(c),s=!1,L(a)}}}function _e(e){let t,n,i,r;function o(){return e[10](e[13])}return{c(){t=v("div"),t.textContent="\u24E7",g(t,"class","rm_div svelte-18y23j6")},m(u,c){j(u,t,c),i||(r=A(t,"click",o),i=!0)},p(u,c){e=u},i(u){n||x(()=>{n=z(t,ee,{}),n.start()})},o:w,d(u){u&&$(t),i=!1,r()}}}function he(e){let t,n,i,r,o,u;var c=de;function f(a){return{props:{web_link:a[11].link,icon_src:a[11].src}}}c&&(i=new c(f(e)));let s=e[2]&&_e(e);return{c(){t=v("div"),n=v("div"),i&&ae(i.$$.fragment),r=O(),s&&s.c(),o=O(),C(n,"opacity",e[2]?.6:1),g(t,"class","inner_comp_div svelte-18y23j6"),C(t,"position","relative")},m(a,l){j(a,t,l),b(t,n),i&&Y(i,n,null),b(t,r),s&&s.m(t,null),b(t,o),u=!0},p(a,l){const p={};if(l&16&&(p.web_link=a[11].link),l&16&&(p.icon_src=a[11].src),c!==(c=de)){if(i){Le();const d=i;V(d.$$.fragment,1,0,()=>{K(d,1)}),Ee()}c?(i=new c(f(a)),ae(i.$$.fragment),k(i.$$.fragment,1),Y(i,n,null)):i=null}else c&&i.$set(p);(!u||l&4)&&C(n,"opacity",a[2]?.6:1),a[2]?s?(s.p(a,l),l&4&&k(s,1)):(s=_e(a),s.c(),k(s,1),s.m(t,o)):s&&(s.d(1),s=null)},i(a){u||(i&&k(i.$$.fragment,a),k(s),u=!0)},o(a){i&&V(i.$$.fragment,a),u=!1},d(a){a&&$(t),i&&K(i),s&&s.d()}}}function tt(e){let t,n,i,r,o,u,c,f,s,a,l=e[2]&&me(e),p=e[4],d=[];for(let m=0;m<p.length;m+=1)d[m]=he(pe(e,p,m));const y=m=>V(d[m],1,1,()=>{d[m]=null});return{c(){t=v("main"),n=v("button"),i=$e(e[3]),r=O(),o=v("div"),l&&l.c(),u=O(),c=v("div");for(let m=0;m<d.length;m+=1)d[m].c();g(n,"class","edit svelte-18y23j6"),g(o,"class","edit_div svelte-18y23j6"),C(o,"height",e[2]?"100px":"0px"),g(c,"class","comp_div svelte-18y23j6"),g(t,"class","svelte-18y23j6")},m(m,_){j(m,t,_),b(t,n),b(n,i),b(t,r),b(t,o),l&&l.m(o,null),b(t,u),b(t,c);for(let h=0;h<d.length;h+=1)d[h].m(c,null);f=!0,s||(a=A(n,"click",e[7]),s=!0)},p(m,[_]){if((!f||_&8)&&We(i,m[3]),m[2]?l?(l.p(m,_),_&4&&k(l,1)):(l=me(m),l.c(),k(l,1),l.m(o,null)):l&&(l.d(1),l=null),(!f||_&4)&&C(o,"height",m[2]?"100px":"0px"),_&84){p=m[4];let h;for(h=0;h<p.length;h+=1){const E=pe(m,p,h);d[h]?(d[h].p(E,_),k(d[h],1)):(d[h]=he(E),d[h].c(),k(d[h],1),d[h].m(c,null))}for(Le(),h=p.length;h<d.length;h+=1)y(h);Ee()}},i(m){if(!f){k(l);for(let _=0;_<p.length;_+=1)k(d[_]);f=!0}},o(m){d=d.filter(Boolean);for(let _=0;_<d.length;_+=1)V(d[_]);f=!1},d(m){m&&$(t),l&&l.d(),Fe(d,m),s=!1,a()}}}function nt(e,t,n){let i;Ce(e,I,y=>n(4,i=y));let r="",o="",u=!1,c="\uFF0B";function f(){Pe(I,i=[...i,{link:r,src:o}],i),n(0,r=""),n(1,o="")}function s(y){i.splice(y,1),I.set(i)}function a(){n(2,u=!u),u===!0?n(3,c="\uFF0D"):n(3,c="\uFF0B")}function l(){r=this.value,n(0,r)}function p(){o=this.value,n(1,o)}return[r,o,u,c,i,f,s,a,l,p,y=>s(y)]}class it extends Oe{constructor(t){super(),Me(this,t,nt,tt,ie,{})}}new it({target:document.getElementById("app")});
