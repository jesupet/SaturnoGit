<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Tour</th>
          <th scope="col">Descripción</th>
          <th scope="col">Disponible</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tour, index) in getDataTable" :key="index">
          <p>{{ tour }}</p>
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ tour.name }}</td>
          <td>{{ tour.description }}</td>
          <td>{{ tour.available }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "ToursTable_BS5",
  computed: {
    ...mapState(["fields"]),
    ...mapGetters(["getDataTable"]),
  },
  methods: {
    ...mapGetters(["changeDataTable"]),
  },
};
</script>
