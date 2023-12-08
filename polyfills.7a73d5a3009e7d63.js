"use strict";(self.webpackChunkcard_editor=self.webpackChunkcard_editor||[]).push([[429],{253:(ke,Ze,Me)=>{const Ne=":";const qe=function(r,...s){if(qe.translate){const h=qe.translate(r,s);r=h[0],s=h[1]}let u=ot(r[0],r.raw[0]);for(let h=1;h<r.length;h++)u+=s[h-1]+ot(r[h],r.raw[h]);return u},rt=":";function ot(r,s){return s.charAt(0)===rt?r.substring(function ze(r,s){for(let u=1,h=1;u<r.length;u++,h++)if("\\"===s[h])h++;else if(r[u]===Ne)return u;throw new Error(`Unterminated $localize metadata block in "${s}".`)}(r,s)+1):r}globalThis.$localize=qe,Me(332)},332:()=>{!function(e){const n=e.performance;function c(B){n&&n.mark&&n.mark(B)}function i(B,v){n&&n.measure&&n.measure(B,v)}c("Zone");const a=e.__Zone_symbol_prefix||"__zone_symbol__";function f(B){return a+B}const E=!0===e[f("forceDuplicateZoneCheck")];if(e.Zone){if(E||"function"!=typeof e.Zone.__symbol__)throw new Error("Zone already loaded.");return e.Zone}let g=(()=>{class B{static#e=this.__symbol__=f;static assertZonePatched(){if(e.Promise!==pe.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let t=B.current;for(;t.parent;)t=t.parent;return t}static get current(){return Q.zone}static get currentTask(){return Ee}static __load_patch(t,o,S=!1){if(pe.hasOwnProperty(t)){if(!S&&E)throw Error("Already loaded patch: "+t)}else if(!e["__Zone_disable_"+t]){const Z="Zone:"+t;c(Z),pe[t]=o(e,B,oe),i(Z,Z)}}get parent(){return this._parent}get name(){return this._name}constructor(t,o){this._parent=t,this._name=o?o.name||"unnamed":"<root>",this._properties=o&&o.properties||{},this._zoneDelegate=new I(this,this._parent&&this._parent._zoneDelegate,o)}get(t){const o=this.getZoneWith(t);if(o)return o._properties[t]}getZoneWith(t){let o=this;for(;o;){if(o._properties.hasOwnProperty(t))return o;o=o._parent}return null}fork(t){if(!t)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,t)}wrap(t,o){if("function"!=typeof t)throw new Error("Expecting function got: "+t);const S=this._zoneDelegate.intercept(this,t,o),Z=this;return function(){return Z.runGuarded(S,this,arguments,o)}}run(t,o,S,Z){Q={parent:Q,zone:this};try{return this._zoneDelegate.invoke(this,t,o,S,Z)}finally{Q=Q.parent}}runGuarded(t,o=null,S,Z){Q={parent:Q,zone:this};try{try{return this._zoneDelegate.invoke(this,t,o,S,Z)}catch(se){if(this._zoneDelegate.handleError(this,se))throw se}}finally{Q=Q.parent}}runTask(t,o,S){if(t.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(t.zone||ce).name+"; Execution: "+this.name+")");if(t.state===z&&(t.type===ue||t.type===C))return;const Z=t.state!=k;Z&&t._transitionTo(k,V),t.runCount++;const se=Ee;Ee=t,Q={parent:Q,zone:this};try{t.type==C&&t.data&&!t.data.isPeriodic&&(t.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,t,o,S)}catch(d){if(this._zoneDelegate.handleError(this,d))throw d}}finally{t.state!==z&&t.state!==m&&(t.type==ue||t.data&&t.data.isPeriodic?Z&&t._transitionTo(V,k):(t.runCount=0,this._updateTaskCount(t,-1),Z&&t._transitionTo(z,k,z))),Q=Q.parent,Ee=se}}scheduleTask(t){if(t.zone&&t.zone!==this){let S=this;for(;S;){if(S===t.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${t.zone.name}`);S=S.parent}}t._transitionTo(re,z);const o=[];t._zoneDelegates=o,t._zone=this;try{t=this._zoneDelegate.scheduleTask(this,t)}catch(S){throw t._transitionTo(m,re,z),this._zoneDelegate.handleError(this,S),S}return t._zoneDelegates===o&&this._updateTaskCount(t,1),t.state==re&&t._transitionTo(V,re),t}scheduleMicroTask(t,o,S,Z){return this.scheduleTask(new b($,t,o,S,Z,void 0))}scheduleMacroTask(t,o,S,Z,se){return this.scheduleTask(new b(C,t,o,S,Z,se))}scheduleEventTask(t,o,S,Z,se){return this.scheduleTask(new b(ue,t,o,S,Z,se))}cancelTask(t){if(t.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(t.zone||ce).name+"; Execution: "+this.name+")");if(t.state===V||t.state===k){t._transitionTo(q,V,k);try{this._zoneDelegate.cancelTask(this,t)}catch(o){throw t._transitionTo(m,q),this._zoneDelegate.handleError(this,o),o}return this._updateTaskCount(t,-1),t._transitionTo(z,q),t.runCount=0,t}}_updateTaskCount(t,o){const S=t._zoneDelegates;-1==o&&(t._zoneDelegates=null);for(let Z=0;Z<S.length;Z++)S[Z]._updateTaskCount(t.type,o)}}return B})();const N={name:"",onHasTask:(B,v,t,o)=>B.hasTask(t,o),onScheduleTask:(B,v,t,o)=>B.scheduleTask(t,o),onInvokeTask:(B,v,t,o,S,Z)=>B.invokeTask(t,o,S,Z),onCancelTask:(B,v,t,o)=>B.cancelTask(t,o)};class I{constructor(v,t,o){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=v,this._parentDelegate=t,this._forkZS=o&&(o&&o.onFork?o:t._forkZS),this._forkDlgt=o&&(o.onFork?t:t._forkDlgt),this._forkCurrZone=o&&(o.onFork?this.zone:t._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:t._interceptZS),this._interceptDlgt=o&&(o.onIntercept?t:t._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this.zone:t._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:t._invokeZS),this._invokeDlgt=o&&(o.onInvoke?t:t._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this.zone:t._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:t._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?t:t._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this.zone:t._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:t._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?t:t._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this.zone:t._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:t._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?t:t._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this.zone:t._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:t._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?t:t._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this.zone:t._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const S=o&&o.onHasTask;(S||t&&t._hasTaskZS)&&(this._hasTaskZS=S?o:N,this._hasTaskDlgt=t,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=v,o.onScheduleTask||(this._scheduleTaskZS=N,this._scheduleTaskDlgt=t,this._scheduleTaskCurrZone=this.zone),o.onInvokeTask||(this._invokeTaskZS=N,this._invokeTaskDlgt=t,this._invokeTaskCurrZone=this.zone),o.onCancelTask||(this._cancelTaskZS=N,this._cancelTaskDlgt=t,this._cancelTaskCurrZone=this.zone))}fork(v,t){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,v,t):new g(v,t)}intercept(v,t,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,v,t,o):t}invoke(v,t,o,S,Z){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,v,t,o,S,Z):t.apply(o,S)}handleError(v,t){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,v,t)}scheduleTask(v,t){let o=t;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,v,t),o||(o=t);else if(t.scheduleFn)t.scheduleFn(t);else{if(t.type!=$)throw new Error("Task is missing scheduleFn.");D(t)}return o}invokeTask(v,t,o,S){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,v,t,o,S):t.callback.apply(o,S)}cancelTask(v,t){let o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,v,t);else{if(!t.cancelFn)throw Error("Task is not cancelable");o=t.cancelFn(t)}return o}hasTask(v,t){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,v,t)}catch(o){this.handleError(v,o)}}_updateTaskCount(v,t){const o=this._taskCounts,S=o[v],Z=o[v]=S+t;if(Z<0)throw new Error("More tasks executed then were scheduled.");0!=S&&0!=Z||this.hasTask(this.zone,{microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:v})}}class b{constructor(v,t,o,S,Z,se){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=v,this.source=t,this.data=S,this.scheduleFn=Z,this.cancelFn=se,!o)throw new Error("callback is not defined");this.callback=o;const d=this;this.invoke=v===ue&&S&&S.useG?b.invokeTask:function(){return b.invokeTask.call(e,d,this,arguments)}}static invokeTask(v,t,o){v||(v=this),fe++;try{return v.runCount++,v.zone.runTask(v,t,o)}finally{1==fe&&y(),fe--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(z,re)}_transitionTo(v,t,o){if(this._state!==t&&this._state!==o)throw new Error(`${this.type} '${this.source}': can not transition to '${v}', expecting state '${t}'${o?" or '"+o+"'":""}, was '${this._state}'.`);this._state=v,v==z&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const H=f("setTimeout"),x=f("Promise"),j=f("then");let ae,J=[],G=!1;function ne(B){if(ae||e[x]&&(ae=e[x].resolve(0)),ae){let v=ae[j];v||(v=ae.then),v.call(ae,B)}else e[H](B,0)}function D(B){0===fe&&0===J.length&&ne(y),B&&J.push(B)}function y(){if(!G){for(G=!0;J.length;){const B=J;J=[];for(let v=0;v<B.length;v++){const t=B[v];try{t.zone.runTask(t,null,null)}catch(o){oe.onUnhandledError(o)}}}oe.microtaskDrainDone(),G=!1}}const ce={name:"NO ZONE"},z="notScheduled",re="scheduling",V="scheduled",k="running",q="canceling",m="unknown",$="microTask",C="macroTask",ue="eventTask",pe={},oe={symbol:f,currentZoneFrame:()=>Q,onUnhandledError:ee,microtaskDrainDone:ee,scheduleMicroTask:D,showUncaughtError:()=>!g[f("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:ee,patchMethod:()=>ee,bindArguments:()=>[],patchThen:()=>ee,patchMacroTask:()=>ee,patchEventPrototype:()=>ee,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>ee,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>ee,wrapWithCurrentZone:()=>ee,filterProperties:()=>[],attachOriginToPatched:()=>ee,_redefineProperty:()=>ee,patchCallbacks:()=>ee,nativeScheduleMicroTask:ne};let Q={parent:null,zone:new g(null,null)},Ee=null,fe=0;function ee(){}i("Zone","Zone"),e.Zone=g}(globalThis);const ke=Object.getOwnPropertyDescriptor,Ze=Object.defineProperty,Me=Object.getPrototypeOf,Ne=Object.create,it=Array.prototype.slice,Le="addEventListener",$e="removeEventListener",ve=Zone.__symbol__(Le),Ye=Zone.__symbol__($e),de="true",ge="false",Ce=Zone.__symbol__("");function He(e,n){return Zone.current.wrap(e,n)}function Be(e,n,c,i,a){return Zone.current.scheduleMacroTask(e,n,c,i,a)}const U=Zone.__symbol__,Ae=typeof window<"u",be=Ae?window:void 0,K=Ae&&be||globalThis,ct="removeAttribute";function xe(e,n){for(let c=e.length-1;c>=0;c--)"function"==typeof e[c]&&(e[c]=He(e[c],n+"_"+c));return e}function Ue(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&typeof e.set>"u")}const Ve=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,we=!("nw"in K)&&typeof K.process<"u"&&"[object process]"==={}.toString.call(K.process),me=!we&&!Ve&&!(!Ae||!be.HTMLElement),Je=typeof K.process<"u"&&"[object process]"==={}.toString.call(K.process)&&!Ve&&!(!Ae||!be.HTMLElement),Pe={},Qe=function(e){if(!(e=e||K.event))return;let n=Pe[e.type];n||(n=Pe[e.type]=U("ON_PROPERTY"+e.type));const c=this||e.target||K,i=c[n];let a;return me&&c===be&&"error"===e.type?(a=i&&i.call(this,e.message,e.filename,e.lineno,e.colno,e.error),!0===a&&e.preventDefault()):(a=i&&i.apply(this,arguments),null!=a&&!a&&e.preventDefault()),a};function Ge(e,n,c){let i=ke(e,n);if(!i&&c&&ke(c,n)&&(i={enumerable:!0,configurable:!0}),!i||!i.configurable)return;const a=U("on"+n+"patched");if(e.hasOwnProperty(a)&&e[a])return;delete i.writable,delete i.value;const f=i.get,E=i.set,g=n.slice(2);let N=Pe[g];N||(N=Pe[g]=U("ON_PROPERTY"+g)),i.set=function(I){let b=this;!b&&e===K&&(b=K),b&&("function"==typeof b[N]&&b.removeEventListener(g,Qe),E&&E.call(b,null),b[N]=I,"function"==typeof I&&b.addEventListener(g,Qe,!1))},i.get=function(){let I=this;if(!I&&e===K&&(I=K),!I)return null;const b=I[N];if(b)return b;if(f){let H=f.call(this);if(H)return i.set.call(this,H),"function"==typeof I[ct]&&I.removeAttribute(n),H}return null},Ze(e,n,i),e[a]=!0}function et(e,n,c){if(n)for(let i=0;i<n.length;i++)Ge(e,"on"+n[i],c);else{const i=[];for(const a in e)"on"==a.slice(0,2)&&i.push(a);for(let a=0;a<i.length;a++)Ge(e,i[a],c)}}const he=U("originalInstance");function Oe(e){const n=K[e];if(!n)return;K[U(e)]=n,K[e]=function(){const a=xe(arguments,e);switch(a.length){case 0:this[he]=new n;break;case 1:this[he]=new n(a[0]);break;case 2:this[he]=new n(a[0],a[1]);break;case 3:this[he]=new n(a[0],a[1],a[2]);break;case 4:this[he]=new n(a[0],a[1],a[2],a[3]);break;default:throw new Error("Arg list too long.")}},Te(K[e],n);const c=new n(function(){});let i;for(i in c)"XMLHttpRequest"===e&&"responseBlob"===i||function(a){"function"==typeof c[a]?K[e].prototype[a]=function(){return this[he][a].apply(this[he],arguments)}:Ze(K[e].prototype,a,{set:function(f){"function"==typeof f?(this[he][a]=He(f,e+"."+a),Te(this[he][a],f)):this[he][a]=f},get:function(){return this[he][a]}})}(i);for(i in n)"prototype"!==i&&n.hasOwnProperty(i)&&(K[e][i]=n[i])}function _e(e,n,c){let i=e;for(;i&&!i.hasOwnProperty(n);)i=Me(i);!i&&e[n]&&(i=e);const a=U(n);let f=null;if(i&&(!(f=i[a])||!i.hasOwnProperty(a))&&(f=i[a]=i[n],Ue(i&&ke(i,n)))){const g=c(f,a,n);i[n]=function(){return g(this,arguments)},Te(i[n],f)}return f}function tt(e,n,c){let i=null;function a(f){const E=f.data;return E.args[E.cbIdx]=function(){f.invoke.apply(this,arguments)},i.apply(E.target,E.args),f}i=_e(e,n,f=>function(E,g){const N=c(E,g);return N.cbIdx>=0&&"function"==typeof g[N.cbIdx]?Be(N.name,g[N.cbIdx],N,a):f.apply(E,g)})}function Te(e,n){e[U("OriginalDelegate")]=n}let ze=!1,Fe=!1;function at(){if(ze)return Fe;ze=!0;try{const e=be.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&(Fe=!0)}catch{}return Fe}Zone.__load_patch("ZoneAwarePromise",(e,n,c)=>{const i=Object.getOwnPropertyDescriptor,a=Object.defineProperty,E=c.symbol,g=[],N=!1!==e[E("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],I=E("Promise"),b=E("then"),H="__creationTrace__";c.onUnhandledError=d=>{if(c.showUncaughtError()){const _=d&&d.rejection;_?console.error("Unhandled Promise rejection:",_ instanceof Error?_.message:_,"; Zone:",d.zone.name,"; Task:",d.task&&d.task.source,"; Value:",_,_ instanceof Error?_.stack:void 0):console.error(d)}},c.microtaskDrainDone=()=>{for(;g.length;){const d=g.shift();try{d.zone.runGuarded(()=>{throw d.throwOriginal?d.rejection:d})}catch(_){j(_)}}};const x=E("unhandledPromiseRejectionHandler");function j(d){c.onUnhandledError(d);try{const _=n[x];"function"==typeof _&&_.call(this,d)}catch{}}function J(d){return d&&d.then}function G(d){return d}function ae(d){return t.reject(d)}const ne=E("state"),D=E("value"),y=E("finally"),ce=E("parentPromiseValue"),z=E("parentPromiseState"),re="Promise.then",V=null,k=!0,q=!1,m=0;function $(d,_){return l=>{try{oe(d,_,l)}catch(T){oe(d,!1,T)}}}const C=function(){let d=!1;return function(l){return function(){d||(d=!0,l.apply(null,arguments))}}},ue="Promise resolved with itself",pe=E("currentTaskTrace");function oe(d,_,l){const T=C();if(d===l)throw new TypeError(ue);if(d[ne]===V){let R=null;try{("object"==typeof l||"function"==typeof l)&&(R=l&&l.then)}catch(O){return T(()=>{oe(d,!1,O)})(),d}if(_!==q&&l instanceof t&&l.hasOwnProperty(ne)&&l.hasOwnProperty(D)&&l[ne]!==V)Ee(l),oe(d,l[ne],l[D]);else if(_!==q&&"function"==typeof R)try{R.call(l,T($(d,_)),T($(d,!1)))}catch(O){T(()=>{oe(d,!1,O)})()}else{d[ne]=_;const O=d[D];if(d[D]=l,d[y]===y&&_===k&&(d[ne]=d[z],d[D]=d[ce]),_===q&&l instanceof Error){const P=n.currentTask&&n.currentTask.data&&n.currentTask.data[H];P&&a(l,pe,{configurable:!0,enumerable:!1,writable:!0,value:P})}for(let P=0;P<O.length;)fe(d,O[P++],O[P++],O[P++],O[P++]);if(0==O.length&&_==q){d[ne]=m;let P=l;try{throw new Error("Uncaught (in promise): "+function f(d){return d&&d.toString===Object.prototype.toString?(d.constructor&&d.constructor.name||"")+": "+JSON.stringify(d):d?d.toString():Object.prototype.toString.call(d)}(l)+(l&&l.stack?"\n"+l.stack:""))}catch(M){P=M}N&&(P.throwOriginal=!0),P.rejection=l,P.promise=d,P.zone=n.current,P.task=n.currentTask,g.push(P),c.scheduleMicroTask()}}}return d}const Q=E("rejectionHandledHandler");function Ee(d){if(d[ne]===m){try{const _=n[Q];_&&"function"==typeof _&&_.call(this,{rejection:d[D],promise:d})}catch{}d[ne]=q;for(let _=0;_<g.length;_++)d===g[_].promise&&g.splice(_,1)}}function fe(d,_,l,T,R){Ee(d);const O=d[ne],P=O?"function"==typeof T?T:G:"function"==typeof R?R:ae;_.scheduleMicroTask(re,()=>{try{const M=d[D],L=!!l&&y===l[y];L&&(l[ce]=M,l[z]=O);const A=_.run(P,void 0,L&&P!==ae&&P!==G?[]:[M]);oe(l,!0,A)}catch(M){oe(l,!1,M)}},l)}const B=function(){},v=e.AggregateError;class t{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(_){return oe(new this(null),k,_)}static reject(_){return oe(new this(null),q,_)}static any(_){if(!_||"function"!=typeof _[Symbol.iterator])return Promise.reject(new v([],"All promises were rejected"));const l=[];let T=0;try{for(let P of _)T++,l.push(t.resolve(P))}catch{return Promise.reject(new v([],"All promises were rejected"))}if(0===T)return Promise.reject(new v([],"All promises were rejected"));let R=!1;const O=[];return new t((P,M)=>{for(let L=0;L<l.length;L++)l[L].then(A=>{R||(R=!0,P(A))},A=>{O.push(A),T--,0===T&&(R=!0,M(new v(O,"All promises were rejected")))})})}static race(_){let l,T,R=new this((M,L)=>{l=M,T=L});function O(M){l(M)}function P(M){T(M)}for(let M of _)J(M)||(M=this.resolve(M)),M.then(O,P);return R}static all(_){return t.allWithCallback(_)}static allSettled(_){return(this&&this.prototype instanceof t?this:t).allWithCallback(_,{thenCallback:T=>({status:"fulfilled",value:T}),errorCallback:T=>({status:"rejected",reason:T})})}static allWithCallback(_,l){let T,R,O=new this((A,X)=>{T=A,R=X}),P=2,M=0;const L=[];for(let A of _){J(A)||(A=this.resolve(A));const X=M;try{A.then(Y=>{L[X]=l?l.thenCallback(Y):Y,P--,0===P&&T(L)},Y=>{l?(L[X]=l.errorCallback(Y),P--,0===P&&T(L)):R(Y)})}catch(Y){R(Y)}P++,M++}return P-=2,0===P&&T(L),O}constructor(_){const l=this;if(!(l instanceof t))throw new Error("Must be an instanceof Promise.");l[ne]=V,l[D]=[];try{const T=C();_&&_(T($(l,k)),T($(l,q)))}catch(T){oe(l,!1,T)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return t}then(_,l){let T=this.constructor?.[Symbol.species];(!T||"function"!=typeof T)&&(T=this.constructor||t);const R=new T(B),O=n.current;return this[ne]==V?this[D].push(O,R,_,l):fe(this,O,R,_,l),R}catch(_){return this.then(null,_)}finally(_){let l=this.constructor?.[Symbol.species];(!l||"function"!=typeof l)&&(l=t);const T=new l(B);T[y]=y;const R=n.current;return this[ne]==V?this[D].push(R,T,_,_):fe(this,R,T,_,_),T}}t.resolve=t.resolve,t.reject=t.reject,t.race=t.race,t.all=t.all;const o=e[I]=e.Promise;e.Promise=t;const S=E("thenPatched");function Z(d){const _=d.prototype,l=i(_,"then");if(l&&(!1===l.writable||!l.configurable))return;const T=_.then;_[b]=T,d.prototype.then=function(R,O){return new t((M,L)=>{T.call(this,M,L)}).then(R,O)},d[S]=!0}return c.patchThen=Z,o&&(Z(o),_e(e,"fetch",d=>function se(d){return function(_,l){let T=d.apply(_,l);if(T instanceof t)return T;let R=T.constructor;return R[S]||Z(R),T}}(d))),Promise[n.__symbol__("uncaughtPromiseErrors")]=g,t}),Zone.__load_patch("toString",e=>{const n=Function.prototype.toString,c=U("OriginalDelegate"),i=U("Promise"),a=U("Error"),f=function(){if("function"==typeof this){const I=this[c];if(I)return"function"==typeof I?n.call(I):Object.prototype.toString.call(I);if(this===Promise){const b=e[i];if(b)return n.call(b)}if(this===Error){const b=e[a];if(b)return n.call(b)}}return n.call(this)};f[c]=n,Function.prototype.toString=f;const E=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":E.call(this)}});let Re=!1;if(typeof window<"u")try{const e=Object.defineProperty({},"passive",{get:function(){Re=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{Re=!1}const _t={useG:!0},le={},We={},lt=new RegExp("^"+Ce+"(\\w+)(true|false)$"),ut=U("propagationStopped");function nt(e,n){const c=(n?n(e):e)+ge,i=(n?n(e):e)+de,a=Ce+c,f=Ce+i;le[e]={},le[e][ge]=a,le[e][de]=f}function qe(e,n,c,i){const a=i&&i.add||Le,f=i&&i.rm||$e,E=i&&i.listeners||"eventListeners",g=i&&i.rmAll||"removeAllListeners",N=U(a),I="."+a+":",b="prependListener",H="."+b+":",x=function(D,y,ce){if(D.isRemoved)return;const z=D.callback;let re;"object"==typeof z&&z.handleEvent&&(D.callback=k=>z.handleEvent(k),D.originalDelegate=z);try{D.invoke(D,y,[ce])}catch(k){re=k}const V=D.options;return V&&"object"==typeof V&&V.once&&y[f].call(y,ce.type,D.originalDelegate?D.originalDelegate:D.callback,V),re};function j(D,y,ce){if(!(y=y||e.event))return;const z=D||y.target||e,re=z[le[y.type][ce?de:ge]];if(re){const V=[];if(1===re.length){const k=x(re[0],z,y);k&&V.push(k)}else{const k=re.slice();for(let q=0;q<k.length&&(!y||!0!==y[ut]);q++){const m=x(k[q],z,y);m&&V.push(m)}}if(1===V.length)throw V[0];for(let k=0;k<V.length;k++){const q=V[k];n.nativeScheduleMicroTask(()=>{throw q})}}}const J=function(D){return j(this,D,!1)},G=function(D){return j(this,D,!0)};function ae(D,y){if(!D)return!1;let ce=!0;y&&void 0!==y.useG&&(ce=y.useG);const z=y&&y.vh;let re=!0;y&&void 0!==y.chkDup&&(re=y.chkDup);let V=!1;y&&void 0!==y.rt&&(V=y.rt);let k=D;for(;k&&!k.hasOwnProperty(a);)k=Me(k);if(!k&&D[a]&&(k=D),!k||k[N])return!1;const q=y&&y.eventNameToString,m={},$=k[N]=k[a],C=k[U(f)]=k[f],ue=k[U(E)]=k[E],pe=k[U(g)]=k[g];let oe;y&&y.prepend&&(oe=k[U(y.prepend)]=k[y.prepend]);const t=ce?function(l){if(!m.isExisting)return $.call(m.target,m.eventName,m.capture?G:J,m.options)}:function(l){return $.call(m.target,m.eventName,l.invoke,m.options)},o=ce?function(l){if(!l.isRemoved){const T=le[l.eventName];let R;T&&(R=T[l.capture?de:ge]);const O=R&&l.target[R];if(O)for(let P=0;P<O.length;P++)if(O[P]===l){O.splice(P,1),l.isRemoved=!0,0===O.length&&(l.allRemoved=!0,l.target[R]=null);break}}if(l.allRemoved)return C.call(l.target,l.eventName,l.capture?G:J,l.options)}:function(l){return C.call(l.target,l.eventName,l.invoke,l.options)},Z=y&&y.diff?y.diff:function(l,T){const R=typeof T;return"function"===R&&l.callback===T||"object"===R&&l.originalDelegate===T},se=Zone[U("UNPATCHED_EVENTS")],d=e[U("PASSIVE_EVENTS")],_=function(l,T,R,O,P=!1,M=!1){return function(){const L=this||e;let A=arguments[0];y&&y.transferEventName&&(A=y.transferEventName(A));let X=arguments[1];if(!X)return l.apply(this,arguments);if(we&&"uncaughtException"===A)return l.apply(this,arguments);let Y=!1;if("function"!=typeof X){if(!X.handleEvent)return l.apply(this,arguments);Y=!0}if(z&&!z(l,X,L,arguments))return;const Ie=Re&&!!d&&-1!==d.indexOf(A),ye=function Q(l,T){return!Re&&"object"==typeof l&&l?!!l.capture:Re&&T?"boolean"==typeof l?{capture:l,passive:!0}:l?"object"==typeof l&&!1!==l.passive?{...l,passive:!0}:l:{passive:!0}:l}(arguments[2],Ie);if(se)for(let De=0;De<se.length;De++)if(A===se[De])return Ie?l.call(L,A,X,ye):l.apply(this,arguments);const ft=!!ye&&("boolean"==typeof ye||ye.capture),Et=!(!ye||"object"!=typeof ye)&&ye.once,kt=Zone.current;let ht=le[A];ht||(nt(A,q),ht=le[A]);const gt=ht[ft?de:ge];let st,je=L[gt],mt=!1;if(je){if(mt=!0,re)for(let De=0;De<je.length;De++)if(Z(je[De],X))return}else je=L[gt]=[];const pt=L.constructor.name,yt=We[pt];yt&&(st=yt[A]),st||(st=pt+T+(q?q(A):A)),m.options=ye,Et&&(m.options.once=!1),m.target=L,m.capture=ft,m.eventName=A,m.isExisting=mt;const Xe=ce?_t:void 0;Xe&&(Xe.taskData=m);const Se=kt.scheduleEventTask(st,X,Xe,R,O);return m.target=null,Xe&&(Xe.taskData=null),Et&&(ye.once=!0),!Re&&"boolean"==typeof Se.options||(Se.options=ye),Se.target=L,Se.capture=ft,Se.eventName=A,Y&&(Se.originalDelegate=X),M?je.unshift(Se):je.push(Se),P?L:void 0}};return k[a]=_($,I,t,o,V),oe&&(k[b]=_(oe,H,function(l){return oe.call(m.target,m.eventName,l.invoke,m.options)},o,V,!0)),k[f]=function(){const l=this||e;let T=arguments[0];y&&y.transferEventName&&(T=y.transferEventName(T));const R=arguments[2],O=!!R&&("boolean"==typeof R||R.capture),P=arguments[1];if(!P)return C.apply(this,arguments);if(z&&!z(C,P,l,arguments))return;const M=le[T];let L;M&&(L=M[O?de:ge]);const A=L&&l[L];if(A)for(let X=0;X<A.length;X++){const Y=A[X];if(Z(Y,P))return A.splice(X,1),Y.isRemoved=!0,0===A.length&&(Y.allRemoved=!0,l[L]=null,"string"==typeof T)&&(l[Ce+"ON_PROPERTY"+T]=null),Y.zone.cancelTask(Y),V?l:void 0}return C.apply(this,arguments)},k[E]=function(){const l=this||e;let T=arguments[0];y&&y.transferEventName&&(T=y.transferEventName(T));const R=[],O=rt(l,q?q(T):T);for(let P=0;P<O.length;P++){const M=O[P];R.push(M.originalDelegate?M.originalDelegate:M.callback)}return R},k[g]=function(){const l=this||e;let T=arguments[0];if(T){y&&y.transferEventName&&(T=y.transferEventName(T));const R=le[T];if(R){const M=l[R[ge]],L=l[R[de]];if(M){const A=M.slice();for(let X=0;X<A.length;X++){const Y=A[X];this[f].call(this,T,Y.originalDelegate?Y.originalDelegate:Y.callback,Y.options)}}if(L){const A=L.slice();for(let X=0;X<A.length;X++){const Y=A[X];this[f].call(this,T,Y.originalDelegate?Y.originalDelegate:Y.callback,Y.options)}}}}else{const R=Object.keys(l);for(let O=0;O<R.length;O++){const M=lt.exec(R[O]);let L=M&&M[1];L&&"removeListener"!==L&&this[g].call(this,L)}this[g].call(this,"removeListener")}if(V)return this},Te(k[a],$),Te(k[f],C),pe&&Te(k[g],pe),ue&&Te(k[E],ue),!0}let ne=[];for(let D=0;D<c.length;D++)ne[D]=ae(c[D],i);return ne}function rt(e,n){if(!n){const f=[];for(let E in e){const g=lt.exec(E);let N=g&&g[1];if(N&&(!n||N===n)){const I=e[E];if(I)for(let b=0;b<I.length;b++)f.push(I[b])}}return f}let c=le[n];c||(nt(n),c=le[n]);const i=e[c[ge]],a=e[c[de]];return i?a?i.concat(a):i.slice():a?a.slice():[]}function ot(e,n){const c=e.Event;c&&c.prototype&&n.patchMethod(c.prototype,"stopImmediatePropagation",i=>function(a,f){a[ut]=!0,i&&i.apply(a,f)})}function Tt(e,n,c,i,a){const f=Zone.__symbol__(i);if(n[f])return;const E=n[f]=n[i];n[i]=function(g,N,I){return N&&N.prototype&&a.forEach(function(b){const H=`${c}.${i}::`+b,x=N.prototype;try{if(x.hasOwnProperty(b)){const j=e.ObjectGetOwnPropertyDescriptor(x,b);j&&j.value?(j.value=e.wrapWithCurrentZone(j.value,H),e._redefineProperty(N.prototype,b,j)):x[b]&&(x[b]=e.wrapWithCurrentZone(x[b],H))}else x[b]&&(x[b]=e.wrapWithCurrentZone(x[b],H))}catch{}}),E.call(n,g,N,I)},e.attachOriginToPatched(n[i],E)}function r(e,n,c){if(!c||0===c.length)return n;const i=c.filter(f=>f.target===e);if(!i||0===i.length)return n;const a=i[0].ignoreProperties;return n.filter(f=>-1===a.indexOf(f))}function s(e,n,c,i){e&&et(e,r(e,n,c),i)}function u(e){return Object.getOwnPropertyNames(e).filter(n=>n.startsWith("on")&&n.length>2).map(n=>n.substring(2))}Zone.__load_patch("util",(e,n,c)=>{const i=u(e);c.patchOnProperties=et,c.patchMethod=_e,c.bindArguments=xe,c.patchMacroTask=tt;const a=n.__symbol__("BLACK_LISTED_EVENTS"),f=n.__symbol__("UNPATCHED_EVENTS");e[f]&&(e[a]=e[f]),e[a]&&(n[a]=n[f]=e[a]),c.patchEventPrototype=ot,c.patchEventTarget=qe,c.isIEOrEdge=at,c.ObjectDefineProperty=Ze,c.ObjectGetOwnPropertyDescriptor=ke,c.ObjectCreate=Ne,c.ArraySlice=it,c.patchClass=Oe,c.wrapWithCurrentZone=He,c.filterProperties=r,c.attachOriginToPatched=Te,c._redefineProperty=Object.defineProperty,c.patchCallbacks=Tt,c.getGlobalObjects=()=>({globalSources:We,zoneSymbolEventNames:le,eventNames:i,isBrowser:me,isMix:Je,isNode:we,TRUE_STR:de,FALSE_STR:ge,ZONE_SYMBOL_PREFIX:Ce,ADD_EVENT_LISTENER_STR:Le,REMOVE_EVENT_LISTENER_STR:$e})});const w=U("zoneTask");function te(e,n,c,i){let a=null,f=null;c+=i;const E={};function g(I){const b=I.data;return b.args[0]=function(){return I.invoke.apply(this,arguments)},b.handleId=a.apply(e,b.args),I}function N(I){return f.call(e,I.data.handleId)}a=_e(e,n+=i,I=>function(b,H){if("function"==typeof H[0]){const x={isPeriodic:"Interval"===i,delay:"Timeout"===i||"Interval"===i?H[1]||0:void 0,args:H},j=H[0];H[0]=function(){try{return j.apply(this,arguments)}finally{x.isPeriodic||("number"==typeof x.handleId?delete E[x.handleId]:x.handleId&&(x.handleId[w]=null))}};const J=Be(n,H[0],x,g,N);if(!J)return J;const G=J.data.handleId;return"number"==typeof G?E[G]=J:G&&(G[w]=J),G&&G.ref&&G.unref&&"function"==typeof G.ref&&"function"==typeof G.unref&&(J.ref=G.ref.bind(G),J.unref=G.unref.bind(G)),"number"==typeof G||G?G:J}return I.apply(e,H)}),f=_e(e,c,I=>function(b,H){const x=H[0];let j;"number"==typeof x?j=E[x]:(j=x&&x[w],j||(j=x)),j&&"string"==typeof j.type?"notScheduled"!==j.state&&(j.cancelFn&&j.data.isPeriodic||0===j.runCount)&&("number"==typeof x?delete E[x]:x&&(x[w]=null),j.zone.cancelTask(j)):I.apply(e,H)})}Zone.__load_patch("legacy",e=>{const n=e[Zone.__symbol__("legacyPatch")];n&&n()}),Zone.__load_patch("timers",e=>{const n="set",c="clear";te(e,n,c,"Timeout"),te(e,n,c,"Interval"),te(e,n,c,"Immediate")}),Zone.__load_patch("requestAnimationFrame",e=>{te(e,"request","cancel","AnimationFrame"),te(e,"mozRequest","mozCancel","AnimationFrame"),te(e,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(e,n)=>{const c=["alert","prompt","confirm"];for(let i=0;i<c.length;i++)_e(e,c[i],(f,E,g)=>function(N,I){return n.current.run(f,e,I,g)})}),Zone.__load_patch("EventTarget",(e,n,c)=>{(function ie(e,n){n.patchEventPrototype(e,n)})(e,c),function F(e,n){if(Zone[n.symbol("patchEventTarget")])return;const{eventNames:c,zoneSymbolEventNames:i,TRUE_STR:a,FALSE_STR:f,ZONE_SYMBOL_PREFIX:E}=n.getGlobalObjects();for(let N=0;N<c.length;N++){const I=c[N],x=E+(I+f),j=E+(I+a);i[I]={},i[I][f]=x,i[I][a]=j}const g=e.EventTarget;g&&g.prototype&&n.patchEventTarget(e,n,[g&&g.prototype])}(e,c);const i=e.XMLHttpRequestEventTarget;i&&i.prototype&&c.patchEventTarget(e,c,[i.prototype])}),Zone.__load_patch("MutationObserver",(e,n,c)=>{Oe("MutationObserver"),Oe("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(e,n,c)=>{Oe("IntersectionObserver")}),Zone.__load_patch("FileReader",(e,n,c)=>{Oe("FileReader")}),Zone.__load_patch("on_property",(e,n,c)=>{!function h(e,n){if(we&&!Je||Zone[e.symbol("patchEvents")])return;const c=n.__Zone_ignore_on_properties;let i=[];if(me){const a=window;i=i.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const f=function dt(){try{const e=be.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:a,ignoreProperties:["error"]}]:[];s(a,u(a),c&&c.concat(f),Me(a))}i=i.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let a=0;a<i.length;a++){const f=n[i[a]];f&&f.prototype&&s(f.prototype,u(f.prototype),c)}}(c,e)}),Zone.__load_patch("customElements",(e,n,c)=>{!function W(e,n){const{isBrowser:c,isMix:i}=n.getGlobalObjects();(c||i)&&e.customElements&&"customElements"in e&&n.patchCallbacks(n,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(e,c)}),Zone.__load_patch("XHR",(e,n)=>{!function N(I){const b=I.XMLHttpRequest;if(!b)return;const H=b.prototype;let j=H[ve],J=H[Ye];if(!j){const m=I.XMLHttpRequestEventTarget;if(m){const $=m.prototype;j=$[ve],J=$[Ye]}}const G="readystatechange",ae="scheduled";function ne(m){const $=m.data,C=$.target;C[f]=!1,C[g]=!1;const ue=C[a];j||(j=C[ve],J=C[Ye]),ue&&J.call(C,G,ue);const pe=C[a]=()=>{if(C.readyState===C.DONE)if(!$.aborted&&C[f]&&m.state===ae){const Q=C[n.__symbol__("loadfalse")];if(0!==C.status&&Q&&Q.length>0){const Ee=m.invoke;m.invoke=function(){const fe=C[n.__symbol__("loadfalse")];for(let ee=0;ee<fe.length;ee++)fe[ee]===m&&fe.splice(ee,1);!$.aborted&&m.state===ae&&Ee.call(m)},Q.push(m)}else m.invoke()}else!$.aborted&&!1===C[f]&&(C[g]=!0)};return j.call(C,G,pe),C[c]||(C[c]=m),k.apply(C,$.args),C[f]=!0,m}function D(){}function y(m){const $=m.data;return $.aborted=!0,q.apply($.target,$.args)}const ce=_e(H,"open",()=>function(m,$){return m[i]=0==$[2],m[E]=$[1],ce.apply(m,$)}),re=U("fetchTaskAborting"),V=U("fetchTaskScheduling"),k=_e(H,"send",()=>function(m,$){if(!0===n.current[V]||m[i])return k.apply(m,$);{const C={target:m,url:m[E],isPeriodic:!1,args:$,aborted:!1},ue=Be("XMLHttpRequest.send",D,C,ne,y);m&&!0===m[g]&&!C.aborted&&ue.state===ae&&ue.invoke()}}),q=_e(H,"abort",()=>function(m,$){const C=function x(m){return m[c]}(m);if(C&&"string"==typeof C.type){if(null==C.cancelFn||C.data&&C.data.aborted)return;C.zone.cancelTask(C)}else if(!0===n.current[re])return q.apply(m,$)})}(e);const c=U("xhrTask"),i=U("xhrSync"),a=U("xhrListener"),f=U("xhrScheduled"),E=U("xhrURL"),g=U("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&function Ke(e,n){const c=e.constructor.name;for(let i=0;i<n.length;i++){const a=n[i],f=e[a];if(f){if(!Ue(ke(e,a)))continue;e[a]=(g=>{const N=function(){return g.apply(this,xe(arguments,c+"."+a))};return Te(N,g),N})(f)}}}(e.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(e,n)=>{function c(i){return function(a){rt(e,i).forEach(E=>{const g=e.PromiseRejectionEvent;if(g){const N=new g(i,{promise:a.promise,reason:a.rejection});E.invoke(N)}})}}e.PromiseRejectionEvent&&(n[U("unhandledPromiseRejectionHandler")]=c("unhandledrejection"),n[U("rejectionHandledHandler")]=c("rejectionhandled"))}),Zone.__load_patch("queueMicrotask",(e,n,c)=>{!function p(e,n){n.patchMethod(e,"queueMicrotask",c=>function(i,a){Zone.current.scheduleMicroTask("queueMicrotask",a[0])})}(e,c)})}},ke=>{ke(ke.s=253)}]);