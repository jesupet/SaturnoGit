<template>
  <footer class="footer-cont">
    <img
          src="../assets/saturn_logo.svg"
          class="d-inline-block align-middle saturn-icon"
        />
    <p class="mt-4">Este proyecto fue elaborado por: Sebastián Castillo y María Jesús Petour</p>
  </footer>
</template>

<script>
export default {
  name: "FooterComp",

};
</script>

<style scoped>
  *{
    color: white;
    text-align: end;
    justify-content: center;
  }
  .footer-cont{
    height: 20vh;
    background-color: black;
    margin: 0;
    padding: 30px;
    border-top: white 1px none;
    display: flex;
  }
  .saturn-icon {
    height: 70px;
    margin-right: 20px;
  }
</style>

