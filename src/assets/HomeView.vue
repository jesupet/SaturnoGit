<template>
  <div class="container">
    <h1 class="title">LUGARES DE CHILE</h1>
    <div>
      <CardComp />
    </div>
  </div>
</template>

<script>
import CardComp from "../components/CardComp";
export default {
  name: "HomeView",
  components: { CardComp },
};
</script>
<style scoped>
.title {
  text-align: center;
  padding: 20px;
  margin: 0 auto;
}
</style>
