function Zt(){}function fa(e,t){for(const n in t)e[n]=t[n];return e}function ga(e){return e&&typeof e=="object"&&typeof e.then=="function"}function gr(e){return e()}function gi(){return Object.create(null)}function me(e){e.forEach(gr)}function pa(e){return typeof e=="function"}function ma(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ya(e){return Object.keys(e).length===0}function wd(e,t,n,s){if(e){const i=pr(e,t,n,s);return e[0](i)}}function pr(e,t,n,s){return e[1]&&s?fa(n.ctx.slice(),e[1](s(t))):n.ctx}function Ed(e,t,n,s){if(e[2]&&s){const i=e[2](s(n));if(t.dirty===void 0)return i;if(typeof i=="object"){const r=[],o=Math.max(t.dirty.length,i.length);for(let a=0;a<o;a+=1)r[a]=t.dirty[a]|i[a];return r}return t.dirty|i}return t.dirty}function Td(e,t,n,s,i,r){if(i){const o=pr(t,n,s,r);e.p(o,i)}}function Id(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let s=0;s<n;s++)t[s]=-1;return t}return-1}let on=!1;function va(){on=!0}function wa(){on=!1}function Ea(e,t,n,s){for(;e<t;){const i=e+(t-e>>1);n(i)<=s?e=i+1:t=i}return e}function Ta(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const c=[];for(let h=0;h<t.length;h++){const u=t[h];u.claim_order!==void 0&&c.push(u)}t=c}const n=new Int32Array(t.length+1),s=new Int32Array(t.length);n[0]=-1;let i=0;for(let c=0;c<t.length;c++){const h=t[c].claim_order,u=(i>0&&t[n[i]].claim_order<=h?i+1:Ea(1,i,p=>t[n[p]].claim_order,h))-1;s[c]=n[u]+1;const l=u+1;n[l]=c,i=Math.max(l,i)}const r=[],o=[];let a=t.length-1;for(let c=n[i]+1;c!=0;c=s[c-1]){for(r.push(t[c-1]);a>=c;a--)o.push(t[a]);a--}for(;a>=0;a--)o.push(t[a]);r.reverse(),o.sort((c,h)=>c.claim_order-h.claim_order);for(let c=0,h=0;c<o.length;c++){for(;h<r.length&&o[c].claim_order>=r[h].claim_order;)h++;const u=h<r.length?r[h]:null;e.insertBefore(o[c],u)}}function Ia(e,t){if(on){for(Ta(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function Cd(e,t,n){on&&!n?Ia(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function Ca(e){e.parentNode.removeChild(e)}function Sd(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function Sa(e){return document.createElement(e)}function Ts(e){return document.createTextNode(e)}function Ad(){return Ts(" ")}function _d(){return Ts("")}function Nd(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function kd(e){return function(t){return t.preventDefault(),e.call(this,t)}}function bd(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Aa(e){return Array.from(e.childNodes)}function _a(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function mr(e,t,n,s,i=!1){_a(e);const r=(()=>{for(let o=e.claim_info.last_index;o<e.length;o++){const a=e[o];if(t(a)){const c=n(a);return c===void 0?e.splice(o,1):e[o]=c,i||(e.claim_info.last_index=o),a}}for(let o=e.claim_info.last_index-1;o>=0;o--){const a=e[o];if(t(a)){const c=n(a);return c===void 0?e.splice(o,1):e[o]=c,i?c===void 0&&e.claim_info.last_index--:e.claim_info.last_index=o,a}}return s()})();return r.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,r}function Na(e,t,n,s){return mr(e,i=>i.nodeName===t,i=>{const r=[];for(let o=0;o<i.attributes.length;o++){const a=i.attributes[o];n[a.name]||r.push(a.name)}r.forEach(o=>i.removeAttribute(o))},()=>s(t))}function Dd(e,t,n){return Na(e,t,n,Sa)}function ka(e,t){return mr(e,n=>n.nodeType===3,n=>{const s=""+t;if(n.data.startsWith(s)){if(n.data.length!==s.length)return n.splitText(s.length)}else n.data=s},()=>Ts(t),!0)}function Rd(e){return ka(e," ")}function xd(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Ld(e,t){e.value=t==null?"":t}function Od(e,t,n,s){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,s?"important":"")}let ie;function rt(e){ie=e}function an(){if(!ie)throw new Error("Function called outside component initialization");return ie}function Md(e){an().$$.on_mount.push(e)}function Pd(e){an().$$.after_update.push(e)}function Vd(e,t){an().$$.context.set(e,t)}const Xt=[],pi=[],Ve=[],mi=[],yr=Promise.resolve();let zn=!1;function vr(){zn||(zn=!0,yr.then(Is))}function Fd(){return vr(),yr}function Hn(e){Ve.push(e)}const Rn=new Set;let Re=0;function Is(){const e=ie;do{for(;Re<Xt.length;){const t=Xt[Re];Re++,rt(t),ba(t.$$)}for(rt(null),Xt.length=0,Re=0;pi.length;)pi.pop()();for(let t=0;t<Ve.length;t+=1){const n=Ve[t];Rn.has(n)||(Rn.add(n),n())}Ve.length=0}while(Xt.length);for(;mi.length;)mi.pop()();zn=!1,Rn.clear(),rt(e)}function ba(e){if(e.fragment!==null){e.update(),me(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Hn)}}const Fe=new Set;let gt;function Da(){gt={r:0,c:[],p:gt}}function Ra(){gt.r||me(gt.c),gt=gt.p}function wr(e,t){e&&e.i&&(Fe.delete(e),e.i(t))}function xa(e,t,n,s){if(e&&e.o){if(Fe.has(e))return;Fe.add(e),gt.c.push(()=>{Fe.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}}function Ud(e,t){const n=t.token={};function s(i,r,o,a){if(t.token!==n)return;t.resolved=a;let c=t.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const h=i&&(t.current=i)(c);let u=!1;t.block&&(t.blocks?t.blocks.forEach((l,p)=>{p!==r&&l&&(Da(),xa(l,1,1,()=>{t.blocks[p]===l&&(t.blocks[p]=null)}),Ra())}):t.block.d(1),h.c(),wr(h,1),h.m(t.mount(),t.anchor),u=!0),t.block=h,t.blocks&&(t.blocks[r]=h),u&&Is()}if(ga(e)){const i=an();if(e.then(r=>{rt(i),s(t.then,1,t.value,r),rt(null)},r=>{if(rt(i),s(t.catch,2,t.error,r),rt(null),!t.hasCatch)throw r}),t.current!==t.pending)return s(t.pending,0),!0}else{if(t.current!==t.then)return s(t.then,1,t.value,e),!0;t.resolved=e}}function $d(e,t,n){const s=t.slice(),{resolved:i}=e;e.current===e.then&&(s[e.value]=i),e.current===e.catch&&(s[e.error]=i),e.block.p(s,n)}function qd(e,t){const n={},s={},i={$$scope:1};let r=e.length;for(;r--;){const o=e[r],a=t[r];if(a){for(const c in o)c in a||(s[c]=1);for(const c in a)i[c]||(n[c]=a[c],i[c]=1);e[r]=a}else for(const c in o)i[c]=1}for(const o in s)o in n||(n[o]=void 0);return n}function jd(e){return typeof e=="object"&&e!==null?e:{}}function Bd(e){e&&e.c()}function Kd(e,t){e&&e.l(t)}function La(e,t,n,s){const{fragment:i,on_mount:r,on_destroy:o,after_update:a}=e.$$;i&&i.m(t,n),s||Hn(()=>{const c=r.map(gr).filter(pa);o?o.push(...c):me(c),e.$$.on_mount=[]}),a.forEach(Hn)}function Oa(e,t){const n=e.$$;n.fragment!==null&&(me(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ma(e,t){e.$$.dirty[0]===-1&&(Xt.push(e),vr(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function zd(e,t,n,s,i,r,o,a=[-1]){const c=ie;rt(e);const h=e.$$={fragment:null,ctx:null,props:r,update:Zt,not_equal:i,bound:gi(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:gi(),dirty:a,skip_bound:!1,root:t.target||c.$$.root};o&&o(h.root);let u=!1;if(h.ctx=n?n(e,t.props||{},(l,p,...y)=>{const T=y.length?y[0]:p;return h.ctx&&i(h.ctx[l],h.ctx[l]=T)&&(!h.skip_bound&&h.bound[l]&&h.bound[l](T),u&&Ma(e,l)),p}):[],h.update(),u=!0,me(h.before_update),h.fragment=s?s(h.ctx):!1,t.target){if(t.hydrate){va();const l=Aa(t.target);h.fragment&&h.fragment.l(l),l.forEach(Ca)}else h.fragment&&h.fragment.c();t.intro&&wr(e.$$.fragment),La(e,t.target,t.anchor,t.customElement),wa(),Is()}rt(c)}class Hd{$destroy(){Oa(this,1),this.$destroy=Zt}$on(t,n){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(t){this.$$set&&!ya(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const _t=[];function Gd(e,t=Zt){let n;const s=new Set;function i(a){if(ma(e,a)&&(e=a,n)){const c=!_t.length;for(const h of s)h[1](),_t.push(h,e);if(c){for(let h=0;h<_t.length;h+=2)_t[h][0](_t[h+1]);_t.length=0}}}function r(a){i(a(e))}function o(a,c=Zt){const h=[a,c];return s.add(h),s.size===1&&(n=t(i)||Zt),a(e),()=>{s.delete(h),s.size===0&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}/**
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
 */class Pa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function cn(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Va(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(cn())}function Fa(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Ua(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $a(){return cn().indexOf("Electron/")>=0}function qa(){const e=cn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function ja(){return cn().indexOf("MSAppHost/")>=0}/**
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
 */const Ba="FirebaseError";class hn extends Error{constructor(t,n,s){super(n);this.code=t,this.customData=s,this.name=Ba,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Er.prototype.create)}}class Er{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?Ka(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new hn(i,a,s)}}function Ka(e,t){return e.replace(za,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const za=/\{\$([^}]+)}/g;function Gn(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(yi(r)&&yi(o)){if(!Gn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function yi(e){return e!==null&&typeof e=="object"}/**
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
 */function Tr(e){return e&&e._delegate?e._delegate:e}class un{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ft="[DEFAULT]";/**
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
 */class Ha{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Pa;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Wa(t))try{this.getOrInitializeService({instanceIdentifier:ft})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=ft){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ft){return this.instances.has(t)}getOptions(t=ft){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ga(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=ft){return this.component?this.component.multipleInstances?t:ft:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ga(e){return e===ft?void 0:e}function Wa(e){return e.instantiationMode==="EAGER"}/**
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
 */class Qa{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Ha(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(_||(_={}));const Xa={debug:_.DEBUG,verbose:_.VERBOSE,info:_.INFO,warn:_.WARN,error:_.ERROR,silent:_.SILENT},Ya=_.INFO,Ja={[_.DEBUG]:"log",[_.VERBOSE]:"log",[_.INFO]:"info",[_.WARN]:"warn",[_.ERROR]:"error"},Za=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=Ja[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ir{constructor(t){this.name=t,this._logLevel=Ya,this._logHandler=Za,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in _))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Xa[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,_.DEBUG,...t),this._logHandler(this,_.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,_.VERBOSE,...t),this._logHandler(this,_.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,_.INFO,...t),this._logHandler(this,_.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,_.WARN,...t),this._logHandler(this,_.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,_.ERROR,...t),this._logHandler(this,_.ERROR,...t)}}/**
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
 */class tc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ec(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ec(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Wn="@firebase/app",vi="0.7.17";/**
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
 */const Cs=new Ir("@firebase/app"),nc="@firebase/app-compat",sc="@firebase/analytics-compat",ic="@firebase/analytics",rc="@firebase/app-check-compat",oc="@firebase/app-check",ac="@firebase/auth",cc="@firebase/auth-compat",hc="@firebase/database",uc="@firebase/database-compat",lc="@firebase/functions",dc="@firebase/functions-compat",fc="@firebase/installations",gc="@firebase/installations-compat",pc="@firebase/messaging",mc="@firebase/messaging-compat",yc="@firebase/performance",vc="@firebase/performance-compat",wc="@firebase/remote-config",Ec="@firebase/remote-config-compat",Tc="@firebase/storage",Ic="@firebase/storage-compat",Cc="@firebase/firestore",Sc="@firebase/firestore-compat",Ac="firebase",_c="9.6.7";/**
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
 */const Cr="[DEFAULT]",Nc={[Wn]:"fire-core",[nc]:"fire-core-compat",[ic]:"fire-analytics",[sc]:"fire-analytics-compat",[oc]:"fire-app-check",[rc]:"fire-app-check-compat",[ac]:"fire-auth",[cc]:"fire-auth-compat",[hc]:"fire-rtdb",[uc]:"fire-rtdb-compat",[lc]:"fire-fn",[dc]:"fire-fn-compat",[fc]:"fire-iid",[gc]:"fire-iid-compat",[pc]:"fire-fcm",[mc]:"fire-fcm-compat",[yc]:"fire-perf",[vc]:"fire-perf-compat",[wc]:"fire-rc",[Ec]:"fire-rc-compat",[Tc]:"fire-gcs",[Ic]:"fire-gcs-compat",[Cc]:"fire-fst",[Sc]:"fire-fst-compat","fire-js":"fire-js",[Ac]:"fire-js-all"};/**
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
 */const Be=new Map,Qn=new Map;function kc(e,t){try{e.container.addComponent(t)}catch(n){Cs.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ss(e){const t=e.name;if(Qn.has(t))return Cs.debug(`There were multiple attempts to register component ${t}.`),!1;Qn.set(t,e);for(const n of Be.values())kc(n,e);return!0}function bc(e,t){return e.container.getProvider(t)}/**
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
 */const Dc={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Ke=new Er("app","Firebase",Dc);/**
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
 */class Rc{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ke.create("app-deleted",{appName:this._name})}}/**
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
 */const xc=_c;function Wd(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:Cr,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw Ke.create("bad-app-name",{appName:String(s)});const i=Be.get(s);if(i){if(Gn(e,i.options)&&Gn(n,i.config))return i;throw Ke.create("duplicate-app",{appName:s})}const r=new Qa(s);for(const a of Qn.values())r.addComponent(a);const o=new Rc(e,n,r);return Be.set(s,o),o}function Lc(e=Cr){const t=Be.get(e);if(!t)throw Ke.create("no-app",{appName:e});return t}function Dt(e,t,n){var s;let i=(s=Nc[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Cs.warn(a.join(" "));return}Ss(new un(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */function Oc(e){Ss(new un("platform-logger",t=>new tc(t),"PRIVATE")),Dt(Wn,vi,e),Dt(Wn,vi,"esm2017"),Dt("fire-js","")}Oc("");var Mc="firebase",Pc="9.6.7";/**
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
 */Dt(Mc,Pc,"app");var Vc=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},g,As=As||{},v=Vc||self;function ze(){}function Xn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function ye(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Fc(e){return Object.prototype.hasOwnProperty.call(e,xn)&&e[xn]||(e[xn]=++Uc)}var xn="closure_uid_"+(1e9*Math.random()>>>0),Uc=0;function $c(e,t,n){return e.call.apply(e.bind,arguments)}function qc(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function $(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?$=$c:$=qc,$.apply(null,arguments)}function xe(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function z(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function lt(){this.s=this.s,this.o=this.o}var jc=0,Bc={};lt.prototype.s=!1;lt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),jc!=0)){var e=Fc(this);delete Bc[e]}};lt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Sr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Ar=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,i=typeof e=="string"?e.split(""):e;for(let r=0;r<s;r++)r in i&&t.call(n,i[r],r,e)};function Kc(e){t:{var t=Mh;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let i=0;i<n;i++)if(i in s&&t.call(void 0,s[i],i,e)){t=i;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function wi(e){return Array.prototype.concat.apply([],arguments)}function _s(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function He(e){return/^[\s\xa0]*$/.test(e)}var Ei=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function W(e,t){return e.indexOf(t)!=-1}function Ln(e,t){return e<t?-1:e>t?1:0}var Q;t:{var Ti=v.navigator;if(Ti){var Ii=Ti.userAgent;if(Ii){Q=Ii;break t}}Q=""}function Ns(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function _r(e){const t={};for(const n in e)t[n]=e[n];return t}var Ci="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Nr(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<Ci.length;r++)n=Ci[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function ks(e){return ks[" "](e),e}ks[" "]=ze;function zc(e){var t=Wc;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Hc=W(Q,"Opera"),Mt=W(Q,"Trident")||W(Q,"MSIE"),kr=W(Q,"Edge"),Yn=kr||Mt,br=W(Q,"Gecko")&&!(W(Q.toLowerCase(),"webkit")&&!W(Q,"Edge"))&&!(W(Q,"Trident")||W(Q,"MSIE"))&&!W(Q,"Edge"),Gc=W(Q.toLowerCase(),"webkit")&&!W(Q,"Edge");function Dr(){var e=v.document;return e?e.documentMode:void 0}var Ge;t:{var On="",Mn=function(){var e=Q;if(br)return/rv:([^\);]+)(\)|;)/.exec(e);if(kr)return/Edge\/([\d\.]+)/.exec(e);if(Mt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Gc)return/WebKit\/(\S+)/.exec(e);if(Hc)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Mn&&(On=Mn?Mn[1]:""),Mt){var Pn=Dr();if(Pn!=null&&Pn>parseFloat(On)){Ge=String(Pn);break t}}Ge=On}var Wc={};function Qc(){return zc(function(){let e=0;const t=Ei(String(Ge)).split("."),n=Ei("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=Ln(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Ln(i[2].length==0,r[2].length==0)||Ln(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var Jn;if(v.document&&Mt){var Si=Dr();Jn=Si||parseInt(Ge,10)||void 0}else Jn=void 0;var Xc=Jn,Yc=function(){if(!v.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{v.addEventListener("test",ze,t),v.removeEventListener("test",ze,t)}catch{}return e}();function G(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}G.prototype.h=function(){this.defaultPrevented=!0};function re(e,t){if(G.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(br){t:{try{ks(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Jc[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&re.Z.h.call(this)}}z(re,G);var Jc={2:"touch",3:"pen",4:"mouse"};re.prototype.h=function(){re.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ve="closure_listenable_"+(1e6*Math.random()|0),Zc=0;function th(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=i,this.key=++Zc,this.ca=this.fa=!1}function ln(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function dn(e){this.src=e,this.g={},this.h=0}dn.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=ts(e,t,s,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new th(t,this.src,r,!!s,i),t.fa=n,e.push(t)),t};function Zn(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=Sr(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(ln(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ts(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ca&&r.listener==t&&r.capture==!!n&&r.ia==s)return i}return-1}var bs="closure_lm_"+(1e6*Math.random()|0),Vn={};function Rr(e,t,n,s,i){if(s&&s.once)return Lr(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Rr(e,t[r],n,s,i);return null}return n=xs(n),e&&e[ve]?e.N(t,n,ye(s)?!!s.capture:!!s,i):xr(e,t,n,!1,s,i)}function xr(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=ye(i)?!!i.capture:!!i,a=Rs(e);if(a||(e[bs]=a=new dn(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=eh(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Yc||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(Mr(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function eh(){function e(n){return t.call(e.src,e.listener,n)}var t=nh;return e}function Lr(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Lr(e,t[r],n,s,i);return null}return n=xs(n),e&&e[ve]?e.O(t,n,ye(s)?!!s.capture:!!s,i):xr(e,t,n,!0,s,i)}function Or(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)Or(e,t[r],n,s,i);else s=ye(s)?!!s.capture:!!s,n=xs(n),e&&e[ve]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=ts(r,n,s,i),-1<n&&(ln(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Rs(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ts(t,n,s,i)),(n=-1<e?t[e]:null)&&Ds(n))}function Ds(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[ve])Zn(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Mr(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Rs(t))?(Zn(n,e),n.h==0&&(n.src=null,t[bs]=null)):ln(e)}}}function Mr(e){return e in Vn?Vn[e]:Vn[e]="on"+e}function nh(e,t){if(e.ca)e=!0;else{t=new re(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&Ds(e),e=n.call(s,t)}return e}function Rs(e){return e=e[bs],e instanceof dn?e:null}var Fn="__closure_events_fn_"+(1e9*Math.random()>>>0);function xs(e){return typeof e=="function"?e:(e[Fn]||(e[Fn]=function(t){return e.handleEvent(t)}),e[Fn])}function F(){lt.call(this),this.i=new dn(this),this.P=this,this.I=null}z(F,lt);F.prototype[ve]=!0;F.prototype.removeEventListener=function(e,t,n,s){Or(this,e,t,n,s)};function q(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new G(t,e);else if(t instanceof G)t.target=t.target||e;else{var i=t;t=new G(s,e),Nr(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=Le(o,s,!0,t)&&i}if(o=t.g=e,i=Le(o,s,!0,t)&&i,i=Le(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=Le(o,s,!1,t)&&i}F.prototype.M=function(){if(F.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)ln(n[s]);delete e.g[t],e.h--}}this.I=null};F.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};F.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Le(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Zn(e.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Ls=v.JSON.stringify;function sh(){var e=Vr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class ih{constructor(){this.h=this.g=null}add(t,n){const s=Pr.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Pr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new rh,e=>e.reset());class rh{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function oh(e){v.setTimeout(()=>{throw e},0)}function Os(e,t){es||ah(),ns||(es(),ns=!0),Vr.add(e,t)}var es;function ah(){var e=v.Promise.resolve(void 0);es=function(){e.then(ch)}}var ns=!1,Vr=new ih;function ch(){for(var e;e=sh();){try{e.h.call(e.g)}catch(n){oh(n)}var t=Pr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ns=!1}function fn(e,t){F.call(this),this.h=e||1,this.g=t||v,this.j=$(this.kb,this),this.l=Date.now()}z(fn,F);g=fn.prototype;g.da=!1;g.S=null;g.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),q(this,"tick"),this.da&&(Ms(this),this.start()))}};g.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ms(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}g.M=function(){fn.Z.M.call(this),Ms(this),delete this.g};function Ps(e,t,n){if(typeof e=="function")n&&(e=$(e,n));else if(e&&typeof e.handleEvent=="function")e=$(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:v.setTimeout(e,t||0)}function Fr(e){e.g=Ps(()=>{e.g=null,e.i&&(e.i=!1,Fr(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class hh extends lt{constructor(t,n){super();this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Fr(this)}M(){super.M(),this.g&&(v.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oe(e){lt.call(this),this.h=e,this.g={}}z(oe,lt);var Ai=[];function Ur(e,t,n,s){Array.isArray(n)||(n&&(Ai[0]=n.toString()),n=Ai);for(var i=0;i<n.length;i++){var r=Rr(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function $r(e){Ns(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ds(t)},e),e.g={}}oe.prototype.M=function(){oe.Z.M.call(this),$r(this)};oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function gn(){this.g=!0}gn.prototype.Aa=function(){this.g=!1};function uh(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var h=a[c].split("=");if(1<h.length){var u=h[0];h=h[1];var l=u.split("_");o=2<=l.length&&l[1]=="type"?o+(u+"="+h+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function lh(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function kt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+fh(e,n)+(s?" "+s:"")})}function dh(e,t){e.info(function(){return"TIMEOUT: "+t})}gn.prototype.info=function(){};function fh(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ls(n)}catch{return t}}var St={},_i=null;function pn(){return _i=_i||new F}St.Ma="serverreachability";function qr(e){G.call(this,St.Ma,e)}z(qr,G);function ae(e){const t=pn();q(t,new qr(t,e))}St.STAT_EVENT="statevent";function jr(e,t){G.call(this,St.STAT_EVENT,e),this.stat=t}z(jr,G);function X(e){const t=pn();q(t,new jr(t,e))}St.Na="timingevent";function Br(e,t){G.call(this,St.Na,e),this.size=t}z(Br,G);function we(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return v.setTimeout(function(){e()},t)}var mn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Kr={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Vs(){}Vs.prototype.h=null;function Ni(e){return e.h||(e.h=e.i())}function zr(){}var Ee={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Fs(){G.call(this,"d")}z(Fs,G);function Us(){G.call(this,"c")}z(Us,G);var ss;function yn(){}z(yn,Vs);yn.prototype.g=function(){return new XMLHttpRequest};yn.prototype.i=function(){return{}};ss=new yn;function Te(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new oe(this),this.P=gh,e=Yn?125:void 0,this.W=new fn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Hr}function Hr(){this.i=null,this.g="",this.h=!1}var gh=45e3,is={},We={};g=Te.prototype;g.setTimeout=function(e){this.P=e};function rs(e,t,n){e.K=1,e.v=wn(at(t)),e.s=n,e.U=!0,Gr(e,null)}function Gr(e,t){e.F=Date.now(),Ie(e),e.A=at(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),to(n.h,"t",s),e.C=0,n=e.l.H,e.h=new Hr,e.g=To(e.l,n?t:null,!e.s),0<e.O&&(e.L=new hh($(e.Ia,e,e.g),e.O)),Ur(e.V,e.g,"readystatechange",e.gb),t=e.H?_r(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ae(1),uh(e.j,e.u,e.A,e.m,e.X,e.s)}g.gb=function(e){e=e.target;const t=this.L;t&&ot(e)==3?t.l():this.Ia(e)};g.Ia=function(e){try{if(e==this.g)t:{const u=ot(this.g);var t=this.g.Da();const l=this.g.ba();if(!(3>u)&&(u!=3||Yn||this.g&&(this.h.h||this.g.ga()||Ri(this.g)))){this.I||u!=4||t==7||(t==8||0>=l?ae(3):ae(2)),vn(this);var n=this.g.ba();this.N=n;e:if(Wr(this)){var s=Ri(this.g);e="";var i=s.length,r=ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){pt(this),te(this);var o="";break e}this.h.i=new v.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,lh(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!He(a)){var h=a;break e}}h=null}if(n=h)kt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,os(this,n);else{this.i=!1,this.o=3,X(12),pt(this),te(this);break t}}this.U?(Qr(this,u,o),Yn&&this.i&&u==3&&(Ur(this.V,this.W,"tick",this.fb),this.W.start())):(kt(this.j,this.m,o,null),os(this,o)),u==4&&pt(this),this.i&&!this.I&&(u==4?yo(this.l,this):(this.i=!1,Ie(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,X(12)):(this.o=0,X(13)),pt(this),te(this)}}}catch{}finally{}};function Wr(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function Qr(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=ph(e,n),i==We){t==4&&(e.o=4,X(14),s=!1),kt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==is){e.o=4,X(15),kt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else kt(e.j,e.m,i,null),os(e,i);Wr(e)&&i!=We&&i!=is&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,X(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ws(t),t.L=!0,X(11))):(kt(e.j,e.m,n,"[Invalid Chunked Response]"),pt(e),te(e))}g.fb=function(){if(this.g){var e=ot(this.g),t=this.g.ga();this.C<t.length&&(vn(this),Qr(this,e,t),this.i&&e!=4&&Ie(this))}};function ph(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?We:(n=Number(t.substring(n,s)),isNaN(n)?is:(s+=1,s+n>t.length?We:(t=t.substr(s,n),e.C=s+n,t)))}g.cancel=function(){this.I=!0,pt(this)};function Ie(e){e.Y=Date.now()+e.P,Xr(e,e.P)}function Xr(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=we($(e.eb,e),t)}function vn(e){e.B&&(v.clearTimeout(e.B),e.B=null)}g.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(dh(this.j,this.A),this.K!=2&&(ae(3),X(17)),pt(this),this.o=2,te(this)):Xr(this,this.Y-e)};function te(e){e.l.G==0||e.I||yo(e.l,e)}function pt(e){vn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Ms(e.W),$r(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function os(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||as(n.i,e))){if(n.I=e.N,!e.J&&as(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0)t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Je(n),In(n);else break t;Gs(n),X(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=we($(n.ab,n),6e3));if(1>=so(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else mt(n,11)}else if((e.J||n.g==e)&&Je(n),!He(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let h=i[t];if(n.U=h[0],h=h[1],n.G==2)if(h[0]=="c"){n.J=h[1],n.la=h[2];const u=h[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const l=h[4];l!=null&&(n.za=l,n.h.info("SVER="+n.za));const p=h[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const y=e.g;if(y){const T=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(T){var r=s.i;!r.g&&(W(T,"spdy")||W(T,"quic")||W(T,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(js(r,r.h),r.h=null))}if(s.D){const R=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(s.sa=R,k(s.F,s.D,R))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=Eo(s,s.H?s.la:null,s.W),o.J){io(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(vn(a),Ie(a)),s.g=o}else po(s);0<n.l.length&&Cn(n)}else h[0]!="stop"&&h[0]!="close"||mt(n,7);else n.G==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?mt(n,7):Hs(n):h[0]!="noop"&&n.j&&n.j.wa(h),n.A=0)}}ae(4)}catch{}}function mh(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(Xn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function $s(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Xn(e)||typeof e=="string")Ar(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(Xn(e)||typeof e=="string"){n=[];for(var s=e.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,e)n[s++]=i;s=mh(e),i=s.length;for(var r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}}function qt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof qt)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}g=qt.prototype;g.R=function(){qs(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};g.T=function(){return qs(this),this.g.concat()};function qs(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];vt(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)s=e.g[t],vt(i,s)||(e.g[n++]=s,i[s]=1),t++;e.g.length=n}}g.get=function(e,t){return vt(this.h,e)?this.h[e]:t};g.set=function(e,t){vt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};g.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);e.call(t,r,i,this)}};function vt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Yr=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function yh(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function wt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof wt){this.g=t!==void 0?t:e.g,Qe(this,e.j),this.s=e.s,Xe(this,e.i),Ye(this,e.m),this.l=e.l,t=e.h;var n=new ce;n.i=t.i,t.g&&(n.g=new qt(t.g),n.h=t.h),ki(this,n),this.o=e.o}else e&&(n=String(e).match(Yr))?(this.g=!!t,Qe(this,n[1]||"",!0),this.s=ee(n[2]||""),Xe(this,n[3]||"",!0),Ye(this,n[4]),this.l=ee(n[5]||"",!0),ki(this,n[6]||"",!0),this.o=ee(n[7]||"")):(this.g=!!t,this.h=new ce(null,this.g))}wt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Yt(t,bi,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Yt(t,bi,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(Yt(n,n.charAt(0)=="/"?Ih:Th,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Yt(n,Sh)),e.join("")};function at(e){return new wt(e)}function Qe(e,t,n){e.j=n?ee(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Xe(e,t,n){e.i=n?ee(t,!0):t}function Ye(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ki(e,t,n){t instanceof ce?(e.h=t,Ah(e.h,e.g)):(n||(t=Yt(t,Ch)),e.h=new ce(t,e.g))}function k(e,t,n){e.h.set(t,n)}function wn(e){return k(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function vh(e){return e instanceof wt?at(e):new wt(e,void 0)}function wh(e,t,n,s){var i=new wt(null,void 0);return e&&Qe(i,e),t&&Xe(i,t),n&&Ye(i,n),s&&(i.l=s),i}function ee(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Yt(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Eh),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Eh(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var bi=/[#\/\?@]/g,Th=/[#\?:]/g,Ih=/[#\?]/g,Ch=/[#\?@]/g,Sh=/#/g;function ce(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function dt(e){e.g||(e.g=new qt,e.h=0,e.i&&yh(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=ce.prototype;g.add=function(e,t){dt(this),this.i=null,e=jt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Jr(e,t){dt(e),t=jt(e,t),vt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,vt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&qs(e)))}function Zr(e,t){return dt(e),t=jt(e,t),vt(e.g.h,t)}g.forEach=function(e,t){dt(this),this.g.forEach(function(n,s){Ar(n,function(i){e.call(t,i,s,this)},this)},this)};g.T=function(){dt(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var i=e[s],r=0;r<i.length;r++)n.push(t[s]);return n};g.R=function(e){dt(this);var t=[];if(typeof e=="string")Zr(this,e)&&(t=wi(t,this.g.get(jt(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=wi(t,e[n])}return t};g.set=function(e,t){return dt(this),this.i=null,e=jt(this,e),Zr(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function to(e,t,n){Jr(e,t),0<n.length&&(e.i=null,e.g.set(jt(e,t),_s(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),e.push(o)}}return this.i=e.join("&")};function jt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Ah(e,t){t&&!e.j&&(dt(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Jr(this,s),to(this,i,n))},e)),e.j=t}var _h=class{constructor(e,t){this.h=e,this.g=t}};function eo(e){this.l=e||Nh,v.PerformanceNavigationTiming?(e=v.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(v.g&&v.g.Ea&&v.g.Ea()&&v.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Nh=10;function no(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function so(e){return e.h?1:e.g?e.g.size:0}function as(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function js(e,t){e.g?e.g.add(t):e.h=t}function io(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}eo.prototype.cancel=function(){if(this.i=ro(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function ro(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return _s(e.i)}function Bs(){}Bs.prototype.stringify=function(e){return v.JSON.stringify(e,void 0)};Bs.prototype.parse=function(e){return v.JSON.parse(e,void 0)};function kh(){this.g=new Bs}function bh(e,t,n){const s=n||"";try{$s(e,function(i,r){let o=i;ye(i)&&(o=Ls(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function Dh(e,t){const n=new gn;if(v.Image){const s=new Image;s.onload=xe(Oe,n,s,"TestLoadImage: loaded",!0,t),s.onerror=xe(Oe,n,s,"TestLoadImage: error",!1,t),s.onabort=xe(Oe,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=xe(Oe,n,s,"TestLoadImage: timeout",!1,t),v.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function Oe(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function Ce(e){this.l=e.$b||null,this.j=e.ib||!1}z(Ce,Vs);Ce.prototype.g=function(){return new En(this.l,this.j)};Ce.prototype.i=function(e){return function(){return e}}({});function En(e,t){F.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ks,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}z(En,F);var Ks=0;g=En.prototype;g.open=function(e,t){if(this.readyState!=Ks)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,he(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||v).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Se(this)),this.readyState=Ks};g.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,he(this)),this.g&&(this.readyState=3,he(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof v.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;oo(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function oo(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}g.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Se(this):he(this),this.readyState==3&&oo(this)}};g.Ua=function(e){this.g&&(this.response=this.responseText=e,Se(this))};g.Ta=function(e){this.g&&(this.response=e,Se(this))};g.ha=function(){this.g&&Se(this)};function Se(e){e.readyState=4,e.l=null,e.j=null,e.A=null,he(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function he(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(En.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Rh=v.JSON.parse;function M(e){F.call(this),this.headers=new qt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ao,this.K=this.L=!1}z(M,F);var ao="",xh=/^https?$/i,Lh=["POST","PUT"];g=M.prototype;g.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ss.g(),this.C=this.u?Ni(this.u):Ni(ss),this.g.onreadystatechange=$(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){Di(this,r);return}e=n||"";const i=new qt(this.headers);s&&$s(s,function(r,o){i.set(o,r)}),s=Kc(i.T()),n=v.FormData&&e instanceof v.FormData,!(0<=Sr(Lh,t))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{uo(this),0<this.B&&((this.K=Oh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=$(this.pa,this)):this.A=Ps(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Di(this,r)}};function Oh(e){return Mt&&Qc()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function Mh(e){return e.toLowerCase()=="content-type"}g.pa=function(){typeof As!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,q(this,"timeout"),this.abort(8))};function Di(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,co(e),Tn(e)}function co(e){e.D||(e.D=!0,q(e,"complete"),q(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,q(this,"complete"),q(this,"abort"),Tn(this))};g.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Tn(this,!0)),M.Z.M.call(this)};g.Fa=function(){this.s||(this.F||this.v||this.l?ho(this):this.cb())};g.cb=function(){ho(this)};function ho(e){if(e.h&&typeof As!="undefined"&&(!e.C[1]||ot(e)!=4||e.ba()!=2)){if(e.v&&ot(e)==4)Ps(e.Fa,0,e);else if(q(e,"readystatechange"),ot(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(Yr)[1]||null;if(!i&&v.self&&v.self.location){var r=v.self.location.protocol;i=r.substr(0,r.length-1)}s=!xh.test(i?i.toLowerCase():"")}n=s}if(n)q(e,"complete"),q(e,"success");else{e.m=6;try{var o=2<ot(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",co(e)}}finally{Tn(e)}}}}function Tn(e,t){if(e.g){uo(e);const n=e.g,s=e.C[0]?ze:null;e.g=null,e.C=null,t||q(e,"ready");try{n.onreadystatechange=s}catch{}}}function uo(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(v.clearTimeout(e.A),e.A=null)}function ot(e){return e.g?e.g.readyState:0}g.ba=function(){try{return 2<ot(this)?this.g.status:-1}catch{return-1}};g.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Rh(t)}};function Ri(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case ao:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}g.Da=function(){return this.m};g.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ph(e){let t="";return Ns(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function zs(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Ph(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):k(e,t,n))}function Qt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function lo(e){this.za=0,this.l=[],this.h=new gn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Qt("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Qt("baseRetryDelayMs",5e3,e),this.$a=Qt("retryDelaySeedMs",1e4,e),this.Ya=Qt("forwardChannelMaxRetries",2,e),this.ra=Qt("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new eo(e&&e.concurrentRequestLimit),this.Ca=new kh,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}g=lo.prototype;g.ma=8;g.G=1;function Hs(e){if(fo(e),e.G==3){var t=e.V++,n=at(e.F);k(n,"SID",e.J),k(n,"RID",t),k(n,"TYPE","terminate"),Ae(e,n),t=new Te(e,e.h,t,void 0),t.K=2,t.v=wn(at(n)),n=!1,v.navigator&&v.navigator.sendBeacon&&(n=v.navigator.sendBeacon(t.v.toString(),"")),!n&&v.Image&&(new Image().src=t.v,n=!0),n||(t.g=To(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Ie(t)}wo(e)}g.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function In(e){e.g&&(Ws(e),e.g.cancel(),e.g=null)}function fo(e){In(e),e.u&&(v.clearTimeout(e.u),e.u=null),Je(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&v.clearTimeout(e.m),e.m=null)}function Un(e,t){e.l.push(new _h(e.Za++,t)),e.G==3&&Cn(e)}function Cn(e){no(e.i)||e.m||(e.m=!0,Os(e.Ha,e),e.C=0)}function Vh(e,t){return so(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=we($(e.Ha,e,t),vo(e,e.C)),e.C++,!0)}g.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new Te(this,this.h,e,void 0);let r=this.s;if(this.P&&(r?(r=_r(r),Nr(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=go(this,i,t),n=at(this.F),k(n,"RID",e),k(n,"CVER",22),this.D&&k(n,"X-HTTP-Session-Id",this.D),Ae(this,n),this.o&&r&&zs(n,this.o,r),js(this.i,i),this.Ra&&k(n,"TYPE","init"),this.ja?(k(n,"$req",t),k(n,"SID","null"),i.$=!0,rs(i,n,null)):rs(i,n,t),this.G=2}}else this.G==3&&(e?xi(this,e):this.l.length==0||no(this.i)||xi(this))};function xi(e,t){var n;t?n=t.m:n=e.V++;const s=at(e.F);k(s,"SID",e.J),k(s,"RID",n),k(s,"AID",e.U),Ae(e,s),e.o&&e.s&&zs(s,e.o,e.s),n=new Te(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=go(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),js(e.i,n),rs(n,s,t)}function Ae(e,t){e.j&&$s({},function(n,s){k(t,s,n)})}function go(e,t,n){n=Math.min(e.l.length,n);var s=e.j?$(e.j.Oa,e.j,e):null;t:{var i=e.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let h=i[c].h;const u=i[c].g;if(h-=r,0>h)r=Math.max(0,i[c].h-100),a=!1;else try{bh(u,o,"req"+h+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function po(e){e.g||e.u||(e.Y=1,Os(e.Ga,e),e.A=0)}function Gs(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=we($(e.Ga,e),vo(e,e.A)),e.A++,!0)}g.Ga=function(){if(this.u=null,mo(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=we($(this.bb,this),e)}};g.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,X(10),In(this),mo(this))};function Ws(e){e.B!=null&&(v.clearTimeout(e.B),e.B=null)}function mo(e){e.g=new Te(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=at(e.oa);k(t,"RID","rpc"),k(t,"SID",e.J),k(t,"CI",e.N?"0":"1"),k(t,"AID",e.U),Ae(e,t),k(t,"TYPE","xmlhttp"),e.o&&e.s&&zs(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=wn(at(t)),n.s=null,n.U=!0,Gr(n,e)}g.ab=function(){this.v!=null&&(this.v=null,In(this),Gs(this),X(19))};function Je(e){e.v!=null&&(v.clearTimeout(e.v),e.v=null)}function yo(e,t){var n=null;if(e.g==t){Je(e),Ws(e),e.g=null;var s=2}else if(as(e.i,t))n=t.D,io(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=pn(),q(s,new Br(s,n,t,i)),Cn(e)}else po(e);else if(i=t.o,i==3||i==0&&0<e.I||!(s==1&&Vh(e,t)||s==2&&Gs(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:mt(e,5);break;case 4:mt(e,10);break;case 3:mt(e,6);break;default:mt(e,2)}}}function vo(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function mt(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=$(e.jb,e);n||(n=new wt("//www.google.com/images/cleardot.gif"),v.location&&v.location.protocol=="http"||Qe(n,"https"),wn(n)),Dh(n.toString(),s)}else X(2);e.G=0,e.j&&e.j.va(t),wo(e),fo(e)}g.jb=function(e){e?(this.h.info("Successfully pinged google.com"),X(2)):(this.h.info("Failed to ping google.com"),X(1))};function wo(e){e.G=0,e.I=-1,e.j&&((ro(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,_s(e.l),e.l.length=0),e.j.ua())}function Eo(e,t,n){let s=vh(n);if(s.i!="")t&&Xe(s,t+"."+s.i),Ye(s,s.m);else{const i=v.location;s=wh(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&Ns(e.aa,function(i,r){k(s,r,i)}),t=e.D,n=e.sa,t&&n&&k(s,t,n),k(s,"VER",e.ma),Ae(e,s),s}function To(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new M(new Ce({ib:!0})):new M(e.qa),t.L=e.H,t}function Io(){}g=Io.prototype;g.xa=function(){};g.wa=function(){};g.va=function(){};g.ua=function(){};g.Oa=function(){};function Ze(){if(Mt&&!(10<=Number(Xc)))throw Error("Environmental error: no available transport.")}Ze.prototype.g=function(e,t){return new Z(e,t)};function Z(e,t){F.call(this),this.g=new lo(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!He(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!He(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Bt(this)}z(Z,F);Z.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Os($(e.hb,e,t))),X(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Eo(e,null,e.W),Cn(e)};Z.prototype.close=function(){Hs(this.g)};Z.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,Un(this.g,t)}else this.v?(t={},t.__data__=Ls(e),Un(this.g,t)):Un(this.g,e)};Z.prototype.M=function(){this.g.j=null,delete this.j,Hs(this.g),delete this.g,Z.Z.M.call(this)};function Co(e){Fs.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}z(Co,Fs);function So(){Us.call(this),this.status=1}z(So,Us);function Bt(e){this.g=e}z(Bt,Io);Bt.prototype.xa=function(){q(this.g,"a")};Bt.prototype.wa=function(e){q(this.g,new Co(e))};Bt.prototype.va=function(e){q(this.g,new So(e))};Bt.prototype.ua=function(){q(this.g,"b")};Ze.prototype.createWebChannel=Ze.prototype.g;Z.prototype.send=Z.prototype.u;Z.prototype.open=Z.prototype.m;Z.prototype.close=Z.prototype.close;mn.NO_ERROR=0;mn.TIMEOUT=8;mn.HTTP_ERROR=6;Kr.COMPLETE="complete";zr.EventType=Ee;Ee.OPEN="a";Ee.CLOSE="b";Ee.ERROR="c";Ee.MESSAGE="d";F.prototype.listen=F.prototype.N;M.prototype.listenOnce=M.prototype.O;M.prototype.getLastError=M.prototype.La;M.prototype.getLastErrorCode=M.prototype.Da;M.prototype.getStatus=M.prototype.ba;M.prototype.getResponseJson=M.prototype.Qa;M.prototype.getResponseText=M.prototype.ga;M.prototype.send=M.prototype.ea;var Fh=function(){return new Ze},Uh=function(){return pn()},$n=mn,$h=Kr,qh=St,Li={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},jh=Ce,Me=zr,Bh=M;const Oi="@firebase/firestore";/**
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
 */class Y{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Y.UNAUTHENTICATED=new Y(null),Y.GOOGLE_CREDENTIALS=new Y("google-credentials-uid"),Y.FIRST_PARTY=new Y("first-party-uid"),Y.MOCK_USER=new Y("mock-user");/**
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
 */let Kt="9.6.7";/**
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
 */const Et=new Ir("@firebase/firestore");function Mi(){return Et.logLevel}function m(e,...t){if(Et.logLevel<=_.DEBUG){const n=t.map(Qs);Et.debug(`Firestore (${Kt}): ${e}`,...n)}}function ht(e,...t){if(Et.logLevel<=_.ERROR){const n=t.map(Qs);Et.error(`Firestore (${Kt}): ${e}`,...n)}}function Pi(e,...t){if(Et.logLevel<=_.WARN){const n=t.map(Qs);Et.warn(`Firestore (${Kt}): ${e}`,...n)}}function Qs(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
*/var t}/**
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
 */function I(e="Unexpected state"){const t=`FIRESTORE (${Kt}) INTERNAL ASSERTION FAILED: `+e;throw ht(t),new Error(t)}function O(e,t){e||I()}function A(e,t){return e}/**
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
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends hn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Rt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Kh{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class zh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Y.UNAUTHENTICATED))}shutdown(){}}class Hh{constructor(t){this.t=t,this.currentUser=Y.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Rt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Rt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{m("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(m("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Rt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(m("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(O(typeof s.accessToken=="string"),new Kh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return O(t===null||typeof t=="string"),new Y(t)}}class Gh{constructor(t,n,s){this.type="FirstParty",this.user=Y.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class Wh{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new Gh(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(Y.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Qh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xh{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const s=r=>{r.error!=null&&m("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,m("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{m("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?i(r):m("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(O(typeof n.token=="string"),this.p=n.token,new Qh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class Xs{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}/**
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
 */function Yh(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */Xs.A=-1;class Jh{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Yh(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function N(e,t){return e<t?-1:e>t?1:0}function ue(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
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
 */class ct{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ct.fromMillis(Date.now())}static fromDate(t){return ct.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new ct(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?N(this.nanoseconds,t.nanoseconds):N(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class C{constructor(t){this.timestamp=t}static fromTimestamp(t){return new C(t)}static min(){return new C(new ct(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function Vi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Sn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Zh(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class le{constructor(t,n,s){n===void 0?n=0:n>t.length&&I(),s===void 0?s=t.length-n:s>t.length-n&&I(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return le.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof le?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class D extends le{construct(t,n,s){return new D(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new w(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new D(n)}static emptyPath(){return new D([])}}const tu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends le{construct(t,n,s){return new tt(t,n,s)}static isValidIdentifier(t){return tu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new w(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new w(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new w(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new w(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new tt(n)}static emptyPath(){return new tt([])}}/**
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
 */class B{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new B(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new B(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return N(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}B.EMPTY_BYTE_STRING=new B("");const eu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ut(e){if(O(!!e),typeof e=="string"){let t=0;const n=eu.exec(e);if(O(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:L(e.seconds),nanos:L(e.nanos)}}function L(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Pt(e){return typeof e=="string"?B.fromBase64String(e):B.fromUint8Array(e)}/**
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
 */function Ao(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function _o(e){const t=e.mapValue.fields.__previous_value__;return Ao(t)?_o(t):t}function de(e){const t=ut(e.mapValue.fields.__local_write_time__.timestampValue);return new ct(t.seconds,t.nanos)}/**
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
 */class nu{constructor(t,n,s,i,r,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Vt{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Vt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Vt&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */function zt(e){return e==null}function cs(e){return e===0&&1/e==-1/0}/**
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
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(D.fromString(t))}static fromName(t){return new E(D.fromString(t).popFirst(5))}static empty(){return new E(D.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&D.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return D.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new D(t.slice()))}}function Tt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ao(e)?4:10:I()}function et(e,t){if(e===t)return!0;const n=Tt(e);if(n!==Tt(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return de(e).isEqual(de(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=ut(s.timestampValue),o=ut(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Pt(s.bytesValue).isEqual(Pt(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return L(s.geoPointValue.latitude)===L(i.geoPointValue.latitude)&&L(s.geoPointValue.longitude)===L(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return L(s.integerValue)===L(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=L(s.doubleValue),o=L(i.doubleValue);return r===o?cs(r)===cs(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return ue(e.arrayValue.values||[],t.arrayValue.values||[],et);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Vi(r)!==Vi(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!et(r[a],o[a])))return!1;return!0}(e,t);default:return I()}}function fe(e,t){return(e.values||[]).find(n=>et(n,t))!==void 0}function Ft(e,t){if(e===t)return 0;const n=Tt(e),s=Tt(t);if(n!==s)return N(n,s);switch(n){case 0:return 0;case 1:return N(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=L(i.integerValue||i.doubleValue),a=L(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Fi(e.timestampValue,t.timestampValue);case 4:return Fi(de(e),de(t));case 5:return N(e.stringValue,t.stringValue);case 6:return function(i,r){const o=Pt(i),a=Pt(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const h=N(o[c],a[c]);if(h!==0)return h}return N(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=N(L(i.latitude),L(r.latitude));return o!==0?o:N(L(i.longitude),L(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const h=Ft(o[c],a[c]);if(h)return h}return N(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){const o=i.fields||{},a=Object.keys(o),c=r.fields||{},h=Object.keys(c);a.sort(),h.sort();for(let u=0;u<a.length&&u<h.length;++u){const l=N(a[u],h[u]);if(l!==0)return l;const p=Ft(o[a[u]],c[h[u]]);if(p!==0)return p}return N(a.length,h.length)}(e.mapValue,t.mapValue);default:throw I()}}function Fi(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return N(e,t);const n=ut(e),s=ut(t),i=N(n.seconds,s.seconds);return i!==0?i:N(n.nanos,s.nanos)}function xt(e){return hs(e)}function hs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=ut(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Pt(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,E.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=hs(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${hs(s.fields[a])}`;return r+"}"}(e.mapValue):I();var t,n}function us(e){return!!e&&"integerValue"in e}function Ys(e){return!!e&&"arrayValue"in e}function Ui(e){return!!e&&"nullValue"in e}function $i(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function qn(e){return!!e&&"mapValue"in e}function ne(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Sn(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=ne(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ne(e.arrayValue.values[n]);return t}return Object.assign({},e)}/**
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
 */class it{constructor(t){this.value=t}static empty(){return new it({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!qn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ne(n)}setAll(t){let n=tt.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=ne(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());qn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return et(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];qn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){Sn(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new it(ne(this.value))}}/**
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
 */class H{constructor(t,n,s,i,r,o){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(t){return new H(t,0,C.min(),C.min(),it.empty(),0)}static newFoundDocument(t,n,s){return new H(t,1,n,C.min(),s,0)}static newNoDocument(t,n){return new H(t,2,n,C.min(),it.empty(),0)}static newUnknownDocument(t,n){return new H(t,3,n,C.min(),it.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=it.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=it.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof H&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new H(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class su{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.P=null}}function qi(e,t=null,n=[],s=[],i=null,r=null,o=null){return new su(e,t,n,s,i,r,o)}function Js(e){const t=A(e);if(t.P===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+xt(i.value);var i}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),zt(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>xt(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>xt(s)).join(",")),t.P=n}return t.P}function iu(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${xt(s.value)}`;var s}).join(", ")}]`),zt(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>xt(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>xt(n)).join(",")),`Target(${t})`}function Zs(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!du(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],s=t.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!et(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Bi(e.startAt,t.startAt)&&Bi(e.endAt,t.endAt)}function ls(e){return E.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class J extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.v(t,n,s):new ru(t,n,s):n==="array-contains"?new cu(t,s):n==="in"?new hu(t,s):n==="not-in"?new uu(t,s):n==="array-contains-any"?new lu(t,s):new J(t,n,s)}static v(t,n,s){return n==="in"?new ou(t,s):new au(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.V(Ft(n,this.value)):n!==null&&Tt(this.value)===Tt(n)&&this.V(Ft(n,this.value))}V(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ru extends J{constructor(t,n,s){super(t,n,s),this.key=E.fromName(s.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.V(n)}}class ou extends J{constructor(t,n){super(t,"in",n),this.keys=No("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class au extends J{constructor(t,n){super(t,"not-in",n),this.keys=No("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function No(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>E.fromName(s.referenceValue))}class cu extends J{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Ys(n)&&fe(n.arrayValue,this.value)}}class hu extends J{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&fe(this.value.arrayValue,n)}}class uu extends J{constructor(t,n){super(t,"not-in",n)}matches(t){if(fe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!fe(this.value.arrayValue,n)}}class lu extends J{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Ys(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>fe(this.value.arrayValue,s))}}class tn{constructor(t,n){this.position=t,this.inclusive=n}}class se{constructor(t,n="asc"){this.field=t,this.dir=n}}function du(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function ji(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=E.comparator(E.fromName(o.referenceValue),n.key):s=Ft(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Bi(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!et(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class An{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function fu(e,t,n,s,i,r,o,a){return new An(e,t,n,s,i,r,o,a)}function ti(e){return new An(e)}function Ue(e){return!zt(e.limit)&&e.limitType==="F"}function en(e){return!zt(e.limit)&&e.limitType==="L"}function gu(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function pu(e){for(const t of e.filters)if(t.S())return t.field;return null}function mu(e){return e.collectionGroup!==null}function ge(e){const t=A(e);if(t.D===null){t.D=[];const n=pu(t),s=gu(t);if(n!==null&&s===null)n.isKeyField()||t.D.push(new se(n)),t.D.push(new se(tt.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.D.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new se(tt.keyField(),r))}}}return t.D}function It(e){const t=A(e);if(!t.C)if(t.limitType==="F")t.C=qi(t.path,t.collectionGroup,ge(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of ge(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new se(r.field,o))}const s=t.endAt?new tn(t.endAt.position,!t.endAt.inclusive):null,i=t.startAt?new tn(t.startAt.position,!t.startAt.inclusive):null;t.C=qi(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t.C}function yu(e,t,n){return new An(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function _n(e,t){return Zs(It(e),It(t))&&e.limitType===t.limitType}function ko(e){return`${Js(It(e))}|lt:${e.limitType}`}function ds(e){return`Query(target=${iu(It(e))}; limitType=${e.limitType})`}function ei(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):E.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=ji(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,ge(n),s)||n.endAt&&!function(i,r,o){const a=ji(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,ge(n),s))}(e,t)}function bo(e){return(t,n)=>{let s=!1;for(const i of ge(e)){const r=vu(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function vu(e,t,n){const s=e.field.isKeyField()?E.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Ft(a,c):I()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
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
 */function wu(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cs(t)?"-0":t}}function Eu(e){return{integerValue:""+e}}/**
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
 */class Nn{constructor(){this._=void 0}}function Tu(e,t,n){return e instanceof fs?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof nn?Do(e,t):e instanceof sn?Ro(e,t):function(s,i){const r=Cu(s,i),o=Ki(r)+Ki(s.k);return us(r)&&us(s.k)?Eu(o):wu(s.O,o)}(e,t)}function Iu(e,t,n){return e instanceof nn?Do(e,t):e instanceof sn?Ro(e,t):n}function Cu(e,t){return e instanceof gs?us(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class fs extends Nn{}class nn extends Nn{constructor(t){super(),this.elements=t}}function Do(e,t){const n=xo(t);for(const s of e.elements)n.some(i=>et(i,s))||n.push(s);return{arrayValue:{values:n}}}class sn extends Nn{constructor(t){super(),this.elements=t}}function Ro(e,t){let n=xo(t);for(const s of e.elements)n=n.filter(i=>!et(i,s));return{arrayValue:{values:n}}}class gs extends Nn{constructor(t,n){super(),this.O=t,this.k=n}}function Ki(e){return L(e.integerValue||e.doubleValue)}function xo(e){return Ys(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Su(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof nn&&s instanceof nn||n instanceof sn&&s instanceof sn?ue(n.elements,s.elements,et):n instanceof gs&&s instanceof gs?et(n.k,s.k):n instanceof fs&&s instanceof fs}(e.transform,t.transform)}function $e(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Lo{}function Au(e,t,n){e instanceof Oo?function(s,i,r){const o=s.value.clone(),a=Gi(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Mo?function(s,i,r){if(!$e(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Gi(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Po(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function ps(e,t,n){e instanceof Oo?function(s,i,r){if(!$e(s.precondition,i))return;const o=s.value.clone(),a=Wi(s.fieldTransforms,r,i);o.setAll(a),i.convertToFoundDocument(Hi(i),o).setHasLocalMutations()}(e,t,n):e instanceof Mo?function(s,i,r){if(!$e(s.precondition,i))return;const o=Wi(s.fieldTransforms,r,i),a=i.data;a.setAll(Po(s)),a.setAll(o),i.convertToFoundDocument(Hi(i),a).setHasLocalMutations()}(e,t,n):function(s,i){$e(s.precondition,i)&&i.convertToNoDocument(C.min())}(e,t)}function zi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ue(n,s,(i,r)=>Su(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function Hi(e){return e.isFoundDocument()?e.version:C.min()}class Oo extends Lo{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}}class Mo extends Lo{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}}function Po(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Gi(e,t,n){const s=new Map;O(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,Iu(o,a,n[i]))}return s}function Wi(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Tu(r,o,t))}return s}/**
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
 */class _u{constructor(t){this.count=t}}/**
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
 */var x,S;function Vo(e){if(e===void 0)return ht("GRPC error has no .code"),f.UNKNOWN;switch(e){case x.OK:return f.OK;case x.CANCELLED:return f.CANCELLED;case x.UNKNOWN:return f.UNKNOWN;case x.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case x.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case x.INTERNAL:return f.INTERNAL;case x.UNAVAILABLE:return f.UNAVAILABLE;case x.UNAUTHENTICATED:return f.UNAUTHENTICATED;case x.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case x.NOT_FOUND:return f.NOT_FOUND;case x.ALREADY_EXISTS:return f.ALREADY_EXISTS;case x.PERMISSION_DENIED:return f.PERMISSION_DENIED;case x.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case x.ABORTED:return f.ABORTED;case x.OUT_OF_RANGE:return f.OUT_OF_RANGE;case x.UNIMPLEMENTED:return f.UNIMPLEMENTED;case x.DATA_LOSS:return f.DATA_LOSS;default:return I()}}(S=x||(x={}))[S.OK=0]="OK",S[S.CANCELLED=1]="CANCELLED",S[S.UNKNOWN=2]="UNKNOWN",S[S.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",S[S.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",S[S.NOT_FOUND=5]="NOT_FOUND",S[S.ALREADY_EXISTS=6]="ALREADY_EXISTS",S[S.PERMISSION_DENIED=7]="PERMISSION_DENIED",S[S.UNAUTHENTICATED=16]="UNAUTHENTICATED",S[S.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",S[S.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",S[S.ABORTED=10]="ABORTED",S[S.OUT_OF_RANGE=11]="OUT_OF_RANGE",S[S.UNIMPLEMENTED=12]="UNIMPLEMENTED",S[S.INTERNAL=13]="INTERNAL",S[S.UNAVAILABLE=14]="UNAVAILABLE",S[S.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class K{constructor(t,n){this.comparator=t,this.root=n||U.EMPTY}insert(t,n){return new K(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,U.BLACK,null,null))}remove(t){return new K(this.comparator,this.root.remove(t,this.comparator).copy(null,null,U.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Pe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Pe(this.root,t,this.comparator,!1)}getReverseIterator(){return new Pe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Pe(this.root,t,this.comparator,!0)}}class Pe{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class U{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s!=null?s:U.RED,this.left=i!=null?i:U.EMPTY,this.right=r!=null?r:U.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new U(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return U.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return U.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,U.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,U.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}U.EMPTY=null,U.RED=!0,U.BLACK=!1;U.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,s,i){return this}insert(e,t,n){return new U(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class j{constructor(t){this.comparator=t,this.data=new K(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qi(this.data.getIterator())}getIteratorFrom(t){return new Qi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof j)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new j(this.comparator);return n.data=t,n}}class Qi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const Nu=new K(E.comparator);function Ct(){return Nu}const ku=new K(E.comparator);function ms(){return ku}new K(E.comparator);const bu=new j(E.comparator);function b(...e){let t=bu;for(const n of e)t=t.add(n);return t}const Du=new j(N);function Fo(){return Du}/**
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
 */class kn{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n){const s=new Map;return s.set(t,_e.createSynthesizedTargetChangeForCurrentChange(t,n)),new kn(C.min(),s,Fo(),Ct(),b())}}class _e{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n){return new _e(B.EMPTY_BYTE_STRING,n,b(),b(),b())}}/**
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
 */class qe{constructor(t,n,s,i){this.M=t,this.removedTargetIds=n,this.key=s,this.$=i}}class Uo{constructor(t,n){this.targetId=t,this.F=n}}class $o{constructor(t,n,s=B.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Xi{constructor(){this.B=0,this.L=Ji(),this.U=B.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.U=t)}H(){let t=b(),n=b(),s=b();return this.L.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:I()}}),new _e(this.U,this.q,t,n,s)}J(){this.K=!1,this.L=Ji()}Y(t,n){this.K=!0,this.L=this.L.insert(t,n)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class Ru{constructor(t){this.nt=t,this.st=new Map,this.it=Ct(),this.rt=Yi(),this.ot=new j(N)}ct(t){for(const n of t.M)t.$&&t.$.isFoundDocument()?this.ut(n,t.$):this.at(n,t.key,t.$);for(const n of t.removedTargetIds)this.at(n,t.key,t.$)}ht(t){this.forEachTarget(t,n=>{const s=this.lt(n);switch(t.state){case 0:this.ft(n)&&s.W(t.resumeToken);break;case 1:s.tt(),s.G||s.J(),s.W(t.resumeToken);break;case 2:s.tt(),s.G||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(t.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.st.forEach((s,i)=>{this.ft(i)&&n(i)})}_t(t){const n=t.targetId,s=t.F.count,i=this.wt(n);if(i){const r=i.target;if(ls(r))if(s===0){const o=new E(r.path);this.at(n,o,H.newNoDocument(o,C.min()))}else O(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(t){const n=new Map;this.st.forEach((r,o)=>{const a=this.wt(o);if(a){if(r.current&&ls(a.target)){const c=new E(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.at(o,c,H.newNoDocument(c,t))}r.j&&(n.set(o,r.H()),r.J())}});let s=b();this.rt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const h=this.wt(c);return!h||h.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.it.forEach((r,o)=>o.setReadTime(t));const i=new kn(t,n,this.ot,this.it,s);return this.it=Ct(),this.rt=Yi(),this.ot=new j(N),i}ut(t,n){if(!this.ft(t))return;const s=this.It(t,n.key)?2:0;this.lt(t).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Et(n.key).add(t))}at(t,n,s){if(!this.ft(t))return;const i=this.lt(t);this.It(t,n)?i.Y(n,1):i.X(n),this.rt=this.rt.insert(n,this.Et(n).delete(t)),s&&(this.it=this.it.insert(n,s))}removeTarget(t){this.st.delete(t)}gt(t){const n=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let n=this.st.get(t);return n||(n=new Xi,this.st.set(t,n)),n}Et(t){let n=this.rt.get(t);return n||(n=new j(N),this.rt=this.rt.insert(t,n)),n}ft(t){const n=this.wt(t)!==null;return n||m("WatchChangeAggregator","Detected inactive target",t),n}wt(t){const n=this.st.get(t);return n&&n.G?null:this.nt.Tt(t)}dt(t){this.st.set(t,new Xi),this.nt.getRemoteKeysForTarget(t).forEach(n=>{this.at(t,n,null)})}It(t,n){return this.nt.getRemoteKeysForTarget(t).has(n)}}function Yi(){return new K(E.comparator)}function Ji(){return new K(E.comparator)}/**
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
 */const xu=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Lu=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Ou{constructor(t,n){this.databaseId=t,this.N=n}}function Mu(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Pu(e,t){return e.N?t.toBase64():t.toUint8Array()}function pe(e){return O(!!e),C.fromTimestamp(function(t){const n=ut(t);return new ct(n.seconds,n.nanos)}(e))}function Vu(e,t){return function(n){return new D(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function qo(e){const t=D.fromString(e);return O(Ko(t)),t}function jn(e,t){const n=qo(t);if(n.get(1)!==e.databaseId.projectId)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new E(jo(n))}function ys(e,t){return Vu(e.databaseId,t)}function Fu(e){const t=qo(e);return t.length===4?D.emptyPath():jo(t)}function Zi(e){return new D(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function jo(e){return O(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Uu(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(c,h){return c.N?(O(h===void 0||typeof h=="string"),B.fromBase64String(h||"")):(O(h===void 0||h instanceof Uint8Array),B.fromUint8Array(h||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const h=c.code===void 0?f.UNKNOWN:Vo(c.code);return new w(h,c.message||"")}(o);n=new $o(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=jn(e,s.document.name),r=pe(s.document.updateTime),o=new it({mapValue:{fields:s.document.fields}}),a=H.newFoundDocument(i,r,o),c=s.targetIds||[],h=s.removedTargetIds||[];n=new qe(c,h,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=jn(e,s.document),r=s.readTime?pe(s.readTime):C.min(),o=H.newNoDocument(i,r),a=s.removedTargetIds||[];n=new qe([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=jn(e,s.document),r=s.removedTargetIds||[];n=new qe([],r,i,null)}else{if(!("filter"in t))return I();{t.filter;const s=t.filter;s.targetId;const i=s.count||0,r=new _u(i),o=s.targetId;n=new Uo(o,r)}}return n}function $u(e,t){return{documents:[ys(e,t.path)]}}function qu(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=ys(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ys(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length===0)return;const h=c.map(u=>function(l){if(l.op==="=="){if($i(l.value))return{unaryFilter:{field:Nt(l.field),op:"IS_NAN"}};if(Ui(l.value))return{unaryFilter:{field:Nt(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if($i(l.value))return{unaryFilter:{field:Nt(l.field),op:"IS_NOT_NAN"}};if(Ui(l.value))return{unaryFilter:{field:Nt(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nt(l.field),op:zu(l.op),value:l.value}}}(u));return h.length===1?h[0]:{compositeFilter:{op:"AND",filters:h}}}(t.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(h=>function(u){return{field:Nt(u.field),direction:Ku(u.dir)}}(h))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,h){return c.N||zt(h)?h:{value:h}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function ju(e){let t=Fu(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){O(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:t=t.child(u.collectionId)}let r=[];n.where&&(r=Bo(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(l){return new se(bt(l.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(u)));let a=null;n.limit&&(a=function(u){let l;return l=typeof u=="object"?u.value:u,zt(l)?null:l}(n.limit));let c=null;n.startAt&&(c=function(u){const l=!!u.before,p=u.values||[];return new tn(p,l)}(n.startAt));let h=null;return n.endAt&&(h=function(u){const l=!u.before,p=u.values||[];return new tn(p,l)}(n.endAt)),fu(t,i,o,r,a,"F",c,h)}function Bu(e,t){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function Bo(e){return e?e.unaryFilter!==void 0?[Gu(e)]:e.fieldFilter!==void 0?[Hu(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>Bo(t)).reduce((t,n)=>t.concat(n)):I():[]}function Ku(e){return xu[e]}function zu(e){return Lu[e]}function Nt(e){return{fieldPath:e.canonicalString()}}function bt(e){return tt.fromServerFormat(e.fieldPath)}function Hu(e){return J.create(bt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(e.fieldFilter.op),e.fieldFilter.value)}function Gu(e){switch(e.unaryFilter.op){case"IS_NAN":const t=bt(e.unaryFilter.field);return J.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=bt(e.unaryFilter.field);return J.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=bt(e.unaryFilter.field);return J.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=bt(e.unaryFilter.field);return J.create(i,"!=",{nullValue:"NULL_VALUE"});default:return I()}}function Ko(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */const Wu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */class d{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new d((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof d?n:d.resolve(n)}catch(n){return d.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):d.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):d.reject(n)}static resolve(t){return new d((n,s)=>{n(t)})}static reject(t){return new d((n,s)=>{s(t)})}static waitFor(t){return new d((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(t){let n=d.resolve(!1);for(const s of t)n=n.next(i=>i?d.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}}function Ne(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Xu{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&Au(r,t,s[i])}}applyToLocalView(t){for(const n of this.baseMutations)n.key.isEqual(t.key)&&ps(n,t,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(t.key)&&ps(n,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(n=>{const s=t.get(n.key),i=s;this.applyToLocalView(i),s.isValidDocument()||i.convertToNoDocument(C.min())})}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),b())}isEqual(t){return this.batchId===t.batchId&&ue(this.mutations,t.mutations,(n,s)=>zi(n,s))&&ue(this.baseMutations,t.baseMutations,(n,s)=>zi(n,s))}}/**
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
 */class Yu{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class yt{constructor(t,n,s,i,r=C.min(),o=C.min(),a=B.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new yt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new yt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
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
 */class Ju{constructor(t){this.Ht=t}}function Zu(e){const t=ju({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?yu(t,t.limit,"L"):t}/**
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
 */class tl{constructor(){this.xe=new el}addToCollectionParentIndex(t,n){return this.xe.add(n),d.resolve()}getCollectionParents(t,n){return d.resolve(this.xe.getEntries(n))}addFieldIndex(t,n){return d.resolve()}deleteFieldIndex(t,n){return d.resolve()}getDocumentsMatchingTarget(t,n,s){return d.resolve(b())}getFieldIndex(t,n){return d.resolve(null)}getFieldIndexes(t,n){return d.resolve([])}getNextCollectionGroupToUpdate(t){return d.resolve(null)}updateCollectionGroup(t,n,s){return d.resolve()}updateIndexEntries(t,n){return d.resolve()}}class el{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new j(D.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new j(D.comparator)).toArray()}}/**
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
 */class Ut{constructor(t){this.ze=t}next(){return this.ze+=2,this.ze}static He(){return new Ut(0)}static Je(){return new Ut(-1)}}/**
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
 */async function ni(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==Wu)throw e;m("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ke{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={}}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i!==void 0){for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n])}else this.inner[s]=[[t,n]]}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),!0;return!1}forEach(t){Sn(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return Zh(this.inner)}}/**
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
 */class nl{constructor(){this.changes=new ke(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,H.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?d.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class sl{constructor(t,n,s){this.qn=t,this.gs=n,this.indexManager=s}ys(t,n){return this.gs.getAllMutationBatchesAffectingDocumentKey(t,n).next(s=>this.ps(t,n,s))}ps(t,n,s){return this.qn.getEntry(t,n).next(i=>{for(const r of s)r.applyToLocalView(i);return i})}Is(t,n){t.forEach((s,i)=>{for(const r of n)r.applyToLocalView(i)})}Es(t,n){return this.qn.getEntries(t,n).next(s=>this.Ts(t,s).next(()=>s))}Ts(t,n){return this.gs.getAllMutationBatchesAffectingDocumentKeys(t,n).next(s=>this.Is(n,s))}As(t,n,s){return function(i){return E.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Rs(t,n.path):mu(n)?this.Ps(t,n,s):this.bs(t,n,s)}Rs(t,n){return this.ys(t,new E(n)).next(s=>{let i=ms();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}Ps(t,n,s){const i=n.collectionGroup;let r=ms();return this.indexManager.getCollectionParents(t,i).next(o=>d.forEach(o,a=>{const c=function(h,u){return new An(u,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,a.child(i));return this.bs(t,c,s).next(h=>{h.forEach((u,l)=>{r=r.insert(u,l)})})}).next(()=>r))}bs(t,n,s){let i;return this.qn.getAll(t,n.path,s).next(r=>(i=r,this.gs.getAllMutationBatchesAffectingQuery(t,n))).next(r=>{for(const o of r)for(const a of o.mutations){const c=a.key;let h=i.get(c);h==null&&(h=H.newInvalidDocument(c),i=i.insert(c,h)),ps(a,h,o.localWriteTime),h.isFoundDocument()||(i=i.remove(c))}}).next(()=>(i.forEach((r,o)=>{ei(n,o)||(i=i.remove(r))}),i))}}/**
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
 */class si{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.vs=s,this.Vs=i}static Ss(t,n){let s=b(),i=b();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new si(t,n.fromCache,s,i)}}/**
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
 */class il{Ds(t){this.Cs=t}As(t,n,s,i){return function(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(C.min())?this.Ns(t,n):this.Cs.Es(t,i).next(r=>{const o=this.xs(n,r);return(Ue(n)||en(n))&&this.ks(n.limitType,o,i,s)?this.Ns(t,n):(Mi()<=_.DEBUG&&m("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ds(n)),this.Cs.As(t,n,s).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}xs(t,n){let s=new j(bo(t));return n.forEach((i,r)=>{ei(t,r)&&(s=s.add(r))}),s}ks(t,n,s,i){if(s.size!==n.size)return!0;const r=t==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ns(t,n){return Mi()<=_.DEBUG&&m("QueryEngine","Using full collection scan to execute query:",ds(n)),this.Cs.As(t,n,C.min())}}/**
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
 */class rl{constructor(t,n,s,i){this.persistence=t,this.Os=n,this.O=i,this.Ms=new K(N),this.$s=new ke(r=>Js(r),Zs),this.Fs=C.min(),this.Bs=t.getRemoteDocumentCache(),this.Un=t.getTargetCache(),this.Kn=t.getBundleCache(),this.Ls(s)}Ls(t){this.indexManager=this.persistence.getIndexManager(t),this.gs=this.persistence.getMutationQueue(t,this.indexManager),this.Us=new sl(this.Bs,this.gs,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Os.Ds(this.Us)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ms))}}function ol(e,t,n,s){return new rl(e,t,n,s)}async function zo(e,t){const n=A(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.gs.getAllMutationBatches(s).next(r=>(i=r,n.Ls(t),n.gs.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=b();for(const h of i){o.push(h.batchId);for(const u of h.mutations)c=c.add(u.key)}for(const h of r){a.push(h.batchId);for(const u of h.mutations)c=c.add(u.key)}return n.Us.Es(s,c).next(h=>({qs:h,removedBatchIds:o,addedBatchIds:a}))})})}function Ho(e){const t=A(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Un.getLastRemoteSnapshotVersion(n))}function al(e,t){const n=A(e),s=t.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});i=n.Ms;const a=[];t.targetChanges.forEach((h,u)=>{const l=i.get(u);if(!l)return;a.push(n.Un.removeMatchingKeys(r,h.removedDocuments,u).next(()=>n.Un.addMatchingKeys(r,h.addedDocuments,u)));let p=l.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.has(u)?p=p.withResumeToken(B.EMPTY_BYTE_STRING,C.min()).withLastLimboFreeSnapshotVersion(C.min()):h.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(h.resumeToken,s)),i=i.insert(u,p),function(y,T,R){return y.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(l,p,h)&&a.push(n.Un.updateTargetData(r,p))});let c=Ct();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(cl(r,o,t.documentUpdates).next(h=>{c=h})),!s.isEqual(C.min())){const h=n.Un.getLastRemoteSnapshotVersion(r).next(u=>n.Un.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return d.waitFor(a).next(()=>o.apply(r)).next(()=>n.Us.Ts(r,c)).next(()=>c)}).then(r=>(n.Ms=i,r))}function cl(e,t,n){let s=b();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let r=Ct();return n.forEach((o,a)=>{const c=i.get(o);a.isNoDocument()&&a.version.isEqual(C.min())?(t.removeEntry(o,a.readTime),r=r.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(a),r=r.insert(o,a)):m("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),r})}function hl(e,t){const n=A(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Un.getTargetData(s,t).next(r=>r?(i=r,d.resolve(i)):n.Un.allocateTargetId(s).next(o=>(i=new yt(t,o,0,s.currentSequenceNumber),n.Un.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ms.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.$s.set(t,s.targetId)),s})}async function vs(e,t,n){const s=A(e),i=s.Ms.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ne(o))throw o;m("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Ms=s.Ms.remove(t),s.$s.delete(i.target)}function tr(e,t,n){const s=A(e);let i=C.min(),r=b();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,h){const u=A(a),l=u.$s.get(h);return l!==void 0?d.resolve(u.Ms.get(l)):u.Un.getTargetData(c,h)}(s,o,It(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Un.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Os.As(o,t,n?i:C.min(),n?r:b())).next(a=>({documents:a,Ks:r})))}/**
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
 */class ul{constructor(t){this.O=t,this.Ws=new Map,this.zs=new Map}getBundleMetadata(t,n){return d.resolve(this.Ws.get(n))}saveBundleMetadata(t,n){var s;return this.Ws.set(n.id,{id:(s=n).id,version:s.version,createTime:pe(s.createTime)}),d.resolve()}getNamedQuery(t,n){return d.resolve(this.zs.get(n))}saveNamedQuery(t,n){return this.zs.set(n.name,function(s){return{name:s.name,query:Zu(s.bundledQuery),readTime:pe(s.readTime)}}(n)),d.resolve()}}/**
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
 */class ll{constructor(){this.overlays=new K(E.comparator),this.Hs=new Map}getOverlay(t,n){return d.resolve(this.overlays.get(n))}saveOverlays(t,n,s){return s.forEach(i=>{this.Yt(t,n,i)}),d.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.Hs.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Hs.delete(s)),d.resolve()}getOverlaysForCollection(t,n,s){const i=new Map,r=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return d.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new K((h,u)=>h-u);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>s){let u=r.get(h.largestBatchId);u===null&&(u=new Map,r=r.insert(h.largestBatchId,u)),u.set(h.getKey(),h)}}const a=new Map,c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,u)=>a.set(u,h)),!(a.size>=i)););return d.resolve(a)}Yt(t,n,s){if(s===null)return;const i=this.overlays.get(s.key);i!==null&&this.Hs.get(i.largestBatchId).delete(s.key),this.overlays=this.overlays.insert(s.key,new Yu(n,s));let r=this.Hs.get(n);r===void 0&&(r=new Set,this.Hs.set(n,r)),r.add(s.key)}}/**
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
 */class ii{constructor(){this.Js=new j(V.Ys),this.Xs=new j(V.Zs)}isEmpty(){return this.Js.isEmpty()}addReference(t,n){const s=new V(t,n);this.Js=this.Js.add(s),this.Xs=this.Xs.add(s)}ti(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.ei(new V(t,n))}ni(t,n){t.forEach(s=>this.removeReference(s,n))}si(t){const n=new E(new D([])),s=new V(n,t),i=new V(n,t+1),r=[];return this.Xs.forEachInRange([s,i],o=>{this.ei(o),r.push(o.key)}),r}ii(){this.Js.forEach(t=>this.ei(t))}ei(t){this.Js=this.Js.delete(t),this.Xs=this.Xs.delete(t)}ri(t){const n=new E(new D([])),s=new V(n,t),i=new V(n,t+1);let r=b();return this.Xs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new V(t,0),s=this.Js.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class V{constructor(t,n){this.key=t,this.oi=n}static Ys(t,n){return E.comparator(t.key,n.key)||N(t.oi,n.oi)}static Zs(t,n){return N(t.oi,n.oi)||E.comparator(t.key,n.key)}}/**
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
 */class dl{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.gs=[],this.ci=1,this.ui=new j(V.Ys)}checkEmpty(t){return d.resolve(this.gs.length===0)}addMutationBatch(t,n,s,i){const r=this.ci;this.ci++,this.gs.length>0&&this.gs[this.gs.length-1];const o=new Xu(r,n,s,i);this.gs.push(o);for(const a of i)this.ui=this.ui.add(new V(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(t,n){return d.resolve(this.ai(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.hi(s),r=i<0?0:i;return d.resolve(this.gs.length>r?this.gs[r]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.gs.length===0?-1:this.ci-1)}getAllMutationBatches(t){return d.resolve(this.gs.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new V(n,0),i=new V(n,Number.POSITIVE_INFINITY),r=[];return this.ui.forEachInRange([s,i],o=>{const a=this.ai(o.oi);r.push(a)}),d.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new j(N);return n.forEach(i=>{const r=new V(i,0),o=new V(i,Number.POSITIVE_INFINITY);this.ui.forEachInRange([r,o],a=>{s=s.add(a.oi)})}),d.resolve(this.li(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;E.isDocumentKey(r)||(r=r.child(""));const o=new V(new E(r),0);let a=new j(N);return this.ui.forEachWhile(c=>{const h=c.key.path;return!!s.isPrefixOf(h)&&(h.length===i&&(a=a.add(c.oi)),!0)},o),d.resolve(this.li(a))}li(t){const n=[];return t.forEach(s=>{const i=this.ai(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){O(this.fi(n.batchId,"removed")===0),this.gs.shift();let s=this.ui;return d.forEach(n.mutations,i=>{const r=new V(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.ui=s})}Qe(t){}containsKey(t,n){const s=new V(n,0),i=this.ui.firstAfterOrEqual(s);return d.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.gs.length,d.resolve()}fi(t,n){return this.hi(t)}hi(t){return this.gs.length===0?0:t-this.gs[0].batchId}ai(t){const n=this.hi(t);return n<0||n>=this.gs.length?null:this.gs[n]}}/**
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
 */class fl{constructor(t){this.di=t,this.docs=new K(E.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.di(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return d.resolve(s?s.document.mutableCopy():H.newInvalidDocument(n))}getEntries(t,n){let s=Ct();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():H.newInvalidDocument(i))}),d.resolve(s)}getAll(t,n,s){let i=Ct();const r=new E(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||c.readTime.compareTo(s)<=0||(i=i.insert(c.key,c.mutableCopy()))}return d.resolve(i)}_i(t,n){return d.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new gl(this)}getSize(t){return d.resolve(this.size)}}class gl extends nl{constructor(t){super(),this.Tn=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Tn.addEntry(t,i)):this.Tn.removeEntry(s)}),d.waitFor(n)}getFromCache(t,n){return this.Tn.getEntry(t,n)}getAllFromCache(t,n){return this.Tn.getEntries(t,n)}}/**
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
 */class pl{constructor(t){this.persistence=t,this.wi=new ke(n=>Js(n),Zs),this.lastRemoteSnapshotVersion=C.min(),this.highestTargetId=0,this.mi=0,this.gi=new ii,this.targetCount=0,this.yi=Ut.He()}forEachTarget(t,n){return this.wi.forEach((s,i)=>n(i)),d.resolve()}getLastRemoteSnapshotVersion(t){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return d.resolve(this.mi)}allocateTargetId(t){return this.highestTargetId=this.yi.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.mi&&(this.mi=n),d.resolve()}Ze(t){this.wi.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.yi=new Ut(n),this.highestTargetId=n),t.sequenceNumber>this.mi&&(this.mi=t.sequenceNumber)}addTargetData(t,n){return this.Ze(n),this.targetCount+=1,d.resolve()}updateTargetData(t,n){return this.Ze(n),d.resolve()}removeTargetData(t,n){return this.wi.delete(n.target),this.gi.si(n.targetId),this.targetCount-=1,d.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.wi.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.wi.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),d.waitFor(r).next(()=>i)}getTargetCount(t){return d.resolve(this.targetCount)}getTargetData(t,n){const s=this.wi.get(n)||null;return d.resolve(s)}addMatchingKeys(t,n,s){return this.gi.ti(n,s),d.resolve()}removeMatchingKeys(t,n,s){this.gi.ni(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),d.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.gi.si(n),d.resolve()}getMatchingKeysForTargetId(t,n){const s=this.gi.ri(n);return d.resolve(s)}containsKey(t,n){return d.resolve(this.gi.containsKey(n))}}/**
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
 */class ml{constructor(t,n){this.pi={},this.overlays={},this.Nn=new Xs(0),this.xn=!1,this.xn=!0,this.referenceDelegate=t(this),this.Un=new pl(this),this.indexManager=new tl,this.qn=function(s){return new fl(s)}(s=>this.referenceDelegate.Ii(s)),this.O=new Ju(n),this.Kn=new ul(this.O)}start(){return Promise.resolve()}shutdown(){return this.xn=!1,Promise.resolve()}get started(){return this.xn}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new ll,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.pi[t.toKey()];return s||(s=new dl(n,this.referenceDelegate),this.pi[t.toKey()]=s),s}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getBundleCache(){return this.Kn}runTransaction(t,n,s){m("MemoryPersistence","Starting transaction:",t);const i=new yl(this.Nn.next());return this.referenceDelegate.Ei(),s(i).next(r=>this.referenceDelegate.Ti(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ai(t,n){return d.or(Object.values(this.pi).map(s=>()=>s.containsKey(t,n)))}}class yl extends Qu{constructor(t){super(),this.currentSequenceNumber=t}}class ri{constructor(t){this.persistence=t,this.Ri=new ii,this.Pi=null}static bi(t){return new ri(t)}get vi(){if(this.Pi)return this.Pi;throw I()}addReference(t,n,s){return this.Ri.addReference(s,n),this.vi.delete(s.toString()),d.resolve()}removeReference(t,n,s){return this.Ri.removeReference(s,n),this.vi.add(s.toString()),d.resolve()}markPotentiallyOrphaned(t,n){return this.vi.add(n.toString()),d.resolve()}removeTarget(t,n){this.Ri.si(n.targetId).forEach(i=>this.vi.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.vi.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}Ei(){this.Pi=new Set}Ti(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.vi,s=>{const i=E.fromPath(s);return this.Vi(t,i).next(r=>{r||n.removeEntry(i,C.min())})}).next(()=>(this.Pi=null,n.apply(t)))}updateLimboDocument(t,n){return this.Vi(t,n).next(s=>{s?this.vi.delete(n.toString()):this.vi.add(n.toString())})}Ii(t){return 0}Vi(t,n){return d.or([()=>d.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ai(t,n)])}}class er{constructor(){this.activeTargetIds=Fo()}Ci(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ni(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Di(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class vl{constructor(){this._r=new er,this.wr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this._r.Ci(t),this.wr[t]||"not-current"}updateQueryState(t,n,s){this.wr[t]=n}removeLocalQueryTarget(t){this._r.Ni(t)}isLocalQueryTarget(t){return this._r.activeTargetIds.has(t)}clearQueryState(t){delete this.wr[t]}getAllActiveQueryTargets(){return this._r.activeTargetIds}isActiveQueryTarget(t){return this._r.activeTargetIds.has(t)}start(){return this._r=new er,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}/**
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
 */class wl{mr(t){}shutdown(){}}/**
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
 */class nr{constructor(){this.gr=()=>this.yr(),this.pr=()=>this.Ir(),this.Er=[],this.Tr()}mr(t){this.Er.push(t)}shutdown(){window.removeEventListener("online",this.gr),window.removeEventListener("offline",this.pr)}Tr(){window.addEventListener("online",this.gr),window.addEventListener("offline",this.pr)}yr(){m("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Er)t(0)}Ir(){m("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Er)t(1)}static Vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const El={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class Tl{constructor(t){this.Ar=t.Ar,this.Rr=t.Rr}Pr(t){this.br=t}vr(t){this.Vr=t}onMessage(t){this.Sr=t}close(){this.Rr()}send(t){this.Ar(t)}Dr(){this.br()}Cr(t){this.Vr(t)}Nr(t){this.Sr(t)}}/**
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
 */class Il extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.kr=n+"://"+t.host,this.Or="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Mr(t,n,s,i,r){const o=this.$r(t,n);m("RestConnection","Sending: ",o,s);const a={};return this.Fr(a,i,r),this.Br(t,o,a,s).then(c=>(m("RestConnection","Received: ",c),c),c=>{throw Pi("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",s),c})}Lr(t,n,s,i,r){return this.Mr(t,n,s,i,r)}Fr(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Kt,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}$r(t,n){const s=El[t];return`${this.kr}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Br(t,n,s,i){return new Promise((r,o)=>{const a=new Bh;a.listenOnce($h.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case $n.NO_ERROR:const h=a.getResponseJson();m("Connection","XHR received:",JSON.stringify(h)),r(h);break;case $n.TIMEOUT:m("Connection",'RPC "'+t+'" timed out'),o(new w(f.DEADLINE_EXCEEDED,"Request time out"));break;case $n.HTTP_ERROR:const u=a.getStatus();if(m("Connection",'RPC "'+t+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const p=function(y){const T=y.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(T)>=0?T:f.UNKNOWN}(l.status);o(new w(p,l.message))}else o(new w(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new w(f.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{m("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}Ur(t,n,s){const i=[this.kr,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Fh(),o=Uh(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new jh({})),this.Fr(a.initMessageHeaders,n,s),Va()||Ua()||$a()||qa()||ja()||Fa()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=i.join("");m("Connection","Creating WebChannel: "+c,a);const h=r.createWebChannel(c,a);let u=!1,l=!1;const p=new Tl({Ar:T=>{l?m("Connection","Not sending because WebChannel is closed:",T):(u||(m("Connection","Opening WebChannel transport."),h.open(),u=!0),m("Connection","WebChannel sending:",T),h.send(T))},Rr:()=>h.close()}),y=(T,R,P)=>{T.listen(R,nt=>{try{P(nt)}catch(st){setTimeout(()=>{throw st},0)}})};return y(h,Me.EventType.OPEN,()=>{l||m("Connection","WebChannel transport opened.")}),y(h,Me.EventType.CLOSE,()=>{l||(l=!0,m("Connection","WebChannel transport closed"),p.Cr())}),y(h,Me.EventType.ERROR,T=>{l||(l=!0,Pi("Connection","WebChannel transport errored:",T),p.Cr(new w(f.UNAVAILABLE,"The operation could not be completed")))}),y(h,Me.EventType.MESSAGE,T=>{var R;if(!l){const P=T.data[0];O(!!P);const nt=P,st=nt.error||((R=nt[0])===null||R===void 0?void 0:R.error);if(st){m("Connection","WebChannel received error:",st);const Gt=st.status;let Wt=function(da){const fi=x[da];if(fi!==void 0)return Vo(fi)}(Gt),di=st.message;Wt===void 0&&(Wt=f.INTERNAL,di="Unknown error status: "+Gt+" with message "+st.message),l=!0,p.Cr(new w(Wt,di)),h.close()}else m("Connection","WebChannel received:",P),p.Nr(P)}}),y(o,qh.STAT_EVENT,T=>{T.stat===Li.PROXY?m("Connection","Detected buffering proxy"):T.stat===Li.NOPROXY&&m("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.Dr()},0),p}}function Bn(){return typeof document!="undefined"?document:null}/**
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
 */function Go(e){return new Ou(e,!0)}class Wo{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Sn=t,this.timerId=n,this.qr=s,this.Kr=i,this.Gr=r,this.jr=0,this.Qr=null,this.Wr=Date.now(),this.reset()}reset(){this.jr=0}zr(){this.jr=this.Gr}Hr(t){this.cancel();const n=Math.floor(this.jr+this.Jr()),s=Math.max(0,Date.now()-this.Wr),i=Math.max(0,n-s);i>0&&m("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.jr} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Qr=this.Sn.enqueueAfterDelay(this.timerId,i,()=>(this.Wr=Date.now(),t())),this.jr*=this.Kr,this.jr<this.qr&&(this.jr=this.qr),this.jr>this.Gr&&(this.jr=this.Gr)}Yr(){this.Qr!==null&&(this.Qr.skipDelay(),this.Qr=null)}cancel(){this.Qr!==null&&(this.Qr.cancel(),this.Qr=null)}Jr(){return(Math.random()-.5)*this.jr}}/**
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
 */class Cl{constructor(t,n,s,i,r,o,a,c){this.Sn=t,this.Xr=s,this.Zr=i,this.eo=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.no=0,this.so=null,this.io=null,this.stream=null,this.ro=new Wo(t,n)}oo(){return this.state===1||this.state===5||this.co()}co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.uo()}async stop(){this.oo()&&await this.close(0)}ao(){this.state=0,this.ro.reset()}ho(){this.co()&&this.so===null&&(this.so=this.Sn.enqueueAfterDelay(this.Xr,6e4,()=>this.lo()))}fo(t){this._o(),this.stream.send(t)}async lo(){if(this.co())return this.close(0)}_o(){this.so&&(this.so.cancel(),this.so=null)}wo(){this.io&&(this.io.cancel(),this.io=null)}async close(t,n){this._o(),this.wo(),this.ro.cancel(),this.no++,t!==4?this.ro.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(ht(n.toString()),ht("Using maximum backoff delay to prevent overloading the backend."),this.ro.zr()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.mo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.vr(n)}mo(){}auth(){this.state=1;const t=this.yo(this.no),n=this.no;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.no===n&&this.po(s,i)},s=>{t(()=>{const i=new w(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Io(i)})})}po(t,n){const s=this.yo(this.no);this.stream=this.Eo(t,n),this.stream.Pr(()=>{s(()=>(this.state=2,this.io=this.Sn.enqueueAfterDelay(this.Zr,1e4,()=>(this.co()&&(this.state=3),Promise.resolve())),this.listener.Pr()))}),this.stream.vr(i=>{s(()=>this.Io(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}uo(){this.state=5,this.ro.Hr(async()=>{this.state=0,this.start()})}Io(t){return m("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}yo(t){return n=>{this.Sn.enqueueAndForget(()=>this.no===t?n():(m("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Sl extends Cl{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.O=r}Eo(t,n){return this.eo.Ur("Listen",t,n)}onMessage(t){this.ro.reset();const n=Uu(this.O,t),s=function(i){if(!("targetChange"in i))return C.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?C.min():r.readTime?pe(r.readTime):C.min()}(t);return this.listener.To(n,s)}Ao(t){const n={};n.database=Zi(this.O),n.addTarget=function(i,r){let o;const a=r.target;return o=ls(a)?{documents:$u(i,a)}:{query:qu(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Pu(i,r.resumeToken):r.snapshotVersion.compareTo(C.min())>0&&(o.readTime=Mu(i,r.snapshotVersion.toTimestamp())),o}(this.O,t);const s=Bu(this.O,t);s&&(n.labels=s),this.fo(n)}Ro(t){const n={};n.database=Zi(this.O),n.removeTarget=t,this.fo(n)}}/**
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
 */class Al extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.eo=s,this.O=i,this.Co=!1}No(){if(this.Co)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}Mr(t,n,s){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.eo.Mr(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(f.UNKNOWN,i.toString())})}Lr(t,n,s){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.eo.Lr(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(f.UNKNOWN,i.toString())})}terminate(){this.Co=!0}}class _l{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.xo=0,this.ko=null,this.Oo=!0}Mo(){this.xo===0&&(this.$o("Unknown"),this.ko=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ko=null,this.Fo("Backend didn't respond within 10 seconds."),this.$o("Offline"),Promise.resolve())))}Bo(t){this.state==="Online"?this.$o("Unknown"):(this.xo++,this.xo>=1&&(this.Lo(),this.Fo(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.$o("Offline")))}set(t){this.Lo(),this.xo=0,t==="Online"&&(this.Oo=!1),this.$o(t)}$o(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Fo(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Oo?(ht(n),this.Oo=!1):m("OnlineStateTracker",n)}Lo(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}}/**
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
 */class Nl{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Uo=[],this.qo=new Map,this.Ko=new Set,this.Go=[],this.jo=r,this.jo.mr(o=>{s.enqueueAndForget(async()=>{De(this)&&(m("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=A(a);c.Ko.add(4),await be(c),c.Qo.set("Unknown"),c.Ko.delete(4),await bn(c)}(this))})}),this.Qo=new _l(s,i)}}async function bn(e){if(De(e))for(const t of e.Go)await t(!0)}async function be(e){for(const t of e.Go)await t(!1)}function Qo(e,t){const n=A(e);n.qo.has(t.targetId)||(n.qo.set(t.targetId,t),ci(n)?ai(n):Ht(n).co()&&oi(n,t))}function Xo(e,t){const n=A(e),s=Ht(n);n.qo.delete(t),s.co()&&Yo(n,t),n.qo.size===0&&(s.co()?s.ho():De(n)&&n.Qo.set("Unknown"))}function oi(e,t){e.Wo.Z(t.targetId),Ht(e).Ao(t)}function Yo(e,t){e.Wo.Z(t),Ht(e).Ro(t)}function ai(e){e.Wo=new Ru({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Tt:t=>e.qo.get(t)||null}),Ht(e).start(),e.Qo.Mo()}function ci(e){return De(e)&&!Ht(e).oo()&&e.qo.size>0}function De(e){return A(e).Ko.size===0}function Jo(e){e.Wo=void 0}async function kl(e){e.qo.forEach((t,n)=>{oi(e,t)})}async function bl(e,t){Jo(e),ci(e)?(e.Qo.Bo(t),ai(e)):e.Qo.set("Unknown")}async function Dl(e,t,n){if(e.Qo.set("Online"),t instanceof $o&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.qo.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.qo.delete(o),s.Wo.removeTarget(o))}(e,t)}catch(s){m("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await sr(e,s)}else if(t instanceof qe?e.Wo.ct(t):t instanceof Uo?e.Wo._t(t):e.Wo.ht(t),!n.isEqual(C.min()))try{const s=await Ho(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Wo.yt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const h=i.qo.get(c);h&&i.qo.set(c,h.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.qo.get(a);if(!c)return;i.qo.set(a,c.withResumeToken(B.EMPTY_BYTE_STRING,c.snapshotVersion)),Yo(i,a);const h=new yt(c.target,a,1,c.sequenceNumber);oi(i,h)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){m("RemoteStore","Failed to raise snapshot:",s),await sr(e,s)}}async function sr(e,t,n){if(!Ne(t))throw t;e.Ko.add(1),await be(e),e.Qo.set("Offline"),n||(n=()=>Ho(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{m("RemoteStore","Retrying IndexedDB access"),await n(),e.Ko.delete(1),await bn(e)})}async function ir(e,t){const n=A(e);n.asyncQueue.verifyOperationInProgress(),m("RemoteStore","RemoteStore received new credentials");const s=De(n);n.Ko.add(3),await be(n),s&&n.Qo.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ko.delete(3),await bn(n)}async function Rl(e,t){const n=A(e);t?(n.Ko.delete(2),await bn(n)):t||(n.Ko.add(2),await be(n),n.Qo.set("Unknown"))}function Ht(e){return e.zo||(e.zo=function(t,n,s){const i=A(t);return i.No(),new Sl(n,i.eo,i.authCredentials,i.appCheckCredentials,i.O,s)}(e.datastore,e.asyncQueue,{Pr:kl.bind(null,e),vr:bl.bind(null,e),To:Dl.bind(null,e)}),e.Go.push(async t=>{t?(e.zo.ao(),ci(e)?ai(e):e.Qo.set("Unknown")):(await e.zo.stop(),Jo(e))})),e.zo}/**
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
 */class hi{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Rt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new hi(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zo(e,t){if(ht("AsyncQueue",`${t}: ${e}`),Ne(e))return new w(f.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Lt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||E.comparator(n.key,s.key):(n,s)=>E.comparator(n.key,s.key),this.keyedMap=ms(),this.sortedSet=new K(this.comparator)}static emptySet(t){return new Lt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Lt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Lt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class rr{constructor(){this.Jo=new K(E.comparator)}track(t){const n=t.doc.key,s=this.Jo.get(n);s?t.type!==0&&s.type===3?this.Jo=this.Jo.insert(n,t):t.type===3&&s.type!==1?this.Jo=this.Jo.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Jo=this.Jo.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Jo=this.Jo.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Jo=this.Jo.remove(n):t.type===1&&s.type===2?this.Jo=this.Jo.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Jo=this.Jo.insert(n,{type:2,doc:t.doc}):I():this.Jo=this.Jo.insert(n,t)}Yo(){const t=[];return this.Jo.inorderTraversal((n,s)=>{t.push(s)}),t}}class $t{constructor(t,n,s,i,r,o,a,c){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(t,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new $t(t,n,Lt.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&_n(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class xl{constructor(){this.Xo=void 0,this.listeners=[]}}class Ll{constructor(){this.queries=new ke(t=>ko(t),_n),this.onlineState="Unknown",this.Zo=new Set}}async function Ol(e,t){const n=A(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new xl),i)try{r.Xo=await n.onListen(s)}catch(o){const a=Zo(o,`Initialization of query '${ds(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.tc(n.onlineState),r.Xo&&t.ec(r.Xo)&&ui(n)}async function Ml(e,t){const n=A(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Pl(e,t){const n=A(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.ec(i)&&(s=!0);o.Xo=i}}s&&ui(n)}function Vl(e,t,n){const s=A(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function ui(e){e.Zo.forEach(t=>{t.next()})}class Fl{constructor(t,n,s){this.query=t,this.nc=n,this.sc=!1,this.ic=null,this.onlineState="Unknown",this.options=s||{}}ec(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new $t(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.sc?this.rc(t)&&(this.nc.next(t),n=!0):this.oc(t,this.onlineState)&&(this.cc(t),n=!0),this.ic=t,n}onError(t){this.nc.error(t)}tc(t){this.onlineState=t;let n=!1;return this.ic&&!this.sc&&this.oc(this.ic,t)&&(this.cc(this.ic),n=!0),n}oc(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.uc||!s)&&(!t.docs.isEmpty()||n==="Offline")}rc(t){if(t.docChanges.length>0)return!0;const n=this.ic&&this.ic.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}cc(t){t=$t.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.sc=!0,this.nc.next(t)}}/**
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
 */class ta{constructor(t){this.key=t}}class ea{constructor(t){this.key=t}}class Ul{constructor(t,n){this.query=t,this.dc=n,this._c=null,this.current=!1,this.wc=b(),this.mutatedKeys=b(),this.mc=bo(t),this.gc=new Lt(this.mc)}get yc(){return this.dc}Ic(t,n){const s=n?n.Ec:new rr,i=n?n.gc:this.gc;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=Ue(this.query)&&i.size===this.query.limit?i.last():null,h=en(this.query)&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((u,l)=>{const p=i.get(u),y=ei(this.query,l)?l:null,T=!!p&&this.mutatedKeys.has(p.key),R=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let P=!1;p&&y?p.data.isEqual(y.data)?T!==R&&(s.track({type:3,doc:y}),P=!0):this.Tc(p,y)||(s.track({type:2,doc:y}),P=!0,(c&&this.mc(y,c)>0||h&&this.mc(y,h)<0)&&(a=!0)):!p&&y?(s.track({type:0,doc:y}),P=!0):p&&!y&&(s.track({type:1,doc:p}),P=!0,(c||h)&&(a=!0)),P&&(y?(o=o.add(y),r=R?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),Ue(this.query)||en(this.query))for(;o.size>this.query.limit;){const u=Ue(this.query)?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{gc:o,Ec:s,ks:a,mutatedKeys:r}}Tc(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.gc;this.gc=t.gc,this.mutatedKeys=t.mutatedKeys;const r=t.Ec.Yo();r.sort((h,u)=>function(l,p){const y=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return y(l)-y(p)}(h.type,u.type)||this.mc(h.doc,u.doc)),this.Ac(s);const o=n?this.Rc():[],a=this.wc.size===0&&this.current?1:0,c=a!==this._c;return this._c=a,r.length!==0||c?{snapshot:new $t(this.query,t.gc,i,r,t.mutatedKeys,a===0,c,!1),Pc:o}:{Pc:o}}tc(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({gc:this.gc,Ec:new rr,mutatedKeys:this.mutatedKeys,ks:!1},!1)):{Pc:[]}}bc(t){return!this.dc.has(t)&&!!this.gc.has(t)&&!this.gc.get(t).hasLocalMutations}Ac(t){t&&(t.addedDocuments.forEach(n=>this.dc=this.dc.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.dc=this.dc.delete(n)),this.current=t.current)}Rc(){if(!this.current)return[];const t=this.wc;this.wc=b(),this.gc.forEach(s=>{this.bc(s.key)&&(this.wc=this.wc.add(s.key))});const n=[];return t.forEach(s=>{this.wc.has(s)||n.push(new ea(s))}),this.wc.forEach(s=>{t.has(s)||n.push(new ta(s))}),n}vc(t){this.dc=t.Ks,this.wc=b();const n=this.Ic(t.documents);return this.applyChanges(n,!0)}Vc(){return $t.fromInitialDocuments(this.query,this.gc,this.mutatedKeys,this._c===0)}}class $l{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class ql{constructor(t){this.key=t,this.Sc=!1}}class jl{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Dc={},this.Cc=new ke(a=>ko(a),_n),this.Nc=new Map,this.xc=new Set,this.kc=new K(E.comparator),this.Oc=new Map,this.Mc=new ii,this.$c={},this.Fc=new Map,this.Bc=Ut.Je(),this.onlineState="Unknown",this.Lc=void 0}get isPrimaryClient(){return this.Lc===!0}}async function Bl(e,t){const n=Xl(e);let s,i;const r=n.Cc.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Vc();else{const o=await hl(n.localStore,It(t));n.isPrimaryClient&&Qo(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Kl(n,t,s,a==="current")}return i}async function Kl(e,t,n,s){e.Uc=(u,l,p)=>async function(y,T,R,P){let nt=T.view.Ic(R);nt.ks&&(nt=await tr(y.localStore,T.query,!1).then(({documents:Wt})=>T.view.Ic(Wt,nt)));const st=P&&P.targetChanges.get(T.targetId),Gt=T.view.applyChanges(nt,y.isPrimaryClient,st);return ar(y,T.targetId,Gt.Pc),Gt.snapshot}(e,u,l,p);const i=await tr(e.localStore,t,!0),r=new Ul(t,i.Ks),o=r.Ic(i.documents),a=_e.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline"),c=r.applyChanges(o,e.isPrimaryClient,a);ar(e,n,c.Pc);const h=new $l(t,n,r);return e.Cc.set(t,h),e.Nc.has(n)?e.Nc.get(n).push(t):e.Nc.set(n,[t]),c.snapshot}async function zl(e,t){const n=A(e),s=n.Cc.get(t),i=n.Nc.get(s.targetId);if(i.length>1)return n.Nc.set(s.targetId,i.filter(r=>!_n(r,t))),void n.Cc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await vs(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Xo(n.remoteStore,s.targetId),ws(n,s.targetId)}).catch(ni)):(ws(n,s.targetId),await vs(n.localStore,s.targetId,!0))}async function na(e,t){const n=A(e);try{const s=await al(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.Oc.get(r);o&&(O(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Sc=!0:i.modifiedDocuments.size>0?O(o.Sc):i.removedDocuments.size>0&&(O(o.Sc),o.Sc=!1))}),await ia(n,s,t)}catch(s){await ni(s)}}function or(e,t,n){const s=A(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.Cc.forEach((r,o)=>{const a=o.view.tc(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=A(r);a.onlineState=o;let c=!1;a.queries.forEach((h,u)=>{for(const l of u.listeners)l.tc(o)&&(c=!0)}),c&&ui(a)}(s.eventManager,t),i.length&&s.Dc.To(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Hl(e,t,n){const s=A(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.Oc.get(t),r=i&&i.key;if(r){let o=new K(E.comparator);o=o.insert(r,H.newNoDocument(r,C.min()));const a=b().add(r),c=new kn(C.min(),new Map,new j(N),o,a);await na(s,c),s.kc=s.kc.remove(r),s.Oc.delete(t),li(s)}else await vs(s.localStore,t,!1).then(()=>ws(s,t,n)).catch(ni)}function ws(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.Nc.get(t))e.Cc.delete(s),n&&e.Dc.qc(s,n);e.Nc.delete(t),e.isPrimaryClient&&e.Mc.si(t).forEach(s=>{e.Mc.containsKey(s)||sa(e,s)})}function sa(e,t){e.xc.delete(t.path.canonicalString());const n=e.kc.get(t);n!==null&&(Xo(e.remoteStore,n),e.kc=e.kc.remove(t),e.Oc.delete(n),li(e))}function ar(e,t,n){for(const s of n)s instanceof ta?(e.Mc.addReference(s.key,t),Gl(e,s)):s instanceof ea?(m("SyncEngine","Document no longer in limbo: "+s.key),e.Mc.removeReference(s.key,t),e.Mc.containsKey(s.key)||sa(e,s.key)):I()}function Gl(e,t){const n=t.key,s=n.path.canonicalString();e.kc.get(n)||e.xc.has(s)||(m("SyncEngine","New document in limbo: "+n),e.xc.add(s),li(e))}function li(e){for(;e.xc.size>0&&e.kc.size<e.maxConcurrentLimboResolutions;){const t=e.xc.values().next().value;e.xc.delete(t);const n=new E(D.fromString(t)),s=e.Bc.next();e.Oc.set(s,new ql(n)),e.kc=e.kc.insert(n,s),Qo(e.remoteStore,new yt(It(ti(n.path)),s,2,Xs.A))}}async function ia(e,t,n){const s=A(e),i=[],r=[],o=[];s.Cc.isEmpty()||(s.Cc.forEach((a,c)=>{o.push(s.Uc(c,t,n).then(h=>{if(h){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,h.fromCache?"not-current":"current"),i.push(h);const u=si.Ss(c.targetId,h);r.push(u)}}))}),await Promise.all(o),s.Dc.To(i),await async function(a,c){const h=A(a);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>d.forEach(c,l=>d.forEach(l.vs,p=>h.persistence.referenceDelegate.addReference(u,l.targetId,p)).next(()=>d.forEach(l.Vs,p=>h.persistence.referenceDelegate.removeReference(u,l.targetId,p)))))}catch(u){if(!Ne(u))throw u;m("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const l=u.targetId;if(!u.fromCache){const p=h.Ms.get(l),y=p.snapshotVersion,T=p.withLastLimboFreeSnapshotVersion(y);h.Ms=h.Ms.insert(l,T)}}}(s.localStore,r))}async function Wl(e,t){const n=A(e);if(!n.currentUser.isEqual(t)){m("SyncEngine","User change. New user:",t.toKey());const s=await zo(n.localStore,t);n.currentUser=t,function(i,r){i.Fc.forEach(o=>{o.forEach(a=>{a.reject(new w(f.CANCELLED,r))})}),i.Fc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await ia(n,s.qs)}}function Ql(e,t){const n=A(e),s=n.Oc.get(t);if(s&&s.Sc)return b().add(s.key);{let i=b();const r=n.Nc.get(t);if(!r)return i;for(const o of r){const a=n.Cc.get(o);i=i.unionWith(a.view.yc)}return i}}function Xl(e){const t=A(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=na.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ql.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Hl.bind(null,t),t.Dc.To=Pl.bind(null,t.eventManager),t.Dc.qc=Vl.bind(null,t.eventManager),t}class Yl{constructor(){this.synchronizeTabs=!1}async initialize(t){this.O=Go(t.databaseInfo.databaseId),this.sharedClientState=this.Gc(t),this.persistence=this.jc(t),await this.persistence.start(),this.gcScheduler=this.Qc(t),this.localStore=this.Wc(t)}Qc(t){return null}Wc(t){return ol(this.persistence,new il,t.initialUser,this.O)}jc(t){return new ml(ri.bi,this.O)}Gc(t){return new vl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Jl{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>or(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Wl.bind(null,this.syncEngine),await Rl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Ll}createDatastore(t){const n=Go(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new Il(i));var i;return function(r,o,a,c){return new Al(r,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>or(this.syncEngine,a,0),o=nr.Vt()?new nr:new wl,new Nl(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,c,h){const u=new jl(s,i,r,o,a,c);return h&&(u.Lc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=A(t);m("RemoteStore","RemoteStore shutting down."),n.Ko.add(5),await be(n),n.jo.shutdown(),n.Qo.set("Unknown")}(this.remoteStore)}}/**
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
 */class Zl{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Hc(this.observer.next,t)}error(t){this.observer.error?this.Hc(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Jc(){this.muted=!0}Hc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class td{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Y.UNAUTHENTICATED,this.clientId=Jh.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{m("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(m("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Rt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Zo(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function ed(e,t){e.asyncQueue.verifyOperationInProgress(),m("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await zo(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function nd(e,t){e.asyncQueue.verifyOperationInProgress();const n=await sd(e);m("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>ir(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>ir(t.remoteStore,r)),e.onlineComponents=t}async function sd(e){return e.offlineComponents||(m("FirestoreClient","Using default OfflineComponentProvider"),await ed(e,new Yl)),e.offlineComponents}async function id(e){return e.onlineComponents||(m("FirestoreClient","Using default OnlineComponentProvider"),await nd(e,new Jl)),e.onlineComponents}async function cr(e){const t=await id(e),n=t.eventManager;return n.onListen=Bl.bind(null,t.syncEngine),n.onUnlisten=zl.bind(null,t.syncEngine),n}const hr=new Map;/**
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
 */function rd(e,t,n){if(!n)throw new w(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function od(e,t,n,s){if(t===!0&&s===!0)throw new w(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function ur(e){if(E.isDocumentKey(e))throw new w(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ad(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function Kn(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new w(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ad(e);throw new w(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class lr{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new w(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new w(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,od("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class ra{constructor(t,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lr({}),this._settingsFrozen=!1,t instanceof Vt?this._databaseId=t:(this._app=t,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new w(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vt(i.options.projectId)}(t))}get app(){if(!this._app)throw new w(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new w(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lr(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new zh;switch(n.type){case"gapi":const s=n.client;return O(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new Wh(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new w(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=hr.get(t);n&&(m("ComponentProvider","Removing Datastore"),hr.delete(t),n.terminate())}(this),Promise.resolve()}}/**
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
 */class At{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ot(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new At(this.firestore,t,this._key)}}class Dn{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Dn(this.firestore,t,this._query)}}class Ot extends Dn{constructor(t,n,s){super(t,n,ti(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new At(this.firestore,null,new E(t))}withConverter(t){return new Ot(this.firestore,t,this._path)}}function Qd(e,t,...n){if(e=Tr(e),rd("collection","path",t),e instanceof ra){const s=D.fromString(t,...n);return ur(s),new Ot(e,null,s)}{if(!(e instanceof At||e instanceof Ot))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(D.fromString(t,...n));return ur(s),new Ot(e.firestore,null,s)}}/**
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
 */class cd{constructor(){this.hu=Promise.resolve(),this.lu=[],this.fu=!1,this.du=[],this._u=null,this.wu=!1,this.mu=!1,this.gu=[],this.ro=new Wo(this,"async_queue_retry"),this.yu=()=>{const n=Bn();n&&m("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ro.Yr()};const t=Bn();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.yu)}get isShuttingDown(){return this.fu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.fu){this.fu=!0,this.mu=t||!1;const n=Bn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.yu)}}enqueue(t){if(this.pu(),this.fu)return new Promise(()=>{});const n=new Rt;return this.Iu(()=>this.fu&&this.mu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.lu.push(t),this.Eu()))}async Eu(){if(this.lu.length!==0){try{await this.lu[0](),this.lu.shift(),this.ro.reset()}catch(t){if(!Ne(t))throw t;m("AsyncQueue","Operation failed with retryable error: "+t)}this.lu.length>0&&this.ro.Hr(()=>this.Eu())}}Iu(t){const n=this.hu.then(()=>(this.wu=!0,t().catch(s=>{this._u=s,this.wu=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw ht("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.wu=!1,s))));return this.hu=n,n}enqueueAfterDelay(t,n,s){this.pu(),this.gu.indexOf(t)>-1&&(n=0);const i=hi.createAndSchedule(this,t,n,s,r=>this.Tu(r));return this.du.push(i),i}pu(){this._u&&I()}verifyOperationInProgress(){}async Au(){let t;do t=this.hu,await t;while(t!==this.hu)}Ru(t){for(const n of this.du)if(n.timerId===t)return!0;return!1}Pu(t){return this.Au().then(()=>{this.du.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.du)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Au()})}bu(t){this.gu.push(t)}Tu(t){const n=this.du.indexOf(t);this.du.splice(n,1)}}function dr(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class Es extends ra{constructor(t,n,s){super(t,n,s),this.type="firestore",this._queue=new cd,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||oa(this),this._firestoreClient.terminate()}}function Xd(e=Lc()){return bc(e,"firestore").getImmediate()}function hd(e){return e._firestoreClient||oa(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function oa(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new nu(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new td(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
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
 */class aa{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new w(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class rn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new rn(B.fromBase64String(t))}catch(n){throw new w(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new rn(B.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class ud{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new w(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new w(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return N(this._lat,t._lat)||N(this._long,t._long)}}const ld=new RegExp("[~\\*/\\[\\]]");function dd(e,t,n){if(t.search(ld)>=0)throw fr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new aa(...t.split("."))._internalPath}catch{throw fr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function fr(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new w(f.INVALID_ARGUMENT,a+e+c)}/**
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
 */class ca{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new fd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(ha("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class fd extends ca{data(){return super.data()}}function ha(e,t){return typeof t=="string"?dd(e,t):t instanceof aa?t._internalPath:t._delegate._internalPath}/**
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
 */class Jt{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ua extends ca{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new je(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(ha("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class je extends ua{data(t={}){return super.data(t)}}class gd{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Jt(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new je(this._firestore,this._userDataWriter,s.key,s,new Jt(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new w(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new je(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Jt(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new je(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Jt(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,h=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),h=r.indexOf(o.doc.key)),{type:pd(o.type),doc:a,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function pd(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}/**
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
 */function md(e){if(en(e)&&e.explicitOrderBy.length===0)throw new w(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class yd{convertValue(t,n="none"){switch(Tt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return L(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Pt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){const s={};return Sn(t.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new ud(L(t.latitude),L(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=_o(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(de(t));default:return null}}convertTimestamp(t){const n=ut(t);return new ct(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=D.fromString(t);O(Ko(s));const i=new Vt(s.get(1),s.get(3)),r=new E(s.popFirst(5));return i.isEqual(n)||ht(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}class la extends yd{constructor(t){super(),this.firestore=t}convertBytes(t){return new rn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new At(this.firestore,null,n)}}function Yd(e,...t){var n,s,i;e=Tr(e);let r={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||dr(t[o])||(r=t[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(dr(t[o])){const l=t[o];t[o]=(n=l.next)===null||n===void 0?void 0:n.bind(l),t[o+1]=(s=l.error)===null||s===void 0?void 0:s.bind(l),t[o+2]=(i=l.complete)===null||i===void 0?void 0:i.bind(l)}let c,h,u;if(e instanceof At)h=Kn(e.firestore,Es),u=ti(e._key.path),c={next:l=>{t[o]&&t[o](vd(h,e,l))},error:t[o+1],complete:t[o+2]};else{const l=Kn(e,Dn);h=Kn(l.firestore,Es),u=l._query;const p=new la(h);c={next:y=>{t[o]&&t[o](new gd(h,p,l,y))},error:t[o+1],complete:t[o+2]},md(e._query)}return function(l,p,y,T){const R=new Zl(T),P=new Fl(p,R,y);return l.asyncQueue.enqueueAndForget(async()=>Ol(await cr(l),P)),()=>{R.Jc(),l.asyncQueue.enqueueAndForget(async()=>Ml(await cr(l),P))}}(hd(h),u,a,c)}function vd(e,t,n){const s=n.docs.get(t._key),i=new la(e);return new ua(e,i,t._key,s,new Jt(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){Kt=n})(xc),Ss(new un("firestore",(n,{options:s})=>{const i=n.getProvider("app").getImmediate(),r=new Es(i,new Hh(n.getProvider("auth-internal")),new Xh(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:t},s),r._setSettings(s),r},"PUBLIC")),Dt(Oi,"3.4.5",e),Dt(Oi,"3.4.5","esm2017")})();export{jd as A,Oa as B,fa as C,Gd as D,Fd as E,wd as F,Ia as G,Td as H,Id as I,Ed as J,Zt as K,Wd as L,Xd as M,Qd as N,Sd as O,Ud as P,Ld as Q,Nd as R,Hd as S,kd as T,$d as U,me as V,Yd as W,Aa as a,bd as b,Dd as c,Ca as d,Sa as e,Od as f,Cd as g,ka as h,zd as i,xd as j,Ad as k,_d as l,Rd as m,Da as n,xa as o,Ra as p,wr as q,Vd as r,ma as s,Ts as t,Pd as u,Md as v,Bd as w,Kd as x,La as y,qd as z};
