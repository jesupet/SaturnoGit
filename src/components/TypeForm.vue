<template>
  <div>
    <div class="text-center align-items-center input_section">
      <h2 class="title pt-0">¿Te gustaría recibir nuestro newsletter?</h2>
      <form class="input-group-lg d-flex justify-content-center">
        <input
          v-model="subscriberEmail"
          type="text"
          class="form-control email_input"
          placeholder="Ingresa tu correo"
          aria-label="correo del usuario"
          aria-describedby="button-addon2"
          required
        />
        <button @click.prevent="activateNewsletterSub(subscriberEmail)"><font-awesome-icon icon="fa-solid fa-arrow-right" size="3x" inverse/></button>
        <!--<input
          type="submit"
          value="Suscribirme"
          class="mx-2"
          @click.prevent="activateNewsletterSub(subscriberEmail)"
        />-->
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TypeForm",
  data() {
    return {
      subscriberEmail: undefined,
    };
  },
  methods: {
    ...mapActions(["activateNewsletterSub",]),
  },
};
</script>

<style scoped>
.input_section {
  background-image: url("https://images.ecestaticos.com/bUmnlV7Zm7hheKoEvD_D5ZoLwAg=/0x0:1279x719/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F7b5%2F824%2F4a9%2F7b58244a9a7fa4e9cbb192d166aa1463.jpg");
  background-position: center;
  padding-top: 60px;
  padding-bottom: 60px;
}

.email_input {
  width: 40vw;
}
button {
  border: 0px;
  background-color: transparent;
  margin-left: 10px;
}
</style>
