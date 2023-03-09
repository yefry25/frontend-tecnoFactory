import{w as D,o as ue,e as te,m as ke,g as W,ah as xe,r as j,a as p,ai as we,aj as pe,ak as Ce,t as Me,f as K,y as Se,al as qe,i as Re,h as k,F as Q,a6 as ie,am as Ve,d as G,an as Ae,ao as Fe,B as _e,c as Be,G as se}from"./index.f9a23174.js";import{u as Ee,a as $e}from"./use-dark.22bd5673.js";function Oe({validate:e,resetValidation:t,requiresQForm:u}){const s=ke(xe,!1);if(s!==!1){const{props:g,proxy:v}=W();Object.assign(v,{validate:e,resetValidation:t}),D(()=>g.disable,h=>{h===!0?(typeof t=="function"&&t(),s.unbindComponent(v)):s.bindComponent(v)}),ue(()=>{g.disable!==!0&&s.bindComponent(v)}),te(()=>{g.disable!==!0&&s.unbindComponent(v)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const de=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,fe=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ce=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,J=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,X=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,le={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>de.test(e),hexaColor:e=>fe.test(e),hexOrHexaColor:e=>ce.test(e),rgbColor:e=>J.test(e),rgbaColor:e=>X.test(e),rgbOrRgbaColor:e=>J.test(e)||X.test(e),hexOrRgbColor:e=>de.test(e)||J.test(e),hexaOrRgbaColor:e=>fe.test(e)||X.test(e),anyColor:e=>ce.test(e)||J.test(e)||X.test(e)},Te=[!0,!1,"ondemand"],Ie={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>Te.includes(e)}};function Pe(e,t){const{props:u,proxy:s}=W(),g=j(!1),v=j(null),h=j(null);Oe({validate:_,resetValidation:R});let b=0,M;const C=p(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length>0),S=p(()=>u.disable!==!0&&C.value===!0),y=p(()=>u.error===!0||g.value===!0),U=p(()=>typeof u.errorMessage=="string"&&u.errorMessage.length>0?u.errorMessage:v.value);D(()=>u.modelValue,()=>{Z()}),D(()=>u.reactiveRules,O=>{O===!0?M===void 0&&(M=D(()=>u.rules,()=>{Z(!0)})):M!==void 0&&(M(),M=void 0)},{immediate:!0}),D(e,O=>{O===!0?h.value===null&&(h.value=!1):h.value===!1&&(h.value=!0,S.value===!0&&u.lazyRules!=="ondemand"&&t.value===!1&&q())});function R(){b++,t.value=!1,h.value=null,g.value=!1,v.value=null,q.cancel()}function _(O=u.modelValue){if(S.value!==!0)return!0;const L=++b,N=t.value!==!0?()=>{h.value=!0}:()=>{},E=(l,r)=>{l===!0&&N(),g.value=l,v.value=r||null,t.value=!1},$=[];for(let l=0;l<u.rules.length;l++){const r=u.rules[l];let a;if(typeof r=="function"?a=r(O,le):typeof r=="string"&&le[r]!==void 0&&(a=le[r](O)),a===!1||typeof a=="string")return E(!0,a),!1;a!==!0&&a!==void 0&&$.push(a)}return $.length===0?(E(!1),!0):(t.value=!0,Promise.all($).then(l=>{if(l===void 0||Array.isArray(l)===!1||l.length===0)return L===b&&E(!1),!0;const r=l.find(a=>a===!1||typeof a=="string");return L===b&&E(r!==void 0,r),r===void 0},l=>(L===b&&(console.error(l),E(!0)),!1)))}function Z(O){S.value===!0&&u.lazyRules!=="ondemand"&&(h.value===!0||u.lazyRules!==!0&&O!==!0)&&q()}const q=we(_,0);return te(()=>{M!==void 0&&M(),q.cancel()}),Object.assign(s,{resetValidation:R,validate:_}),pe(s,"hasError",()=>y.value),{isDirtyModel:h,hasRules:C,hasError:y,errorMessage:U,validate:_,resetValidation:R}}const ve=/^on[A-Z]/;function je(e,t){const u={listeners:j({}),attributes:j({})};function s(){const g={},v={};for(const h in e)h!=="class"&&h!=="style"&&ve.test(h)===!1&&(g[h]=e[h]);for(const h in t.props)ve.test(h)===!0&&(v[h]=t.props[h]);u.attributes.value=g,u.listeners.value=v}return Ce(s),s(),u}let ne,Y=0;const B=new Array(256);for(let e=0;e<256;e++)B[e]=(e+256).toString(16).substring(1);const De=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const u=new Uint8Array(t);return e.getRandomValues(u),u}}return t=>{const u=[];for(let s=t;s>0;s--)u.push(Math.floor(Math.random()*256));return u}})(),ge=4096;function ze(){(ne===void 0||Y+16>ge)&&(Y=0,ne=De(ge));const e=Array.prototype.slice.call(ne,Y,Y+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,B[e[0]]+B[e[1]]+B[e[2]]+B[e[3]]+"-"+B[e[4]]+B[e[5]]+"-"+B[e[6]]+B[e[7]]+"-"+B[e[8]]+B[e[9]]+"-"+B[e[10]]+B[e[11]]+B[e[12]]+B[e[13]]+B[e[14]]+B[e[15]]}let oe=[],Le=[];function be(e){Le.length===0?e():oe.push(e)}function Ue(e){oe=oe.filter(t=>t!==e)}function re(e){return e===void 0?`f_${ze()}`:e}function ae(e){return e!=null&&(""+e).length>0}const Ze={...Ee,...Ie,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Ne=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Ke(){const{props:e,attrs:t,proxy:u,vnode:s}=W();return{isDark:$e(e,u.$q),editable:p(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:j(!1),focused:j(!1),hasPopupOpen:!1,splitAttrs:je(t,s),targetUid:j(re(e.for)),rootRef:j(null),targetRef:j(null),controlRef:j(null)}}function He(e){const{props:t,emit:u,slots:s,attrs:g,proxy:v}=W(),{$q:h}=v;let b=null;e.hasValue===void 0&&(e.hasValue=p(()=>ae(t.modelValue))),e.emitValue===void 0&&(e.emitValue=n=>{u("update:modelValue",n)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:d,onFocusout:f}),Object.assign(e,{clearValue:i,onControlFocusin:d,onControlFocusout:f,focus:r}),e.computedCounter===void 0&&(e.computedCounter=p(()=>{if(t.counter!==!1){const n=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,c=t.maxlength!==void 0?t.maxlength:t.maxValues;return n+(c!==void 0?" / "+c:"")}}));const{isDirtyModel:M,hasRules:C,hasError:S,errorMessage:y,resetValidation:U}=Pe(e.focused,e.innerLoading),R=e.floatingLabel!==void 0?p(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):p(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),_=p(()=>t.bottomSlots===!0||t.hint!==void 0||C.value===!0||t.counter===!0||t.error!==null),Z=p(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),q=p(()=>`q-field row no-wrap items-start q-field--${Z.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(R.value===!0?" q-field--float":"")+(L.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(S.value===!0?" q-field--error":"")+(S.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&_.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),O=p(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(S.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),L=p(()=>t.labelSlot===!0||t.label!==void 0),N=p(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&S.value!==!0?` text-${t.labelColor}`:"")),E=p(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:R.value,modelValue:t.modelValue,emitValue:e.emitValue})),$=p(()=>{const n={for:e.targetUid.value};return t.disable===!0?n["aria-disabled"]="true":t.readonly===!0&&(n["aria-readonly"]="true"),n});D(()=>t.for,n=>{e.targetUid.value=re(n)});function l(){const n=document.activeElement;let c=e.targetRef!==void 0&&e.targetRef.value;c&&(n===null||n.id!==e.targetUid.value)&&(c.hasAttribute("tabindex")===!0||(c=c.querySelector("[tabindex]")),c&&c!==n&&c.focus({preventScroll:!0}))}function r(){be(l)}function a(){Ue(l);const n=document.activeElement;n!==null&&e.rootRef.value.contains(n)&&n.blur()}function d(n){b!==null&&(clearTimeout(b),b=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",n))}function f(n,c){b!==null&&clearTimeout(b),b=setTimeout(()=>{b=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,u("blur",n)),c!==void 0&&c())})}function i(n){Me(n),h.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),u("clear",t.modelValue),K(()=>{U(),h.platform.is.mobile!==!0&&(M.value=!1)})}function x(){const n=[];return s.prepend!==void 0&&n.push(k("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:Q},s.prepend())),n.push(k("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},m())),S.value===!0&&t.noErrorIcon===!1&&n.push(T("error",[k(ie,{name:h.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?n.push(T("inner-loading-append",s.loading!==void 0?s.loading():[k(Ve,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&n.push(T("inner-clearable-append",[k(ie,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||h.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:i})])),s.append!==void 0&&n.push(k("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:Q},s.append())),e.getInnerAppend!==void 0&&n.push(T("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&n.push(e.getControlChild()),n}function m(){const n=[];return t.prefix!==void 0&&t.prefix!==null&&n.push(k("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&n.push(e.getShadowControl()),e.getControl!==void 0?n.push(e.getControl()):s.rawControl!==void 0?n.push(s.rawControl()):s.control!==void 0&&n.push(k("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},s.control(E.value))),L.value===!0&&n.push(k("div",{class:N.value},G(s.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&n.push(k("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),n.concat(G(s.default))}function w(){let n,c;S.value===!0?y.value!==null?(n=[k("div",{role:"alert"},y.value)],c=`q--slot-error-${y.value}`):(n=G(s.error),c="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(n=[k("div",t.hint)],c=`q--slot-hint-${t.hint}`):(n=G(s.hint),c="q--slot-hint"));const P=t.counter===!0||s.counter!==void 0;if(t.hideBottomSpace===!0&&P===!1&&n===void 0)return;const z=k("div",{key:c,class:"q-field__messages col"},n);return k("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:Q},[t.hideBottomSpace===!0?z:k(Ae,{name:"q-transition--field-message"},()=>z),P===!0?k("div",{class:"q-field__counter"},s.counter!==void 0?s.counter():e.computedCounter.value):null])}function T(n,c){return c===null?null:k("div",{key:n,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},c)}let I=!1;return Se(()=>{I=!0}),qe(()=>{I===!0&&t.autofocus===!0&&v.focus()}),ue(()=>{Re.value===!0&&t.for===void 0&&(e.targetUid.value=re()),t.autofocus===!0&&v.focus()}),te(()=>{b!==null&&clearTimeout(b)}),Object.assign(v,{focus:r,blur:a}),function(){const c=e.getControl===void 0&&s.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...$.value}:$.value;return k("label",{ref:e.rootRef,class:[q.value,g.class],style:g.style,...c},[s.before!==void 0?k("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:Q},s.before()):null,k("div",{class:"q-field__inner relative-position col self-stretch"},[k("div",{ref:e.controlRef,class:O.value,tabindex:-1,...e.controlEvents},x()),_.value===!0?w():null]),s.after!==void 0?k("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:Q},s.after()):null])}}const me={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},ee={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},ye=Object.keys(ee);ye.forEach(e=>{ee[e].regex=new RegExp(ee[e].pattern)});const Qe=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+ye.join("")+"])|(.)","g"),he=/[.*+?^${}()|[\]\\]/g,A=String.fromCharCode(1),We={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Ge(e,t,u,s){let g,v,h,b;const M=j(null),C=j(y());function S(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}D(()=>e.type+e.autogrow,R),D(()=>e.mask,l=>{if(l!==void 0)_(C.value,!0);else{const r=E(C.value);R(),e.modelValue!==r&&t("update:modelValue",r)}}),D(()=>e.fillMask+e.reverseFillMask,()=>{M.value===!0&&_(C.value,!0)}),D(()=>e.unmaskedValue,()=>{M.value===!0&&_(C.value)});function y(){if(R(),M.value===!0){const l=L(E(e.modelValue));return e.fillMask!==!1?$(l):l}return e.modelValue}function U(l){if(l<g.length)return g.slice(-l);let r="",a=g;const d=a.indexOf(A);if(d>-1){for(let f=l-a.length;f>0;f--)r+=A;a=a.slice(0,d)+r+a.slice(d)}return a}function R(){if(M.value=e.mask!==void 0&&e.mask.length>0&&S(),M.value===!1){b=void 0,g="",v="";return}const l=me[e.mask]===void 0?e.mask:me[e.mask],r=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",a=r.replace(he,"\\$&"),d=[],f=[],i=[];let x=e.reverseFillMask===!0,m="",w="";l.replace(Qe,(c,P,z,o,V)=>{if(o!==void 0){const F=ee[o];i.push(F),w=F.negate,x===!0&&(f.push("(?:"+w+"+)?("+F.pattern+"+)?(?:"+w+"+)?("+F.pattern+"+)?"),x=!1),f.push("(?:"+w+"+)?("+F.pattern+")?")}else if(z!==void 0)m="\\"+(z==="\\"?"":z),i.push(z),d.push("([^"+m+"]+)?"+m+"?");else{const F=P!==void 0?P:V;m=F==="\\"?"\\\\\\\\":F.replace(he,"\\\\$&"),i.push(F),d.push("([^"+m+"]+)?"+m+"?")}});const T=new RegExp("^"+d.join("")+"("+(m===""?".":"[^"+m+"]")+"+)?"+(m===""?"":"["+m+"]*")+"$"),I=f.length-1,n=f.map((c,P)=>P===0&&e.reverseFillMask===!0?new RegExp("^"+a+"*"+c):P===I?new RegExp("^"+c+"("+(w===""?".":w)+"+)?"+(e.reverseFillMask===!0?"$":a+"*")):new RegExp("^"+c));h=i,b=c=>{const P=T.exec(e.reverseFillMask===!0?c:c.slice(0,i.length+1));P!==null&&(c=P.slice(1).join(""));const z=[],o=n.length;for(let V=0,F=c;V<o;V++){const H=n[V].exec(F);if(H===null)break;F=F.slice(H.shift().length),z.push(...H)}return z.length>0?z.join(""):c},g=i.map(c=>typeof c=="string"?c:A).join(""),v=g.split(A).join(r)}function _(l,r,a){const d=s.value,f=d.selectionEnd,i=d.value.length-f,x=E(l);r===!0&&R();const m=L(x),w=e.fillMask!==!1?$(m):m,T=C.value!==w;d.value!==w&&(d.value=w),T===!0&&(C.value=w),document.activeElement===d&&K(()=>{if(w===v){const n=e.reverseFillMask===!0?v.length:0;d.setSelectionRange(n,n,"forward");return}if(a==="insertFromPaste"&&e.reverseFillMask!==!0){const n=f-1;q.right(d,n,n);return}if(["deleteContentBackward","deleteContentForward"].indexOf(a)>-1){const n=e.reverseFillMask===!0?f===0?w.length>m.length?1:0:Math.max(0,w.length-(w===v?0:Math.min(m.length,i)+1))+1:f;d.setSelectionRange(n,n,"forward");return}if(e.reverseFillMask===!0)if(T===!0){const n=Math.max(0,w.length-(w===v?0:Math.min(m.length,i+1)));n===1&&f===1?d.setSelectionRange(n,n,"forward"):q.rightReverse(d,n,n)}else{const n=w.length-i;d.setSelectionRange(n,n,"backward")}else if(T===!0){const n=Math.max(0,g.indexOf(A),Math.min(m.length,f)-1);q.right(d,n,n)}else{const n=f-1;q.right(d,n,n)}});const I=e.unmaskedValue===!0?E(w):w;String(e.modelValue)!==I&&u(I,!0)}function Z(l,r,a){const d=L(E(l.value));r=Math.max(0,g.indexOf(A),Math.min(d.length,r)),l.setSelectionRange(r,a,"forward")}const q={left(l,r,a,d){const f=g.slice(r-1).indexOf(A)===-1;let i=Math.max(0,r-1);for(;i>=0;i--)if(g[i]===A){r=i,f===!0&&r++;break}if(i<0&&g[r]!==void 0&&g[r]!==A)return q.right(l,0,0);r>=0&&l.setSelectionRange(r,d===!0?a:r,"backward")},right(l,r,a,d){const f=l.value.length;let i=Math.min(f,a+1);for(;i<=f;i++)if(g[i]===A){a=i;break}else g[i-1]===A&&(a=i);if(i>f&&g[a-1]!==void 0&&g[a-1]!==A)return q.left(l,f,f);l.setSelectionRange(d?r:a,a,"forward")},leftReverse(l,r,a,d){const f=U(l.value.length);let i=Math.max(0,r-1);for(;i>=0;i--)if(f[i-1]===A){r=i;break}else if(f[i]===A&&(r=i,i===0))break;if(i<0&&f[r]!==void 0&&f[r]!==A)return q.rightReverse(l,0,0);r>=0&&l.setSelectionRange(r,d===!0?a:r,"backward")},rightReverse(l,r,a,d){const f=l.value.length,i=U(f),x=i.slice(0,a+1).indexOf(A)===-1;let m=Math.min(f,a+1);for(;m<=f;m++)if(i[m-1]===A){a=m,a>0&&x===!0&&a--;break}if(m>f&&i[a-1]!==void 0&&i[a-1]!==A)return q.leftReverse(l,f,f);l.setSelectionRange(d===!0?r:a,a,"forward")}};function O(l){if(t("keydown",l),Fe(l)===!0)return;const r=s.value,a=r.selectionStart,d=r.selectionEnd;if(l.keyCode===37||l.keyCode===39){const f=q[(l.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];l.preventDefault(),f(r,a,d,l.shiftKey)}else l.keyCode===8&&e.reverseFillMask!==!0&&a===d?q.left(r,a,d,!0):l.keyCode===46&&e.reverseFillMask===!0&&a===d&&q.rightReverse(r,a,d,!0)}function L(l){if(l==null||l==="")return"";if(e.reverseFillMask===!0)return N(l);const r=h;let a=0,d="";for(let f=0;f<r.length;f++){const i=l[a],x=r[f];if(typeof x=="string")d+=x,i===x&&a++;else if(i!==void 0&&x.regex.test(i))d+=x.transform!==void 0?x.transform(i):i,a++;else return d}return d}function N(l){const r=h,a=g.indexOf(A);let d=l.length-1,f="";for(let i=r.length-1;i>=0&&d>-1;i--){const x=r[i];let m=l[d];if(typeof x=="string")f=x+f,m===x&&d--;else if(m!==void 0&&x.regex.test(m))do f=(x.transform!==void 0?x.transform(m):m)+f,d--,m=l[d];while(a===i&&m!==void 0&&x.regex.test(m));else return f}return f}function E(l){return typeof l!="string"||b===void 0?typeof l=="number"?b(""+l):l:b(l)}function $(l){return v.length-l.length<=0?l:e.reverseFillMask===!0&&l.length>0?v.slice(0,-l.length)+l:l+v.slice(l.length)}return{innerValue:C,hasMask:M,moveCursorForPaste:Z,updateMaskValue:_,onMaskedKeydown:O}}const Je={name:String};function Xe(e){return p(()=>e.name||e.for)}function Ye(e,t){function u(){const s=e.modelValue;try{const g="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(s)===s&&("length"in s?Array.from(s):[s]).forEach(v=>{g.items.add(v)}),{files:g.files}}catch{return{files:void 0}}}return t===!0?p(()=>{if(e.type==="file")return u()}):p(u)}const et=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,tt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,lt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,nt=/[a-z0-9_ -]$/i;function ot(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(_e.is.firefox===!0?nt.test(u.data)===!1:et.test(u.data)===!0||tt.test(u.data)===!0||lt.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}var ut=Be({name:"QInput",inheritAttrs:!1,props:{...Ze,...We,...Je,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Ne,"paste","change","keydown","animationend"],setup(e,{emit:t,attrs:u}){const{proxy:s}=W(),{$q:g}=s,v={};let h=NaN,b,M,C=null,S;const y=j(null),U=Xe(e),{innerValue:R,hasMask:_,moveCursorForPaste:Z,updateMaskValue:q,onMaskedKeydown:O}=Ge(e,t,T,y),L=Ye(e,!0),N=p(()=>ae(R.value)),E=ot(m),$=Ke(),l=p(()=>e.type==="textarea"||e.autogrow===!0),r=p(()=>l.value===!0||["text","search","url","tel","password"].includes(e.type)),a=p(()=>{const o={...$.splitAttrs.listeners.value,onInput:m,onPaste:x,onChange:n,onBlur:c,onFocus:se};return o.onCompositionstart=o.onCompositionupdate=o.onCompositionend=E,_.value===!0&&(o.onKeydown=O),e.autogrow===!0&&(o.onAnimationend=w),o}),d=p(()=>{const o={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:U.value,...$.splitAttrs.attributes.value,id:$.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return l.value===!1&&(o.type=e.type),e.autogrow===!0&&(o.rows=1),o});D(()=>e.type,()=>{y.value&&(y.value.value=e.modelValue)}),D(()=>e.modelValue,o=>{if(_.value===!0){if(M===!0&&(M=!1,String(o)===h))return;q(o)}else R.value!==o&&(R.value=o,e.type==="number"&&v.hasOwnProperty("value")===!0&&(b===!0?b=!1:delete v.value));e.autogrow===!0&&K(I)}),D(()=>e.autogrow,o=>{o===!0?K(I):y.value!==null&&u.rows>0&&(y.value.style.height="auto")}),D(()=>e.dense,()=>{e.autogrow===!0&&K(I)});function f(){be(()=>{const o=document.activeElement;y.value!==null&&y.value!==o&&(o===null||o.id!==$.targetUid.value)&&y.value.focus({preventScroll:!0})})}function i(){y.value!==null&&y.value.select()}function x(o){if(_.value===!0&&e.reverseFillMask!==!0){const V=o.target;Z(V,V.selectionStart,V.selectionEnd)}t("paste",o)}function m(o){if(!o||!o.target)return;if(e.type==="file"){t("update:modelValue",o.target.files);return}const V=o.target.value;if(o.target.qComposing===!0){v.value=V;return}if(_.value===!0)q(V,!1,o.inputType);else if(T(V),r.value===!0&&o.target===document.activeElement){const{selectionStart:F,selectionEnd:H}=o.target;F!==void 0&&H!==void 0&&K(()=>{o.target===document.activeElement&&V.indexOf(o.target.value)===0&&o.target.setSelectionRange(F,H)})}e.autogrow===!0&&I()}function w(o){t("animationend",o),I()}function T(o,V){S=()=>{C=null,e.type!=="number"&&v.hasOwnProperty("value")===!0&&delete v.value,e.modelValue!==o&&h!==o&&(h=o,V===!0&&(M=!0),t("update:modelValue",o),K(()=>{h===o&&(h=NaN)})),S=void 0},e.type==="number"&&(b=!0,v.value=o),e.debounce!==void 0?(C!==null&&clearTimeout(C),v.value=o,C=setTimeout(S,e.debounce)):S()}function I(){requestAnimationFrame(()=>{const o=y.value;if(o!==null){const V=o.parentNode.style,{overflow:F}=o.style;g.platform.is.firefox!==!0&&(o.style.overflow="hidden"),V.marginBottom=o.scrollHeight-1+"px",o.style.height="1px",o.style.height=o.scrollHeight+"px",o.style.overflow=F,V.marginBottom=""}})}function n(o){E(o),C!==null&&(clearTimeout(C),C=null),S!==void 0&&S(),t("change",o.target.value)}function c(o){o!==void 0&&se(o),C!==null&&(clearTimeout(C),C=null),S!==void 0&&S(),b=!1,M=!1,delete v.value,e.type!=="file"&&setTimeout(()=>{y.value!==null&&(y.value.value=R.value!==void 0?R.value:"")})}function P(){return v.hasOwnProperty("value")===!0?v.value:R.value!==void 0?R.value:""}te(()=>{c()}),ue(()=>{e.autogrow===!0&&I()}),Object.assign($,{innerValue:R,fieldClass:p(()=>`q-${l.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:p(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:y,emitValue:T,hasValue:N,floatingLabel:p(()=>N.value===!0||ae(e.displayValue)),getControl:()=>k(l.value===!0?"textarea":"input",{ref:y,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...d.value,...a.value,...e.type!=="file"?{value:P()}:L.value}),getShadowControl:()=>k("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(l.value===!0?"":" text-no-wrap")},[k("span",{class:"invisible"},P()),k("span",e.shadowText)])});const z=He($);return Object.assign(s,{focus:f,select:i,getNativeElement:()=>y.value}),pe(s,"nativeEl",()=>y.value),z}});export{ut as Q,be as a};
