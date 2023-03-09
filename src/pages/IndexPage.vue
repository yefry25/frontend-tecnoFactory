<template>
  <q-page class="flex flex-center" v-bind:style="[{height:'90vh'},$q.screen.lt.md ? {backgroundColor: 'rgba(0, 0, 0, 0.8)'}:{}]">
    <img fit="cover" alt="Marvel" src="~assets/Comic.png" v-bind:style="size">
  </q-page>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { Screen } from 'quasar'
import { computed,ref } from 'vue'
import {useStore} from '../stores/store.js'
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useStore();
const $q= useQuasar();
Screen.setSizes({ sm: 600, md: 800, lg: 1200, xl: 2400 });

const size = computed(() => {
  if ($q.screen.lt.md) {
    return { width: '100%', height: '50%' }
  }
  return {width: '100%', height: '100%'}
})

const logeado = () =>{
  if(store.token){
    router.push('/Inicio')
  }
}
logeado();
</script>

<style lang="scss" scoped></style>
