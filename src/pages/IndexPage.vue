<template>
  <q-page class="flex flex-center" style="height:90vh" v-bind:style="$q.screen.lt.sm ? {backgroundColor:'rgba(0, 0, 0, 0.8)'}:{height: '90vh'}">
    <img
      fit="cover"
      alt="Marvel"
      src="~assets/Comic.png"
      style="width: 100%; height: 100%"
      v-bind:style="$q.screen.lt.sm ? {width: '100%', height: '50%'}:{width: '100%'}"
    >
  </q-page>
</template>

<script>
import { Screen } from 'quasar'
import { defineComponent } from 'vue'
Screen.setSizes({ sm: 600, md: 800, lg: 1200, xl: 2400 });
export default defineComponent({
  name: 'IndexPage'
})
</script>

<style lang="scss" scoped>

</style>
