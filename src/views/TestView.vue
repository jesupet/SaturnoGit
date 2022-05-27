<template>
  <div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "UserView",
  methods: {
    ...mapActions([
      "activateRemoveFromFavourites",
      "activateAddToFavourites_2",
      "activateRemoveFromFavourites_2",
    ]),
  },
  computed: {
    ...mapGetters(["activeUser", "getListTours"]),
    ...mapActions(["getUsers"]),
    /*userInfo: function () {
      retunr this.tours.favourite_by.filter(i => i.email == 'userEmal')
    }*/
    classObject() {
      return {
        displayTour: this.userEmail == this.activeUser.email,
        //noDisplay: this.userEmail != this.activeUser.email,
      };
    },
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
