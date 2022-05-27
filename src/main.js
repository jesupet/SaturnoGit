import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initializeApp } from "firebase/app";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const firebaseConfig = {
  apiKey: "AIzaSyCKQ5D85JRcxIHuiljC62tCuAs59KN0zUg",
  authDomain: "ensayofirebase1.firebaseapp.com",
  projectId: "ensayofirebase1",
  storageBucket: "ensayofirebase1.appspot.com",
  messagingSenderId: "495704296636",
  appId: "1:495704296636:web:8a8333bc16e61f33c714b9",
  measurementId: "G-3M1CJS9DTT"
};

const app = initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  app,
  router,
  store,
  render: h => h(App)
}).$mount('#app')