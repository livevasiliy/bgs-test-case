<template>
  <v-app id="inspire">
    <Navbar />
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
            <nuxt/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
  import Navbar from '@/components/Shared/Navbar'
  import Footer from '@/components/Shared/Footer'
  export default {
    name: 'user',
    components: { Footer, Navbar },
  }
</script>

<style></style>

