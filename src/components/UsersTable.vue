<template>
  <div>
    <b-table
      class="align-middle text-center"
      striped
      hover
      :items="getDataTable"
      :fields="getFields"
      label-sort-asc=""
      label-sort-desc=""
      label-sort-clear=""
    >
      <template v-slot:cell(id)="tour">
        <GreenBtn :btntext="'Editar'" class="py-1" v-b-modal.modal-2/>
        <ButtonComp :btnText="'Eliminar'" :variant="'secondary'" :purpose="activateDeleteTour" :params="tour.item.id" />
      </template>
      <template v-slot:cell(available)="item">
        <p v-if="item.item.available == true">SI</p>
        <p v-else>NO</p>
      </template>
      <template v-slot:cell(reg_date)="item">
        <p>
          {{ changeDateTime(item.item.reg_date) }}
        </p>
      </template>
    </b-table>
    <EditModal />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import EditModal from "./EditModal.vue";
import GreenBtn from "./buttons/GreenBtn.vue";
import ButtonComp from "./buttons/ButtonComp.vue";

export default {
  name: "ToursTable",
  computed: {
    ...mapGetters(["getFields", "getDataTable"]),
  },
  methods: {
    ...mapActions(["testingAction", "activateDeleteTour"]),
    changeDateTime(element) {
      let date = element * 1000;
      let newDate = new Date(date);
      let newDateMonth = newDate.toLocaleString("es-US", { month: "long" });
      let newDateDay = newDate.toLocaleString("es-US", { day: "numeric" });
      let newDateYear =
        newDate.toLocaleString("es-US", { year: "numeric" }) - 1969;
      const generatedDate = `${newDateDay} de ${newDateMonth} de ${newDateYear}`;
      return generatedDate;
    },
  },
  components: { GreenBtn, EditModal, ButtonComp },
};
</script>
