<template>
  <div>
    <b-button
      variant="warning"
      size="sm"
      class="nav_btn btn_yellow"
      type="submit"
      v-b-modal="'LogInModal'"
      >Ingresa</b-button
    >
    <b-modal 
      id="LogInModal" 
      ref="modal" 
      title="Ingresa a Sa-Tour-Now!"
      body-bg-variant="dark"
      body-text-variant="light"
      header-bg-variant="dark"
      header-text-variant="light" 
      hide-footer
      hide-header-close>
      <form ref="form">
        <b-form-group
          label="Usuario"
          label-for="Usuario-input"
          invalid-feedback="Se requiere un usuario válido"
        >
          <b-form-input
            type="email"
            class="form-control"
            id="LogInComponent_Username"
            aria-describedby="emailHelp"
            required
            @input="setUsername"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Contraseña"
          label-for="Password-input"
          invalid-feedback="Se requiere una contraseña"
        >
          <b-form-input
            type="password"
            class="form-control"
            id="LogInComponent_Password"
            @input="setPassword"
            required
          ></b-form-input>
        </b-form-group>
      </form>
      <div style="text-align: end; margin-top: 1rem">
        <b-button
          @click.prevent="
            logInUser();
            hideModal;
          "
          class="sign_btn"
          >Ingresar</b-button
        >
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "LogInModal",
  props: {
    id: String,
  },
  methods: {
    ...mapActions(["setUsername", "setPassword", "logInUser"]),
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs['LogInModal'].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
  },
  computed: {
    ...mapGetters(["getUsername", "getPassword"]),
  },
};
</script>

<style scoped>
.nav_btn {
  padding: 0.7em 1.2em;
  margin: 1em;
}
.btn_yellow:hover{
  background-color: white;
}
.btn_yellow:focus{
  outline: none;
  box-shadow: none;
}
.sign_btn {
  background-color: purple;
  border: 0px solid;
  color: white;
}
.sign_btn:hover {
  background-color: white;
  border: 1px solid purple;
  color: purple;
}
.sign_btn:focus {
  background-color: purple;
  border: 0px solid;
  color: #fff;
}

</style>
