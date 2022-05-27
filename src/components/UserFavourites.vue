<template>
  <div>
    <div v-for="(tour, index) in getListTours" :key="index">
      <div v-for="(tourID, index) in getFavouritesByUser" :key="index">
        <div v-if="tour.id == tourID" class="col-11 d-flex mx-5 my-4">
          <h2 class="col-3">{{ tour.name }}</h2>
          <SidebarComp :tourData="tour" class="col-3" />
          <RequestModalComp
            :userEmail="activeUser.email"
            :tourID="tour.id"
            :tourName="tour.name"
            class="col-3"
          />
          <button
            @click.prevent="
              activateRemoveFromFavourites([activeUser.email, tour.id])
            "
            class="col-3"
          >
            Remover
          </button>
        </div>
        <div v-else :style="(display = 'none')"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SidebarComp from "./SidebarComp.vue";
import RequestModalComp from "./RequestModalComp.vue";

export default {
  name: "UserView",
  methods: {
    ...mapActions(["activateRemoveFromFavourites", "activateRequestTourInfo"]),
  },
  computed: {
    ...mapGetters(["activeUser", "getListTours", "getFavouritesByUser"]),
  },
  beforeMount() {
    this.getListTours;
  },
  components: { SidebarComp, RequestModalComp },
};
</script>

<style>
.container {
  width: 95%;
}

.displayTour {
  display: auto;
  background-color: blueviolet;
}

.noDisplay {
  display: none;
}

.hideButton {
  display: none;
}

.showButton {
  display: block;
}
</style>
