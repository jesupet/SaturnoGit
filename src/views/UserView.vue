<template>
  <div>
    <UserFavourites/>
    <FavouriteTable/>
  </div>
</template>

<script>
import UserFavourites from "@/components/UserFavourites.vue";
import FavouriteTable from "@/components/FavouriteTable.vue"
export default {
    name: "UserView",
    components:{
      UserFavourites, FavouriteTable
    }
};
</script>

<style>

</style>
