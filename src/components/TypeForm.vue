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
        <b-alert
          
          class="position-fixed fixed-top m-0 rounded-0"
          style="z-index: 2000;"
          variant="success"
          :show="dismissCountDown"
          
          fade
          @dismiss-count-down="countDownChanged"
        >
          Correo registrado exitosamente!
        </b-alert>
        <button @click.prevent="activateNewsletterSub(subscriberEmail)" @click="showAlert">
          <font-awesome-icon icon="fa-solid fa-arrow-right" size="3x" inverse/>
        </button>
        
       
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
      dismissSecs: 5,
      dismissCountDown: 0,
    };
  },
  methods: {
    ...mapActions(["activateNewsletterSub",]),
    countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      }
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
