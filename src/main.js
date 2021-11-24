import Vue from 'vue'
import App from './App.vue'
Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});
new Vue({
  el: '#app',
  render: h => h(App)
})
