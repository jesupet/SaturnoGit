<template>
  <div class="app">
    <!--<NavbarComp />-->
    <NavbarCompBV />
    <router-view></router-view>
    <FooterComp />
  </div>
</template>

<script>
import { getFirestore } from "firebase/firestore";
import { mapActions, mapGetters } from "vuex";
//import NavbarComp from "./components/NavbarComp.vue";
import FooterComp from "./components/FooterComp.vue";
import NavbarCompBV from "./components/NavbarCompBV.vue";

export default {
  name: "App",
  components: { FooterComp, NavbarCompBV },
  methods: {
    ...mapActions([
      "instanceFirestore",
      "getTours",
      "getUsers",
      "callOnemiData",
      "callBaikonurData",
      "callSpaceLaunchData"
    ]),
    initFirestore() {
      this.instanceFirestore(getFirestore);
    },
  },
  computed: {
    ...mapGetters(["getOnemiData", "getBaikonurData", "getSpaceLaunchData"]),
  },
  created() {
    this.initFirestore();
  },
  beforeMount() {
    this.getTours();
    this.getUsers();
    this.callOnemiData();
    this.callBaikonurData();
    this.callSpaceLaunchData();
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap");
* {
  margin: 0;
  padding: 0;
  font-size: 100%;
  font-family: "Rubik";
}
body {
  min-height: 100vh;
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
  min-height: calc(100vh - 10vh);
}
.purple_btn {
  background-color: purple;
  border: 1px solid purple;
  color: white;
}
.purple_btn:hover {
  background-color: white;
  border: 1px solid purple;
  color: purple;
}
.purple_btn:focus {
  background-color: purple;
  border: 0px solid;
  border-radius: 0px;
  color: #fff;
}

</style>
