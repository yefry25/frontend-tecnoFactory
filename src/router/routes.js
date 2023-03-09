
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {path:'/login', component: () => import('components/Login.vue')},
      {path:'Registrar', component: () => import('components/Registrar.vue')},
      {path:'/Inicio', component: () => import('components/Inicio.vue')},
      {path:'/Info', component: () => import('components/Info.vue')},
      {path:'/favoritos', component: () => import('components/Favorito.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
