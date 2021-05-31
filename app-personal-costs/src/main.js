import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/normalize.css';

import modal from './plugins/ModalWindow';
import correction from './plugins/CorrectionForms';

Vue.config.productionTip = false;

Vue.use(modal);
Vue.use(correction);

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
