<template>
  <div class="col-12 row pb-4">
    <div class="col-md-4 p-2" v-for="(tour, index) in listTours" :key="index">
      <div class="card" style="height: 80vh">
        <div class="img_container">
          <img
            class="card-img-top img-height img-responsive"
            alt="Imagen"
            v-bind:src="tour.image_url"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title" v-if="tour.available == true">
            {{ tour.name }}
          </h5>
          <div v-else>
            <h5 class="card-title">
              {{ tour.name }}
            </h5>
            <p style="color: red">No disponible</p>
          </div>
          <button
            @click.stop.prevent="
              activateAddToFavourites([activeUser.email, tour.id])
            "
          >
            AGREGAR A FAVORITOS
          </button>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            Valor: {{ "$" + tour.price_usd }} USD. (Por persona)
          </li>
          <li class="list-group-item">
            Vacantes disponibles: {{ tour.vacancies - tour.enrrolled }} /
            Totales: {{ tour.vacancies }}
          </li>
        </ul>
        <div class="card-body">
          <button
            class="btn btn-primary"
            data-bs-toggle="modal"
            :data-bs-target="'#modal' + tour.id"
            @click.stop.prevent="probando()"
          >
            Ver más
          </button>
          <DetailsModal
            :idKey="tour.id"
            :name="tour.name"
            :index="index"
            :description="tour.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DetailsModal from "../components/DetailsModal.vue";

export default {
  name: "ToursCard",
  props: {
    listTours: Array,
  },
  components: {
    DetailsModal,
  },
  methods: {
    ...mapActions([
      "getUsers",
      "activateAddToFavourites",
      "activateAddToFavourites_2",
      "activateRemoveFromFavourites",
    ]),
    probando() {
      console.log("apretaste el botón");
    },
  },
  computed: {
    ...mapGetters(["activeUser"]),
  },
};
</script>

<style scoped lang="scss">
.img-height {
  max-height: 20em;
  max-width: 100%;
  height: 100%;
  overflow: hidden;
}
.img_container {
  height: 20em;
}
</style>
