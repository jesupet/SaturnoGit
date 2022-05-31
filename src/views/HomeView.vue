<template>
  <div>
    <header>
      <b-jumbotron
      class="hero_img" 
      header="¡Bienvenido a Sa-tour-now!" 
      lead="Encuentra toda la información sobre qué hacer en Saturno">
      </b-jumbotron>
    </header>
    <section class="main-section">
      <b-container>
        <h2 class="title">NUESTROS TOURS DESTACADOS</h2>
        <HomeTour :listTours="getHighlightedTours"/>
      </b-container>
    </section>
    <TypeForm/>
  </div>
</template>

<script>

import HomeTour from '../components/HomeTour.vue'
import TypeForm from '../components/TypeForm.vue'
import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  components: { TypeForm, HomeTour},
  computed: {
    ...mapGetters(["getHighlightedTours"])
  },
};
</script>

<style scoped>
  .hero_img{
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Saturn_from_Cassini_Orbiter_%282004-10-06%29.jpg/2560px-Saturn_from_Cassini_Orbiter_%282004-10-06%29.jpg");
    height: 60vh;
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    padding: 50px;
    text-align: right;
    vertical-align:top;
  }
  
  
</style>