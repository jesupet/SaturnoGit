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
          :variant="getAlertData.variant"
          :show="dismissCountDown"
          
          fade
          @dismiss-count-down="countDownChanged"
        >
          {{getAlertData.message}}
        </b-alert>
        <button @click.prevent="activateNewsletterSub(subscriberEmail)" @click="showAlert">
          <font-awesome-icon icon="fa-solid fa-arrow-right" size="3x" inverse/>
        </button>
        
       
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TypeForm",
  data() {
    return {
      subscriberEmail: undefined,
      dismissSecs: 5,
      dismissCountDown: 0,
    };
  },
  computed: {
    ...mapGetters(["getAlertData"])
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
  background-image: url("https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP.jpg");
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
