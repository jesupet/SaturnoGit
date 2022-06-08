<template>
  <div>
    <b-button v-b-modal="'modal' + tourID" class="btn_rqst">
      <font-awesome-icon icon="fa-solid fa-circle-question" />
    </b-button>

    <b-modal
      :id="'modal' + tourID"
      centered
      title="Consultar información"
      v-model="show"
      body-bg-variant="dark"
      body-text-variant="light"
      header-bg-variant="dark"
      header-text-variant="light"
      footer-bg-variant="dark"
      footer-text-variant="light"
      hide-header-close  
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

<style scoped>
.btn_rqst {
  background-color: purple;
  border: 1px solid purple;
  color: white;
}
.btn_rqst:hover {
  background-color: white;
  border: 1px solid purple;
  color: purple;
}
.btn_rqst:focus {
  background-color: purple;
  border: 0px solid;
  border-radius: 0px;
  color: #fff;
}
</style>