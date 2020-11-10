<template>
  <v-app dark>
    <TheAppBar />
    <v-main>
      <v-container>
        <TheAlert />
        <nuxt />
      </v-container>
      <TheFooter />
      <TheSubFooter />
    </v-main>
    <TheFixedComponents />
  </v-app>
</template>
