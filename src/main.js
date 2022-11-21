
import Vue from 'vue'
import store from './components/store'
import App from './App.vue'

new Vue({
    store,
    render: h=>h(App),
}).$mount('#app')
