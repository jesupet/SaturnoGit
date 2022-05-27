<template>
  <div>
    <div class="mt-4">
      <h1 class="fw-bolder text-center py-2">Tours disponibles</h1>
      <b-card
        v-for="(tour, index) in listTours"
        :key="index"
        :img-src="tour.image_url"
        img-alt="Card image"
        img-left
        class="mb-3"
      >
        <b-card-text>
          <div class="align-middle py-3">
            <h2 class="fw-bolder" v-if="tour.available == true">
              {{ tour.name }}
            </h2>
            <h2 class="fw-bolder align-baseline" v-else>
              <button class="btn btn-danger align-top">NO DISPONIBLE</button>
              {{ tour.name }}
            </h2>
          </div>
          <h3 class="py-1">
            Valor: {{ "$" + tour.price_usd }} USD. (Por persona)
          </h3>
          <p class="fs-4 py-1">{{ tour.description }}</p>
          <p class="fs-4">
            Vacantes disponibles: {{ tour.vacancies - tour.enrrolled }} /
            Totales: {{ tour.vacancies }}
          </p>
          <button v-on:click.stop.prevent="addToFavourites(tour.id)">
            AGREGAR A FAVORITOS
          </button>
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ToursCard",
  props: {
    listTours: Array,
  },
  methods: {
    ...mapActions(["getUsers", "addToFavourites"]),
  },
};
</script>

<style scoped>
.card-img-left {
  max-width: 20%;
  height: auto;
}
</style>
