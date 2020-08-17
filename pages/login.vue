<template>
  <div>
    <ErrorMessage :message="error"/>
    <v-card class="elevation-12">
      <AuthFormTitle title="Login form"/>
      <AuthForm />
    </v-card>
  </div>
</template>

<script>
  import AuthFormTitle from '@/components/Auth/AuthFormTitle'
  import ErrorMessage from '@/components/Auth/ErrorMessage'
  import AuthForm from '@/components/Auth/AuthForm'

  export default {
    components: { AuthForm, ErrorMessage, AuthFormTitle },
    layout: 'auth',
    computed: {
      error() {
        return this.$store.getters.error
      }
    }
  }
</script>

<style scoped></style>
