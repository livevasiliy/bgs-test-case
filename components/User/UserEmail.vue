<template>
  <div class="v-card__subtitle">email: {{ email }}</div>
</template>

<script>
  export default {
    name: 'UserEmail',
    props: {
      email: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
