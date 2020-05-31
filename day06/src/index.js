import Vue from 'vue'
import App from './App'

new Vue({
    beforeCreate(){
        Vue.prototype.$tank = this
    },
    el : "#app",
    render : v => v(App)
})