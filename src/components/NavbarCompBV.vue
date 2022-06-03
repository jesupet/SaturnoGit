<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="nav_comp">
      <a class="navbar-brand">
        <img
          src="../assets/saturn_logo.svg"
          class="d-inline-block align-middle saturn-icon mx-3"
          alt="Kitten"
          fluid
        />
      </a>
      <b-navbar-brand class="mx-4" to="/">SA-TOUR-NOW!</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse class="navbar-nav m-0" id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/tours">Tours Disponibles</b-nav-item>
          <b-nav-item to="/users">Menú de Turistas</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
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
          <div v-if="activeUser == undefined" class="d-inline">
            <LogInModal class="d-inline" />
            <SignUpModal class="d-inline" />
          </div>
          <!--<b-nav-item-dropdown right>
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown> -->
        </b-navbar-nav>
      </b-collapse>
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
      console.log(activeUser);
      if (activeUser != undefined) {
        return "d-block";
      } else {
        return "d-none";
      }
    },
  },
  methods: {
    ...mapActions(["logOutUser"]),
  },
  beforeMount() {
    this.activeUser;
  },

  components: { LogInModal, SignUpModal },
};
</script>

<style scoped>
* {
  text-decoration: none;
  list-style: none;
  font-size: large;
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
#nav-collapse {
  justify-content: right;
}
</style>
