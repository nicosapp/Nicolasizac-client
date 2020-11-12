<template>
  <v-app dark>
    <TheAppBar />
    <v-main class="bg-second">
      <TheAlert />
      <nuxt />
      <TheFooter />
      <TheSubFooter />
    </v-main>
    <v-btn
      to="contact"
      class="fab-message bg-gradient-primary"
      :style="fabMessageStyle"
      dark
      fab
    >
      <v-icon>mdi-message-text</v-icon>
    </v-btn>
    <TheBottomBar />
    <TheFixedComponents />
  </v-app>
</template>

<script>
export default {
  computed: {
    fabMessageStyle() {
      return {
        position: 'fixed',
        bottom: this.$vuetify.breakpoint.mobile ? '80px' : '30px',
        right: '15px',
      }
    },
  },
}
</script>
