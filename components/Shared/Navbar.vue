<template>
  <v-app-bar
    app
    color="indigo"
    dark
  >
    <nuxt-link to="/" tag="v-toolbar-title">BGS Test case</nuxt-link>
    <v-spacer></v-spacer>

    <v-btn
      tile
      color="indigo-darken-3"
      @click.prevent="login()"
      v-if="!hasToken"
    >Login
    </v-btn>

    <v-btn
      icon
      large
      @click.prevent="logout()"
      v-if="hasToken"
    >
      <v-icon>mdi-exit-to-app</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'Navbar',
    methods: {
      login() {
        this.$router.push('/login')
      },
      logout() {
        this.$store.dispatch('logout')
        this.$router.push('/')
      }
    },
    computed: {
      hasToken() {
        return this.$store.getters.hasToken
      }
    },
  }
</script>

<style scoped>

</style>
