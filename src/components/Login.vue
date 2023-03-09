<template>
  <section class="row" style="height: 90vh">
    <article class="flex flex-center col-12">
      <q-card class="text-center" v-bind:style="[{'border-radius':'5%'},size]">
        <q-card-section>
          <q-avatar size="100px" class="absolute-center">
            <img src="../assets/users.png" alt="avatar">
          </q-avatar>
        </q-card-section>
        <q-card-section>
          <div class="q-pt-xl">
            <div class="col text-h4 ellipsis flex justify-center">
              <h2 class="text-h4 text-uppercase q-my-md text-weight-regular">inicio de sesión</h2>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <form @submit.prevent.stop="onSubmit" class="q-ma-md">
            <q-input type="email" v-model="email" label="Digite el correo *" lazy-rules :rules="emailRules" />
            <q-input :type="isPwd ? 'password' : 'text'" type="password" v-model="password" label="Digite la contraseña *"
              lazy-rules :rules="passwordRules">
              <template v-slot:append>
                <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
              </template>
            </q-input>
            <article>
              <a href="#/Registrar" style="text-decoration: none;">No tienes cuenta? Registrate aquí!!</a>
            </article>
            <article>
              <q-btn class="full-width rounded q-mt-md" label="Iniciar" type="submit" color="primary" />
            </article>
          </form>
        </q-card-section>
      </q-card>
    </article>
  </section>
</template>
<script setup>
import { Screen } from 'quasar'
import { useQuasar } from 'quasar';
import { ref, computed } from 'vue'
import {useStore} from "../stores/store.js"
import { useRouter } from 'vue-router';
import axios from 'axios'
const store = useStore();
const $q = useQuasar();
const router = useRouter();
Screen.setSizes({ sm: 500, md: 700, lg: 1200, xl: 2400 });


const size = computed(()=>{
  if($q.screen.lt.sm){
    return {width:'90%'}
  }
  if($q.screen.lt.md){
    return {width:'70%'}
  }
  if($q.screen.lt.lg){
    return {width:'50%'}
  }
  if($q.screen.lt.xl){
    return {width:'50%'}
  }
  if($q.screen.gt.lg){
    return {width:'50%'}
  }
  return {}
});

const email = ref('')
const password = ref('')
const showLoading = () => {
  $q.loading.show({
    message: 'Doing something. Please wait...',
    spinnerColor: 'primary'
  })
}
const onSubmit = () => {
  showLoading();
  axios.post('https://backend-tecno.vercel.app/api/usuario/login', {
    email: email.value,
    password:password.value
  })
  .then((res) =>{
    console.log(res.data.token);
    store.setUsuario(res.data.user);
    store.setToken(res.data.token);
    router.push('/Inicio')
    $q.notify({
        icon: 'done',
        color: 'positive',
        message: 'Inicio de sesión correcto'
      });
      $q.loading.hide()
  })
  .catch((err) =>{
    console.log(err);
    $q.notify({
        color: 'negative',
        message: 'Correo/Password incorrectos'
      })
      $q.loading.hide()
  })
}
const emailRules = [
  val => (val && val.length > 0) || 'Por favor escriba su correo'
]
const passwordRules = [
  val => (val !== null && val !== '') || 'Por favor escriba su contraseña',
  val => (val.length > 7) || 'Debe tener 8 o mas dígitos '
]
const isPwd = ref(true)
</script>

<style lang="scss" scoped></style>
