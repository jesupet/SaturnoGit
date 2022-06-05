<template>
  <div>
    <b-modal 
      id="modal-center" 
      centered 
      title="Datos meterológicos de Saturno hoy" 
      ref="my-modal" 
      body-bg-variant="dark"
      body-text-variant="light"
      header-bg-variant="dark"
      header-text-variant="light"
      hide-header-close
      hide-footer
      >
      <p class="my-4"><font-awesome-icon size="2x" icon="fa-solid fa-temperature-half" class="mx-3"/>La temperatura actual en Saturno es: {{weatherData.temperature}}</p>
      <p class="my-4"><font-awesome-icon size="2x" icon="fa-solid fa-wind" class="mx-3" />Los vientos llegan hasta los: {{weatherData.wind}}</p>    
    </b-modal>
  </div>
</template>

<script>

export default {
  name: "WeatherModal",
  props: {
    weatherData: Array
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
 
</style>