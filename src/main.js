import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.config.productionTip = false

const firebaseConfig = {
    apiKey: "AIzaSyAZE7EncCafg7iWxScjcOIKc09x9b8fo_Y",
    authDomain: "todo-ninja-c9a79.firebaseapp.com",
    databaseURL: "https://todo-ninja-c9a79.firebaseio.com",
    projectId: "todo-ninja-c9a79",
    storageBucket: "todo-ninja-c9a79.appspot.com",
    messagingSenderId: "1084235949392",
    appId: "1:1084235949392:web:88a1c8daee088948b0f855"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export default db

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
