import { createRouter, createWebHistory } from 'vue-router';
import AllBreweries from "@/views/AllBreweries.vue"
import HomePage from '../src/components/HomePage.vue';
import Login from '../src/components/Login.vue';

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "AllBreweries",
        component: HomePage,
    },
    {
        path: "/login",
        name: "login",
        component: Login
    }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router