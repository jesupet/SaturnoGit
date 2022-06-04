<template>
  <div d-flex flex-column min-vh-100>
    <footer class="footer-cont">
      <img
            src="../assets/saturn_logo.svg"
            class="d-inline-block align-middle saturn-icon"
          />
      <p class="mt-4">Este proyecto fue elaborado por: Sebastián Castillo y María Jesús Petour</p>
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
    height: 20vh;
    background-color: black;
    margin: 0;
    padding: 30px;
    border-top: white 1px none;
    display: flex;
    color: white;
    text-align: end;
    justify-content: center;
    margin-top: auto;
    position:relative;
    bottom: 0;
    width: 100%
  }
  .saturn-icon {
    height: 70px;
    margin-right: 20px;
  }
</style>

