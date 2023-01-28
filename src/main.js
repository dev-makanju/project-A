import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Chakra, { CThemeProvider } from '@chakra-ui/vue';
import scrollAnimation from './directives/scrollAnimation';
import VueSocialSharing from 'vue-social-sharing'

Vue.use(VueSocialSharing);
Vue.config.productionTip = false
Vue.use(Chakra);
Vue.directive('scrollanimation' , scrollAnimation);

new Vue({
  router,
  store,
  render:  (h) => h(CThemeProvider, [h(App)])
}).$mount('#app')
