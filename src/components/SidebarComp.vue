<template>
  <div>
    <b-button v-b-toggle="'sidebar' + tourData.id">Ver detalles</b-button>
    <b-sidebar :id="'sidebar' + tourData.id" :title="tourData.name" shadow right width="30%">
      <div class="px-3 py-2">
        <p>
          {{ tourData.description }}
        </p>
        <b-img :src="tourData.image_url" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  props: {
    tourData: Object,
  },
};
</script>
