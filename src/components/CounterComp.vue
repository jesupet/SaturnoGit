<template>
  <div>
    <b-list-group>
      <b-list-group-item variant="primary"
        >Cantidad total de vacantes:
        <span class="fw-bolder">{{ totalVacancies }}</span></b-list-group-item
      >
      <b-list-group-item variant="secondary"
        >Cantidad total de inscritos:
        <span class="fw-bolder">{{ totalEnrrolled }}</span></b-list-group-item
      >
      <b-list-group-item variant="success"
        >Cantidad total de cupos disponibles:
        <span class="fw-bolder">{{
          totalVacancies - totalEnrrolled
        }}</span></b-list-group-item
      >
      <b-list-group-item variant="danger"
        >Cantidad total de tours activos:
        <span class="fw-bolder">{{
          totalAvailableTours
        }}</span></b-list-group-item
      >
      <b-list-group-item variant="warning"
        >Cantidad total de tours terminados:
        <span class="fw-bolder">{{ totalUnavailableTours }}</span>
      </b-list-group-item>
      <b-list-group-item variant="info"
        >Cantidad total de tours:
        <span class="fw-bolder">{{ totalTours }}</span></b-list-group-item
      >
    </b-list-group>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "CounterComp",
  computed: {
    ...mapState(["listTours"]),
    ...mapGetters([
      "totalVacancies",
      "totalEnrrolled",
      "totalAvailableTours",
      "totalUnavailableTours",
      "totalTours",
    ]),
  },
};
</script>
