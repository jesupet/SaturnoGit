<template>
  <div>
    <b-button
      variant="light"
      size="sm"
      class="my-2 my-sm-0 px-3 py-2"
      type="submit"
      v-b-modal="'LogInModal'"
      >Ingresa</b-button
    >
    <b-modal id="LogInModal" ref="modal" title="Ingresa a Sa-Tour-Now!" hide-footer>
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
          variant="outline-primary"
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

<style scoped></style>
