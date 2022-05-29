<template>
  <div class="app">
    <NavbarComp/>
    <router-view></router-view>
    <FooterComp/>
  </div>
</template>

<script>


import { getFirestore } from "firebase/firestore";
import { mapActions } from "vuex";
import NavbarComp from './components/NavbarComp.vue'
import FooterComp from './components/FooterComp.vue'


export default {
  name: "App",
  components: { NavbarComp, FooterComp },
  methods: {
    ...mapActions(["instanceFirestore", "getTours", "getUsers"]),
    initFirestore() {
      this.instanceFirestore(getFirestore);
    },
  },
  created() {
    this.initFirestore();
  },
  beforeMount() {
    this.getTours();
    this.getUsers();
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    font-size: 100%;
    font-family: 'Rubik';
  }
  .title {
    font-size: 40px;
    padding-top: 30px;
    padding-bottom: 20px;
    text-align: center;
    color: white;
  }
  .main-section {
    background-color: black;
    margin: 0;
    padding: 0;
  }
</style>
