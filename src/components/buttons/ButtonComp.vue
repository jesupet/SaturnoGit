<template>
  <div>
    <b-button :variant="btnColour" @click.stop.prevent="purpose(params)">{{ btnText }}</b-button>
  </div>
</template>

<script>

export default ({
  name: 'ButtonComp_DeleteTour',
  props: ["btnText", "btnColour", "purpose", "params"]
})
 
</script>
