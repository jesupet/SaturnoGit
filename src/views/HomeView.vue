<template>
  <div>
    <WeatherModal :weatherData="getBaikonurData"/>
    <header class="header_container">
      <b-jumbotron
      class="hero_img" 
      header="¡Bienvenido a Sa-tour-now!" 
      lead="Encuentra toda la información sobre qué hacer en Saturno">
      <div class="text-center align-text-bottom arrow_icon">
        <a class="arrow_link" href="#tours_destacados"><font-awesome-icon icon="fa-solid fa-angles-down" size="4x"/></a>
      </div>
      </b-jumbotron>
    </header>
    <section class="main-section">
      <b-container id="tours_destacados">
        <h2 class="title">NUESTROS TOURS DESTACADOS</h2>
        <HomeTour :listTours="getHighlightedTours"/>
        <div class="text-center">
          <b-button class="btn_tours" to="/tours">Ver todos los tours</b-button>
        </div>
        
      </b-container>
    </section>
    <TypeForm/>
  </div>
</template>

<script>

import HomeTour from '../components/HomeTour.vue'
import TypeForm from '../components/TypeForm.vue'
import WeatherModal from '../components/WeatherModal.vue'
import { mapGetters} from "vuex";

export default {
  name: "HomeView",
  components: { TypeForm, HomeTour, WeatherModal},
  computed: {
    ...mapGetters(["getHighlightedTours", "getBaikonurData"])
  },
  methods: {
    showModal() {
        this.$refs['my-modal'].show()
      },
  },
  mounted(){
    this.showModal();
  },
};
</script>

<style scoped>
  .header_container {
   position: relative;
   z-index:0;
  }
  .hero_img{
    background-image: url("https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP.jpg");
    height: 115vh;
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    padding: 50px;
    padding-top: 300px;
    text-align: right;
    margin-top: -100px;
  }
  .arrow_icon {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left:0;
    right:0;
    margin-bottom: 40px;
  }
  .arrow_link {
    color: white;
  }
  .title {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  #tours_destacados {
    padding-bottom: 50px;
  }
  .btn_tours {
    background-color: #2f0094;
    border: 0px transparent;
    border-radius: 12px;
    padding: 10px 20px;
    font-size: 20px
  }
  .btn_tours:hover {
    background-color: white;
    color: #2f0094;
  }

  
</style>