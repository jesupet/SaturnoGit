<template>
  <div>
    <div class="card-container">
      <h1 class="title">TOURS SA-TOUR-NOW</h1>
      <!-- <div v-for="(tour, index) in getListTours" :key="index">{{ tour }}</div> -->
      <ToursCard :listTours="listTours" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ToursCard from "@/components/ToursCard.vue";

export default {
  name: "ToursView",
  components: { ToursCard },
  computed: {
    ...mapState(["listTours"]),
  },
};
</script>

<style scoped>
.card-container {
  background: url(../assets/img/bg_img.jpeg);
  margin: 0%;
  padding: 10px;
  min-height: calc(100vh - 10vh);
}
.title {
  padding-top: 100px;
}
</style>
