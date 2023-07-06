import {createRouter, createWebHistory} from 'vue-router'
import beranda from '../views/beranda.vue'
import cuaca from '../views/cuaca.vue'
import lokasi from '../views/lokasi.vue'
import stopwatch from '../views/stopwatch.vue'
import foto from '../views/foto.vue'
import tictactoe from '../views/tictactoe'

const routes = [
    {path : '/beranda', component: beranda},
    {path : '/cuaca', component: cuaca},
    {path : '/lokasi', component: lokasi},
    {path : '/stopwatch', component: stopwatch},
    {path : '/foto', component: foto},
    {path : '/tictactoe', component: tictactoe},
    {path : '/', redirect: '/beranda'},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router