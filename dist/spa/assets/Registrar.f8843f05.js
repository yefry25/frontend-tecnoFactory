import{Q as B,a as Q}from"./QCard.9429c964.js";import{a as D,Q as _}from"./QInput.2b3fd8ce.js";import{c as F,r as v,y as z,al as k,o as A,h as U,d as $,g as M,z as N,t as E,f as j,M as L,ah as O,_ as K,X as T,ae as X,ab as R,a1 as r,Z as b,a3 as Z,a4 as G,$ as H,ag as J,a6 as q,a2 as W,a9 as Y,aa as ee}from"./index.4f31f6cb.js";import{a as oe}from"./axios.f1f32898.js";import{u as te}from"./use-quasar.1ad7bd9a.js";import"./use-dark.9a40565c.js";var ae=F({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(s,{slots:m,emit:y}){const h=M(),l=v(null);let u=0;const n=[];function x(t){const d=typeof t=="boolean"?t:s.noErrorFocus!==!0,c=++u,p=(e,i)=>{y("validation"+(e===!0?"Success":"Error"),i)},o=e=>{const i=e.validate();return typeof i.then=="function"?i.then(f=>({valid:f,comp:e}),f=>({valid:!1,comp:e,err:f})):Promise.resolve({valid:i,comp:e})};return(s.greedy===!0?Promise.all(n.map(o)).then(e=>e.filter(i=>i.valid!==!0)):n.reduce((e,i)=>e.then(()=>o(i).then(f=>{if(f.valid===!1)return Promise.reject(f)})),Promise.resolve()).catch(e=>[e])).then(e=>{if(e===void 0||e.length===0)return c===u&&p(!0),!0;if(c===u){const{comp:i,err:f}=e[0];if(f!==void 0&&console.error(f),p(!1,i),d===!0){const P=e.find(({comp:I})=>typeof I.focus=="function"&&N(I.$)===!1);P!==void 0&&P.comp.focus()}}return!1})}function V(){u++,n.forEach(t=>{typeof t.resetValidation=="function"&&t.resetValidation()})}function w(t){t!==void 0&&E(t);const d=u+1;x().then(c=>{d===u&&c===!0&&(s.onSubmit!==void 0?y("submit",t):t!==void 0&&t.target!==void 0&&typeof t.target.submit=="function"&&t.target.submit())})}function C(t){t!==void 0&&E(t),y("reset"),j(()=>{V(),s.autofocus===!0&&s.noResetFocus!==!0&&g()})}function g(){D(()=>{if(l.value===null)return;const t=l.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||l.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||l.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(l.value.querySelectorAll("[tabindex]"),d=>d.tabIndex>-1);t!=null&&t.focus({preventScroll:!0})})}L(O,{bindComponent(t){n.push(t)},unbindComponent(t){const d=n.indexOf(t);d>-1&&n.splice(d,1)}});let S=!1;return z(()=>{S=!0}),k(()=>{S===!0&&s.autofocus===!0&&g()}),A(()=>{s.autofocus===!0&&g()}),Object.assign(h.proxy,{validate:x,resetValidation:V,submit:w,reset:C,focus:g,getValidationComponents:()=>n}),()=>U("form",{class:"q-form",ref:l,onSubmit:w,onReset:C},$(m.default))}});const se=s=>(Y("data-v-69f5b98e"),s=s(),ee(),s),ne={class:"row",style:{height:"90vh"}},re={class:"flex flex-center col-12"},ie=se(()=>R("h4",{class:"q-mb-xs"},"Reg\xEDstrate",-1)),le={__name:"Registrar",setup(s){const m=te(),y=H(),h=v(""),l=v(""),u=v(""),n=v(""),x=v(""),V=()=>{m.loading.show({message:"Doing something. Please wait...",spinnerColor:"primary"})},w=()=>{V(),oe.post("https://backend-tecno.vercel.app/api/usuario",{identificacion:h.value,nombre:l.value,correo:u.value,password:n.value}).then(o=>{y.push("/login"),console.log(o),m.notify({icon:"done",color:"positive",message:"Registro de usuario exitoso"}),m.loading.hide()}).catch(o=>{console.log(o),m.notify({color:"negative",message:"No se pudo registrar al usuario"}),m.loading.hide()})},C=[o=>o&&o.length>0||"Por favor digite un n\xFAmero de identificaci\xF3n",o=>o.length>6||"El n\xFAmero de identificaci\xF3n debe ser mayor a 6 caracteres"],g=[o=>o&&o.length>0||"Por favor digite su nombre completo"],S=[o=>o&&o.length>0||"Por favor escriba su correo"],t=[o=>o!==null&&o!==""||"Por favor escriba su contrase\xF1a",o=>o.length>7||"Debe tener 8 o mas d\xEDgitos "],d=[o=>o!==null&&o!==""||"Por favor escriba la confirmaci\xF3n de su contrase\xF1a",o=>o==n.value||"La contrase\xF1a no coincide"],c=v(!0),p=v(!0);return(o,a)=>(T(),X("section",ne,[R("article",re,[r(B,{class:"text-center font",style:Z([{"border-radius":"5%"},G(m).screen.lt.sm?{width:"90%"}:{width:"50%"}])},{default:b(()=>[r(Q,{class:""},{default:b(()=>[ie]),_:1}),r(Q,null,{default:b(()=>[r(ae,{onSubmit:J(w,["prevent","stop"])},{default:b(()=>[r(_,{modelValue:h.value,"onUpdate:modelValue":a[0]||(a[0]=e=>h.value=e),label:"Digita tu n\xFAmero de identificaci\xF3n *","lazy-rules":"",rules:C},null,8,["modelValue"]),r(_,{modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=e=>l.value=e),label:"Digita tu nombre completo *","lazy-rules":"",rules:g},null,8,["modelValue"]),r(_,{modelValue:u.value,"onUpdate:modelValue":a[2]||(a[2]=e=>u.value=e),type:"email",label:"Digita tu correo *","lazy-rules":"",rules:S},null,8,["modelValue"]),r(_,{modelValue:n.value,"onUpdate:modelValue":a[4]||(a[4]=e=>n.value=e),type:c.value?"password":"text",label:"Digita tu contrase\xF1a *","lazy-rules":"",rules:t},{append:b(()=>[r(q,{name:c.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:a[3]||(a[3]=e=>c.value=!c.value)},null,8,["name"])]),_:1},8,["modelValue","type"]),r(_,{modelValue:x.value,"onUpdate:modelValue":a[6]||(a[6]=e=>x.value=e),type:p.value?"passwordConfirm":"text",label:"Confirma tu contrase\xF1a *","lazy-rules":"",rules:d},{append:b(()=>[r(q,{name:p.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:a[5]||(a[5]=e=>p.value=!p.value)},null,8,["name"])]),_:1},8,["modelValue","type"]),R("article",null,[r(W,{class:"full-width rounded bg-primary q-mt-xs",type:"submit",label:"Registrar"})])]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["style"])])]))}};var pe=K(le,[["__scopeId","data-v-69f5b98e"]]);export{pe as default};
