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
        <HomeTour :listTours="listTours"/>
      </b-container>
    </section>
    <TypeForm/>
  </div>
</template>

<script>

import HomeTour from '../components/HomeTour.vue'
import TypeForm from '../components/TypeForm.vue'
import { mapState } from "vuex";

export default {
  name: "HomeView",
  components: { TypeForm, HomeTour},
  computed: {
    ...mapState(["listTours"]),
  },
};
</script>

<style scoped>
  .hero_img{
    background-image: url("https://images.ecestaticos.com/bUmnlV7Zm7hheKoEvD_D5ZoLwAg=/0x0:1279x719/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F7b5%2F824%2F4a9%2F7b58244a9a7fa4e9cbb192d166aa1463.jpg");
    height: 60vh;
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    padding: 50px;
    text-align: right;
  }
  
  
</style>