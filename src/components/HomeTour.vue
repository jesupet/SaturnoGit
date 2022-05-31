<template>
  <div>
    <div class="row py-5 tour_container" v-for="(tour, index) in listTours" :key="index">
      <div class="col-lg-4">
        <div class="img_container">
          <img :src="tour.image_url" alt="" class="tour_img">
        </div>
      </div>
      <div class="col-lg-8 desc_container">
        <h2>{{ tour.name }}</h2>
        <p class="m-0"> {{ tour.description }}</p>
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


<style scoped>
  * {
    color: white;
    font-family: 'Rubik';
  }
  .tour_container {
    align-items: center;
    padding-left: 60px;
    padding-right: 60px;
    position: relative;
    z-index: 1;
    justify-content: center;
  }
  .img_container {
    width: 500px;
    height: 500px;
    margin-bottom: 20px;
    justify-content: center;
  }
  .tour_img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
    margin:0 auto;
    @media screen and (max-width: 1000px) {
      overflow: hidden;
      z-index: 0;
    }
  }
  .desc_container {
    background-color: rgba(0, 0, 0, 50%);
    padding: 15px;
    border-radius: 20px;
    border: thin solid #fff;
    position: relative;
    z-index:3;
    justify-content: center;
  }
  @media screen and (max-width: 1000px) {
      .img_container{
        width: 60vw;
        height: 60vw;
        margin-right: 0px;
        margin-left: 0px;
        display: flex;
        justify-content: center;
      }
    }
</style>