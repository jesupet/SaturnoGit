<template>
  <div
    class="modal fade"
    :id="'modal' + idKey"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Ingrese su opinión para: {{ place }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Nombre:</label
            >
            <input
              type="Name"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Escriba aquí su nombre"
              :value="newAuthor"
              @input="updateNewAuthor"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >Opinión:</label
            >
            <textarea
              placeholder="Escriba aquí su opinión"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="4"
              :value="newDescription"
              @input="updateNewDescription"
            ></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancelar
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="addOpinion(index, newAuthor, newDescription)"
          >
            Enviar opinión
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {
    place: String,
    idKey: String,
    index: Number,
  },
  computed: {
    ...mapState(["newAuthor", "newDescription"]),
    newAuthor() {
      return this.$store.state.newAuthor;
    },
    newDescription() {
      return this.$store.state.newDescription;
    },
  },
  methods: {
    ...mapActions(["addOpinion", "addNewAuthor", "addNewDescription"]),
    updateNewAuthor(e) {
      this.$store.commit("updateNewAuthor", e.target.value);
    },
    updateNewDescription(e) {
      this.$store.commit("updateNewDescription", e.target.value);
    },
  },
};
</script>
