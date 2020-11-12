<template>
  <v-app dark>
    <TheAppBar />
    <v-main class="bg-second">
      <TheAlert />
      <nuxt />
      <TheFooter />
      <TheSubFooter />
    </v-main>
    <v-btn to="contact" class="fab-message bg-gradient-primary" dark fab>
      <v-icon>mdi-message-text</v-icon>
    </v-btn>
  </v-app>
</template>

<style scoped>
.fab-message {
  position: fixed;
  bottom: 30px;
  right: 30px;
}
</style>
