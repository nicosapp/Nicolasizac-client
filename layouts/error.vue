<template>
  <v-app dark>
    <v-main>
      <TheContainer class="the-container">
        <h1 class="text-h3">
          <template v-if="error.statusCode === 404">
            {{ pageNotFound }}
          </template>
          <template v-else>
            {{ otherError }}
          </template>
        </h1>

        <NuxtLink to="/"> Home page </NuxtLink>
      </TheContainer>
    </v-main>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
