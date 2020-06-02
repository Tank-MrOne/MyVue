import Vue from 'vue'
import App from './App'
import router from './router/index'

new Vue({
    el : "#root",
    render : v => v(App),
    router
})