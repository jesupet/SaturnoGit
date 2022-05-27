<template>
  <div>
    <button @click.stop.prevent="purpose(params)" type="button" class="btn btn-danger">{{btnName}}</button>
  </div>
</template>

<script>

export default {
  name: 'DeleteButton',
  props: {
    btnName: String,
    purpose: Function,
    params: Array,
  },
  
}
</script>
