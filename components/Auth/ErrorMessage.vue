<template>
  <div>
    <v-alert type="error" v-if="$route.query.message">
      You need first authorize for view page
    </v-alert>
    <v-alert type="warning" v-if="message.length > 0">
      {{ message }}
    </v-alert>
  </div>
</template>

<script>
  export default {
    name: 'ErrorMessage',
    props: {
      message: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
