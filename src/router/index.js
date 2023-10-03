import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CadastroPe from '../views/CadastroPessoas.vue'
import Busca from '../views/Busca.vue'
import CadastroTreino from '../views/CadastroTreino.vue'

Vue.use(VueRouter)

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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
