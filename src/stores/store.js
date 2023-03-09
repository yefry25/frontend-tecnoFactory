import { defineStore } from 'pinia';

export const useStore = defineStore('counter', {
  state: () => ({
    token:localStorage.token,
    usuario:JSON.parse(localStorage.getItem("usuario")),
    detalleComic:JSON.parse(localStorage.getItem("detalleComic"))
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    setUsuario(value) {
      localStorage.setItem("usuario", JSON.stringify(value));
      let user = JSON.parse(localStorage.getItem("usuario"));
      if (user) {
        this.usuario = user;
      }
    },
    setDetalleComic(value){
      localStorage.setItem("detalleComic", JSON.stringify(value));
      let detalle = JSON.parse(localStorage.getItem("detalleComic"));
      if(detalle) {
        this.detalleComic = detalle;
      }
    },
    setToken(value){
      localStorage.token = value;
      if (localStorage.token) {
        this.token = localStorage.token;
      } else {
        this.token = value;
      }
    }
  },
});
