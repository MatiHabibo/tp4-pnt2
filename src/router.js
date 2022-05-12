import Vue from 'vue'
import VueRouter from 'vue-router'

import Formulario from './components/Formulario.vue'
import PedirDatos from './components/PedirDatos.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        {path: '/', redirect : '/formulario'},
        {path: '/formulario', component: Formulario},
        {path: '/pedir-datos', component: PedirDatos},
    ]

})