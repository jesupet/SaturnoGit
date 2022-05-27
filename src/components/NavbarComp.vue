<template>
  <div>
    <b-navbar type="dark" class="nav_comp">
      <b-navbar-brand class="mx-5" to="/">
        <img
          src="../assets/saturn_logo.svg"
          class="d-inline-block align-middle saturn-icon"
          alt="Kitten"
          fluid
        />¡SA-TOUR-NOW!
      </b-navbar-brand>

      <b-navbar-nav align="end" class="nav_menu">
        <router-link class="nav-link" to="/tours">Tours</router-link>
        <router-link class="nav-link mx-4" to="/users"
          >Mis Tours Favoritos</router-link
        >
        <div v-if="activeUser == undefined" class="d-inline">
          <LogInModal class="d-inline"/>
          <SignUpModal class="d-inline"/>
        </div>
        <b-button
          v-if="activeUser != undefined"
          variant="light"
          size="sm"
          class="my-2 my-sm-0"
          type="submit"
          >{{ activeUser.email }}</b-button
        >
        <b-button
          v-if="activeUser != undefined"
          variant="warning"
          size="sm"
          class="my-2 mx-2 my-sm-0"
          type="submit"
          @click.stop.prevent="logOutUser"
          to="/"
        >
          <img src="../assets/icons/door-closed.svg" alt="Cerrar sesión" />
        </b-button>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import LogInModal from "./auth/LogInModal.vue";
import SignUpModal from "./auth/SignUpModal.vue";

export default {
  name: "NavbarComp",
  computed: {
    ...mapGetters(["activeUser"]),
    logInSignUpComp(activeUser) {
      console.log(activeUser)
      if (activeUser != undefined) {
        return 'd-block';
      } else {
        return 'd-none';
      }
    },
  },
  methods: {
    ...mapActions(["logOutUser"]),
  },
  beforeMount() {
    this.activeUser
  },
  
  components: { LogInModal, SignUpModal },
};
</script>

<style scoped>
.nav_comp {
  height: 100px;
  background-color: black;
}
.saturn-icon {
  height: 70px;
  margin-right: 20px;
}
.nav_menu {
  width: 100vw;
  margin-right: 20px;
}

.hideContent {
  display: none;
}
</style>
