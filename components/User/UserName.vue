<template>
  <div class="v-card__title">
    Name: {{ name }}
  </div>
</template>

<script>
  export default {
    name: 'UserName',
    props: {
      name: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
