import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Chakra, { CThemeProvider } from '@chakra-ui/vue';

Vue.config.productionTip = false
Vue.use(Chakra)

new Vue({
  router,
  store,
  render:  (h) => h(CThemeProvider, [h(App)])
}).$mount('#app')
