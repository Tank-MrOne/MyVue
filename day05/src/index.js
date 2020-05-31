import Vue from 'vue';
import App from './App'

new Vue({
    beforeCreate(){
        Vue.prototype.$bus = this
    },
    el : "#root",
    render : v => v(App)
})