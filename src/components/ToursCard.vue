<template>
  <div class="col-12 row pb-4 m-0">
    <div class="col-md-4 p-2" v-for="(tour, index) in listTours" :key="index">
      <div class="card mx-4 my-2 card_container">
        <div class="availability" v-if="tour.available == false">
          <p class="my-3">
            No disponible
          </p> 
        </div>
        <div class="img_container_1">
          <img
            class="card-img-top img-height img-fluid"
            alt="Imagen"
            v-bind:src="tour.image_url"
          />
          <button v-if="activeUser != undefined"
            @click.stop.prevent="
              activateAddToFavourites([activeUser.email, tour.id])
            "
            @click="showAlert"
            class="fav_btn"
            type="button"
          >
            <font-awesome-icon icon="fa-solid fa-heart" size="2x" />
          </button>
          <b-alert
          
          class="position-fixed fixed-top m-0 rounded-0"
          style="z-index: 2000;"
          variant="info"
          :show="dismissCountDown"
          
          fade
          @dismiss-count-down="countDownChanged"
        >
          El tour ha sido agregado a tu favoritos. Para ver la lista completa haz <router-link to="/users" class="alert-link">click aquí</router-link>
        </b-alert>
        </div>
        <div class="card-body">
          <h5 class="card-title" v-if="tour.available == true">
            {{ tour.name }}
          </h5>
          <div v-else>
            <h5 class="card-title">
              {{ tour.name }}
            </h5>
          </div>
          <hr style="color: white">
          <ul class="list-group">
            <li class="list-group-item">
              <span style="color: rgb(238, 0, 238)">Valor:</span> {{ "$" + tour.price_usd }} USD. (Por persona)
            </li>
            <li class="list-group-item">
             <span style="color: rgb(238, 0, 238)">Duración:</span> {{ tour.duration_hrs }} horas
            </li>
            <li class="list-group-item">
              <span style="color: rgb(238, 0, 238)">Vacantes disponibles:</span> {{ tour.vacancies - tour.enrrolled }} / {{ tour.vacancies }}
            </li>
          </ul>
        </div>
        <DetailsModal
          class="btn btn-primary seemore_btn p-0"
          :idKey="tour.id"
          :tour="tour"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DetailsModal from "../components/DetailsModal.vue";

export default {
  name: "ToursCard",
  data() {
    return {
      dismissSecs: 5,
      dismissCountDown: 0,
    }
  },
  props: {
    listTours: Array,
  },
  components: {
    DetailsModal,
  },
  methods: {
    countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      },
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
.availability {
  position: absolute;
  z-index: 10;
  color: white;
  text-align: center;
  background-color: rgb(165, 0, 0);
  border: #fff dashed 1px;
  width:120%;
  top: 130px;
  left: -50px;
  transform: rotate(-30deg)
}
.img_container_1 {
  height: 60%;
  overflow: hidden;
}
.img-height {
  min-height: 100%;
}
.fav_btn {
  position: absolute;
  z-index: 3;
  right: 15px;
  top: 15px;
  border: 0px transparent;
  background: transparent;
  color: white;
}
path:hover {
  color: purple;
}
path:focus {
  color: purple;
}
path:active {
  color: purple;
}
.seemore_btn {
  background-color: purple;
  border: 0px solid;
  border-radius: 0px;
}
.seemore_btn:hover {
  background-color: white;
  border: 1px solid purple;
  color: purple;
}
.seemore_btn:focus {
  background-color: purple;
  border: 0px solid;
  border-radius: 0px;
  color: #fff;
}
.toast:not(.show) {
   display: block;
}
.card_container {
  height: 80vh;
  position: relative;
  z-index:0;
}
.list-group-item, .card_container {
  background-color: #000;
  color: #fff;
}
.card-title {
  font-size: 25px;
  text-align: center;
  padding: 10px 0px;
}

</style>
