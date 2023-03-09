import{Q as p}from"./QImg.ecc9e3df.js";import{Q as y,a as b}from"./QCard.4bdcee3c.js";import{_ as C,W as w,r as f,X as z,ae as S,ab as e,a1 as i,a4 as s,a3 as r,Z as g,a8 as c,a2 as q,a9 as I,aa as Q}from"./index.7ccb5a9e.js";import{u as k}from"./use-quasar.c4ead8f4.js";import{a as B}from"./axios.f1f32898.js";import{u as D}from"./store.861e0c2e.js";import"./use-dark.1d60d832.js";const d=n=>(I("data-v-425e26e7"),n=n(),Q(),n),N={class:"row",style:{height:"90vh"}},P={class:"flex flex-center col-12"},V={class:"container"},W={class:"row text"},A={class:"row"},E={class:"q-my-md"},F={class:"title"},L={class:"q-mb-md"},O=d(()=>e("h4",{class:"h4",style:{"font-size":"20px"}},[e("b",null," Published:")],-1)),T={class:"h4",style:{"font-size":"16px"}},X={class:"q-mb-md"},Y=d(()=>e("h4",{class:"h4",style:{"font-size":"20px"}},[e("b",null,"Writter:")],-1)),Z={class:"h4",style:{"font-size":"16px"}},$={class:"q-mb-md"},j=d(()=>e("h4",{class:"h4",style:{"font-size":"20px"}},[e("b",null,"Cover Artist:")],-1)),G={class:"h4",style:{"font-size":"16px"}},H={class:"q-mb-md"},J=d(()=>e("h4",{class:"h4",style:{"font-size":"20px"}},[e("b",null,"Penciler:")],-1)),K={class:"h4",style:{"font-size":"16px"}},M={class:"h4",style:{"font-size":"14px"}},R={__name:"Info",setup(n){w.setSizes({sm:600,md:1024,lg:1440,xl:2e3});const t=D(),l=k(),m=".",u=()=>{l.loading.show({message:"Doing something. Please wait...",spinnerColor:"primary"})},x=()=>{u(),B.post("https://backend-tecno.vercel.app/api/favorito",{usuario:t.usuario._id,comicFav:t.detalleComic.id}).then(o=>{console.log(o),l.notify({icon:"done",color:"positive",message:"Comic agregado a favoritos exitosamente"}),l.loading.hide()}).catch(o=>{console.log(o),o.response.data.msg=="usuario ya tiene un comic registrado como favorito"?l.notify({color:"negative",message:"Ya tienes este comic como favorito!!"}):l.notify({color:"negative",message:"No se pudo agregar el comic a tus favoritos"}),l.loading.hide()})},v=o=>new Date(o).toISOString().split("T")[0].replace(/-/g,"/");let _=f(""),h=f("");return(()=>{for(let o=0;o<t.detalleComic.creators.items.length;o++){const a=t.detalleComic.creators.items[o];a.role=="writer"&&(_.value=a.name),a.role=="penciller (cover)"&&(h.value=a.name)}})(),(o,a)=>(z(),S("section",N,[e("article",P,[e("article",V,[i(p,{class:"img",alt:"comic-marvel",position:"top",src:s(t).detalleComic.thumbnail.path+m+s(t).detalleComic.thumbnail.extension},null,8,["src"]),e("section",W,[e("article",{class:"flex flex-center col-12 col-sm-7 col-md-6 col-lg-5 col-xl-2",style:r(s(l).screen.gt.md?{height:"100%"}:{height:"100%"})},[i(y,{style:r([{width:"100%",height:"80%"},s(l).screen.gt.md?{height:"80%"}:{height:"80%"}]),class:"q-ma-xl"},{default:g(()=>[i(b,{style:{width:"100%",height:"100%"},class:"q-pa-none"},{default:g(()=>[i(p,{class:"",fit:"cover",style:{width:"100%",height:"100%"},src:s(t).detalleComic.thumbnail.path+m+s(t).detalleComic.thumbnail.extension},null,8,["src"])]),_:1})]),_:1},8,["style"])],4),e("article",{class:"flex flex-start col-12 col-sm-5 col-md-6 col-lg-7 col-xl-2",style:r(s(l).screen.lt.sm?{backgroundColor:"black"}:{})},[e("section",A,[e("article",{class:"col-12 flexible",style:r(s(l).screen.lt.sm?{marginBottom:"100px"}:{height:"90vh"})},[e("div",E,[e("h1",F,[e("b",null,c(s(t).detalleComic.title),1)])]),e("div",L,[O,e("h4",T,c(v(s(t).detalleComic.dates[0].date)),1)]),e("div",X,[Y,e("h4",Z,c(s(_)),1)]),e("div",$,[j,e("h4",G,c(s(h)),1)]),e("div",H,[J,e("h4",K,c(s(h)),1)]),e("p",M,c(s(t).detalleComic.description),1),i(q,{class:"q-ml-lg",color:"red",icon:"mdi-heart-box",onClick:x})],4)])],4)])])])]))}};var ne=C(R,[["__scopeId","data-v-425e26e7"]]);export{ne as default};
