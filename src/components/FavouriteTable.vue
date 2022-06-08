<template>
  <div>
    <div class="main-section px-5 table-responsive">
      <h1 class="title">Tus tours favoritos</h1>
      <table class="table">
        <thead style="color: white">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col" class="hide_sm">Disponibilidad</th>
            <th scope="col" class="hide_sm">Vacantes</th>
            <th scope="col" class="hide_sm">Duración</th>
            <th colspan="3" scope="colgroup">Acciones</th>
          </tr>
        </thead>
        <tbody
          v-for="(tour, index) in getFavouritesByUser"
          :key="index"
          style="color: white"
        >
          <b-sidebar :id="'sidebar'+tour.id" :title="tour.name" shadow right width="35%" bg-variant="dark" text-variant="light">
            <div class="px-3 py-2">
              <p>
                {{tour.description}}
              </p>
              <b-img
                :src="tour.image_url"
                fluid
                thumbnail
              ></b-img>
            </div>
          </b-sidebar>
          <tr>
            <th scope="row">
              {{ parseInt(index) + 1 }}
            </th>
            <td v-b-toggle="'sidebar'+tour.id">
              {{ tour.name }}
            </td>

            <td class="hide_sm">
              {{ tour.available ? "Si" : "No" }}
            </td>
            <td class="hide_sm">{{ tour.vacancies }}</td>
            <td class="hide_sm">
              {{ formatNumber(tour.duration_hrs)}} horas
            </td>
            
            <td class="td_btn">
              <SidebarComp :tourData="tour" class="col-3" />
            </td>
            <td class="td_btn">
              <RequestModalComp
                :userEmail="activeUser.email"
                :tourID="tour.id"
                :tourName="tour.name"
              />
            </td>
            <td class="td_btn">
              <b-button
                @click.prevent="
                  activateRemoveFromFavourites([activeUser.email, tour.id])
                "
                class="btn_delete"
              >
                <font-awesome-icon icon="fa-solid fa-trash" />
              </b-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SidebarComp from "./SidebarComp.vue";
import RequestModalComp from "./modals/RequestModalComp.vue";


export default {
  name: "FavouriteTable",
  components: {SidebarComp, RequestModalComp },
  methods: {
    ...mapActions(["activateRemoveFromFavourites", "activateRequestTourInfo"]),
    formatNumber(number){
      return parseInt(number).toLocaleString("es-CL")
    }
  },
  computed: {
    ...mapGetters(["activeUser", "getListTours", "getFavouritesByUser", "getUsername"]),
    /*userInfo: function () {
      retunr this.tours.favourite_by.filter(i => i.email == 'userEmal')
    }*/
  },
  beforeMount() {
    this.getListTours;
  },
};
</script>

<style scoped lang="scss">
.main-section {
  margin-bottom: 0px;
  padding-top: 100px;
  padding-bottom: 150px;
  background: url(../assets/img/bg_img.jpeg);
  margin: 0%;
  min-height: calc(100vh - 10vh);
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
.btn_delete {
  background-color: purple;
  border: 1px solid purple;
  color: white;
}
.btn_delete:hover {
  background-color: white;
  border: 1px solid purple;
  color: purple;
}
.btn_delete:focus {
  background-color: purple;
  border: 0px solid;
  border-radius: 0px;
  color: #fff;
}
.td_btn {
  padding-right: 0;
  padding-left: 0;
}
 @media screen and (max-width: 1000px) {
   .hide_sm {
     display: none;
   }
 }
</style>
