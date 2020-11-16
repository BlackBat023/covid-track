import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {store} from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.config.productionTip = false

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Vue.use(axios,VueAxios)
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
