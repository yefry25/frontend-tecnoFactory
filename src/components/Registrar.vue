<template>
  <section class="row" style="height:90vh">
    <article class="flex flex-center col-12">
      <q-card class="text-center font" style="border-radius: 5%;"
        v-bind:style="$q.screen.lt.sm ? { width: '90%' } : { width: '50%' }">
        <q-card-section class="">
          <h4 class="q-mb-xs">Regístrate</h4>
        </q-card-section>
        <q-card-section>
          <q-form @submit.prevent.stop="registrar">
            <q-input v-model="identificacion" label="Digita tu número de identificación *" lazy-rules
              :rules="identificacionRules"></q-input>
            <q-input v-model="nombre" label="Digita tu nombre completo *" lazy-rules :rules="nombreRules"></q-input>
            <q-input v-model="correo" type="email" label="Digita tu correo *" lazy-rules :rules="emailRules"></q-input>
            <q-input v-model="password" :type="isPwd ? 'password' : 'text'" label="Digita tu contraseña *" lazy-rules
              :rules="passwordRules">
              <template v-slot:append>
                <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
              </template>
            </q-input>
            <q-input v-model="passwordConfirm" :type="isPwdConfirm ? 'passwordConfirm' : 'text'" label="Confirma tu contraseña *" lazy-rules
              :rules="passwordConfirmRules">
              <template v-slot:append>
                <q-icon :name="isPwdConfirm ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwdConfirm = !isPwdConfirm" />
              </template>
            </q-input>
            <article>
              <q-btn class="full-width rounded bg-primary q-mt-xs" type="submit" label="Registrar"></q-btn>
            </article>
          </q-form>
        </q-card-section>
      </q-card>
    </article>
  </section>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
const $q = useQuasar();
const router = useRouter();

const identificacion = ref('');
const nombre = ref('');
const correo = ref('');
const password = ref('');
const passwordConfirm = ref('')

const showLoading = () => {
  $q.loading.show({
    message: 'Doing something. Please wait...',
    spinnerColor: 'primary'
  })
}
const registrar = () => {
  showLoading();
  axios.post('https://backend-tecno.vercel.app/api/usuario',{
    identificacion:identificacion.value,
    nombre:nombre.value,
    correo:correo.value,
    password:password.value
  })
  .then((res) => {
    router.push('/login')
    console.log(res);
    $q.notify({
        icon: 'done',
        color: 'positive',
        message: 'Registro de usuario exitoso'
      });
      $q.loading.hide()
  })
  .catch((err) => {
    console.log(err);
    $q.notify({
        color: 'negative',
        message: 'No se pudo registrar al usuario'
      })
      $q.loading.hide()
  })
}
const identificacionRules = [
  val => (val && val.length > 0) || 'Por favor digite un número de identificación',
  val => (val.length > 6) || 'El número de identificación debe ser mayor a 6 caracteres'
]
const nombreRules = [
  val => (val && val.length > 0) || 'Por favor digite su nombre completo',
]
const emailRules = [
  val => (val && val.length > 0) || 'Por favor escriba su correo'
]
const passwordRules = [
  val => (val !== null && val !== '') || 'Por favor escriba su contraseña',
  val => (val.length > 7) || 'Debe tener 8 o mas dígitos '
]
const passwordConfirmRules = [
  val => (val !== null && val !== '') || 'Por favor escriba la confirmación de su contraseña',
  val => (val == password.value) || 'La contraseña no coincide'
]
const isPwd = ref(true)
const isPwdConfirm = ref(true)
</script>

<style lang="scss" scoped>
.font {
  font-family: 'customFont';
}
</style>
