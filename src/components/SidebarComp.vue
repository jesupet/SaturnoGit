<template>
  <div>
    <b-button v-b-toggle="'sidebar' + tourData.id" class="btn_info">
      <font-awesome-icon icon="fa-solid fa-eye" />
    </b-button>
    <b-sidebar 
      :id="'sidebar' + tourData.id" 
      :title="tourData.name" 
      shadow 
      right
      class="sidebar" 
      bg-variant="dark" 
      text-variant="light"
      no-header-close
      backdrop="true"
      >
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

<style scoped>
  .btn_info {
  background-color: purple;
  border: 1px solid purple;
  color: white;
  }
  .btn_info:hover {
    background-color: white;
    border: 1px solid purple;
    color: purple;
  }
  .btn_info:focus {
    background-color: purple;
    border: 0px solid;
    border-radius: 0px;
    color: #fff;
  }
  .sidebar {
    width: 30%;
    @media screen and (max-width: 700px) {
      width: 70%
    }
  }

</style>