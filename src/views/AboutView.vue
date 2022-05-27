<template>
  <div class="about text-center">
    <h1>CONTENIDO EXPERIMENTAL</h1>
    <ToursTable_BS5 :items="getDataTable" />
    <CounterComp :items="getDataTable"/>
  </div>
</template>

<script>
import ToursTable_BS5 from "@/components/ToursTable_BS5.vue";
import { mapGetters } from "vuex";
import CounterComp from "../components/CounterComp.vue";

export default {
  name: "AboutView",
  components: {
    ToursTable_BS5,
    CounterComp
},
  computed: {
    ...mapGetters(["getDataTable"]),
  },
};
</script>
