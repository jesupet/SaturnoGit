<template>
  <div class="col-12 row pb-4 m-0">
    <!--MODAL PARA SUGERIR LOGIN Y SIGNUP SI EL USUARIO NO ESTÁ LOGUEADO-->
    <b-modal v-model="modalShow">
      <LogInModal />
      <SignUpModal />
    </b-modal>
    <!--FIN MODAL-->
    <div class="col-md-4 p-2" v-for="(tour, index) in listTours" :key="index">
      <div class="card mx-4 my-2" style="height: 80vh">
        <div class="img_container_1">
          <img
            class="card-img-top img-height img-responsive tour_img_2"
            alt="Imagen"
            v-bind:src="tour.image_url"
          />
          <button
            @click.stop.prevent="
              checkLoggedUser([activeUser, activeUser.email, tour.id])
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
            <p style="color: red">No disponible</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Valor: {{ "$" + tour.price_usd }} USD. (Por persona)
            </li>
            <li class="list-group-item">
              Duración: {{ tour.duration_hrs }} horas
            </li>
            <li class="list-group-item">
              Vacantes disponibles: {{ tour.vacancies - tour.enrrolled }} /
              Totales: {{ tour.vacancies }}
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
import LogInModal from "./auth/LogInModal.vue";
import SignUpModal from "./auth/SignUpModal.vue";

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
    LogInModal,
    SignUpModal,
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
      //activateAddToFavourites([activeUser.email, tour.id])
    ]),
    checkLoggedUser(data1) {
      console.log(data1);
      let [userStatus, userEmail, TourID] = data1;
      console.log({ userStatus });
      console.log({ userEmail });
      console.log({ TourID });
      if (userStatus == false) {
        this.modalShow = !this.modalShow;
      } else {
        this.activateAddToFavourites([userEmail, TourID]);
      }
    },
    
  },
  computed: {
    ...mapGetters(["activeUser"]),
    activeUserNow() {
      console.log(this.activeUser);
      return this.activeUser;
    },
  },
  beforeMount() {
    this.activeUser;
  },
  mounted() {
    this.activeUserNow;
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
.img_container_1 {
  height: 20em;
  position: relative;
  z-index: 1;
}
.card-title {
  color: #000;
}
.tour_img_2 {
  position: absolute;
  z-index: 2;
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
</style>
