<template>
  <section class="row font justify-center" style="height:90vh">
    <article class="col-12 flex flex-center">
      <b><h2 class="q-my-md" v-bind:style="$q.screen.lt.md ? {fontSize:'34px'}:{fontSize:'48px'}">COMICS DE MARVEL</h2></b>
    </article>
      <article v-for="value in comic" :key="value.id"
        class=" flex col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <q-card style="width: 100%; height: 95%;" class="q-ma-md text-center card">
          <a href="#/Info" style="text-decoration: none" @click="favorito(value)">
          <q-card-section style="width: 100%; height:100%">
            <q-img fit="cover" style="width: 100%; height:100%" :src=value.thumbnail.path+punto+value.thumbnail.extension>
              <div class="absolute-bottom text-subtitle2 text-center texto">
                {{ value.title }}
              </div>
            </q-img>
          </q-card-section>
        </a>
        </q-card>
      </article>
  </section>

</template>

<script setup>
import { Screen } from 'quasar'
import { ref } from "vue"
import axios from "axios"
import { useStore } from "../stores/store.js"
Screen.setSizes({ sm: 400, md: 800, lg: 1200, xl: 2400 });

const store = useStore();
const punto = (".")
let comic = ref([])
const marvel = () => {
  /* privateKey=fef1c025c38c2dc7ab61584b9de63fcc9202b28a
  publickey=90a452174dd11c2a54995ab003a52734 */

  axios.get('https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=90a452174dd11c2a54995ab003a52734&hash=ab8a63fa3ba1ecf0d774d894288b0666')
    .then((res) => {
      /* console.log(res.data.data.results[7]); */
      comic.value = res.data.data.results
    })
    .catch((err) => {
      console.log(err);
    })
};
marvel();
const favorito = (value) => {
  store.setDetalleComic(value);
}
</script>

<style lang="scss" scoped>
.texto {
  background-color: rgba(0, 0, 0, 0.9);
}
.card {
  overflow: hidden;
  box-shadow: 0px 1px 10px rgba(0,0,0,0.2);
  transition: all 400ms ease;
}

.card:hover {
  box-shadow: 5px 5px 20px rgba(0,0,0,0.4);
  transform: translateY(-3%);
}

.font {
  font-family:'robotoCondensed';
}
</style>
