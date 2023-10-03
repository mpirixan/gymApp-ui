// Arquivo com as rotas do projeto, onde é definido o caminho e o componente que será renderizado.
// O componente é importado e definido na propriedade component.

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CadastroPe from '../views/CadastroPessoas.vue'
import CadastroTreino from '../views/CadastroTreino.vue'
import Busca from '../views/Busca.vue'

Vue.use(VueRouter)

// Definição das rotas do projeto, onde é definido o caminho e o componente que será renderizado.
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Cadastro',
    name: 'Cadastro',
    component: CadastroPe
  },
  {
    path: '/CadastroTreino',
    name: 'CadastroTreino',
    component: CadastroTreino
  },
  {
    path: '/Busca',
    name: 'Busca',
    component: Busca
  },
  {
    path: '/About',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

// Criação do router, onde é definido o modo de navegação e as rotas.
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
