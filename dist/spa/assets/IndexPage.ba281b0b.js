import{c as g,j as a,a as i,h as p,d as f,m as c,g as m,p as y,N as v,_ as C,W as $,ad as x,X as _,Y as P,Z as b,a3 as l,ab as Q}from"./index.8a790509.js";var q=g({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(t,{slots:r}){const{proxy:{$q:s}}=m(),e=c(y,a);if(e===a)return console.error("QPage needs to be a deep child of QLayout"),a;if(c(v,a)===a)return console.error("QPage needs to be child of QPageContainer"),a;const o=i(()=>{const n=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof t.styleFn=="function"){const u=e.isContainer.value===!0?e.containerHeight.value:s.screen.height;return t.styleFn(n,u)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-n+"px":s.screen.height===0?n!==0?`calc(100vh - ${n}px)`:"100vh":s.screen.height-n+"px"}}),d=i(()=>`q-page${t.padding===!0?" q-layout-padding":""}`);return()=>p("main",{class:d.value,style:o.value},f(r.default))}}),F="/assets/Comic.0e096b6d.png";$.setSizes({sm:600,md:800,lg:1200,xl:2400});const w=x({name:"IndexPage"});function z(t,r,s,e,h,o){return _(),P(q,{class:"flex flex-center",style:l([{height:"90vh"},t.$q.screen.lt.sm?{backgroundColor:"rgba(0, 0, 0, 0.8)"}:{height:"90vh"}])},{default:b(()=>[Q("img",{fit:"cover",alt:"Marvel",src:F,style:l([{width:"100%",height:"100%"},t.$q.screen.lt.sm?{width:"100%",height:"50%"}:{width:"100%"}])},null,4)]),_:1},8,["style"])}var S=C(w,[["render",z]]);export{S as default};
