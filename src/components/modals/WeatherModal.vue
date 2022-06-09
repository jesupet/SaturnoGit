<template>
  <div>
    <b-modal 
      id="modal-center" 
      centered 
      ref="my-modal" 
      body-bg-variant="dark"
      body-text-variant="light"
      header-bg-variant="dark"
      header-text-variant="light"
      hide-footer
      >
      <template #modal-header>
        Meteorología // Cosmódromo de Baikonur
        <button class="close_btn" @click="$bvModal.hide('modal-center')">
          <font-awesome-icon cancel icon="fa-solid fa-xmark" class="ml-0 mr-auto"/>
        </button>
      </template>
      <p class="my-4"><font-awesome-icon size="2x" icon="fa-solid fa-temperature-half" class="mx-3"/>La temperatura actual es: {{weatherData.temperature}}</p>
      <p class="my-4"><font-awesome-icon size="2x" icon="fa-solid fa-wind" class="mx-3" />Los vientos llegan hasta los: {{weatherData.wind}}</p> 
      <p class="my-4"><font-awesome-icon size="2x" icon="fa-solid fa-plane-departure" class="mx-3" />Condiciones para viajar a Saturno: Óptimas</p>   
    </b-modal>
  </div>
</template>

<script>

export default {
  name: "WeatherModal",
  props: ['weatherData'],
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
 .close_btn {
    background: none;
    border: 0;
    color: white;
  }
</style>
