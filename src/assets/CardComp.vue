<template>
  <div class="col-12 row">
    <div class="col-md-4 p-2" v-for="(place, index) in places" :key="index">
      <div class="card card-container">
        <div class="img_container">
          <img
            class="card-img-top img-height img-responsive"
            alt="Imagen"
            v-bind:src="place.img"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ place.name }}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{{ place.region }}</li>
          <li class="list-group-item">
            Trip-Score: {{ place.tripadvisor }} / 10
          </li>
        </ul>
        <div class="card-body">
          <button
            class="btn btn-primary"
            data-bs-toggle="modal"
            :data-bs-target="'#modal'+place.code"
          >
            Opinar
          </button>
          <ModalComp :idKey="place.code" :place="place.name" :index="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import ModalComp from "./ModalComp.vue";

export default {
  name: "CardComp",
  components: {
    ModalComp,
  },
  computed: {
    ...mapState(["places"]),
    ...mapGetters(["getPlaceName"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.img-height {
  max-height: 12em;
  max-width: 100%;
  height: 100%;
  overflow: hidden;
}
.img_container {
  height: 12em;
}

</style>
