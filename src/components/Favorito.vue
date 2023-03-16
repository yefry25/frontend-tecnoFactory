<template>
  <section class="row justify-center" style="height:90vh">
    <article class="col-12 flex flex-center" v-if="vacio != false">
      <b>
        <h2 class="q-my-md" v-bind:style="size">TUS COMICS FAVORITOS</h2>
      </b>
    </article>
    <article v-for="value in guardar" :key="value.id" v-if="vacio != false"
      class="flex col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
      <q-card style="width: 100%; height: 95%;" class="q-ma-md text-center">
        <q-card-section style="width: 100%; height:100%">
          <q-img fit="cover" style="width: 100%; height:100%" :src=value.thumbnail.path+punto+value.thumbnail.extension>
            <div class="absolute-bottom text-subtitle2 text-center" style="background-color: rgba(0,0,0,0.9);">
              {{ value.title }}
            </div>
          </q-img>
        </q-card-section>
      </q-card>
    </article>
    <article class="col-12" v-if="vacio != true">
      <article class="container">
        <q-img  style="height:90vh" fit="cover" alt="Marvel favorito" src="~assets/14742.jpg"/>
        <article class="texto">
          <h1 v-bind:style="sizeTitle">No tienes comics agregados a favoritos</h1>
        </article>
      </article>
    </article>
  </section>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { Screen } from 'quasar'
import { ref, computed } from "vue";
import axios from "axios";
import { useStore } from "../stores/store.js"
Screen.setSizes({ sm: 600, md: 800, lg: 1200, xl: 2400 });
const $q = useQuasar();

const size = computed(() => {
  if ($q.screen.lt.md) {
    return { fontSize: '30px', margin: '0 0', 'line-height': 'inherit' }
  }
  return { fontSize: '48px', 'line-height': 'inherit' }
});

const sizeTitle = computed(()=>{
  if($q.screen.gt.sm){
    return {'font-size':'48px','line-height':'inherit'}
  }

  if($q.screen.lt.md){
    return {'font-size':'32px','line-height':'inherit'}
  }
})

const showLoading = () => {
  $q.loading.show({
    message: 'Doing something. Please wait...',
    spinnerColor: 'primary'
  })
}
const store = useStore();
const punto = ref('.')
const favoritos = ref([])
const vacio = ref(true)
const traerFavoritos = () => {
  showLoading();
  axios.get(`https://backend-tecno.vercel.app/api/favorito/filtrarFav/${store.usuario._id}`)
    .then((res) => {
      console.log(res.data);
      favoritos.value = res.data
      if (res.data.length == 0) {
        vacio.value = false
        $q.loading.hide()
      }
    })
    .catch((err) => {
      console.log(err);
      $q.notify({
        color: 'negative',
        message: 'Recarge la página nuevamente para poder ver tus comic favoritos'
      })
      $q.loading.hide()
    })
}
traerFavoritos();
let guardar = ref([])
const mostrarFavoritos = () => {
  if (vacio !== true) {

    for (let i = 0; i < favoritos.value.length; i++) {
      const element = favoritos.value[i];

      axios.get(`https://gateway.marvel.com:443/v1/public/comics/${element.comicFav}?ts=1&apikey=90a452174dd11c2a54995ab003a52734&hash=ab8a63fa3ba1ecf0d774d894288b0666`)
        .then((res) => {
          console.log(res);
          guardar.value.push(res.data.data.results[0]);
          $q.notify({
            icon: 'done',
            color: 'positive',
            message: 'Tus comics favoritos'
          });
          $q.loading.hide()
        })
        .catch((err) => {
          console.log(err);
          $q.notify({
            color: 'negative',
            message: 'Recarge la página nuevamente para poder ver tus comic favoritos'
          })
          $q.loading.hide()
        })
    }
  }
}
setTimeout(() => {
  mostrarFavoritos();
}, 2000);
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
}
.texto {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  width: 100%;
  height: 100%;
}
</style>
