<template>
  <div>
    <b-button v-b-modal="'modal' + tourID">Solicitar información</b-button>

    <b-modal
      :id="'modal' + tourID"
      centered
      title="Consultar información"
      v-model="show"
    >
      <p>A continuación ingrese lo que desea conocer del tour:</p>
      <p class="fw-bolder">
        {{ tourName }}
      </p>
      <b-form-input
        v-model="tourRequestDescription"
        placeholder="Ingresa tu consulta"
      ></b-form-input>
      <template #modal-footer="{ cancel }">
        <b-button
          size="sm"
          variant="success"
          @click="
            show = false;
            activateRequestTourInfo([
              userEmail,
              tourID,
              tourName,
              tourRequestDescription,
            ]);
          "
        >
          Enviar solicitud
        </b-button>
        <b-button size="sm" variant="danger" @click="cancel()">
          Cancelar
        </b-button>
      </template>
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
      show: false,
    };
  },
  methods: {
    ...mapActions(["activateRequestTourInfo"]),
  },
};
</script>
