(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Zc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function el(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=qe(s)?$y(s):el(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(qe(t))return t;if(be(t))return t}}const Uy=/;(?![^(]*\))/g,Fy=/:([^]+)/,Vy=/\/\*.*?\*\//gs;function $y(t){const e={};return t.replace(Vy,"").split(Uy).forEach(n=>{if(n){const s=n.split(Fy);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function tl(t){let e="";if(qe(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=tl(t[n]);s&&(e+=s+" ")}else if(be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const By="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jy=Zc(By);function lf(t){return!!t||t===""}function qy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Lo(t[s],e[s]);return n}function Lo(t,e){if(t===e)return!0;let n=Ku(t),s=Ku(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Dr(t),s=Dr(e),n||s)return t===e;if(n=W(t),s=W(e),n||s)return n&&s?qy(t,e):!1;if(n=be(t),s=be(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Lo(t[o],e[o]))return!1}}return String(t)===String(e)}function Hy(t,e){return t.findIndex(n=>Lo(n,e))}const Bt=t=>qe(t)?t:t==null?"":W(t)||be(t)&&(t.toString===df||!ne(t.toString))?JSON.stringify(t,uf,2):String(t),uf=(t,e)=>e&&e.__v_isRef?uf(t,e.value):Cs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Fo(e)?{[`Set(${e.size})`]:[...e.values()]}:be(e)&&!W(e)&&!ff(e)?String(e):e,we={},Ss=[],xt=()=>{},Ky=()=>!1,Wy=/^on[^a-z]/,Uo=t=>Wy.test(t),nl=t=>t.startsWith("onUpdate:"),Je=Object.assign,sl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},zy=Object.prototype.hasOwnProperty,ce=(t,e)=>zy.call(t,e),W=Array.isArray,Cs=t=>ni(t)==="[object Map]",Fo=t=>ni(t)==="[object Set]",Ku=t=>ni(t)==="[object Date]",ne=t=>typeof t=="function",qe=t=>typeof t=="string",Dr=t=>typeof t=="symbol",be=t=>t!==null&&typeof t=="object",hf=t=>be(t)&&ne(t.then)&&ne(t.catch),df=Object.prototype.toString,ni=t=>df.call(t),Gy=t=>ni(t).slice(8,-1),ff=t=>ni(t)==="[object Object]",rl=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Hi=Zc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Qy=/-(\w)/g,Ns=Vo(t=>t.replace(Qy,(e,n)=>n?n.toUpperCase():"")),Xy=/\B([A-Z])/g,Xs=Vo(t=>t.replace(Xy,"-$1").toLowerCase()),pf=Vo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ka=Vo(t=>t?`on${pf(t)}`:""),Nr=(t,e)=>!Object.is(t,e),Ki=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},io=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Os=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Wu;const Yy=()=>Wu||(Wu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let gt;class mf{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=gt,!e&&gt&&(this.index=(gt.scopes||(gt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=gt;try{return gt=this,e()}finally{gt=n}}}on(){gt=this}off(){gt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function gf(t){return new mf(t)}function Jy(t,e=gt){e&&e.active&&e.effects.push(t)}function Zy(){return gt}function ev(t){gt&&gt.cleanups.push(t)}const il=t=>{const e=new Set(t);return e.w=0,e.n=0,e},yf=t=>(t.w&Dn)>0,vf=t=>(t.n&Dn)>0,tv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Dn},nv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];yf(r)&&!vf(r)?r.delete(t):e[n++]=r,r.w&=~Dn,r.n&=~Dn}e.length=n}},ec=new WeakMap;let dr=0,Dn=1;const tc=30;let Ct;const ts=Symbol(""),nc=Symbol("");class ol{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Jy(this,s)}run(){if(!this.active)return this.fn();let e=Ct,n=En;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ct,Ct=this,En=!0,Dn=1<<++dr,dr<=tc?tv(this):zu(this),this.fn()}finally{dr<=tc&&nv(this),Dn=1<<--dr,Ct=this.parent,En=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ct===this?this.deferStop=!0:this.active&&(zu(this),this.onStop&&this.onStop(),this.active=!1)}}function zu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let En=!0;const wf=[];function Ys(){wf.push(En),En=!1}function Js(){const t=wf.pop();En=t===void 0?!0:t}function vt(t,e,n){if(En&&Ct){let s=ec.get(t);s||ec.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=il()),_f(r)}}function _f(t,e){let n=!1;dr<=tc?vf(t)||(t.n|=Dn,n=!yf(t)):n=!t.has(Ct),n&&(t.add(Ct),Ct.deps.push(t))}function en(t,e,n,s,r,i){const o=ec.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&W(t)){const c=Os(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":W(t)?rl(n)&&a.push(o.get("length")):(a.push(o.get(ts)),Cs(t)&&a.push(o.get(nc)));break;case"delete":W(t)||(a.push(o.get(ts)),Cs(t)&&a.push(o.get(nc)));break;case"set":Cs(t)&&a.push(o.get(ts));break}if(a.length===1)a[0]&&sc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);sc(il(c))}}function sc(t,e){const n=W(t)?t:[...t];for(const s of n)s.computed&&Gu(s);for(const s of n)s.computed||Gu(s)}function Gu(t,e){(t!==Ct||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const sv=Zc("__proto__,__v_isRef,__isVue"),bf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dr)),rv=al(),iv=al(!1,!0),ov=al(!0),Qu=av();function av(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=he(this);for(let i=0,o=this.length;i<o;i++)vt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(he)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ys();const s=he(this)[e].apply(this,n);return Js(),s}}),t}function al(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Iv:Cf:e?Sf:Tf).get(s))return s;const o=W(s);if(!t&&o&&ce(Qu,r))return Reflect.get(Qu,r,i);const a=Reflect.get(s,r,i);return(Dr(r)?bf.has(r):sv(r))||(t||vt(s,"get",r),e)?a:Le(a)?o&&rl(r)?a:a.value:be(a)?t?Af(a):Zs(a):a}}const cv=Ef(),lv=Ef(!0);function Ef(t=!1){return function(n,s,r,i){let o=n[s];if(Ps(o)&&Le(o)&&!Le(r))return!1;if(!t&&(!oo(r)&&!Ps(r)&&(o=he(o),r=he(r)),!W(n)&&Le(o)&&!Le(r)))return o.value=r,!0;const a=W(n)&&rl(s)?Number(s)<n.length:ce(n,s),c=Reflect.set(n,s,r,i);return n===he(i)&&(a?Nr(r,o)&&en(n,"set",s,r):en(n,"add",s,r)),c}}function uv(t,e){const n=ce(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&en(t,"delete",e,void 0),s}function hv(t,e){const n=Reflect.has(t,e);return(!Dr(e)||!bf.has(e))&&vt(t,"has",e),n}function dv(t){return vt(t,"iterate",W(t)?"length":ts),Reflect.ownKeys(t)}const If={get:rv,set:cv,deleteProperty:uv,has:hv,ownKeys:dv},fv={get:ov,set(t,e){return!0},deleteProperty(t,e){return!0}},pv=Je({},If,{get:iv,set:lv}),cl=t=>t,$o=t=>Reflect.getPrototypeOf(t);function Di(t,e,n=!1,s=!1){t=t.__v_raw;const r=he(t),i=he(e);n||(e!==i&&vt(r,"get",e),vt(r,"get",i));const{has:o}=$o(r),a=s?cl:n?hl:Or;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Ni(t,e=!1){const n=this.__v_raw,s=he(n),r=he(t);return e||(t!==r&&vt(s,"has",t),vt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Oi(t,e=!1){return t=t.__v_raw,!e&&vt(he(t),"iterate",ts),Reflect.get(t,"size",t)}function Xu(t){t=he(t);const e=he(this);return $o(e).has.call(e,t)||(e.add(t),en(e,"add",t,t)),this}function Yu(t,e){e=he(e);const n=he(this),{has:s,get:r}=$o(n);let i=s.call(n,t);i||(t=he(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Nr(e,o)&&en(n,"set",t,e):en(n,"add",t,e),this}function Ju(t){const e=he(this),{has:n,get:s}=$o(e);let r=n.call(e,t);r||(t=he(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&en(e,"delete",t,void 0),i}function Zu(){const t=he(this),e=t.size!==0,n=t.clear();return e&&en(t,"clear",void 0,void 0),n}function Pi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=he(o),c=e?cl:t?hl:Or;return!t&&vt(a,"iterate",ts),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Mi(t,e,n){return function(...s){const r=this.__v_raw,i=he(r),o=Cs(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?cl:e?hl:Or;return!e&&vt(i,"iterate",c?nc:ts),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function hn(t){return function(...e){return t==="delete"?!1:this}}function mv(){const t={get(i){return Di(this,i)},get size(){return Oi(this)},has:Ni,add:Xu,set:Yu,delete:Ju,clear:Zu,forEach:Pi(!1,!1)},e={get(i){return Di(this,i,!1,!0)},get size(){return Oi(this)},has:Ni,add:Xu,set:Yu,delete:Ju,clear:Zu,forEach:Pi(!1,!0)},n={get(i){return Di(this,i,!0)},get size(){return Oi(this,!0)},has(i){return Ni.call(this,i,!0)},add:hn("add"),set:hn("set"),delete:hn("delete"),clear:hn("clear"),forEach:Pi(!0,!1)},s={get(i){return Di(this,i,!0,!0)},get size(){return Oi(this,!0)},has(i){return Ni.call(this,i,!0)},add:hn("add"),set:hn("set"),delete:hn("delete"),clear:hn("clear"),forEach:Pi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Mi(i,!1,!1),n[i]=Mi(i,!0,!1),e[i]=Mi(i,!1,!0),s[i]=Mi(i,!0,!0)}),[t,n,e,s]}const[gv,yv,vv,wv]=mv();function ll(t,e){const n=e?t?wv:vv:t?yv:gv;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ce(n,r)&&r in s?n:s,r,i)}const _v={get:ll(!1,!1)},bv={get:ll(!1,!0)},Ev={get:ll(!0,!1)},Tf=new WeakMap,Sf=new WeakMap,Cf=new WeakMap,Iv=new WeakMap;function Tv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Sv(t){return t.__v_skip||!Object.isExtensible(t)?0:Tv(Gy(t))}function Zs(t){return Ps(t)?t:ul(t,!1,If,_v,Tf)}function Cv(t){return ul(t,!1,pv,bv,Sf)}function Af(t){return ul(t,!0,fv,Ev,Cf)}function ul(t,e,n,s,r){if(!be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Sv(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function In(t){return Ps(t)?In(t.__v_raw):!!(t&&t.__v_isReactive)}function Ps(t){return!!(t&&t.__v_isReadonly)}function oo(t){return!!(t&&t.__v_isShallow)}function kf(t){return In(t)||Ps(t)}function he(t){const e=t&&t.__v_raw;return e?he(e):t}function Ms(t){return io(t,"__v_skip",!0),t}const Or=t=>be(t)?Zs(t):t,hl=t=>be(t)?Af(t):t;function xf(t){En&&Ct&&(t=he(t),_f(t.dep||(t.dep=il())))}function Rf(t,e){t=he(t),t.dep&&sc(t.dep)}function Le(t){return!!(t&&t.__v_isRef===!0)}function Ne(t){return Df(t,!1)}function Av(t){return Df(t,!0)}function Df(t,e){return Le(t)?t:new kv(t,e)}class kv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:he(e),this._value=n?e:Or(e)}get value(){return xf(this),this._value}set value(e){const n=this.__v_isShallow||oo(e)||Ps(e);e=n?e:he(e),Nr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Or(e),Rf(this))}}function Tn(t){return Le(t)?t.value:t}const xv={get:(t,e,n)=>Tn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Le(r)&&!Le(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Nf(t){return In(t)?t:new Proxy(t,xv)}function Rv(t){const e=W(t)?new Array(t.length):{};for(const n in t)e[n]=Nv(t,n);return e}class Dv{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Nv(t,e,n){const s=t[e];return Le(s)?s:new Dv(t,e,n)}var Of;class Ov{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Of]=!1,this._dirty=!0,this.effect=new ol(e,()=>{this._dirty||(this._dirty=!0,Rf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=he(this);return xf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Of="__v_isReadonly";function Pv(t,e,n=!1){let s,r;const i=ne(t);return i?(s=t,r=xt):(s=t.get,r=t.set),new Ov(s,r,i||!r,n)}function Sn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Bo(i,e,n)}return r}function bt(t,e,n,s){if(ne(t)){const i=Sn(t,e,n,s);return i&&hf(i)&&i.catch(o=>{Bo(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(bt(t[i],e,n,s));return r}function Bo(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Sn(c,null,10,[t,o,a]);return}}Mv(t,n,r,s)}function Mv(t,e,n,s=!0){console.error(t)}let Pr=!1,rc=!1;const nt=[];let Vt=0;const As=[];let Qt=null,Wn=0;const Pf=Promise.resolve();let dl=null;function fl(t){const e=dl||Pf;return t?e.then(this?t.bind(this):t):e}function Lv(t){let e=Vt+1,n=nt.length;for(;e<n;){const s=e+n>>>1;Mr(nt[s])<t?e=s+1:n=s}return e}function pl(t){(!nt.length||!nt.includes(t,Pr&&t.allowRecurse?Vt+1:Vt))&&(t.id==null?nt.push(t):nt.splice(Lv(t.id),0,t),Mf())}function Mf(){!Pr&&!rc&&(rc=!0,dl=Pf.then(Uf))}function Uv(t){const e=nt.indexOf(t);e>Vt&&nt.splice(e,1)}function Fv(t){W(t)?As.push(...t):(!Qt||!Qt.includes(t,t.allowRecurse?Wn+1:Wn))&&As.push(t),Mf()}function eh(t,e=Pr?Vt+1:0){for(;e<nt.length;e++){const n=nt[e];n&&n.pre&&(nt.splice(e,1),e--,n())}}function Lf(t){if(As.length){const e=[...new Set(As)];if(As.length=0,Qt){Qt.push(...e);return}for(Qt=e,Qt.sort((n,s)=>Mr(n)-Mr(s)),Wn=0;Wn<Qt.length;Wn++)Qt[Wn]();Qt=null,Wn=0}}const Mr=t=>t.id==null?1/0:t.id,Vv=(t,e)=>{const n=Mr(t)-Mr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Uf(t){rc=!1,Pr=!0,nt.sort(Vv);const e=xt;try{for(Vt=0;Vt<nt.length;Vt++){const n=nt[Vt];n&&n.active!==!1&&Sn(n,null,14)}}finally{Vt=0,nt.length=0,Lf(),Pr=!1,dl=null,(nt.length||As.length)&&Uf()}}function $v(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||we;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||we;d&&(r=n.map(m=>qe(m)?m.trim():m)),h&&(r=n.map(Os))}let a,c=s[a=ka(e)]||s[a=ka(Ns(e))];!c&&i&&(c=s[a=ka(Xs(e))]),c&&bt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,bt(l,t,6,r)}}function Ff(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!ne(t)){const c=l=>{const u=Ff(l,e,!0);u&&(a=!0,Je(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(be(t)&&s.set(t,null),null):(W(i)?i.forEach(c=>o[c]=null):Je(o,i),be(t)&&s.set(t,o),o)}function jo(t,e){return!t||!Uo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,Xs(e))||ce(t,e))}let At=null,Vf=null;function ao(t){const e=At;return At=t,Vf=t&&t.type.__scopeId||null,e}function tn(t,e=At,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&lh(-1);const i=ao(e);let o;try{o=t(...r)}finally{ao(i),s._d&&lh(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function xa(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:m,ctx:g,inheritAttrs:w}=t;let C,k;const N=ao(t);try{if(n.shapeFlag&4){const z=r||s;C=Ft(u.call(z,z,h,i,m,d,g)),k=c}else{const z=e;C=Ft(z.length>1?z(i,{attrs:c,slots:a,emit:l}):z(i,null)),k=e.props?c:Bv(c)}}catch(z){br.length=0,Bo(z,t,1),C=Te(Nt)}let P=C;if(k&&w!==!1){const z=Object.keys(k),{shapeFlag:X}=P;z.length&&X&7&&(o&&z.some(nl)&&(k=jv(k,o)),P=Nn(P,k))}return n.dirs&&(P=Nn(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),C=P,ao(N),C}const Bv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Uo(n))&&((e||(e={}))[n]=t[n]);return e},jv=(t,e)=>{const n={};for(const s in t)(!nl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function qv(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?th(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!jo(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?th(s,o,l):!0:!!o;return!1}function th(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!jo(n,i))return!0}return!1}function Hv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Kv=t=>t.__isSuspense;function Wv(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):Fv(t)}function Wi(t,e){if(Xe){let n=Xe.provides;const s=Xe.parent&&Xe.parent.provides;s===n&&(n=Xe.provides=Object.create(s)),n[t]=e}}function Rt(t,e,n=!1){const s=Xe||At;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ne(e)?e.call(s.proxy):e}}const Li={};function wr(t,e,n){return $f(t,e,n)}function $f(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=we){const a=Xe;let c,l=!1,u=!1;if(Le(t)?(c=()=>t.value,l=oo(t)):In(t)?(c=()=>t,s=!0):W(t)?(u=!0,l=t.some(P=>In(P)||oo(P)),c=()=>t.map(P=>{if(Le(P))return P.value;if(In(P))return Xn(P);if(ne(P))return Sn(P,a,2)})):ne(t)?e?c=()=>Sn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),bt(t,a,3,[d])}:c=xt,e&&s){const P=c;c=()=>Xn(P())}let h,d=P=>{h=k.onStop=()=>{Sn(P,a,4)}},m;if(Fr)if(d=xt,e?n&&bt(e,a,3,[c(),u?[]:void 0,d]):c(),r==="sync"){const P=U0();m=P.__watcherHandles||(P.__watcherHandles=[])}else return xt;let g=u?new Array(t.length).fill(Li):Li;const w=()=>{if(!!k.active)if(e){const P=k.run();(s||l||(u?P.some((z,X)=>Nr(z,g[X])):Nr(P,g)))&&(h&&h(),bt(e,a,3,[P,g===Li?void 0:u&&g[0]===Li?[]:g,d]),g=P)}else k.run()};w.allowRecurse=!!e;let C;r==="sync"?C=w:r==="post"?C=()=>dt(w,a&&a.suspense):(w.pre=!0,a&&(w.id=a.uid),C=()=>pl(w));const k=new ol(c,C);e?n?w():g=k.run():r==="post"?dt(k.run.bind(k),a&&a.suspense):k.run();const N=()=>{k.stop(),a&&a.scope&&sl(a.scope.effects,k)};return m&&m.push(N),N}function zv(t,e,n){const s=this.proxy,r=qe(t)?t.includes(".")?Bf(s,t):()=>s[t]:t.bind(s,s);let i;ne(e)?i=e:(i=e.handler,n=e);const o=Xe;Ls(this);const a=$f(r,i.bind(s),n);return o?Ls(o):ns(),a}function Bf(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Xn(t,e){if(!be(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Le(t))Xn(t.value,e);else if(W(t))for(let n=0;n<t.length;n++)Xn(t[n],e);else if(Fo(t)||Cs(t))t.forEach(n=>{Xn(n,e)});else if(ff(t))for(const n in t)Xn(t[n],e);return t}function Gv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ml(()=>{t.isMounted=!0}),zf(()=>{t.isUnmounting=!0}),t}const _t=[Function,Array],Qv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:_t,onEnter:_t,onAfterEnter:_t,onEnterCancelled:_t,onBeforeLeave:_t,onLeave:_t,onAfterLeave:_t,onLeaveCancelled:_t,onBeforeAppear:_t,onAppear:_t,onAfterAppear:_t,onAppearCancelled:_t},setup(t,{slots:e}){const n=op(),s=Gv();let r;return()=>{const i=e.default&&Hf(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const w of i)if(w.type!==Nt){o=w;break}}const a=he(t),{mode:c}=a;if(s.isLeaving)return Ra(o);const l=nh(o);if(!l)return Ra(o);const u=ic(l,a,s,n);oc(l,u);const h=n.subTree,d=h&&nh(h);let m=!1;const{getTransitionKey:g}=l.type;if(g){const w=g();r===void 0?r=w:w!==r&&(r=w,m=!0)}if(d&&d.type!==Nt&&(!zn(l,d)||m)){const w=ic(d,a,s,n);if(oc(d,w),c==="out-in")return s.isLeaving=!0,w.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Ra(o);c==="in-out"&&l.type!==Nt&&(w.delayLeave=(C,k,N)=>{const P=qf(s,d);P[String(d.key)]=d,C._leaveCb=()=>{k(),C._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=N})}return o}}},jf=Qv;function qf(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function ic(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:w,onAppear:C,onAfterAppear:k,onAppearCancelled:N}=e,P=String(t.key),z=qf(n,t),X=(L,se)=>{L&&bt(L,s,9,se)},fe=(L,se)=>{const ie=se[1];X(L,se),W(L)?L.every(Ce=>Ce.length<=1)&&ie():L.length<=1&&ie()},J={mode:i,persisted:o,beforeEnter(L){let se=a;if(!n.isMounted)if(r)se=w||a;else return;L._leaveCb&&L._leaveCb(!0);const ie=z[P];ie&&zn(t,ie)&&ie.el._leaveCb&&ie.el._leaveCb(),X(se,[L])},enter(L){let se=c,ie=l,Ce=u;if(!n.isMounted)if(r)se=C||c,ie=k||l,Ce=N||u;else return;let F=!1;const ve=L._enterCb=xe=>{F||(F=!0,xe?X(Ce,[L]):X(ie,[L]),J.delayedLeave&&J.delayedLeave(),L._enterCb=void 0)};se?fe(se,[L,ve]):ve()},leave(L,se){const ie=String(t.key);if(L._enterCb&&L._enterCb(!0),n.isUnmounting)return se();X(h,[L]);let Ce=!1;const F=L._leaveCb=ve=>{Ce||(Ce=!0,se(),ve?X(g,[L]):X(m,[L]),L._leaveCb=void 0,z[ie]===t&&delete z[ie])};z[ie]=t,d?fe(d,[L,F]):F()},clone(L){return ic(L,e,n,s)}};return J}function Ra(t){if(qo(t))return t=Nn(t),t.children=null,t}function nh(t){return qo(t)?t.children?t.children[0]:void 0:t}function oc(t,e){t.shapeFlag&6&&t.component?oc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Hf(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Me?(o.patchFlag&128&&r++,s=s.concat(Hf(o.children,e,a))):(e||o.type!==Nt)&&s.push(a!=null?Nn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Kf(t){return ne(t)?{setup:t,name:t.name}:t}const zi=t=>!!t.type.__asyncLoader,qo=t=>t.type.__isKeepAlive;function Xv(t,e){Wf(t,"a",e)}function Yv(t,e){Wf(t,"da",e)}function Wf(t,e,n=Xe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ho(e,s,n),n){let r=n.parent;for(;r&&r.parent;)qo(r.parent.vnode)&&Jv(s,e,n,r),r=r.parent}}function Jv(t,e,n,s){const r=Ho(e,t,s,!0);Gf(()=>{sl(s[e],r)},n)}function Ho(t,e,n=Xe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ys(),Ls(n);const a=bt(e,n,t,o);return ns(),Js(),a});return s?r.unshift(i):r.push(i),i}}const ln=t=>(e,n=Xe)=>(!Fr||t==="sp")&&Ho(t,(...s)=>e(...s),n),Zv=ln("bm"),ml=ln("m"),e0=ln("bu"),t0=ln("u"),zf=ln("bum"),Gf=ln("um"),n0=ln("sp"),s0=ln("rtg"),r0=ln("rtc");function i0(t,e=Xe){Ho("ec",t,e)}function Dt(t,e){const n=At;if(n===null)return t;const s=Wo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=we]=e[i];o&&(ne(o)&&(o={mounted:o,updated:o}),o.deep&&Xn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function $n(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Ys(),bt(c,n,8,[t.el,a,t,e]),Js())}}const o0=Symbol();function Lr(t,e,n,s){let r;const i=n&&n[s];if(W(t)||qe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(be(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const ac=t=>t?ap(t)?Wo(t)||t.proxy:ac(t.parent):null,_r=Je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ac(t.parent),$root:t=>ac(t.root),$emit:t=>t.emit,$options:t=>gl(t),$forceUpdate:t=>t.f||(t.f=()=>pl(t.update)),$nextTick:t=>t.n||(t.n=fl.bind(t.proxy)),$watch:t=>zv.bind(t)}),a0={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==we&&ce(s,e))return o[e]=1,s[e];if(r!==we&&ce(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&ce(l,e))return o[e]=3,i[e];if(n!==we&&ce(n,e))return o[e]=4,n[e];cc&&(o[e]=0)}}const u=_r[e];let h,d;if(u)return e==="$attrs"&&vt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==we&&ce(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ce(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==we&&ce(r,e)?(r[e]=n,!0):s!==we&&ce(s,e)?(s[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==we&&ce(t,o)||e!==we&&ce(e,o)||(a=i[0])&&ce(a,o)||ce(s,o)||ce(_r,o)||ce(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let cc=!0;function c0(t){const e=gl(t),n=t.proxy,s=t.ctx;cc=!1,e.beforeCreate&&sh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:m,updated:g,activated:w,deactivated:C,beforeDestroy:k,beforeUnmount:N,destroyed:P,unmounted:z,render:X,renderTracked:fe,renderTriggered:J,errorCaptured:L,serverPrefetch:se,expose:ie,inheritAttrs:Ce,components:F,directives:ve,filters:xe}=e;if(l&&l0(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Ee in o){const ge=o[Ee];ne(ge)&&(s[Ee]=ge.bind(n))}if(r){const Ee=r.call(n,n);be(Ee)&&(t.data=Zs(Ee))}if(cc=!0,i)for(const Ee in i){const ge=i[Ee],It=ne(ge)?ge.bind(n,n):ne(ge.get)?ge.get.bind(n,n):xt,Vn=!ne(ge)&&ne(ge.set)?ge.set.bind(n):xt,Tt=lt({get:It,set:Vn});Object.defineProperty(s,Ee,{enumerable:!0,configurable:!0,get:()=>Tt.value,set:ht=>Tt.value=ht})}if(a)for(const Ee in a)Qf(a[Ee],s,n,Ee);if(c){const Ee=ne(c)?c.call(n):c;Reflect.ownKeys(Ee).forEach(ge=>{Wi(ge,Ee[ge])})}u&&sh(u,t,"c");function Re(Ee,ge){W(ge)?ge.forEach(It=>Ee(It.bind(n))):ge&&Ee(ge.bind(n))}if(Re(Zv,h),Re(ml,d),Re(e0,m),Re(t0,g),Re(Xv,w),Re(Yv,C),Re(i0,L),Re(r0,fe),Re(s0,J),Re(zf,N),Re(Gf,z),Re(n0,se),W(ie))if(ie.length){const Ee=t.exposed||(t.exposed={});ie.forEach(ge=>{Object.defineProperty(Ee,ge,{get:()=>n[ge],set:It=>n[ge]=It})})}else t.exposed||(t.exposed={});X&&t.render===xt&&(t.render=X),Ce!=null&&(t.inheritAttrs=Ce),F&&(t.components=F),ve&&(t.directives=ve)}function l0(t,e,n=xt,s=!1){W(t)&&(t=lc(t));for(const r in t){const i=t[r];let o;be(i)?"default"in i?o=Rt(i.from||r,i.default,!0):o=Rt(i.from||r):o=Rt(i),Le(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function sh(t,e,n){bt(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Qf(t,e,n,s){const r=s.includes(".")?Bf(n,s):()=>n[s];if(qe(t)){const i=e[t];ne(i)&&wr(r,i)}else if(ne(t))wr(r,t.bind(n));else if(be(t))if(W(t))t.forEach(i=>Qf(i,e,n,s));else{const i=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(i)&&wr(r,i,t)}}function gl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>co(c,l,o,!0)),co(c,e,o)),be(e)&&i.set(e,c),c}function co(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&co(t,i,n,!0),r&&r.forEach(o=>co(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=u0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const u0={data:rh,props:Hn,emits:Hn,methods:Hn,computed:Hn,beforeCreate:ct,created:ct,beforeMount:ct,mounted:ct,beforeUpdate:ct,updated:ct,beforeDestroy:ct,beforeUnmount:ct,destroyed:ct,unmounted:ct,activated:ct,deactivated:ct,errorCaptured:ct,serverPrefetch:ct,components:Hn,directives:Hn,watch:d0,provide:rh,inject:h0};function rh(t,e){return e?t?function(){return Je(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function h0(t,e){return Hn(lc(t),lc(e))}function lc(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ct(t,e){return t?[...new Set([].concat(t,e))]:e}function Hn(t,e){return t?Je(Je(Object.create(null),t),e):e}function d0(t,e){if(!t)return e;if(!e)return t;const n=Je(Object.create(null),t);for(const s in e)n[s]=ct(t[s],e[s]);return n}function f0(t,e,n,s=!1){const r={},i={};io(i,Ko,1),t.propsDefaults=Object.create(null),Xf(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Cv(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function p0(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=he(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(jo(t.emitsOptions,d))continue;const m=e[d];if(c)if(ce(i,d))m!==i[d]&&(i[d]=m,l=!0);else{const g=Ns(d);r[g]=uc(c,a,g,m,t,!1)}else m!==i[d]&&(i[d]=m,l=!0)}}}else{Xf(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!ce(e,h)&&((u=Xs(h))===h||!ce(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=uc(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ce(e,h)&&!0)&&(delete i[h],l=!0)}l&&en(t,"set","$attrs")}function Xf(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Hi(c))continue;const l=e[c];let u;r&&ce(r,u=Ns(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:jo(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=he(n),l=a||we;for(let u=0;u<i.length;u++){const h=i[u];n[h]=uc(r,c,h,l[h],t,!ce(l,h))}}return o}function uc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ce(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&ne(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Ls(r),s=l[n]=c.call(null,e),ns())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Xs(n))&&(s=!0))}return s}function Yf(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!ne(t)){const u=h=>{c=!0;const[d,m]=Yf(h,e,!0);Je(o,d),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return be(t)&&s.set(t,Ss),Ss;if(W(i))for(let u=0;u<i.length;u++){const h=Ns(i[u]);ih(h)&&(o[h]=we)}else if(i)for(const u in i){const h=Ns(u);if(ih(h)){const d=i[u],m=o[h]=W(d)||ne(d)?{type:d}:Object.assign({},d);if(m){const g=ch(Boolean,m.type),w=ch(String,m.type);m[0]=g>-1,m[1]=w<0||g<w,(g>-1||ce(m,"default"))&&a.push(h)}}}const l=[o,a];return be(t)&&s.set(t,l),l}function ih(t){return t[0]!=="$"}function oh(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function ah(t,e){return oh(t)===oh(e)}function ch(t,e){return W(e)?e.findIndex(n=>ah(n,t)):ne(e)&&ah(e,t)?0:-1}const Jf=t=>t[0]==="_"||t==="$stable",yl=t=>W(t)?t.map(Ft):[Ft(t)],m0=(t,e,n)=>{if(e._n)return e;const s=tn((...r)=>yl(e(...r)),n);return s._c=!1,s},Zf=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Jf(r))continue;const i=t[r];if(ne(i))e[r]=m0(r,i,s);else if(i!=null){const o=yl(i);e[r]=()=>o}}},ep=(t,e)=>{const n=yl(e);t.slots.default=()=>n},g0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=he(e),io(e,"_",n)):Zf(e,t.slots={})}else t.slots={},e&&ep(t,e);io(t.slots,Ko,1)},y0=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=we;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Je(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Zf(e,r)),o=e}else e&&(ep(t,e),o={default:1});if(i)for(const a in r)!Jf(a)&&!(a in o)&&delete r[a]};function tp(){return{app:null,config:{isNativeTag:Ky,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let v0=0;function w0(t,e){return function(s,r=null){ne(s)||(s=Object.assign({},s)),r!=null&&!be(r)&&(r=null);const i=tp(),o=new Set;let a=!1;const c=i.app={_uid:v0++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:F0,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ne(l.install)?(o.add(l),l.install(c,...u)):ne(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=Te(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Wo(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function hc(t,e,n,s,r=!1){if(W(t)){t.forEach((d,m)=>hc(d,e&&(W(e)?e[m]:e),n,s,r));return}if(zi(s)&&!r)return;const i=s.shapeFlag&4?Wo(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===we?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(qe(l)?(u[l]=null,ce(h,l)&&(h[l]=null)):Le(l)&&(l.value=null)),ne(c))Sn(c,a,12,[o,u]);else{const d=qe(c),m=Le(c);if(d||m){const g=()=>{if(t.f){const w=d?ce(h,c)?h[c]:u[c]:c.value;r?W(w)&&sl(w,i):W(w)?w.includes(i)||w.push(i):d?(u[c]=[i],ce(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ce(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,dt(g,n)):g()}}}const dt=Wv;function _0(t){return b0(t)}function b0(t,e){const n=Yy();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:m=xt,insertStaticContent:g}=t,w=(f,p,v,_=null,I=null,x=null,O=!1,A=null,R=!!p.dynamicChildren)=>{if(f===p)return;f&&!zn(f,p)&&(_=D(f),ht(f,I,x,!0),f=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:T,ref:H,shapeFlag:V}=p;switch(T){case vl:C(f,p,v,_);break;case Nt:k(f,p,v,_);break;case Gi:f==null&&N(p,v,_,O);break;case Me:F(f,p,v,_,I,x,O,A,R);break;default:V&1?X(f,p,v,_,I,x,O,A,R):V&6?ve(f,p,v,_,I,x,O,A,R):(V&64||V&128)&&T.process(f,p,v,_,I,x,O,A,R,ue)}H!=null&&I&&hc(H,f&&f.ref,x,p||f,!p)},C=(f,p,v,_)=>{if(f==null)s(p.el=a(p.children),v,_);else{const I=p.el=f.el;p.children!==f.children&&l(I,p.children)}},k=(f,p,v,_)=>{f==null?s(p.el=c(p.children||""),v,_):p.el=f.el},N=(f,p,v,_)=>{[f.el,f.anchor]=g(f.children,p,v,_,f.el,f.anchor)},P=({el:f,anchor:p},v,_)=>{let I;for(;f&&f!==p;)I=d(f),s(f,v,_),f=I;s(p,v,_)},z=({el:f,anchor:p})=>{let v;for(;f&&f!==p;)v=d(f),r(f),f=v;r(p)},X=(f,p,v,_,I,x,O,A,R)=>{O=O||p.type==="svg",f==null?fe(p,v,_,I,x,O,A,R):se(f,p,I,x,O,A,R)},fe=(f,p,v,_,I,x,O,A)=>{let R,T;const{type:H,props:V,shapeFlag:K,transition:Z,dirs:oe}=f;if(R=f.el=o(f.type,x,V&&V.is,V),K&8?u(R,f.children):K&16&&L(f.children,R,null,_,I,x&&H!=="foreignObject",O,A),oe&&$n(f,null,_,"created"),V){for(const ye in V)ye!=="value"&&!Hi(ye)&&i(R,ye,null,V[ye],x,f.children,_,I,M);"value"in V&&i(R,"value",null,V.value),(T=V.onVnodeBeforeMount)&&Ut(T,_,f)}J(R,f,f.scopeId,O,_),oe&&$n(f,null,_,"beforeMount");const Ie=(!I||I&&!I.pendingBranch)&&Z&&!Z.persisted;Ie&&Z.beforeEnter(R),s(R,p,v),((T=V&&V.onVnodeMounted)||Ie||oe)&&dt(()=>{T&&Ut(T,_,f),Ie&&Z.enter(R),oe&&$n(f,null,_,"mounted")},I)},J=(f,p,v,_,I)=>{if(v&&m(f,v),_)for(let x=0;x<_.length;x++)m(f,_[x]);if(I){let x=I.subTree;if(p===x){const O=I.vnode;J(f,O,O.scopeId,O.slotScopeIds,I.parent)}}},L=(f,p,v,_,I,x,O,A,R=0)=>{for(let T=R;T<f.length;T++){const H=f[T]=A?gn(f[T]):Ft(f[T]);w(null,H,p,v,_,I,x,O,A)}},se=(f,p,v,_,I,x,O)=>{const A=p.el=f.el;let{patchFlag:R,dynamicChildren:T,dirs:H}=p;R|=f.patchFlag&16;const V=f.props||we,K=p.props||we;let Z;v&&Bn(v,!1),(Z=K.onVnodeBeforeUpdate)&&Ut(Z,v,p,f),H&&$n(p,f,v,"beforeUpdate"),v&&Bn(v,!0);const oe=I&&p.type!=="foreignObject";if(T?ie(f.dynamicChildren,T,A,v,_,oe,x):O||ge(f,p,A,null,v,_,oe,x,!1),R>0){if(R&16)Ce(A,p,V,K,v,_,I);else if(R&2&&V.class!==K.class&&i(A,"class",null,K.class,I),R&4&&i(A,"style",V.style,K.style,I),R&8){const Ie=p.dynamicProps;for(let ye=0;ye<Ie.length;ye++){const Ue=Ie[ye],St=V[Ue],vs=K[Ue];(vs!==St||Ue==="value")&&i(A,Ue,St,vs,I,f.children,v,_,M)}}R&1&&f.children!==p.children&&u(A,p.children)}else!O&&T==null&&Ce(A,p,V,K,v,_,I);((Z=K.onVnodeUpdated)||H)&&dt(()=>{Z&&Ut(Z,v,p,f),H&&$n(p,f,v,"updated")},_)},ie=(f,p,v,_,I,x,O)=>{for(let A=0;A<p.length;A++){const R=f[A],T=p[A],H=R.el&&(R.type===Me||!zn(R,T)||R.shapeFlag&70)?h(R.el):v;w(R,T,H,null,_,I,x,O,!0)}},Ce=(f,p,v,_,I,x,O)=>{if(v!==_){if(v!==we)for(const A in v)!Hi(A)&&!(A in _)&&i(f,A,v[A],null,O,p.children,I,x,M);for(const A in _){if(Hi(A))continue;const R=_[A],T=v[A];R!==T&&A!=="value"&&i(f,A,T,R,O,p.children,I,x,M)}"value"in _&&i(f,"value",v.value,_.value)}},F=(f,p,v,_,I,x,O,A,R)=>{const T=p.el=f?f.el:a(""),H=p.anchor=f?f.anchor:a("");let{patchFlag:V,dynamicChildren:K,slotScopeIds:Z}=p;Z&&(A=A?A.concat(Z):Z),f==null?(s(T,v,_),s(H,v,_),L(p.children,v,H,I,x,O,A,R)):V>0&&V&64&&K&&f.dynamicChildren?(ie(f.dynamicChildren,K,v,I,x,O,A),(p.key!=null||I&&p===I.subTree)&&np(f,p,!0)):ge(f,p,v,H,I,x,O,A,R)},ve=(f,p,v,_,I,x,O,A,R)=>{p.slotScopeIds=A,f==null?p.shapeFlag&512?I.ctx.activate(p,v,_,O,R):xe(p,v,_,I,x,O,R):Pe(f,p,R)},xe=(f,p,v,_,I,x,O)=>{const A=f.component=R0(f,_,I);if(qo(f)&&(A.ctx.renderer=ue),D0(A),A.asyncDep){if(I&&I.registerDep(A,Re),!f.el){const R=A.subTree=Te(Nt);k(null,R,p,v)}return}Re(A,f,p,v,I,x,O)},Pe=(f,p,v)=>{const _=p.component=f.component;if(qv(f,p,v))if(_.asyncDep&&!_.asyncResolved){Ee(_,p,v);return}else _.next=p,Uv(_.update),_.update();else p.el=f.el,_.vnode=p},Re=(f,p,v,_,I,x,O)=>{const A=()=>{if(f.isMounted){let{next:H,bu:V,u:K,parent:Z,vnode:oe}=f,Ie=H,ye;Bn(f,!1),H?(H.el=oe.el,Ee(f,H,O)):H=oe,V&&Ki(V),(ye=H.props&&H.props.onVnodeBeforeUpdate)&&Ut(ye,Z,H,oe),Bn(f,!0);const Ue=xa(f),St=f.subTree;f.subTree=Ue,w(St,Ue,h(St.el),D(St),f,I,x),H.el=Ue.el,Ie===null&&Hv(f,Ue.el),K&&dt(K,I),(ye=H.props&&H.props.onVnodeUpdated)&&dt(()=>Ut(ye,Z,H,oe),I)}else{let H;const{el:V,props:K}=p,{bm:Z,m:oe,parent:Ie}=f,ye=zi(p);if(Bn(f,!1),Z&&Ki(Z),!ye&&(H=K&&K.onVnodeBeforeMount)&&Ut(H,Ie,p),Bn(f,!0),V&&re){const Ue=()=>{f.subTree=xa(f),re(V,f.subTree,f,I,null)};ye?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Ue()):Ue()}else{const Ue=f.subTree=xa(f);w(null,Ue,v,_,f,I,x),p.el=Ue.el}if(oe&&dt(oe,I),!ye&&(H=K&&K.onVnodeMounted)){const Ue=p;dt(()=>Ut(H,Ie,Ue),I)}(p.shapeFlag&256||Ie&&zi(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&f.a&&dt(f.a,I),f.isMounted=!0,p=v=_=null}},R=f.effect=new ol(A,()=>pl(T),f.scope),T=f.update=()=>R.run();T.id=f.uid,Bn(f,!0),T()},Ee=(f,p,v)=>{p.component=f;const _=f.vnode.props;f.vnode=p,f.next=null,p0(f,p.props,_,v),y0(f,p.children,v),Ys(),eh(),Js()},ge=(f,p,v,_,I,x,O,A,R=!1)=>{const T=f&&f.children,H=f?f.shapeFlag:0,V=p.children,{patchFlag:K,shapeFlag:Z}=p;if(K>0){if(K&128){Vn(T,V,v,_,I,x,O,A,R);return}else if(K&256){It(T,V,v,_,I,x,O,A,R);return}}Z&8?(H&16&&M(T,I,x),V!==T&&u(v,V)):H&16?Z&16?Vn(T,V,v,_,I,x,O,A,R):M(T,I,x,!0):(H&8&&u(v,""),Z&16&&L(V,v,_,I,x,O,A,R))},It=(f,p,v,_,I,x,O,A,R)=>{f=f||Ss,p=p||Ss;const T=f.length,H=p.length,V=Math.min(T,H);let K;for(K=0;K<V;K++){const Z=p[K]=R?gn(p[K]):Ft(p[K]);w(f[K],Z,v,null,I,x,O,A,R)}T>H?M(f,I,x,!0,!1,V):L(p,v,_,I,x,O,A,R,V)},Vn=(f,p,v,_,I,x,O,A,R)=>{let T=0;const H=p.length;let V=f.length-1,K=H-1;for(;T<=V&&T<=K;){const Z=f[T],oe=p[T]=R?gn(p[T]):Ft(p[T]);if(zn(Z,oe))w(Z,oe,v,null,I,x,O,A,R);else break;T++}for(;T<=V&&T<=K;){const Z=f[V],oe=p[K]=R?gn(p[K]):Ft(p[K]);if(zn(Z,oe))w(Z,oe,v,null,I,x,O,A,R);else break;V--,K--}if(T>V){if(T<=K){const Z=K+1,oe=Z<H?p[Z].el:_;for(;T<=K;)w(null,p[T]=R?gn(p[T]):Ft(p[T]),v,oe,I,x,O,A,R),T++}}else if(T>K)for(;T<=V;)ht(f[T],I,x,!0),T++;else{const Z=T,oe=T,Ie=new Map;for(T=oe;T<=K;T++){const mt=p[T]=R?gn(p[T]):Ft(p[T]);mt.key!=null&&Ie.set(mt.key,T)}let ye,Ue=0;const St=K-oe+1;let vs=!1,ju=0;const ar=new Array(St);for(T=0;T<St;T++)ar[T]=0;for(T=Z;T<=V;T++){const mt=f[T];if(Ue>=St){ht(mt,I,x,!0);continue}let Lt;if(mt.key!=null)Lt=Ie.get(mt.key);else for(ye=oe;ye<=K;ye++)if(ar[ye-oe]===0&&zn(mt,p[ye])){Lt=ye;break}Lt===void 0?ht(mt,I,x,!0):(ar[Lt-oe]=T+1,Lt>=ju?ju=Lt:vs=!0,w(mt,p[Lt],v,null,I,x,O,A,R),Ue++)}const qu=vs?E0(ar):Ss;for(ye=qu.length-1,T=St-1;T>=0;T--){const mt=oe+T,Lt=p[mt],Hu=mt+1<H?p[mt+1].el:_;ar[T]===0?w(null,Lt,v,Hu,I,x,O,A,R):vs&&(ye<0||T!==qu[ye]?Tt(Lt,v,Hu,2):ye--)}}},Tt=(f,p,v,_,I=null)=>{const{el:x,type:O,transition:A,children:R,shapeFlag:T}=f;if(T&6){Tt(f.component.subTree,p,v,_);return}if(T&128){f.suspense.move(p,v,_);return}if(T&64){O.move(f,p,v,ue);return}if(O===Me){s(x,p,v);for(let V=0;V<R.length;V++)Tt(R[V],p,v,_);s(f.anchor,p,v);return}if(O===Gi){P(f,p,v);return}if(_!==2&&T&1&&A)if(_===0)A.beforeEnter(x),s(x,p,v),dt(()=>A.enter(x),I);else{const{leave:V,delayLeave:K,afterLeave:Z}=A,oe=()=>s(x,p,v),Ie=()=>{V(x,()=>{oe(),Z&&Z()})};K?K(x,oe,Ie):Ie()}else s(x,p,v)},ht=(f,p,v,_=!1,I=!1)=>{const{type:x,props:O,ref:A,children:R,dynamicChildren:T,shapeFlag:H,patchFlag:V,dirs:K}=f;if(A!=null&&hc(A,null,v,f,!0),H&256){p.ctx.deactivate(f);return}const Z=H&1&&K,oe=!zi(f);let Ie;if(oe&&(Ie=O&&O.onVnodeBeforeUnmount)&&Ut(Ie,p,f),H&6)b(f.component,v,_);else{if(H&128){f.suspense.unmount(v,_);return}Z&&$n(f,null,p,"beforeUnmount"),H&64?f.type.remove(f,p,v,I,ue,_):T&&(x!==Me||V>0&&V&64)?M(T,p,v,!1,!0):(x===Me&&V&384||!I&&H&16)&&M(R,p,v),_&&ys(f)}(oe&&(Ie=O&&O.onVnodeUnmounted)||Z)&&dt(()=>{Ie&&Ut(Ie,p,f),Z&&$n(f,null,p,"unmounted")},v)},ys=f=>{const{type:p,el:v,anchor:_,transition:I}=f;if(p===Me){Ri(v,_);return}if(p===Gi){z(f);return}const x=()=>{r(v),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(f.shapeFlag&1&&I&&!I.persisted){const{leave:O,delayLeave:A}=I,R=()=>O(v,x);A?A(f.el,x,R):R()}else x()},Ri=(f,p)=>{let v;for(;f!==p;)v=d(f),r(f),f=v;r(p)},b=(f,p,v)=>{const{bum:_,scope:I,update:x,subTree:O,um:A}=f;_&&Ki(_),I.stop(),x&&(x.active=!1,ht(O,f,p,v)),A&&dt(A,p),dt(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},M=(f,p,v,_=!1,I=!1,x=0)=>{for(let O=x;O<f.length;O++)ht(f[O],p,v,_,I)},D=f=>f.shapeFlag&6?D(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),j=(f,p,v)=>{f==null?p._vnode&&ht(p._vnode,null,null,!0):w(p._vnode||null,f,p,null,null,null,v),eh(),Lf(),p._vnode=f},ue={p:w,um:ht,m:Tt,r:ys,mt:xe,mc:L,pc:ge,pbc:ie,n:D,o:t};let De,re;return e&&([De,re]=e(ue)),{render:j,hydrate:De,createApp:w0(j,De)}}function Bn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function np(t,e,n=!1){const s=t.children,r=e.children;if(W(s)&&W(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=gn(r[i]),a.el=o.el),n||np(o,a))}}function E0(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const I0=t=>t.__isTeleport,Me=Symbol(void 0),vl=Symbol(void 0),Nt=Symbol(void 0),Gi=Symbol(void 0),br=[];let kt=null;function _e(t=!1){br.push(kt=t?null:[])}function T0(){br.pop(),kt=br[br.length-1]||null}let Ur=1;function lh(t){Ur+=t}function sp(t){return t.dynamicChildren=Ur>0?kt||Ss:null,T0(),Ur>0&&kt&&kt.push(t),t}function ze(t,e,n,s,r,i){return sp(y(t,e,n,s,r,i,!0))}function nn(t,e,n,s,r){return sp(Te(t,e,n,s,r,!0))}function dc(t){return t?t.__v_isVNode===!0:!1}function zn(t,e){return t.type===e.type&&t.key===e.key}const Ko="__vInternal",rp=({key:t})=>t!=null?t:null,Qi=({ref:t,ref_key:e,ref_for:n})=>t!=null?qe(t)||Le(t)||ne(t)?{i:At,r:t,k:e,f:!!n}:t:null;function y(t,e=null,n=null,s=0,r=null,i=t===Me?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&rp(e),ref:e&&Qi(e),scopeId:Vf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(_l(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=qe(n)?8:16),Ur>0&&!o&&kt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&kt.push(c),c}const Te=S0;function S0(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===o0)&&(t=Nt),dc(t)){const a=Nn(t,e,!0);return n&&_l(a,n),Ur>0&&!i&&kt&&(a.shapeFlag&6?kt[kt.indexOf(t)]=a:kt.push(a)),a.patchFlag|=-2,a}if(M0(t)&&(t=t.__vccOpts),e){e=C0(e);let{class:a,style:c}=e;a&&!qe(a)&&(e.class=tl(a)),be(c)&&(kf(c)&&!W(c)&&(c=Je({},c)),e.style=el(c))}const o=qe(t)?1:Kv(t)?128:I0(t)?64:be(t)?4:ne(t)?2:0;return y(t,e,n,s,r,o,i,!0)}function C0(t){return t?kf(t)||Ko in t?Je({},t):t:null}function Nn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?A0(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&rp(a),ref:e&&e.ref?n&&r?W(r)?r.concat(Qi(e)):[r,Qi(e)]:Qi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Me?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Nn(t.ssContent),ssFallback:t.ssFallback&&Nn(t.ssFallback),el:t.el,anchor:t.anchor}}function wl(t=" ",e=0){return Te(vl,null,t,e)}function ip(t,e){const n=Te(Gi,null,t);return n.staticCount=e,n}function lo(t="",e=!1){return e?(_e(),nn(Nt,null,t)):Te(Nt,null,t)}function Ft(t){return t==null||typeof t=="boolean"?Te(Nt):W(t)?Te(Me,null,t.slice()):typeof t=="object"?gn(t):Te(vl,null,String(t))}function gn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Nn(t)}function _l(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),_l(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Ko in e)?e._ctx=At:r===3&&At&&(At.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ne(e)?(e={default:e,_ctx:At},n=32):(e=String(e),s&64?(n=16,e=[wl(e)]):n=8);t.children=e,t.shapeFlag|=n}function A0(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=tl([e.class,s.class]));else if(r==="style")e.style=el([e.style,s.style]);else if(Uo(r)){const i=e[r],o=s[r];o&&i!==o&&!(W(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ut(t,e,n,s=null){bt(t,e,7,[n,s])}const k0=tp();let x0=0;function R0(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||k0,i={uid:x0++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new mf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yf(s,r),emitsOptions:Ff(s,r),emit:null,emitted:null,propsDefaults:we,inheritAttrs:s.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=$v.bind(null,i),t.ce&&t.ce(i),i}let Xe=null;const op=()=>Xe||At,Ls=t=>{Xe=t,t.scope.on()},ns=()=>{Xe&&Xe.scope.off(),Xe=null};function ap(t){return t.vnode.shapeFlag&4}let Fr=!1;function D0(t,e=!1){Fr=e;const{props:n,children:s}=t.vnode,r=ap(t);f0(t,n,r,e),g0(t,s);const i=r?N0(t,e):void 0;return Fr=!1,i}function N0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ms(new Proxy(t.ctx,a0));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?P0(t):null;Ls(t),Ys();const i=Sn(s,t,0,[t.props,r]);if(Js(),ns(),hf(i)){if(i.then(ns,ns),e)return i.then(o=>{uh(t,o,e)}).catch(o=>{Bo(o,t,0)});t.asyncDep=i}else uh(t,i,e)}else cp(t,e)}function uh(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:be(e)&&(t.setupState=Nf(e)),cp(t,n)}let hh;function cp(t,e,n){const s=t.type;if(!t.render){if(!e&&hh&&!s.render){const r=s.template||gl(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Je(Je({isCustomElement:i,delimiters:a},o),c);s.render=hh(r,l)}}t.render=s.render||xt}Ls(t),Ys(),c0(t),Js(),ns()}function O0(t){return new Proxy(t.attrs,{get(e,n){return vt(t,"get","$attrs"),e[n]}})}function P0(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=O0(t))},slots:t.slots,emit:t.emit,expose:e}}function Wo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Nf(Ms(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _r)return _r[n](t)},has(e,n){return n in e||n in _r}}))}function M0(t){return ne(t)&&"__vccOpts"in t}const lt=(t,e)=>Pv(t,e,Fr);function bl(t,e,n){const s=arguments.length;return s===2?be(e)&&!W(e)?dc(e)?Te(t,null,[e]):Te(t,e):Te(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&dc(n)&&(n=[n]),Te(t,e,n))}const L0=Symbol(""),U0=()=>Rt(L0),F0="3.2.44",V0="http://www.w3.org/2000/svg",Gn=typeof document<"u"?document:null,dh=Gn&&Gn.createElement("template"),$0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Gn.createElementNS(V0,t):Gn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Gn.createTextNode(t),createComment:t=>Gn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Gn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{dh.innerHTML=s?`<svg>${t}</svg>`:t;const a=dh.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function B0(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function j0(t,e,n){const s=t.style,r=qe(n);if(n&&!r){for(const i in n)fc(s,i,n[i]);if(e&&!qe(e))for(const i in e)n[i]==null&&fc(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const fh=/\s*!important$/;function fc(t,e,n){if(W(n))n.forEach(s=>fc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=q0(t,e);fh.test(n)?t.setProperty(Xs(s),n.replace(fh,""),"important"):t[s]=n}}const ph=["Webkit","Moz","ms"],Da={};function q0(t,e){const n=Da[e];if(n)return n;let s=Ns(e);if(s!=="filter"&&s in t)return Da[e]=s;s=pf(s);for(let r=0;r<ph.length;r++){const i=ph[r]+s;if(i in t)return Da[e]=i}return e}const mh="http://www.w3.org/1999/xlink";function H0(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(mh,e.slice(6,e.length)):t.setAttributeNS(mh,e,n);else{const i=jy(e);n==null||i&&!lf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function K0(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=lf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Qn(t,e,n,s){t.addEventListener(e,n,s)}function W0(t,e,n,s){t.removeEventListener(e,n,s)}function z0(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=G0(e);if(s){const l=i[e]=Y0(s,r);Qn(t,a,l,c)}else o&&(W0(t,a,o,c),i[e]=void 0)}}const gh=/(?:Once|Passive|Capture)$/;function G0(t){let e;if(gh.test(t)){e={};let s;for(;s=t.match(gh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Xs(t.slice(2)),e]}let Na=0;const Q0=Promise.resolve(),X0=()=>Na||(Q0.then(()=>Na=0),Na=Date.now());function Y0(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;bt(J0(s,n.value),e,5,[s])};return n.value=t,n.attached=X0(),n}function J0(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const yh=/^on[a-z]/,Z0=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?B0(t,s,r):e==="style"?j0(t,n,s):Uo(e)?nl(e)||z0(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ew(t,e,s,r))?K0(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),H0(t,e,s,r))};function ew(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&yh.test(e)&&ne(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||yh.test(e)&&qe(n)?!1:e in t}const dn="transition",cr="animation",Wt=(t,{slots:e})=>bl(jf,tw(t),e);Wt.displayName="Transition";const lp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Wt.props=Je({},jf.props,lp);const jn=(t,e=[])=>{W(t)?t.forEach(n=>n(...e)):t&&t(...e)},vh=t=>t?W(t)?t.some(e=>e.length>1):t.length>1:!1;function tw(t){const e={};for(const F in t)F in lp||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,g=nw(r),w=g&&g[0],C=g&&g[1],{onBeforeEnter:k,onEnter:N,onEnterCancelled:P,onLeave:z,onLeaveCancelled:X,onBeforeAppear:fe=k,onAppear:J=N,onAppearCancelled:L=P}=e,se=(F,ve,xe)=>{qn(F,ve?u:a),qn(F,ve?l:o),xe&&xe()},ie=(F,ve)=>{F._isLeaving=!1,qn(F,h),qn(F,m),qn(F,d),ve&&ve()},Ce=F=>(ve,xe)=>{const Pe=F?J:N,Re=()=>se(ve,F,xe);jn(Pe,[ve,Re]),wh(()=>{qn(ve,F?c:i),fn(ve,F?u:a),vh(Pe)||_h(ve,s,w,Re)})};return Je(e,{onBeforeEnter(F){jn(k,[F]),fn(F,i),fn(F,o)},onBeforeAppear(F){jn(fe,[F]),fn(F,c),fn(F,l)},onEnter:Ce(!1),onAppear:Ce(!0),onLeave(F,ve){F._isLeaving=!0;const xe=()=>ie(F,ve);fn(F,h),iw(),fn(F,d),wh(()=>{!F._isLeaving||(qn(F,h),fn(F,m),vh(z)||_h(F,s,C,xe))}),jn(z,[F,xe])},onEnterCancelled(F){se(F,!1),jn(P,[F])},onAppearCancelled(F){se(F,!0),jn(L,[F])},onLeaveCancelled(F){ie(F),jn(X,[F])}})}function nw(t){if(t==null)return null;if(be(t))return[Oa(t.enter),Oa(t.leave)];{const e=Oa(t);return[e,e]}}function Oa(t){return Os(t)}function fn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function qn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function wh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let sw=0;function _h(t,e,n,s){const r=t._endId=++sw,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=rw(t,e);if(!o)return s();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,d),i()},d=m=>{m.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,d)}function rw(t,e){const n=window.getComputedStyle(t),s=g=>(n[g]||"").split(", "),r=s(`${dn}Delay`),i=s(`${dn}Duration`),o=bh(r,i),a=s(`${cr}Delay`),c=s(`${cr}Duration`),l=bh(a,c);let u=null,h=0,d=0;e===dn?o>0&&(u=dn,h=o,d=i.length):e===cr?l>0&&(u=cr,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?dn:cr:null,d=u?u===dn?i.length:c.length:0);const m=u===dn&&/\b(transform|all)(,|$)/.test(s(`${dn}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:m}}function bh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Eh(n)+Eh(t[s])))}function Eh(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function iw(){return document.body.offsetHeight}const uo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>Ki(e,n):e};function ow(t){t.target.composing=!0}function Ih(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Us={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=uo(r);const i=s||r.props&&r.props.type==="number";Qn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Os(a)),t._assign(a)}),n&&Qn(t,"change",()=>{t.value=t.value.trim()}),e||(Qn(t,"compositionstart",ow),Qn(t,"compositionend",Ih),Qn(t,"change",Ih))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=uo(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Os(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},aw={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Fo(e);Qn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Os(ho(o)):ho(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=uo(s)},mounted(t,{value:e}){Th(t,e)},beforeUpdate(t,e,n){t._assign=uo(n)},updated(t,{value:e}){Th(t,e)}};function Th(t,e){const n=t.multiple;if(!(n&&!W(e)&&!Fo(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=ho(i);if(n)W(e)?i.selected=Hy(e,o)>-1:i.selected=e.has(o);else if(Lo(ho(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ho(t){return"_value"in t?t._value:t.value}const cw=["ctrl","shift","alt","meta"],lw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>cw.some(n=>t[`${n}Key`]&&!e.includes(n))},Fs=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=lw[e[r]];if(i&&i(n,e))return}return t(n,...s)},Xi={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):lr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),lr(t,!0),s.enter(t)):s.leave(t,()=>{lr(t,!1)}):lr(t,e))},beforeUnmount(t,{value:e}){lr(t,e)}};function lr(t,e){t.style.display=e?t._vod:"none"}const uw=Je({patchProp:Z0},$0);let Sh;function hw(){return Sh||(Sh=_0(uw))}const dw=(...t)=>{const e=hw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=fw(s);if(!r)return;const i=e._component;!ne(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function fw(t){return qe(t)?document.querySelector(t):t}var pw=!1;/*!
  * pinia v2.0.32
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let up;const zo=t=>up=t,hp=Symbol();function pc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Er;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Er||(Er={}));function mw(){const t=gf(!0),e=t.run(()=>Ne({}));let n=[],s=[];const r=Ms({install(i){zo(r),r._a=i,i.provide(hp,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!pw?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const dp=()=>{};function Ch(t,e,n,s=dp){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&Zy()&&ev(r),r}function ws(t,...e){t.slice().forEach(n=>{n(...e)})}function mc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];pc(r)&&pc(s)&&t.hasOwnProperty(n)&&!Le(s)&&!In(s)?t[n]=mc(r,s):t[n]=s}return t}const gw=Symbol();function yw(t){return!pc(t)||!t.hasOwnProperty(gw)}const{assign:yn}=Object;function vw(t){return!!(Le(t)&&t.effect)}function ww(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=Rv(n.state.value[t]);return yn(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=Ms(lt(()=>{zo(n);const m=n._s.get(t);return o[d].call(m,m)})),h),{}))}return c=fp(t,l,e,n,s,!0),c.$reset=function(){const h=r?r():{};this.$patch(d=>{yn(d,h)})},c}function fp(t,e,n={},s,r,i){let o;const a=yn({actions:{}},n),c={deep:!0};let l,u,h=Ms([]),d=Ms([]),m;const g=s.state.value[t];!i&&!g&&(s.state.value[t]={}),Ne({});let w;function C(J){let L;l=u=!1,typeof J=="function"?(J(s.state.value[t]),L={type:Er.patchFunction,storeId:t,events:m}):(mc(s.state.value[t],J),L={type:Er.patchObject,payload:J,storeId:t,events:m});const se=w=Symbol();fl().then(()=>{w===se&&(l=!0)}),u=!0,ws(h,L,s.state.value[t])}const k=dp;function N(){o.stop(),h=[],d=[],s._s.delete(t)}function P(J,L){return function(){zo(s);const se=Array.from(arguments),ie=[],Ce=[];function F(Pe){ie.push(Pe)}function ve(Pe){Ce.push(Pe)}ws(d,{args:se,name:J,store:X,after:F,onError:ve});let xe;try{xe=L.apply(this&&this.$id===t?this:X,se)}catch(Pe){throw ws(Ce,Pe),Pe}return xe instanceof Promise?xe.then(Pe=>(ws(ie,Pe),Pe)).catch(Pe=>(ws(Ce,Pe),Promise.reject(Pe))):(ws(ie,xe),xe)}}const z={_p:s,$id:t,$onAction:Ch.bind(null,d),$patch:C,$reset:k,$subscribe(J,L={}){const se=Ch(h,J,L.detached,()=>ie()),ie=o.run(()=>wr(()=>s.state.value[t],Ce=>{(L.flush==="sync"?u:l)&&J({storeId:t,type:Er.direct,events:m},Ce)},yn({},c,L)));return se},$dispose:N},X=Zs(z);s._s.set(t,X);const fe=s._e.run(()=>(o=gf(),o.run(()=>e())));for(const J in fe){const L=fe[J];if(Le(L)&&!vw(L)||In(L))i||(g&&yw(L)&&(Le(L)?L.value=g[J]:mc(L,g[J])),s.state.value[t][J]=L);else if(typeof L=="function"){const se=P(J,L);fe[J]=se,a.actions[J]=L}}return yn(X,fe),yn(he(X),fe),Object.defineProperty(X,"$state",{get:()=>s.state.value[t],set:J=>{C(L=>{yn(L,J)})}}),s._p.forEach(J=>{yn(X,o.run(()=>J({store:X,app:s._a,pinia:s,options:a})))}),g&&i&&n.hydrate&&n.hydrate(X.$state,g),l=!0,u=!0,X}function _w(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=op();return a=a||l&&Rt(hp,null),a&&zo(a),a=up,a._s.has(s)||(i?fp(s,e,r,a):ww(s,r,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const bs=typeof window<"u";function bw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const me=Object.assign;function Pa(t,e){const n={};for(const s in e){const r=e[s];n[s]=Pt(r)?r.map(t):t(r)}return n}const Ir=()=>{},Pt=Array.isArray,Ew=/\/$/,Iw=t=>t.replace(Ew,"");function Ma(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Aw(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function Tw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ah(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Sw(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Vs(e.matched[s],n.matched[r])&&pp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Vs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function pp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Cw(t[n],e[n]))return!1;return!0}function Cw(t,e){return Pt(t)?kh(t,e):Pt(e)?kh(e,t):t===e}function kh(t,e){return Pt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Aw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Vr;(function(t){t.pop="pop",t.push="push"})(Vr||(Vr={}));var Tr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Tr||(Tr={}));function kw(t){if(!t)if(bs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Iw(t)}const xw=/^[^#]+#/;function Rw(t,e){return t.replace(xw,"#")+e}function Dw(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Go=()=>({left:window.pageXOffset,top:window.pageYOffset});function Nw(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Dw(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function xh(t,e){return(history.state?history.state.position-e:-1)+t}const gc=new Map;function Ow(t,e){gc.set(t,e)}function Pw(t){const e=gc.get(t);return gc.delete(t),e}let Mw=()=>location.protocol+"//"+location.host;function mp(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Ah(c,"")}return Ah(n,t)+s+r}function Lw(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const m=mp(t,location),g=n.value,w=e.value;let C=0;if(d){if(n.value=m,e.value=d,o&&o===g){o=null;return}C=w?d.position-w.position:0}else s(m);r.forEach(k=>{k(n.value,g,{delta:C,type:Vr.pop,direction:C?C>0?Tr.forward:Tr.back:Tr.unknown})})};function c(){o=n.value}function l(d){r.push(d);const m=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return i.push(m),m}function u(){const{history:d}=window;!d.state||d.replaceState(me({},d.state,{scroll:Go()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Rh(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Go():null}}function Uw(t){const{history:e,location:n}=window,s={value:mp(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Mw()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(c,l){const u=me({},e.state,Rh(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=me({},r.value,e.state,{forward:c,scroll:Go()});i(u.current,u,!0);const h=me({},Rh(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function Fw(t){t=kw(t);const e=Uw(t),n=Lw(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=me({location:"",base:t,go:s,createHref:Rw.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Vw(t){return typeof t=="string"||t&&typeof t=="object"}function gp(t){return typeof t=="string"||typeof t=="symbol"}const pn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},yp=Symbol("");var Dh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Dh||(Dh={}));function $s(t,e){return me(new Error,{type:t,[yp]:!0},e)}function Gt(t,e){return t instanceof Error&&yp in t&&(e==null||!!(t.type&e))}const Nh="[^/]+?",$w={sensitive:!1,strict:!1,start:!0,end:!0},Bw=/[.+*?^${}()[\]/\\]/g;function jw(t,e){const n=me({},$w,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let m=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(Bw,"\\$&"),m+=40;else if(d.type===1){const{value:g,repeatable:w,optional:C,regexp:k}=d;i.push({name:g,repeatable:w,optional:C});const N=k||Nh;if(N!==Nh){m+=10;try{new RegExp(`(${N})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${g}" (${N}): `+z.message)}}let P=w?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;h||(P=C&&l.length<2?`(?:/${P})`:"/"+P),C&&(P+="?"),r+=P,m+=20,C&&(m+=-8),w&&(m+=-20),N===".*"&&(m+=-50)}u.push(m)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",g=i[d-1];h[g.name]=m&&g.repeatable?m.split("/"):m}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:g,repeatable:w,optional:C}=m,k=g in l?l[g]:"";if(Pt(k)&&!w)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const N=Pt(k)?k.join("/"):k;if(!N)if(C)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=N}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function qw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Hw(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=qw(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Oh(s))return 1;if(Oh(r))return-1}return r.length-s.length}function Oh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Kw={type:0,value:""},Ww=/[a-zA-Z0-9_]/;function zw(t){if(!t)return[[]];if(t==="/")return[[Kw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:Ww.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function Gw(t,e,n){const s=jw(zw(t.path),n),r=me(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Qw(t,e){const n=[],s=new Map;e=Lh({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const m=!d,g=Xw(u);g.aliasOf=d&&d.record;const w=Lh(e,u),C=[g];if("alias"in u){const P=typeof u.alias=="string"?[u.alias]:u.alias;for(const z of P)C.push(me({},g,{components:d?d.record.components:g.components,path:z,aliasOf:d?d.record:g}))}let k,N;for(const P of C){const{path:z}=P;if(h&&z[0]!=="/"){const X=h.record.path,fe=X[X.length-1]==="/"?"":"/";P.path=h.record.path+(z&&fe+z)}if(k=Gw(P,h,w),d?d.alias.push(k):(N=N||k,N!==k&&N.alias.push(k),m&&u.name&&!Mh(k)&&o(u.name)),g.children){const X=g.children;for(let fe=0;fe<X.length;fe++)i(X[fe],k,d&&d.children[fe])}d=d||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return N?()=>{o(N)}:Ir}function o(u){if(gp(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&Hw(u,n[h])>=0&&(u.record.path!==n[h].record.path||!vp(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Mh(u)&&s.set(u.record.name,u)}function l(u,h){let d,m={},g,w;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw $s(1,{location:u});w=d.record.name,m=me(Ph(h.params,d.keys.filter(N=>!N.optional).map(N=>N.name)),u.params&&Ph(u.params,d.keys.map(N=>N.name))),g=d.stringify(m)}else if("path"in u)g=u.path,d=n.find(N=>N.re.test(g)),d&&(m=d.parse(g),w=d.record.name);else{if(d=h.name?s.get(h.name):n.find(N=>N.re.test(h.path)),!d)throw $s(1,{location:u,currentLocation:h});w=d.record.name,m=me({},h.params,u.params),g=d.stringify(m)}const C=[];let k=d;for(;k;)C.unshift(k.record),k=k.parent;return{name:w,path:g,params:m,matched:C,meta:Jw(C)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Ph(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Xw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Yw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Yw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Mh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Jw(t){return t.reduce((e,n)=>me(e,n.meta),{})}function Lh(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function vp(t,e){return e.children.some(n=>n===t||vp(t,n))}const wp=/#/g,Zw=/&/g,e_=/\//g,t_=/=/g,n_=/\?/g,_p=/\+/g,s_=/%5B/g,r_=/%5D/g,bp=/%5E/g,i_=/%60/g,Ep=/%7B/g,o_=/%7C/g,Ip=/%7D/g,a_=/%20/g;function El(t){return encodeURI(""+t).replace(o_,"|").replace(s_,"[").replace(r_,"]")}function c_(t){return El(t).replace(Ep,"{").replace(Ip,"}").replace(bp,"^")}function yc(t){return El(t).replace(_p,"%2B").replace(a_,"+").replace(wp,"%23").replace(Zw,"%26").replace(i_,"`").replace(Ep,"{").replace(Ip,"}").replace(bp,"^")}function l_(t){return yc(t).replace(t_,"%3D")}function u_(t){return El(t).replace(wp,"%23").replace(n_,"%3F")}function h_(t){return t==null?"":u_(t).replace(e_,"%2F")}function fo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function d_(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(_p," "),o=i.indexOf("="),a=fo(o<0?i:i.slice(0,o)),c=o<0?null:fo(i.slice(o+1));if(a in e){let l=e[a];Pt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Uh(t){let e="";for(let n in t){const s=t[n];if(n=l_(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Pt(s)?s.map(i=>i&&yc(i)):[s&&yc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function f_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Pt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const p_=Symbol(""),Fh=Symbol(""),Qo=Symbol(""),Tp=Symbol(""),vc=Symbol("");function ur(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function vn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a($s(4,{from:n,to:e})):h instanceof Error?a(h):Vw(h)?a($s(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function La(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(m_(a)){const l=(a.__vccOpts||a)[e];l&&r.push(vn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=bw(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&vn(d,n,s,i,o)()}))}}return r}function m_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Vh(t){const e=Rt(Qo),n=Rt(Tp),s=lt(()=>e.resolve(Tn(t.to))),r=lt(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Vs.bind(null,u));if(d>-1)return d;const m=$h(c[l-2]);return l>1&&$h(u)===m&&h[h.length-1].path!==m?h.findIndex(Vs.bind(null,c[l-2])):d}),i=lt(()=>r.value>-1&&w_(n.params,s.value.params)),o=lt(()=>r.value>-1&&r.value===n.matched.length-1&&pp(n.params,s.value.params));function a(c={}){return v_(c)?e[Tn(t.replace)?"replace":"push"](Tn(t.to)).catch(Ir):Promise.resolve()}return{route:s,href:lt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const g_=Kf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Vh,setup(t,{slots:e}){const n=Zs(Vh(t)),{options:s}=Rt(Qo),r=lt(()=>({[Bh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Bh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:bl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),y_=g_;function v_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function w_(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Pt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function $h(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Bh=(t,e,n)=>t!=null?t:e!=null?e:n,__=Kf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Rt(vc),r=lt(()=>t.route||s.value),i=Rt(Fh,0),o=lt(()=>{let l=Tn(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=lt(()=>r.value.matched[o.value]);Wi(Fh,lt(()=>o.value+1)),Wi(p_,a),Wi(vc,r);const c=Ne();return wr(()=>[c.value,a.value,t.name],([l,u,h],[d,m,g])=>{u&&(u.instances[h]=l,m&&m!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!Vs(u,m)||!d)&&(u.enterCallbacks[h]||[]).forEach(w=>w(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return jh(n.default,{Component:d,route:l});const m=h.props[u],g=m?m===!0?l.params:typeof m=="function"?m(l):m:null,C=bl(d,me({},g,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return jh(n.default,{Component:C,route:l})||C}}});function jh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Sp=__;function b_(t){const e=Qw(t.routes,t),n=t.parseQuery||d_,s=t.stringifyQuery||Uh,r=t.history,i=ur(),o=ur(),a=ur(),c=Av(pn);let l=pn;bs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Pa.bind(null,b=>""+b),h=Pa.bind(null,h_),d=Pa.bind(null,fo);function m(b,M){let D,j;return gp(b)?(D=e.getRecordMatcher(b),j=M):j=b,e.addRoute(j,D)}function g(b){const M=e.getRecordMatcher(b);M&&e.removeRoute(M)}function w(){return e.getRoutes().map(b=>b.record)}function C(b){return!!e.getRecordMatcher(b)}function k(b,M){if(M=me({},M||c.value),typeof b=="string"){const f=Ma(n,b,M.path),p=e.resolve({path:f.path},M),v=r.createHref(f.fullPath);return me(f,p,{params:d(p.params),hash:fo(f.hash),redirectedFrom:void 0,href:v})}let D;if("path"in b)D=me({},b,{path:Ma(n,b.path,M.path).path});else{const f=me({},b.params);for(const p in f)f[p]==null&&delete f[p];D=me({},b,{params:h(b.params)}),M.params=h(M.params)}const j=e.resolve(D,M),ue=b.hash||"";j.params=u(d(j.params));const De=Tw(s,me({},b,{hash:c_(ue),path:j.path})),re=r.createHref(De);return me({fullPath:De,hash:ue,query:s===Uh?f_(b.query):b.query||{}},j,{redirectedFrom:void 0,href:re})}function N(b){return typeof b=="string"?Ma(n,b,c.value.path):me({},b)}function P(b,M){if(l!==b)return $s(8,{from:M,to:b})}function z(b){return J(b)}function X(b){return z(me(N(b),{replace:!0}))}function fe(b){const M=b.matched[b.matched.length-1];if(M&&M.redirect){const{redirect:D}=M;let j=typeof D=="function"?D(b):D;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=N(j):{path:j},j.params={}),me({query:b.query,hash:b.hash,params:"path"in j?{}:b.params},j)}}function J(b,M){const D=l=k(b),j=c.value,ue=b.state,De=b.force,re=b.replace===!0,f=fe(D);if(f)return J(me(N(f),{state:typeof f=="object"?me({},ue,f.state):ue,force:De,replace:re}),M||D);const p=D;p.redirectedFrom=M;let v;return!De&&Sw(s,j,D)&&(v=$s(16,{to:p,from:j}),Vn(j,j,!0,!1)),(v?Promise.resolve(v):se(p,j)).catch(_=>Gt(_)?Gt(_,2)?_:It(_):Ee(_,p,j)).then(_=>{if(_){if(Gt(_,2))return J(me({replace:re},N(_.to),{state:typeof _.to=="object"?me({},ue,_.to.state):ue,force:De}),M||p)}else _=Ce(p,j,!0,re,ue);return ie(p,j,_),_})}function L(b,M){const D=P(b,M);return D?Promise.reject(D):Promise.resolve()}function se(b,M){let D;const[j,ue,De]=E_(b,M);D=La(j.reverse(),"beforeRouteLeave",b,M);for(const f of j)f.leaveGuards.forEach(p=>{D.push(vn(p,b,M))});const re=L.bind(null,b,M);return D.push(re),_s(D).then(()=>{D=[];for(const f of i.list())D.push(vn(f,b,M));return D.push(re),_s(D)}).then(()=>{D=La(ue,"beforeRouteUpdate",b,M);for(const f of ue)f.updateGuards.forEach(p=>{D.push(vn(p,b,M))});return D.push(re),_s(D)}).then(()=>{D=[];for(const f of b.matched)if(f.beforeEnter&&!M.matched.includes(f))if(Pt(f.beforeEnter))for(const p of f.beforeEnter)D.push(vn(p,b,M));else D.push(vn(f.beforeEnter,b,M));return D.push(re),_s(D)}).then(()=>(b.matched.forEach(f=>f.enterCallbacks={}),D=La(De,"beforeRouteEnter",b,M),D.push(re),_s(D))).then(()=>{D=[];for(const f of o.list())D.push(vn(f,b,M));return D.push(re),_s(D)}).catch(f=>Gt(f,8)?f:Promise.reject(f))}function ie(b,M,D){for(const j of a.list())j(b,M,D)}function Ce(b,M,D,j,ue){const De=P(b,M);if(De)return De;const re=M===pn,f=bs?history.state:{};D&&(j||re?r.replace(b.fullPath,me({scroll:re&&f&&f.scroll},ue)):r.push(b.fullPath,ue)),c.value=b,Vn(b,M,D,re),It()}let F;function ve(){F||(F=r.listen((b,M,D)=>{if(!Ri.listening)return;const j=k(b),ue=fe(j);if(ue){J(me(ue,{replace:!0}),j).catch(Ir);return}l=j;const De=c.value;bs&&Ow(xh(De.fullPath,D.delta),Go()),se(j,De).catch(re=>Gt(re,12)?re:Gt(re,2)?(J(re.to,j).then(f=>{Gt(f,20)&&!D.delta&&D.type===Vr.pop&&r.go(-1,!1)}).catch(Ir),Promise.reject()):(D.delta&&r.go(-D.delta,!1),Ee(re,j,De))).then(re=>{re=re||Ce(j,De,!1),re&&(D.delta&&!Gt(re,8)?r.go(-D.delta,!1):D.type===Vr.pop&&Gt(re,20)&&r.go(-1,!1)),ie(j,De,re)}).catch(Ir)}))}let xe=ur(),Pe=ur(),Re;function Ee(b,M,D){It(b);const j=Pe.list();return j.length?j.forEach(ue=>ue(b,M,D)):console.error(b),Promise.reject(b)}function ge(){return Re&&c.value!==pn?Promise.resolve():new Promise((b,M)=>{xe.add([b,M])})}function It(b){return Re||(Re=!b,ve(),xe.list().forEach(([M,D])=>b?D(b):M()),xe.reset()),b}function Vn(b,M,D,j){const{scrollBehavior:ue}=t;if(!bs||!ue)return Promise.resolve();const De=!D&&Pw(xh(b.fullPath,0))||(j||!D)&&history.state&&history.state.scroll||null;return fl().then(()=>ue(b,M,De)).then(re=>re&&Nw(re)).catch(re=>Ee(re,b,M))}const Tt=b=>r.go(b);let ht;const ys=new Set,Ri={currentRoute:c,listening:!0,addRoute:m,removeRoute:g,hasRoute:C,getRoutes:w,resolve:k,options:t,push:z,replace:X,go:Tt,back:()=>Tt(-1),forward:()=>Tt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Pe.add,isReady:ge,install(b){const M=this;b.component("RouterLink",y_),b.component("RouterView",Sp),b.config.globalProperties.$router=M,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Tn(c)}),bs&&!ht&&c.value===pn&&(ht=!0,z(r.location).catch(ue=>{}));const D={};for(const ue in pn)D[ue]=lt(()=>c.value[ue]);b.provide(Qo,M),b.provide(Tp,Zs(D)),b.provide(vc,c);const j=b.unmount;ys.add(b),b.unmount=function(){ys.delete(b),ys.size<1&&(l=pn,F&&F(),F=null,c.value=pn,ht=!1,Re=!1),j()}}};return Ri}function _s(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function E_(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Vs(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Vs(l,c))||r.push(c))}return[n,s,r]}function Il(){return Rt(Qo)}const I_={__name:"App",setup(t){return(e,n)=>(_e(),nn(Tn(Sp)))}};/**
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
 */const Cp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},T_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ap={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(d=64)),s.push(n[u],n[h],n[d],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):T_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),l!==64){const m=a<<4&240|l>>2;if(s.push(m),h!==64){const g=l<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},S_=function(t){const e=Cp(t);return Ap.encodeByteArray(e,!0)},po=function(t){return S_(t).replace(/\./g,"")},kp=function(t){try{return Ap.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const A_=()=>C_().__FIREBASE_DEFAULTS__,k_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},x_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kp(t[1]);return e&&JSON.parse(e)},Tl=()=>{try{return A_()||k_()||x_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xp=t=>{var e,n;return(n=(e=Tl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},R_=t=>{const e=xp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},D_=()=>{var t;return(t=Tl())===null||t===void 0?void 0:t.config},Rp=t=>{var e;return(e=Tl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class N_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function O_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[po(JSON.stringify(n)),po(JSON.stringify(o)),a].join(".")}/**
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
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function P_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function M_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function L_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function U_(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function F_(){try{return typeof indexedDB=="object"}catch{return!1}}function V_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const $_="FirebaseError";class un extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=$_,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,si.prototype.create)}}class si{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?B_(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new un(r,a,s)}}function B_(t,e){return t.replace(j_,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const j_=/\{\$([^}]+)}/g;function q_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(qh(i)&&qh(o)){if(!mo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function qh(t){return t!==null&&typeof t=="object"}/**
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
 */function ri(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function fr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function pr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function H_(t,e){const n=new K_(t,e);return n.subscribe.bind(n)}class K_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");W_(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Ua),r.error===void 0&&(r.error=Ua),r.complete===void 0&&(r.complete=Ua);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function W_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ua(){}/**
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
 */function He(t){return t&&t._delegate?t._delegate:t}class os{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Kn="[DEFAULT]";/**
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
 */class z_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new N_;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Q_(e))try{this.getOrInitializeService({instanceIdentifier:Kn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Kn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kn){return this.instances.has(e)}getOptions(e=Kn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:G_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Kn){return this.component?this.component.multipleInstances?e:Kn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function G_(t){return t===Kn?void 0:t}function Q_(t){return t.instantiationMode==="EAGER"}/**
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
 */class X_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new z_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const Y_={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},J_=de.INFO,Z_={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},eb=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Z_[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sl{constructor(e){this.name=e,this._logLevel=J_,this._logHandler=eb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Y_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const tb=(t,e)=>e.some(n=>t instanceof n);let Hh,Kh;function nb(){return Hh||(Hh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sb(){return Kh||(Kh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dp=new WeakMap,wc=new WeakMap,Np=new WeakMap,Fa=new WeakMap,Cl=new WeakMap;function rb(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Cn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Dp.set(n,t)}).catch(()=>{}),Cl.set(e,t),e}function ib(t){if(wc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});wc.set(t,e)}let _c={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Np.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ob(t){_c=t(_c)}function ab(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Va(this),e,...n);return Np.set(s,e.sort?e.sort():[e]),Cn(s)}:sb().includes(t)?function(...e){return t.apply(Va(this),e),Cn(Dp.get(this))}:function(...e){return Cn(t.apply(Va(this),e))}}function cb(t){return typeof t=="function"?ab(t):(t instanceof IDBTransaction&&ib(t),tb(t,nb())?new Proxy(t,_c):t)}function Cn(t){if(t instanceof IDBRequest)return rb(t);if(Fa.has(t))return Fa.get(t);const e=cb(t);return e!==t&&(Fa.set(t,e),Cl.set(e,t)),e}const Va=t=>Cl.get(t);function lb(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Cn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Cn(o.result),c.oldVersion,c.newVersion,Cn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const ub=["get","getKey","getAll","getAllKeys","count"],hb=["put","add","delete","clear"],$a=new Map;function Wh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($a.get(e))return $a.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=hb.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||ub.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return $a.set(e,i),i}ob(t=>({...t,get:(e,n,s)=>Wh(e,n)||t.get(e,n,s),has:(e,n)=>!!Wh(e,n)||t.has(e,n)}));/**
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
 */class db{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fb(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function fb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bc="@firebase/app",zh="0.9.3";/**
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
 */const as=new Sl("@firebase/app"),pb="@firebase/app-compat",mb="@firebase/analytics-compat",gb="@firebase/analytics",yb="@firebase/app-check-compat",vb="@firebase/app-check",wb="@firebase/auth",_b="@firebase/auth-compat",bb="@firebase/database",Eb="@firebase/database-compat",Ib="@firebase/functions",Tb="@firebase/functions-compat",Sb="@firebase/installations",Cb="@firebase/installations-compat",Ab="@firebase/messaging",kb="@firebase/messaging-compat",xb="@firebase/performance",Rb="@firebase/performance-compat",Db="@firebase/remote-config",Nb="@firebase/remote-config-compat",Ob="@firebase/storage",Pb="@firebase/storage-compat",Mb="@firebase/firestore",Lb="@firebase/firestore-compat",Ub="firebase",Fb="9.17.1";/**
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
 */const Ec="[DEFAULT]",Vb={[bc]:"fire-core",[pb]:"fire-core-compat",[gb]:"fire-analytics",[mb]:"fire-analytics-compat",[vb]:"fire-app-check",[yb]:"fire-app-check-compat",[wb]:"fire-auth",[_b]:"fire-auth-compat",[bb]:"fire-rtdb",[Eb]:"fire-rtdb-compat",[Ib]:"fire-fn",[Tb]:"fire-fn-compat",[Sb]:"fire-iid",[Cb]:"fire-iid-compat",[Ab]:"fire-fcm",[kb]:"fire-fcm-compat",[xb]:"fire-perf",[Rb]:"fire-perf-compat",[Db]:"fire-rc",[Nb]:"fire-rc-compat",[Ob]:"fire-gcs",[Pb]:"fire-gcs-compat",[Mb]:"fire-fst",[Lb]:"fire-fst-compat","fire-js":"fire-js",[Ub]:"fire-js-all"};/**
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
 */const go=new Map,Ic=new Map;function $b(t,e){try{t.container.addComponent(e)}catch(n){as.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bs(t){const e=t.name;if(Ic.has(e))return as.debug(`There were multiple attempts to register component ${e}.`),!1;Ic.set(e,t);for(const n of go.values())$b(n,t);return!0}function Al(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Bb={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},An=new si("app","Firebase",Bb);/**
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
 */class jb{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new os("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw An.create("app-deleted",{appName:this._name})}}/**
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
 */const ii=Fb;function Op(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ec,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw An.create("bad-app-name",{appName:String(r)});if(n||(n=D_()),!n)throw An.create("no-options");const i=go.get(r);if(i){if(mo(n,i.options)&&mo(s,i.config))return i;throw An.create("duplicate-app",{appName:r})}const o=new X_(r);for(const c of Ic.values())o.addComponent(c);const a=new jb(n,s,o);return go.set(r,a),a}function Pp(t=Ec){const e=go.get(t);if(!e&&t===Ec)return Op();if(!e)throw An.create("no-app",{appName:t});return e}function kn(t,e,n){var s;let r=(s=Vb[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),as.warn(a.join(" "));return}Bs(new os(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const qb="firebase-heartbeat-database",Hb=1,$r="firebase-heartbeat-store";let Ba=null;function Mp(){return Ba||(Ba=lb(qb,Hb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore($r)}}}).catch(t=>{throw An.create("idb-open",{originalErrorMessage:t.message})})),Ba}async function Kb(t){try{return(await Mp()).transaction($r).objectStore($r).get(Lp(t))}catch(e){if(e instanceof un)as.warn(e.message);else{const n=An.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});as.warn(n.message)}}}async function Gh(t,e){try{const s=(await Mp()).transaction($r,"readwrite");return await s.objectStore($r).put(e,Lp(t)),s.done}catch(n){if(n instanceof un)as.warn(n.message);else{const s=An.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});as.warn(s.message)}}}function Lp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Wb=1024,zb=30*24*60*60*1e3;class Gb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Xb(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Qh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=zb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Qh(),{heartbeatsToSend:n,unsentEntries:s}=Qb(this._heartbeatsCache.heartbeats),r=po(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Qh(){return new Date().toISOString().substring(0,10)}function Qb(t,e=Wb){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Xh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Xh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Xb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return F_()?V_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Kb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Gh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Gh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Xh(t){return po(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Yb(t){Bs(new os("platform-logger",e=>new db(e),"PRIVATE")),Bs(new os("heartbeat",e=>new Gb(e),"PRIVATE")),kn(bc,zh,t),kn(bc,zh,"esm2017"),kn("fire-js","")}Yb("");function kl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Up(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Jb=Up,Fp=new si("auth","Firebase",Up());/**
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
 */const Yh=new Sl("@firebase/auth");function Yi(t,...e){Yh.logLevel<=de.ERROR&&Yh.error(`Auth (${ii}): ${t}`,...e)}/**
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
 */function Et(t,...e){throw xl(t,...e)}function jt(t,...e){return xl(t,...e)}function Vp(t,e,n){const s=Object.assign(Object.assign({},Jb()),{[e]:n});return new si("auth","Firebase",s).create(e,{appName:t.name})}function Zb(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Et(t,"argument-error"),Vp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Fp.create(t,...e)}function G(t,e,...n){if(!t)throw xl(e,...n)}function Yt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yi(e),new Error(e)}function sn(t,e){t||Yt(e)}/**
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
 */const Jh=new Map;function Jt(t){sn(t instanceof Function,"Expected a class definition");let e=Jh.get(t);return e?(sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jh.set(t,e),e)}/**
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
 */function eE(t,e){const n=Al(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(mo(i,e!=null?e:{}))return r;Et(r,"already-initialized")}return n.initialize({options:e})}function tE(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Jt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Tc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function nE(){return Zh()==="http:"||Zh()==="https:"}function Zh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function sE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nE()||M_()||"connection"in navigator)?navigator.onLine:!0}function rE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class oi{constructor(e,n){this.shortDelay=e,this.longDelay=n,sn(n>e,"Short delay should be less than long delay!"),this.isMobile=P_()||L_()}get(){return sE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Rl(t,e){sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class $p{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const iE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const oE=new oi(3e4,6e4);function ai(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ci(t,e,n,s,r={}){return Bp(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ri(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),$p.fetch()(jp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Bp(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},iE),e);try{const r=new aE(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ui(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ui(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ui(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ui(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Vp(t,u,l);Et(t,u)}}catch(r){if(r instanceof un)throw r;Et(t,"network-request-failed")}}async function li(t,e,n,s,r={}){const i=await ci(t,e,n,s,r);return"mfaPendingCredential"in i&&Et(t,"multi-factor-auth-required",{_serverResponse:i}),i}function jp(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Rl(t.config,r):`${t.config.apiScheme}://${r}`}class aE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(jt(this.auth,"network-request-failed")),oE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ui(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=jt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function cE(t,e){return ci(t,"POST","/v1/accounts:delete",e)}async function lE(t,e){return ci(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Sr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uE(t,e=!1){const n=He(t),s=await n.getIdToken(e),r=Dl(s);G(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Sr(ja(r.auth_time)),issuedAtTime:Sr(ja(r.iat)),expirationTime:Sr(ja(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ja(t){return Number(t)*1e3}function Dl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Yi("JWT malformed, contained fewer than 3 sections"),null;try{const r=kp(n);return r?JSON.parse(r):(Yi("Failed to decode base64 JWT payload"),null)}catch(r){return Yi("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function hE(t){const e=Dl(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Br(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof un&&dE(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function dE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class fE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class qp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sr(this.lastLoginAt),this.creationTime=Sr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function yo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Br(t,lE(n,{idToken:s}));G(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?gE(i.providerUserInfo):[],a=mE(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new qp(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function pE(t){const e=He(t);await yo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mE(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function gE(t){return t.map(e=>{var{providerId:n}=e,s=kl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function yE(t,e){const n=await Bp(t,{},async()=>{const s=ri({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=jp(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$p.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return G(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await yE(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new jr;return s&&(G(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(G(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(G(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jr,this.toJSON())}_performRefresh(){return Yt("not implemented")}}/**
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
 */function mn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ss{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=kl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new qp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Br(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return uE(this,e)}reload(){return pE(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ss(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await yo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Br(this,cE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:z,isAnonymous:X,providerData:fe,stsTokenManager:J}=n;G(P&&J,e,"internal-error");const L=jr.fromJSON(this.name,J);G(typeof P=="string",e,"internal-error"),mn(h,e.name),mn(d,e.name),G(typeof z=="boolean",e,"internal-error"),G(typeof X=="boolean",e,"internal-error"),mn(m,e.name),mn(g,e.name),mn(w,e.name),mn(C,e.name),mn(k,e.name),mn(N,e.name);const se=new ss({uid:P,auth:e,email:d,emailVerified:z,displayName:h,isAnonymous:X,photoURL:g,phoneNumber:m,tenantId:w,stsTokenManager:L,createdAt:k,lastLoginAt:N});return fe&&Array.isArray(fe)&&(se.providerData=fe.map(ie=>Object.assign({},ie))),C&&(se._redirectEventId=C),se}static async _fromIdTokenResponse(e,n,s=!1){const r=new jr;r.updateFromServerResponse(n);const i=new ss({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await yo(i),i}}/**
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
 */class Hp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Hp.type="NONE";const ed=Hp;/**
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
 */function Ji(t,e,n){return`firebase:${t}:${e}:${n}`}class ks{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Ji(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ji("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ss._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ks(Jt(ed),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Jt(ed);const o=Ji(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=ss._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ks(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new ks(i,e,s))}}/**
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
 */function td(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qp(e))return"Blackberry";if(Xp(e))return"Webos";if(Nl(e))return"Safari";if((e.includes("chrome/")||Wp(e))&&!e.includes("edge/"))return"Chrome";if(Gp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Kp(t=ot()){return/firefox\//i.test(t)}function Nl(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wp(t=ot()){return/crios\//i.test(t)}function zp(t=ot()){return/iemobile/i.test(t)}function Gp(t=ot()){return/android/i.test(t)}function Qp(t=ot()){return/blackberry/i.test(t)}function Xp(t=ot()){return/webos/i.test(t)}function Xo(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vE(t=ot()){var e;return Xo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wE(){return U_()&&document.documentMode===10}function Yp(t=ot()){return Xo(t)||Gp(t)||Xp(t)||Qp(t)||/windows phone/i.test(t)||zp(t)}function _E(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Jp(t,e=[]){let n;switch(t){case"Browser":n=td(ot());break;case"Worker":n=`${td(ot())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ii}/${s}`}/**
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
 */class bE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class EE{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nd(this),this.idTokenSubscription=new nd(this),this.beforeStateQueue=new bE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await ks.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?He(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Jt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new si("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jt(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await ks.create(this,[Jt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return G(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function er(t){return He(t)}class nd{constructor(e){this.auth=e,this.observer=null,this.addObserver=H_(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function IE(t,e,n){const s=er(t);G(s._canInitEmulator,s,"emulator-config-failed"),G(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Zp(e),{host:o,port:a}=TE(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||SE()}function Zp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function TE(t){const e=Zp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:sd(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:sd(o)}}}function sd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function SE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ol{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yt("not implemented")}_getIdTokenResponse(e){return Yt("not implemented")}_linkToIdToken(e,n){return Yt("not implemented")}_getReauthenticationResolver(e){return Yt("not implemented")}}async function CE(t,e){return ci(t,"POST","/v1/accounts:update",e)}/**
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
 */async function AE(t,e){return li(t,"POST","/v1/accounts:signInWithPassword",ai(t,e))}/**
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
 */async function kE(t,e){return li(t,"POST","/v1/accounts:signInWithEmailLink",ai(t,e))}async function xE(t,e){return li(t,"POST","/v1/accounts:signInWithEmailLink",ai(t,e))}/**
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
 */class qr extends Ol{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new qr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new qr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return AE(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return kE(e,{email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return CE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xE(e,{idToken:n,email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function xs(t,e){return li(t,"POST","/v1/accounts:signInWithIdp",ai(t,e))}/**
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
 */const RE="http://localhost";class cs extends Ol{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=kl(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new cs(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,xs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xs(e,n)}buildRequest(){const e={requestUri:RE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ri(n)}return e}}/**
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
 */function DE(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function NE(t){const e=fr(pr(t)).link,n=e?fr(pr(e)).deep_link_id:null,s=fr(pr(t)).deep_link_id;return(s?fr(pr(s)).link:null)||s||n||e||t}class Pl{constructor(e){var n,s,r,i,o,a;const c=fr(pr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=DE((r=c.mode)!==null&&r!==void 0?r:null);G(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=NE(e);try{return new Pl(n)}catch{return null}}}/**
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
 */class tr{constructor(){this.providerId=tr.PROVIDER_ID}static credential(e,n){return qr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Pl.parseLink(n);return G(s,"argument-error"),qr._fromEmailAndCode(e,s.code,s.tenantId)}}tr.PROVIDER_ID="password";tr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";tr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ml{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ui extends Ml{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class wn extends ui{constructor(){super("facebook.com")}static credential(e){return cs._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
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
 */class Xt extends ui{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cs._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Xt.credential(n,s)}catch{return null}}}Xt.GOOGLE_SIGN_IN_METHOD="google.com";Xt.PROVIDER_ID="google.com";/**
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
 */class _n extends ui{constructor(){super("github.com")}static credential(e){return cs._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _n.credential(e.oauthAccessToken)}catch{return null}}}_n.GITHUB_SIGN_IN_METHOD="github.com";_n.PROVIDER_ID="github.com";/**
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
 */class bn extends ui{constructor(){super("twitter.com")}static credential(e,n){return cs._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return bn.credential(n,s)}catch{return null}}}bn.TWITTER_SIGN_IN_METHOD="twitter.com";bn.PROVIDER_ID="twitter.com";/**
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
 */async function OE(t,e){return li(t,"POST","/v1/accounts:signUp",ai(t,e))}/**
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
 */class ls{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await ss._fromIdTokenResponse(e,s,r),o=rd(s);return new ls({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=rd(s);return new ls({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function rd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class vo extends un{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,vo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new vo(e,n,s,r)}}function em(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?vo._fromErrorAndOperation(t,i,e,s):i})}async function PE(t,e,n=!1){const s=await Br(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ls._forOperation(t,"link",s)}/**
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
 */async function ME(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Br(t,em(s,r,e,t),n);G(i.idToken,s,"internal-error");const o=Dl(i.idToken);G(o,s,"internal-error");const{sub:a}=o;return G(t.uid===a,s,"user-mismatch"),ls._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Et(s,"user-mismatch"),i}}/**
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
 */async function tm(t,e,n=!1){const s="signIn",r=await em(t,s,e),i=await ls._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function LE(t,e){return tm(er(t),e)}async function UE(t,e,n){const s=er(t),r=await OE(s,{returnSecureToken:!0,email:e,password:n}),i=await ls._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function FE(t,e,n){return LE(He(t),tr.credential(e,n))}function VE(t,e,n,s){return He(t).onIdTokenChanged(e,n,s)}function $E(t,e,n){return He(t).beforeAuthStateChanged(e,n)}function nm(t,e,n,s){return He(t).onAuthStateChanged(e,n,s)}function BE(t){return He(t).signOut()}const wo="__sak";/**
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
 */class sm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wo,"1"),this.storage.removeItem(wo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function jE(){const t=ot();return Nl(t)||Xo(t)}const qE=1e3,HE=10;class rm extends sm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jE()&&_E(),this.fallbackToPolling=Yp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);wE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,HE):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},qE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rm.type="LOCAL";const KE=rm;/**
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
 */class im extends sm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}im.type="SESSION";const om=im;/**
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
 */function WE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Yo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Yo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await WE(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yo.receivers=[];/**
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
 */function Ll(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class zE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ll("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function qt(){return window}function GE(t){qt().location.href=t}/**
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
 */function am(){return typeof qt().WorkerGlobalScope<"u"&&typeof qt().importScripts=="function"}async function QE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function YE(){return am()?self:null}/**
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
 */const cm="firebaseLocalStorageDb",JE=1,_o="firebaseLocalStorage",lm="fbase_key";class hi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jo(t,e){return t.transaction([_o],e?"readwrite":"readonly").objectStore(_o)}function ZE(){const t=indexedDB.deleteDatabase(cm);return new hi(t).toPromise()}function Sc(){const t=indexedDB.open(cm,JE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(_o,{keyPath:lm})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(_o)?e(s):(s.close(),await ZE(),e(await Sc()))})})}async function id(t,e,n){const s=Jo(t,!0).put({[lm]:e,value:n});return new hi(s).toPromise()}async function eI(t,e){const n=Jo(t,!1).get(e),s=await new hi(n).toPromise();return s===void 0?null:s.value}function od(t,e){const n=Jo(t,!0).delete(e);return new hi(n).toPromise()}const tI=800,nI=3;class um{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>nI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return am()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yo._getInstance(YE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await QE(),!this.activeServiceWorker)return;this.sender=new zE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sc();return await id(e,wo,"1"),await od(e,wo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>id(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>eI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>od(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Jo(r,!1).getAll();return new hi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}um.type="LOCAL";const sI=um;/**
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
 */function rI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function iI(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=jt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",rI().appendChild(s)})}function oI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new oi(3e4,6e4);/**
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
 */function hm(t,e){return e?Jt(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ul extends Ol{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aI(t){return tm(t.auth,new Ul(t),t.bypassAuthState)}function cI(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),ME(n,new Ul(t),t.bypassAuthState)}async function lI(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),PE(n,new Ul(t),t.bypassAuthState)}/**
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
 */class dm{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aI;case"linkViaPopup":case"linkViaRedirect":return lI;case"reauthViaPopup":case"reauthViaRedirect":return cI;default:Et(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uI=new oi(2e3,1e4);async function hI(t,e,n){const s=er(t);Zb(t,e,Ml);const r=hm(s,n);return new Yn(s,"signInViaPopup",e,r).executeNotNull()}class Yn extends dm{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Yn.currentPopupAction&&Yn.currentPopupAction.cancel(),Yn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=Ll();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,uI.get())};e()}}Yn.currentPopupAction=null;/**
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
 */const dI="pendingRedirect",Zi=new Map;class fI extends dm{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Zi.get(this.auth._key());if(!e){try{const s=await pI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Zi.set(this.auth._key(),e)}return this.bypassAuthState||Zi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pI(t,e){const n=yI(e),s=gI(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function mI(t,e){Zi.set(t._key(),e)}function gI(t){return Jt(t._redirectPersistence)}function yI(t){return Ji(dI,t.config.apiKey,t.name)}async function vI(t,e,n=!1){const s=er(t),r=hm(s,e),o=await new fI(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const wI=10*60*1e3;class _I{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!fm(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(jt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wI&&this.cachedEventUids.clear(),this.cachedEventUids.has(ad(e))}saveEventToCache(e){this.cachedEventUids.add(ad(e)),this.lastProcessedEventTime=Date.now()}}function ad(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fm(t);default:return!1}}/**
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
 */async function EI(t,e={}){return ci(t,"GET","/v1/projects",e)}/**
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
 */const II=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TI=/^https?/;async function SI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await EI(t);for(const n of e)try{if(CI(n))return}catch{}Et(t,"unauthorized-domain")}function CI(t){const e=Tc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!TI.test(n))return!1;if(II.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const AI=new oi(3e4,6e4);function cd(){const t=qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kI(t){return new Promise((e,n)=>{var s,r,i;function o(){cd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cd(),n(jt(t,"network-request-failed"))},timeout:AI.get()})}if(!((r=(s=qt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=qt().gapi)===null||i===void 0)&&i.load)o();else{const a=oI("iframefcb");return qt()[a]=()=>{gapi.load?o():n(jt(t,"network-request-failed"))},iI(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw eo=null,e})}let eo=null;function xI(t){return eo=eo||kI(t),eo}/**
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
 */const RI=new oi(5e3,15e3),DI="__/auth/iframe",NI="emulator/auth/iframe",OI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MI(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rl(e,NI):`https://${t.config.authDomain}/${DI}`,s={apiKey:e.apiKey,appName:t.name,v:ii},r=PI.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ri(s).slice(1)}`}async function LI(t){const e=await xI(t),n=qt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:MI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OI,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=jt(t,"network-request-failed"),a=qt().setTimeout(()=>{i(o)},RI.get());function c(){qt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const UI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FI=500,VI=600,$I="_blank",BI="http://localhost";class ld{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jI(t,e,n,s=FI,r=VI){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},UI),{width:s.toString(),height:r.toString(),top:i,left:o}),l=ot().toLowerCase();n&&(a=Wp(l)?$I:n),Kp(l)&&(e=e||BI,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[m,g])=>`${d}${m}=${g},`,"");if(vE(l)&&a!=="_self")return qI(e||"",a),new ld(null);const h=window.open(e||"",a,u);G(h,t,"popup-blocked");try{h.focus()}catch{}return new ld(h)}function qI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const HI="__/auth/handler",KI="emulator/auth/handler";function ud(t,e,n,s,r,i){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ii,eventId:r};if(e instanceof Ml){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",q_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof ui){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${WI(t)}?${ri(a).slice(1)}`}function WI({config:t}){return t.emulator?Rl(t,KI):`https://${t.authDomain}/${HI}`}/**
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
 */const qa="webStorageSupport";class zI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=om,this._completeRedirectFn=vI,this._overrideRedirectResult=mI}async _openPopup(e,n,s,r){var i;sn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=ud(e,n,s,Tc(),r);return jI(e,o,Ll())}async _openRedirect(e,n,s,r){return await this._originValidation(e),GE(ud(e,n,s,Tc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(sn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await LI(e),s=new _I(e);return n.register("authEvent",r=>(G(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qa,{type:qa},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[qa];o!==void 0&&n(!!o),Et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yp()||Nl()||Xo()}}const GI=zI;var hd="@firebase/auth",dd="0.21.3";/**
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
 */class QI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function XI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function YI(t){Bs(new os("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{G(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),G(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jp(t)},u=new EE(a,c,l);return tE(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Bs(new os("auth-internal",e=>{const n=er(e.getProvider("auth").getImmediate());return(s=>new QI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kn(hd,dd,XI(t)),kn(hd,dd,"esm2017")}/**
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
 */const JI=5*60,ZI=Rp("authIdTokenMaxAge")||JI;let fd=null;const eT=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>ZI)return;const r=n==null?void 0:n.token;fd!==r&&(fd=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Hr(t=Pp()){const e=Al(t,"auth");if(e.isInitialized())return e.getImmediate();const n=eE(t,{popupRedirectResolver:GI,persistence:[sI,KE,om]}),s=Rp("authTokenSyncURL");if(s){const i=eT(s);$E(n,i,()=>i(n.currentUser)),VE(n,o=>i(o))}const r=xp("auth");return r&&IE(n,`http://${r}`),n}YI("Browser");const tT=y("h1",{class:"mb-10 text-lg"},"Nuevo usuario",-1),nT={class:"w-full max-w-xs ml-8"},sT=["onSubmit"],rT={class:"mb-4"},iT=y("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"email"}," Email ",-1),oT={class:"mb-6"},aT=y("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"password"}," Password ",-1),cT=y("p",{class:"text-red-500 text-xs italic"},"Please choose a password.",-1),lT=y("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit"}," Aceptar ",-1),uT=y("p",{class:"text-center text-gray-500 text-xs"}," \xA92023 EDW-DOMOTIC. All rights reserved. ",-1),hT={__name:"FormCreateUser",emits:["CloseModal"],setup(t,{emit:e}){const n=Il(),s=Ne(""),r=Ne(""),i=()=>{e("CloseModal"),a()},o=async()=>{try{await UE(Hr(),s.value,r.value),console.log("Autentificaci\xF3n exitosa"),n.push("/dashboard")}catch(c){console.log(c.code),alert(c.message)}},a=()=>{s.value="",r.value=""};return(c,l)=>(_e(),ze(Me,null,[tT,y("div",null,[y("div",nT,[y("form",{class:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",onSubmit:Fs(o,["prevent"])},[y("div",rT,[iT,Dt(y("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline","onUpdate:modelValue":l[0]||(l[0]=u=>s.value=u),id:"emailCreate",type:"email",placeholder:"email"},null,512),[[Us,s.value]])]),y("div",oT,[aT,Dt(y("input",{class:"shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline","onUpdate:modelValue":l[1]||(l[1]=u=>r.value=u),id:"passwordCreate",type:"password",placeholder:"******************"},null,512),[[Us,r.value]]),cT]),y("div",{class:"flex items-center justify-between"},[lT,y("button",{onClick:i,class:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button"}," Cancelar ")])],40,sT),uT])])],64))}},dT={class:"relative z-10","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},fT=y("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),pT={class:"fixed inset-0 z-10 overflow-y-auto"},mT={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},gT={class:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg bg-blue-500"},yT={class:"mx-10 px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},vT={class:"sm:flex sm:items-start"},wT={class:"w-full text-center"},pm={__name:"ModalCreateUser",emits:["CloseModal"],setup(t,{emit:e}){return(n,s)=>(_e(),nn(Wt,{"enter-active-class":"ease-out duration-300","enter-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-class":"opacity-100","leave-to-class":"opacity-0"},{default:tn(()=>[y("div",dT,[fT,y("div",pT,[y("div",mT,[Te(Wt,{"enter-active-class":"ease-out duration-300","enter-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:tn(()=>[y("div",gT,[y("div",yT,[y("div",vT,[y("div",wT,[y("div",null,[Te(hT,{onCloseModal:s[0]||(s[0]=r=>e("CloseModal"))})])])])])])]),_:1})])])])]),_:1}))}},_T={class:"flex flex-col items-center justify-center px-6 py-2 mx-auto md:h-screen lg:py-0 -mt-24"},bT={class:"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"},ET={class:"p-6 space-y-4 md:space-y-6 sm:p-8"},IT=y("h1",{class:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"}," Bienvenido, introduzca sus credenciales. ",-1),TT=["onSubmit"],ST=y("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Correo Electr\xF3nico",-1),CT=y("label",{for:"password",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Password",-1),AT={key:0},kT=ip('<div class="flex items-center justify-between"><div class="flex items-start"><div class="flex items-center h-5"><input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"></div><div class="ml-3 text-sm"><label for="remember" class="text-gray-500 dark:text-gray-300">Recu\xE9rdate</label></div></div><a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">\xBFOlvidaste la contrase\xF1a?</a></div><button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Aceptar</button>',2),xT={class:"text-sm font-light text-gray-500 dark:text-gray-400"},RT={__name:"LoginUser",setup(t){const e=Il(),n=Ne(""),s=Ne(""),r=Ne(),i=Ne(),o=async()=>{try{await FE(Hr(),n.value,s.value),console.log("Entrada exitosa"),e.push("/dashboard")}catch(c){switch(console.log(c.code),c.code){case"auth/invalid-email":r.value="E-mail incorrecto";break;case"auth/user-not-found":r.value="No se encuentra cuenta para ese Email";break;case"auth/wrong-password":r.value="Contrase\xF1a incorrecta";break;default:r.value="E-mail o password incorrecto";break}}},a=async()=>{const c=new Xt;try{await hI(Hr(),c),e.push("/dashboard")}catch(l){console.log(l)}};return(c,l)=>(_e(),ze(Me,null,[y("div",_T,[y("div",bT,[y("div",ET,[IT,y("form",{class:"space-y-4 md:space-y-6",onSubmit:Fs(o,["prevent"])},[y("div",null,[ST,Dt(y("input",{"onUpdate:modelValue":l[0]||(l[0]=u=>n.value=u),type:"text",name:"email",id:"email",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Introduzca Email"},null,512),[[Us,n.value]])]),y("div",null,[CT,Dt(y("input",{"onUpdate:modelValue":l[1]||(l[1]=u=>s.value=u),type:"password",name:"password",id:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,512),[[Us,s.value]])]),y("div",null,[r.value?(_e(),ze("p",AT,Bt(r.value),1)):lo("",!0)]),kT,y("div",{class:"w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"},[y("button",{onClick:a},"Sign In With Google")]),y("p",xT,[wl(" \xBFNo tienes cuenta todav\xEDa? "),y("a",{onClick:l[2]||(l[2]=u=>i.value=!0),class:"font-medium text-primary-600 hover:underline dark:text-primary-500"},"Reg\xEDstrate")])],40,TT)])])]),Dt(Te(pm,{onCloseModal:l[3]||(l[3]=u=>i.value=!1)},null,512),[[Xi,i.value]])],64))}},DT={class:"relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32"},NT=ip('<img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-y=.8&amp;w=2830&amp;h=1500&amp;q=80&amp;blend=111827&amp;sat=-100&amp;exp=15&amp;blend-mode=multiply" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1097 845" aria-hidden="true" class="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"><path fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)" fill-opacity=".2" d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"></path><defs><linearGradient id="10724532-9d81-43d2-bb94-866e98dd6e42" x1="1097.04" x2="-141.165" y1=".22" y2="363.075" gradientUnits="userSpaceOnUse"><stop stop-color="#776FFF"></stop><stop offset="1" stop-color="#FF4694"></stop></linearGradient></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1097 845" aria-hidden="true" class="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"><path fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)" fill-opacity=".2" d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"></path><defs><linearGradient id="8ddc7edb-8983-4cd7-bccb-79ad21097d70" x1="1097.04" x2="-141.165" y1=".22" y2="363.075" gradientUnits="userSpaceOnUse"><stop stop-color="#776FFF"></stop><stop offset="1" stop-color="#FF4694"></stop></linearGradient></defs></svg>',3),OT={class:"mx-auto max-w-7xl px-6 lg:px-8"},PT=y("div",{class:"mx-auto max-w-2xl lg:mx-0"},[y("h2",{class:"text-4xl font-bold tracking-tight text-white sm:text-6xl"},"EDW-DOMOTIC"),y("p",{class:"mt-6 text-4xl leading-8 text-gray-300"},"Preparando el Futuro")],-1),MT={class:"mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"},LT={class:"grid grid-cols-1 gap-y-6 gap-x-8 text-lg font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10"},UT=["href"],FT=y("span",{"aria-hidden":"true"},"\u2192",-1),VT={class:"mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"},$T={class:"text-base leading-7 text-gray-300"},BT={class:"text-2xl font-bold leading-9 tracking-tight text-white"},jT={__name:"WelcomeBanner",setup(t){const e=Ne(),n=[{name:"Entrar a la aplicaci\xF3n en un futuro",href:"/"}],s=[{name:"Offices worldwide",value:"12"},{name:"Full-time colleagues",value:"300+"},{name:"Hours per week",value:"40"},{name:"Paid time off",value:"Unlimited"}];return(r,i)=>(_e(),ze(Me,null,[y("div",DT,[NT,y("div",OT,[PT,y("div",MT,[y("div",LT,[(_e(),ze(Me,null,Lr(n,o=>y("a",{onClick:i[0]||(i[0]=a=>e.value=!0),key:o.name,href:o.href},[wl(Bt(o.name)+" ",1),FT],8,UT)),64))]),y("dl",VT,[(_e(),ze(Me,null,Lr(s,o=>y("div",{key:o.name,class:"flex flex-col-reverse"},[y("dt",$T,Bt(o.name),1),y("dd",BT,Bt(o.value),1)])),64))])])])]),Te(RT)],64))}},qT={__name:"HomeDomotic",setup(t){return(e,n)=>(_e(),ze("div",null,[Te(jT)]))}},HT="/assets/18297.bfbd838b.png";var KT="firebase",WT="9.17.1";/**
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
 */kn(KT,WT,"app");var zT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$,Fl=Fl||{},Y=zT||self;function bo(){}function Zo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function di(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function GT(t){return Object.prototype.hasOwnProperty.call(t,Ha)&&t[Ha]||(t[Ha]=++QT)}var Ha="closure_uid_"+(1e9*Math.random()>>>0),QT=0;function XT(t,e,n){return t.call.apply(t.bind,arguments)}function YT(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function rt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?rt=XT:rt=YT,rt.apply(null,arguments)}function Fi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ze(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Ln(){this.s=this.s,this.o=this.o}var JT=0;Ln.prototype.s=!1;Ln.prototype.na=function(){!this.s&&(this.s=!0,this.M(),JT!=0)&&GT(this)};Ln.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const mm=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Vl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function pd(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Zo(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function it(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}it.prototype.h=function(){this.defaultPrevented=!0};var ZT=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Y.addEventListener("test",bo,e),Y.removeEventListener("test",bo,e)}catch{}return t}();function Eo(t){return/^[\s\xa0]*$/.test(t)}var md=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ka(t,e){return t<e?-1:t>e?1:0}function ea(){var t=Y.navigator;return t&&(t=t.userAgent)?t:""}function $t(t){return ea().indexOf(t)!=-1}function $l(t){return $l[" "](t),t}$l[" "]=bo;function eS(t){var e=sS;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var tS=$t("Opera"),js=$t("Trident")||$t("MSIE"),gm=$t("Edge"),Cc=gm||js,ym=$t("Gecko")&&!(ea().toLowerCase().indexOf("webkit")!=-1&&!$t("Edge"))&&!($t("Trident")||$t("MSIE"))&&!$t("Edge"),nS=ea().toLowerCase().indexOf("webkit")!=-1&&!$t("Edge");function vm(){var t=Y.document;return t?t.documentMode:void 0}var Io;e:{var Wa="",za=function(){var t=ea();if(ym)return/rv:([^\);]+)(\)|;)/.exec(t);if(gm)return/Edge\/([\d\.]+)/.exec(t);if(js)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(nS)return/WebKit\/(\S+)/.exec(t);if(tS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(za&&(Wa=za?za[1]:""),js){var Ga=vm();if(Ga!=null&&Ga>parseFloat(Wa)){Io=String(Ga);break e}}Io=Wa}var sS={};function rS(){return eS(function(){let t=0;const e=md(String(Io)).split("."),n=md("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Ka(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ka(r[2].length==0,i[2].length==0)||Ka(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Ac;if(Y.document&&js){var gd=vm();Ac=gd||parseInt(Io,10)||void 0}else Ac=void 0;var iS=Ac;function Kr(t,e){if(it.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ym){e:{try{$l(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:oS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Kr.X.h.call(this)}}Ze(Kr,it);var oS={2:"touch",3:"pen",4:"mouse"};Kr.prototype.h=function(){Kr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var fi="closure_listenable_"+(1e6*Math.random()|0),aS=0;function cS(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++aS,this.ba=this.ea=!1}function ta(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Bl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function wm(t){const e={};for(const n in t)e[n]=t[n];return e}const yd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _m(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<yd.length;i++)n=yd[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function na(t){this.src=t,this.g={},this.h=0}na.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=xc(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new cS(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function kc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=mm(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ta(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function xc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var jl="closure_lm_"+(1e6*Math.random()|0),Qa={};function bm(t,e,n,s,r){if(s&&s.once)return Im(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)bm(t,e[i],n,s,r);return null}return n=Kl(n),t&&t[fi]?t.N(e,n,di(s)?!!s.capture:!!s,r):Em(t,e,n,!1,s,r)}function Em(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=di(r)?!!r.capture:!!r,a=Hl(t);if(a||(t[jl]=a=new na(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=lS(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)ZT||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Sm(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function lS(){function t(n){return e.call(t.src,t.listener,n)}const e=uS;return t}function Im(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Im(t,e[i],n,s,r);return null}return n=Kl(n),t&&t[fi]?t.O(e,n,di(s)?!!s.capture:!!s,r):Em(t,e,n,!0,s,r)}function Tm(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Tm(t,e[i],n,s,r);else s=di(s)?!!s.capture:!!s,n=Kl(n),t&&t[fi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=xc(i,n,s,r),-1<n&&(ta(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Hl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=xc(e,n,s,r)),(n=-1<t?e[t]:null)&&ql(n))}function ql(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[fi])kc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Sm(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Hl(e))?(kc(n,t),n.h==0&&(n.src=null,e[jl]=null)):ta(t)}}}function Sm(t){return t in Qa?Qa[t]:Qa[t]="on"+t}function uS(t,e){if(t.ba)t=!0;else{e=new Kr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&ql(t),t=n.call(s,e)}return t}function Hl(t){return t=t[jl],t instanceof na?t:null}var Xa="__closure_events_fn_"+(1e9*Math.random()>>>0);function Kl(t){return typeof t=="function"?t:(t[Xa]||(t[Xa]=function(e){return t.handleEvent(e)}),t[Xa])}function Ge(){Ln.call(this),this.i=new na(this),this.P=this,this.I=null}Ze(Ge,Ln);Ge.prototype[fi]=!0;Ge.prototype.removeEventListener=function(t,e,n,s){Tm(this,t,e,n,s)};function Ye(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new it(e,t);else if(e instanceof it)e.target=e.target||t;else{var r=e;e=new it(s,t),_m(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Vi(o,s,!0,e)&&r}if(o=e.g=t,r=Vi(o,s,!0,e)&&r,r=Vi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Vi(o,s,!1,e)&&r}Ge.prototype.M=function(){if(Ge.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ta(n[s]);delete t.g[e],t.h--}}this.I=null};Ge.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ge.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Vi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&kc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Wl=Y.JSON.stringify;function hS(){var t=km;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class dS{constructor(){this.h=this.g=null}add(e,n){const s=Cm.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Cm=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new fS,t=>t.reset());class fS{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function pS(t){Y.setTimeout(()=>{throw t},0)}function Am(t,e){Rc||mS(),Dc||(Rc(),Dc=!0),km.add(t,e)}var Rc;function mS(){var t=Y.Promise.resolve(void 0);Rc=function(){t.then(gS)}}var Dc=!1,km=new dS;function gS(){for(var t;t=hS();){try{t.h.call(t.g)}catch(n){pS(n)}var e=Cm;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Dc=!1}function sa(t,e){Ge.call(this),this.h=t||1,this.g=e||Y,this.j=rt(this.lb,this),this.l=Date.now()}Ze(sa,Ge);$=sa.prototype;$.ca=!1;$.R=null;$.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ye(this,"tick"),this.ca&&(zl(this),this.start()))}};$.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function zl(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}$.M=function(){sa.X.M.call(this),zl(this),delete this.g};function Gl(t,e,n){if(typeof t=="function")n&&(t=rt(t,n));else if(t&&typeof t.handleEvent=="function")t=rt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Y.setTimeout(t,e||0)}function xm(t){t.g=Gl(()=>{t.g=null,t.i&&(t.i=!1,xm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class yS extends Ln{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:xm(this)}M(){super.M(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wr(t){Ln.call(this),this.h=t,this.g={}}Ze(Wr,Ln);var vd=[];function Rm(t,e,n,s){Array.isArray(n)||(n&&(vd[0]=n.toString()),n=vd);for(var r=0;r<n.length;r++){var i=bm(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Dm(t){Bl(t.g,function(e,n){this.g.hasOwnProperty(n)&&ql(e)},t),t.g={}}Wr.prototype.M=function(){Wr.X.M.call(this),Dm(this)};Wr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ra(){this.g=!0}ra.prototype.Aa=function(){this.g=!1};function vS(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function wS(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Ts(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+bS(t,n)+(s?" "+s:"")})}function _S(t,e){t.info(function(){return"TIMEOUT: "+e})}ra.prototype.info=function(){};function bS(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Wl(n)}catch{return e}}var fs={},wd=null;function ia(){return wd=wd||new Ge}fs.Pa="serverreachability";function Nm(t){it.call(this,fs.Pa,t)}Ze(Nm,it);function zr(t){const e=ia();Ye(e,new Nm(e))}fs.STAT_EVENT="statevent";function Om(t,e){it.call(this,fs.STAT_EVENT,t),this.stat=e}Ze(Om,it);function ut(t){const e=ia();Ye(e,new Om(e,t))}fs.Qa="timingevent";function Pm(t,e){it.call(this,fs.Qa,t),this.size=e}Ze(Pm,it);function pi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){t()},e)}var oa={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Mm={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ql(){}Ql.prototype.h=null;function _d(t){return t.h||(t.h=t.i())}function Lm(){}var mi={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Xl(){it.call(this,"d")}Ze(Xl,it);function Yl(){it.call(this,"c")}Ze(Yl,it);var Nc;function aa(){}Ze(aa,Ql);aa.prototype.g=function(){return new XMLHttpRequest};aa.prototype.i=function(){return{}};Nc=new aa;function gi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Wr(this),this.O=ES,t=Cc?125:void 0,this.T=new sa(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Um}function Um(){this.i=null,this.g="",this.h=!1}var ES=45e3,Oc={},To={};$=gi.prototype;$.setTimeout=function(t){this.O=t};function Pc(t,e,n){t.K=1,t.v=la(rn(e)),t.s=n,t.P=!0,Fm(t,null)}function Fm(t,e){t.F=Date.now(),yi(t),t.A=rn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Wm(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Um,t.g=fg(t.l,n?e:null,!t.s),0<t.N&&(t.L=new yS(rt(t.La,t,t.g),t.N)),Rm(t.S,t.g,"readystatechange",t.ib),e=t.H?wm(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),zr(),vS(t.j,t.u,t.A,t.m,t.U,t.s)}$.ib=function(t){t=t.target;const e=this.L;e&&Zt(t)==3?e.l():this.La(t)};$.La=function(t){try{if(t==this.g)e:{const u=Zt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Cc||this.g&&(this.h.h||this.g.fa()||Td(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?zr(3):zr(2)),ca(this);var n=this.g.aa();this.Y=n;t:if(Vm(this)){var s=Td(this.g);t="";var r=s.length,i=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jn(this),Cr(this);var o="";break t}this.h.i=new Y.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,wS(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Eo(a)){var l=a;break t}}l=null}if(n=l)Ts(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Mc(this,n);else{this.i=!1,this.o=3,ut(12),Jn(this),Cr(this);break e}}this.P?($m(this,u,o),Cc&&this.i&&u==3&&(Rm(this.S,this.T,"tick",this.hb),this.T.start())):(Ts(this.j,this.m,o,null),Mc(this,o)),u==4&&Jn(this),this.i&&!this.I&&(u==4?lg(this.l,this):(this.i=!1,yi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ut(12)):(this.o=0,ut(13)),Jn(this),Cr(this)}}}catch{}finally{}};function Vm(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function $m(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=IS(t,n),r==To){e==4&&(t.o=4,ut(14),s=!1),Ts(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Oc){t.o=4,ut(15),Ts(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Ts(t.j,t.m,r,null),Mc(t,r);Vm(t)&&r!=To&&r!=Oc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ut(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ru(e),e.K=!0,ut(11))):(Ts(t.j,t.m,n,"[Invalid Chunked Response]"),Jn(t),Cr(t))}$.hb=function(){if(this.g){var t=Zt(this.g),e=this.g.fa();this.C<e.length&&(ca(this),$m(this,t,e),this.i&&t!=4&&yi(this))}};function IS(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?To:(n=Number(e.substring(n,s)),isNaN(n)?Oc:(s+=1,s+n>e.length?To:(e=e.substr(s,n),t.C=s+n,e)))}$.cancel=function(){this.I=!0,Jn(this)};function yi(t){t.V=Date.now()+t.O,Bm(t,t.O)}function Bm(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=pi(rt(t.gb,t),e)}function ca(t){t.B&&(Y.clearTimeout(t.B),t.B=null)}$.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(_S(this.j,this.A),this.K!=2&&(zr(),ut(17)),Jn(this),this.o=2,Cr(this)):Bm(this,this.V-t)};function Cr(t){t.l.G==0||t.I||lg(t.l,t)}function Jn(t){ca(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,zl(t.T),Dm(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Mc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Lc(n.h,t))){if(!t.J&&Lc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ao(n),da(n);else break e;su(n),ut(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=pi(rt(n.cb,n),6e3));if(1>=Qm(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Zn(n,11)}else if((t.J||n.g==t)&&Ao(n),!Eo(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const g=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=s.h;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Jl(i,i.h),i.h=null))}if(s.D){const w=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(s.za=w,ke(s.F,s.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=dg(s,s.H?s.ka:null,s.V),o.J){Xm(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(ca(a),yi(a)),s.g=o}else ag(s);0<n.i.length&&fa(n)}else l[0]!="stop"&&l[0]!="close"||Zn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Zn(n,7):nu(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}zr(4)}catch{}}function TS(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Zo(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function SS(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Zo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function jm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Zo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=SS(t),s=TS(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var qm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function CS(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function rs(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof rs){this.h=e!==void 0?e:t.h,So(this,t.j),this.s=t.s,this.g=t.g,Co(this,t.m),this.l=t.l,e=t.i;var n=new Gr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),bd(this,n),this.o=t.o}else t&&(n=String(t).match(qm))?(this.h=!!e,So(this,n[1]||"",!0),this.s=mr(n[2]||""),this.g=mr(n[3]||"",!0),Co(this,n[4]),this.l=mr(n[5]||"",!0),bd(this,n[6]||"",!0),this.o=mr(n[7]||"")):(this.h=!!e,this.i=new Gr(null,this.h))}rs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(gr(e,Ed,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(gr(e,Ed,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(gr(n,n.charAt(0)=="/"?xS:kS,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",gr(n,DS)),t.join("")};function rn(t){return new rs(t)}function So(t,e,n){t.j=n?mr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Co(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function bd(t,e,n){e instanceof Gr?(t.i=e,NS(t.i,t.h)):(n||(e=gr(e,RS)),t.i=new Gr(e,t.h))}function ke(t,e,n){t.i.set(e,n)}function la(t){return ke(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function mr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function gr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,AS),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function AS(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ed=/[#\/\?@]/g,kS=/[#\?:]/g,xS=/[#\?]/g,RS=/[#\?@]/g,DS=/#/g;function Gr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Un(t){t.g||(t.g=new Map,t.h=0,t.i&&CS(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=Gr.prototype;$.add=function(t,e){Un(this),this.i=null,t=nr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Hm(t,e){Un(t),e=nr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Km(t,e){return Un(t),e=nr(t,e),t.g.has(e)}$.forEach=function(t,e){Un(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};$.oa=function(){Un(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};$.W=function(t){Un(this);let e=[];if(typeof t=="string")Km(this,t)&&(e=e.concat(this.g.get(nr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};$.set=function(t,e){return Un(this),this.i=null,t=nr(this,t),Km(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Wm(t,e,n){Hm(t,e),0<n.length&&(t.i=null,t.g.set(nr(t,e),Vl(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function nr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function NS(t,e){e&&!t.j&&(Un(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Hm(this,s),Wm(this,r,n))},t)),t.j=e}var OS=class{constructor(t,e){this.h=t,this.g=e}};function zm(t){this.l=t||PS,Y.PerformanceNavigationTiming?(t=Y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Y.g&&Y.g.Ga&&Y.g.Ga()&&Y.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var PS=10;function Gm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Qm(t){return t.h?1:t.g?t.g.size:0}function Lc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Jl(t,e){t.g?t.g.add(e):t.h=e}function Xm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}zm.prototype.cancel=function(){if(this.i=Ym(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ym(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Vl(t.i)}function Zl(){}Zl.prototype.stringify=function(t){return Y.JSON.stringify(t,void 0)};Zl.prototype.parse=function(t){return Y.JSON.parse(t,void 0)};function MS(){this.g=new Zl}function LS(t,e,n){const s=n||"";try{jm(t,function(r,i){let o=r;di(r)&&(o=Wl(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function US(t,e){const n=new ra;if(Y.Image){const s=new Image;s.onload=Fi($i,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Fi($i,n,s,"TestLoadImage: error",!1,e),s.onabort=Fi($i,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Fi($i,n,s,"TestLoadImage: timeout",!1,e),Y.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function $i(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function vi(t){this.l=t.ac||null,this.j=t.jb||!1}Ze(vi,Ql);vi.prototype.g=function(){return new ua(this.l,this.j)};vi.prototype.i=function(t){return function(){return t}}({});function ua(t,e){Ge.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=eu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ze(ua,Ge);var eu=0;$=ua.prototype;$.open=function(t,e){if(this.readyState!=eu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Qr(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Y).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wi(this)),this.readyState=eu};$.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Qr(this)),this.g&&(this.readyState=3,Qr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Jm(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Jm(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}$.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?wi(this):Qr(this),this.readyState==3&&Jm(this)}};$.Va=function(t){this.g&&(this.response=this.responseText=t,wi(this))};$.Ua=function(t){this.g&&(this.response=t,wi(this))};$.ga=function(){this.g&&wi(this)};function wi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Qr(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Qr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ua.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var FS=Y.JSON.parse;function Oe(t){Ge.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Zm,this.K=this.L=!1}Ze(Oe,Ge);var Zm="",VS=/^https?$/i,$S=["POST","PUT"];$=Oe.prototype;$.Ka=function(t){this.L=t};$.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Nc.g(),this.C=this.u?_d(this.u):_d(Nc),this.g.onreadystatechange=rt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Id(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=Y.FormData&&t instanceof Y.FormData,!(0<=mm($S,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ng(this),0<this.B&&((this.K=BS(this.g))?(this.g.timeout=this.B,this.g.ontimeout=rt(this.qa,this)):this.A=Gl(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Id(this,i)}};function BS(t){return js&&rS()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}$.qa=function(){typeof Fl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ye(this,"timeout"),this.abort(8))};function Id(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,eg(t),ha(t)}function eg(t){t.D||(t.D=!0,Ye(t,"complete"),Ye(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ye(this,"complete"),Ye(this,"abort"),ha(this))};$.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ha(this,!0)),Oe.X.M.call(this)};$.Ha=function(){this.s||(this.F||this.v||this.l?tg(this):this.fb())};$.fb=function(){tg(this)};function tg(t){if(t.h&&typeof Fl<"u"&&(!t.C[1]||Zt(t)!=4||t.aa()!=2)){if(t.v&&Zt(t)==4)Gl(t.Ha,0,t);else if(Ye(t,"readystatechange"),Zt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(qm)[1]||null;if(!r&&Y.self&&Y.self.location){var i=Y.self.location.protocol;r=i.substr(0,i.length-1)}s=!VS.test(r?r.toLowerCase():"")}n=s}if(n)Ye(t,"complete"),Ye(t,"success");else{t.m=6;try{var o=2<Zt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",eg(t)}}finally{ha(t)}}}}function ha(t,e){if(t.g){ng(t);const n=t.g,s=t.C[0]?bo:null;t.g=null,t.C=null,e||Ye(t,"ready");try{n.onreadystatechange=s}catch{}}}function ng(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Y.clearTimeout(t.A),t.A=null)}function Zt(t){return t.g?t.g.readyState:0}$.aa=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}};$.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),FS(e)}};function Td(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Zm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}$.Ea=function(){return this.m};$.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function sg(t){let e="";return Bl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function tu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=sg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ke(t,e,n))}function hr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function rg(t){this.Ca=0,this.i=[],this.j=new ra,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=hr("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=hr("baseRetryDelayMs",5e3,t),this.bb=hr("retryDelaySeedMs",1e4,t),this.$a=hr("forwardChannelMaxRetries",2,t),this.ta=hr("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new zm(t&&t.concurrentRequestLimit),this.Fa=new MS,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}$=rg.prototype;$.ma=8;$.G=1;function nu(t){if(ig(t),t.G==3){var e=t.U++,n=rn(t.F);ke(n,"SID",t.I),ke(n,"RID",e),ke(n,"TYPE","terminate"),_i(t,n),e=new gi(t,t.j,e,void 0),e.K=2,e.v=la(rn(n)),n=!1,Y.navigator&&Y.navigator.sendBeacon&&(n=Y.navigator.sendBeacon(e.v.toString(),"")),!n&&Y.Image&&(new Image().src=e.v,n=!0),n||(e.g=fg(e.l,null),e.g.da(e.v)),e.F=Date.now(),yi(e)}hg(t)}function da(t){t.g&&(ru(t),t.g.cancel(),t.g=null)}function ig(t){da(t),t.u&&(Y.clearTimeout(t.u),t.u=null),Ao(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Y.clearTimeout(t.m),t.m=null)}function fa(t){Gm(t.h)||t.m||(t.m=!0,Am(t.Ja,t),t.C=0)}function jS(t,e){return Qm(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=pi(rt(t.Ja,t,e),ug(t,t.C)),t.C++,!0)}$.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new gi(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=wm(i),_m(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=og(this,r,e),n=rn(this.F),ke(n,"RID",t),ke(n,"CVER",22),this.D&&ke(n,"X-HTTP-Session-Id",this.D),_i(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(sg(i)))+"&"+e:this.o&&tu(n,this.o,i)),Jl(this.h,r),this.Ya&&ke(n,"TYPE","init"),this.O?(ke(n,"$req",e),ke(n,"SID","null"),r.Z=!0,Pc(r,n,null)):Pc(r,n,e),this.G=2}}else this.G==3&&(t?Sd(this,t):this.i.length==0||Gm(this.h)||Sd(this))};function Sd(t,e){var n;e?n=e.m:n=t.U++;const s=rn(t.F);ke(s,"SID",t.I),ke(s,"RID",n),ke(s,"AID",t.T),_i(t,s),t.o&&t.s&&tu(s,t.o,t.s),n=new gi(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=og(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Jl(t.h,n),Pc(n,s,e)}function _i(t,e){t.ia&&Bl(t.ia,function(n,s){ke(e,s,n)}),t.l&&jm({},function(n,s){ke(e,s,n)})}function og(t,e,n){n=Math.min(t.i.length,n);var s=t.l?rt(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{LS(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function ag(t){t.g||t.u||(t.Z=1,Am(t.Ia,t),t.A=0)}function su(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=pi(rt(t.Ia,t),ug(t,t.A)),t.A++,!0)}$.Ia=function(){if(this.u=null,cg(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=pi(rt(this.eb,this),t)}};$.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ut(10),da(this),cg(this))};function ru(t){t.B!=null&&(Y.clearTimeout(t.B),t.B=null)}function cg(t){t.g=new gi(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=rn(t.sa);ke(e,"RID","rpc"),ke(e,"SID",t.I),ke(e,"CI",t.L?"0":"1"),ke(e,"AID",t.T),ke(e,"TYPE","xmlhttp"),_i(t,e),t.o&&t.s&&tu(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=la(rn(e)),n.s=null,n.P=!0,Fm(n,t)}$.cb=function(){this.v!=null&&(this.v=null,da(this),su(this),ut(19))};function Ao(t){t.v!=null&&(Y.clearTimeout(t.v),t.v=null)}function lg(t,e){var n=null;if(t.g==e){Ao(t),ru(t),t.g=null;var s=2}else if(Lc(t.h,e))n=e.D,Xm(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=ia(),Ye(s,new Pm(s,n)),fa(t)}else ag(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&jS(t,e)||s==2&&su(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Zn(t,5);break;case 4:Zn(t,10);break;case 3:Zn(t,6);break;default:Zn(t,2)}}}function ug(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Zn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=rt(t.kb,t);n||(n=new rs("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||So(n,"https"),la(n)),US(n.toString(),s)}else ut(2);t.G=0,t.l&&t.l.va(e),hg(t),ig(t)}$.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function hg(t){if(t.G=0,t.la=[],t.l){const e=Ym(t.h);(e.length!=0||t.i.length!=0)&&(pd(t.la,e),pd(t.la,t.i),t.h.i.length=0,Vl(t.i),t.i.length=0),t.l.ua()}}function dg(t,e,n){var s=n instanceof rs?rn(n):new rs(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Co(s,s.m);else{var r=Y.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new rs(null,void 0);s&&So(i,s),e&&(i.g=e),r&&Co(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&ke(s,n,e),ke(s,"VER",t.ma),_i(t,s),s}function fg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Oe(new vi({jb:!0})):new Oe(t.ra),e.Ka(t.H),e}function pg(){}$=pg.prototype;$.xa=function(){};$.wa=function(){};$.va=function(){};$.ua=function(){};$.Ra=function(){};function ko(){if(js&&!(10<=Number(iS)))throw Error("Environmental error: no available transport.")}ko.prototype.g=function(t,e){return new wt(t,e)};function wt(t,e){Ge.call(this),this.g=new rg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Eo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Eo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new sr(this)}Ze(wt,Ge);wt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ut(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=dg(t,null,t.V),fa(t)};wt.prototype.close=function(){nu(this.g)};wt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Wl(t),t=n);e.i.push(new OS(e.ab++,t)),e.G==3&&fa(e)};wt.prototype.M=function(){this.g.l=null,delete this.j,nu(this.g),delete this.g,wt.X.M.call(this)};function mg(t){Xl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ze(mg,Xl);function gg(){Yl.call(this),this.status=1}Ze(gg,Yl);function sr(t){this.g=t}Ze(sr,pg);sr.prototype.xa=function(){Ye(this.g,"a")};sr.prototype.wa=function(t){Ye(this.g,new mg(t))};sr.prototype.va=function(t){Ye(this.g,new gg)};sr.prototype.ua=function(){Ye(this.g,"b")};ko.prototype.createWebChannel=ko.prototype.g;wt.prototype.send=wt.prototype.u;wt.prototype.open=wt.prototype.m;wt.prototype.close=wt.prototype.close;oa.NO_ERROR=0;oa.TIMEOUT=8;oa.HTTP_ERROR=6;Mm.COMPLETE="complete";Lm.EventType=mi;mi.OPEN="a";mi.CLOSE="b";mi.ERROR="c";mi.MESSAGE="d";Ge.prototype.listen=Ge.prototype.N;Oe.prototype.listenOnce=Oe.prototype.O;Oe.prototype.getLastError=Oe.prototype.Oa;Oe.prototype.getLastErrorCode=Oe.prototype.Ea;Oe.prototype.getStatus=Oe.prototype.aa;Oe.prototype.getResponseJson=Oe.prototype.Sa;Oe.prototype.getResponseText=Oe.prototype.fa;Oe.prototype.send=Oe.prototype.da;Oe.prototype.setWithCredentials=Oe.prototype.Ka;var qS=function(){return new ko},HS=function(){return ia()},Ya=oa,KS=Mm,WS=fs,Cd={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},zS=vi,Bi=Lm,GS=Oe;const Ad="@firebase/firestore";/**
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
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
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
 */let rr="9.17.1";/**
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
 */const us=new Sl("@firebase/firestore");function kd(){return us.logLevel}function B(t,...e){if(us.logLevel<=de.DEBUG){const n=e.map(iu);us.debug(`Firestore (${rr}): ${t}`,...n)}}function on(t,...e){if(us.logLevel<=de.ERROR){const n=e.map(iu);us.error(`Firestore (${rr}): ${t}`,...n)}}function Uc(t,...e){if(us.logLevel<=de.WARN){const n=e.map(iu);us.warn(`Firestore (${rr}): ${t}`,...n)}}function iu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${rr}) INTERNAL ASSERTION FAILED: `+t;throw on(e),new Error(e)}function Se(t,e){t||Q()}function te(t,e){return t}/**
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class xn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class yg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class QS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class XS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class YS{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new xn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new xn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new xn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Se(typeof s.accessToken=="string"),new yg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new et(e)}}class JS{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Se(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class ZS{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new JS(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class eC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tC{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.A=n.token,new eC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function nC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class vg{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=nC(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function pe(t,e){return t<e?-1:t>e?1:0}function qs(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Be(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Be(0,0))}static max(){return new ee(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Xr{constructor(e,n,s){n===void 0?n=0:n>e.length&&Q(),s===void 0?s=e.length-n:s>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Xr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Xr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ae extends Xr{construct(e,n,s){return new Ae(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new U(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const sC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends Xr{construct(e,n,s){return new st(e,n,s)}static isValidIdentifier(e){return sC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new U(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new U(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new U(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new U(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Ae.fromString(e))}static fromName(e){return new q(Ae.fromString(e).popFirst(5))}static empty(){return new q(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Ae(e.slice()))}}function rC(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ee.fromTimestamp(s===1e9?new Be(n+1,0):new Be(n,s));return new On(r,q.empty(),e)}function iC(t){return new On(t.readTime,t.key,-1)}class On{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new On(ee.min(),q.empty(),-1)}static max(){return new On(ee.max(),q.empty(),-1)}}function oC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
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
 */const aC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function bi(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==aC)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,s)=>{n(e)})}static reject(e){return new S((n,s)=>{s(e)})}static waitFor(e){return new S((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=S.resolve(!1);for(const s of e)n=n.next(r=>r?S.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new S((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new S((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Ei(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ou{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}ou.at=-1;/**
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
 */class lC{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Yr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Yr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Yr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function xd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ps(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function wg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function pa(t){return t==null}function xo(t){return t===0&&1/t==-1/0}function uC(t){return typeof t=="number"&&Number.isInteger(t)&&!xo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new at(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const hC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pn(t){if(Se(!!t),typeof t=="string"){let e=0;const n=hC.exec(t);if(Se(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Hs(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
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
 */function _g(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function bg(t){const e=t.mapValue.fields.__previous_value__;return _g(e)?bg(e):e}function Jr(t){const e=Pn(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
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
 */const ji={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function hs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?_g(t)?4:dC(t)?9007199254740991:10:Q()}function zt(t,e){if(t===e)return!0;const n=hs(t);if(n!==hs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Jr(t).isEqual(Jr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Pn(s.timestampValue),o=Pn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Hs(s.bytesValue).isEqual(Hs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ve(s.geoPointValue.latitude)===Ve(r.geoPointValue.latitude)&&Ve(s.geoPointValue.longitude)===Ve(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ve(s.integerValue)===Ve(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ve(s.doubleValue),o=Ve(r.doubleValue);return i===o?xo(i)===xo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return qs(t.arrayValue.values||[],e.arrayValue.values||[],zt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(xd(i)!==xd(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!zt(i[a],o[a])))return!1;return!0}(t,e);default:return Q()}}function Zr(t,e){return(t.values||[]).find(n=>zt(n,e))!==void 0}function Ks(t,e){if(t===e)return 0;const n=hs(t),s=hs(e);if(n!==s)return pe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ve(r.integerValue||r.doubleValue),a=Ve(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Rd(t.timestampValue,e.timestampValue);case 4:return Rd(Jr(t),Jr(e));case 5:return pe(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Hs(r),a=Hs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=pe(o[c],a[c]);if(l!==0)return l}return pe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=pe(Ve(r.latitude),Ve(i.latitude));return o!==0?o:pe(Ve(r.longitude),Ve(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Ks(o[c],a[c]);if(l)return l}return pe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===ji.mapValue&&i===ji.mapValue)return 0;if(r===ji.mapValue)return 1;if(i===ji.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=pe(a[u],l[u]);if(h!==0)return h;const d=Ks(o[a[u]],c[l[u]]);if(d!==0)return d}return pe(a.length,l.length)}(t.mapValue,e.mapValue);default:throw Q()}}function Rd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=Pn(t),s=Pn(e),r=pe(n.seconds,s.seconds);return r!==0?r:pe(n.nanos,s.nanos)}function Ws(t){return Fc(t)}function Fc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Pn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Hs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Fc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Fc(s.fields[a])}`;return i+"}"}(t.mapValue):Q();var e,n}function Dd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Vc(t){return!!t&&"integerValue"in t}function au(t){return!!t&&"arrayValue"in t}function Nd(t){return!!t&&"nullValue"in t}function Od(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function to(t){return!!t&&"mapValue"in t}function Ar(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ps(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ar(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ar(t.arrayValue.values[n]);return e}return Object.assign({},t)}function dC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ro{constructor(e,n){this.position=e,this.inclusive=n}}function Pd(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=q.comparator(q.fromName(o.referenceValue),n.key):s=Ks(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Md(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!zt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Eg{}class $e extends Eg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new pC(e,n,s):n==="array-contains"?new yC(e,s):n==="in"?new vC(e,s):n==="not-in"?new wC(e,s):n==="array-contains-any"?new _C(e,s):new $e(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new mC(e,s):new gC(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ks(n,this.value)):n!==null&&hs(this.value)===hs(n)&&this.matchesComparison(Ks(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Mt extends Eg{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Mt(e,n)}matches(e){return Ig(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Ig(t){return t.op==="and"}function Tg(t){return fC(t)&&Ig(t)}function fC(t){for(const e of t.filters)if(e instanceof Mt)return!1;return!0}function $c(t){if(t instanceof $e)return t.field.canonicalString()+t.op.toString()+Ws(t.value);if(Tg(t))return t.filters.map(e=>$c(e)).join(",");{const e=t.filters.map(n=>$c(n)).join(",");return`${t.op}(${e})`}}function Sg(t,e){return t instanceof $e?function(n,s){return s instanceof $e&&n.op===s.op&&n.field.isEqual(s.field)&&zt(n.value,s.value)}(t,e):t instanceof Mt?function(n,s){return s instanceof Mt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Sg(i,s.filters[o]),!0):!1}(t,e):void Q()}function Cg(t){return t instanceof $e?function(e){return`${e.field.canonicalString()} ${e.op} ${Ws(e.value)}`}(t):t instanceof Mt?function(e){return e.op.toString()+" {"+e.getFilters().map(Cg).join(" ,")+"}"}(t):"Filter"}class pC extends $e{constructor(e,n,s){super(e,n,s),this.key=q.fromName(s.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class mC extends $e{constructor(e,n){super(e,"in",n),this.keys=Ag("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class gC extends $e{constructor(e,n){super(e,"not-in",n),this.keys=Ag("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ag(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>q.fromName(s.referenceValue))}class yC extends $e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return au(n)&&Zr(n.arrayValue,this.value)}}class vC extends $e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Zr(this.value.arrayValue,n)}}class wC extends $e{constructor(e,n){super(e,"not-in",n)}matches(e){if(Zr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Zr(this.value.arrayValue,n)}}class _C extends $e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!au(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Zr(this.value.arrayValue,s))}}/**
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
 */class kr{constructor(e,n="asc"){this.field=e,this.dir=n}}function bC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ke{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new Ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qi(this.root,e,this.comparator,!1)}getReverseIterator(){return new qi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qi(this.root,e,this.comparator,!0)}}class qi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Qe.RED,this.left=r!=null?r:Qe.EMPTY,this.right=i!=null?i:Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Qe(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Qe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Qe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class je{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ld(this.data.getIterator())}getIteratorFrom(e){return new Ld(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new je(this.comparator);return n.data=e,n}}class Ld{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class yt{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new yt([])}unionWith(e){let n=new je(st.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return qs(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class ft{constructor(e){this.value=e}static empty(){return new ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!to(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ar(n)}setAll(e){let n=st.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Ar(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());to(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return zt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];to(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){ps(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new ft(Ar(this.value))}}function kg(t){const e=[];return ps(t.fields,(n,s)=>{const r=new st([n]);if(to(s)){const i=kg(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new yt(e)}/**
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
 */class tt{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new tt(e,0,ee.min(),ee.min(),ee.min(),ft.empty(),0)}static newFoundDocument(e,n,s,r){return new tt(e,1,n,ee.min(),s,r,0)}static newNoDocument(e,n){return new tt(e,2,n,ee.min(),ee.min(),ft.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,ee.min(),ee.min(),ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class EC{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Ud(t,e=null,n=[],s=[],r=null,i=null,o=null){return new EC(t,e,n,s,r,i,o)}function cu(t){const e=te(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>$c(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),pa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ws(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ws(s)).join(",")),e.ft=n}return e.ft}function lu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!bC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Sg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Md(t.startAt,e.startAt)&&Md(t.endAt,e.endAt)}function Bc(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ii{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function IC(t,e,n,s,r,i,o,a){return new Ii(t,e,n,s,r,i,o,a)}function uu(t){return new Ii(t)}function Fd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function xg(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function hu(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Rg(t){return t.collectionGroup!==null}function Rs(t){const e=te(t);if(e.dt===null){e.dt=[];const n=hu(e),s=xg(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new kr(n)),e.dt.push(new kr(st.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new kr(st.keyField(),i))}}}return e.dt}function an(t){const e=te(t);if(!e._t)if(e.limitType==="F")e._t=Ud(e.path,e.collectionGroup,Rs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Rs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new kr(i.field,o))}const s=e.endAt?new Ro(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ro(e.startAt.position,e.startAt.inclusive):null;e._t=Ud(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function jc(t,e){e.getFirstInequalityField(),hu(t);const n=t.filters.concat([e]);return new Ii(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function qc(t,e,n){return new Ii(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ma(t,e){return lu(an(t),an(e))&&t.limitType===e.limitType}function Dg(t){return`${cu(an(t))}|lt:${t.limitType}`}function Hc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Cg(s)).join(", ")}]`),pa(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ws(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ws(s)).join(",")),`Target(${n})`}(an(t))}; limitType=${t.limitType})`}function ga(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):q.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Rs(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Pd(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Rs(n),s)||n.endAt&&!function(r,i,o){const a=Pd(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Rs(n),s))}(t,e)}function TC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ng(t){return(e,n)=>{let s=!1;for(const r of Rs(t)){const i=SC(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function SC(t,e,n){const s=t.field.isKeyField()?q.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Ks(a,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Q()}}/**
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
 */function Og(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xo(e)?"-0":e}}function Pg(t){return{integerValue:""+t}}function CC(t,e){return uC(e)?Pg(e):Og(t,e)}/**
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
 */class ya{constructor(){this._=void 0}}function AC(t,e,n){return t instanceof Do?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof ei?Lg(t,e):t instanceof ti?Ug(t,e):function(s,r){const i=Mg(s,r),o=Vd(i)+Vd(s.gt);return Vc(i)&&Vc(s.gt)?Pg(o):Og(s.yt,o)}(t,e)}function kC(t,e,n){return t instanceof ei?Lg(t,e):t instanceof ti?Ug(t,e):n}function Mg(t,e){return t instanceof No?Vc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Do extends ya{}class ei extends ya{constructor(e){super(),this.elements=e}}function Lg(t,e){const n=Fg(e);for(const s of t.elements)n.some(r=>zt(r,s))||n.push(s);return{arrayValue:{values:n}}}class ti extends ya{constructor(e){super(),this.elements=e}}function Ug(t,e){let n=Fg(e);for(const s of t.elements)n=n.filter(r=>!zt(r,s));return{arrayValue:{values:n}}}class No extends ya{constructor(e,n){super(),this.yt=e,this.gt=n}}function Vd(t){return Ve(t.integerValue||t.doubleValue)}function Fg(t){return au(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function xC(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ei&&s instanceof ei||n instanceof ti&&s instanceof ti?qs(n.elements,s.elements,zt):n instanceof No&&s instanceof No?zt(n.gt,s.gt):n instanceof Do&&s instanceof Do}(t.transform,e.transform)}class RC{constructor(e,n){this.version=e,this.transformResults=n}}class Ot{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ot}static exists(e){return new Ot(void 0,e)}static updateTime(e){return new Ot(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function no(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class va{}function Vg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new du(t.key,Ot.none()):new Ti(t.key,t.data,Ot.none());{const n=t.data,s=ft.empty();let r=new je(st.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Fn(t.key,s,new yt(r.toArray()),Ot.none())}}function DC(t,e,n){t instanceof Ti?function(s,r,i){const o=s.value.clone(),a=Bd(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Fn?function(s,r,i){if(!no(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Bd(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll($g(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function xr(t,e,n,s){return t instanceof Ti?function(r,i,o,a){if(!no(r.precondition,i))return o;const c=r.value.clone(),l=jd(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Fn?function(r,i,o,a){if(!no(r.precondition,i))return o;const c=jd(r.fieldTransforms,a,i),l=i.data;return l.setAll($g(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return no(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function NC(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Mg(s.transform,r||null);i!=null&&(n===null&&(n=ft.empty()),n.set(s.field,i))}return n||null}function $d(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&qs(n,s,(r,i)=>xC(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ti extends va{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Fn extends va{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function $g(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Bd(t,e,n){const s=new Map;Se(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,kC(o,a,n[r]))}return s}function jd(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,AC(i,o,e))}return s}class du extends va{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class OC extends va{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class PC{constructor(e){this.count=e}}/**
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
 */var Fe,le;function MC(t){switch(t){default:return Q();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function Bg(t){if(t===void 0)return on("GRPC error has no .code"),E.UNKNOWN;switch(t){case Fe.OK:return E.OK;case Fe.CANCELLED:return E.CANCELLED;case Fe.UNKNOWN:return E.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return E.INTERNAL;case Fe.UNAVAILABLE:return E.UNAVAILABLE;case Fe.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Fe.NOT_FOUND:return E.NOT_FOUND;case Fe.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Fe.ABORTED:return E.ABORTED;case Fe.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Fe.DATA_LOSS:return E.DATA_LOSS;default:return Q()}}(le=Fe||(Fe={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ir{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ps(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return wg(this.inner)}size(){return this.innerSize}}/**
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
 */const LC=new Ke(q.comparator);function cn(){return LC}const jg=new Ke(q.comparator);function yr(...t){let e=jg;for(const n of t)e=e.insert(n.key,n);return e}function qg(t){let e=jg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function es(){return Rr()}function Hg(){return Rr()}function Rr(){return new ir(t=>t.toString(),(t,e)=>t.isEqual(e))}const UC=new Ke(q.comparator),FC=new je(q.comparator);function ae(...t){let e=FC;for(const n of t)e=e.add(n);return e}const VC=new je(pe);function Kg(){return VC}/**
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
 */class wa{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Si.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new wa(ee.min(),r,Kg(),cn(),ae())}}class Si{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Si(s,n,ae(),ae(),ae())}}/**
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
 */class so{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class Wg{constructor(e,n){this.targetId=e,this.Et=n}}class zg{constructor(e,n,s=at.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class qd{constructor(){this.At=0,this.Rt=Kd(),this.bt=at.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=ae(),n=ae(),s=ae();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:Q()}}),new Si(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=Kd()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class $C{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=cn(),this.qt=Hd(),this.Ut=new je(pe)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(e){const n=e.targetId,s=e.Et.count,r=this.Yt(n);if(r){const i=r.target;if(Bc(i))if(s===0){const o=new q(i.path);this.Qt(n,o,tt.newNoDocument(o,ee.min()))}else Se(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Bc(a.target)){const c=new q(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,tt.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=ae();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new wa(e,n,this.Ut,this.Lt,s);return this.Lt=cn(),this.qt=Hd(),this.Ut=new je(pe),r}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new qd,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new je(pe),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new qd),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Hd(){return new Ke(q.comparator)}function Kd(){return new Ke(q.comparator)}/**
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
 */const BC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),jC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),qC=(()=>({and:"AND",or:"OR"}))();class HC{constructor(e,n){this.databaseId=e,this.wt=n}}function Oo(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gg(t,e){return t.wt?e.toBase64():e.toUint8Array()}function KC(t,e){return Oo(t,e.toTimestamp())}function Ht(t){return Se(!!t),ee.fromTimestamp(function(e){const n=Pn(e);return new Be(n.seconds,n.nanos)}(t))}function fu(t,e){return function(n){return new Ae(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Qg(t){const e=Ae.fromString(t);return Se(Zg(e)),e}function Kc(t,e){return fu(t.databaseId,e.path)}function Ja(t,e){const n=Qg(e);if(n.get(1)!==t.databaseId.projectId)throw new U(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(Xg(n))}function Wc(t,e){return fu(t.databaseId,e)}function WC(t){const e=Qg(t);return e.length===4?Ae.emptyPath():Xg(e)}function zc(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Xg(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Wd(t,e,n){return{name:Kc(t,e),fields:n.value.mapValue.fields}}function zC(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.wt?(Se(l===void 0||typeof l=="string"),at.fromBase64String(l||"")):(Se(l===void 0||l instanceof Uint8Array),at.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?E.UNKNOWN:Bg(c.code);return new U(l,c.message||"")}(o);n=new zg(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Ja(t,s.document.name),i=Ht(s.document.updateTime),o=s.document.createTime?Ht(s.document.createTime):ee.min(),a=new ft({mapValue:{fields:s.document.fields}}),c=tt.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new so(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Ja(t,s.document),i=s.readTime?Ht(s.readTime):ee.min(),o=tt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new so([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Ja(t,s.document),i=s.removedTargetIds||[];n=new so([],i,r,null)}else{if(!("filter"in e))return Q();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new PC(r),o=s.targetId;n=new Wg(o,i)}}return n}function GC(t,e){let n;if(e instanceof Ti)n={update:Wd(t,e.key,e.value)};else if(e instanceof du)n={delete:Kc(t,e.key)};else if(e instanceof Fn)n={update:Wd(t,e.key,e.data),updateMask:s1(e.fieldMask)};else{if(!(e instanceof OC))return Q();n={verify:Kc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Do)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ei)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ti)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof No)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw Q()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:KC(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Q()}(t,e.precondition)),n}function QC(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Ht(s.updateTime):Ht(r);return i.isEqual(ee.min())&&(i=Ht(r)),new RC(i,s.transformResults||[])}(n,e))):[]}function XC(t,e){return{documents:[Wc(t,e.path)]}}function YC(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Wc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Wc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Jg(Mt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Es(u.field),direction:e1(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.wt||pa(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function JC(t){let e=WC(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Se(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Yg(u);return h instanceof Mt&&Tg(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new kr(Is(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,pa(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Ro(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Ro(d,h)}(n.endAt)),IC(e,r,o,i,a,"F",c,l)}function ZC(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Q()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Yg(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Is(e.unaryFilter.field);return $e.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Is(e.unaryFilter.field);return $e.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Is(e.unaryFilter.field);return $e.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Is(e.unaryFilter.field);return $e.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(e){return $e.create(Is(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Mt.create(e.compositeFilter.filters.map(n=>Yg(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Q()}}(e.compositeFilter.op))}(t):Q()}function e1(t){return BC[t]}function t1(t){return jC[t]}function n1(t){return qC[t]}function Es(t){return{fieldPath:t.canonicalString()}}function Is(t){return st.fromServerFormat(t.fieldPath)}function Jg(t){return t instanceof $e?function(e){if(e.op==="=="){if(Od(e.value))return{unaryFilter:{field:Es(e.field),op:"IS_NAN"}};if(Nd(e.value))return{unaryFilter:{field:Es(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Od(e.value))return{unaryFilter:{field:Es(e.field),op:"IS_NOT_NAN"}};if(Nd(e.value))return{unaryFilter:{field:Es(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Es(e.field),op:t1(e.op),value:e.value}}}(t):t instanceof Mt?function(e){const n=e.getFilters().map(s=>Jg(s));return n.length===1?n[0]:{compositeFilter:{op:n1(e.op),filters:n}}}(t):Q()}function s1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Zg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class r1{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&DC(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=xr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=xr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Hg();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Vg(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(ee.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&qs(this.mutations,e.mutations,(n,s)=>$d(n,s))&&qs(this.baseMutations,e.baseMutations,(n,s)=>$d(n,s))}}class pu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Se(e.mutations.length===s.length);let r=UC;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new pu(e,n,s,r)}}/**
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
 */class i1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class is{constructor(e,n,s,r,i=ee.min(),o=ee.min(),a=at.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new is(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new is(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new is(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class o1{constructor(e){this.ie=e}}function a1(t){const e=JC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?qc(e,e.limit,"L"):e}/**
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
 */class c1{constructor(){this.Je=new l1}addToCollectionParentIndex(e,n){return this.Je.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(On.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(On.min())}updateCollectionGroup(e,n,s){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class l1{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new je(Ae.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new je(Ae.comparator)).toArray()}}/**
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
 */class zs{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new zs(0)}static vn(){return new zs(-1)}}/**
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
 */class u1{constructor(){this.changes=new ir(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?S.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class h1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class d1{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&xr(s.mutation,r,yt.empty(),Be.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ae()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ae()){const r=es();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=yr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=es();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ae()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=cn();const o=Rr(),a=Rr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Fn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),xr(u.mutation,l,u.mutation.getFieldMask(),Be.now())):o.set(l.key,yt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new h1(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Rr();let r=new Ke((o,a)=>o-a),i=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||yt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||ae()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Hg();u.forEach(d=>{if(!i.has(d)){const m=Vg(n.get(d),s.get(d));m!==null&&h.set(d,m),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return S.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return q.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Rg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):S.resolve(es());let a=-1,c=i;return o.next(l=>S.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ae())).next(u=>({batchId:a,changes:qg(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(s=>{let r=yr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=yr();return this.indexManager.getCollectionParents(e,r).next(o=>S.forEach(o,a=>{const c=function(l,u){return new Ii(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,tt.newInvalidDocument(l)))});let o=yr();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&xr(l.mutation,c,yt.empty(),Be.now()),ga(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class f1{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return S.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Ht(s.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:a1(s.bundledQuery),readTime:Ht(s.readTime)}}(n)),S.resolve()}}/**
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
 */class p1{constructor(){this.overlays=new Ke(q.comparator),this.es=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const s=es();return S.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.oe(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),S.resolve()}getOverlaysForCollection(e,n,s){const r=es(),i=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return S.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ke((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=es(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=es(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return S.resolve(a)}oe(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new i1(n,s));let i=this.es.get(n);i===void 0&&(i=ae(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
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
 */class mu{constructor(){this.ns=new je(We.ss),this.rs=new je(We.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new We(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new We(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new q(new Ae([])),s=new We(n,e),r=new We(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new q(new Ae([])),s=new We(n,e),r=new We(n,e+1);let i=ae();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new We(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class We{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return q.comparator(e.key,n.key)||pe(e._s,n._s)}static os(e,n){return pe(e._s,n._s)||q.comparator(e.key,n.key)}}/**
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
 */class m1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new je(We.ss)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new r1(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new We(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new We(n,0),r=new We(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new je(pe);return n.forEach(r=>{const i=new We(r,0),o=new We(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),S.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;q.isDocumentKey(i)||(i=i.child(""));const o=new We(new q(i),0);let a=new je(pe);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c._s)),!0)},o),S.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Se(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return S.forEach(n.mutations,r=>{const i=new We(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new We(n,0),r=this.gs.firstAfterOrEqual(s);return S.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class g1{constructor(e){this.Es=e,this.docs=new Ke(q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return S.resolve(s?s.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let s=cn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():tt.newInvalidDocument(r))}),S.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=cn();const o=n.path,a=new q(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||oC(iC(u),s)<=0||(r.has(u.key)||ga(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,s,r){Q()}As(e,n){return S.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new y1(this)}getSize(e){return S.resolve(this.size)}}class y1 extends u1{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),S.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class v1{constructor(e){this.persistence=e,this.Rs=new ir(n=>cu(n),lu),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.bs=0,this.Ps=new mu,this.targetCount=0,this.vs=zs.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),S.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new zs(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Dn(n),S.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),S.waitFor(i).next(()=>r)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return S.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),S.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),S.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return S.resolve(s)}containsKey(e,n){return S.resolve(this.Ps.containsKey(n))}}/**
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
 */class w1{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new ou(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new v1(this),this.indexManager=new c1,this.remoteDocumentCache=function(s){return new g1(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new o1(n),this.Ns=new f1(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new p1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new m1(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){B("MemoryPersistence","Starting transaction:",e);const r=new _1(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return S.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class _1 extends cC{constructor(e){super(),this.currentSequenceNumber=e}}class gu{constructor(e){this.persistence=e,this.Fs=new mu,this.$s=null}static Bs(e){return new gu(e)}get Ls(){if(this.$s)return this.$s;throw Q()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),S.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),S.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Ls,s=>{const r=q.fromPath(s);return this.qs(e,r).next(i=>{i||n.removeEntry(r,ee.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return S.or([()=>S.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class yu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=ae(),r=ae();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new yu(e,n.fromCache,s,r)}}/**
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
 */class b1{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(Fd(n))return S.resolve(null);let s=an(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=qc(n,null,"F"),s=an(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ae(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,qc(n,null,"F")):this.Bi(e,l,n,c)}))})))}Oi(e,n,s,r){return Fd(n)||r.isEqual(ee.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(kd()<=de.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Hc(n)),this.Bi(e,o,n,rC(r,-1)))})}Fi(e,n){let s=new je(Ng(e));return n.forEach((r,i)=>{ga(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return kd()<=de.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Hc(n)),this.Ni.getDocumentsMatchingQuery(e,n,On.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class E1{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.yt=r,this.qi=new Ke(pe),this.Ui=new ir(i=>cu(i),lu),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new d1(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function I1(t,e,n,s){return new E1(t,e,n,s)}async function ey(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ae();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function T1(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=S.resolve();return h.forEach(m=>{d=d.next(()=>l.getEntry(a,m)).next(g=>{const w=c.docVersions.get(m);Se(w!==null),g.version.compareTo(w)<0&&(u.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),l.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ae();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function ty(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function S1(t,e){const n=te(t),s=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,h)));let m=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(at.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,s)),r=r.insert(h,m),function(g,w,C){return g.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(d,m,u)&&a.push(n.Cs.updateTargetData(i,m))});let c=cn(),l=ae();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(C1(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(ee.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return S.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.qi=r,i))}function C1(t,e,n){let s=ae(),r=ae();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=cn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(ee.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):B("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function A1(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function k1(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,S.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new is(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function Gc(t,e,n){const s=te(t),r=s.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ei(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function zd(t,e,n){const s=te(t);let r=ee.min(),i=ae();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=te(a),h=u.Ui.get(l);return h!==void 0?S.resolve(u.qi.get(h)):u.Cs.getTargetData(c,l)}(s,o,an(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:ee.min(),n?i:ae())).next(a=>(x1(s,TC(e),a),{documents:a,Hi:i})))}function x1(t,e,n){let s=t.Ki.get(e)||ee.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class Gd{constructor(){this.activeTargetIds=Kg()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class R1{constructor(){this.Lr=new Gd,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Gd,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class D1{Ur(e){}shutdown(){}}/**
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
 */class Qd{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const N1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class O1{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class P1 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);B("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(B("RestConnection","Received: ",c),c),c=>{throw Uc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+rr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=N1[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new GS;a.setWithCredentials(!0),a.listenOnce(KS.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ya.NO_ERROR:const l=a.getResponseJson();B("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Ya.TIMEOUT:B("Connection",'RPC "'+e+'" timed out'),o(new U(E.DEADLINE_EXCEEDED,"Request time out"));break;case Ya.HTTP_ERROR:const u=a.getStatus();if(B("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const m=function(g){const w=g.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(w)>=0?w:E.UNKNOWN}(d.status);o(new U(m,d.message))}else o(new U(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new U(E.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{B("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=qS(),o=HS(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new zS({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");B("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new O1({Hr:g=>{h?B("Connection","Not sending because WebChannel is closed:",g):(u||(B("Connection","Opening WebChannel transport."),l.open(),u=!0),B("Connection","WebChannel sending:",g),l.send(g))},Jr:()=>l.close()}),m=(g,w,C)=>{g.listen(w,k=>{try{C(k)}catch(N){setTimeout(()=>{throw N},0)}})};return m(l,Bi.EventType.OPEN,()=>{h||B("Connection","WebChannel transport opened.")}),m(l,Bi.EventType.CLOSE,()=>{h||(h=!0,B("Connection","WebChannel transport closed"),d.io())}),m(l,Bi.EventType.ERROR,g=>{h||(h=!0,Uc("Connection","WebChannel transport errored:",g),d.io(new U(E.UNAVAILABLE,"The operation could not be completed")))}),m(l,Bi.EventType.MESSAGE,g=>{var w;if(!h){const C=g.data[0];Se(!!C);const k=C,N=k.error||((w=k[0])===null||w===void 0?void 0:w.error);if(N){B("Connection","WebChannel received error:",N);const P=N.status;let z=function(fe){const J=Fe[fe];if(J!==void 0)return Bg(J)}(P),X=N.message;z===void 0&&(z=E.INTERNAL,X="Unknown error status: "+P+" with message "+N.message),h=!0,d.io(new U(z,X)),l.close()}else B("Connection","WebChannel received:",C),d.ro(C)}}),m(o,WS.STAT_EVENT,g=>{g.stat===Cd.PROXY?B("Connection","Detected buffering proxy"):g.stat===Cd.NOPROXY&&B("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Za(){return typeof document<"u"?document:null}/**
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
 */function _a(t){return new HC(t,!0)}class ny{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&B("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class sy{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new ny(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(on(n.toString()),on("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new U(E.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class M1 extends sy{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=zC(this.yt,e),s=function(r){if(!("targetChange"in r))return ee.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?ee.min():i.readTime?Ht(i.readTime):ee.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=zc(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=Bc(a)?{documents:XC(r,a)}:{query:YC(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Gg(r,i.resumeToken):i.snapshotVersion.compareTo(ee.min())>0&&(o.readTime=Oo(r,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=ZC(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=zc(this.yt),n.removeTarget=e,this.Bo(n)}}class L1 extends sy{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=QC(e.writeResults,e.commitTime),s=Ht(e.commitTime);return this.listener.Zo(s,n)}return Se(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=zc(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>GC(this.yt,s))};this.Bo(n)}}/**
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
 */class U1 extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new U(E.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new U(E.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(E.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class F1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(on(n),this.ou=!1):B("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class V1{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{ms(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=te(a);c._u.add(4),await Ci(c),c.gu.set("Unknown"),c._u.delete(4),await ba(c)}(this))})}),this.gu=new F1(s,r)}}async function ba(t){if(ms(t))for(const e of t.wu)await e(!0)}async function Ci(t){for(const e of t.wu)await e(!1)}function ry(t,e){const n=te(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),_u(n)?wu(n):or(n).ko()&&vu(n,e))}function iy(t,e){const n=te(t),s=or(n);n.du.delete(e),s.ko()&&oy(n,e),n.du.size===0&&(s.ko()?s.Fo():ms(n)&&n.gu.set("Unknown"))}function vu(t,e){t.yu.Ot(e.targetId),or(t).zo(e)}function oy(t,e){t.yu.Ot(e),or(t).Ho(e)}function wu(t){t.yu=new $C({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),or(t).start(),t.gu.uu()}function _u(t){return ms(t)&&!or(t).No()&&t.du.size>0}function ms(t){return te(t)._u.size===0}function ay(t){t.yu=void 0}async function $1(t){t.du.forEach((e,n)=>{vu(t,e)})}async function B1(t,e){ay(t),_u(t)?(t.gu.hu(e),wu(t)):t.gu.set("Unknown")}async function j1(t,e,n){if(t.gu.set("Online"),e instanceof zg&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Po(t,s)}else if(e instanceof so?t.yu.Kt(e):e instanceof Wg?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(ee.min()))try{const s=await ty(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.du.get(c);l&&r.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(at.EMPTY_BYTE_STRING,c.snapshotVersion)),oy(r,a);const l=new is(c.target,a,1,c.sequenceNumber);vu(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){B("RemoteStore","Failed to raise snapshot:",s),await Po(t,s)}}async function Po(t,e,n){if(!Ei(e))throw e;t._u.add(1),await Ci(t),t.gu.set("Offline"),n||(n=()=>ty(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await ba(t)})}function cy(t,e){return e().catch(n=>Po(t,n,e))}async function Ea(t){const e=te(t),n=Mn(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;q1(e);)try{const r=await A1(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,H1(e,r)}catch(r){await Po(e,r)}ly(e)&&uy(e)}function q1(t){return ms(t)&&t.fu.length<10}function H1(t,e){t.fu.push(e);const n=Mn(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function ly(t){return ms(t)&&!Mn(t).No()&&t.fu.length>0}function uy(t){Mn(t).start()}async function K1(t){Mn(t).eu()}async function W1(t){const e=Mn(t);for(const n of t.fu)e.Xo(n.mutations)}async function z1(t,e,n){const s=t.fu.shift(),r=pu.from(s,e,n);await cy(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ea(t)}async function G1(t,e){e&&Mn(t).Yo&&await async function(n,s){if(r=s.code,MC(r)&&r!==E.ABORTED){const i=n.fu.shift();Mn(n).Mo(),await cy(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ea(n)}var r}(t,e),ly(t)&&uy(t)}async function Xd(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const s=ms(n);n._u.add(3),await Ci(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await ba(n)}async function Q1(t,e){const n=te(t);e?(n._u.delete(2),await ba(n)):e||(n._u.add(2),await Ci(n),n.gu.set("Unknown"))}function or(t){return t.pu||(t.pu=function(e,n,s){const r=te(e);return r.su(),new M1(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:$1.bind(null,t),Zr:B1.bind(null,t),Wo:j1.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),_u(t)?wu(t):t.gu.set("Unknown")):(await t.pu.stop(),ay(t))})),t.pu}function Mn(t){return t.Iu||(t.Iu=function(e,n,s){const r=te(e);return r.su(),new L1(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:K1.bind(null,t),Zr:G1.bind(null,t),tu:W1.bind(null,t),Zo:z1.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Ea(t)):(await t.Iu.stop(),t.fu.length>0&&(B("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class bu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new bu(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Eu(t,e){if(on("AsyncQueue",`${e}: ${t}`),Ei(t))return new U(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ds{constructor(e){this.comparator=e?(n,s)=>e(n,s)||q.comparator(n.key,s.key):(n,s)=>q.comparator(n.key,s.key),this.keyedMap=yr(),this.sortedSet=new Ke(this.comparator)}static emptySet(e){return new Ds(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ds)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ds;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Yd{constructor(){this.Tu=new Ke(q.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):Q():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Gs{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Gs(e,n,Ds.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ma(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class X1{constructor(){this.Au=void 0,this.listeners=[]}}class Y1{constructor(){this.queries=new ir(e=>Dg(e),ma),this.onlineState="Unknown",this.Ru=new Set}}async function hy(t,e){const n=te(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new X1),r)try{i.Au=await n.onListen(s)}catch(o){const a=Eu(o,`Initialization of query '${Hc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Iu(n)}async function dy(t,e){const n=te(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function J1(t,e){const n=te(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Iu(n)}function Z1(t,e,n){const s=te(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Iu(t){t.Ru.forEach(e=>{e.next()})}class fy{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Gs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Gs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class py{constructor(e){this.key=e}}class my{constructor(e){this.key=e}}class eA{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ae(),this.mutatedKeys=ae(),this.Gu=Ng(e),this.Qu=new Ds(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new Yd,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),m=ga(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),w=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let C=!1;d&&m?d.data.isEqual(m.data)?g!==w&&(s.track({type:3,doc:m}),C=!0):this.Hu(d,m)||(s.track({type:2,doc:m}),C=!0,(c&&this.Gu(m,c)>0||l&&this.Gu(m,l)<0)&&(a=!0)):!d&&m?(s.track({type:0,doc:m}),C=!0):d&&!m&&(s.track({type:1,doc:d}),C=!0,(c||l)&&(a=!0)),C&&(m?(o=o.add(m),i=w?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((l,u)=>function(h,d){const m=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return m(h)-m(d)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new Gs(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Yd,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ae(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new my(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new py(s))}),n}tc(e){this.qu=e.Hi,this.Ku=ae();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Gs.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class tA{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class nA{constructor(e){this.key=e,this.nc=!1}}class sA{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new ir(a=>Dg(a),ma),this.rc=new Map,this.oc=new Set,this.uc=new Ke(q.comparator),this.cc=new Map,this.ac=new mu,this.hc={},this.lc=new Map,this.fc=zs.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function rA(t,e){const n=pA(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await k1(n.localStore,an(e));n.isPrimaryClient&&ry(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await iA(n,e,s,a==="current",o.resumeToken)}return r}async function iA(t,e,n,s,r){t._c=(h,d,m)=>async function(g,w,C,k){let N=w.view.Wu(C);N.$i&&(N=await zd(g.localStore,w.query,!1).then(({documents:X})=>w.view.Wu(X,N)));const P=k&&k.targetChanges.get(w.targetId),z=w.view.applyChanges(N,g.isPrimaryClient,P);return Zd(g,w.targetId,z.Xu),z.snapshot}(t,h,d,m);const i=await zd(t.localStore,e,!0),o=new eA(e,i.Hi),a=o.Wu(i.documents),c=Si.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Zd(t,n,l.Xu);const u=new tA(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function oA(t,e){const n=te(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!ma(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Gc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),iy(n.remoteStore,s.targetId),Qc(n,s.targetId)}).catch(bi)):(Qc(n,s.targetId),await Gc(n.localStore,s.targetId,!0))}async function aA(t,e,n){const s=mA(t);try{const r=await function(i,o){const a=te(i),c=Be.now(),l=o.reduce((d,m)=>d.add(m.key),ae());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=cn(),g=ae();return a.Gi.getEntries(d,l).next(w=>{m=w,m.forEach((C,k)=>{k.isValidDocument()||(g=g.add(C))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(w=>{u=w;const C=[];for(const k of o){const N=NC(k,u.get(k.key).overlayedDocument);N!=null&&C.push(new Fn(k.key,N,kg(N.value.mapValue),Ot.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,C,o)}).next(w=>{h=w;const C=w.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(d,w.batchId,C)})}).then(()=>({batchId:h.batchId,changes:qg(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new Ke(pe)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Ai(s,r.changes),await Ea(s.remoteStore)}catch(r){const i=Eu(r,"Failed to persist write");n.reject(i)}}async function gy(t,e){const n=te(t);try{const s=await S1(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(Se(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?Se(o.nc):r.removedDocuments.size>0&&(Se(o.nc),o.nc=!1))}),await Ai(n,s,e)}catch(s){await bi(s)}}function Jd(t,e,n){const s=te(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=te(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&Iu(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function cA(t,e,n){const s=te(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new Ke(q.comparator);o=o.insert(i,tt.newNoDocument(i,ee.min()));const a=ae().add(i),c=new wa(ee.min(),new Map,new je(pe),o,a);await gy(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),Tu(s)}else await Gc(s.localStore,e,!1).then(()=>Qc(s,e,n)).catch(bi)}async function lA(t,e){const n=te(t),s=e.batch.batchId;try{const r=await T1(n.localStore,e);vy(n,s,null),yy(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ai(n,r)}catch(r){await bi(r)}}async function uA(t,e,n){const s=te(t);try{const r=await function(i,o){const a=te(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Se(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);vy(s,e,n),yy(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ai(s,r)}catch(r){await bi(r)}}function yy(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function vy(t,e,n){const s=te(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function Qc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||wy(t,s)})}function wy(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(iy(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Tu(t))}function Zd(t,e,n){for(const s of n)s instanceof py?(t.ac.addReference(s.key,e),hA(t,s)):s instanceof my?(B("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||wy(t,s.key)):Q()}function hA(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(B("SyncEngine","New document in limbo: "+n),t.oc.add(s),Tu(t))}function Tu(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new q(Ae.fromString(e)),s=t.fc.next();t.cc.set(s,new nA(n)),t.uc=t.uc.insert(n,s),ry(t.remoteStore,new is(an(uu(n.path)),s,2,ou.at))}}async function Ai(t,e,n){const s=te(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=yu.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const l=te(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>S.forEach(c,h=>S.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>S.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Ei(u))throw u;B("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.qi.get(h),m=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(m);l.qi=l.qi.insert(h,g)}}}(s.localStore,i))}async function dA(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const s=await ey(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new U(E.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ai(n,s.ji)}}function fA(t,e){const n=te(t),s=n.cc.get(e);if(s&&s.nc)return ae().add(s.key);{let r=ae();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function pA(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=gy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cA.bind(null,e),e.sc.Wo=J1.bind(null,e.eventManager),e.sc.wc=Z1.bind(null,e.eventManager),e}function mA(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uA.bind(null,e),e}class gA{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=_a(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return I1(this.persistence,new b1,e.initialUser,this.yt)}yc(e){return new w1(gu.Bs,this.yt)}gc(e){return new R1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class yA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Jd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=dA.bind(null,this.syncEngine),await Q1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Y1}createDatastore(e){const n=_a(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new P1(r));var r;return function(i,o,a,c){return new U1(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Jd(this.syncEngine,a,0),o=Qd.C()?new Qd:new D1,new V1(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new sA(s,r,i,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=te(e);B("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Ci(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function _y(t,e,n){if(!n)throw new U(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vA(t,e,n,s){if(e===!0&&s===!0)throw new U(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ef(t){if(!q.isDocumentKey(t))throw new U(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function tf(t){if(q.isDocumentKey(t))throw new U(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ia(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function Kt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ia(t);throw new U(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const nf=new Map;class sf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new U(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,vA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Ta{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new QS;switch(n.type){case"gapi":const s=n.client;return new ZS(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new U(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=nf.get(e);n&&(B("ComponentProvider","Removing Datastore"),nf.delete(e),n.terminate())}(this),Promise.resolve()}}function wA(t,e,n,s={}){var r;const i=(t=Kt(t,Ta))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Uc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=et.MOCK_USER;else{o=O_(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new U(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new et(c)}t._authCredentials=new XS(new yg(o,a))}}/**
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
 */class pt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pt(this.firestore,e,this._key)}}class gs{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new gs(this.firestore,e,this._query)}}class Rn extends gs{constructor(e,n,s){super(e,n,uu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pt(this.firestore,null,new q(e))}withConverter(e){return new Rn(this.firestore,e,this._path)}}function Su(t,e,...n){if(t=He(t),_y("collection","path",e),t instanceof Ta){const s=Ae.fromString(e,...n);return tf(s),new Rn(t,null,s)}{if(!(t instanceof pt||t instanceof Rn))throw new U(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ae.fromString(e,...n));return tf(s),new Rn(t.firestore,null,s)}}function Cu(t,e,...n){if(t=He(t),arguments.length===1&&(e=vg.R()),_y("doc","path",e),t instanceof Ta){const s=Ae.fromString(e,...n);return ef(s),new pt(t,null,new q(s))}{if(!(t instanceof pt||t instanceof Rn))throw new U(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ae.fromString(e,...n));return ef(s),new pt(t.firestore,t instanceof Rn?t.converter:null,new q(s))}}/**
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
 *//**
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
 */class by{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):on("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class _A{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=et.UNAUTHENTICATED,this.clientId=vg.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{B("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(B("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Eu(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function bA(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await ey(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function EA(t,e){t.asyncQueue.verifyOperationInProgress();const n=await IA(t);B("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Xd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Xd(e.remoteStore,i)),t.onlineComponents=e}async function IA(t){return t.offlineComponents||(B("FirestoreClient","Using default OfflineComponentProvider"),await bA(t,new gA)),t.offlineComponents}async function Ey(t){return t.onlineComponents||(B("FirestoreClient","Using default OnlineComponentProvider"),await EA(t,new yA)),t.onlineComponents}function TA(t){return Ey(t).then(e=>e.syncEngine)}async function Xc(t){const e=await Ey(t),n=e.eventManager;return n.onListen=rA.bind(null,e.syncEngine),n.onUnlisten=oA.bind(null,e.syncEngine),n}function SA(t,e,n={}){const s=new xn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new by({next:h=>{i.enqueueAndForget(()=>dy(r,u)),h.fromCache&&a.source==="server"?c.reject(new U(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new fy(o,l,{includeMetadataChanges:!0,Nu:!0});return hy(r,u)}(await Xc(t),t.asyncQueue,e,n,s)),s.promise}class CA{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new ny(this,"async_queue_retry"),this.Wc=()=>{const n=Za();n&&B("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Za();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Za();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new xn;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Ei(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw on("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=bu.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&Q()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function rf(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class ds extends Ta{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new CA,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Iy(this),this._firestoreClient.terminate()}}function AA(t,e){const n=typeof t=="object"?t:Pp(),s=typeof t=="string"?t:e||"(default)",r=Al(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=R_("firestore");i&&wA(r,...i)}return r}function Au(t){return t._firestoreClient||Iy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Iy(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new lC(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new _A(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 *//**
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
 */class Qs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qs(at.fromBase64String(e))}catch(n){throw new U(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qs(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Sa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ku{constructor(e){this._methodName=e}}/**
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
 */class xu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
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
 */const kA=/^__.*__$/;class xA{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Fn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ti(e,this.data,n,this.fieldTransforms)}}class Ty{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Fn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Sy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Ru{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Ru(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Mo(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Sy(this.sa)&&kA.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class RA{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||_a(e)}da(e,n,s,r=!1){return new Ru({sa:e,methodName:n,fa:s,path:st.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Du(t){const e=t._freezeSettings(),n=_a(t._databaseId);return new RA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function DA(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);Nu("Data must be an object, but it was:",o,s);const a=Cy(s,o);let c,l;if(i.merge)c=new yt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Yc(e,h,n);if(!o.contains(d))throw new U(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);ky(u,d)||u.push(d)}c=new yt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new xA(new ft(a),c,l)}class Ca extends ku{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ca}}function NA(t,e,n,s){const r=t.da(1,e,n);Nu("Data must be an object, but it was:",r,s);const i=[],o=ft.empty();ps(s,(c,l)=>{const u=Ou(e,c,n);l=He(l);const h=r.ca(u);if(l instanceof Ca)i.push(u);else{const d=ki(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new yt(i);return new Ty(o,a,r.fieldTransforms)}function OA(t,e,n,s,r,i){const o=t.da(1,e,n),a=[Yc(e,s,n)],c=[r];if(i.length%2!=0)throw new U(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Yc(e,i[d])),c.push(i[d+1]);const l=[],u=ft.empty();for(let d=a.length-1;d>=0;--d)if(!ky(l,a[d])){const m=a[d];let g=c[d];g=He(g);const w=o.ca(m);if(g instanceof Ca)l.push(m);else{const C=ki(g,w);C!=null&&(l.push(m),u.set(m,C))}}const h=new yt(l);return new Ty(u,h,o.fieldTransforms)}function PA(t,e,n,s=!1){return ki(n,t.da(s?4:3,e))}function ki(t,e){if(Ay(t=He(t)))return Nu("Unsupported field value:",e,t),Cy(t,e);if(t instanceof ku)return function(n,s){if(!Sy(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=ki(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=He(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return CC(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Be.fromDate(n);return{timestampValue:Oo(s.yt,r)}}if(n instanceof Be){const r=new Be(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Oo(s.yt,r)}}if(n instanceof xu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Qs)return{bytesValue:Gg(s.yt,n._byteString)};if(n instanceof pt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:fu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Ia(n)}`)}(t,e)}function Cy(t,e){const n={};return wg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ps(t,(s,r)=>{const i=ki(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Ay(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof xu||t instanceof Qs||t instanceof pt||t instanceof ku)}function Nu(t,e,n){if(!Ay(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ia(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function Yc(t,e,n){if((e=He(e))instanceof Sa)return e._internalPath;if(typeof e=="string")return Ou(t,e);throw Mo("Field path arguments must be of type string or ",t,!1,void 0,n)}const MA=new RegExp("[~\\*/\\[\\]]");function Ou(t,e,n){if(e.search(MA)>=0)throw Mo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Sa(...e.split("."))._internalPath}catch{throw Mo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Mo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new U(E.INVALID_ARGUMENT,a+t+c)}function ky(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class xy{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new LA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Pu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class LA extends xy{data(){return super.data()}}function Pu(t,e){return typeof e=="string"?Ou(t,e):e instanceof Sa?e._internalPath:e._delegate._internalPath}/**
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
 */function Ry(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mu{}class UA extends Mu{}function FA(t,e,...n){let s=[];e instanceof Mu&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Lu).length,o=r.filter(a=>a instanceof Aa).length;if(i>1||i>0&&o>0)throw new U(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Aa extends UA{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Aa(e,n,s)}_apply(e){const n=this._parse(e);return Dy(e._query,n),new gs(e.firestore,e.converter,jc(e._query,n))}_parse(e){const n=Du(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new U(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){af(u,l);const d=[];for(const m of u)d.push(of(a,r,m));h={arrayValue:{values:d}}}else h=of(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||af(u,l),h=PA(o,i,u,l==="in"||l==="not-in");return $e.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function VA(t,e,n){const s=e,r=Pu("where",t);return Aa._create(r,s,n)}class Lu extends Mu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Lu(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Mt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Dy(i,a),i=jc(i,a)}(e._query,n),new gs(e.firestore,e.converter,jc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function of(t,e,n){if(typeof(n=He(n))=="string"){if(n==="")throw new U(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Rg(e)&&n.indexOf("/")!==-1)throw new U(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Ae.fromString(n));if(!q.isDocumentKey(s))throw new U(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Dd(t,new q(s))}if(n instanceof pt)return Dd(t,n._key);throw new U(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ia(n)}.`)}function af(t,e){if(!Array.isArray(t)||t.length===0)throw new U(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new U(E.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Dy(t,e){if(e.isInequality()){const s=hu(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new U(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=xg(t);i!==null&&$A(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new U(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function $A(t,e,n){if(!n.isEqual(e))throw new U(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class BA{convertValue(e,n="none"){switch(hs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Hs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){const s={};return ps(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new xu(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=bg(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Jr(e));default:return null}}convertTimestamp(e){const n=Pn(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ae.fromString(e);Se(Zg(s));const r=new Yr(s.get(1),s.get(3)),i=new q(s.popFirst(5));return r.isEqual(n)||on(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function jA(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class vr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ny extends xy{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ro(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Pu("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ro extends Ny{data(e={}){return super.data(e)}}class Oy{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new vr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ro(this._firestore,this._userDataWriter,s.key,s,new vr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new ro(s._firestore,s._userDataWriter,o.doc.key,o.doc,new vr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new ro(s._firestore,s._userDataWriter,o.doc.key,o.doc,new vr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:qA(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function qA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}class Uu extends BA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new pt(this.firestore,null,n)}}function HA(t){t=Kt(t,gs);const e=Kt(t.firestore,ds),n=Au(e),s=new Uu(e);return Ry(t._query),SA(n,t._query).then(r=>new Oy(e,s,t,r))}function KA(t,e,n,...s){t=Kt(t,pt);const r=Kt(t.firestore,ds),i=Du(r);let o;return o=typeof(e=He(e))=="string"||e instanceof Sa?OA(i,"updateDoc",t._key,e,n,s):NA(i,"updateDoc",t._key,e),Fu(r,[o.toMutation(t._key,Ot.exists(!0))])}function Py(t){return Fu(Kt(t.firestore,ds),[new du(t._key,Ot.none())])}function WA(t,e){const n=Kt(t.firestore,ds),s=Cu(t),r=jA(t.converter,e);return Fu(n,[DA(Du(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Ot.exists(!1))]).then(()=>s)}function zA(t,...e){var n,s,r;t=He(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||rf(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(rf(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof pt)l=Kt(t.firestore,ds),u=uu(t._key.path),c={next:h=>{e[o]&&e[o](GA(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Kt(t,gs);l=Kt(h.firestore,ds),u=h._query;const d=new Uu(l);c={next:m=>{e[o]&&e[o](new Oy(l,d,h,m))},error:e[o+1],complete:e[o+2]},Ry(t._query)}return function(h,d,m,g){const w=new by(g),C=new fy(d,w,m);return h.asyncQueue.enqueueAndForget(async()=>hy(await Xc(h),C)),()=>{w.bc(),h.asyncQueue.enqueueAndForget(async()=>dy(await Xc(h),C))}}(Au(l),u,a,c)}function Fu(t,e){return function(n,s){const r=new xn;return n.asyncQueue.enqueueAndForget(async()=>aA(await TA(n),s,r)),r.promise}(Au(t),e)}function GA(t,e,n){const s=n.docs.get(e._key),r=new Uu(t);return new Ny(t,r,e._key,s,new vr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){rr=n})(ii),Bs(new os("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new ds(new YS(n.getProvider("auth-internal")),new tC(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new U(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yr(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),kn(Ad,"3.8.3",t),kn(Ad,"3.8.3","esm2017")})();const QA={apiKey:"AIzaSyCb76XChLO7lPTuEovbPTKGz596-cfU7vg",authDomain:"domotica-simulada.firebaseapp.com",projectId:"domotica-simulada",storageBucket:"domotica-simulada.appspot.com",messagingSenderId:"155150798888",appId:"1:155150798888:web:ff17881bc67e8988ece51d"},XA=Op(QA),xi=AA(XA),YA=async(t,e,n)=>{(await HA(FA(Su(xi,t),VA(e,"==",n)))).forEach(r=>{Py(r.ref)})},cf=(t,e)=>zA(Su(xi,t),e),Jc=(t,e)=>WA(Su(xi,t),e),Vu=(t,e)=>Py(Cu(xi,t,e)),My=(t,e,n)=>KA(Cu(xi,t,e),n),JA="/assets/4792184.ffe52ed0.png",ZA="/assets/kisspng-heat-sensor-clip-art-temperature-thermometer-5b7ee8ba5f4383.9571585715350437703902-removebg-preview.d340d81a.png",ek="/assets/ejecutor.0fca9791.png",tk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAYAAABwWUfkAAAMnUlEQVR4Xu1dXWxWSRleF1uKpX9WynZbWfqnmA0/gTUhsvxUL8iSGEj8IXChd3JJol4o8U644kK9Qq+4UiQG0QtRwbhttEBCCF1NCloo0F1ogeWvUKmF7vo8ZD7Tft/M+c6ZOWdmzvfNSchmv54z877PMz/vvPPOO6+8Ep6AQEAgIBAQCAj4jcCjR4/qZmZmPuG3lEE6bQSuXr3atWfPnl+tWbNmZPv27X85evTot7QLCx96jcDHkG7Bv9OnT3/Za4lTFO7VFMvytqjz58+/JRNuYGDgK94KnbJgVUE05uQ6GW4jIyNvpoynt8VVBdHeom9RsEC0RbBdVhWIdom+xboD0RbBdllVINol+hbrDkRbBNtlVYFol+hbrDsQbRFsl1UFol2ib7HuQLRFsF1WFYh2ib7FugPRFsF2WVUg2iX6FusORFsE22VVgWiX6Fusu1qIrvoYsWoh2mLf8bOqQLSfvKQuVe6JfvLkiTRMKHWkcl5gLolG6O4bx48f/9qmTZvOdnd3T2zYsOES4r9Wpc0Fggc379q16/d9fX1jCBX+Nf7/bTSs2rTrCeXNQwAAL2Z4LgA/hp9LQnfx20cqwEiY7BuQ+DvVN6iLEaIl9SAu/J8HDhw4xDjxQFCKCNy/f7+RwfbovUMKgv9PBsJ6vyirWodojhbl6tu3b9/PUeeGFNWtzqJI8LJly+6VA7zwdwzn31AQ/XbSHh2nYRXK5AkQTB2fr06WDLTGsNnf0dHxQVyCC+/hXFVTWkQfOXJkX9L69+/f/xNMMfUGqlfHp7du3XqNvSMpwDhL9eeoHkUjKmmPJuI6srAeGorVwZiGluLQm8zIkv5GEvgN5vCWctXpEs1yOQfD+DqIKeRukgZI+dBwl5eTrWr+juMyn8SQ99M4IHK+Jujj4+OvJwHIhOhCPZgW6mn1w1I/GUdWvsPpR9SdRNzKe5dDNZYrw+WAI8GHDx/+7t27dz+tg0IaRM+vl70cPfaX5eQu/B3z/Xd05K6IbzinNjQ0PC4HlujB7SZKp010QRaUu2nbtm0D5XTg37n2NtEhl98SoHLgYNh7P60lS1ZEF8AXxldZ+4Lr7hcvXuTSG5m4oYnD55GgHDp06IeJC474IGuiWTWMwqY48zddqiB7UZr6eVdWDJI/Er09VdltEF0QWMzHkQ2ZbtyK7dkqN2RhCIcn6m+wpjtSZVgUZpNoVkljDQbknajpCcP4L7LQ1WmZIPCzUUpjOPsthr7mrISMIJpLpUwebHqsLLeiSHuKykSRuIVinVwDhf+hIprLlKzdhrZ7dAEbLB/bOFJFNXKxSxYXTn/fi3KGYGnyVxuGiSuihZHWiP3sf0WRndWUZa1VYNnxdZWCHNbQ2xfbEMYl0YLsBvyX++VSIw0NftAGDpnUITbmpYrRUYI5WcvLpSOsa6IpM+fsKLLh+fu+jm7Ov+F6UdWCbW/W+0A0CcF8vC1qCM8iHCrThhA1ZLtIzegL0QQdlvYPVGSLzpEpN6kVjl2eBhgfV2XK0MKG8WU9mN4nohn7hjn5XRXZubHC0WIPqJTgblVqLSpBQT4RTbHF1CW1X7gU5ZI0gXr2X0VvblSR7HKrzjeiyQx2s36swkoV+2afUUWNwnIsaaliO9KZnDpRoFkLKw4eSHs1du5uZV2/dvmMFImYd/q1C07hQx+JplpR4VPeztUQ+tsyojHnvJcCV0ZFRAzdXAK6fqS9OupwgVOBYUlKfbo+RESqiBanPpziFrWtqRs6lZlCWOj3qXqzDxYkfMm09kt6jhiFMsMlTsEwYD/lowErlV3EQ5UAyYC+OMraeKc4Rpv+ZV82/xliJCNbHAuyAU/5OugAgEDnZYIK/275Qiy9wWmEe8D03Llw3KjUVE0txBTDd9m4dSvwgcwVMpJF/JQVGSqhEngT/62YXlK5zcc4IvHMmTPvyIDeuXNnZtEblUBssQ47duz4g0wveNG+5IW+PCCuGLbf8ELAnAihGr55Htv54XvsKTcg28BwMdEMancuXE4ILojJlQECCu/LOk3SI0gy1Y2G7ocPH7ZcvHhxbXHBa9euvQS352zOsHYq7ooVKybXr19/USbE2NhYj6lwRkRDgF6ZAKtWrbpiKlg1fr9y5cobMr0vXLiw0RQPI6KvXbtGR0nJs3XrVu63hichAhs3bmT6jpIHKxspzkmKNyJ6eHh4vayy5cuXM3g9PAkR6OrqGpN9MjU1xe1fo8eI6Dt37pSccsTc/LS2tva/RlJV6cdtbW2TMtUnJiZeg3HL3UHtx4joe/futRXXzAiJmpqa59oSVfGHTU1Nj2Tqg+Sls7OzRonzjIiWCcUUEHV1dXNVzJe26uggs2KJtaCM58+f18zNzRmdwDQiGjtTS4q1WrJkyTNtTcOHHzc3Nz8shgFDdwfINjrsoE00nCX1MBJKgvAxzwRDTLPBwraZbWxsfFL8OabI1mfPnnE7U/vRJhpDiZFxoC1xlX6IRmBk92gTjYpnMEz/pxh3bKuFlEuajREG1+LJyUlVvhbu92s/2kQvWrRoDsZDyTLqwYMHrdrSVPmHmIdrZbHvjAoF3i9M4NEmGuvlF7CuS3r006dPG2CkGVmIJgrl/FvpKZbW1tYPgbWRkatNNAGVrZdv3LjRxZaZc8CdiP/48WNpLlM6oTiCmghlRHR7e3tJoDmHHtPFvYlCef4W9o30yBJ2tj7Asqtk9EyiqxHRW7ZskW5ejI6OGm+rJVGiUt69fPnymzJd0liyGhHd09MzKhPs5s2bITu9Ruu7cuXKF2SfYdt3RKO4BZ8YEd3Z2fm+TICzZ8/6Eedkio7l70G0tEejQ/EYsrsH8/EycSBsQUw382cHyzsZLwgXaofRRYOrJD7ei7BpVfLyNOKckkGV77cjggPfw+6VkfuTyBgN3SxAFeeEYSj164nyTWW09CdPnmQGp5Knv7//XfR0I4s7FaI3b948IBPwxIkT36xkYtLW7dSpU1+Vlblu3bpLadelVR4z08uuIUArnOa8o1VolX0UdSQnrSnQeOjGQn567969zEa/4OG8cu7cOeblDk8ZBI4dOyY9dsP4eDhLbnsDII6NvAVhSqxFHL47542QngoSleLCZd4XKVw8fqpKW2w7eZynfCrFijoI7+UtOyIlcUmv5po6b+Bbllea2gKj4d8tyxGvOrGPKhU6rbsx4kmSn7dUeV84DXqbrIbw8sq+MFfHa2hYrSyVYcXfRNrneAW5eEu46qS92vskaZYB4zVPKqJ9SPBTFg5VPg5unovMgmXLqPQXMJV9TkUy85in4fLMHMOovNSiFWcug88VYLPnVRioZyJ6s9QV6qVOIhuRagjPjyIZoBs1ZOcu7wsvQxEZA6Vk5/4OCc0GUO7eLzGka5bu6LMo/61IVWx0xMSRWtrVYkrrVg3X/N2nnGyJlVQ5UagYHSk2bshJLHQGH+D4kjK9NbHglUm5xoLpIUHon1Qt2YdcnBnwuqBI7u5F3ftFbDCVdWYtR+blw2PGrUrlVUC8FwsNoiLjwJn1T7iAlXdVivtHMufBSgUwQpivW6ksw5Gyvs3OiqLzKqHBidRczDKk1Lsil5vl7lhGyz+NYU56UsE2Sab10XrGbt6HUSQLx5JpVX5+H+fK3bxva0Zl1S8Qz/Vyro2vOM0Ly4jvRbV0/k3cDRWnOG/eoeEpjEvlUE3dSLKtqxqdgxOn1WPJMZSX7U1uKcri24sbNIfrSjU8lY2qnIFWAInXBnmTs7pIG87FcXoxdaHhVfHDtYptzsfiqqTI4Q77s6Mc8uF48CJJOTduoq5LLu7JYrpyPpI6FYAXhEQ5VeaDxhBietvwjZOsCuzBSQhmHB1cwSESdn4Li3KXyow3GjV0NjDZWpYtFY2qmasFrIkZSB858sz/OxrvH/HtZ7KULbdls8fQ75sEUL5Lw43DIzdSTIMbOMJwl4kNDwbWRFJZ+L6PESLWb36N0woJ1O7du3+Dd7Xlo+sRB/UHe3t7R1taWl4maWMeL+QCgeE7U4esDC/drnDRduLgft/g4GD/0NCQ0XFfDOs/O3jw4I8YTRNHz/AOEOCOD9fTAG1Kp1fZ/IYu3Lw7epw3OvS4Nu7VisjI2HOkDaK5Ls5lsIBzViMEwNzZxCE9roWeFdGFpZ64vc9nyPIvG0DupSVss5ez99LYq1qnh+tmI6zkfs7nqvNfOr2bHi/GolfK0Kxt1bomOKp+Xi3Em2WuX7/ec/v27denp6eX4l89rW1kJH65FYosulPMxldfXz8Nq/wBjqeOr169eri7u3scv4cbfnwmOMgWEAgIBAQCAgGBgEBAIG8I/A8TDX6Bi3lazwAAAABJRU5ErkJggg==",nk={class:"bg-white container flex flex-wrap items-center justify-between rounded"},sk={class:"flex flex-row w-full md:block md:w-auto",id:"navbar-default"},rk={key:0,class:"flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"},ik=y("li",null,[y("img",{src:ZA,class:"h-6 mr-3 sm:h-9 rounded",alt:"Tipo Sensor"})],-1),ok={class:"block py-2 pl-3 pr-4 rounded md:bg-transparent md:text-black md:p-0 dark:text-white"},ak={class:"block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"},ck={key:1,class:"flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"},lk=y("li",null,[y("img",{src:ek,class:"h-6 mr-3 sm:h-9 rounded",alt:"Tipo Sensor"})],-1),uk={class:"block py-2 pl-3 pr-4 rounded md:bg-transparent md:text-black md:p-0 dark:text-white"},hk={class:"block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"},dk=["onClick"],fk=y("img",{src:tk,alt:"on/off"},null,-1),pk=[fk],mk={__name:"DeviceRoom",props:{idDevice:{type:String},device:{type:Object}},setup(t){const e=t,n=async()=>{let r;e.device.estado==="on"?r="off":r="on",await My("dispositivos",e.idDevice,{estado:r})},s=r=>window.open(`http://localhost:5174/${r}`,"_blank");return(r,i)=>(_e(),ze("div",{class:"mx-5 mb-5",onClick:i[0]||(i[0]=o=>s(t.idDevice))},[y("div",nk,[y("div",sk,[t.device.tipo=="sensor"?(_e(),ze("ul",rk,[ik,y("li",null,[y("p",ok," Nombre: "+Bt(t.device.nombre),1)]),y("li",null,[y("p",ak," Temperatura: "+Bt(t.device.temp)+" \xBA",1)])])):lo("",!0),t.device.tipo=="ejecutor"?(_e(),ze("ul",ck,[lk,y("li",null,[y("p",uk," Nombre: "+Bt(t.device.nombre),1)]),y("li",null,[y("p",hk," Estado: "+Bt(t.device.estado),1)]),y("li",null,[y("div",null,[y("button",{onClick:Fs(n,["stop"]),class:"hover:bg-slate-100 rounded"},pk,8,dk)])])])):lo("",!0)])])]))}},gk=y("h1",{class:"mb-10 text-lg"},"Nuevo Dispositivo",-1),yk={class:"w-full max-w-xs ml-8"},vk=y("label",{for:"tipos",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Elige un tipo",-1),wk=y("option",{value:"sensor"},"Sensor",-1),_k=y("option",{value:"ejecutor"},"Ejecutor",-1),bk=[wk,_k],Ek={class:"mb-10"},Ik=y("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"nameDevice"}," Nombre: ",-1),Tk=y("p",{class:"text-center text-gray-500 text-xs"}," \xA92023 EDW-DOMOTIC. All rights reserved. ",-1),Sk={__name:"FormCreateRoom",props:{nameRoom:{type:String}},emits:["CloseModal"],setup(t,{emit:e}){const n=t,s=Ne(),r=Ne(),i=Ne(25),o=Ne("off"),a=Ne(n.nameRoom),c=()=>e("CloseModal"),l=async()=>{try{s.value==="sensor"?await Jc("dispositivos",{nombre:r.value,sala:a.value,temp:i.value,tipo:s.value}):await Jc("dispositivos",{nombre:r.value,sala:a.value,estado:o.value,tipo:s.value}),c()}catch(u){alert(u)}};return(u,h)=>(_e(),ze(Me,null,[gk,y("div",null,[y("div",yk,[y("form",{class:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",onSubmit:h[2]||(h[2]=Fs((...d)=>u.checkUserPassword&&u.checkUserPassword(...d),["prevent"]))},[vk,Dt(y("select",{"onUpdate:modelValue":h[0]||(h[0]=d=>s.value=d),id:"tipos",class:"mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},bk,512),[[aw,s.value]]),y("div",Ek,[Ik,Dt(y("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline","onUpdate:modelValue":h[1]||(h[1]=d=>r.value=d),id:"nameDevice",type:"text",placeholder:"Nombre dispositivo"},null,512),[[Us,r.value]])]),y("div",{class:"flex items-center justify-between"},[y("button",{onClick:l,class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit"}," Aceptar "),y("button",{onClick:c,class:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button"}," Cancelar ")])],32),Tk])])],64))}},Ck={class:"relative z-10","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},Ak=y("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),kk={class:"fixed inset-0 z-10 overflow-y-auto"},xk={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},Rk={class:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg bg-blue-500"},Dk={class:"mx-10 px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},Nk={class:"sm:flex sm:items-start"},Ok={class:"w-full text-center"},Pk={__name:"ModalAddRooms",props:{nameRoom:{type:String}},emits:["CloseModal"],setup(t,{emit:e}){return(n,s)=>(_e(),nn(Wt,{"enter-active-class":"ease-out duration-300","enter-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-class":"opacity-100","leave-to-class":"opacity-0"},{default:tn(()=>[y("div",Ck,[Ak,y("div",kk,[y("div",xk,[Te(Wt,{"enter-active-class":"ease-out duration-300","enter-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:tn(()=>[y("div",Rk,[y("div",Dk,[y("div",Nk,[y("div",Ok,[y("div",null,[Te(Sk,{onCloseModal:s[0]||(s[0]=r=>e("CloseModal")),nameRoom:t.nameRoom},null,8,["nameRoom"])])])])])])]),_:1})])])])]),_:1}))}},Mk={class:"relative z-10","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},Lk=y("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),Uk={class:"fixed inset-0 z-10 overflow-y-auto"},Fk={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},Vk=y("h1",{class:"text-xl"},"\xBFBorrar sala completa o reasignar dispositivos?",-1),$k={__name:"ModalDeleteRoom",emits:["closeModal","deleteRoom","reassignDevices"],setup(t,{emit:e}){const n=()=>e("closeModal"),s=()=>e("deleteRoom"),r=()=>e("reassignDevices");return(i,o)=>(_e(),nn(Wt,{"enter-active-class":"ease-out duration-300","enter-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-class":"opacity-100","leave-to-class":"opacity-0"},{default:tn(()=>[y("div",Mk,[Lk,y("div",Uk,[y("div",Fk,[Te(Wt,{"enter-active-class":"ease-out duration-300","enter-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:tn(()=>[y("div",{class:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg bg-blue-500"},[y("div",{class:"mx-10 px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},[y("div",{class:"sm:flex sm:items-start"},[y("div",{class:"w-full text-center"},[y("div",null,[Vk,y("div",{class:"mt-24"},[y("button",{onClick:r,class:"w-24 text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"},"Redistribuir"),y("button",{onClick:s,class:"w-24 ml-10 text-white bg-orange-800 hover:bg-orange-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"},"Borrar"),y("button",{onClick:n,class:"w-24 ml-10 text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"},"Cancelar")])])])])])])]),_:1})])])])]),_:1}))}},$u=_w("roomsAvailable",()=>{let t=Ne([]),e=Ne([]);const n=lt(()=>t.value),s=lt(()=>e.value);return{updateRooms:o=>t.value=o,addTransferDevice:o=>e.value=o,seeRooms:n,seeDevices:s}}),Bk={__name:"roomsAvailable",props:{name:{type:String}},emits:["closeModal"],setup(t,{emit:e}){const n=t,s=$u(),r=()=>{const i=s.seeDevices;i[0].device.forEach(a=>{My("dispositivos",a.id,{sala:n.name})}),Vu("salas",i[0].id),e("closeModal")};return(i,o)=>(_e(),ze("button",{onClick:r,class:"w-24 ml-5 text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"},Bt(t.name),1))}},jk={class:"relative z-10","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},qk=y("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),Hk={class:"fixed inset-0 z-10 overflow-y-auto"},Kk={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},Wk={class:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg bg-blue-500"},zk={class:"mx-10 px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},Gk={class:"sm:flex sm:items-start"},Qk={class:"w-full text-center"},Xk={__name:"ModalRoomAvailable",emits:["closeModal"],setup(t,{emit:e}){const n=$u();return(s,r)=>(_e(),nn(Wt,{"enter-active-class":"ease-out duration-300","enter-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-class":"opacity-100","leave-to-class":"opacity-0"},{default:tn(()=>[y("div",jk,[qk,y("div",Hk,[y("div",Kk,[Te(Wt,{"enter-active-class":"ease-out duration-300","enter-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:tn(()=>[y("div",Wk,[y("div",zk,[y("div",Gk,[y("div",Qk,[y("div",null,[(_e(!0),ze(Me,null,Lr(Tn(n).seeRooms,i=>(_e(),nn(Bk,{key:i.id,name:i.nombre},null,8,["name"]))),128)),y("button",{onClick:r[0]||(r[0]=i=>e("closeModal")),class:"w-24 ml-5 text-white bg-red-400 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"},"Cancelar")])])])])])]),_:1})])])])]),_:1}))}},Yk={class:"max-w-sm rounded-2xl overflow-hidden shadow-lg bg-blue-600 w-96 h-auto"},Jk={class:"flex flex-row justify-center"},Zk=y("img",{class:"w-16 h-16 ml-5 mt-5",src:JA,alt:"Habitacion"},null,-1),ex={class:"font-bold text-xl mb-2 ml-5 p-6 mt-5"},tx=y("div",{class:"px-6 py-4"},[y("p",{class:"text-gray-700 text-base"}," Dispositivos ")],-1),nx={class:"px-6 pt-4 pb-2 flex"},sx={__name:"CardRoom",props:{nameRoom:{type:String},idRoom:{type:String},device:{type:Object},rooms:{type:Array}},setup(t){const e=t,n=Ne(),s=Ne(),r=Ne(),i=$u(),o=(l,u)=>{l.dataTransfer.dropEffect="move",l.dataTransfer.effectAllowed="move",l.dataTransfer.setData("itemID",u.id)},a=()=>{Vu("salas",e.idRoom),YA("dispositivos","sala",e.nameRoom),s.value=!1},c=()=>{const l=e.rooms.filter(h=>h.nombre!==e.nameRoom),u=e.rooms.filter(h=>h.nombre===e.nameRoom);i.updateRooms(l),i.addTransferDevice(u),s.value=!1,r.value=!0};return(l,u)=>(_e(),ze(Me,null,[y("div",Yk,[y("div",Jk,[Zk,y("div",ex,Bt(t.nameRoom),1)]),tx,(_e(!0),ze(Me,null,Lr(t.device,h=>(_e(),nn(mk,{key:h.id,device:h.data,idDevice:h.id,draggable:"true",onDragstart:d=>o(d,h)},null,8,["device","idDevice","onDragstart"]))),128)),y("div",nx,[y("button",{onClick:u[0]||(u[0]=h=>n.value=!0),class:"w-full text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"},"A\xF1adir"),y("button",{onClick:u[1]||(u[1]=h=>s.value=!0),class:"w-full ml-24 text-white bg-orange-800 hover:bg-orange-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"},"Eliminar")])]),Dt(Te(Pk,{onCloseModal:u[2]||(u[2]=h=>n.value=!1),nameRoom:t.nameRoom},null,8,["nameRoom"]),[[Xi,n.value]]),Dt(Te($k,{onCloseModal:u[3]||(u[3]=h=>s.value=!1),onDeleteRoom:a,onReassignDevices:c},null,512),[[Xi,s.value]]),Dt(Te(Xk,{onCloseModal:u[4]||(u[4]=h=>r.value=!1)},null,512),[[Xi,r.value]])],64))}},rx={class:"flex flex-row justify-between"},ix=y("h1",{class:"flex text-6xl text-center mb-10"}," Dashboard",-1),ox=y("img",{src:HT,alt:"papelera"},null,-1),ax=[ox],cx={class:"flex flex-wrap justify-center gap-7 mt-14"},lx={__name:"DashboardRooms",setup(t){const e=Ne([]),n=Ne([]),s=Il(),r=Ne(!1);let i;ml(async()=>{i=Hr(),nm(i,u=>{u?r.value=!0:r.value=!1}),await cf("salas",u=>{e.value=[],u.forEach(h=>{e.value.push({id:h.id,nombre:h.data().nombre,device:[]})}),cf("dispositivos",h=>{a(e.value),h.forEach(d=>{e.value.forEach((m,g)=>{m.nombre===d.data().sala&&e.value[g].device.push({data:d.data(),id:d.id})})})})})});const o=async()=>{await BE(i),s.push("/")},a=u=>u.forEach(h=>{h.device=[]}),c=async()=>{try{if(n.value.length===0)throw"nombre de sala vacio";await Jc("salas",{nombre:n.value})}catch(u){alert(u)}},l=async u=>{const h=u.dataTransfer.getData("itemID");try{await Vu("dispositivos",h)}catch(d){console.log(d),alert("error borrando dispositivo")}};return(u,h)=>(_e(),ze(Me,null,[y("div",rx,[r.value?(_e(),ze("button",{key:0,class:"flex ml-10 mt-4 w-32 h-12 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",onClick:o},"Desconectar ")):lo("",!0),y("div",null,[Dt(y("input",{type:"text",input:"","onUpdate:modelValue":h[0]||(h[0]=d=>n.value=d),class:"h-12 mt-4 rounded-3xl text-center"},null,512),[[Us,n.value]]),y("button",{class:"flex ml-10 mt-4 w-32 h-12 text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",onClick:c},"A\xF1adir sala ")]),ix,y("div",{class:"bg-white flex mr-10 mt-10 w-36 h-36 rounded-3xl",onDrop:h[1]||(h[1]=d=>l(d)),onDragenter:h[2]||(h[2]=Fs(()=>{},["prevent"])),onDragover:h[3]||(h[3]=Fs(()=>{},["prevent"]))},ax,32)]),y("div",cx,[(_e(!0),ze(Me,null,Lr(e.value,d=>(_e(),nn(sx,{key:d.nombre,nameRoom:d.nombre,device:d.device,idRoom:d.id,rooms:e.value},null,8,["nameRoom","device","idRoom","rooms"]))),128))])],64))}},Ly=b_({history:Fw(),routes:[{path:"/",name:"home",component:qT},{path:"/login",name:"login",component:pm},{path:"/dashboard",name:"dashboard",component:lx,meta:{requiresAuth:!0}},{path:"/localhost:5174/",name:"info"}]}),ux=()=>new Promise((t,e)=>{const n=nm(Hr(),s=>{n(),t(s)},e)});Ly.beforeEach(async(t,e,n)=>{t.matched.some(s=>s.meta.requiresAuth)?await ux()?n():(alert("No tienes acceso"),n("/")):n()});const hx=mw(),Bu=dw(I_);Bu.use(Ly);Bu.use(hx);Bu.mount("#app");
