<template>
  <div>
    <div class="row py-5 tour_container" v-for="(tour, index) in listTours" :key="index">
      <div class="col-lg-4">
        <div class="img_container">
          <img :src="tour.image_url" alt="" class="tour_img">
        </div>
      </div>
      <div class="col-lg-8">
        <h2>{{ tour.name }}</h2>
        <p> {{ tour.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeTour',
  props: {
    listTours: Array,
  },
  
}
</script>


<style>
  * {
    color: white;
    font-family: 'Rubik';
  }
  .tour_container {
    align-items: center;
  }
  .img_container {
    width: 300px;
    height: 300px;
    margin-bottom: 20px;
   
  }
  .tour_img {
    border-radius: 50%;
   width: 100%;
    height: 100%;
  }
</style>