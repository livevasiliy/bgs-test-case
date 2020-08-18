<template>
  <v-app id="inspire">
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            <v-alert
              prominent
              type="error"
            >
              <v-row align="center">
                <v-col class="grow">404 Page not found.</v-col>
                <v-col class="shrink">
                  <nuxt-link tag="v-btn" to="/">Go home</nuxt-link>
                </v-col>
              </v-row>
            </v-alert>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
  export default {
    name: 'error',
  }
</script>

<style scoped>

</style>
