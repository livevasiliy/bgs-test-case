<template>
  <v-card-actions>
    <v-spacer></v-spacer>
    <v-btn
      color="primary"
      type="submit"
      @click.prevent="submitHandle"
    >
      Login
    </v-btn>
  </v-card-actions>
</template>

<script>
  export default {
    name: 'AuthFormAction',
    props: {
      submitHandle: {
        type: Function,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
