<template>
  <div>
    <div class="main-section px-5 table-responsive">
      <div v-for="(users, index) in getUsersTours" :key="index">
        <div v-if="activeUser.email == users.user_email">
          <h1 style="color: white">
            Bienvenido: {{ users.userFirstName }} {{ users.userLastName }}
          </h1>
        </div>
      </div>
      <h2 class="title">Tus tours favoritos</h2>
      <table class="table">
        <thead style="color: white">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Disponibilidad</th>
            <th scope="col">Vacantes</th>
            <th scope="col">Duración</th>
          </tr>
        </thead>
        <tbody
          v-for="(tours, index) in getListTours"
          :key="index"
          style="color: white"
        >
          <b-sidebar :id="'sidebar'+tours.id" :title="tours.name" shadow right width="35%" bg-variant="dark" text-variant="light">
            <div class="px-3 py-2">
              <p>
                {{tours.description}}
              </p>
              <b-img
                :src="tours.image_url"
                fluid
                thumbnail
              ></b-img>
            </div>
          </b-sidebar>
          <tr v-for="(userEmail, i) in tours.favourited_by" :key="i">
            <th v-if="userEmail == activeUser.email" scope="row">
              {{ parseInt(index) + 1 }}
            </th>
            <td v-if="userEmail == activeUser.email" v-b-toggle="'sidebar'+tours.id">
              {{ tours.name }}
            </td>

            <td v-if="userEmail == activeUser.email">
              {{ tours.available ? "Si" : "No" }}
            </td>
            <td v-if="userEmail == activeUser.email">{{ tours.vacancies }}</td>
            <td v-if="userEmail == activeUser.email">
              {{ tours.duration_hrs }} horas
            </td>
            <td v-if="userEmail == activeUser.email">
              <DeleteButton
                :btnName="'Remover'"
                :purpose="activateRemoveFromFavourites"
                :params="[activeUser.email, tours.id]"
              />
            </td>
            <td v-if="userEmail == activeUser.email">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                :data-bs-target="'#modalDetails' + tours.id"
              >
                Ver detalles
              </button>
              <DetailsModal
                :idKey="tours.id"
                :name="tours.name"
                :index="index"
                :description="tours.description"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DeleteButton from "./buttons/DeleteButton.vue";
import DetailsModal from "./DetailsModal.vue";

export default {
  name: "UserView",
  components: { DeleteButton, DetailsModal },
  methods: {
    ...mapActions(["activateRemoveFromFavourites"]),
  },
  computed: {
    ...mapGetters(["activeUser", "getListTours", "getUsersTours"]),
    ...mapActions(["getUsers"]),
    /*userInfo: function () {
      retunr this.tours.favourite_by.filter(i => i.email == 'userEmal')
    }*/
  },
  beforeMount() {
    this.getUsers;
    this.getUsersTours;
  },
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
</style>
