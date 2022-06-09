<template>
  <div d-flex flex-column min-vh-100>
    <footer class="footer-cont">
      <img
            src="../assets/saturn_logo.svg"
            class="d-inline-block saturn-icon"
          />
      <p class="m-0">Este proyecto fue elaborado por: Sebastián Castillo y María Jesús Petour</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterComp",

};
</script>

<style scoped>
  .footer-cont{
    height: 10vh;
    background-color: black;
    margin: 0 auto;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 14px;
  }
  .saturn-icon {
    height: 70px;
    margin: 0px 20px;
  }
</style>

