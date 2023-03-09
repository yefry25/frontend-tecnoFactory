<template>
  <section class="row flex-center" style="height:90vh">
    <article class="col-12 flex flex-center">
      <b><h2 class="q-my-xl" v-bind:style="$q.screen.lt.md ? {fontSize:'30px'}:{fontSize:'48px'}">TUS COMICS FAVORITOS</h2></b>
    </article>
    <article v-for="value in guardar" :key="value.id"
        class=" flex flex-center content-center col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <q-card style="width: 100%; height: 95%;" class="q-ma-md text-center card">
          <q-card-section style="width: 100%; height:100%">
            <q-img fit="cover" style="width: 100%; height:100%" :src=value.thumbnail.path+punto+value.thumbnail.extension>
              <div class="absolute-bottom text-subtitle2 text-center texto">
                {{ value.title }}
              </div>
            </q-img>
          </q-card-section>
        </q-card>
      </article>
  </section>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { Screen } from 'quasar'
import {ref} from "vue";
import axios from "axios";
import {useStore} from "../stores/store.js"
Screen.setSizes({ sm: 400, md: 800, lg: 1200, xl: 2400 });

const $q = useQuasar();

const showLoading = () => {
  $q.loading.show({
    message: 'Doing something. Please wait...',
    spinnerColor: 'primary'
  })
}
const store = useStore();
const punto = ref('.')

const favoritos = ref([])
const traerFavoritos = () => {
  showLoading();
  axios.get(`https://backend-tecno.vercel.app/api/favorito/filtrarFav/${store.usuario._id}`)
  .then((res) => {
      console.log(res);
      favoritos.value = res.data

      /* console.log(favoritos.value); */
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

const mostrarFavoritos = () =>{
  showLoading();
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

setTimeout(() => {
  mostrarFavoritos();
}, 2000);
</script>
