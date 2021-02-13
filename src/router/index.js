import Vue from 'vue'
import  VueRouter from 'vue-router'
import Home from '../views/Home'
import Details from '../views/Details'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: Details
  }
]

const router = new VueRouter({
  routes
})

export default router
