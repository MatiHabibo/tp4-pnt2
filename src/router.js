import Vue from 'vue'
import VueRouter from 'vue-router'

import Formulario from './components/Formulario.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        {path: '/', redirect : '/formulario'},
        {path: '/formulario', component: Formulario},
    ]

})