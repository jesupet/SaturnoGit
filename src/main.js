import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initializeApp } from "firebase/app";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faArrowRight, faHeart, faBookmark } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faArrowRight, faHeart, faBookmark)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


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