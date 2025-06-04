"use strict";(self["webpackChunkgroupby_vue"]=self["webpackChunkgroupby_vue"]||[]).push([[504],{33:(e,t,n)=>{
/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function i(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return e=>e in t}n.d(t,{$3:()=>p,$H:()=>F,BH:()=>H,BX:()=>ne,Bm:()=>b,C4:()=>J,CE:()=>g,CP:()=>l,DY:()=>j,Gv:()=>I,J$:()=>X,Kg:()=>w,MZ:()=>r,Mp:()=>c,NO:()=>a,Oj:()=>s,PT:()=>O,Qd:()=>S,Ro:()=>q,SU:()=>R,TF:()=>h,Tg:()=>D,Tn:()=>y,Tr:()=>K,We:()=>V,X$:()=>u,Y2:()=>ee,ZH:()=>M,Zf:()=>k,bB:()=>$,cy:()=>f,gd:()=>v,pD:()=>i,rU:()=>L,tE:()=>o,u3:()=>ie,vM:()=>m,v_:()=>se,yI:()=>P,yL:()=>C,yQ:()=>U});const r={},s=[],o=()=>{},a=()=>!1,c=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),l=e=>e.startsWith("onUpdate:"),u=Object.assign,h=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},d=Object.prototype.hasOwnProperty,p=(e,t)=>d.call(e,t),f=Array.isArray,g=e=>"[object Map]"===E(e),m=e=>"[object Set]"===E(e),_=e=>"[object Date]"===E(e),v=e=>"[object RegExp]"===E(e),y=e=>"function"===typeof e,w=e=>"string"===typeof e,b=e=>"symbol"===typeof e,I=e=>null!==e&&"object"===typeof e,C=e=>(I(e)||y(e))&&y(e.then)&&y(e.catch),T=Object.prototype.toString,E=e=>T.call(e),k=e=>E(e).slice(8,-1),S=e=>"[object Object]"===E(e),P=e=>w(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,R=i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),A=e=>{const t=Object.create(null);return n=>{const i=t[n];return i||(t[n]=e(n))}},N=/-(\w)/g,O=A((e=>e.replace(N,((e,t)=>t?t.toUpperCase():"")))),x=/\B([A-Z])/g,D=A((e=>e.replace(x,"-$1").toLowerCase())),M=A((e=>e.charAt(0).toUpperCase()+e.slice(1))),L=A((e=>{const t=e?`on${M(e)}`:"";return t})),F=(e,t)=>!Object.is(e,t),j=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},U=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},$=e=>{const t=parseFloat(e);return isNaN(t)?e:t},q=e=>{const t=w(e)?Number(e):NaN;return isNaN(t)?e:t};let W;const V=()=>W||(W="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const B="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",H=i(B);function K(e){if(f(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],r=w(i)?Q(i):K(i);if(r)for(const e in r)t[e]=r[e]}return t}if(w(e)||I(e))return e}const z=/;(?![^(]*\))/g,G=/:([^]+)/,Y=/\/\*[^]*?\*\//g;function Q(e){const t={};return e.replace(Y,"").split(z).forEach((e=>{if(e){const n=e.split(G);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function J(e){let t="";if(w(e))t=e;else if(f(e))for(let n=0;n<e.length;n++){const i=J(e[n]);i&&(t+=i+" ")}else if(I(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Z="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",X=i(Z);function ee(e){return!!e||""===e}function te(e,t){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=ne(e[i],t[i]);return n}function ne(e,t){if(e===t)return!0;let n=_(e),i=_(t);if(n||i)return!(!n||!i)&&e.getTime()===t.getTime();if(n=b(e),i=b(t),n||i)return e===t;if(n=f(e),i=f(t),n||i)return!(!n||!i)&&te(e,t);if(n=I(e),i=I(t),n||i){if(!n||!i)return!1;const r=Object.keys(e).length,s=Object.keys(t).length;if(r!==s)return!1;for(const n in e){const i=e.hasOwnProperty(n),r=t.hasOwnProperty(n);if(i&&!r||!i&&r||!ne(e[n],t[n]))return!1}}return String(e)===String(t)}function ie(e,t){return e.findIndex((e=>ne(e,t)))}const re=e=>!(!e||!0!==e["__v_isRef"]),se=e=>w(e)?e:null==e?"":f(e)||I(e)&&(e.toString===T||!y(e.toString))?re(e)?se(e.value):JSON.stringify(e,oe,2):String(e),oe=(e,t)=>re(t)?oe(e,t.value):g(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n],i)=>(e[ae(t,i)+" =>"]=n,e)),{})}:m(t)?{[`Set(${t.size})`]:[...t.values()].map((e=>ae(e)))}:b(t)?ae(t):!I(t)||f(t)||S(t)?t:String(t),ae=(e,t="")=>{var n;return b(e)?`Symbol(${null!=(n=e.description)?n:t})`:e}},125:(e,t,n)=>{n.d(t,{h1:()=>l,uA:()=>r});var i=n(743);class r{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const s="[DEFAULT]";
/**
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
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new i.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(r);n===e&&s.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
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
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},220:(e,t,n)=>{n.d(t,{LA:()=>ce,aE:()=>rt,rd:()=>ot});var i=n(641),r=n(953);
/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof document;function o(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function a(e){return e.__esModule||"Module"===e[Symbol.toStringTag]||e.default&&o(e.default)}const c=Object.assign;function l(e,t){const n={};for(const i in t){const r=t[i];n[i]=h(r)?r.map(e):e(r)}return n}const u=()=>{},h=Array.isArray;const d=/#/g,p=/&/g,f=/\//g,g=/=/g,m=/\?/g,_=/\+/g,v=/%5B/g,y=/%5D/g,w=/%5E/g,b=/%60/g,I=/%7B/g,C=/%7C/g,T=/%7D/g,E=/%20/g;function k(e){return encodeURI(""+e).replace(C,"|").replace(v,"[").replace(y,"]")}function S(e){return k(e).replace(I,"{").replace(T,"}").replace(w,"^")}function P(e){return k(e).replace(_,"%2B").replace(E,"+").replace(d,"%23").replace(p,"%26").replace(b,"`").replace(I,"{").replace(T,"}").replace(w,"^")}function R(e){return P(e).replace(g,"%3D")}function A(e){return k(e).replace(d,"%23").replace(m,"%3F")}function N(e){return null==e?"":A(e).replace(f,"%2F")}function O(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}const x=/\/$/,D=e=>e.replace(x,"");function M(e,t,n="/"){let i,r={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(i=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),r=e(s)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=V(null!=i?i:t,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:O(o)}}function L(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function F(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function j(e,t,n){const i=t.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&U(t.matched[i],n.matched[r])&&$(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function U(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function $(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!q(e[n],t[n]))return!1;return!0}function q(e,t){return h(e)?W(e,t):h(t)?W(t,e):e===t}function W(e,t){return h(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function V(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/"),r=i[i.length-1];".."!==r&&"."!==r||i.push("");let s,o,a=n.length-1;for(s=0;s<i.length;s++)if(o=i[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+i.slice(s).join("/")}const B={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var H,K;(function(e){e["pop"]="pop",e["push"]="push"})(H||(H={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(K||(K={}));function z(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),D(e)}const G=/^[^#]+#/;function Y(e,t){return e.replace(G,"#")+t}function Q(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const J=()=>({left:window.scrollX,top:window.scrollY});function Z(e){let t;if("el"in e){const n=e.el,i="string"===typeof n&&n.startsWith("#");0;const r="string"===typeof n?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=Q(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.scrollX,null!=t.top?t.top:window.scrollY)}function X(e,t){const n=history.state?history.state.position-t:-1;return n+e}const ee=new Map;function te(e,t){ee.set(e,t)}function ne(e){const t=ee.get(e);return ee.delete(e),t}let ie=()=>location.protocol+"//"+location.host;function re(e,t){const{pathname:n,search:i,hash:r}=t,s=e.indexOf("#");if(s>-1){let t=r.includes(e.slice(s))?e.slice(s).length:1,n=r.slice(t);return"/"!==n[0]&&(n="/"+n),F(n,"")}const o=F(n,e);return o+i+r}function se(e,t,n,i){let r=[],s=[],o=null;const a=({state:s})=>{const a=re(e,location),c=n.value,l=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);u=l?s.position-l.position:0}else i(a);r.forEach((e=>{e(n.value,c,{delta:u,type:H.pop,direction:u?u>0?K.forward:K.back:K.unknown})}))};function l(){o=n.value}function u(e){r.push(e);const t=()=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)};return s.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(c({},e.state,{scroll:J()}),"")}function d(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function oe(e,t,n,i=!1,r=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:r?J():null}}function ae(e){const{history:t,location:n}=window,i={value:re(e,n)},r={value:t.state};function s(i,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+i:ie()+e+i;try{t[o?"replaceState":"pushState"](s,"",c),r.value=s}catch(l){console.error(l),n[o?"replace":"assign"](c)}}function o(e,n){const o=c({},t.state,oe(r.value.back,e,r.value.forward,!0),n,{position:r.value.position});s(e,o,!0),i.value=e}function a(e,n){const o=c({},r.value,t.state,{forward:e,scroll:J()});s(o.current,o,!0);const a=c({},oe(i.value,e,null),{position:o.position+1},n);s(e,a,!1),i.value=e}return r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:i,state:r,push:a,replace:o}}function ce(e){e=z(e);const t=ae(e),n=se(e,t.state,t.location,t.replace);function i(e,t=!0){t||n.pauseListeners(),history.go(e)}const r=c({location:"",base:e,go:i,createHref:Y.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function le(e){return"string"===typeof e||e&&"object"===typeof e}function ue(e){return"string"===typeof e||"symbol"===typeof e}const he=Symbol("");var de;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(de||(de={}));function pe(e,t){return c(new Error,{type:e,[he]:!0},t)}function fe(e,t){return e instanceof Error&&he in e&&(null==t||!!(e.type&t))}const ge="[^/]+?",me={sensitive:!1,strict:!1,start:!0,end:!0},_e=/[.+*?^${}()[\]/\\]/g;function ve(e,t){const n=c({},me,t),i=[];let r=n.start?"^":"";const s=[];for(const c of e){const e=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let t=0;t<c.length;t++){const i=c[t];let o=40+(n.sensitive?.25:0);if(0===i.type)t||(r+="/"),r+=i.value.replace(_e,"\\$&"),o+=40;else if(1===i.type){const{value:e,repeatable:n,optional:a,regexp:l}=i;s.push({name:e,repeatable:n,optional:a});const h=l||ge;if(h!==ge){o+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+u.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=a&&c.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),r+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}i.push(e)}if(n.strict&&n.end){const e=i.length-1;i[e][i[e].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(e){const t=e.match(o),n={};if(!t)return null;for(let i=1;i<t.length;i++){const e=t[i]||"",r=s[i-1];n[r.name]=e&&r.repeatable?e.split("/"):e}return n}function l(t){let n="",i=!1;for(const r of e){i&&n.endsWith("/")||(n+="/"),i=!1;for(const e of r)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(h(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const l=h(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${s}"`);r.length<2&&(n.endsWith("/")?n=n.slice(0,-1):i=!0)}n+=l}}return n||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function ye(e,t){let n=0;while(n<e.length&&n<t.length){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function we(e,t){let n=0;const i=e.score,r=t.score;while(n<i.length&&n<r.length){const e=ye(i[n],r[n]);if(e)return e;n++}if(1===Math.abs(r.length-i.length)){if(be(i))return 1;if(be(r))return-1}return r.length-i.length}function be(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ie={type:0,value:""},Ce=/[a-zA-Z0-9_]/;function Te(e){if(!e)return[[]];if("/"===e)return[[Ie]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a,c=0,l="",u="";function h(){l&&(0===n?s.push({type:0,value:l}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function d(){l+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:"("===a?n=2:Ce.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state");break}else i=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function Ee(e,t,n){const i=ve(Te(e.path),n);const r=c(i,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf===!t.record.aliasOf&&t.children.push(r),r}function ke(e,t){const n=[],i=new Map;function r(e){return i.get(e)}function s(e,n,i){const r=!i,a=Pe(e);a.aliasOf=i&&i.record;const h=Oe(t,e),d=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(Pe(c({},a,{components:i?i.record.components:a.components,path:e,aliasOf:i?i.record:a})))}let p,f;for(const t of d){const{path:c}=t;if(n&&"/"!==c[0]){const e=n.record.path,i="/"===e[e.length-1]?"":"/";t.path=n.record.path+(c&&i+c)}if(p=Ee(t,n,h),i?i.alias.push(p):(f=f||p,f!==p&&f.alias.push(p),r&&e.name&&!Ae(p)&&o(e.name)),Me(p)&&l(p),a.children){const e=a.children;for(let t=0;t<e.length;t++)s(e[t],p,i&&i.children[t])}i=i||p}return f?()=>{o(f)}:u}function o(e){if(ue(e)){const t=i.get(e);t&&(i.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&i.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function a(){return n}function l(e){const t=xe(e,n);n.splice(t,0,e),e.record.name&&!Ae(e)&&i.set(e.record.name,e)}function h(e,t){let r,s,o,a={};if("name"in e&&e.name){if(r=i.get(e.name),!r)throw pe(1,{location:e});0,o=r.record.name,a=c(Se(t.params,r.keys.filter((e=>!e.optional)).concat(r.parent?r.parent.keys.filter((e=>e.optional)):[]).map((e=>e.name))),e.params&&Se(e.params,r.keys.map((e=>e.name)))),s=r.stringify(a)}else if(null!=e.path)s=e.path,r=n.find((e=>e.re.test(s))),r&&(a=r.parse(s),o=r.record.name);else{if(r=t.name?i.get(t.name):n.find((e=>e.re.test(t.path))),!r)throw pe(1,{location:e,currentLocation:t});o=r.record.name,a=c({},t.params,e.params),s=r.stringify(a)}const l=[];let u=r;while(u)l.unshift(u.record),u=u.parent;return{name:o,path:s,params:a,matched:l,meta:Ne(l)}}function d(){n.length=0,i.clear()}return t=Oe({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:a,getRecordMatcher:r}}function Se(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function Pe(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Re(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Re(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]="object"===typeof n?n[i]:n;return t}function Ae(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ne(e){return e.reduce(((e,t)=>c(e,t.meta)),{})}function Oe(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function xe(e,t){let n=0,i=t.length;while(n!==i){const r=n+i>>1,s=we(e,t[r]);s<0?i=r:n=r+1}const r=De(e);return r&&(i=t.lastIndexOf(r,i-1)),i}function De(e){let t=e;while(t=t.parent)if(Me(t)&&0===we(e,t))return t}function Me({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Le(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],i=(n?e.slice(1):e).split("&");for(let r=0;r<i.length;++r){const e=i[r].replace(_," "),n=e.indexOf("="),s=O(n<0?e:e.slice(0,n)),o=n<0?null:O(e.slice(n+1));if(s in t){let e=t[s];h(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Fe(e){let t="";for(let n in e){const i=e[n];if(n=R(n),null==i){void 0!==i&&(t+=(t.length?"&":"")+n);continue}const r=h(i)?i.map((e=>e&&P(e))):[i&&P(i)];r.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function je(e){const t={};for(const n in e){const i=e[n];void 0!==i&&(t[n]=h(i)?i.map((e=>null==e?null:""+e)):null==i?i:""+i)}return t}const Ue=Symbol(""),$e=Symbol(""),qe=Symbol(""),We=Symbol(""),Ve=Symbol("");function Be(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function He(e,t,n,i,r,s=e=>e()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise(((a,c)=>{const l=e=>{!1===e?c(pe(4,{from:n,to:t})):e instanceof Error?c(e):le(e)?c(pe(2,{from:t,to:e})):(o&&i.enterCallbacks[r]===o&&"function"===typeof e&&o.push(e),a())},u=s((()=>e.call(i&&i.instances[r],t,n,l)));let h=Promise.resolve(u);e.length<3&&(h=h.then(l)),h.catch((e=>c(e)))}))}function Ke(e,t,n,i,r=e=>e()){const s=[];for(const c of e){0;for(const e in c.components){let l=c.components[e];if("beforeRouteEnter"===t||c.instances[e])if(o(l)){const o=l.__vccOpts||l,a=o[t];a&&s.push(He(a,n,i,c,e,r))}else{let o=l();0,s.push((()=>o.then((s=>{if(!s)throw new Error(`Couldn't resolve component "${e}" at "${c.path}"`);const o=a(s)?s.default:s;c.mods[e]=s,c.components[e]=o;const l=o.__vccOpts||o,u=l[t];return u&&He(u,n,i,c,e,r)()}))))}}}return s}function ze(e){const t=(0,i.WQ)(qe),n=(0,i.WQ)(We);const s=(0,i.EW)((()=>{const n=(0,r.R1)(e.to);return t.resolve(n)})),o=(0,i.EW)((()=>{const{matched:e}=s.value,{length:t}=e,i=e[t-1],r=n.matched;if(!i||!r.length)return-1;const o=r.findIndex(U.bind(null,i));if(o>-1)return o;const a=Xe(e[t-2]);return t>1&&Xe(i)===a&&r[r.length-1].path!==a?r.findIndex(U.bind(null,e[t-2])):o})),a=(0,i.EW)((()=>o.value>-1&&Ze(n.params,s.value.params))),c=(0,i.EW)((()=>o.value>-1&&o.value===n.matched.length-1&&$(n.params,s.value.params)));function l(n={}){if(Je(n)){const n=t[(0,r.R1)(e.replace)?"replace":"push"]((0,r.R1)(e.to)).catch(u);return e.viewTransition&&"undefined"!==typeof document&&"startViewTransition"in document&&document.startViewTransition((()=>n)),n}return Promise.resolve()}return{route:s,href:(0,i.EW)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:l}}function Ge(e){return 1===e.length?e[0]:e}const Ye=(0,i.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ze,setup(e,{slots:t}){const n=(0,r.Kh)(ze(e)),{options:s}=(0,i.WQ)(qe),o=(0,i.EW)((()=>({[et(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[et(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&Ge(t.default(n));return e.custom?r:(0,i.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),Qe=Ye;function Je(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ze(e,t){for(const n in t){const i=t[n],r=e[n];if("string"===typeof i){if(i!==r)return!1}else if(!h(r)||r.length!==i.length||i.some(((e,t)=>e!==r[t])))return!1}return!0}function Xe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const et=(e,t,n)=>null!=e?e:null!=t?t:n,tt=(0,i.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,i.WQ)(Ve),o=(0,i.EW)((()=>e.route||s.value)),a=(0,i.WQ)($e,0),l=(0,i.EW)((()=>{let e=(0,r.R1)(a);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e})),u=(0,i.EW)((()=>o.value.matched[l.value]));(0,i.Gt)($e,(0,i.EW)((()=>l.value+1))),(0,i.Gt)(Ue,u),(0,i.Gt)(Ve,o);const h=(0,r.KR)();return(0,i.wB)((()=>[h.value,u.value,e.name]),(([e,t,n],[i,r,s])=>{t&&(t.instances[n]=e,r&&r!==t&&e&&e===i&&(t.leaveGuards.size||(t.leaveGuards=r.leaveGuards),t.updateGuards.size||(t.updateGuards=r.updateGuards))),!e||!t||r&&U(t,r)&&i||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=o.value,s=e.name,a=u.value,l=a&&a.components[s];if(!l)return nt(n.default,{Component:l,route:r});const d=a.props[s],p=d?!0===d?r.params:"function"===typeof d?d(r):d:null,f=e=>{e.component.isUnmounted&&(a.instances[s]=null)},g=(0,i.h)(l,c({},p,t,{onVnodeUnmounted:f,ref:h}));return nt(n.default,{Component:g,route:r})||g}}});function nt(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const it=tt;function rt(e){const t=ke(e.routes,e),n=e.parseQuery||Le,o=e.stringifyQuery||Fe,a=e.history;const d=Be(),p=Be(),f=Be(),g=(0,r.IJ)(B);let m=B;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=l.bind(null,(e=>""+e)),v=l.bind(null,N),y=l.bind(null,O);function w(e,n){let i,r;return ue(e)?(i=t.getRecordMatcher(e),r=n):r=e,t.addRoute(r,i)}function b(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function I(){return t.getRoutes().map((e=>e.record))}function C(e){return!!t.getRecordMatcher(e)}function T(e,i){if(i=c({},i||g.value),"string"===typeof e){const r=M(n,e,i.path),s=t.resolve({path:r.path},i),o=a.createHref(r.fullPath);return c(r,s,{params:y(s.params),hash:O(r.hash),redirectedFrom:void 0,href:o})}let r;if(null!=e.path)r=c({},e,{path:M(n,e.path,i.path).path});else{const t=c({},e.params);for(const e in t)null==t[e]&&delete t[e];r=c({},e,{params:v(t)}),i.params=v(i.params)}const s=t.resolve(r,i),l=e.hash||"";s.params=_(y(s.params));const u=L(o,c({},e,{hash:S(l),path:s.path})),h=a.createHref(u);return c({fullPath:u,hash:l,query:o===Fe?je(e.query):e.query||{}},s,{redirectedFrom:void 0,href:h})}function E(e){return"string"===typeof e?M(n,e,g.value.path):c({},e)}function k(e,t){if(m!==e)return pe(8,{from:t,to:e})}function P(e){return x(e)}function R(e){return P(c(E(e),{replace:!0}))}function A(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let i="function"===typeof n?n(e):n;return"string"===typeof i&&(i=i.includes("?")||i.includes("#")?i=E(i):{path:i},i.params={}),c({query:e.query,hash:e.hash,params:null!=i.path?{}:e.params},i)}}function x(e,t){const n=m=T(e),i=g.value,r=e.state,s=e.force,a=!0===e.replace,l=A(n);if(l)return x(c(E(l),{state:"object"===typeof l?c({},r,l.state):r,force:s,replace:a}),t||n);const u=n;let h;return u.redirectedFrom=t,!s&&j(o,i,n)&&(h=pe(16,{to:u,from:i}),ie(i,i,!0,!1)),(h?Promise.resolve(h):U(u,i)).catch((e=>fe(e)?fe(e,2)?e:ee(e):Y(e,u,i))).then((e=>{if(e){if(fe(e,2))return x(c({replace:a},E(e.to),{state:"object"===typeof e.to?c({},r,e.to.state):r,force:s}),t||u)}else e=q(u,i,!0,a,r);return $(u,i,e),e}))}function D(e,t){const n=k(e,t);return n?Promise.reject(n):Promise.resolve()}function F(e){const t=oe.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function U(e,t){let n;const[i,r,s]=st(e,t);n=Ke(i.reverse(),"beforeRouteLeave",e,t);for(const a of i)a.leaveGuards.forEach((i=>{n.push(He(i,e,t))}));const o=D.bind(null,e,t);return n.push(o),ce(n).then((()=>{n=[];for(const i of d.list())n.push(He(i,e,t));return n.push(o),ce(n)})).then((()=>{n=Ke(r,"beforeRouteUpdate",e,t);for(const i of r)i.updateGuards.forEach((i=>{n.push(He(i,e,t))}));return n.push(o),ce(n)})).then((()=>{n=[];for(const i of s)if(i.beforeEnter)if(h(i.beforeEnter))for(const r of i.beforeEnter)n.push(He(r,e,t));else n.push(He(i.beforeEnter,e,t));return n.push(o),ce(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Ke(s,"beforeRouteEnter",e,t,F),n.push(o),ce(n)))).then((()=>{n=[];for(const i of p.list())n.push(He(i,e,t));return n.push(o),ce(n)})).catch((e=>fe(e,8)?e:Promise.reject(e)))}function $(e,t,n){f.list().forEach((i=>F((()=>i(e,t,n)))))}function q(e,t,n,i,r){const o=k(e,t);if(o)return o;const l=t===B,u=s?history.state:{};n&&(i||l?a.replace(e.fullPath,c({scroll:l&&u&&u.scroll},r)):a.push(e.fullPath,r)),g.value=e,ie(e,t,n,l),ee()}let W;function V(){W||(W=a.listen(((e,t,n)=>{if(!ae.listening)return;const i=T(e),r=A(i);if(r)return void x(c(r,{replace:!0,force:!0}),i).catch(u);m=i;const o=g.value;s&&te(X(o.fullPath,n.delta),J()),U(i,o).catch((e=>fe(e,12)?e:fe(e,2)?(x(c(E(e.to),{force:!0}),i).then((e=>{fe(e,20)&&!n.delta&&n.type===H.pop&&a.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&a.go(-n.delta,!1),Y(e,i,o)))).then((e=>{e=e||q(i,o,!1),e&&(n.delta&&!fe(e,8)?a.go(-n.delta,!1):n.type===H.pop&&fe(e,20)&&a.go(-1,!1)),$(i,o,e)})).catch(u)})))}let K,z=Be(),G=Be();function Y(e,t,n){ee(e);const i=G.list();return i.length?i.forEach((i=>i(e,t,n))):console.error(e),Promise.reject(e)}function Q(){return K&&g.value!==B?Promise.resolve():new Promise(((e,t)=>{z.add([e,t])}))}function ee(e){return K||(K=!e,V(),z.list().forEach((([t,n])=>e?n(e):t())),z.reset()),e}function ie(t,n,r,o){const{scrollBehavior:a}=e;if(!s||!a)return Promise.resolve();const c=!r&&ne(X(t.fullPath,0))||(o||!r)&&history.state&&history.state.scroll||null;return(0,i.dY)().then((()=>a(t,n,c))).then((e=>e&&Z(e))).catch((e=>Y(e,t,n)))}const re=e=>a.go(e);let se;const oe=new Set,ae={currentRoute:g,listening:!0,addRoute:w,removeRoute:b,clearRoutes:t.clearRoutes,hasRoute:C,getRoutes:I,resolve:T,options:e,push:P,replace:R,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:d.add,beforeResolve:p.add,afterEach:f.add,onError:G.add,isReady:Q,install(e){const t=this;e.component("RouterLink",Qe),e.component("RouterView",it),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,r.R1)(g)}),s&&!se&&g.value===B&&(se=!0,P(a.location).catch((e=>{0})));const n={};for(const r in B)Object.defineProperty(n,r,{get:()=>g.value[r],enumerable:!0});e.provide(qe,t),e.provide(We,(0,r.Gc)(n)),e.provide(Ve,g);const i=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(m=B,W&&W(),W=null,g.value=B,se=!1,K=!1),i()}}};function ce(e){return e.reduce(((e,t)=>e.then((()=>F(t)))),Promise.resolve())}return ae}function st(e,t){const n=[],i=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>U(e,s)))?i.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>U(e,a)))||r.push(a))}return[n,i,r]}function ot(){return(0,i.WQ)(qe)}},223:(e,t,n)=>{n.d(t,{Dk:()=>i.Dk,Sx:()=>i.Sx,Wp:()=>i.Wp});var i=n(928),r="firebase",s="9.23.0";
/**
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
 */
/**
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
 */
(0,i.KO)(r,s,"app")},262:(e,t)=>{t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[i,r]of t)n[i]=r;return n}},391:(e,t,n)=>{n.d(t,{xI:()=>ji,hg:()=>Rt,zK:()=>yt,x9:()=>kt,CI:()=>At});var i=n(743),r=n(928);function s(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var o=n(424),a=n(125);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new i.FA("auth","Firebase",c()),h=new o.Vy("@firebase/auth");function d(e,...t){h.logLevel<=o.$b.WARN&&h.warn(`Auth (${r.MF}): ${e}`,...t)}function p(e,...t){h.logLevel<=o.$b.ERROR&&h.error(`Auth (${r.MF}): ${e}`,...t)}
/**
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
 */function f(e,...t){throw _(e,...t)}function g(e,...t){return _(e,...t)}function m(e,t,n){const r=Object.assign(Object.assign({},l()),{[t]:n}),s=new i.FA("auth","Firebase",r);return s.create(t,{appName:e.name})}function _(e,...t){if("string"!==typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return u.create(e,...t)}function v(e,t,...n){if(!e)throw _(t,...n)}function y(e){const t="INTERNAL ASSERTION FAILED: "+e;throw p(t),new Error(t)}function w(e,t){e||y(t)}
/**
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
 */function b(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function I(){return"http:"===C()||"https:"===C()}function C(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */function T(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(I()||(0,i.sr)()||"connection"in navigator))||navigator.onLine}function E(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
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
 */class k{constructor(e,t){this.shortDelay=e,this.longDelay=t,w(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.jZ)()||(0,i.lV)()}get(){return T()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function S(e,t){w(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class P{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const R={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},A=new k(3e4,6e4);
/**
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
 */function N(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function O(e,t,n,r,s={}){return x(e,s,(async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=(0,i.Am)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),P.fetch()(M(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function x(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},R),t);try{const t=new L(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw F(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw F(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw F(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw F(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);f(e,a)}}catch(s){if(s instanceof i.g)throw s;f(e,"network-request-failed",{message:String(s)})}}async function D(e,t,n,i,r={}){const s=await O(e,t,n,i,r);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function M(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?S(e.config,r):`${e.config.apiScheme}://${r}`}class L{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(g(this.auth,"network-request-failed"))),A.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function F(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=g(e,t,i);return r.customData._tokenResponse=n,r}
/**
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
 */async function j(e,t){return O(e,"POST","/v1/accounts:delete",t)}async function U(e,t){return O(e,"POST","/v1/accounts:lookup",t)}
/**
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
 */function $(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
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
 */async function q(e,t=!1){const n=(0,i.Ku)(e),r=await n.getIdToken(t),s=V(r);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:$(W(s.auth_time)),issuedAtTime:$(W(s.iat)),expirationTime:$(W(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function W(e){return 1e3*Number(e)}function V(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return p("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.u)(n);return e?JSON.parse(e):(p("Failed to decode base64 JWT payload"),null)}catch(s){return p("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function B(e){const t=V(e);return v(t,"internal-error"),v("undefined"!==typeof t.exp,"internal-error"),v("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
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
 */async function H(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.g&&K(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function K({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */class z{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
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
 */class G{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$(this.lastLoginAt),this.creationTime=$(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function Y(e){var t;const n=e.auth,i=await e.getIdToken(),r=await H(e,U(n,{idToken:i}));v(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?Z(s.providerUserInfo):[],a=J(e.providerData,o),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new G(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function Q(e){const t=(0,i.Ku)(e);await Y(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function J(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function Z(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
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
 */async function X(e,t){const n=await x(e,{},(async()=>{const n=(0,i.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=M(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",P.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
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
 */class ee{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v("undefined"!==typeof e.idToken,"internal-error"),v("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):B(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await X(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new ee;return n&&(v("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(v("string"===typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(v("number"===typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ee,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
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
 */function te(e,t){v("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ne{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new G(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await H(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return q(this,e)}reload(){return Q(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ne(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Y(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await H(this,j(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,_=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:w,isAnonymous:b,providerData:I,stsTokenManager:C}=t;v(y&&C,e,"internal-error");const T=ee.fromJSON(this.name,C);v("string"===typeof y,e,"internal-error"),te(u,e.name),te(h,e.name),v("boolean"===typeof w,e,"internal-error"),v("boolean"===typeof b,e,"internal-error"),te(d,e.name),te(p,e.name),te(f,e.name),te(g,e.name),te(m,e.name),te(_,e.name);const E=new ne({uid:y,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:T,createdAt:m,lastLoginAt:_});return I&&Array.isArray(I)&&(E.providerData=I.map((e=>Object.assign({},e)))),g&&(E._redirectEventId=g),E}static async _fromIdTokenResponse(e,t,n=!1){const i=new ee;i.updateFromServerResponse(t);const r=new ne({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Y(r),r}}
/**
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
 */const ie=new Map;function re(e){w(e instanceof Function,"Expected a class definition");let t=ie.get(e);return t?(w(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ie.set(e,t),t)}
/**
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
 */class se{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}se.type="NONE";const oe=se;
/**
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
 */function ae(e,t,n){return`firebase:${e}:${t}:${n}`}class ce{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=ae(this.userKey,i.apiKey,r),this.fullPersistenceKey=ae("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ne._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ce(re(oe),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||re(oe);const s=ae(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(s);if(t){const n=ne._fromJSON(e,t);l!==r&&(o=n),r=l;break}}catch(c){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(c){}}))),new ce(r,e,n)):new ce(r,e,n)}}
/**
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
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ue(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ge(t))return"Blackberry";if(me(t))return"Webos";if(he(t))return"Safari";if((t.includes("chrome/")||de(t))&&!t.includes("edge/"))return"Chrome";if(fe(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ue(e=(0,i.ZQ)()){return/firefox\//i.test(e)}function he(e=(0,i.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function de(e=(0,i.ZQ)()){return/crios\//i.test(e)}function pe(e=(0,i.ZQ)()){return/iemobile/i.test(e)}function fe(e=(0,i.ZQ)()){return/android/i.test(e)}function ge(e=(0,i.ZQ)()){return/blackberry/i.test(e)}function me(e=(0,i.ZQ)()){return/webos/i.test(e)}function _e(e=(0,i.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ve(e=(0,i.ZQ)()){var t;return _e(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function ye(){return(0,i.lT)()&&10===document.documentMode}function we(e=(0,i.ZQ)()){return _e(e)||fe(e)||me(e)||ge(e)||/windows phone/i.test(e)||pe(e)}function be(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
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
 */function Ie(e,t=[]){let n;switch(e){case"Browser":n=le((0,i.ZQ)());break;case"Worker":n=`${le((0,i.ZQ)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.MF}/${s}`}
/**
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
 */async function Ce(e,t){return O(e,"GET","/v2/recaptchaConfig",N(e,t))}
/**
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
 */function Te(e){return void 0!==e&&void 0!==e.enterprise}class Ee{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
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
 */function ke(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Se(e){return new Promise(((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=g("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",ke().appendChild(i)}))}function Pe(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Re="https://www.google.com/recaptcha/enterprise.js?render=",Ae="recaptcha-enterprise",Ne="NO_RECAPTCHA";class Oe{constructor(e){this.type=Ae,this.auth=Le(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Ce(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new Ee(i);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function i(t,n,i){const r=window.grecaptcha;Te(r)?r.enterprise.ready((()=>{r.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(Ne)}))})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,r)=>{n(this.auth).then((n=>{if(!t&&Te(window.grecaptcha))i(n,e,r);else{if("undefined"===typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));Se(Re+n).then((()=>{i(n,e,r)})).catch((e=>{r(e)}))}})).catch((e=>{r(e)}))}))}}async function xe(e,t,n,i=!1){const r=new Oe(e);let s;try{s=await r.verify(n)}catch(a){s=await r.verify(n,!0)}const o=Object.assign({},t);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
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
 */class De{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{const i=e(t);n(i)}catch(r){i(r)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
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
 */class Me{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fe(this),this.idTokenSubscription=new Fe(this),this.beforeStateQueue=new De(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=re(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await ce.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===i||void 0===i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Y(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=E()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.Ku)(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(re(e))}))}async initializeRecaptchaConfig(){const e=await Ce(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Ee(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){const e=new Oe(this);e.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&re(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await ce.create(this,[re(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return v(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"===typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ie(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&d(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Le(e){return(0,i.Ku)(e)}class Fe{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.tD)((e=>this.observer=e))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */function je(e,t){const n=(0,r.j6)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,i.bD)(r,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const s=n.initialize({options:t});return s}function Ue(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(re);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null===t||void 0===t?void 0:t.popupRedirectResolver)}function $e(e,t,n){const i=Le(e);v(i._canInitEmulator,i,"emulator-config-failed"),v(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null===n||void 0===n?void 0:n.disableWarnings),s=qe(t),{host:o,port:a}=We(t),c=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Be()}function qe(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function We(e){const t=qe(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:Ve(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:Ve(t)}}}function Ve(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Be(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
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
 */class He{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}}
/**
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
 */async function Ke(e,t){return O(e,"POST","/v1/accounts:update",t)}
/**
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
 */
async function ze(e,t){return D(e,"POST","/v1/accounts:signInWithPassword",N(e,t))}
/**
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
 */
async function Ge(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",N(e,t))}async function Ye(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",N(e,t))}
/**
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
 */class Qe extends He{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Qe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Qe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await xe(e,n,"signInWithPassword");return ze(e,t)}return ze(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await xe(e,n,"signInWithPassword");return ze(e,t)}return Promise.reject(t)}));case"emailLink":return Ge(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ke(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ye(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
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
 */async function Je(e,t){return D(e,"POST","/v1/accounts:signInWithIdp",N(e,t))}
/**
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
 */const Ze="http://localhost";class Xe extends He{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Xe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=s(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Xe(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Je(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Je(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Je(e,t)}buildRequest(){const e={requestUri:Ze,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.Am)(t)}return e}}
/**
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
 */async function et(e,t){return O(e,"POST","/v1/accounts:sendVerificationCode",N(e,t))}async function tt(e,t){return D(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,t))}async function nt(e,t){const n=await D(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,t));if(n.temporaryProof)throw F(e,"account-exists-with-different-credential",n);return n}const it={["USER_NOT_FOUND"]:"user-not-found"};async function rt(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return D(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,n),it)}
/**
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
 */class st extends He{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new st({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new st({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return tt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return nt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return rt(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new st({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
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
 */function ot(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function at(e){const t=(0,i.I9)((0,i.hp)(e))["link"],n=t?(0,i.I9)((0,i.hp)(t))["deep_link_id"]:null,r=(0,i.I9)((0,i.hp)(e))["deep_link_id"],s=r?(0,i.I9)((0,i.hp)(r))["link"]:null;return s||r||n||t||e}class ct{constructor(e){var t,n,r,s,o,a;const c=(0,i.I9)((0,i.hp)(e)),l=null!==(t=c["apiKey"])&&void 0!==t?t:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ot(null!==(r=c["mode"])&&void 0!==r?r:null);v(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=at(e);try{return new ct(t)}catch(n){return null}}}
/**
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
 */
class lt{constructor(){this.providerId=lt.PROVIDER_ID}static credential(e,t){return Qe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ct.parseLink(t);return v(n,"argument-error"),Qe._fromEmailAndCode(e,n.code,n.tenantId)}}lt.PROVIDER_ID="password",lt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",lt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class ut{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class ht extends ut{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
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
 */
class dt extends ht{constructor(){super("facebook.com")}static credential(e){return Xe._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return dt.credential(e.oauthAccessToken)}catch(t){return null}}}dt.FACEBOOK_SIGN_IN_METHOD="facebook.com",dt.PROVIDER_ID="facebook.com";
/**
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
 */
class pt extends ht{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Xe._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return pt.credential(t,n)}catch(i){return null}}}pt.GOOGLE_SIGN_IN_METHOD="google.com",pt.PROVIDER_ID="google.com";
/**
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
 */
class ft extends ht{constructor(){super("github.com")}static credential(e){return Xe._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch(t){return null}}}ft.GITHUB_SIGN_IN_METHOD="github.com",ft.PROVIDER_ID="github.com";
/**
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
 */
class gt extends ht{constructor(){super("twitter.com")}static credential(e,t){return Xe._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return gt.credential(t,n)}catch(i){return null}}}
/**
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
 */
async function mt(e,t){return D(e,"POST","/v1/accounts:signUp",N(e,t))}
/**
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
 */gt.TWITTER_SIGN_IN_METHOD="twitter.com",gt.PROVIDER_ID="twitter.com";class _t{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await ne._fromIdTokenResponse(e,n,i),s=vt(n),o=new _t({user:r,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=vt(n);return new _t({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function vt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */async function yt(e){var t;const n=Le(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new _t({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await mt(n,{returnSecureToken:!0}),r=await _t._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(r.user),r}
/**
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
 */class wt extends i.g{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,wt.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new wt(e,t,n,i)}}function bt(e,t,n,i){const r="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return r.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw wt._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
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
 */async function It(e,t,n=!1){const i=await H(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return _t._forOperation(e,"link",i)}
/**
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
 */
async function Ct(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await H(e,bt(i,r,t,e),n);v(s.idToken,i,"internal-error");const o=V(s.idToken);v(o,i,"internal-error");const{sub:a}=o;return v(e.uid===a,i,"user-mismatch"),_t._forOperation(e,r,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&f(i,"user-mismatch"),s}}
/**
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
 */async function Tt(e,t,n=!1){const i="signIn",r=await bt(e,i,t),s=await _t._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function Et(e,t){return Tt(Le(e),t)}function kt(e,t,n){return Et((0,i.Ku)(e),lt.credential(t,n))}
/**
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
 */function St(e,t,n,r){return(0,i.Ku)(e).onIdTokenChanged(t,n,r)}function Pt(e,t,n){return(0,i.Ku)(e).beforeAuthStateChanged(t,n)}function Rt(e,t,n,r){return(0,i.Ku)(e).onAuthStateChanged(t,n,r)}function At(e){return(0,i.Ku)(e).signOut()}
/**
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
 */
function Nt(e,t){return O(e,"POST","/v2/accounts/mfaEnrollment:start",N(e,t))}function Ot(e,t){return O(e,"POST","/v2/accounts/mfaEnrollment:finalize",N(e,t))}function xt(e,t){return O(e,"POST","/v2/accounts/mfaEnrollment:start",N(e,t))}function Dt(e,t){return O(e,"POST","/v2/accounts/mfaEnrollment:finalize",N(e,t))}new WeakMap;const Mt="__sak";
/**
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
 */class Lt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Mt,"1"),this.storage.removeItem(Mt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */function Ft(){const e=(0,i.ZQ)();return he(e)||_e(e)}const jt=1e3,Ut=10;class $t extends Lt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ft()&&be(),this.fallbackToPolling=we(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);ye()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ut):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),jt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}$t.type="LOCAL";const qt=$t;
/**
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
 */class Wt extends Lt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Wt.type="SESSION";const Vt=Wt;
/**
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
 */function Bt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
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
 */class Ht{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Ht(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await Bt(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function Kt(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */Ht.receivers=[];class zt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=Kt("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
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
 */function Gt(){return window}function Yt(e){Gt().location.href=e}
/**
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
 */function Qt(){return"undefined"!==typeof Gt()["WorkerGlobalScope"]&&"function"===typeof Gt()["importScripts"]}async function Jt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Zt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Xt(){return Qt()?self:null}
/**
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
 */const en="firebaseLocalStorageDb",tn=1,nn="firebaseLocalStorage",rn="fbase_key";class sn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function on(e,t){return e.transaction([nn],t?"readwrite":"readonly").objectStore(nn)}function an(){const e=indexedDB.deleteDatabase(en);return new sn(e).toPromise()}function cn(){const e=indexedDB.open(en,tn);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(nn,{keyPath:rn})}catch(i){n(i)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(nn)?t(n):(n.close(),await an(),t(await cn()))}))}))}async function ln(e,t,n){const i=on(e,!0).put({[rn]:t,value:n});return new sn(i).toPromise()}async function un(e,t){const n=on(e,!1).get(t),i=await new sn(n).toPromise();return void 0===i?null:i.value}function hn(e,t){const n=on(e,!0).delete(t);return new sn(n).toPromise()}const dn=800,pn=3;class fn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await cn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>pn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ht._getInstance(Xt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Jt(),!this.activeServiceWorker)return;this.sender=new zt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Zt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cn();return await ln(e,Mt,"1"),await hn(e,Mt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>ln(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>un(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>hn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=on(e,!1).getAll();return new sn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),dn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}fn.type="LOCAL";const gn=fn;
/**
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
 */function mn(e,t){return O(e,"POST","/v2/accounts/mfaSignIn:start",N(e,t))}function _n(e,t){return O(e,"POST","/v2/accounts/mfaSignIn:finalize",N(e,t))}function vn(e,t){return O(e,"POST","/v2/accounts/mfaSignIn:finalize",N(e,t))}
/**
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
 */
/**
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
 */
Pe("rcb"),new k(3e4,6e4);
/**
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
 */
const yn="recaptcha";async function wn(e,t,n){var i;const r=await n.verify();try{let s;if(v("string"===typeof r,e,"argument-error"),v(n.type===yn,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){v("enroll"===t.type,e,"internal-error");const n=await Nt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;v(n,e,"missing-multi-factor-info");const o=await mn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await et(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
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
 */
class bn{constructor(e){this.providerId=bn.PROVIDER_ID,this.auth=Le(e)}verifyPhoneNumber(e,t){return wn(this.auth,e,(0,i.Ku)(t))}static credential(e,t){return st._fromVerification(e,t)}static credentialFromResult(e){const t=e;return bn.credentialFromTaggedObject(t)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?st._fromTokenResponse(t,n):null}}
/**
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
 */
function In(e,t){return t?re(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */bn.PROVIDER_ID="phone",bn.PHONE_SIGN_IN_METHOD="phone";class Cn extends He{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Je(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Je(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Je(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Tn(e){return Tt(e.auth,new Cn(e),e.bypassAuthState)}function En(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),Ct(n,new Cn(e),e.bypassAuthState)}async function kn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),It(n,new Cn(e),e.bypassAuthState)}
/**
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
 */class Sn{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Tn;case"linkViaPopup":case"linkViaRedirect":return kn;case"reauthViaPopup":case"reauthViaRedirect":return En;default:f(this.auth,"internal-error")}}resolve(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const Pn=new k(2e3,1e4);class Rn extends Sn{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Rn.currentPopupAction&&Rn.currentPopupAction.cancel(),Rn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const e=Kt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(g(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Pn.get())};e()}}Rn.currentPopupAction=null;
/**
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
 */
const An="pendingRedirect",Nn=new Map;class On extends Sn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Nn.get(this.auth._key());if(!e){try{const t=await xn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Nn.set(this.auth._key(),e)}return this.bypassAuthState||Nn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function xn(e,t){const n=Ln(t),i=Mn(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}function Dn(e,t){Nn.set(e._key(),t)}function Mn(e){return re(e._redirectPersistence)}function Ln(e){return ae(An,e.config.apiKey,e.name)}
/**
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
 */async function Fn(e,t,n=!1){const i=Le(e),r=In(i,t),s=new On(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}
/**
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
 */
const jn=6e5;class Un{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Wn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!qn(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(g(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jn&&this.cachedEventUids.clear(),this.cachedEventUids.has($n(e))}saveEventToCache(e){this.cachedEventUids.add($n(e)),this.lastProcessedEventTime=Date.now()}}function $n(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function qn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Wn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qn(e);default:return!1}}
/**
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
 */async function Vn(e,t={}){return O(e,"GET","/v1/projects",t)}
/**
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
 */const Bn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hn=/^https?/;async function Kn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Vn(e);for(const i of t)try{if(zn(i))return}catch(n){}f(e,"unauthorized-domain")}function zn(e){const t=b(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Hn.test(n))return!1;if(Bn.test(e))return i===e;const r=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(i)}
/**
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
 */const Gn=new k(3e4,6e4);function Yn(){const e=Gt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Qn(e){return new Promise(((t,n)=>{var i,r,s;function o(){Yn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Yn(),n(g(e,"network-request-failed"))},timeout:Gn.get()})}if(null===(r=null===(i=Gt().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Gt().gapi)||void 0===s?void 0:s.load)){const t=Pe("iframefcb");return Gt()[t]=()=>{gapi.load?o():n(g(e,"network-request-failed"))},Se(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Jn=null,e}))}let Jn=null;function Zn(e){return Jn=Jn||Qn(e),Jn}
/**
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
 */const Xn=new k(5e3,15e3),ei="__/auth/iframe",ti="emulator/auth/iframe",ni={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ii=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ri(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?S(t,ti):`https://${e.config.authDomain}/${ei}`,s={apiKey:t.apiKey,appName:e.name,v:r.MF},o=ii.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,i.Am)(s).slice(1)}`}async function si(e){const t=await Zn(e),n=Gt().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:ri(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ni,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=g(e,"network-request-failed"),s=Gt().setTimeout((()=>{i(r)}),Xn.get());function o(){Gt().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}
/**
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
 */const oi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ai=500,ci=600,li="_blank",ui="http://localhost";class hi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function di(e,t,n,r=ai,s=ci){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},oi),{width:r.toString(),height:s.toString(),top:o,left:a}),u=(0,i.ZQ)().toLowerCase();n&&(c=de(u)?li:n),ue(u)&&(t=t||ui,l.scrollbars="yes");const h=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(ve(u)&&"_self"!==c)return pi(t||"",c),new hi(null);const d=window.open(t||"",c,h);v(d,e,"popup-blocked");try{d.focus()}catch(p){}return new hi(d)}function pi(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
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
 */const fi="__/auth/handler",gi="emulator/auth/handler",mi=encodeURIComponent("fac");async function _i(e,t,n,s,o,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:r.MF,eventId:o};if(t instanceof ut){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.Im)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof ht){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const l=c;for(const i of Object.keys(l))void 0===l[i]&&delete l[i];const u=await e._getAppCheckToken(),h=u?`#${mi}=${encodeURIComponent(u)}`:"";return`${vi(e)}?${(0,i.Am)(l).slice(1)}${h}`}function vi({config:e}){return e.emulator?S(e,gi):`https://${e.authDomain}/${fi}`}
/**
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
 */const yi="webStorageSupport";class wi{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vt,this._completeRedirectFn=Fn,this._overrideRedirectResult=Dn}async _openPopup(e,t,n,i){var r;w(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const s=await _i(e,t,n,b(),i);return di(e,s,Kt())}async _openRedirect(e,t,n,i){await this._originValidation(e);const r=await _i(e,t,n,b(),i);return Yt(r),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await si(e),n=new Un(e);return t.register("authEvent",(t=>{v(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const i=n.onEvent(t.authEvent);return{status:i?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(yi,{type:yi},(n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[yi];void 0!==r&&t(!!r),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Kn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return we()||he()||_e()}}const bi=wi;class Ii{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return y("unexpected MultiFactorSessionType")}}}class Ci extends Ii{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Ci(e)}_finalizeEnroll(e,t,n){return Ot(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return _n(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Ti{constructor(){}static assertion(e){return Ci._fromCredential(e)}}Ti.FACTOR_ID="phone";class Ei{static assertionForEnrollment(e,t){return ki._fromSecret(e,t)}static assertionForSignIn(e,t){return ki._fromEnrollmentId(e,t)}static async generateSecret(e){const t=e;v("undefined"!==typeof t.auth,"internal-error");const n=await xt(t.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return Si._fromStartTotpMfaEnrollmentResponse(n,t.auth)}}Ei.FACTOR_ID="totp";class ki extends Ii{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new ki(t,void 0,e)}static _fromEnrollmentId(e,t){return new ki(t,e)}async _finalizeEnroll(e,t,n){return v("undefined"!==typeof this.secret,e,"argument-error"),Dt(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){v(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return vn(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Si{constructor(e,t,n,i,r,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=r}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Si(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let i=!1;return(Pi(e)||Pi(t))&&(i=!0),i&&(Pi(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Pi(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Pi(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Ri="@firebase/auth",Ai="0.23.2";
/**
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
 */
class Ni{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */function Oi(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function xi(e){(0,r.om)(new a.uA("auth",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;v(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ie(e)},l=new Me(i,r,s,c);return Ue(l,n),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const i=e.getProvider("auth-internal");i.initialize()}))),(0,r.om)(new a.uA("auth-internal",(e=>{const t=Le(e.getProvider("auth").getImmediate());return(e=>new Ni(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KO)(Ri,Ai,Oi(e)),(0,r.KO)(Ri,Ai,"esm2017")}
/**
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
 */const Di=300,Mi=(0,i.XA)("authIdTokenMaxAge")||Di;let Li=null;const Fi=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Mi)return;const r=null===n||void 0===n?void 0:n.token;Li!==r&&(Li=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function ji(e=(0,r.Sx)()){const t=(0,r.j6)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=je(e,{popupRedirectResolver:bi,persistence:[gn,qt,Vt]}),s=(0,i.XA)("authTokenSyncURL");if(s){const e=Fi(s);Pt(n,e,(()=>e(n.currentUser))),St(n,(t=>e(t)))}const o=(0,i.Tj)("auth");return o&&$e(n,`http://${o}`),n}xi("Browser")},424:(e,t,n)=>{n.d(t,{$b:()=>r,Vy:()=>l});
/**
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
 */
const i=[];var r;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=a[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}},641:(e,t,n)=>{n.d(t,{$u:()=>se,CE:()=>Gt,Df:()=>q,EW:()=>Mn,FK:()=>Ft,Gt:()=>We,Gy:()=>M,K9:()=>ut,Lk:()=>en,MZ:()=>$,OW:()=>U,Q3:()=>an,QP:()=>F,WQ:()=>Ve,Wv:()=>Yt,bF:()=>tn,bo:()=>R,dY:()=>m,eW:()=>on,g2:()=>pe,h:()=>Ln,nI:()=>_n,pI:()=>_e,pM:()=>W,qL:()=>o,uX:()=>Vt,wB:()=>bt});var i=n(953),r=n(33);function s(e,t,n,i){try{return i?e(...i):e()}catch(r){a(r,t,n)}}function o(e,t,n,i){if((0,r.Tn)(e)){const o=s(e,t,n,i);return o&&(0,r.yL)(o)&&o.catch((e=>{a(e,t,n)})),o}if((0,r.cy)(e)){const r=[];for(let s=0;s<e.length;s++)r.push(o(e[s],t,n,i));return r}}function a(e,t,n,o=!0){const a=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:u}=t&&t.appContext.config||r.MZ;if(t){let r=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,o,a))return;r=r.parent}if(l)return(0,i.C4)(),s(l,null,10,[e,o,a]),void(0,i.bl)()}c(e,n,a,o,u)}function c(e,t,n,i=!0,r=!1){if(r)throw e;console.error(e)}const l=[];let u=-1;const h=[];let d=null,p=0;const f=Promise.resolve();let g=null;function m(e){const t=g||f;return e?t.then(this?e.bind(this):e):t}function _(e){let t=u+1,n=l.length;while(t<n){const i=t+n>>>1,r=l[i],s=C(r);s<e||s===e&&2&r.flags?t=i+1:n=i}return t}function v(e){if(!(1&e.flags)){const t=C(e),n=l[l.length-1];!n||!(2&e.flags)&&t>=C(n)?l.push(e):l.splice(_(t),0,e),e.flags|=1,y()}}function y(){g||(g=f.then(T))}function w(e){(0,r.cy)(e)?h.push(...e):d&&-1===e.id?d.splice(p+1,0,e):1&e.flags||(h.push(e),e.flags|=1),y()}function b(e,t,n=u+1){for(0;n<l.length;n++){const t=l[n];if(t&&2&t.flags){if(e&&t.id!==e.uid)continue;0,l.splice(n,1),n--,4&t.flags&&(t.flags&=-2),t(),4&t.flags||(t.flags&=-2)}}}function I(e){if(h.length){const e=[...new Set(h)].sort(((e,t)=>C(e)-C(t)));if(h.length=0,d)return void d.push(...e);for(d=e,p=0;p<d.length;p++){const e=d[p];0,4&e.flags&&(e.flags&=-2),8&e.flags||e(),e.flags&=-2}d=null,p=0}}const C=e=>null==e.id?2&e.flags?-1:1/0:e.id;function T(e){r.tE;try{for(u=0;u<l.length;u++){const e=l[u];!e||8&e.flags||(4&e.flags&&(e.flags&=-2),s(e,e.i,e.i?15:14),4&e.flags||(e.flags&=-2))}}finally{for(;u<l.length;u++){const e=l[u];e&&(e.flags&=-2)}u=-1,l.length=0,I(e),g=null,(l.length||h.length)&&T(e)}}let E=null,k=null;function S(e){const t=E;return E=e,k=e&&e.type.__scopeId||null,t}function P(e,t=E,n){if(!t)return e;if(e._n)return e;const i=(...n)=>{i._d&&Kt(-1);const r=S(t);let s;try{s=e(...n)}finally{S(r),i._d&&Kt(1)}return s};return i._n=!0,i._c=!0,i._d=!0,i}function R(e,t){if(null===E)return e;const n=On(E),s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,a,c,l=r.MZ]=t[o];e&&((0,r.Tn)(e)&&(e={mounted:e,updated:e}),e.deep&&(0,i.hV)(a),s.push({dir:e,instance:n,value:a,oldValue:void 0,arg:c,modifiers:l}))}return e}function A(e,t,n,r){const s=e.dirs,a=t&&t.dirs;for(let c=0;c<s.length;c++){const l=s[c];a&&(l.oldValue=a[c].value);let u=l.dir[r];u&&((0,i.C4)(),o(u,n,8,[e.el,l,e,t]),(0,i.bl)())}}const N=Symbol("_vte"),O=e=>e.__isTeleport;const x=Symbol("_leaveCb"),D=Symbol("_enterCb");function M(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ie((()=>{e.isMounted=!0})),oe((()=>{e.isUnmounting=!0})),e}const L=[Function,Array],F={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:L,onEnter:L,onAfterEnter:L,onEnterCancelled:L,onBeforeLeave:L,onLeave:L,onAfterLeave:L,onLeaveCancelled:L,onBeforeAppear:L,onAppear:L,onAfterAppear:L,onAppearCancelled:L};function j(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function U(e,t,n,i,s){const{appear:a,mode:c,persisted:l=!1,onBeforeEnter:u,onEnter:h,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:f,onLeave:g,onAfterLeave:m,onLeaveCancelled:_,onBeforeAppear:v,onAppear:y,onAfterAppear:w,onAppearCancelled:b}=t,I=String(e.key),C=j(n,e),T=(e,t)=>{e&&o(e,i,9,t)},E=(e,t)=>{const n=t[1];T(e,t),(0,r.cy)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},k={mode:c,persisted:l,beforeEnter(t){let i=u;if(!n.isMounted){if(!a)return;i=v||u}t[x]&&t[x](!0);const r=C[I];r&&Jt(e,r)&&r.el[x]&&r.el[x](),T(i,[t])},enter(e){let t=h,i=d,r=p;if(!n.isMounted){if(!a)return;t=y||h,i=w||d,r=b||p}let s=!1;const o=e[D]=t=>{s||(s=!0,T(t?r:i,[e]),k.delayedLeave&&k.delayedLeave(),e[D]=void 0)};t?E(t,[e,o]):o()},leave(t,i){const r=String(e.key);if(t[D]&&t[D](!0),n.isUnmounting)return i();T(f,[t]);let s=!1;const o=t[x]=n=>{s||(s=!0,i(),T(n?_:m,[t]),t[x]=void 0,C[r]===e&&delete C[r])};C[r]=e,g?E(g,[t,o]):o()},clone(e){const r=U(e,t,n,i,s);return s&&s(r),r}};return k}function $(e,t){6&e.shapeFlag&&e.component?(e.transition=t,$(e.component.subTree,t)):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function q(e,t=!1,n){let i=[],r=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Ft?(128&o.patchFlag&&r++,i=i.concat(q(o.children,t,a))):(t||o.type!==Ut)&&i.push(null!=a?sn(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}
/*! #__NO_SIDE_EFFECTS__ */function W(e,t){return(0,r.Tn)(e)?(()=>(0,r.X$)({name:e.name},t,{setup:e}))():e}function V(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function B(e,t,n,o,a=!1){if((0,r.cy)(e))return void e.forEach(((e,i)=>B(e,t&&((0,r.cy)(t)?t[i]:t),n,o,a)));if(H(o)&&!a)return void(512&o.shapeFlag&&o.type.__asyncResolved&&o.component.subTree.component&&B(e,t,n,o.component.subTree));const c=4&o.shapeFlag?On(o.component):o.el,l=a?null:c,{i:u,r:h}=e;const d=t&&t.r,p=u.refs===r.MZ?u.refs={}:u.refs,f=u.setupState,g=(0,i.ux)(f),m=f===r.MZ?()=>!1:e=>(0,r.$3)(g,e);if(null!=d&&d!==h&&((0,r.Kg)(d)?(p[d]=null,m(d)&&(f[d]=null)):(0,i.i9)(d)&&(d.value=null)),(0,r.Tn)(h))s(h,u,12,[l,p]);else{const t=(0,r.Kg)(h),s=(0,i.i9)(h);if(t||s){const i=()=>{if(e.f){const n=t?m(h)?f[h]:p[h]:h.value;a?(0,r.cy)(n)&&(0,r.TF)(n,c):(0,r.cy)(n)?n.includes(c)||n.push(c):t?(p[h]=[c],m(h)&&(f[h]=p[h])):(h.value=[c],e.k&&(p[e.k]=h.value))}else t?(p[h]=l,m(h)&&(f[h]=l)):s&&(h.value=l,e.k&&(p[e.k]=l))};l?(i.id=-1,lt(i,n)):i()}else 0}}(0,r.We)().requestIdleCallback,(0,r.We)().cancelIdleCallback;const H=e=>!!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */const K=e=>e.type.__isKeepAlive;RegExp,RegExp;function z(e,t){return(0,r.cy)(e)?e.some((e=>z(e,t))):(0,r.Kg)(e)?e.split(",").includes(t):!!(0,r.gd)(e)&&(e.lastIndex=0,e.test(t))}function G(e,t){Q(e,"a",t)}function Y(e,t){Q(e,"da",t)}function Q(e,t,n=mn){const i=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(ee(t,i,n),n){let e=n.parent;while(e&&e.parent)K(e.parent.vnode)&&J(i,t,n,e),e=e.parent}}function J(e,t,n,i){const s=ee(t,e,i,!0);ae((()=>{(0,r.TF)(i[t],s)}),n)}function Z(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function X(e){return 128&e.shapeFlag?e.ssContent:e}function ee(e,t,n=mn,r=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...r)=>{(0,i.C4)();const s=wn(n),a=o(t,n,e,r);return s(),(0,i.bl)(),a});return r?s.unshift(a):s.push(a),a}}const te=e=>(t,n=mn)=>{En&&"sp"!==e||ee(e,((...e)=>t(...e)),n)},ne=te("bm"),ie=te("m"),re=te("bu"),se=te("u"),oe=te("bum"),ae=te("um"),ce=te("sp"),le=te("rtg"),ue=te("rtc");function he(e,t=mn){ee("ec",e,t)}const de="components";function pe(e,t){return ge(de,e,!0,t)||e}const fe=Symbol.for("v-ndc");function ge(e,t,n=!0,i=!1){const s=E||mn;if(s){const n=s.type;if(e===de){const e=xn(n,!1);if(e&&(e===t||e===(0,r.PT)(t)||e===(0,r.ZH)((0,r.PT)(t))))return n}const o=me(s[e]||n[e],t)||me(s.appContext[e],t);return!o&&i?n:o}}function me(e,t){return e&&(e[t]||e[(0,r.PT)(t)]||e[(0,r.ZH)((0,r.PT)(t))])}function _e(e,t,n,s){let o;const a=n&&n[s],c=(0,r.cy)(e);if(c||(0,r.Kg)(e)){const n=c&&(0,i.g8)(e);let r=!1,s=!1;n&&(r=!(0,i.fE)(e),s=(0,i.Tm)(e),e=(0,i.qA)(e)),o=new Array(e.length);for(let c=0,l=e.length;c<l;c++)o[c]=t(r?s?(0,i.a1)((0,i.lJ)(e[c])):(0,i.lJ)(e[c]):e[c],c,void 0,a&&a[c])}else if("number"===typeof e){0,o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,a&&a[n])}else if((0,r.Gv)(e))if(e[Symbol.iterator])o=Array.from(e,((e,n)=>t(e,n,void 0,a&&a[n])));else{const n=Object.keys(e);o=new Array(n.length);for(let i=0,r=n.length;i<r;i++){const r=n[i];o[i]=t(e[r],r,i,a&&a[i])}}else o=[];return n&&(n[s]=o),o}const ve=e=>e?In(e)?On(e):ve(e.parent):null,ye=(0,r.X$)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ve(e.parent),$root:e=>ve(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Pe(e),$forceUpdate:e=>e.f||(e.f=()=>{v(e.update)}),$nextTick:e=>e.n||(e.n=m.bind(e.proxy)),$watch:e=>Ct.bind(e)}),we=(e,t)=>e!==r.MZ&&!e.__isScriptSetup&&(0,r.$3)(e,t),be={get({_:e},t){if("__v_skip"===t)return!0;const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:l,appContext:u}=e;let h;if("$"!==t[0]){const i=c[t];if(void 0!==i)switch(i){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(we(s,t))return c[t]=1,s[t];if(o!==r.MZ&&(0,r.$3)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,r.$3)(h,t))return c[t]=3,a[t];if(n!==r.MZ&&(0,r.$3)(n,t))return c[t]=4,n[t];Ce&&(c[t]=0)}}const d=ye[t];let p,f;return d?("$attrs"===t&&(0,i.u4)(e.attrs,"get",""),d(e)):(p=l.__cssModules)&&(p=p[t])?p:n!==r.MZ&&(0,r.$3)(n,t)?(c[t]=4,n[t]):(f=u.config.globalProperties,(0,r.$3)(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:i,setupState:s,ctx:o}=e;return we(s,t)?(s[t]=n,!0):i!==r.MZ&&(0,r.$3)(i,t)?(i[t]=n,!0):!(0,r.$3)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==r.MZ&&(0,r.$3)(e,a)||we(t,a)||(c=o[0])&&(0,r.$3)(c,a)||(0,r.$3)(i,a)||(0,r.$3)(ye,a)||(0,r.$3)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,r.$3)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ie(e){return(0,r.cy)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let Ce=!0;function Te(e){const t=Pe(e),n=e.proxy,s=e.ctx;Ce=!1,t.beforeCreate&&ke(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:l,provide:u,inject:h,created:d,beforeMount:p,mounted:f,beforeUpdate:g,updated:m,activated:_,deactivated:v,beforeDestroy:y,beforeUnmount:w,destroyed:b,unmounted:I,render:C,renderTracked:T,renderTriggered:E,errorCaptured:k,serverPrefetch:S,expose:P,inheritAttrs:R,components:A,directives:N,filters:O}=t,x=null;if(h&&Ee(h,s,x),c)for(const i in c){const e=c[i];(0,r.Tn)(e)&&(s[i]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,r.Gv)(t)&&(e.data=(0,i.Kh)(t))}if(Ce=!0,a)for(const i in a){const e=a[i],t=(0,r.Tn)(e)?e.bind(n,n):(0,r.Tn)(e.get)?e.get.bind(n,n):r.tE;0;const o=!(0,r.Tn)(e)&&(0,r.Tn)(e.set)?e.set.bind(n):r.tE,c=Mn({get:t,set:o});Object.defineProperty(s,i,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(l)for(const i in l)Se(l[i],s,n,i);if(u){const e=(0,r.Tn)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{We(t,e[t])}))}function D(e,t){(0,r.cy)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&ke(d,e,"c"),D(ne,p),D(ie,f),D(re,g),D(se,m),D(G,_),D(Y,v),D(he,k),D(ue,T),D(le,E),D(oe,w),D(ae,I),D(ce,S),(0,r.cy)(P))if(P.length){const t=e.exposed||(e.exposed={});P.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});C&&e.render===r.tE&&(e.render=C),null!=R&&(e.inheritAttrs=R),A&&(e.components=A),N&&(e.directives=N),S&&V(e)}function Ee(e,t,n=r.tE){(0,r.cy)(e)&&(e=xe(e));for(const s in e){const n=e[s];let o;o=(0,r.Gv)(n)?"default"in n?Ve(n.from||s,n.default,!0):Ve(n.from||s):Ve(n),(0,i.i9)(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function ke(e,t,n){o((0,r.cy)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Se(e,t,n,i){let s=i.includes(".")?Tt(n,i):()=>n[i];if((0,r.Kg)(e)){const n=t[e];(0,r.Tn)(n)&&bt(s,n)}else if((0,r.Tn)(e))bt(s,e.bind(n));else if((0,r.Gv)(e))if((0,r.cy)(e))e.forEach((e=>Se(e,t,n,i)));else{const i=(0,r.Tn)(e.handler)?e.handler.bind(n):t[e.handler];(0,r.Tn)(i)&&bt(s,i,e)}else 0}function Pe(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(t);let l;return c?l=c:s.length||n||i?(l={},s.length&&s.forEach((e=>Re(l,e,a,!0))),Re(l,t,a)):l=t,(0,r.Gv)(t)&&o.set(t,l),l}function Re(e,t,n,i=!1){const{mixins:r,extends:s}=t;s&&Re(e,s,n,!0),r&&r.forEach((t=>Re(e,t,n,!0)));for(const o in t)if(i&&"expose"===o);else{const i=Ae[o]||n&&n[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const Ae={data:Ne,props:Le,emits:Le,methods:Me,computed:Me,beforeCreate:De,created:De,beforeMount:De,mounted:De,beforeUpdate:De,updated:De,beforeDestroy:De,beforeUnmount:De,destroyed:De,unmounted:De,activated:De,deactivated:De,errorCaptured:De,serverPrefetch:De,components:Me,directives:Me,watch:Fe,provide:Ne,inject:Oe};function Ne(e,t){return t?e?function(){return(0,r.X$)((0,r.Tn)(e)?e.call(this,this):e,(0,r.Tn)(t)?t.call(this,this):t)}:t:e}function Oe(e,t){return Me(xe(e),xe(t))}function xe(e){if((0,r.cy)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function De(e,t){return e?[...new Set([].concat(e,t))]:t}function Me(e,t){return e?(0,r.X$)(Object.create(null),e,t):t}function Le(e,t){return e?(0,r.cy)(e)&&(0,r.cy)(t)?[...new Set([...e,...t])]:(0,r.X$)(Object.create(null),Ie(e),Ie(null!=t?t:{})):t}function Fe(e,t){if(!e)return t;if(!t)return e;const n=(0,r.X$)(Object.create(null),e);for(const i in t)n[i]=De(e[i],t[i]);return n}function je(){return{app:null,config:{isNativeTag:r.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ue=0;function $e(e,t){return function(n,i=null){(0,r.Tn)(n)||(n=(0,r.X$)({},n)),null==i||(0,r.Gv)(i)||(i=null);const s=je(),a=new WeakSet,c=[];let l=!1;const u=s.app={_uid:Ue++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:Fn,get config(){return s.config},set config(e){0},use(e,...t){return a.has(e)||(e&&(0,r.Tn)(e.install)?(a.add(e),e.install(u,...t)):(0,r.Tn)(e)&&(a.add(e),e(u,...t))),u},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),u},component(e,t){return t?(s.components[e]=t,u):s.components[e]},directive(e,t){return t?(s.directives[e]=t,u):s.directives[e]},mount(r,o,a){if(!l){0;const c=u._ceVNode||tn(n,i);return c.appContext=s,!0===a?a="svg":!1===a&&(a=void 0),o&&t?t(c,r):e(c,r,a),l=!0,u._container=r,r.__vue_app__=u,On(c.component)}},onUnmount(e){c.push(e)},unmount(){l&&(o(c,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(e,t){return s.provides[e]=t,u},runWithContext(e){const t=qe;qe=u;try{return e()}finally{qe=t}}};return u}}let qe=null;function We(e,t){if(mn){let n=mn.provides;const i=mn.parent&&mn.parent.provides;i===n&&(n=mn.provides=Object.create(i)),n[e]=t}else 0}function Ve(e,t,n=!1){const i=mn||E;if(i||qe){let s=qe?qe._context.provides:i?null==i.parent||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,r.Tn)(t)?t.call(i&&i.proxy):t}else 0}const Be={},He=()=>Object.create(Be),Ke=e=>Object.getPrototypeOf(e)===Be;function ze(e,t,n,r=!1){const s={},o=He();e.propsDefaults=Object.create(null),Ye(e,t,s,o);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=r?s:(0,i.Gc)(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function Ge(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,l=(0,i.ux)(o),[u]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let i;Ye(e,t,o,a)&&(h=!0);for(const s in l)t&&((0,r.$3)(t,s)||(i=(0,r.Tg)(s))!==s&&(0,r.$3)(t,i))||(u?!n||void 0===n[s]&&void 0===n[i]||(o[s]=Qe(u,l,s,void 0,e,!0)):delete o[s]);if(a!==l)for(const e in a)t&&(0,r.$3)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){let s=n[i];if(Pt(e.emitsOptions,s))continue;const c=t[s];if(u)if((0,r.$3)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,r.PT)(s);o[t]=Qe(u,l,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,i.hZ)(e.attrs,"set","")}function Ye(e,t,n,s){const[o,a]=e.propsOptions;let c,l=!1;if(t)for(let i in t){if((0,r.SU)(i))continue;const u=t[i];let h;o&&(0,r.$3)(o,h=(0,r.PT)(i))?a&&a.includes(h)?(c||(c={}))[h]=u:n[h]=u:Pt(e.emitsOptions,i)||i in s&&u===s[i]||(s[i]=u,l=!0)}if(a){const t=(0,i.ux)(n),s=c||r.MZ;for(let i=0;i<a.length;i++){const c=a[i];n[c]=Qe(o,t,c,s[c],e,!(0,r.$3)(s,c))}}return l}function Qe(e,t,n,i,s,o){const a=e[n];if(null!=a){const e=(0,r.$3)(a,"default");if(e&&void 0===i){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,r.Tn)(e)){const{propsDefaults:r}=s;if(n in r)i=r[n];else{const o=wn(s);i=r[n]=e.call(null,t),o()}}else i=e;s.ce&&s.ce._setProp(n,i)}a[0]&&(o&&!e?i=!1:!a[1]||""!==i&&i!==(0,r.Tg)(n)||(i=!0))}return i}const Je=new WeakMap;function Ze(e,t,n=!1){const i=n?Je:t.propsCache,s=i.get(e);if(s)return s;const o=e.props,a={},c=[];let l=!1;if(!(0,r.Tn)(e)){const i=e=>{l=!0;const[n,i]=Ze(e,t,!0);(0,r.X$)(a,n),i&&c.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!o&&!l)return(0,r.Gv)(e)&&i.set(e,r.Oj),r.Oj;if((0,r.cy)(o))for(let h=0;h<o.length;h++){0;const e=(0,r.PT)(o[h]);Xe(e)&&(a[e]=r.MZ)}else if(o){0;for(const e in o){const t=(0,r.PT)(e);if(Xe(t)){const n=o[e],i=a[t]=(0,r.cy)(n)||(0,r.Tn)(n)?{type:n}:(0,r.X$)({},n),s=i.type;let l=!1,u=!0;if((0,r.cy)(s))for(let e=0;e<s.length;++e){const t=s[e],n=(0,r.Tn)(t)&&t.name;if("Boolean"===n){l=!0;break}"String"===n&&(u=!1)}else l=(0,r.Tn)(s)&&"Boolean"===s.name;i[0]=l,i[1]=u,(l||(0,r.$3)(i,"default"))&&c.push(t)}}}const u=[a,c];return(0,r.Gv)(e)&&i.set(e,u),u}function Xe(e){return"$"!==e[0]&&!(0,r.SU)(e)}const et=e=>"_"===e[0]||"$stable"===e,tt=e=>(0,r.cy)(e)?e.map(cn):[cn(e)],nt=(e,t,n)=>{if(t._n)return t;const i=P(((...e)=>tt(t(...e))),n);return i._c=!1,i},it=(e,t,n)=>{const i=e._ctx;for(const s in e){if(et(s))continue;const n=e[s];if((0,r.Tn)(n))t[s]=nt(s,n,i);else if(null!=n){0;const e=tt(n);t[s]=()=>e}}},rt=(e,t)=>{const n=tt(t);e.slots.default=()=>n},st=(e,t,n)=>{for(const i in t)!n&&et(i)||(e[i]=t[i])},ot=(e,t,n)=>{const i=e.slots=He();if(32&e.vnode.shapeFlag){const e=t._;e?(st(i,t,n),n&&(0,r.yQ)(i,"_",e,!0)):it(t,i)}else t&&rt(e,t)},at=(e,t,n)=>{const{vnode:i,slots:s}=e;let o=!0,a=r.MZ;if(32&i.shapeFlag){const e=t._;e?n&&1===e?o=!1:st(s,t,n):(o=!t.$stable,it(t,s)),a=t}else t&&(rt(e,t),a={default:1});if(o)for(const r in s)et(r)||null!=a[r]||delete s[r]};function ct(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,r.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const lt=Lt;function ut(e){return ht(e)}function ht(e,t){ct();const n=(0,r.We)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:l,createComment:u,setText:h,setElementText:d,parentNode:p,nextSibling:f,setScopeId:g=r.tE,insertStaticContent:m}=e,_=(e,t,n,i=null,r=null,s=null,o=void 0,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Jt(e,t)&&(i=X(e),G(e,r,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case jt:y(e,t,n,i);break;case Ut:w(e,t,n,i);break;case $t:null==e&&C(t,n,i,o);break;case Ft:M(e,t,n,i,r,s,o,a,c);break;default:1&h?k(e,t,n,i,r,s,o,a,c):6&h?L(e,t,n,i,r,s,o,a,c):(64&h||128&h)&&l.process(e,t,n,i,r,s,o,a,c,ne)}null!=u&&r&&B(u,e&&e.ref,s,t||e,!t)},y=(e,t,n,i)=>{if(null==e)s(t.el=l(t.children),n,i);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},w=(e,t,n,i)=>{null==e?s(t.el=u(t.children||""),n,i):t.el=e.el},C=(e,t,n,i)=>{[e.el,e.anchor]=m(e.children,t,n,i,e.el,e.anchor)},T=({el:e,anchor:t},n,i)=>{let r;while(e&&e!==t)r=f(e),s(e,n,i),e=r;s(t,n,i)},E=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=f(e),o(e),e=n;o(t)},k=(e,t,n,i,r,s,o,a,c)=>{"svg"===t.type?o="svg":"math"===t.type&&(o="mathml"),null==e?S(t,n,i,r,s,o,a,c):O(e,t,r,s,o,a,c)},S=(e,t,n,i,o,l,u,h)=>{let p,f;const{props:g,shapeFlag:m,transition:_,dirs:v}=e;if(p=e.el=c(e.type,l,g&&g.is,g),8&m?d(p,e.children):16&m&&R(e.children,p,null,i,o,dt(e,l),u,h),v&&A(e,null,i,"created"),P(p,e,e.scopeId,u,i),g){for(const e in g)"value"===e||(0,r.SU)(e)||a(p,e,null,g[e],l,i);"value"in g&&a(p,"value",null,g.value,l),(f=g.onVnodeBeforeMount)&&dn(f,i,e)}v&&A(e,null,i,"beforeMount");const y=ft(o,_);y&&_.beforeEnter(p),s(p,t,n),((f=g&&g.onVnodeMounted)||y||v)&&lt((()=>{f&&dn(f,i,e),y&&_.enter(p),v&&A(e,null,i,"mounted")}),o)},P=(e,t,n,i,r)=>{if(n&&g(e,n),i)for(let s=0;s<i.length;s++)g(e,i[s]);if(r){let n=r.subTree;if(t===n||Mt(n.type)&&(n.ssContent===t||n.ssFallback===t)){const t=r.vnode;P(e,t,t.scopeId,t.slotScopeIds,r.parent)}}},R=(e,t,n,i,r,s,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?ln(e[l]):cn(e[l]);_(null,c,t,n,i,r,s,o,a)}},O=(e,t,n,i,s,o,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:p}=t;u|=16&e.patchFlag;const f=e.props||r.MZ,g=t.props||r.MZ;let m;if(n&&pt(n,!1),(m=g.onVnodeBeforeUpdate)&&dn(m,n,t,e),p&&A(t,e,n,"beforeUpdate"),n&&pt(n,!0),(f.innerHTML&&null==g.innerHTML||f.textContent&&null==g.textContent)&&d(l,""),h?x(e.dynamicChildren,h,l,n,i,dt(t,s),o):c||q(e,t,l,null,n,i,dt(t,s),o,!1),u>0){if(16&u)D(l,f,g,n,s);else if(2&u&&f.class!==g.class&&a(l,"class",null,g.class,s),4&u&&a(l,"style",f.style,g.style,s),8&u){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const i=e[t],r=f[i],o=g[i];o===r&&"value"!==i||a(l,i,r,o,s,n)}}1&u&&e.children!==t.children&&d(l,t.children)}else c||null!=h||D(l,f,g,n,s);((m=g.onVnodeUpdated)||p)&&lt((()=>{m&&dn(m,n,t,e),p&&A(t,e,n,"updated")}),i)},x=(e,t,n,i,r,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===Ft||!Jt(c,l)||198&c.shapeFlag)?p(c.el):n;_(c,l,u,null,i,r,s,o,!0)}},D=(e,t,n,i,s)=>{if(t!==n){if(t!==r.MZ)for(const o in t)(0,r.SU)(o)||o in n||a(e,o,t[o],null,s,i);for(const o in n){if((0,r.SU)(o))continue;const c=n[o],l=t[o];c!==l&&"value"!==o&&a(e,o,l,c,s,i)}"value"in n&&a(e,"value",t.value,n.value,s)}},M=(e,t,n,i,r,o,a,c,u)=>{const h=t.el=e?e.el:l(""),d=t.anchor=e?e.anchor:l("");let{patchFlag:p,dynamicChildren:f,slotScopeIds:g}=t;g&&(c=c?c.concat(g):g),null==e?(s(h,n,i),s(d,n,i),R(t.children||[],n,d,r,o,a,c,u)):p>0&&64&p&&f&&e.dynamicChildren?(x(e.dynamicChildren,f,n,r,o,a,c),(null!=t.key||r&&t===r.subTree)&&gt(e,t,!0)):q(e,t,n,d,r,o,a,c,u)},L=(e,t,n,i,r,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?r.ctx.activate(t,n,i,o,c):F(t,n,i,r,s,o,c):j(e,t,c)},F=(e,t,n,i,r,s,o)=>{const a=e.component=gn(e,i,r);if(K(e)&&(a.ctx.renderer=ne),kn(a,!1,o),a.asyncDep){if(r&&r.registerDep(a,U,o),!e.el){const e=a.subTree=tn(Ut);w(null,e,t,n)}}else U(a,e,t,n,r,s,o)},j=(e,t,n)=>{const i=t.component=e.component;if(Ot(e,t,n)){if(i.asyncDep&&!i.asyncResolved)return void $(i,t,n);i.next=t,i.update()}else t.el=e.el,i.vnode=t},U=(e,t,n,s,o,a,c)=>{const l=()=>{if(e.isMounted){let{next:t,bu:n,u:i,parent:s,vnode:u}=e;{const n=_t(e);if(n)return t&&(t.el=u.el,$(e,t,c)),void n.asyncDep.then((()=>{e.isUnmounted||l()}))}let h,d=t;0,pt(e,!1),t?(t.el=u.el,$(e,t,c)):t=u,n&&(0,r.DY)(n),(h=t.props&&t.props.onVnodeBeforeUpdate)&&dn(h,s,t,u),pt(e,!0);const f=Rt(e);0;const g=e.subTree;e.subTree=f,_(g,f,p(g.el),X(g),e,o,a),t.el=f.el,null===d&&Dt(e,f.el),i&&lt(i,o),(h=t.props&&t.props.onVnodeUpdated)&&lt((()=>dn(h,s,t,u)),o)}else{let i;const{el:c,props:l}=t,{bm:u,m:h,parent:d,root:p,type:f}=e,g=H(t);if(pt(e,!1),u&&(0,r.DY)(u),!g&&(i=l&&l.onVnodeBeforeMount)&&dn(i,d,t),pt(e,!0),c&&re){const t=()=>{e.subTree=Rt(e),re(c,e.subTree,e,o,null)};g&&f.__asyncHydrate?f.__asyncHydrate(c,e,t):t()}else{p.ce&&p.ce._injectChildStyle(f);const i=e.subTree=Rt(e);0,_(null,i,n,s,e,o,a),t.el=i.el}if(h&&lt(h,o),!g&&(i=l&&l.onVnodeMounted)){const e=t;lt((()=>dn(i,d,e)),o)}(256&t.shapeFlag||d&&H(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&lt(e.a,o),e.isMounted=!0,t=n=s=null}};e.scope.on();const u=e.effect=new i.X2(l);e.scope.off();const h=e.update=u.run.bind(u),d=e.job=u.runIfDirty.bind(u);d.i=e,d.id=e.uid,u.scheduler=()=>v(d),pt(e,!0),h()},$=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,Ge(e,t.props,r,n),at(e,t.children,n),(0,i.C4)(),b(e),(0,i.bl)()},q=(e,t,n,i,r,s,o,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:p,shapeFlag:f}=t;if(p>0){if(128&p)return void V(l,h,n,i,r,s,o,a,c);if(256&p)return void W(l,h,n,i,r,s,o,a,c)}8&f?(16&u&&Z(l,r,s),h!==l&&d(n,h)):16&u?16&f?V(l,h,n,i,r,s,o,a,c):Z(l,r,s,!0):(8&u&&d(n,""),16&f&&R(h,n,i,r,s,o,a,c))},W=(e,t,n,i,s,o,a,c,l)=>{e=e||r.Oj,t=t||r.Oj;const u=e.length,h=t.length,d=Math.min(u,h);let p;for(p=0;p<d;p++){const i=t[p]=l?ln(t[p]):cn(t[p]);_(e[p],i,n,null,s,o,a,c,l)}u>h?Z(e,s,o,!0,!1,d):R(t,n,i,s,o,a,c,l,d)},V=(e,t,n,i,s,o,a,c,l)=>{let u=0;const h=t.length;let d=e.length-1,p=h-1;while(u<=d&&u<=p){const i=e[u],r=t[u]=l?ln(t[u]):cn(t[u]);if(!Jt(i,r))break;_(i,r,n,null,s,o,a,c,l),u++}while(u<=d&&u<=p){const i=e[d],r=t[p]=l?ln(t[p]):cn(t[p]);if(!Jt(i,r))break;_(i,r,n,null,s,o,a,c,l),d--,p--}if(u>d){if(u<=p){const e=p+1,r=e<h?t[e].el:i;while(u<=p)_(null,t[u]=l?ln(t[u]):cn(t[u]),n,r,s,o,a,c,l),u++}}else if(u>p)while(u<=d)G(e[u],s,o,!0),u++;else{const f=u,g=u,m=new Map;for(u=g;u<=p;u++){const e=t[u]=l?ln(t[u]):cn(t[u]);null!=e.key&&m.set(e.key,u)}let v,y=0;const w=p-g+1;let b=!1,I=0;const C=new Array(w);for(u=0;u<w;u++)C[u]=0;for(u=f;u<=d;u++){const i=e[u];if(y>=w){G(i,s,o,!0);continue}let r;if(null!=i.key)r=m.get(i.key);else for(v=g;v<=p;v++)if(0===C[v-g]&&Jt(i,t[v])){r=v;break}void 0===r?G(i,s,o,!0):(C[r-g]=u+1,r>=I?I=r:b=!0,_(i,t[r],n,null,s,o,a,c,l),y++)}const T=b?mt(C):r.Oj;for(v=T.length-1,u=w-1;u>=0;u--){const e=g+u,r=t[e],d=e+1<h?t[e+1].el:i;0===C[u]?_(null,r,n,d,s,o,a,c,l):b&&(v<0||u!==T[v]?z(r,n,d,2):v--)}}},z=(e,t,n,i,r=null)=>{const{el:a,type:c,transition:l,children:u,shapeFlag:h}=e;if(6&h)return void z(e.component.subTree,t,n,i);if(128&h)return void e.suspense.move(t,n,i);if(64&h)return void c.move(e,t,n,ne);if(c===Ft){s(a,t,n);for(let e=0;e<u.length;e++)z(u[e],t,n,i);return void s(e.anchor,t,n)}if(c===$t)return void T(e,t,n);const d=2!==i&&1&h&&l;if(d)if(0===i)l.beforeEnter(a),s(a,t,n),lt((()=>l.enter(a)),r);else{const{leave:i,delayLeave:r,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?o(a):s(a,t,n)},h=()=>{i(a,(()=>{u(),c&&c()}))};r?r(a,u,h):h()}else s(a,t,n)},G=(e,t,n,r=!1,s=!1)=>{const{type:o,props:a,ref:c,children:l,dynamicChildren:u,shapeFlag:h,patchFlag:d,dirs:p,cacheIndex:f}=e;if(-2===d&&(s=!1),null!=c&&((0,i.C4)(),B(c,null,n,e,!0),(0,i.bl)()),null!=f&&(t.renderCache[f]=void 0),256&h)return void t.ctx.deactivate(e);const g=1&h&&p,m=!H(e);let _;if(m&&(_=a&&a.onVnodeBeforeUnmount)&&dn(_,t,e),6&h)J(e.component,n,r);else{if(128&h)return void e.suspense.unmount(n,r);g&&A(e,null,t,"beforeUnmount"),64&h?e.type.remove(e,t,n,ne,r):u&&!u.hasOnce&&(o!==Ft||d>0&&64&d)?Z(u,t,n,!1,!0):(o===Ft&&384&d||!s&&16&h)&&Z(l,t,n),r&&Y(e)}(m&&(_=a&&a.onVnodeUnmounted)||g)&&lt((()=>{_&&dn(_,t,e),g&&A(e,null,t,"unmounted")}),n)},Y=e=>{const{type:t,el:n,anchor:i,transition:r}=e;if(t===Ft)return void Q(n,i);if(t===$t)return void E(e);const s=()=>{o(n),r&&!r.persisted&&r.afterLeave&&r.afterLeave()};if(1&e.shapeFlag&&r&&!r.persisted){const{leave:t,delayLeave:i}=r,o=()=>t(n,s);i?i(e.el,s,o):o()}else s()},Q=(e,t)=>{let n;while(e!==t)n=f(e),o(e),e=n;o(t)},J=(e,t,n)=>{const{bum:i,scope:s,job:o,subTree:a,um:c,m:l,a:u,parent:h,slots:{__:d}}=e;vt(l),vt(u),i&&(0,r.DY)(i),h&&(0,r.cy)(d)&&d.forEach((e=>{h.renderCache[e]=void 0})),s.stop(),o&&(o.flags|=8,G(a,e,t,n)),c&&lt(c,t),lt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Z=(e,t,n,i=!1,r=!1,s=0)=>{for(let o=s;o<e.length;o++)G(e[o],t,n,i,r)},X=e=>{if(6&e.shapeFlag)return X(e.component.subTree);if(128&e.shapeFlag)return e.suspense.next();const t=f(e.anchor||e.el),n=t&&t[N];return n?f(n):t};let ee=!1;const te=(e,t,n)=>{null==e?t._vnode&&G(t._vnode,null,null,!0):_(t._vnode||null,e,t,null,null,null,n),t._vnode=e,ee||(ee=!0,b(),I(),ee=!1)},ne={p:_,um:G,m:z,r:Y,mt:F,mc:R,pc:q,pbc:x,n:X,o:e};let ie,re;return t&&([ie,re]=t(ne)),{render:te,hydrate:ie,createApp:$e(te,ie)}}function dt({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function pt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ft(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function gt(e,t,n=!1){const i=e.children,s=t.children;if((0,r.cy)(i)&&(0,r.cy)(s))for(let r=0;r<i.length;r++){const e=i[r];let t=s[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[r]=ln(s[r]),t.el=e.el),n||-2===t.patchFlag||gt(e,t)),t.type===jt&&(t.el=e.el),t.type!==Ut||t.el||(t.el=e.el)}}function mt(e){const t=e.slice(),n=[0];let i,r,s,o,a;const c=e.length;for(i=0;i<c;i++){const c=e[i];if(0!==c){if(r=n[n.length-1],e[r]<c){t[i]=r,n.push(i);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}function _t(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:_t(t)}function vt(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const yt=Symbol.for("v-scx"),wt=()=>{{const e=Ve(yt);return e}};function bt(e,t,n){return It(e,t,n)}function It(e,t,n=r.MZ){const{immediate:s,deep:a,flush:c,once:l}=n;const u=(0,r.X$)({},n);const h=t&&s||!t&&"post"!==c;let d;if(En)if("sync"===c){const e=wt();d=e.__watcherHandles||(e.__watcherHandles=[])}else if(!h){const e=()=>{};return e.stop=r.tE,e.resume=r.tE,e.pause=r.tE,e}const p=mn;u.call=(e,t,n)=>o(e,p,t,n);let f=!1;"post"===c?u.scheduler=e=>{lt(e,p&&p.suspense)}:"sync"!==c&&(f=!0,u.scheduler=(e,t)=>{t?e():v(e)}),u.augmentJob=e=>{t&&(e.flags|=4),f&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};const g=(0,i.wB)(e,t,u);return En&&(d?d.push(g):h&&g()),g}function Ct(e,t,n){const i=this.proxy,s=(0,r.Kg)(e)?e.includes(".")?Tt(i,e):()=>i[e]:e.bind(i,i);let o;(0,r.Tn)(t)?o=t:(o=t.handler,n=t);const a=wn(this),c=It(s,o.bind(i),n);return a(),c}function Tt(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}const Et=(e,t)=>"modelValue"===t||"model-value"===t?e.modelModifiers:e[`${t}Modifiers`]||e[`${(0,r.PT)(t)}Modifiers`]||e[`${(0,r.Tg)(t)}Modifiers`];function kt(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||r.MZ;let s=n;const a=t.startsWith("update:"),c=a&&Et(i,t.slice(7));let l;c&&(c.trim&&(s=n.map((e=>(0,r.Kg)(e)?e.trim():e))),c.number&&(s=n.map(r.bB)));let u=i[l=(0,r.rU)(t)]||i[l=(0,r.rU)((0,r.PT)(t))];!u&&a&&(u=i[l=(0,r.rU)((0,r.Tg)(t))]),u&&o(u,e,6,s);const h=i[l+"Once"];if(h){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,o(h,e,6,s)}}function St(e,t,n=!1){const i=t.emitsCache,s=i.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,r.Tn)(e)){const i=e=>{const n=St(e,t,!0);n&&(c=!0,(0,r.X$)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return o||c?((0,r.cy)(o)?o.forEach((e=>a[e]=null)):(0,r.X$)(a,o),(0,r.Gv)(e)&&i.set(e,a),a):((0,r.Gv)(e)&&i.set(e,null),null)}function Pt(e,t){return!(!e||!(0,r.Mp)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,r.$3)(e,t[0].toLowerCase()+t.slice(1))||(0,r.$3)(e,(0,r.Tg)(t))||(0,r.$3)(e,t))}function Rt(e){const{type:t,vnode:n,proxy:i,withProxy:s,propsOptions:[o],slots:c,attrs:l,emit:u,render:h,renderCache:d,props:p,data:f,setupState:g,ctx:m,inheritAttrs:_}=e,v=S(e);let y,w;try{if(4&n.shapeFlag){const e=s||i,t=e;y=cn(h.call(t,e,d,p,g,f,m)),w=l}else{const e=t;0,y=cn(e.length>1?e(p,{attrs:l,slots:c,emit:u}):e(p,null)),w=t.props?l:At(l)}}catch(I){qt.length=0,a(I,e,1),y=tn(Ut)}let b=y;if(w&&!1!==_){const e=Object.keys(w),{shapeFlag:t}=b;e.length&&7&t&&(o&&e.some(r.CP)&&(w=Nt(w,o)),b=sn(b,w,!1,!0))}return n.dirs&&(b=sn(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&$(b,n.transition),y=b,S(v),y}const At=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,r.Mp)(n))&&((t||(t={}))[n]=e[n]);return t},Nt=(e,t)=>{const n={};for(const i in e)(0,r.CP)(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function Ot(e,t,n){const{props:i,children:r,component:s}=e,{props:o,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!r&&!a||a&&a.$stable)||i!==o&&(i?!o||xt(i,o,l):!!o);if(1024&c)return!0;if(16&c)return i?xt(i,o,l):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==i[n]&&!Pt(l,n))return!0}}return!1}function xt(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==e[s]&&!Pt(n,s))return!0}return!1}function Dt({vnode:e,parent:t},n){while(t){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i!==e)break;(e=t.vnode).el=n,t=t.parent}}const Mt=e=>e.__isSuspense;function Lt(e,t){t&&t.pendingBranch?(0,r.cy)(e)?t.effects.push(...e):t.effects.push(e):w(e)}const Ft=Symbol.for("v-fgt"),jt=Symbol.for("v-txt"),Ut=Symbol.for("v-cmt"),$t=Symbol.for("v-stc"),qt=[];let Wt=null;function Vt(e=!1){qt.push(Wt=e?null:[])}function Bt(){qt.pop(),Wt=qt[qt.length-1]||null}let Ht=1;function Kt(e,t=!1){Ht+=e,e<0&&Wt&&t&&(Wt.hasOnce=!0)}function zt(e){return e.dynamicChildren=Ht>0?Wt||r.Oj:null,Bt(),Ht>0&&Wt&&Wt.push(e),e}function Gt(e,t,n,i,r,s){return zt(en(e,t,n,i,r,s,!0))}function Yt(e,t,n,i,r){return zt(tn(e,t,n,i,r,!0))}function Qt(e){return!!e&&!0===e.__v_isVNode}function Jt(e,t){return e.type===t.type&&e.key===t.key}const Zt=({key:e})=>null!=e?e:null,Xt=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,r.Kg)(e)||(0,i.i9)(e)||(0,r.Tn)(e)?{i:E,r:e,k:t,f:!!n}:e:null);function en(e,t=null,n=null,i=0,s=null,o=(e===Ft?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Zt(t),ref:t&&Xt(t),scopeId:k,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:E};return c?(un(l,n),128&o&&e.normalize(l)):n&&(l.shapeFlag|=(0,r.Kg)(n)?8:16),Ht>0&&!a&&Wt&&(l.patchFlag>0||6&o)&&32!==l.patchFlag&&Wt.push(l),l}const tn=nn;function nn(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==fe||(e=Ut),Qt(e)){const i=sn(e,t,!0);return n&&un(i,n),Ht>0&&!a&&Wt&&(6&i.shapeFlag?Wt[Wt.indexOf(e)]=i:Wt.push(i)),i.patchFlag=-2,i}if(Dn(e)&&(e=e.__vccOpts),t){t=rn(t);let{class:e,style:n}=t;e&&!(0,r.Kg)(e)&&(t.class=(0,r.C4)(e)),(0,r.Gv)(n)&&((0,i.ju)(n)&&!(0,r.cy)(n)&&(n=(0,r.X$)({},n)),t.style=(0,r.Tr)(n))}const c=(0,r.Kg)(e)?1:Mt(e)?128:O(e)?64:(0,r.Gv)(e)?4:(0,r.Tn)(e)?2:0;return en(e,t,n,s,o,c,a,!0)}function rn(e){return e?(0,i.ju)(e)||Ke(e)?(0,r.X$)({},e):e:null}function sn(e,t,n=!1,i=!1){const{props:s,ref:o,patchFlag:a,children:c,transition:l}=e,u=t?hn(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Zt(u),ref:t&&t.ref?n&&o?(0,r.cy)(o)?o.concat(Xt(t)):[o,Xt(t)]:Xt(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ft?-1===a?16:16|a:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&sn(e.ssContent),ssFallback:e.ssFallback&&sn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&i&&$(h,l.clone(h)),h}function on(e=" ",t=0){return tn(jt,null,e,t)}function an(e="",t=!1){return t?(Vt(),Yt(Ut,null,e)):tn(Ut,null,e)}function cn(e){return null==e||"boolean"===typeof e?tn(Ut):(0,r.cy)(e)?tn(Ft,null,e.slice()):Qt(e)?ln(e):tn(jt,null,String(e))}function ln(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:sn(e)}function un(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if((0,r.cy)(t))n=16;else if("object"===typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),un(e,n()),n._c&&(n._d=!0)))}{n=32;const i=t._;i||Ke(t)?3===i&&E&&(1===E.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=E}}else(0,r.Tn)(t)?(t={default:t,_ctx:E},n=32):(t=String(t),64&i?(n=16,t=[on(t)]):n=8);e.children=t,e.shapeFlag|=n}function hn(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=(0,r.C4)([t.class,i.class]));else if("style"===e)t.style=(0,r.Tr)([t.style,i.style]);else if((0,r.Mp)(e)){const n=t[e],s=i[e];!s||n===s||(0,r.cy)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=i[e])}return t}function dn(e,t,n,i=null){o(e,t,7,[n,i])}const pn=je();let fn=0;function gn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||pn,a={uid:fn++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new i.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ze(s,o),emitsOptions:St(s,o),emit:null,emitted:null,propsDefaults:r.MZ,inheritAttrs:s.inheritAttrs,ctx:r.MZ,data:r.MZ,props:r.MZ,attrs:r.MZ,slots:r.MZ,refs:r.MZ,setupState:r.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=kt.bind(null,a),e.ce&&e.ce(a),a}let mn=null;const _n=()=>mn||E;let vn,yn;{const e=(0,r.We)(),t=(t,n)=>{let i;return(i=e[t])||(i=e[t]=[]),i.push(n),e=>{i.length>1?i.forEach((t=>t(e))):i[0](e)}};vn=t("__VUE_INSTANCE_SETTERS__",(e=>mn=e)),yn=t("__VUE_SSR_SETTERS__",(e=>En=e))}const wn=e=>{const t=mn;return vn(e),e.scope.on(),()=>{e.scope.off(),vn(t)}},bn=()=>{mn&&mn.scope.off(),vn(null)};function In(e){return 4&e.vnode.shapeFlag}let Cn,Tn,En=!1;function kn(e,t=!1,n=!1){t&&yn(t);const{props:i,children:r}=e.vnode,s=In(e);ze(e,i,s,t),ot(e,r,n||t);const o=s?Sn(e,t):void 0;return t&&yn(!1),o}function Sn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,be);const{setup:o}=n;if(o){(0,i.C4)();const n=e.setupContext=o.length>1?Nn(e):null,c=wn(e),l=s(o,e,0,[e.props,n]),u=(0,r.yL)(l);if((0,i.bl)(),c(),!u&&!e.sp||H(e)||V(e),u){if(l.then(bn,bn),t)return l.then((n=>{Pn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=l}else Pn(e,l,t)}else Rn(e,t)}function Pn(e,t,n){(0,r.Tn)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,r.Gv)(t)&&(e.setupState=(0,i.Pr)(t)),Rn(e,n)}function Rn(e,t,n){const s=e.type;if(!e.render){if(!t&&Cn&&!s.render){const t=s.template||Pe(e).template;if(t){0;const{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,r.X$)((0,r.X$)({isCustomElement:n,delimiters:o},i),a);s.render=Cn(t,c)}}e.render=s.render||r.tE,Tn&&Tn(e)}{const t=wn(e);(0,i.C4)();try{Te(e)}finally{(0,i.bl)(),t()}}}const An={get(e,t){return(0,i.u4)(e,"get",""),e[t]}};function Nn(e){const t=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,An),slots:e.slots,emit:e.emit,expose:t}}function On(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy((0,i.Pr)((0,i.IG)(e.exposed)),{get(t,n){return n in t?t[n]:n in ye?ye[n](e):void 0},has(e,t){return t in e||t in ye}})):e.proxy}function xn(e,t=!0){return(0,r.Tn)(e)?e.displayName||e.name:e.name||t&&e.__name}function Dn(e){return(0,r.Tn)(e)&&"__vccOpts"in e}const Mn=(e,t)=>{const n=(0,i.EW)(e,t,En);return n};function Ln(e,t,n){const i=arguments.length;return 2===i?(0,r.Gv)(t)&&!(0,r.cy)(t)?Qt(t)?tn(e,null,[t]):tn(e,t):tn(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&Qt(n)&&(n=[n]),tn(e,t,n))}const Fn="3.5.16"},743:(e,t,n)=>{n.d(t,{$L:()=>q,$g:()=>O,A4:()=>p,Am:()=>Z,As:()=>W,Cv:()=>B,FA:()=>j,Fy:()=>k,Hk:()=>s,I9:()=>X,Im:()=>G,K3:()=>c,KA:()=>u,Ku:()=>le,OE:()=>ce,T9:()=>C,Tj:()=>b,Uj:()=>h,XA:()=>T,ZQ:()=>S,bD:()=>Q,cY:()=>E,dI:()=>oe,dM:()=>M,eX:()=>D,g:()=>F,gR:()=>K,gz:()=>te,hp:()=>ee,jZ:()=>P,kH:()=>Y,kj:()=>ae,lT:()=>N,lV:()=>A,qc:()=>H,sr:()=>R,tD:()=>ne,u:()=>d,vA:()=>r,yU:()=>I,yw:()=>z,zW:()=>x});
/**
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
 */
const i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},r=function(e,t){if(!e)throw s(t)},s=function(e){return new Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},o=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296===(64512&r)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},a=function(e){const t=[];let n=0,i=0;while(n<e.length){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const t=e[r],s=r+1<e.length,o=s?e[r+1]:0,a=r+2<e.length,c=a?e[r+2]:0,l=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],s=r<e.length,o=s?n[e.charAt(r)]:0;++r;const a=r<e.length,c=a?n[e.charAt(r)]:64;++r;const u=r<e.length,h=u?n[e.charAt(r)]:64;if(++r,null==t||null==o||null==c||null==h)throw new l;const d=t<<2|o>>4;if(i.push(d),64!==c){const e=o<<4&240|c>>2;if(i.push(e),64!==h){const e=c<<6&192|h;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
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
 */class l extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const u=function(e){const t=o(e);return c.encodeByteArray(t,!0)},h=function(e){return u(e).replace(/\./g,"")},d=function(e){try{return c.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
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
 */
function p(e){return f(void 0,e)}function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&g(n)&&(e[n]=f(e[n],t[n]));return e}function g(e){return"__proto__"!==e}
/**
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
 */function m(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
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
 */const _=()=>m().__FIREBASE_DEFAULTS__,v=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},y=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&d(e[1]);return t&&JSON.parse(t)},w=()=>{try{return _()||v()||y()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},b=e=>{var t,n;return null===(n=null===(t=w())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},I=e=>{const t=b(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},C=()=>{var e;return null===(e=w())||void 0===e?void 0:e.config},T=e=>{var t;return null===(t=w())||void 0===t?void 0:t[`_${e}`]};
/**
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
 */
class E{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
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
 */function k(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[h(JSON.stringify(n)),h(JSON.stringify(o)),a].join(".")}
/**
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
 */function S(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function P(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(S())}function R(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function A(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function N(){const e=S();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function O(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN}function x(){try{return"object"===typeof indexedDB}catch(e){return!1}}function D(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function M(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
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
 */const L="FirebaseError";class F extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=L,Object.setPrototypeOf(this,F.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,j.prototype.create)}}class j{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?U(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new F(i,o,n);return a}}function U(e,t){return e.replace($,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}const $=/\{\$([^}]+)}/g;
/**
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
 */function q(e){return JSON.parse(e)}function W(e){return JSON.stringify(e)}
/**
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
 */const V=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=q(d(s[0])||""),n=q(d(s[1])||""),r=s[2],i=n["d"]||{},delete n["d"]}catch(s){}return{header:t,claims:n,data:i,signature:r}},B=function(e){const t=V(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},H=function(e){const t=V(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
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
 */
function K(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function z(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function G(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Y(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function Q(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(J(n)&&J(s)){if(!Q(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function J(e){return null!==e&&"object"===typeof e}
/**
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
 */
/**
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
 */
function Z(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function X(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function ee(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
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
 */class te{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const e=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(e<<1|e>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(i=c^o&(a^c),r=1518500249):(i=o^a^c,r=1859775393):u<60?(i=o&a|c&(o|a),r=2400959708):(i=o^a^c,r=3395469782);const e=(s<<5|s>>>27)+i+l+r+n[u]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=e}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;while(i<t){if(0===s)while(i<=n)this.compress_(e,i),i+=this.blockSize;if("string"===typeof e){while(i<t)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else while(i<t)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let i=0;i<5;i++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[i]>>t&255,++n;return e}}function ne(e,t){const n=new ie(e,t);return n.subscribe.bind(n)}class ie{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=re(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=se),void 0===i.error&&(i.error=se),void 0===i.complete&&(i.complete=se);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function re(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function se(){}
/**
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
 */function oe(e,t){return`${e} failed: ${t} argument `}
/**
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
 */
const ae=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,r(i<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(i)-56320;s=65536+(t<<10)+n}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},ce=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
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
 */
function le(e){return e&&e._delegate?e._delegate:e}},751:(e,t,n)=>{n.d(t,{Ef:()=>ee,Jo:()=>z,u1:()=>G});var i=n(641),r=n(33);n(953);
/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let s;const o="undefined"!==typeof window&&window.trustedTypes;if(o)try{s=o.createPolicy("vue",{createHTML:e=>e})}catch(ie){}const a=s?e=>s.createHTML(e):e=>e,c="http://www.w3.org/2000/svg",l="http://www.w3.org/1998/Math/MathML",u="undefined"!==typeof document?document:null,h=u&&u.createElement("template"),d={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r="svg"===t?u.createElementNS(c,e):"mathml"===t?u.createElementNS(l,e):n?u.createElement(e,{is:n}):u.createElement(e);return"select"===e&&i&&null!=i.multiple&&r.setAttribute("multiple",i.multiple),r},createText:e=>u.createTextNode(e),createComment:e=>u.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>u.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,r,s){const o=n?n.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling)){while(1)if(t.insertBefore(r.cloneNode(!0),n),r===s||!(r=r.nextSibling))break}else{h.innerHTML=a("svg"===i?`<svg>${e}</svg>`:"mathml"===i?`<math>${e}</math>`:e);const r=h.content;if("svg"===i||"mathml"===i){const e=r.firstChild;while(e.firstChild)r.appendChild(e.firstChild);r.removeChild(e)}t.insertBefore(r,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},p=Symbol("_vtc"),f={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};i.QP;function g(e,t,n){const i=e[p];i&&(t=(t?[t,...i]:[...i]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const m=Symbol("_vod"),_=Symbol("_vsh");const v=Symbol("");const y=/(^|;)\s*display\s*:/;function w(e,t,n){const i=e.style,s=(0,r.Kg)(n);let o=!1;if(n&&!s){if(t)if((0,r.Kg)(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&I(i,t,"")}else for(const e in t)null==n[e]&&I(i,e,"");for(const e in n)"display"===e&&(o=!0),I(i,e,n[e])}else if(s){if(t!==n){const e=i[v];e&&(n+=";"+e),i.cssText=n,o=y.test(n)}}else t&&e.removeAttribute("style");m in e&&(e[m]=o?i.display:"",e[_]&&(i.display="none"))}const b=/\s*!important$/;function I(e,t,n){if((0,r.cy)(n))n.forEach((n=>I(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=E(e,t);b.test(n)?e.setProperty((0,r.Tg)(i),n.replace(b,""),"important"):e[i]=n}}const C=["Webkit","Moz","ms"],T={};function E(e,t){const n=T[t];if(n)return n;let i=(0,r.PT)(t);if("filter"!==i&&i in e)return T[t]=i;i=(0,r.ZH)(i);for(let r=0;r<C.length;r++){const n=C[r]+i;if(n in e)return T[t]=n}return t}const k="http://www.w3.org/1999/xlink";function S(e,t,n,i,s,o=(0,r.J$)(t)){i&&t.startsWith("xlink:")?null==n?e.removeAttributeNS(k,t.slice(6,t.length)):e.setAttributeNS(k,t,n):null==n||o&&!(0,r.Y2)(n)?e.removeAttribute(t):e.setAttribute(t,o?"":(0,r.Bm)(n)?String(n):n)}function P(e,t,n,i,s){if("innerHTML"===t||"textContent"===t)return void(null!=n&&(e[t]="innerHTML"===t?a(n):n));const o=e.tagName;if("value"===t&&"PROGRESS"!==o&&!o.includes("-")){const i="OPTION"===o?e.getAttribute("value")||"":e.value,r=null==n?"checkbox"===e.type?"on":"":String(n);return i===r&&"_value"in e||(e.value=r),null==n&&e.removeAttribute(t),void(e._value=n)}let c=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.Y2)(n):null==n&&"string"===i?(n="",c=!0):"number"===i&&(n=0,c=!0)}try{e[t]=n}catch(ie){0}c&&e.removeAttribute(s||t)}function R(e,t,n,i){e.addEventListener(t,n,i)}function A(e,t,n,i){e.removeEventListener(t,n,i)}const N=Symbol("_vei");function O(e,t,n,i,r=null){const s=e[N]||(e[N]={}),o=s[t];if(i&&o)o.value=i;else{const[n,a]=D(t);if(i){const o=s[t]=j(i,r);R(e,n,o,a)}else o&&(A(e,n,o,a),s[t]=void 0)}}const x=/(?:Once|Passive|Capture)$/;function D(e){let t;if(x.test(e)){let n;t={};while(n=e.match(x))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,r.Tg)(e.slice(2));return[n,t]}let M=0;const L=Promise.resolve(),F=()=>M||(L.then((()=>M=0)),M=Date.now());function j(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,i.qL)(U(e,n.value),t,5,[e])};return n.value=e,n.attached=F(),n}function U(e,t){if((0,r.cy)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const $=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,q=(e,t,n,i,s,o)=>{const a="svg"===s;"class"===t?g(e,i,a):"style"===t?w(e,n,i):(0,r.Mp)(t)?(0,r.CP)(t)||O(e,t,n,i,o):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):W(e,t,i,a))?(P(e,t,i),e.tagName.includes("-")||"value"!==t&&"checked"!==t&&"selected"!==t||S(e,t,i,a,o,"value"!==t)):!e._isVueCE||!/[A-Z]/.test(t)&&(0,r.Kg)(i)?("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),S(e,t,i,a)):P(e,(0,r.PT)(t),i,o,t)};function W(e,t,n,i){if(i)return"innerHTML"===t||"textContent"===t||!!(t in e&&$(t)&&(0,r.Tn)(n));if("spellcheck"===t||"draggable"===t||"translate"===t||"autocorrect"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!$(t)||!(0,r.Kg)(n))&&t in e}
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;Symbol("_moveCb"),Symbol("_enterCb");const V=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,r.cy)(t)?e=>(0,r.DY)(t,e):t};function B(e){e.target.composing=!0}function H(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const K=Symbol("_assign"),z={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e[K]=V(s);const o=i||s.props&&"number"===s.props.type;R(e,t?"change":"input",(t=>{if(t.target.composing)return;let i=e.value;n&&(i=i.trim()),o&&(i=(0,r.bB)(i)),e[K](i)})),n&&R(e,"change",(()=>{e.value=e.value.trim()})),t||(R(e,"compositionstart",B),R(e,"compositionend",H),R(e,"change",H))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:i,trim:s,number:o}},a){if(e[K]=V(a),e.composing)return;const c=!o&&"number"!==e.type||/^0\d/.test(e.value)?e.value:(0,r.bB)(e.value),l=null==t?"":t;if(c!==l){if(document.activeElement===e&&"range"!==e.type){if(i&&t===n)return;if(s&&e.value.trim()===l)return}e.value=l}}};const G={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const o=(0,r.vM)(t);R(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?(0,r.bB)(Q(e)):Q(e)));e[K](e.multiple?o?new Set(t):t:t[0]),e._assigning=!0,(0,i.dY)((()=>{e._assigning=!1}))})),e[K]=V(s)},mounted(e,{value:t}){Y(e,t)},beforeUpdate(e,t,n){e[K]=V(n)},updated(e,{value:t}){e._assigning||Y(e,t)}};function Y(e,t){const n=e.multiple,i=(0,r.cy)(t);if(!n||i||(0,r.vM)(t)){for(let s=0,o=e.options.length;s<o;s++){const o=e.options[s],a=Q(o);if(n)if(i){const e=typeof a;o.selected="string"===e||"number"===e?t.some((e=>String(e)===String(a))):(0,r.u3)(t,a)>-1}else o.selected=t.has(a);else if((0,r.BX)(Q(o),t))return void(e.selectedIndex!==s&&(e.selectedIndex=s))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function Q(e){return"_value"in e?e._value:e.value}const J=(0,r.X$)({patchProp:q},d);let Z;function X(){return Z||(Z=(0,i.K9)(J))}const ee=(...e)=>{const t=X().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=ne(e);if(!i)return;const s=t._component;(0,r.Tn)(s)||s.render||s.template||(s.template=i.innerHTML),1===i.nodeType&&(i.textContent="");const o=n(i,!1,te(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function te(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function ne(e){if((0,r.Kg)(e)){const t=document.querySelector(e);return t}return e}},813:(e,t,n)=>{n.d(t,{dG:()=>Pn,gf:()=>Rn,xD:()=>An});var i=n(928),r=n(125),s=n(743);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,p=new WeakMap,f=new WeakMap,g=new WeakMap;function m(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(I(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),g.set(t,e),t}function _(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||p.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function y(e){v=e(v)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(C(this),t),I(h.get(this))}:function(...t){return I(e.apply(C(this),t))}:function(t,...n){const i=e.call(C(this),t,...n);return p.set(i,t.sort?t.sort():[t]),I(i)}}function b(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&_(e),o(e,l())?new Proxy(e,v):e)}function I(e){if(e instanceof IDBRequest)return m(e);if(f.has(e))return f.get(e);const t=b(e);return t!==e&&(f.set(e,t),g.set(t,e)),t}const C=e=>g.get(e);function T(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=I(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(I(o.result),e.oldVersion,e.newVersion,I(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const E=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],S=new Map;function P(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(S.get(t))return S.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=k.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!E.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return S.set(t,s),s}y((e=>({...e,get:(t,n,i)=>P(t,n)||e.get(t,n,i),has:(t,n)=>!!P(t,n)||e.has(t,n)})));const R="@firebase/installations",A="0.6.4",N=1e4,O=`w:${A}`,x="FIS_v2",D="https://firebaseinstallations.googleapis.com/v1",M=36e5,L="installations",F="Installations",j={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},U=new s.FA(L,F,j);function $(e){return e instanceof s.g&&e.code.includes("request-failed")}
/**
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
 */function q({projectId:e}){return`${D}/projects/${e}/installations`}function W(e){return{token:e.token,requestStatus:2,expiresIn:z(e.expiresIn),creationTime:Date.now()}}async function V(e,t){const n=await t.json(),i=n.error;return U.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function B({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function H(e,{refreshToken:t}){const n=B(e);return n.append("Authorization",G(t)),n}async function K(e){const t=await e();return t.status>=500&&t.status<600?e():t}function z(e){return Number(e.replace("s","000"))}function G(e){return`${x} ${e}`}
/**
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
 */async function Y({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=q(e),r=B(e),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const o={fid:n,authVersion:x,appId:e.appId,sdkVersion:O},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await K((()=>fetch(i,a)));if(c.ok){const e=await c.json(),t={fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:W(e.authToken)};return t}throw await V("Create Installation",c)}
/**
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
 */function Q(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
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
 */function J(e){const t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}
/**
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
 */const Z=/^[cdef][\w-]{21}$/,X="";function ee(){try{const e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;const n=te(e);return Z.test(n)?n:X}catch(e){return X}}function te(e){const t=J(e);return t.substr(0,22)}
/**
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
 */function ne(e){return`${e.appName}!${e.appId}`}
/**
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
 */const ie=new Map;function re(e,t){const n=ne(e);se(n,t),oe(n,t)}function se(e,t){const n=ie.get(e);if(n)for(const i of n)i(t)}function oe(e,t){const n=ce();n&&n.postMessage({key:e,fid:t}),le()}let ae=null;function ce(){return!ae&&"BroadcastChannel"in self&&(ae=new BroadcastChannel("[Firebase] FID Change"),ae.onmessage=e=>{se(e.data.key,e.data.fid)}),ae}function le(){0===ie.size&&ae&&(ae.close(),ae=null)}
/**
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
 */const ue="firebase-installations-database",he=1,de="firebase-installations-store";let pe=null;function fe(){return pe||(pe=T(ue,he,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(de)}}})),pe}async function ge(e,t){const n=ne(e),i=await fe(),r=i.transaction(de,"readwrite"),s=r.objectStore(de),o=await s.get(n);return await s.put(t,n),await r.done,o&&o.fid===t.fid||re(e,t.fid),t}async function me(e){const t=ne(e),n=await fe(),i=n.transaction(de,"readwrite");await i.objectStore(de).delete(t),await i.done}async function _e(e,t){const n=ne(e),i=await fe(),r=i.transaction(de,"readwrite"),s=r.objectStore(de),o=await s.get(n),a=t(o);return void 0===a?await s.delete(n):await s.put(a,n),await r.done,!a||o&&o.fid===a.fid||re(e,a.fid),a}
/**
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
 */async function ve(e){let t;const n=await _e(e.appConfig,(n=>{const i=ye(n),r=we(e,i);return t=r.registrationPromise,r.installationEntry}));return n.fid===X?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function ye(e){const t=e||{fid:ee(),registrationStatus:0};return Te(t)}function we(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(U.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=be(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Ie(e)}:{installationEntry:t}}async function be(e,t){try{const n=await Y(e,t);return ge(e.appConfig,n)}catch(n){throw $(n)&&409===n.customData.serverCode?await me(e.appConfig):await ge(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Ie(e){let t=await Ce(e.appConfig);while(1===t.registrationStatus)await Q(100),t=await Ce(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await ve(e);return n||t}return t}function Ce(e){return _e(e,(e=>{if(!e)throw U.create("installation-not-found");return Te(e)}))}function Te(e){return Ee(e)?{fid:e.fid,registrationStatus:0}:e}function Ee(e){return 1===e.registrationStatus&&e.registrationTime+N<Date.now()}
/**
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
 */async function ke({appConfig:e,heartbeatServiceProvider:t},n){const i=Se(e,n),r=H(e,n),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const o={installation:{sdkVersion:O,appId:e.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await K((()=>fetch(i,a)));if(c.ok){const e=await c.json(),t=W(e);return t}throw await V("Generate Auth Token",c)}function Se(e,{fid:t}){return`${q(e)}/${t}/authTokens:generate`}
/**
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
 */async function Pe(e,t=!1){let n;const i=await _e(e.appConfig,(i=>{if(!Oe(i))throw U.create("not-registered");const r=i.authToken;if(!t&&xe(r))return i;if(1===r.requestStatus)return n=Re(e,t),i;{if(!navigator.onLine)throw U.create("app-offline");const t=Me(i);return n=Ne(e,t),t}})),r=n?await n:i.authToken;return r}async function Re(e,t){let n=await Ae(e.appConfig);while(1===n.authToken.requestStatus)await Q(100),n=await Ae(e.appConfig);const i=n.authToken;return 0===i.requestStatus?Pe(e,t):i}function Ae(e){return _e(e,(e=>{if(!Oe(e))throw U.create("not-registered");const t=e.authToken;return Le(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}async function Ne(e,t){try{const n=await ke(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await ge(e.appConfig,i),n}catch(n){if(!$(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ge(e.appConfig,n)}else await me(e.appConfig);throw n}}function Oe(e){return void 0!==e&&2===e.registrationStatus}function xe(e){return 2===e.requestStatus&&!De(e)}function De(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+M}function Me(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Le(e){return 1===e.requestStatus&&e.requestTime+N<Date.now()}
/**
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
 */async function Fe(e){const t=e,{installationEntry:n,registrationPromise:i}=await ve(t);return i?i.catch(console.error):Pe(t).catch(console.error),n.fid}
/**
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
 */async function je(e,t=!1){const n=e;await Ue(n);const i=await Pe(n,t);return i.token}async function Ue(e){const{registrationPromise:t}=await ve(e);t&&await t}
/**
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
 */
/**
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
 */
function $e(e){if(!e||!e.options)throw qe("App Configuration");if(!e.name)throw qe("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw qe(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function qe(e){return U.create("missing-app-config-values",{valueName:e})}
/**
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
 */const We="installations",Ve="installations-internal",Be=e=>{const t=e.getProvider("app").getImmediate(),n=$e(t),r=(0,i.j6)(t,"heartbeat"),s={app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()};return s},He=e=>{const t=e.getProvider("app").getImmediate(),n=(0,i.j6)(t,We).getImmediate(),r={getId:()=>Fe(n),getToken:e=>je(n,e)};return r};function Ke(){(0,i.om)(new r.uA(We,Be,"PUBLIC")),(0,i.om)(new r.uA(Ve,He,"PRIVATE"))}Ke(),(0,i.KO)(R,A),(0,i.KO)(R,A,"esm2017");const ze=(e,t)=>t.some((t=>e instanceof t));let Ge,Ye;function Qe(){return Ge||(Ge=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Je(){return Ye||(Ye=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ze=new WeakMap,Xe=new WeakMap,et=new WeakMap,tt=new WeakMap,nt=new WeakMap;function it(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(lt(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Ze.set(t,e)})).catch((()=>{})),nt.set(t,e),t}function rt(e){if(Xe.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));Xe.set(e,t)}let st={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Xe.get(e);if("objectStoreNames"===t)return e.objectStoreNames||et.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return lt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function ot(e){st=e(st)}function at(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?Je().includes(e)?function(...t){return e.apply(ut(this),t),lt(Ze.get(this))}:function(...t){return lt(e.apply(ut(this),t))}:function(t,...n){const i=e.call(ut(this),t,...n);return et.set(i,t.sort?t.sort():[t]),lt(i)}}function ct(e){return"function"===typeof e?at(e):(e instanceof IDBTransaction&&rt(e),ze(e,Qe())?new Proxy(e,st):e)}function lt(e){if(e instanceof IDBRequest)return it(e);if(tt.has(e))return tt.get(e);const t=ct(e);return t!==e&&(tt.set(e,t),nt.set(t,e)),t}const ut=e=>nt.get(e);function ht(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=lt(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(lt(o.result),e.oldVersion,e.newVersion,lt(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}function dt(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",(()=>t())),lt(n).then((()=>{}))}const pt=["get","getKey","getAll","getAllKeys","count"],ft=["put","add","delete","clear"],gt=new Map;function mt(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(gt.get(t))return gt.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=ft.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!pt.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return gt.set(t,s),s}ot((e=>({...e,get:(t,n,i)=>mt(t,n)||e.get(t,n,i),has:(t,n)=>!!mt(t,n)||e.has(t,n)})));
/**
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
 */
const _t="/firebase-messaging-sw.js",vt="/firebase-cloud-messaging-push-scope",yt="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",wt="https://fcmregistrations.googleapis.com/v1",bt="google.c.a.c_id",It="google.c.a.c_l",Ct="google.c.a.ts",Tt="google.c.a.e";var Et,kt;
/**
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
 */
function St(e){const t=new Uint8Array(e),n=btoa(String.fromCharCode(...t));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Pt(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),r=new Uint8Array(i.length);for(let s=0;s<i.length;++s)r[s]=i.charCodeAt(s);return r}
/**
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
 */(function(e){e[e["DATA_MESSAGE"]=1]="DATA_MESSAGE",e[e["DISPLAY_NOTIFICATION"]=3]="DISPLAY_NOTIFICATION"})(Et||(Et={})),function(e){e["PUSH_RECEIVED"]="push-received",e["NOTIFICATION_CLICKED"]="notification-clicked"}(kt||(kt={}));const Rt="fcm_token_details_db",At=5,Nt="fcm_token_object_Store";async function Ot(e){if("databases"in indexedDB){const e=await indexedDB.databases(),t=e.map((e=>e.name));if(!t.includes(Rt))return null}let t=null;const n=await ht(Rt,At,{upgrade:async(n,i,r,s)=>{var o;if(i<2)return;if(!n.objectStoreNames.contains(Nt))return;const a=s.objectStore(Nt),c=await a.index("fcmSenderId").get(e);if(await a.clear(),c)if(2===i){const e=c;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(o=e.createTime)&&void 0!==o?o:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"===typeof e.vapidKey?e.vapidKey:St(e.vapidKey)}}}else if(3===i){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:St(e.auth),p256dh:St(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:St(e.vapidKey)}}}else if(4===i){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:St(e.auth),p256dh:St(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:St(e.vapidKey)}}}}});return n.close(),await dt(Rt),await dt("fcm_vapid_details_db"),await dt("undefined"),xt(t)?t:null}function xt(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"===typeof e.createTime&&e.createTime>0&&"string"===typeof e.token&&e.token.length>0&&"string"===typeof t.auth&&t.auth.length>0&&"string"===typeof t.p256dh&&t.p256dh.length>0&&"string"===typeof t.endpoint&&t.endpoint.length>0&&"string"===typeof t.swScope&&t.swScope.length>0&&"string"===typeof t.vapidKey&&t.vapidKey.length>0}
/**
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
 */const Dt="firebase-messaging-database",Mt=1,Lt="firebase-messaging-store";let Ft=null;function jt(){return Ft||(Ft=ht(Dt,Mt,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Lt)}}})),Ft}async function Ut(e){const t=Wt(e),n=await jt(),i=await n.transaction(Lt).objectStore(Lt).get(t);if(i)return i;{const t=await Ot(e.appConfig.senderId);if(t)return await $t(e,t),t}}async function $t(e,t){const n=Wt(e),i=await jt(),r=i.transaction(Lt,"readwrite");return await r.objectStore(Lt).put(t,n),await r.done,t}async function qt(e){const t=Wt(e),n=await jt(),i=n.transaction(Lt,"readwrite");await i.objectStore(Lt).delete(t),await i.done}function Wt({appConfig:e}){return e.appId}
/**
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
 */const Vt={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Bt=new s.FA("messaging","Messaging",Vt);
/**
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
 */
async function Ht(e,t){const n=await Yt(e),i=Qt(t),r={method:"POST",headers:n,body:JSON.stringify(i)};let s;try{const t=await fetch(Gt(e.appConfig),r);s=await t.json()}catch(o){throw Bt.create("token-subscribe-failed",{errorInfo:null===o||void 0===o?void 0:o.toString()})}if(s.error){const e=s.error.message;throw Bt.create("token-subscribe-failed",{errorInfo:e})}if(!s.token)throw Bt.create("token-subscribe-no-token");return s.token}async function Kt(e,t){const n=await Yt(e),i=Qt(t.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(i)};let s;try{const n=await fetch(`${Gt(e.appConfig)}/${t.token}`,r);s=await n.json()}catch(o){throw Bt.create("token-update-failed",{errorInfo:null===o||void 0===o?void 0:o.toString()})}if(s.error){const e=s.error.message;throw Bt.create("token-update-failed",{errorInfo:e})}if(!s.token)throw Bt.create("token-update-no-token");return s.token}async function zt(e,t){const n=await Yt(e),i={method:"DELETE",headers:n};try{const n=await fetch(`${Gt(e.appConfig)}/${t}`,i),r=await n.json();if(r.error){const e=r.error.message;throw Bt.create("token-unsubscribe-failed",{errorInfo:e})}}catch(r){throw Bt.create("token-unsubscribe-failed",{errorInfo:null===r||void 0===r?void 0:r.toString()})}}function Gt({projectId:e}){return`${wt}/projects/${e}/registrations`}async function Yt({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Qt({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const r={web:{endpoint:n,auth:t,p256dh:e}};return i!==yt&&(r.web.applicationPubKey=i),r}
/**
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
 */const Jt=6048e5;async function Zt(e){const t=await nn(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:St(t.getKey("auth")),p256dh:St(t.getKey("p256dh"))},i=await Ut(e.firebaseDependencies);if(i){if(rn(i.subscriptionOptions,n))return Date.now()>=i.createTime+Jt?en(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await zt(e.firebaseDependencies,i.token)}catch(r){console.warn(r)}return tn(e.firebaseDependencies,n)}return tn(e.firebaseDependencies,n)}async function Xt(e){const t=await Ut(e.firebaseDependencies);t&&(await zt(e.firebaseDependencies,t.token),await qt(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function en(e,t){try{const n=await Kt(e.firebaseDependencies,t),i=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await $t(e.firebaseDependencies,i),n}catch(n){throw await Xt(e),n}}async function tn(e,t){const n=await Ht(e,t),i={token:n,createTime:Date.now(),subscriptionOptions:t};return await $t(e,i),i.token}async function nn(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Pt(t)})}function rn(e,t){const n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,r=t.auth===e.auth,s=t.p256dh===e.p256dh;return n&&i&&r&&s}
/**
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
 */function sn(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return on(t,e),an(t,e),cn(t,e),t}function on(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const r=t.notification.image;r&&(e.notification.image=r);const s=t.notification.icon;s&&(e.notification.icon=s)}function an(e,t){t.data&&(e.data=t.data)}function cn(e,t){var n,i,r,s,o;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};const a=null!==(r=null===(i=t.fcmOptions)||void 0===i?void 0:i.link)&&void 0!==r?r:null===(s=t.notification)||void 0===s?void 0:s.click_action;a&&(e.fcmOptions.link=a);const c=null===(o=t.fcmOptions)||void 0===o?void 0:o.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}
/**
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
 */function ln(e){return"object"===typeof e&&!!e&&bt in e}
/**
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
 */function un(e,t){const n=[];for(let i=0;i<e.length;i++)n.push(e.charAt(i)),i<t.length&&n.push(t.charAt(i));return n.join("")}
/**
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
 */function hn(e){if(!e||!e.options)throw dn("App Configuration Object");if(!e.name)throw dn("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const i of t)if(!n[i])throw dn(i);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function dn(e){return Bt.create("missing-app-config-values",{valueName:e})}
/**
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
 */un("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),un("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class pn{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=hn(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}
/**
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
 */async function fn(e){try{e.swRegistration=await navigator.serviceWorker.register(_t,{scope:vt}),e.swRegistration.update().catch((()=>{}))}catch(t){throw Bt.create("failed-service-worker-registration",{browserErrorMessage:null===t||void 0===t?void 0:t.message})}}
/**
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
 */async function gn(e,t){if(t||e.swRegistration||await fn(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw Bt.create("invalid-sw-registration");e.swRegistration=t}}
/**
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
 */async function mn(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=yt)}
/**
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
 */async function _n(e,t){if(!navigator)throw Bt.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw Bt.create("permission-blocked");return await mn(e,null===t||void 0===t?void 0:t.vapidKey),await gn(e,null===t||void 0===t?void 0:t.serviceWorkerRegistration),Zt(e)}
/**
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
 */async function vn(e,t,n){const i=yn(t),r=await e.firebaseDependencies.analyticsProvider.get();r.logEvent(i,{message_id:n[bt],message_name:n[It],message_time:n[Ct],message_device_time:Math.floor(Date.now()/1e3)})}function yn(e){switch(e){case kt.NOTIFICATION_CLICKED:return"notification_open";case kt.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}
/**
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
 */async function wn(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===kt.PUSH_RECEIVED&&("function"===typeof e.onMessageHandler?e.onMessageHandler(sn(n)):e.onMessageHandler.next(sn(n)));const i=n.data;ln(i)&&"1"===i[Tt]&&await vn(e,n.messageType,i)}const bn="@firebase/messaging",In="0.12.4",Cn=e=>{const t=new pn(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",(e=>wn(t,e))),t},Tn=e=>{const t=e.getProvider("messaging").getImmediate(),n={getToken:e=>_n(t,e)};return n};function En(){(0,i.om)(new r.uA("messaging",Cn,"PUBLIC")),(0,i.om)(new r.uA("messaging-internal",Tn,"PRIVATE")),(0,i.KO)(bn,In),(0,i.KO)(bn,In,"esm2017")}
/**
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
 */async function kn(){try{await(0,s.eX)()}catch(e){return!1}return"undefined"!==typeof window&&(0,s.zW)()&&(0,s.dM)()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}
/**
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
 */
/**
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
 */
function Sn(e,t){if(!navigator)throw Bt.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}
/**
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
 */function Pn(e=(0,i.Sx)()){return kn().then((e=>{if(!e)throw Bt.create("unsupported-browser")}),(e=>{throw Bt.create("indexed-db-unsupported")})),(0,i.j6)((0,s.Ku)(e),"messaging").getImmediate()}async function Rn(e,t){return e=(0,s.Ku)(e),_n(e,t)}function An(e,t){return e=(0,s.Ku)(e),Sn(e,t)}En()},928:(e,t,n)=>{n.d(t,{MF:()=>ge,j6:()=>he,om:()=>ue,Sx:()=>_e,Dk:()=>ve,Wp:()=>me,KO:()=>ye});var i=n(125),r=n(424),s=n(743);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,p=new WeakMap,f=new WeakMap,g=new WeakMap;function m(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(I(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),g.set(t,e),t}function _(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||p.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function y(e){v=e(v)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(C(this),t),I(h.get(this))}:function(...t){return I(e.apply(C(this),t))}:function(t,...n){const i=e.call(C(this),t,...n);return p.set(i,t.sort?t.sort():[t]),I(i)}}function b(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&_(e),o(e,l())?new Proxy(e,v):e)}function I(e){if(e instanceof IDBRequest)return m(e);if(f.has(e))return f.get(e);const t=b(e);return t!==e&&(f.set(e,t),g.set(t,e)),t}const C=e=>g.get(e);function T(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=I(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(I(o.result),e.oldVersion,e.newVersion,I(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(e=>r(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const E=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],S=new Map;function P(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(S.get(t))return S.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=k.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!E.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return S.set(t,s),s}y((e=>({...e,get:(t,n,i)=>P(t,n)||e.get(t,n,i),has:(t,n)=>!!P(t,n)||e.has(t,n)})));
/**
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
 */
class R{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(A(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function A(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const N="@firebase/app",O="0.9.13",x=new r.Vy("@firebase/app"),D="@firebase/app-compat",M="@firebase/analytics-compat",L="@firebase/analytics",F="@firebase/app-check-compat",j="@firebase/app-check",U="@firebase/auth",$="@firebase/auth-compat",q="@firebase/database",W="@firebase/database-compat",V="@firebase/functions",B="@firebase/functions-compat",H="@firebase/installations",K="@firebase/installations-compat",z="@firebase/messaging",G="@firebase/messaging-compat",Y="@firebase/performance",Q="@firebase/performance-compat",J="@firebase/remote-config",Z="@firebase/remote-config-compat",X="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",ie="firebase",re="9.23.0",se="[DEFAULT]",oe={[N]:"fire-core",[D]:"fire-core-compat",[L]:"fire-analytics",[M]:"fire-analytics-compat",[j]:"fire-app-check",[F]:"fire-app-check-compat",[U]:"fire-auth",[$]:"fire-auth-compat",[q]:"fire-rtdb",[W]:"fire-rtdb-compat",[V]:"fire-fn",[B]:"fire-fn-compat",[H]:"fire-iid",[K]:"fire-iid-compat",[z]:"fire-fcm",[G]:"fire-fcm-compat",[Y]:"fire-perf",[Q]:"fire-perf-compat",[J]:"fire-rc",[Z]:"fire-rc-compat",[X]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[ie]:"fire-js-all"},ae=new Map,ce=new Map;function le(e,t){try{e.container.addComponent(t)}catch(n){x.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ue(e){const t=e.name;if(ce.has(t))return x.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())le(n,e);return!0}function he(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
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
 */
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pe=new s.FA("app","Firebase",de);
/**
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
 */
class fe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pe.create("app-deleted",{appName:this._name})}}
/**
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
 */const ge=re;function me(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const r=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=r.name;if("string"!==typeof o||!o)throw pe.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw pe.create("no-options");const a=ae.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(r,a.config))return a;throw pe.create("duplicate-app",{appName:o})}const c=new i.h1(o);for(const i of ce.values())c.addComponent(i);const l=new fe(n,r,c);return ae.set(o,l),l}function _e(e=se){const t=ae.get(e);if(!t&&e===se&&(0,s.T9)())return me();if(!t)throw pe.create("no-app",{appName:e});return t}function ve(){return Array.from(ae.values())}function ye(e,t,n){var r;let s=null!==(r=oe[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void x.warn(e.join(" "))}ue(new i.uA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
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
 */
const we="firebase-heartbeat-database",be=1,Ie="firebase-heartbeat-store";let Ce=null;function Te(){return Ce||(Ce=T(we,be,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ie)}}}).catch((e=>{throw pe.create("idb-open",{originalErrorMessage:e.message})}))),Ce}async function Ee(e){try{const t=await Te(),n=await t.transaction(Ie).objectStore(Ie).get(Se(e));return n}catch(t){if(t instanceof s.g)x.warn(t.message);else{const e=pe.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});x.warn(e.message)}}}async function ke(e,t){try{const n=await Te(),i=n.transaction(Ie,"readwrite"),r=i.objectStore(Ie);await r.put(t,Se(e)),await i.done}catch(n){if(n instanceof s.g)x.warn(n.message);else{const e=pe.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});x.warn(e.message)}}}function Se(e){return`${e.name}!${e.options.appId}`}
/**
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
 */const Pe=1024,Re=2592e6;class Ae{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new xe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Ne();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Re})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ne(),{heartbeatsToSend:t,unsentEntries:n}=Oe(this._heartbeatsCache.heartbeats),i=(0,s.Uj)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ne(){const e=new Date;return e.toISOString().substring(0,10)}function Oe(e,t=Pe){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),De(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),De(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class xe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ee(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ke(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ke(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function De(e){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */function Me(e){ue(new i.uA("platform-logger",(e=>new R(e)),"PRIVATE")),ue(new i.uA("heartbeat",(e=>new Ae(e)),"PRIVATE")),ye(N,O,e),ye(N,O,"esm2017"),ye("fire-js","")}Me("")},933:(e,t,n)=>{n.d(t,{C3:()=>ta,Zy:()=>Ko,VC:()=>$o,KR:()=>jo,TF:()=>qo,O5:()=>sa,hZ:()=>Wo});var i=n(928),r=n(125),s=n(743),o=n(424);const a="@firebase/database",c="0.14.4";
/**
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
 */
let l="";function u(e){l=e}
/**
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
 */class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,s.As)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,s.$L)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
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
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,s.gR)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
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
 */const p=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(t){}return new d},f=p("localStorage"),g=p("sessionStorage"),m=new o.Vy("@firebase/database"),_=function(){let e=1;return function(){return e++}}(),v=function(e){const t=(0,s.kj)(e),n=new s.gz;n.update(t);const i=n.digest();return s.K3.encodeByteArray(i)},y=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?t+=y.apply(null,i):t+="object"===typeof i?(0,s.As)(i):i,t+=" "}return t};let w=null,b=!0;const I=function(e,t){(0,s.vA)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(m.logLevel=o.$b.VERBOSE,w=m.log.bind(m),t&&g.set("logging_enabled",!0)):"function"===typeof e?w=e:(w=null,g.remove("logging_enabled"))},C=function(...e){if(!0===b&&(b=!1,null===w&&!0===g.get("logging_enabled")&&I(!0)),w){const t=y.apply(null,e);w(t)}},T=function(e){return function(...t){C(e,...t)}},E=function(...e){const t="FIREBASE INTERNAL ERROR: "+y(...e);m.error(t)},k=function(...e){const t=`FIREBASE FATAL ERROR: ${y(...e)}`;throw m.error(t),new Error(t)},S=function(...e){const t="FIREBASE WARNING: "+y(...e);m.warn(t)},P=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&S("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},R=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},A=function(e){if((0,s.$g)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},N="[MIN_NAME]",O="[MAX_NAME]",x=function(e,t){if(e===t)return 0;if(e===N||t===O)return-1;if(t===N||e===O)return 1;{const n=K(e),i=K(t);return null!==n?null!==i?n-i===0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},D=function(e,t){return e===t?0:e<t?-1:1},M=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,s.As)(t))},L=function(e){if("object"!==typeof e||null===e)return(0,s.As)(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=(0,s.As)(t[i]),n+=":",n+=L(e[t[i]]);return n+="}",n},F=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function j(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const U=function(e){(0,s.vA)(!R(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let r,o,a,c,l;0===e?(o=0,a=0,r=1/e===-1/0?1:0):(r=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(c=Math.min(Math.floor(Math.log(e)/Math.LN2),i),o=c+i,a=Math.round(e*Math.pow(2,n-c)-Math.pow(2,n))):(o=0,a=Math.round(e/Math.pow(2,1-i-n))));const u=[];for(l=n;l;l-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(r?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let e=parseInt(h.substr(l,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},$=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},q=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function W(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}const V=new RegExp("^-?(0*)\\d{1,10}$"),B=-2147483648,H=2147483647,K=function(e){if(V.test(e)){const t=Number(e);if(t>=B&&t<=H)return t}return null},z=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw S("Exception was thrown by user callback.",e),t}),Math.floor(0))}},G=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Y=function(e,t){const n=setTimeout(e,t);return"number"===typeof n&&"undefined"!==typeof Deno&&Deno["unrefTimer"]?Deno.unrefTimer(n):"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
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
 */
class Q{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){S(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
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
 */class J{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(C("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',S(e)}}class Z{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Z.OWNER="owner";
/**
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
 */
const X="5",ee="v",te="s",ne="r",ie="f",re=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,se="ls",oe="p",ae="ac",ce="websocket",le="long_polling";
/**
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
 */
class ue{constructor(e,t,n,i,r=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=f.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&f.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function he(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function de(e,t,n){let i;if((0,s.vA)("string"===typeof t,"typeof type must == string"),(0,s.vA)("object"===typeof n,"typeof params must == object"),t===ce)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==le)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}he(e)&&(n["ns"]=e.namespace);const r=[];return j(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
/**
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
 */class pe{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,s.gR)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,s.A4)(this.counters_)}}
/**
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
 */const fe={},ge={};function me(e){const t=e.toString();return fe[t]||(fe[t]=new pe),fe[t]}function _e(e,t){const n=e.toString();return ge[n]||(ge[n]=t()),ge[n]}
/**
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
 */class ve{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&z((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
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
 */const ye="start",we="close",be="pLPCommand",Ie="pRTLPCB",Ce="id",Te="pw",Ee="ser",ke="cb",Se="seg",Pe="ts",Re="d",Ae="dframe",Ne=1870,Oe=30,xe=Ne-Oe,De=25e3,Me=3e4;class Le{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=T(e),this.stats_=me(t),this.urlFn=e=>(this.appCheckToken&&(e[ae]=this.appCheckToken),de(t,le,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ve(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(Me)),A((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fe(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ye)this.id=n,this.password=i;else{if(t!==we)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[ye]="t",e[Ee]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[ke]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ee]=X,this.transportSessionId&&(e[te]=this.transportSessionId),this.lastSessionId&&(e[se]=this.lastSessionId),this.applicationId&&(e[oe]=this.applicationId),this.appCheckToken&&(e[ae]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&re.test(location.hostname)&&(e[ne]=ie);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Le.forceAllow_=!0}static forceDisallow(){Le.forceDisallow_=!0}static isAvailable(){return!(0,s.$g)()&&(!!Le.forceAllow_||!Le.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!$()&&!q())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,s.As)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,s.KA)(t),i=F(n,xe);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,s.$g)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Ae]="t",n[Ce]=e,n[Te]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,s.As)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Fe{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,s.$g)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=_(),window[be+this.uniqueCallbackIdentifier]=e,window[Ie+this.uniqueCallbackIdentifier]=t,this.myIFrame=Fe.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(r){C("frame writing exception"),r.stack&&C(r.stack),C(r)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||C("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ce]=this.myID,e[Te]=this.myPW,e[Ee]=this.currentSerial;let t=this.urlFn(e),n="",i=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Oe+n.length<=Ne))break;{const e=this.pendingSegs.shift();n=n+"&"+Se+i+"="+e.seg+"&"+Pe+i+"="+e.ts+"&"+Re+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(De)),r=()=>{clearTimeout(i),n()};this.addTag(e,r)}addTag(e,t){(0,s.$g)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{C("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
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
 */const je=16384,Ue=45e3;let $e=null;"undefined"!==typeof MozWebSocket?$e=MozWebSocket:"undefined"!==typeof WebSocket&&($e=WebSocket);class qe{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=T(this.connId),this.stats_=me(t),this.connURL=qe.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){const o={};return o[ee]=X,!(0,s.$g)()&&"undefined"!==typeof location&&location.hostname&&re.test(location.hostname)&&(o[ne]=ie),t&&(o[te]=t),n&&(o[se]=n),i&&(o[ae]=i),r&&(o[oe]=r),de(e,ce,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,f.set("previous_websocket_failure",!0);try{let e;if((0,s.$g)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${X}/${l}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",BASE_URL:"/"},i=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];i&&(e["proxy"]={origin:i})}this.mySock=new $e(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){qe.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==$e&&!qe.forceDisallow_}static previouslyFailed(){return f.isInMemoryStorage||!0===f.get("previous_websocket_failure")}markConnectionHealthy(){f.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,s.$L)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,s.vA)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,s.As)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=F(t,je);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(Ue))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qe.responsesRequiredToBeHealthy=2,qe.healthyTimeout=3e4;
/**
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
 */
class We{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Le,qe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=qe&&qe["isAvailable"]();let n=t&&!qe.previouslyFailed();if(e.webSocketOnly&&(t||S("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[qe];else{const e=this.transports_=[];for(const t of We.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);We.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}We.globalTransportInitialized_=!1;
/**
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
 */
const Ve=6e4,Be=5e3,He=10240,Ke=102400,ze="t",Ge="d",Ye="s",Qe="r",Je="e",Ze="o",Xe="a",et="n",tt="p",nt="h";class it{constructor(e,t,n,i,r,s,o,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=T("c:"+this.id+":"),this.transportManager_=new We(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=Y((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ke?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>He?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ze in e){const t=e[ze];t===Xe?this.upgradeIfSecondaryHealthy_():t===Qe?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Ze&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=M("t",e),n=M("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Xe,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:et,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=M("t",e),n=M("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=M(ze,e);if(Ge in e){const n=e[Ge];if(t===nt){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if(t===et){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ye?this.onConnectionShutdown_(n):t===Qe?this.onReset_(n):t===Je?E("Server Error: "+n):t===Ze?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):E("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),X!==n&&S("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Y((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(Ve))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Y((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(Be))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(f.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
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
 */class rt{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
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
 */class st{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,s.vA)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!n||n===i[r].context))return void i.splice(r,1)}validateEventType_(e){(0,s.vA)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
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
 */class ot extends st{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,s.jZ)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new ot}getInitialEvent(e){return(0,s.vA)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
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
 */const at=32,ct=768;class lt{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ut(){return new lt("")}function ht(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function dt(e){return e.pieces_.length-e.pieceNum_}function pt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new lt(e.pieces_,t)}function ft(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function gt(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function mt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function _t(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new lt(t,0)}function vt(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof lt)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new lt(n,0)}function yt(e){return e.pieceNum_>=e.pieces_.length}function wt(e,t){const n=ht(e),i=ht(t);if(null===n)return t;if(n===i)return wt(pt(e),pt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function bt(e,t){if(dt(e)!==dt(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function It(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(dt(e)>dt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Ct{constructor(e,t){this.errorPrefix_=t,this.parts_=mt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,s.OE)(this.parts_[n]);kt(this)}}function Tt(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=(0,s.OE)(t),kt(e)}function Et(e){const t=e.parts_.pop();e.byteLength_-=(0,s.OE)(t),e.parts_.length>0&&(e.byteLength_-=1)}function kt(e){if(e.byteLength_>ct)throw new Error(e.errorPrefix_+"has a key path longer than "+ct+" bytes ("+e.byteLength_+").");if(e.parts_.length>at)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+at+") or object contains a cycle "+St(e))}function St(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
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
 */class Pt extends st{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Pt}getInitialEvent(e){return(0,s.vA)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
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
 */const Rt=1e3,At=3e5,Nt=3e4,Ot=1.3,xt=3e4,Dt="server_kill",Mt=3;class Lt extends rt{constructor(e,t,n,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Lt.nextPersistentConnectionId_++,this.log_=T("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Rt,this.maxReconnectDelay_=At,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!(0,s.$g)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Pt.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&ot.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_((0,s.As)(r)),(0,s.vA)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new s.cY,n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const n=e["d"];"ok"===e["s"]?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),(0,s.vA)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,s.vA)(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n},s="q";e.tag&&(r["q"]=t._queryObject,r["t"]=e.tag),r["h"]=e.hashFn(),this.sendRequest(s,r,(r=>{const s=r["d"],o=r["s"];Lt.warnOnListenWarnings_(s,t);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&(0,s.gR)(e,"w")){const n=(0,s.yw)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();S(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||(0,s.qc)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Nt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,s.Cv)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t["s"],i=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,s.vA)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const r=this.removeListen_(n,i);r&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},s="n";i&&(r["q"]=n,r["t"]=i),this.sendRequest(s,r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s["h"]=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,s.As)(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):E("Unrecognized action received from server: "+(0,s.As)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,s.vA)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Rt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Rt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>xt&&(this.reconnectDelay_=Rt),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ot)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Lt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,n())},l=function(e){(0,s.vA)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[s,c]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?C("getToken() completed but was canceled"):(C("getToken() completed. Creating connection."),this.authToken_=s&&s.accessToken,this.appCheckToken_=c&&c.token,a=new it(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{S(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Dt)}),r))}catch(E){this.log_("Failed to get token: "+E),o||(this.repoInfo_.nodeAdmin&&S(E),c())}}}interrupt(e){C("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){C("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,s.Im)(this.interruptReasons_)&&(this.reconnectDelay_=Rt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>L(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new lt(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){C("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Mt&&(this.reconnectDelay_=Nt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){C("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Mt&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,s.$g)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+l.replace(/\./g,"-")]=1,(0,s.jZ)()?e["framework.cordova"]=1:(0,s.lV)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ot.getInstance().currentlyOnline();return(0,s.Im)(this.interruptReasons_)&&e}}Lt.nextPersistentConnectionId_=0,Lt.nextConnectionId_=0;
/**
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
 */
class Ft{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ft(e,t)}}
/**
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
 */class jt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Ft(N,e),i=new Ft(N,t);return 0!==this.compare(n,i)}minPost(){return Ft.MIN}}
/**
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
 */let Ut;class $t extends jt{static get __EMPTY_NODE(){return Ut}static set __EMPTY_NODE(e){Ut=e}compare(e,t){return x(e.name,t.name)}isDefinedOn(e){throw(0,s.Hk)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ft.MIN}maxPost(){return new Ft(O,Ut)}makePost(e,t){return(0,s.vA)("string"===typeof e,"KeyIndex indexValue must always be a string."),new Ft(e,Ut)}toString(){return".key"}}const qt=new $t;
/**
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
 */class Wt{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;while(!e.isEmpty())if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Vt{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Vt.RED,this.left=null!=i?i:Ht.EMPTY_NODE,this.right=null!=r?r:Ht.EMPTY_NODE}copy(e,t,n,i,r){return new Vt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ht.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Ht.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Vt.RED=!0,Vt.BLACK=!1;class Bt{copy(e,t,n,i,r){return this}insert(e,t,n){return new Vt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ht{constructor(e,t=Ht.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ht(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Vt.BLACK,null,null))}remove(e){return new Ht(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Vt.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Wt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Wt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Wt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Wt(this.root_,null,this.comparator_,!0,e)}}
/**
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
 */
function Kt(e,t){return x(e.name,t.name)}function zt(e,t){return x(e,t)}
/**
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
 */let Gt;function Yt(e){Gt=e}Ht.EMPTY_NODE=new Bt;const Qt=function(e){return"number"===typeof e?"number:"+U(e):"string:"+e},Jt=function(e){if(e.isLeafNode()){const t=e.val();(0,s.vA)("string"===typeof t||"number"===typeof t||"object"===typeof t&&(0,s.gR)(t,".sv"),"Priority must be a string or number.")}else(0,s.vA)(e===Gt||e.isEmpty(),"priority of unexpected type.");(0,s.vA)(e===Gt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
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
 */
let Zt,Xt,en;class tn{constructor(e,t=tn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,s.vA)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Jt(this.priorityNode_)}static set __childrenNodeConstructor(e){Zt=e}static get __childrenNodeConstructor(){return Zt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new tn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:tn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return yt(e)?this:".priority"===ht(e)?this.priorityNode_:tn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:tn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ht(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,s.vA)(".priority"!==n||1===dt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,tn.__childrenNodeConstructor.EMPTY_NODE.updateChild(pt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Qt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?U(this.value_):this.value_,this.lazyHash_=v(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===tn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof tn.__childrenNodeConstructor?-1:((0,s.vA)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=tn.VALUE_TYPE_ORDER.indexOf(t),r=tn.VALUE_TYPE_ORDER.indexOf(n);return(0,s.vA)(i>=0,"Unknown leaf type: "+t),(0,s.vA)(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function nn(e){Xt=e}function rn(e){en=e}tn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class sn extends jt{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?x(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ft.MIN}maxPost(){return new Ft(O,new tn("[PRIORITY-POST]",en))}makePost(e,t){const n=Xt(e);return new Ft(t,new tn("[PRIORITY-POST]",n))}toString(){return".priority"}}const on=new sn,an=Math.log(2);
/**
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
 */class cn{constructor(e){const t=e=>parseInt(Math.log(e)/an,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=n(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ln=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Vt(a,o.node,Vt.BLACK,null,null);{const c=parseInt(s/2,10)+t,l=r(t,c),u=r(c+1,i);return o=e[c],a=n?n(o):o,new Vt(a,o.node,Vt.BLACK,l,u)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const l=r(s+1,a),u=e[s],h=n?n(u):u;c(new Vt(h,u.node,i,null,l))},c=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Vt.BLACK):(a(i,Vt.BLACK),a(i,Vt.RED))}return s},o=new cn(e.length),a=s(o);return new Ht(i||t,a)};
/**
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
 */let un;const hn={};class dn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,s.vA)(hn&&on,"ChildrenNode.ts has not been loaded"),un=un||new dn({".priority":hn},{".priority":on}),un}get(e){const t=(0,s.yw)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ht?t:null}hasIndex(e){return(0,s.gR)(this.indexSet_,e.toString())}addIndex(e,t){(0,s.vA)(e!==qt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(Ft.Wrap);let o,a=r.getNext();while(a)i=i||e.isDefinedOn(a.node),n.push(a),a=r.getNext();o=i?ln(n,e.getCompare()):hn;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=o,new dn(u,l)}addToIndexes(e,t){const n=(0,s.kH)(this.indexes_,((n,i)=>{const r=(0,s.yw)(this.indexSet_,i);if((0,s.vA)(r,"Missing index implementation for "+i),n===hn){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(Ft.Wrap);let s=i.getNext();while(s)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),ln(n,r.getCompare())}return hn}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new Ft(e.name,i))),r.insert(e,e.node)}}));return new dn(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,s.kH)(this.indexes_,(n=>{if(n===hn)return n;{const i=t.get(e.name);return i?n.remove(new Ft(e.name,i)):n}}));return new dn(n,this.indexSet_)}}
/**
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
 */let pn;class fn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Jt(this.priorityNode_),this.children_.isEmpty()&&(0,s.vA)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return pn||(pn=new fn(new Ht(zt),null,dn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||pn}updatePriority(e){return this.children_.isEmpty()?this:new fn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?pn:t}}getChild(e){const t=ht(e);return null===t?this:this.getImmediateChild(t).getChild(pt(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,s.vA)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Ft(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?pn:this.priorityNode_;return new fn(i,s,r)}}updateChild(e,t){const n=ht(e);if(null===n)return t;{(0,s.vA)(".priority"!==ht(e)||1===dt(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(pt(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(on,((s,o)=>{t[s]=o.val(e),n++,r&&fn.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Qt(this.getPriority().val())+":"),this.forEachChild(on,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":v(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Ft(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ft(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ft(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Ft.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Ft.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)>0)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===mn?-1:0}withIndex(e){if(e===qt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new fn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===qt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(on),n=t.getIterator(on);let i=e.getNext(),r=n.getNext();while(i&&r){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===qt?null:this.indexMap_.get(e.toString())}}fn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class gn extends fn{constructor(){super(new Ht(zt),fn.EMPTY_NODE,dn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return fn.EMPTY_NODE}isEmpty(){return!1}}const mn=new gn;Object.defineProperties(Ft,{MIN:{value:new Ft(N,fn.EMPTY_NODE)},MAX:{value:new Ft(O,mn)}}),$t.__EMPTY_NODE=fn.EMPTY_NODE,tn.__childrenNodeConstructor=fn,Yt(mn),rn(mn);
/**
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
 */
const _n=!0;function vn(e,t=null){if(null===e)return fn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),(0,s.vA)(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new tn(n,vn(t))}if(e instanceof Array||!_n){let n=fn.EMPTY_NODE;return j(e,((t,i)=>{if((0,s.gR)(e,t)&&"."!==t.substring(0,1)){const e=vn(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(vn(t))}{const n=[];let i=!1;const r=e;if(j(r,((e,t)=>{if("."!==e.substring(0,1)){const r=vn(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Ft(e,r)))}})),0===n.length)return fn.EMPTY_NODE;const s=ln(n,Kt,(e=>e.name),zt);if(i){const e=ln(n,on.getCompare());return new fn(s,vn(t),new dn({".priority":e},{".priority":on}))}return new fn(s,vn(t),dn.Default)}}nn(vn);
/**
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
 */
class yn extends jt{constructor(e){super(),this.indexPath_=e,(0,s.vA)(!yt(e)&&".priority"!==ht(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?x(e.name,t.name):r}makePost(e,t){const n=vn(e),i=fn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ft(t,i)}maxPost(){const e=fn.EMPTY_NODE.updateChild(this.indexPath_,mn);return new Ft(O,e)}toString(){return mt(this.indexPath_,0).join("/")}}
/**
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
 */class wn extends jt{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?x(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ft.MIN}maxPost(){return Ft.MAX}makePost(e,t){const n=vn(e);return new Ft(t,n)}toString(){return".value"}}const bn=new wn;
/**
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
 */function In(e){return{type:"value",snapshotNode:e}}function Cn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Tn(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function En(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function kn(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
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
 */class Sn{constructor(e){this.index_=e}updateChild(e,t,n,i,r,o){(0,s.vA)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(n.getChild(i))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(Tn(t,a)):(0,s.vA)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Cn(t,n)):o.trackChildChange(En(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(on,((e,i)=>{t.hasChild(e)||n.trackChildChange(Tn(e,i))})),t.isLeafNode()||t.forEachChild(on,((t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(En(t,i,r))}else n.trackChildChange(Cn(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?fn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
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
 */class Pn{constructor(e){this.indexedFilter_=new Sn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Pn.getStartPost_(e),this.endPost_=Pn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,r,s){return this.matches(new Ft(t,n))||(n=fn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=fn.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(fn.EMPTY_NODE);const r=this;return t.forEachChild(on,((e,t)=>{r.matches(new Ft(e,t))||(i=i.updateImmediateChild(e,fn.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
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
 */class Rn{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new Pn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new Ft(t,n))||(n=fn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=fn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=fn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(fn.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;while(e.hasNext()){const t=e.getNext(),r=n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t);r?n++:i=i.updateImmediateChild(t.name,fn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;(0,s.vA)(a.numChildren()===this.limit_,"");const c=new Ft(t,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let s=i.getChildAfterChild(this.index_,l,this.reverse_);while(null!=s&&(s.name===t||a.hasChild(s.name)))s=i.getChildAfterChild(this.index_,s,this.reverse_);const h=null==s?1:o(s,c),d=u&&!n.isEmpty()&&h>=0;if(d)return null!=r&&r.trackChildChange(En(t,n,e)),a.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(Tn(t,e));const n=a.updateImmediateChild(t,fn.EMPTY_NODE),i=null!=s&&this.rangedFilter_.matches(s);return i?(null!=r&&r.trackChildChange(Cn(s.name,s.node)),n.updateImmediateChild(s.name,s.node)):n}}return n.isEmpty()?e:u&&o(l,c)>=0?(null!=r&&(r.trackChildChange(Tn(l.name,l.node)),r.trackChildChange(Cn(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(l.name,fn.EMPTY_NODE)):e}}
/**
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
 */class An{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=on}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,s.vA)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,s.vA)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:N}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,s.vA)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,s.vA)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:O}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,s.vA)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===on}copy(){const e=new An;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Nn(e){return e.loadsAllData()?new Sn(e.getIndex()):e.hasLimit()?new Rn(e):new Pn(e)}function On(e){const t={};if(e.isDefault())return t;let n;if(e.index_===on?n="$priority":e.index_===bn?n="$value":e.index_===qt?n="$key":((0,s.vA)(e.index_ instanceof yn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=(0,s.As)(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=(0,s.As)(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+(0,s.As)(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=(0,s.As)(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+(0,s.As)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function xn(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_),t["sin"]=!e.startAfterSet_),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_),t["ein"]=!e.endBeforeSet_),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==on&&(t["i"]=e.index_.toString()),t}
/**
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
 */class Dn extends rt{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=T("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,s.vA)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Dn.getListenId_(e,n),a={};this.listens_[o]=a;const c=On(e._queryParams);this.restRequest_(r+".json",c,((e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(r,c,!1,n),(0,s.yw)(this.listens_,o)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Dn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=On(e._queryParams),n=e._path.toString(),i=new s.cY;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t["auth"]=i.accessToken),r&&r.token&&(t["ac"]=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,s.Am)(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=(0,s.$L)(a.responseText)}catch(e){S("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&S("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()}))}}
/**
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
 */class Mn{constructor(){this.rootNode_=fn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
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
 */function Ln(){return{value:null,children:new Map}}function Fn(e,t,n){if(yt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=ht(t);e.children.has(i)||e.children.set(i,Ln());const r=e.children.get(i);t=pt(t),Fn(r,t,n)}}function jn(e,t,n){null!==e.value?n(t,e.value):Un(e,((e,i)=>{const r=new lt(t.toString()+"/"+e);jn(i,r,n)}))}function Un(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
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
 */class $n{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&j(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
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
 */const qn=1e4,Wn=3e4,Vn=3e5;class Bn{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new $n(e);const n=qn+(Wn-qn)*Math.random();Y(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;j(e,((e,i)=>{i>0&&(0,s.gR)(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Y(this.reportStats_.bind(this),Math.floor(2*Math.random()*Vn))}}
/**
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
 */var Hn;function Kn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Gn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
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
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Hn||(Hn={}));class Yn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Hn.ACK_USER_WRITE,this.source=Kn()}operationForChild(e){if(yt(this.path)){if(null!=this.affectedTree.value)return(0,s.vA)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new lt(e));return new Yn(ut(),t,this.revert)}}return(0,s.vA)(ht(this.path)===e,"operationForChild called for unrelated child."),new Yn(pt(this.path),this.affectedTree,this.revert)}}
/**
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
 */class Qn{constructor(e,t){this.source=e,this.path=t,this.type=Hn.LISTEN_COMPLETE}operationForChild(e){return yt(this.path)?new Qn(this.source,ut()):new Qn(this.source,pt(this.path))}}
/**
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
 */class Jn{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Hn.OVERWRITE}operationForChild(e){return yt(this.path)?new Jn(this.source,ut(),this.snap.getImmediateChild(e)):new Jn(this.source,pt(this.path),this.snap)}}
/**
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
 */class Zn{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Hn.MERGE}operationForChild(e){if(yt(this.path)){const t=this.children.subtree(new lt(e));return t.isEmpty()?null:t.value?new Jn(this.source,ut(),t.value):new Zn(this.source,ut(),t)}return(0,s.vA)(ht(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Zn(this.source,pt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
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
 */class Xn{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(yt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ht(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
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
 */class ei{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ti(e,t,n,i){const r=[],s=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push(kn(t.childName,t.snapshotNode))})),ni(e,r,"child_removed",t,i,n),ni(e,r,"child_added",t,i,n),ni(e,r,"child_moved",s,i,n),ni(e,r,"child_changed",t,i,n),ni(e,r,"value",t,i,n),r}function ni(e,t,n,i,r,s){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>ri(e,t,n))),o.forEach((n=>{const i=ii(e,n,s);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function ii(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function ri(e,t,n){if(null==t.childName||null==n.childName)throw(0,s.Hk)("Should only compare child_ events.");const i=new Ft(t.childName,t.snapshotNode),r=new Ft(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
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
 */function si(e,t){return{eventCache:e,serverCache:t}}function oi(e,t,n,i){return si(new Xn(t,n,i),e.serverCache)}function ai(e,t,n,i){return si(e.eventCache,new Xn(t,n,i))}function ci(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function li(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
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
 */let ui;const hi=()=>(ui||(ui=new Ht(D)),ui);class di{constructor(e,t=hi()){this.value=e,this.children=t}static fromObject(e){let t=new di(null);return j(e,((e,n)=>{t=t.set(new lt(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ut(),value:this.value};if(yt(e))return null;{const n=ht(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(pt(e),t);if(null!=r){const e=vt(new lt(n),r.path);return{path:e,value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(yt(e))return this;{const t=ht(e),n=this.children.get(t);return null!==n?n.subtree(pt(e)):new di(null)}}set(e,t){if(yt(e))return new di(t,this.children);{const n=ht(e),i=this.children.get(n)||new di(null),r=i.set(pt(e),t),s=this.children.insert(n,r);return new di(this.value,s)}}remove(e){if(yt(e))return this.children.isEmpty()?new di(null):new di(null,this.children);{const t=ht(e),n=this.children.get(t);if(n){const i=n.remove(pt(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new di(null):new di(this.value,r)}return this}}get(e){if(yt(e))return this.value;{const t=ht(e),n=this.children.get(t);return n?n.get(pt(e)):null}}setTree(e,t){if(yt(e))return t;{const n=ht(e),i=this.children.get(n)||new di(null),r=i.setTree(pt(e),t);let s;return s=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new di(this.value,s)}}fold(e){return this.fold_(ut(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(vt(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ut(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(yt(e))return null;{const i=ht(e),r=this.children.get(i);return r?r.findOnPath_(pt(e),vt(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ut(),t)}foreachOnPath_(e,t,n){if(yt(e))return this;{this.value&&n(t,this.value);const i=ht(e),r=this.children.get(i);return r?r.foreachOnPath_(pt(e),vt(t,i),n):new di(null)}}foreach(e){this.foreach_(ut(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(vt(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
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
 */class pi{constructor(e){this.writeTree_=e}static empty(){return new pi(new di(null))}}function fi(e,t,n){if(yt(t))return new pi(new di(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=wt(r,t);return s=s.updateChild(o,n),new pi(e.writeTree_.set(r,s))}{const i=new di(n),r=e.writeTree_.setTree(t,i);return new pi(r)}}}function gi(e,t,n){let i=e;return j(n,((e,n)=>{i=fi(i,vt(t,e),n)})),i}function mi(e,t){if(yt(t))return pi.empty();{const n=e.writeTree_.setTree(t,new di(null));return new pi(n)}}function _i(e,t){return null!=vi(e,t)}function vi(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(wt(n.path,t)):null}function yi(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(on,((e,n)=>{t.push(new Ft(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Ft(e,n.value))})),t}function wi(e,t){if(yt(t))return e;{const n=vi(e,t);return new pi(null!=n?new di(n):e.writeTree_.subtree(t))}}function bi(e){return e.writeTree_.isEmpty()}function Ii(e,t){return Ci(ut(),e.writeTree_,t)}function Ci(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?((0,s.vA)(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=Ci(vt(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(vt(e,".priority"),i)),n}}
/**
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
 */function Ti(e,t){return Ki(t,e)}function Ei(e,t,n,i,r){(0,s.vA)(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=fi(e.visibleWrites,t,n)),e.lastWriteId=i}function ki(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function Si(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,s.vA)(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,o=!1,a=e.allWrites.length-1;while(r&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&Pi(t,i.path)?r=!1:It(i.path,t.path)&&(o=!0)),a--}if(r){if(o)return Ri(e),!0;if(i.snap)e.visibleWrites=mi(e.visibleWrites,i.path);else{const t=i.children;j(t,(t=>{e.visibleWrites=mi(e.visibleWrites,vt(i.path,t))}))}return!0}return!1}function Pi(e,t){if(e.snap)return It(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&It(vt(e.path,n),t))return!0;return!1}function Ri(e){e.visibleWrites=Ni(e.allWrites,Ai,ut()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Ai(e){return e.visible}function Ni(e,t,n){let i=pi.empty();for(let r=0;r<e.length;++r){const o=e[r];if(t(o)){const e=o.path;let t;if(o.snap)It(n,e)?(t=wt(n,e),i=fi(i,t,o.snap)):It(e,n)&&(t=wt(e,n),i=fi(i,ut(),o.snap.getChild(t)));else{if(!o.children)throw(0,s.Hk)("WriteRecord should have .snap or .children");if(It(n,e))t=wt(n,e),i=gi(i,t,o.children);else if(It(e,n))if(t=wt(e,n),yt(t))i=gi(i,ut(),o.children);else{const e=(0,s.yw)(o.children,ht(t));if(e){const n=e.getChild(pt(t));i=fi(i,ut(),n)}}}}}return i}function Oi(e,t,n,i,r){if(i||r){const s=wi(e.visibleWrites,t);if(!r&&bi(s))return n;if(r||null!=n||_i(s,ut())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(It(e.path,t)||It(t,e.path))},o=Ni(e.allWrites,s,t),a=n||fn.EMPTY_NODE;return Ii(o,a)}return null}{const i=vi(e.visibleWrites,t);if(null!=i)return i;{const i=wi(e.visibleWrites,t);if(bi(i))return n;if(null!=n||_i(i,ut())){const e=n||fn.EMPTY_NODE;return Ii(i,e)}return null}}}function xi(e,t,n){let i=fn.EMPTY_NODE;const r=vi(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(on,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=wi(e.visibleWrites,t);return n.forEachChild(on,((e,t)=>{const n=Ii(wi(r,new lt(e)),t);i=i.updateImmediateChild(e,n)})),yi(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}{const n=wi(e.visibleWrites,t);return yi(n).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}}function Di(e,t,n,i,r){(0,s.vA)(i||r,"Either existingEventSnap or existingServerSnap must exist");const o=vt(t,n);if(_i(e.visibleWrites,o))return null;{const t=wi(e.visibleWrites,o);return bi(t)?r.getChild(n):Ii(t,r.getChild(n))}}function Mi(e,t,n,i){const r=vt(t,n),s=vi(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n)){const t=wi(e.visibleWrites,r);return Ii(t,i.getNode().getImmediateChild(n))}return null}function Li(e,t){return vi(e.visibleWrites,t)}function Fi(e,t,n,i,r,s,o){let a;const c=wi(e.visibleWrites,t),l=vi(c,ut());if(null!=l)a=l;else{if(null==n)return[];a=Ii(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let c=n.getNext();while(c&&e.length<r)0!==t(c,i)&&e.push(c),c=n.getNext();return e}}function ji(){return{visibleWrites:pi.empty(),allWrites:[],lastWriteId:-1}}function Ui(e,t,n,i){return Oi(e.writeTree,e.treePath,t,n,i)}function $i(e,t){return xi(e.writeTree,e.treePath,t)}function qi(e,t,n,i){return Di(e.writeTree,e.treePath,t,n,i)}function Wi(e,t){return Li(e.writeTree,vt(e.treePath,t))}function Vi(e,t,n,i,r,s){return Fi(e.writeTree,e.treePath,t,n,i,r,s)}function Bi(e,t,n){return Mi(e.writeTree,e.treePath,t,n)}function Hi(e,t){return Ki(vt(e.treePath,t),e.writeTree)}function Ki(e,t){return{treePath:e,writeTree:t}}
/**
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
 */class zi{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,s.vA)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,s.vA)(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,En(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,Tn(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,Cn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw(0,s.Hk)("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,En(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
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
 */class Gi{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Yi=new Gi;class Qi{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Xn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Bi(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:li(this.viewCache_),r=Vi(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
/**
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
 */function Ji(e){return{filter:e}}function Zi(e,t){(0,s.vA)(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),(0,s.vA)(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function Xi(e,t,n,i,r){const o=new zi;let a,c;if(n.type===Hn.OVERWRITE){const l=n;l.source.fromUser?a=ir(e,t,l.path,l.snap,i,r,o):((0,s.vA)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered()&&!yt(l.path),a=nr(e,t,l.path,l.snap,i,r,c,o))}else if(n.type===Hn.MERGE){const l=n;l.source.fromUser?a=sr(e,t,l.path,l.children,i,r,o):((0,s.vA)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered(),a=ar(e,t,l.path,l.children,i,r,c,o))}else if(n.type===Hn.ACK_USER_WRITE){const s=n;a=s.revert?ur(e,t,s.path,i,r,o):cr(e,t,s.path,s.affectedTree,i,r,o)}else{if(n.type!==Hn.LISTEN_COMPLETE)throw(0,s.Hk)("Unknown operation type: "+n.type);a=lr(e,t,n.path,i,o)}const l=o.getChanges();return er(t,a,l),{viewCache:a,changes:l}}function er(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=ci(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(In(ci(t)))}}function tr(e,t,n,i,r,o){const a=t.eventCache;if(null!=Wi(i,n))return t;{let c,l;if(yt(n))if((0,s.vA)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=li(t),r=n instanceof fn?n:fn.EMPTY_NODE,s=$i(i,r);c=e.filter.updateFullNode(t.eventCache.getNode(),s,o)}else{const n=Ui(i,li(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const u=ht(n);if(".priority"===u){(0,s.vA)(1===dt(n),"Can't have a priority with additional path components");const r=a.getNode();l=t.serverCache.getNode();const o=qi(i,n,r,l);c=null!=o?e.filter.updatePriority(r,o):a.getNode()}else{const s=pt(n);let h;if(a.isCompleteForChild(u)){l=t.serverCache.getNode();const e=qi(i,n,a.getNode(),l);h=null!=e?a.getNode().getImmediateChild(u).updateChild(s,e):a.getNode().getImmediateChild(u)}else h=Bi(i,u,t.serverCache);c=null!=h?e.filter.updateChild(a.getNode(),u,h,s,r,o):a.getNode()}}return oi(t,c,a.isFullyInitialized()||yt(n),e.filter.filtersNodes())}}function nr(e,t,n,i,r,s,o,a){const c=t.serverCache;let l;const u=o?e.filter:e.filter.getIndexedFilter();if(yt(n))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,i);l=u.updateFullNode(c.getNode(),e,null)}else{const e=ht(n);if(!c.isCompleteForPath(n)&&dt(n)>1)return t;const r=pt(n),s=c.getNode().getImmediateChild(e),o=s.updateChild(r,i);l=".priority"===e?u.updatePriority(c.getNode(),o):u.updateChild(c.getNode(),e,o,r,Yi,null)}const h=ai(t,l,c.isFullyInitialized()||yt(n),u.filtersNodes()),d=new Qi(r,h,s);return tr(e,h,n,r,d,a)}function ir(e,t,n,i,r,s,o){const a=t.eventCache;let c,l;const u=new Qi(r,t,s);if(yt(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),c=oi(t,l,!0,e.filter.filtersNodes());else{const r=ht(n);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),i),c=oi(t,l,a.isFullyInitialized(),a.isFiltered());else{const s=pt(n),l=a.getNode().getImmediateChild(r);let h;if(yt(s))h=i;else{const e=u.getCompleteChild(r);h=null!=e?".priority"===ft(s)&&e.getChild(_t(s)).isEmpty()?e:e.updateChild(s,i):fn.EMPTY_NODE}if(l.equals(h))c=t;else{const n=e.filter.updateChild(a.getNode(),r,h,s,u,o);c=oi(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function rr(e,t){return e.eventCache.isCompleteForChild(t)}function sr(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,c)=>{const l=vt(n,i);rr(t,ht(l))&&(a=ir(e,a,l,c,r,s,o))})),i.foreach(((i,c)=>{const l=vt(n,i);rr(t,ht(l))||(a=ir(e,a,l,c,r,s,o))})),a}function or(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function ar(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=yt(n)?i:new di(null).setTree(n,i);const u=t.serverCache.getNode();return c.children.inorderTraversal(((n,i)=>{if(u.hasChild(n)){const c=t.serverCache.getNode().getImmediateChild(n),u=or(e,c,i);l=nr(e,l,new lt(n),u,r,s,o,a)}})),c.children.inorderTraversal(((n,i)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!u.hasChild(n)&&!c){const c=t.serverCache.getNode().getImmediateChild(n),u=or(e,c,i);l=nr(e,l,new lt(n),u,r,s,o,a)}})),l}function cr(e,t,n,i,r,s,o){if(null!=Wi(r,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=i.value){if(yt(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return nr(e,t,n,c.getNode().getChild(n),r,s,a,o);if(yt(n)){let i=new di(null);return c.getNode().forEachChild(qt,((e,t)=>{i=i.set(new lt(e),t)})),ar(e,t,n,i,r,s,a,o)}return t}{let l=new di(null);return i.foreach(((e,t)=>{const i=vt(n,e);c.isCompleteForPath(i)&&(l=l.set(e,c.getNode().getChild(i)))})),ar(e,t,n,l,r,s,a,o)}}function lr(e,t,n,i,r){const s=t.serverCache,o=ai(t,s.getNode(),s.isFullyInitialized()||yt(n),s.isFiltered());return tr(e,o,n,i,Yi,r)}function ur(e,t,n,i,r,o){let a;if(null!=Wi(i,n))return t;{const c=new Qi(i,t,r),l=t.eventCache.getNode();let u;if(yt(n)||".priority"===ht(n)){let n;if(t.serverCache.isFullyInitialized())n=Ui(i,li(t));else{const e=t.serverCache.getNode();(0,s.vA)(e instanceof fn,"serverChildren would be complete if leaf node"),n=$i(i,e)}u=e.filter.updateFullNode(l,n,o)}else{const r=ht(n);let s=Bi(i,r,t.serverCache);null==s&&t.serverCache.isCompleteForChild(r)&&(s=l.getImmediateChild(r)),u=null!=s?e.filter.updateChild(l,r,s,pt(n),c,o):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(l,r,fn.EMPTY_NODE,pt(n),c,o):l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=Ui(i,li(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=Wi(i,ut()),oi(t,u,a,e.filter.filtersNodes())}}
/**
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
 */class hr{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new Sn(n.getIndex()),r=Nn(n);this.processor_=Ji(r);const s=t.serverCache,o=t.eventCache,a=i.updateFullNode(fn.EMPTY_NODE,s.getNode(),null),c=r.updateFullNode(fn.EMPTY_NODE,o.getNode(),null),l=new Xn(a,s.isFullyInitialized(),i.filtersNodes()),u=new Xn(c,o.isFullyInitialized(),r.filtersNodes());this.viewCache_=si(u,l),this.eventGenerator_=new ei(this.query_)}get query(){return this.query_}}function dr(e){return e.viewCache_.serverCache.getNode()}function pr(e,t){const n=li(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!yt(t)&&!n.getImmediateChild(ht(t)).isEmpty())?n.getChild(t):null}function fr(e){return 0===e.eventRegistrations_.length}function gr(e,t){e.eventRegistrations_.push(t)}function mr(e,t,n){const i=[];if(n){(0,s.vA)(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,r);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function _r(e,t,n,i){t.type===Hn.MERGE&&null!==t.source.queryId&&((0,s.vA)(li(e.viewCache_),"We should always have a full cache before handling merges"),(0,s.vA)(ci(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,o=Xi(e.processor_,r,t,n,i);return Zi(e.processor_,o.viewCache),(0,s.vA)(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,yr(e,o.changes,o.viewCache.eventCache.getNode(),null)}function vr(e,t){const n=e.viewCache_.eventCache,i=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(on,((e,t)=>{i.push(Cn(e,t))}))}return n.isFullyInitialized()&&i.push(In(n.getNode())),yr(e,i,n.getNode(),t)}function yr(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return ti(e.eventGenerator_,t,n,r)}
/**
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
 */let wr,br;class Ir{constructor(){this.views=new Map}}function Cr(e){(0,s.vA)(!wr,"__referenceConstructor has already been defined"),wr=e}function Tr(){return(0,s.vA)(wr,"Reference.ts has not been loaded"),wr}function Er(e){return 0===e.views.size}function kr(e,t,n,i){const r=t.source.queryId;if(null!==r){const o=e.views.get(r);return(0,s.vA)(null!=o,"SyncTree gave us an op for an invalid query."),_r(o,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(_r(s,t,n,i));return r}}function Sr(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=Ui(n,r?i:null),s=!1;e?s=!0:i instanceof fn?(e=$i(n,i),s=!1):(e=fn.EMPTY_NODE,s=!1);const o=si(new Xn(e,s,!1),new Xn(i,r,!1));return new hr(t,o)}return o}function Pr(e,t,n,i,r,s){const o=Sr(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),gr(o,n),vr(o,n)}function Rr(e,t,n,i){const r=t._queryIdentifier,s=[];let o=[];const a=Dr(e);if("default"===r)for(const[c,l]of e.views.entries())o=o.concat(mr(l,n,i)),fr(l)&&(e.views.delete(c),l.query._queryParams.loadsAllData()||s.push(l.query));else{const t=e.views.get(r);t&&(o=o.concat(mr(t,n,i)),fr(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!Dr(e)&&s.push(new(Tr())(t._repo,t._path)),{removed:s,events:o}}function Ar(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Nr(e,t){let n=null;for(const i of e.views.values())n=n||pr(i,t);return n}function Or(e,t){const n=t._queryParams;if(n.loadsAllData())return Mr(e);{const n=t._queryIdentifier;return e.views.get(n)}}function xr(e,t){return null!=Or(e,t)}function Dr(e){return null!=Mr(e)}function Mr(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
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
 */function Lr(e){(0,s.vA)(!br,"__referenceConstructor has already been defined"),br=e}function Fr(){return(0,s.vA)(br,"Reference.ts has not been loaded"),br}let jr=1;class Ur{constructor(e){this.listenProvider_=e,this.syncPointTree_=new di(null),this.pendingWriteTree_=ji(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function $r(e,t,n,i,r){return Ei(e.pendingWriteTree_,t,n,i,r),r?Jr(e,new Jn(Kn(),t,n)):[]}function qr(e,t,n=!1){const i=ki(e.pendingWriteTree_,t),r=Si(e.pendingWriteTree_,t);if(r){let t=new di(null);return null!=i.snap?t=t.set(ut(),!0):j(i.children,(e=>{t=t.set(new lt(e),!0)})),Jr(e,new Yn(i.path,t,n))}return[]}function Wr(e,t,n){return Jr(e,new Jn(zn(),t,n))}function Vr(e,t,n){const i=di.fromObject(n);return Jr(e,new Zn(zn(),t,i))}function Br(e,t){return Jr(e,new Qn(zn(),t))}function Hr(e,t,n){const i=is(e,n);if(i){const n=rs(i),r=n.path,s=n.queryId,o=wt(r,t),a=new Qn(Gn(s),o);return ss(e,r,a)}return[]}function Kr(e,t,n,i,r=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&("default"===t._queryIdentifier||xr(o,t))){const c=Rr(o,t,n,i);Er(o)&&(e.syncPointTree_=e.syncPointTree_.remove(s));const l=c.removed;if(a=c.events,!r){const n=-1!==l.findIndex((e=>e._queryParams.loadsAllData())),r=e.syncPointTree_.findOnPath(s,((e,t)=>Dr(t)));if(n&&!r){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=os(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,s=es(e,i);e.listenProvider_.startListening(as(r),ts(e,r),s.hashFn,s.onComplete)}}}if(!r&&l.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(as(t),n)}else l.forEach((t=>{const n=e.queryToTagMap.get(ns(t));e.listenProvider_.stopListening(as(t),n)}))}cs(e,l)}return a}function zr(e,t,n,i){const r=is(e,i);if(null!=r){const i=rs(r),s=i.path,o=i.queryId,a=wt(s,t),c=new Jn(Gn(o),a,n);return ss(e,s,c)}return[]}function Gr(e,t,n,i){const r=is(e,i);if(r){const i=rs(r),s=i.path,o=i.queryId,a=wt(s,t),c=di.fromObject(n),l=new Zn(Gn(o),a,c);return ss(e,s,l)}return[]}function Yr(e,t,n,i=!1){const r=t._path;let o=null,a=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const n=wt(e,r);o=o||Nr(t,n),a=a||Dr(t)}));let c,l=e.syncPointTree_.get(r);if(l?(a=a||Dr(l),o=o||Nr(l,ut())):(l=new Ir,e.syncPointTree_=e.syncPointTree_.set(r,l)),null!=o)c=!0;else{c=!1,o=fn.EMPTY_NODE;const t=e.syncPointTree_.subtree(r);t.foreachChild(((e,t)=>{const n=Nr(t,ut());n&&(o=o.updateImmediateChild(e,n))}))}const u=xr(l,t);if(!u&&!t._queryParams.loadsAllData()){const n=ns(t);(0,s.vA)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=ls();e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}const h=Ti(e.pendingWriteTree_,r);let d=Pr(l,t,n,h,o,c);if(!u&&!a&&!i){const n=Or(l,t);d=d.concat(us(e,t,n))}return d}function Qr(e,t,n){const i=!0,r=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=wt(e,t),r=Nr(n,i);if(r)return r}));return Oi(r,t,s,n,i)}function Jr(e,t){return Zr(t,e.syncPointTree_,null,Ti(e.pendingWriteTree_,ut()))}function Zr(e,t,n,i){if(yt(e.path))return Xr(e,t,n,i);{const r=t.get(ut());null==n&&null!=r&&(n=Nr(r,ut()));let s=[];const o=ht(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=Hi(i,o);s=s.concat(Zr(a,c,e,t))}return r&&(s=s.concat(kr(r,e,i,n))),s}}function Xr(e,t,n,i){const r=t.get(ut());null==n&&null!=r&&(n=Nr(r,ut()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=Hi(i,t),c=e.operationForChild(t);c&&(s=s.concat(Xr(c,r,o,a)))})),r&&(s=s.concat(kr(r,e,i,n))),s}function es(e,t){const n=t.query,i=ts(e,n);return{hashFn:()=>{const e=dr(t)||fn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?Hr(e,n._path,i):Br(e,n._path);{const i=W(t,n);return Kr(e,n,null,i)}}}}function ts(e,t){const n=ns(t);return e.queryToTagMap.get(n)}function ns(e){return e._path.toString()+"$"+e._queryIdentifier}function is(e,t){return e.tagToQueryMap.get(t)}function rs(e){const t=e.indexOf("$");return(0,s.vA)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new lt(e.substr(0,t))}}function ss(e,t,n){const i=e.syncPointTree_.get(t);(0,s.vA)(i,"Missing sync point for query tag that we're tracking");const r=Ti(e.pendingWriteTree_,t);return kr(i,n,r,null)}function os(e){return e.fold(((e,t,n)=>{if(t&&Dr(t)){const e=Mr(t);return[e]}{let e=[];return t&&(e=Ar(t)),j(n,((t,n)=>{e=e.concat(n)})),e}}))}function as(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Fr())(e._repo,e._path):e}function cs(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=ns(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function ls(){return jr++}function us(e,t,n){const i=t._path,r=ts(e,t),o=es(e,n),a=e.listenProvider_.startListening(as(t),r,o.hashFn,o.onComplete),c=e.syncPointTree_.subtree(i);if(r)(0,s.vA)(!Dr(c.value),"If we're adding a query, it shouldn't be shadowed");else{const t=c.fold(((e,t,n)=>{if(!yt(e)&&t&&Dr(t))return[Mr(t).query];{let e=[];return t&&(e=e.concat(Ar(t).map((e=>e.query)))),j(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(as(i),ts(e,i))}}return a}
/**
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
 */class hs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new hs(t)}node(){return this.node_}}class ds{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=vt(this.path_,e);return new ds(this.syncTree_,t)}node(){return Qr(this.syncTree_,this.path_)}}const ps=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},fs=function(e,t,n){return e&&"object"===typeof e?((0,s.vA)(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?gs(e[".sv"],t,n):"object"===typeof e[".sv"]?ms(e[".sv"],t):void(0,s.vA)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},gs=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:(0,s.vA)(!1,"Unexpected server value: "+e)}},ms=function(e,t,n){e.hasOwnProperty("increment")||(0,s.vA)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e["increment"];"number"!==typeof i&&(0,s.vA)(!1,"Unexpected increment value: "+i);const r=t.node();if((0,s.vA)(null!==r&&"undefined"!==typeof r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r,a=o.getValue();return"number"!==typeof a?i:a+i},_s=function(e,t,n,i){return ys(t,new ds(n,e),i)},vs=function(e,t,n){return ys(e,new hs(t),n)};function ys(e,t,n){const i=e.getPriority().val(),r=fs(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=fs(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new tn(s,vn(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new tn(r))),i.forEachChild(on,((e,i)=>{const r=ys(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
/**
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
 */class ws{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function bs(e,t){let n=t instanceof lt?t:new lt(t),i=e,r=ht(n);while(null!==r){const e=(0,s.yw)(i.node.children,r)||{children:{},childCount:0};i=new ws(r,i,e),n=pt(n),r=ht(n)}return i}function Is(e){return e.node.value}function Cs(e,t){e.node.value=t,As(e)}function Ts(e){return e.node.childCount>0}function Es(e){return void 0===Is(e)&&!Ts(e)}function ks(e,t){j(e.node.children,((n,i)=>{t(new ws(n,e,i))}))}function Ss(e,t,n,i){n&&!i&&t(e),ks(e,(e=>{Ss(e,t,!0,i)})),n&&i&&t(e)}function Ps(e,t,n){let i=n?e:e.parent;while(null!==i){if(t(i))return!0;i=i.parent}return!1}function Rs(e){return new lt(null===e.parent?e.name:Rs(e.parent)+"/"+e.name)}function As(e){null!==e.parent&&Ns(e.parent,e.name,e)}function Ns(e,t,n){const i=Es(n),r=(0,s.gR)(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,As(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,As(e))}
/**
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
 */const Os=/[\[\].#$\/\u0000-\u001F\u007F]/,xs=/[\[\].#$\u0000-\u001F\u007F]/,Ds=10485760,Ms=function(e){return"string"===typeof e&&0!==e.length&&!Os.test(e)},Ls=function(e){return"string"===typeof e&&0!==e.length&&!xs.test(e)},Fs=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Ls(e)},js=function(e,t,n,i){i&&void 0===t||Us((0,s.dI)(e,"value"),t,n)},Us=function(e,t,n){const i=n instanceof lt?new Ct(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+St(i));if("function"===typeof t)throw new Error(e+"contains a function "+St(i)+" with contents = "+t.toString());if(R(t))throw new Error(e+"contains "+t.toString()+" "+St(i));if("string"===typeof t&&t.length>Ds/3&&(0,s.OE)(t)>Ds)throw new Error(e+"contains a string greater than "+Ds+" utf8 bytes "+St(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,r=!1;if(j(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!Ms(t)))throw new Error(e+" contains an invalid key ("+t+") "+St(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Tt(i,t),Us(e,s,i),Et(i)})),n&&r)throw new Error(e+' contains ".value" child '+St(i)+" in addition to actual children.")}},$s=function(e,t,n,i){if((!i||void 0!==n)&&!Ls(n))throw new Error((0,s.dI)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},qs=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),$s(e,t,n,i)},Ws=function(e,t){if(".info"===ht(t))throw new Error(e+" failed = Can't modify data under /.info/")},Vs=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!Ms(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!Fs(n))throw new Error((0,s.dI)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
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
 */
class Bs{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Hs(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||bt(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function Ks(e,t,n){Hs(e,n),Gs(e,(e=>bt(e,t)))}function zs(e,t,n){Hs(e,n),Gs(e,(e=>It(e,t)||It(t,e)))}function Gs(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){const s=r.path;t(s)?(Ys(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Ys(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();w&&C("event: "+n.toString()),z(i)}}}
/**
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
 */const Qs="repo_interrupt",Js=25;class Zs{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Bs,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ln(),this.transactionQueueTree_=new ws,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Xs(e,t,n){if(e.stats_=me(e.repoInfo_),e.forceRestClient_||G())e.server_=new Dn(e.repoInfo_,((t,n,i,r)=>{no(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>io(e,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,s.As)(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new Lt(e.repoInfo_,t,((t,n,i,r)=>{no(e,t,n,i,r)}),(t=>{io(e,t)}),(t=>{ro(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=_e(e.repoInfo_,(()=>new Bn(e.stats_,e.server_))),e.infoData_=new Mn,e.infoSyncTree_=new Ur({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Wr(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),so(e,"connected",!1),e.serverSyncTree_=new Ur({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);zs(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function eo(e){const t=e.infoData_.getNode(new lt(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function to(e){return ps({timestamp:eo(e)})}function no(e,t,n,i,r){e.dataUpdateCount++;const o=new lt(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(r)if(i){const t=(0,s.kH)(n,(e=>vn(e)));a=Gr(e.serverSyncTree_,o,t,r)}else{const t=vn(n);a=zr(e.serverSyncTree_,o,t,r)}else if(i){const t=(0,s.kH)(n,(e=>vn(e)));a=Vr(e.serverSyncTree_,o,t)}else{const t=vn(n);a=Wr(e.serverSyncTree_,o,t)}let c=o;a.length>0&&(c=vo(e,o)),zs(e.eventQueue_,c,a)}function io(e,t){so(e,"connected",t),!1===t&&co(e)}function ro(e,t){j(t,((t,n)=>{so(e,t,n)}))}function so(e,t,n){const i=new lt("/.info/"+t),r=vn(n);e.infoData_.updateSnapshot(i,r);const s=Wr(e.infoSyncTree_,i,r);zs(e.eventQueue_,i,s)}function oo(e){return e.nextWriteId_++}function ao(e,t,n,i,r){po(e,"set",{path:t.toString(),value:n,priority:i});const s=to(e),o=vn(n,i),a=Qr(e.serverSyncTree_,t),c=vs(o,a,s),l=oo(e),u=$r(e.serverSyncTree_,t,c,l,!0);Hs(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const s="ok"===n;s||S("set at "+t+" failed: "+n);const o=qr(e.serverSyncTree_,l,!s);zs(e.eventQueue_,t,o),fo(e,r,n,i)}));const h=To(e,t);vo(e,h),zs(e.eventQueue_,h,[])}function co(e){po(e,"onDisconnectEvents");const t=to(e),n=Ln();jn(e.onDisconnect_,ut(),((i,r)=>{const s=_s(i,r,e.serverSyncTree_,t);Fn(n,i,s)}));let i=[];jn(n,ut(),((t,n)=>{i=i.concat(Wr(e.serverSyncTree_,t,n));const r=To(e,t);vo(e,r)})),e.onDisconnect_=Ln(),zs(e.eventQueue_,ut(),i)}function lo(e,t,n){let i;i=".info"===ht(t._path)?Yr(e.infoSyncTree_,t,n):Yr(e.serverSyncTree_,t,n),Ks(e.eventQueue_,t._path,i)}function uo(e,t,n){let i;i=".info"===ht(t._path)?Kr(e.infoSyncTree_,t,n):Kr(e.serverSyncTree_,t,n),Ks(e.eventQueue_,t._path,i)}function ho(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Qs)}function po(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),C(n,...t)}function fo(e,t,n,i){t&&z((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const s=new Error(r);s.code=e,t(s)}}))}function go(e,t,n){return Qr(e.serverSyncTree_,t,n)||fn.EMPTY_NODE}function mo(e,t=e.transactionQueueTree_){if(t||Co(e,t),Is(t)){const n=bo(e,t);(0,s.vA)(n.length>0,"Sending zero length transaction queue");const i=n.every((e=>0===e.status));i&&_o(e,Rs(t),n)}else Ts(t)&&ks(t,(t=>{mo(e,t)}))}function _o(e,t,n){const i=n.map((e=>e.currentWriteId)),r=go(e,t,i);let o=r;const a=r.hash();for(let u=0;u<n.length;u++){const e=n[u];(0,s.vA)(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=wt(t,e.path);o=o.updateChild(i,e.currentOutputSnapshotRaw)}const c=o.val(!0),l=t;e.server_.put(l.toString(),c,(i=>{po(e,"transaction put response",{path:l.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(qr(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Co(e,bs(e.transactionQueueTree_,t)),mo(e,e.transactionQueueTree_),zs(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)z(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{S("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}vo(e,t)}}),a)}function vo(e,t){const n=wo(e,t),i=Rs(n),r=bo(e,n);return yo(e,r,i),i}function yo(e,t,n){if(0===t.length)return;const i=[];let r=[];const o=t.filter((e=>0===e.status)),a=o.map((e=>e.currentWriteId));for(let c=0;c<t.length;c++){const o=t[c],l=wt(n,o.path);let u,h=!1;if((0,s.vA)(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)h=!0,u=o.abortReason,r=r.concat(qr(e.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=Js)h=!0,u="maxretry",r=r.concat(qr(e.serverSyncTree_,o.currentWriteId,!0));else{const n=go(e,o.path,a);o.currentInputSnapshot=n;const i=t[c].update(n.val());if(void 0!==i){Us("transaction failed: Data returned ",i,o.path);let t=vn(i);const c="object"===typeof i&&null!=i&&(0,s.gR)(i,".priority");c||(t=t.updatePriority(n.getPriority()));const l=o.currentWriteId,u=to(e),h=vs(t,n,u);o.currentOutputSnapshotRaw=t,o.currentOutputSnapshotResolved=h,o.currentWriteId=oo(e),a.splice(a.indexOf(l),1),r=r.concat($r(e.serverSyncTree_,o.path,h,o.currentWriteId,o.applyLocally)),r=r.concat(qr(e.serverSyncTree_,l,!0))}else h=!0,u="nodata",r=r.concat(qr(e.serverSyncTree_,o.currentWriteId,!0))}zs(e.eventQueue_,n,r),r=[],h&&(t[c].status=2,function(e){setTimeout(e,Math.floor(0))}(t[c].unwatcher),t[c].onComplete&&("nodata"===u?i.push((()=>t[c].onComplete(null,!1,t[c].currentInputSnapshot))):i.push((()=>t[c].onComplete(new Error(u),!1,null)))))}Co(e,e.transactionQueueTree_);for(let s=0;s<i.length;s++)z(i[s]);mo(e,e.transactionQueueTree_)}function wo(e,t){let n,i=e.transactionQueueTree_;n=ht(t);while(null!==n&&void 0===Is(i))i=bs(i,n),t=pt(t),n=ht(t);return i}function bo(e,t){const n=[];return Io(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Io(e,t,n){const i=Is(t);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);ks(t,(t=>{Io(e,t,n)}))}function Co(e,t){const n=Is(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Cs(t,n.length>0?n:void 0)}ks(t,(t=>{Co(e,t)}))}function To(e,t){const n=Rs(wo(e,t)),i=bs(e.transactionQueueTree_,t);return Ps(i,(t=>{Eo(e,t)})),Eo(e,i),Ss(i,(t=>{Eo(e,t)})),n}function Eo(e,t){const n=Is(t);if(n){const i=[];let r=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,s.vA)(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):((0,s.vA)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(qr(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Cs(t,void 0):n.length=o+1,zs(e.eventQueue_,Rs(t),r);for(let e=0;e<i.length;e++)z(i[e])}}
/**
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
 */function ko(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let e=n[r];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}function So(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):S(`Invalid query segment '${n}' in query '${e}'`)}return t}const Po=function(e,t){const n=Ro(e),i=n.namespace;"firebase.com"===n.domain&&k(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||k("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||P();const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ue(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new lt(n.pathString)}},Ro=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",c=443;if("string"===typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(r=ko(e.substring(u,h)));const d=So(e.substring(Math.min(e.length,h)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const p=t.slice(0,l);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d["ns"])}return{host:t,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}},Ao="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",No=function(){let e=0;const t=[];return function(n){const i=n===e;let r;e=n;const o=new Array(8);for(r=7;r>=0;r--)o[r]=Ao.charAt(n%64),n=Math.floor(n/64);(0,s.vA)(0===n,"Cannot push at time == 0");let a=o.join("");if(i){for(r=11;r>=0&&63===t[r];r--)t[r]=0;t[r]++}else for(r=0;r<12;r++)t[r]=Math.floor(64*Math.random());for(r=0;r<12;r++)a+=Ao.charAt(t[r]);return(0,s.vA)(20===a.length,"nextPushId: Length should be 20."),a}}();
/**
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
 */
class Oo{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,s.As)(this.snapshot.exportVal())}}class xo{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
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
 */class Do{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,s.vA)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
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
 */
/**
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
 */
class Mo{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return yt(this._path)?null:ft(this._path)}get ref(){return new Lo(this._repo,this._path)}get _queryIdentifier(){const e=xn(this._queryParams),t=L(e);return"{}"===t?"default":t}get _queryObject(){return xn(this._queryParams)}isEqual(e){if(e=(0,s.Ku)(e),!(e instanceof Mo))return!1;const t=this._repo===e._repo,n=bt(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+gt(this._path)}}class Lo extends Mo{constructor(e,t){super(e,t,new An,!1)}get parent(){const e=_t(this._path);return null===e?null:new Lo(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class Fo{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new lt(e),n=Uo(this.ref,e);return new Fo(this._node.getChild(t),n,on)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,((t,n)=>e(new Fo(n,Uo(this.ref,t),on))))}hasChild(e){const t=new lt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function jo(e,t){return e=(0,s.Ku)(e),e._checkNotDeleted("ref"),void 0!==t?Uo(e._root,t):e._root}function Uo(e,t){return e=(0,s.Ku)(e),null===ht(e._path)?qs("child","path",t,!1):$s("child","path",t,!1),new Lo(e._repo,vt(e._path,t))}function $o(e,t){e=(0,s.Ku)(e),Ws("push",e._path),js("push",t,e._path,!0);const n=eo(e._repo),i=No(n),r=Uo(e,i),o=Uo(e,i);let a;return a=null!=t?Wo(o,t).then((()=>o)):Promise.resolve(o),r.then=a.then.bind(a),r.catch=a.then.bind(a,void 0),r}function qo(e){return Ws("remove",e._path),Wo(e,null)}function Wo(e,t){e=(0,s.Ku)(e),Ws("set",e._path),js("set",t,e._path,!1);const n=new s.cY;return ao(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}class Vo{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Oo("value",this,new Fo(e.snapshotNode,new Lo(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new xo(this,e,t):null}matches(e){return e instanceof Vo&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Bo{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new xo(this,e,t):null}createEvent(e,t){(0,s.vA)(null!=e.childName,"Child events should have a childName.");const n=Uo(new Lo(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Oo(e.type,this,new Fo(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Bo&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Ho(e,t,n,i,r){let s;if("object"===typeof i&&(s=void 0,r=i),"function"===typeof i&&(s=i),r&&r.onlyOnce){const t=n,i=(n,i)=>{uo(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new Do(n,s||void 0),a="value"===t?new Vo(o):new Bo(t,o);return lo(e._repo,e,a),()=>uo(e._repo,e,a)}function Ko(e,t,n,i){return Ho(e,"value",t,n,i)}Cr(Lo),Lr(Lo);
/**
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
 */
const zo="FIREBASE_DATABASE_EMULATOR_HOST",Go={};let Yo=!1;function Qo(e,t,n,i){e.repoInfo_=new ue(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}function Jo(e,t,n,i,r){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||k("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),C("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=Po(s,r),l=c.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",BASE_URL:"/"}[zo]),a?(o=!0,s=`http://${a}?ns=${l.namespace}`,c=Po(s,r),l=c.repoInfo):o=!c.repoInfo.secure;const u=r&&o?new Z(Z.OWNER):new J(e.name,e.options,t);Vs("Invalid Firebase Database URL",c),yt(c.path)||k("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Xo(l,e,u,new Q(e.name,n));return new ea(h,e)}function Zo(e,t){const n=Go[t];n&&n[e.key]===e||k(`Database ${t}(${e.repoInfo_}) has already been deleted.`),ho(e),delete n[e.key]}function Xo(e,t,n,i){let r=Go[t.name];r||(r={},Go[t.name]=r);let s=r[e.toURLString()];return s&&k("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Zs(e,Yo,n,i),r[e.toURLString()]=s,s}class ea{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Xs(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Lo(this._repo,ut())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Zo(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&k("Cannot call "+e+" on a deleted database.")}}function ta(e=(0,i.Sx)(),t){const n=(0,i.j6)(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=(0,s.yU)("database");e&&na(n,...e)}return n}function na(e,t,n,i={}){e=(0,s.Ku)(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&k("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&k('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Z(Z.OWNER);else if(i.mockUserToken){const t="string"===typeof i.mockUserToken?i.mockUserToken:(0,s.Fy)(i.mockUserToken,e.app.options.projectId);o=new Z(t)}Qo(r,t,n,o)}
/**
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
 */
function ia(e){u(i.MF),(0,i.om)(new r.uA("database",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Jo(n,i,r,t)}),"PUBLIC").setMultipleInstances(!0)),(0,i.KO)(a,c,e),(0,i.KO)(a,c,"esm2017")}
/**
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
 */const ra={".sv":"timestamp"};function sa(){return ra}Lt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Lt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};ia()},953:(e,t,n)=>{n.d(t,{C4:()=>T,EW:()=>Fe,Gc:()=>_e,IG:()=>Ee,IJ:()=>Ae,KR:()=>Re,Kh:()=>me,Pr:()=>Me,R1:()=>xe,Tm:()=>be,X2:()=>l,a1:()=>Se,bl:()=>E,fE:()=>Ie,g8:()=>we,hV:()=>Ve,hZ:()=>L,i9:()=>Pe,ju:()=>Ce,lJ:()=>ke,qA:()=>j,u4:()=>M,ux:()=>Te,wB:()=>We,yC:()=>o});var i=n(33);
/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let r,s;class o{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=r,!e&&r&&(this.index=(r.scopes||(r.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let e,t;if(this._isPaused=!0,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){let e,t;if(this._isPaused=!1,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=r;try{return r=this,e()}finally{r=t}}else 0}on(){1===++this._on&&(this.prevScope=r,r=this)}off(){this._on>0&&0===--this._on&&(r=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){let t,n;for(this._active=!1,t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}}function a(){return r}const c=new WeakSet;class l{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,r&&r.active&&r.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,c.has(this)&&(c.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||p(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,k(this),m(this);const e=s,t=I;s=this,I=!0;try{return this.fn()}finally{0,_(this),s=e,I=t,this.flags&=-3}}stop(){if(1&this.flags){for(let e=this.deps;e;e=e.nextDep)w(e);this.deps=this.depsTail=void 0,k(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?c.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){v(this)&&this.run()}get dirty(){return v(this)}}let u,h,d=0;function p(e,t=!1){if(e.flags|=8,t)return e.next=h,void(h=e);e.next=u,u=e}function f(){d++}function g(){if(--d>0)return;if(h){let e=h;h=void 0;while(e){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;while(u){let n=u;u=void 0;while(n){const i=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(t){e||(e=t)}n=i}}if(e)throw e}function m(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function _(e){let t,n=e.depsTail,i=n;while(i){const e=i.prevDep;-1===i.version?(i===n&&(n=e),w(i),b(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=e}e.deps=t,e.depsTail=n}function v(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(y(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function y(e){if(4&e.flags&&!(16&e.flags))return;if(e.flags&=-17,e.globalVersion===S)return;if(e.globalVersion=S,!e.isSSR&&128&e.flags&&(!e.deps&&!e._dirty||!v(e)))return;e.flags|=2;const t=e.dep,n=s,r=I;s=e,I=!0;try{m(e);const n=e.fn(e._value);(0===t.version||(0,i.$H)(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(o){throw t.version++,o}finally{s=n,I=r,_(e),e.flags&=-3}}function w(e,t=!1){const{dep:n,prevSub:i,nextSub:r}=e;if(i&&(i.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=i,e.nextSub=void 0),n.subs===e&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)w(e,!0)}t||--n.sc||!n.map||n.map.delete(n.key)}function b(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let I=!0;const C=[];function T(){C.push(I),I=!1}function E(){const e=C.pop();I=void 0===e||e}function k(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const e=s;s=void 0;try{t()}finally{s=e}}}let S=0;class P{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class R{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!s||!I||s===this.computed)return;let t=this.activeLink;if(void 0===t||t.sub!==s)t=this.activeLink=new P(s,this),s.deps?(t.prevDep=s.depsTail,s.depsTail.nextDep=t,s.depsTail=t):s.deps=s.depsTail=t,A(t);else if(-1===t.version&&(t.version=this.version,t.nextDep)){const e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=s.depsTail,t.nextDep=void 0,s.depsTail.nextDep=t,s.depsTail=t,s.deps===t&&(s.deps=e)}return t}trigger(e){this.version++,S++,this.notify(e)}notify(e){f();try{0;for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{g()}}}function A(e){if(e.dep.sc++,4&e.sub.flags){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)A(e)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const N=new WeakMap,O=Symbol(""),x=Symbol(""),D=Symbol("");function M(e,t,n){if(I&&s){let t=N.get(e);t||N.set(e,t=new Map);let i=t.get(n);i||(t.set(n,i=new R),i.map=t,i.key=n),i.track()}}function L(e,t,n,r,s,o){const a=N.get(e);if(!a)return void S++;const c=e=>{e&&e.trigger()};if(f(),"clear"===t)a.forEach(c);else{const s=(0,i.cy)(e),o=s&&(0,i.yI)(n);if(s&&"length"===n){const e=Number(r);a.forEach(((t,n)=>{("length"===n||n===D||!(0,i.Bm)(n)&&n>=e)&&c(t)}))}else switch((void 0!==n||a.has(void 0))&&c(a.get(n)),o&&c(a.get(D)),t){case"add":s?o&&c(a.get("length")):(c(a.get(O)),(0,i.CE)(e)&&c(a.get(x)));break;case"delete":s||(c(a.get(O)),(0,i.CE)(e)&&c(a.get(x)));break;case"set":(0,i.CE)(e)&&c(a.get(O));break}}g()}function F(e){const t=Te(e);return t===e?t:(M(t,"iterate",D),Ie(e)?t:t.map(ke))}function j(e){return M(e=Te(e),"iterate",D),e}const U={__proto__:null,[Symbol.iterator](){return $(this,Symbol.iterator,ke)},concat(...e){return F(this).concat(...e.map((e=>(0,i.cy)(e)?F(e):e)))},entries(){return $(this,"entries",(e=>(e[1]=ke(e[1]),e)))},every(e,t){return W(this,"every",e,t,void 0,arguments)},filter(e,t){return W(this,"filter",e,t,(e=>e.map(ke)),arguments)},find(e,t){return W(this,"find",e,t,ke,arguments)},findIndex(e,t){return W(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return W(this,"findLast",e,t,ke,arguments)},findLastIndex(e,t){return W(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return W(this,"forEach",e,t,void 0,arguments)},includes(...e){return B(this,"includes",e)},indexOf(...e){return B(this,"indexOf",e)},join(e){return F(this).join(e)},lastIndexOf(...e){return B(this,"lastIndexOf",e)},map(e,t){return W(this,"map",e,t,void 0,arguments)},pop(){return H(this,"pop")},push(...e){return H(this,"push",e)},reduce(e,...t){return V(this,"reduce",e,t)},reduceRight(e,...t){return V(this,"reduceRight",e,t)},shift(){return H(this,"shift")},some(e,t){return W(this,"some",e,t,void 0,arguments)},splice(...e){return H(this,"splice",e)},toReversed(){return F(this).toReversed()},toSorted(e){return F(this).toSorted(e)},toSpliced(...e){return F(this).toSpliced(...e)},unshift(...e){return H(this,"unshift",e)},values(){return $(this,"values",ke)}};function $(e,t,n){const i=j(e),r=i[t]();return i===e||Ie(e)||(r._next=r.next,r.next=()=>{const e=r._next();return e.value&&(e.value=n(e.value)),e}),r}const q=Array.prototype;function W(e,t,n,i,r,s){const o=j(e),a=o!==e&&!Ie(e),c=o[t];if(c!==q[t]){const t=c.apply(e,s);return a?ke(t):t}let l=n;o!==e&&(a?l=function(t,i){return n.call(this,ke(t),i,e)}:n.length>2&&(l=function(t,i){return n.call(this,t,i,e)}));const u=c.call(o,l,i);return a&&r?r(u):u}function V(e,t,n,i){const r=j(e);let s=n;return r!==e&&(Ie(e)?n.length>3&&(s=function(t,i,r){return n.call(this,t,i,r,e)}):s=function(t,i,r){return n.call(this,t,ke(i),r,e)}),r[t](s,...i)}function B(e,t,n){const i=Te(e);M(i,"iterate",D);const r=i[t](...n);return-1!==r&&!1!==r||!Ce(n[0])?r:(n[0]=Te(n[0]),i[t](...n))}function H(e,t,n=[]){T(),f();const i=Te(e)[t].apply(e,n);return g(),E(),i}const K=(0,i.pD)("__proto__,__v_isRef,__isVue"),z=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(i.Bm));function G(e){(0,i.Bm)(e)||(e=String(e));const t=Te(this);return M(t,"has",e),t.hasOwnProperty(e)}class Y{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if("__v_skip"===t)return e["__v_skip"];const r=this._isReadonly,s=this._isShallow;if("__v_isReactive"===t)return!r;if("__v_isReadonly"===t)return r;if("__v_isShallow"===t)return s;if("__v_raw"===t)return n===(r?s?pe:de:s?he:ue).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=(0,i.cy)(e);if(!r){let e;if(o&&(e=U[t]))return e;if("hasOwnProperty"===t)return G}const a=Reflect.get(e,t,Pe(e)?e:n);return((0,i.Bm)(t)?z.has(t):K(t))?a:(r||M(e,"get",t),s?a:Pe(a)?o&&(0,i.yI)(t)?a:a.value:(0,i.Gv)(a)?r?ve(a):me(a):a)}}class Q extends Y{constructor(e=!1){super(!1,e)}set(e,t,n,r){let s=e[t];if(!this._isShallow){const t=be(s);if(Ie(n)||be(n)||(s=Te(s),n=Te(n)),!(0,i.cy)(e)&&Pe(s)&&!Pe(n))return!t&&(s.value=n,!0)}const o=(0,i.cy)(e)&&(0,i.yI)(t)?Number(t)<e.length:(0,i.$3)(e,t),a=Reflect.set(e,t,n,Pe(e)?e:r);return e===Te(r)&&(o?(0,i.$H)(n,s)&&L(e,"set",t,n,s):L(e,"add",t,n)),a}deleteProperty(e,t){const n=(0,i.$3)(e,t),r=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&L(e,"delete",t,void 0,r),s}has(e,t){const n=Reflect.has(e,t);return(0,i.Bm)(t)&&z.has(t)||M(e,"has",t),n}ownKeys(e){return M(e,"iterate",(0,i.cy)(e)?"length":O),Reflect.ownKeys(e)}}class J extends Y{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Z=new Q,X=new J,ee=new Q(!0),te=e=>e,ne=e=>Reflect.getPrototypeOf(e);function ie(e,t,n){return function(...r){const s=this["__v_raw"],o=Te(s),a=(0,i.CE)(o),c="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=s[e](...r),h=n?te:t?Se:ke;return!t&&M(o,"iterate",l?x:O),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function re(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function se(e,t){const n={get(n){const r=this["__v_raw"],s=Te(r),o=Te(n);e||((0,i.$H)(n,o)&&M(s,"get",n),M(s,"get",o));const{has:a}=ne(s),c=t?te:e?Se:ke;return a.call(s,n)?c(r.get(n)):a.call(s,o)?c(r.get(o)):void(r!==s&&r.get(n))},get size(){const t=this["__v_raw"];return!e&&M(Te(t),"iterate",O),Reflect.get(t,"size",t)},has(t){const n=this["__v_raw"],r=Te(n),s=Te(t);return e||((0,i.$H)(t,s)&&M(r,"has",t),M(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)},forEach(n,i){const r=this,s=r["__v_raw"],o=Te(s),a=t?te:e?Se:ke;return!e&&M(o,"iterate",O),s.forEach(((e,t)=>n.call(i,a(e),a(t),r)))}};(0,i.X$)(n,e?{add:re("add"),set:re("set"),delete:re("delete"),clear:re("clear")}:{add(e){t||Ie(e)||be(e)||(e=Te(e));const n=Te(this),i=ne(n),r=i.has.call(n,e);return r||(n.add(e),L(n,"add",e,e)),this},set(e,n){t||Ie(n)||be(n)||(n=Te(n));const r=Te(this),{has:s,get:o}=ne(r);let a=s.call(r,e);a||(e=Te(e),a=s.call(r,e));const c=o.call(r,e);return r.set(e,n),a?(0,i.$H)(n,c)&&L(r,"set",e,n,c):L(r,"add",e,n),this},delete(e){const t=Te(this),{has:n,get:i}=ne(t);let r=n.call(t,e);r||(e=Te(e),r=n.call(t,e));const s=i?i.call(t,e):void 0,o=t.delete(e);return r&&L(t,"delete",e,void 0,s),o},clear(){const e=Te(this),t=0!==e.size,n=void 0,i=e.clear();return t&&L(e,"clear",void 0,void 0,n),i}});const r=["keys","values","entries",Symbol.iterator];return r.forEach((i=>{n[i]=ie(i,e,t)})),n}function oe(e,t){const n=se(e,t);return(t,r,s)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get((0,i.$3)(n,r)&&r in t?n:t,r,s)}const ae={get:oe(!1,!1)},ce={get:oe(!1,!0)},le={get:oe(!0,!1)};const ue=new WeakMap,he=new WeakMap,de=new WeakMap,pe=new WeakMap;function fe(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ge(e){return e["__v_skip"]||!Object.isExtensible(e)?0:fe((0,i.Zf)(e))}function me(e){return be(e)?e:ye(e,!1,Z,ae,ue)}function _e(e){return ye(e,!1,ee,ce,he)}function ve(e){return ye(e,!0,X,le,de)}function ye(e,t,n,r,s){if(!(0,i.Gv)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=ge(e);if(0===o)return e;const a=s.get(e);if(a)return a;const c=new Proxy(e,2===o?r:n);return s.set(e,c),c}function we(e){return be(e)?we(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function be(e){return!(!e||!e["__v_isReadonly"])}function Ie(e){return!(!e||!e["__v_isShallow"])}function Ce(e){return!!e&&!!e["__v_raw"]}function Te(e){const t=e&&e["__v_raw"];return t?Te(t):e}function Ee(e){return!(0,i.$3)(e,"__v_skip")&&Object.isExtensible(e)&&(0,i.yQ)(e,"__v_skip",!0),e}const ke=e=>(0,i.Gv)(e)?me(e):e,Se=e=>(0,i.Gv)(e)?ve(e):e;function Pe(e){return!!e&&!0===e["__v_isRef"]}function Re(e){return Ne(e,!1)}function Ae(e){return Ne(e,!0)}function Ne(e,t){return Pe(e)?e:new Oe(e,t)}class Oe{constructor(e,t){this.dep=new R,this["__v_isRef"]=!0,this["__v_isShallow"]=!1,this._rawValue=t?e:Te(e),this._value=t?e:ke(e),this["__v_isShallow"]=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this["__v_isShallow"]||Ie(e)||be(e);e=n?e:Te(e),(0,i.$H)(e,t)&&(this._rawValue=e,this._value=n?e:ke(e),this.dep.trigger())}}function xe(e){return Pe(e)?e.value:e}const De={get:(e,t,n)=>"__v_raw"===t?e:xe(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const r=e[t];return Pe(r)&&!Pe(n)?(r.value=n,!0):Reflect.set(e,t,n,i)}};function Me(e){return we(e)?e:new Proxy(e,De)}class Le{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new R(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=S-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!t,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||s===this))return p(this,!0),!0}get value(){const e=this.dep.track();return y(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Fe(e,t,n=!1){let r,s;(0,i.Tn)(e)?r=e:(r=e.get,s=e.set);const o=new Le(r,s,n);return o}const je={},Ue=new WeakMap;let $e;function qe(e,t=!1,n=$e){if(n){let t=Ue.get(n);t||Ue.set(n,t=[]),t.push(e)}else 0}function We(e,t,n=i.MZ){const{immediate:r,deep:s,once:o,scheduler:c,augmentJob:u,call:h}=n,d=e=>s?e:Ie(e)||!1===s||0===s?Ve(e,1):Ve(e);let p,f,g,m,_=!1,v=!1;if(Pe(e)?(f=()=>e.value,_=Ie(e)):we(e)?(f=()=>d(e),_=!0):(0,i.cy)(e)?(v=!0,_=e.some((e=>we(e)||Ie(e))),f=()=>e.map((e=>Pe(e)?e.value:we(e)?d(e):(0,i.Tn)(e)?h?h(e,2):e():void 0))):f=(0,i.Tn)(e)?t?h?()=>h(e,2):e:()=>{if(g){T();try{g()}finally{E()}}const t=$e;$e=p;try{return h?h(e,3,[m]):e(m)}finally{$e=t}}:i.tE,t&&s){const e=f,t=!0===s?1/0:s;f=()=>Ve(e(),t)}const y=a(),w=()=>{p.stop(),y&&y.active&&(0,i.TF)(y.effects,p)};if(o&&t){const e=t;t=(...t)=>{e(...t),w()}}let b=v?new Array(e.length).fill(je):je;const I=e=>{if(1&p.flags&&(p.dirty||e))if(t){const e=p.run();if(s||_||(v?e.some(((e,t)=>(0,i.$H)(e,b[t]))):(0,i.$H)(e,b))){g&&g();const n=$e;$e=p;try{const n=[e,b===je?void 0:v&&b[0]===je?[]:b,m];b=e,h?h(t,3,n):t(...n)}finally{$e=n}}}else p.run()};return u&&u(I),p=new l(f),p.scheduler=c?()=>c(I,!1):I,m=e=>qe(e,!1,p),g=p.onStop=()=>{const e=Ue.get(p);if(e){if(h)h(e,4);else for(const t of e)t();Ue.delete(p)}},t?r?I(!0):b=p.run():c?c(I.bind(null,!0),!0):p.run(),w.pause=p.pause.bind(p),w.resume=p.resume.bind(p),w.stop=w,w}function Ve(e,t=1/0,n){if(t<=0||!(0,i.Gv)(e)||e["__v_skip"])return e;if(n=n||new Set,n.has(e))return e;if(n.add(e),t--,Pe(e))Ve(e.value,t,n);else if((0,i.cy)(e))for(let i=0;i<e.length;i++)Ve(e[i],t,n);else if((0,i.vM)(e)||(0,i.CE)(e))e.forEach((e=>{Ve(e,t,n)}));else if((0,i.Qd)(e)){for(const i in e)Ve(e[i],t,n);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&Ve(e[i],t,n)}return e}}}]);
//# sourceMappingURL=chunk-vendors.6b9d703e.js.map