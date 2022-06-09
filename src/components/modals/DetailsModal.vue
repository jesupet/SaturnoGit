<template>
  <div>
    <b-button v-b-modal="'modalDetails' + idKey" class="seemore_btn purple_btn"
      >Ver más</b-button
    >

    <b-modal 
      :id="'modalDetails' + idKey" 
      v-model="show"
      body-bg-variant="dark"
      body-text-variant="light"
      header-bg-variant="dark"
      header-text-variant="light"
      hide-footer
      >
      <template #modal-header>
        {{tour.name}}
        <button class="close_btn" @click="$bvModal.hide('modalDetails' + idKey)">
          <font-awesome-icon cancel icon="fa-solid fa-xmark" class="ml-0 mr-auto"/>
        </button>
      </template>
      <b-img :src="tour.image_url" fluid alt="Responsive image"></b-img>
      <p class="my-4">{{ tour.description }}</p>
      <template #modal-footer>
        <div class="w-100">
          <b-button
            variant="primary"
            size="sm"
            class="float-right"
            @click="show = false"
          >
            Cerrar
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "DetailsModal",
  data() {
    return {
      show: false,
    };
  },
  props: {
    idKey: String,
    tour: Object,
  },
};
</script>

<style scoped>
.seemore_btn {
  background-color: purple;
  border: 0px solid;
  border-radius: 0px;
  width: 100%;
}
.seemore_btn:hover {
  background-color: white;
  border: 1px solid purple;
  color: purple;
}
.seemore_btn:focus {
  background-color: purple;
  border: 0px solid;
  border-radius: 0px;
  color: #fff;
}
.close_btn {
  background: none;
  border: 0;
  color: white;
}
</style>
