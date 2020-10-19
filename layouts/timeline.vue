<template>
  <v-app dark>
    <TheAppBar />
    <v-main>
      <v-container>
        <TheAlert />
        <nuxt />
      </v-container>
    </v-main>
    <TheBottomBar />
    <TheFixedComponents />
  </v-app>
</template>
