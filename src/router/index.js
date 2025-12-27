import { createRouter, createWebHistory } from 'vue-router'
import Beranda from '../views/Beranda.vue'
import MenuOrder from '../views/MenuOrder.vue'
import Reservasi from '../views/Reservasi.vue'
import Meja from '../views/Meja.vue'
const routes = [
  {
    path: '/',
    component: Beranda,
  },
  {
    path: '/menu',      
    name: 'menu',
    component: MenuOrder 
  },
    {
    path: '/reservasi',      
    name: 'reservasi',
    component: Reservasi    
  },
    {
    path: '/pilihmeja',      
    name: 'pilihmeja',
    component: Meja
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
