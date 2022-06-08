<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="nav_comp fixed-top">
      <a class="navbar-brand">
        <img
          src="../assets/saturn_logo.svg"
          class="d-inline-block align-middle saturn-icon mx-3"
          alt="Kitten"
          fluid
        />
      </a>
      <b-navbar-brand class="mx-4" to="/">SA-TOUR-NOW!</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" class="toggle_menu m-3"></b-navbar-toggle>

      <b-collapse class="navbar-nav m-0" id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/tours">Tours Disponibles</b-nav-item>
          <b-nav-item to="/users">Menú de Turistas</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-button
            v-if="activeUser != false"
            variant="light"
            size="sm"
            class="my-2 my-sm-0"
            type="submit"
            disabled
            >{{ activeUser.email }}</b-button
          >
          <b-button
            v-if="activeUser != false"
            variant="warning"
            size="sm"
            class="my-2 mx-2 my-sm-0"
            type="submit"
            @click.stop.prevent="logOutUser"
            to="/"
          >
            <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
          </b-button>
          <div v-if="activeUser == false" class="d-inline">
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
      if (activeUser != false) {
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
  background-color: rgba(0, 0, 0, 60%);
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
.show{
  background-color: black;
  padding-bottom: 20px;
  color: white;
}
.btn.disabled {
  opacity: 100%;
}
</style>
