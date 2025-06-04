import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

import MeusPinos from '../views/MeusPinos.vue'
router.addRoute({ path: '/meus-pinos', component: MeusPinos })
import MeusPinos from '../views/NovoPino.vue'
router.addRoute({ path: '/novo-pino', component: MeusPinos })
import Perfil from '../views/Perfil.vue'
router.addRoute({ path: '/perfil', component: Perfil })
import Admin from '../views/Admin.vue'
router.addRoute({ path: '/admin', component: Admin })