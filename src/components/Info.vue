<template>
  <section class="row" style="height:90vh">
    <article class="flex flex-center col-12">
      <article class="container">
        <q-img class="img" alt="comic-marvel" position="top"
          :src=store.detalleComic.thumbnail.path+punto+store.detalleComic.thumbnail.extension>
        </q-img>
        <section class="row text">
          <article class="flex flex-center col-12 col-sm-7 col-md-6 col-lg-5 col-xl-2"
            v-bind:style="$q.screen.gt.md ? { height: '100%' } : { height: '100%' }">
            <q-card style="width: 100%; height: 80%;" class="q-ma-xl"
              v-bind:style="$q.screen.gt.md ? { height: '80%' } : { height: '80%' }">
              <q-card-section style="width: 100%; height:100%" class="q-pa-none">
                <q-img class="" fit="cover" style="width: 100%; height:100%"
                  :src=store.detalleComic.thumbnail.path+punto+store.detalleComic.thumbnail.extension>
                </q-img>
              </q-card-section>
            </q-card>
          </article>
          <article class="flex flex-start col-12 col-sm-5 col-md-6 col-lg-7 col-xl-2"
            v-bind:style="$q.screen.lt.sm ? { backgroundColor: 'black' } : {}">
            <section class="row">
              <article class="col-12 flexible"
                v-bind:style="$q.screen.lt.sm ? { marginBottom: '100px' } : { height: '90vh' }">
                <div class="q-my-md">
                  <h1 class="title"><b>{{ store.detalleComic.title }}</b></h1>
                </div>
                <div class="q-mb-md">
                  <h4 class="h4" style="font-size:20px"><b> Published:</b></h4>
                  <h4 class="h4" style="font-size:16px">{{ fecha(store.detalleComic.dates[0].date) }}</h4>
                </div>
                <div class="q-mb-md">
                  <h4 class="h4" style="font-size:20px"><b>Writter:</b></h4>
                  <h4 class="h4" style="font-size:16px">{{ writer }} </h4>
                </div>
                <div class="q-mb-md">
                  <h4 class="h4" style="font-size:20px"><b>Cover Artist:</b></h4>
                  <h4 class="h4" style="font-size:16px">{{ penciller }}</h4>
                </div>
                <div class="q-mb-md">
                  <h4 class="h4" style="font-size:20px"><b>Penciler:</b></h4>
                  <h4 class="h4" style="font-size:16px">{{ penciller }}</h4>
                </div>
                <p class="h4" v-bind:style="styleDescription">{{ store.detalleComic.description }}</p>
                <q-btn class="q-ml-lg" color="red" icon="mdi-heart-box" @click="fav"></q-btn>
              </article>
            </section>
          </article>
        </section>
      </article>
    </article>
  </section>
</template>

<script setup>
import { Screen } from 'quasar'
import { useQuasar } from "quasar";
import { ref, computed } from "vue";
import axios from "axios";
import { useStore } from "../stores/store.js"
Screen.setSizes({ sm: 600, md: 1200, lg: 1440, xl: 2000 });
const store = useStore();
const $q = useQuasar();
const punto = (".")

const styleDescription = computed(()=>{
  return {'font-size':'16px','max-width':'500px'}
})
const showLoading = () => {
  $q.loading.show({
    message: 'Doing something. Please wait...',
    spinnerColor: 'primary'
  })
}
const fav = () => {
  showLoading();
  axios.post('https://backend-tecno.vercel.app/api/favorito', {
    usuario: store.usuario._id,
    comicFav: store.detalleComic.id
  })
    .then((res) => {
      console.log(res);
      $q.notify({
        icon: 'done',
        color: 'positive',
        message: 'Comic agregado a favoritos exitosamente'
      });
      $q.loading.hide()
    })
    .catch((err) => {
      console.log(err);
      if (err.response.data.msg == 'usuario ya tiene un comic registrado como favorito') {
        $q.notify({
          color: 'negative',
          message: 'Ya tienes este comic como favorito!!'
        }
        )
      } else {
        $q.notify({
          color: 'negative',
          message: 'No se pudo agregar el comic a tus favoritos'
        })
      }
      $q.loading.hide()
    })
}
const fecha = (r) => {
  let d = new Date(r);
  let f = d.toISOString();
  return f.split('T')[0].replace(/-/g, "/")
}
let writer = ref('');
let penciller = ref('');
const creator = () =>{
  for (let i = 0; i < store.detalleComic.creators.items.length; i++) {
    const element = store.detalleComic.creators.items[i];
    /* console.log(element); */
    if(element.role=='writer'){
      /* console.log("writer: "+element.name); */
      writer.value =element.name
    }
    if(element.role=='penciller (cover)'){
      /* console.log("penciller: "+element.name); */
      penciller.value =element.name
    }
  }
}
creator();
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
}
.img {
  height: 90vh;
}
.text {
  top: 0;
  position: absolute;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
}

.h4 {
  margin: 0px 14px;
  padding: 0px 14px;
  line-height: inherit;
}

.title {
  font-size: 26px;
  margin: 0px 14px;
  padding: 0px 14px;
  line-height: inherit;
}

.flexible {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}
</style>
