<template>
  <div>
    <nav class="navbar navbar-expand-lg nav_comp navbar-dark">
      <div class="container-fluid my-0">
        <router-link class="navbar-brand" to="/">
          <img
            src="../assets/saturn_logo.svg"
            class="d-inline-block align-middle saturn-icon"
            alt="Kitten"
            fluid
          />
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
        </button>
        <div class="nav_menu collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav m-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/tours">Tours</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link mx-4" to="/users">Mis Tours Favoritos</router-link>
            </li>
            <li class="nav-item">
              <b-button
                v-if="activeUser != undefined"
                variant="light"
                size="sm"
                class="my-2 my-sm-0"
                type="submit"
                >{{ activeUser.email }}</b-button
              >
            <li class="nav-item">
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
            </li>
          </ul>
        </div>
        <div v-if="activeUser == undefined" class="d-inline">
              <LogInModal class="d-inline"/>
              <SignUpModal class="d-inline"/>
        </div>
      </div>
      
    </nav>
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
*{
  text-decoration: none;
  list-style: none;
}
.nav_comp {
  height: 100px;
  background-color: black;
  flex-wrap: wrap;
  
}
.saturn-icon {
  height: 70px;
  width: 100%;
  max-width: 100%;
}
.nav_menu {
  flex-grow: unset;
}

.hideContent {
  display: none;
}
</style>
