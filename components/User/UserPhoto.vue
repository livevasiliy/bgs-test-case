<template>
  <div class="d-flex align-center justify-center v-sheet theme--light grey lighten-3" style="height: 200px;">
    <v-img
      height="200"
      :src="photo"
    />
  </div>
</template>

<script>
  export default {
    name: 'UserPhoto',
    props: {
      photo: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
