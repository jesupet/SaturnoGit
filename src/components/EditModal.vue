<template>
  <div>
    <b-modal id="modal-2" title="Editando Tour" ref="my-modal" hide-footer>
      <b-form v-if="show">
        <b-form-group id="input-group-1" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.name"
            placeholder="Nombre"
            required
          >{{form.name}}</b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.image_url"
            placeholder="URL de la imagen del tour"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Cupos del tour"
          label-for="input-3"
        >
          <b-form-spinbutton
            id="sb-1"
            v-model="form.vacancies"
            min="1"
            max="100"
          ></b-form-spinbutton>
        </b-form-group>
        <b-form-group
          id="input-group-4"
          label="Inscritos del tour"
          label-for="input-4"
        >
          <b-form-spinbutton
            id="sb-2"
            v-model="form.enrrolled"
            min="1"
            max="100"
          ></b-form-spinbutton>
        </b-form-group>
        <b-form-group
          id="input-group-5"
          label="Duración del tour (hrs)"
          label-for="input-5"
        >
          <b-form-spinbutton
            id="sb-3"
            v-model="form.duration_hrs"
            min="1"
            max="100"
          ></b-form-spinbutton>
        </b-form-group>
        <b-form-group
          id="input-group-6"
          label="Costo del tour (usd)"
          label-for="input-6"
        >
          <b-form-spinbutton
            id="sb-4"
            v-model="form.price_usd"
            min="1"
            max="100"
          ></b-form-spinbutton>
        </b-form-group>
        <b-form-group id="input-group-8" label-for="input-8">
          <b-form-textarea
            id="textarea"
            v-model="form.description"
            placeholder="Escribe una descripción del tour"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
       <b-button-group>
        <b-button variant="success" v-on:click.stop.prevent="addTour(); hideModal()">Guardar</b-button>
        <b-button variant="danger" v-on:click="cleanForm()">Limpiar Formulario</b-button>
      </b-button-group>
    </b-modal>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "EditModal",
  components: {
  },
  computed: {
    ...mapState(["form", "show"]),
    ...mapGetters(["getForm"]),
  },
  methods: {
    ...mapActions(["addTour", "cleanForm"]),
    hideModal() {
        this.$refs['my-modal'].hide()
    },
    
  },
  }
</script>