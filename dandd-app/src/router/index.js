import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Makecampaign from '../views/kampagne/Makecampaign.vue'
import Kampagnedetails from '../views/kampagne/Kampagnedetails.vue'
import Redigerkampagne from '../views/kampagne/Redigerkampagne.vue'
import Minekampagner from '../views/kampagne/Minekampagner.vue'
import Login from '../views/profile/Login.vue'
import Profil from '../views/profile/Profil.vue'
import Registrer from '../views/profile/Registrer.vue'
import Rediger from '../views/profile/Rediger.vue'
import Kalender from '../views/Kalender.vue'
import Forumforside from '../views/forum/Forumforside.vue'
import Forumlist from '../views/forum/Forumlist.vue'
import Postdetail from '../views/forum/Postdetail.vue'
import Makeforumpost from '../views/forum/Makeforumpost.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/makecampaign',
    name: 'Makecampaign',
    component: Makecampaign
  },
  {
    path: '/kampagnedetails',
    name: 'Kampagnedetails',
    component: Kampagnedetails
  },
  {
    path: '/redigerkampagne',
    name: 'Redigerkampagne',
    component: Redigerkampagne
  },
  {
    path: '/minekampagner',
    name: 'Minekampagner',
    component: Minekampagner
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil
  },
  {
    path: '/registrer',
    name: 'Registrer',
    component: Registrer
  },
  {
    path: '/rediger',
    name: 'Rediger',
    component: Rediger
  },
  {
    path: '/kalender',
    name: 'Kalender',
    component: Kalender
  },
  {
    path: '/forum',
    name: 'Forumforside',
    component: Forumforside
  },
  {
    path: '/forum/:name',
    name: 'Forumlist',
    component: Forumlist,
  },
  {
    path: '/forum/post:name',
    name: 'Postdetail',
    component: Postdetail
  },
  {
    path: '/forum/makeforumpost',
    name: 'Makeforumpost',
    component: Makeforumpost
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
