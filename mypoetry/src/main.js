import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import AppScroll from './components/AppScroll.vue'
Vue.component(AppScroll.name,AppScroll)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
