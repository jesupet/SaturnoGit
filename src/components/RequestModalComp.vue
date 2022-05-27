<template>
  <div>
    <b-button v-b-modal="'modal' + tourID">Solicitar información</b-button>

    <b-modal :id="'modal' + tourID" centered title="Solicitud de información">
      <p>A continuación ingrese lo que desea conocer del tour:</p>
      <h4>
        {{ tourName }}
      </h4>
      <b-form-input v-model="tourRequestDescription" placeholder="Ingresa tu solicitud"></b-form-input>
      <button
        @click.prevent="activateRequestTourInfo([userEmail, tourID, tourName, tourRequestDescription])"
      >
        Solicitar información
      </button>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    userEmail: String,
    tourID: String,
    tourName: String,
  },
  data() {
      return {
          tourRequestDescription: "",
      };
  },
  methods: {
    ...mapActions(["activateRequestTourInfo"]),
  },
};
</script>
