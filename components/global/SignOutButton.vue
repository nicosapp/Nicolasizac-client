<template>
  <v-btn icon :disabled="loading" :loading="loading" @click.prevent="signOut">
    <slot />
  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    async signOut() {
      this.loading = true
      await this.$auth.logout()
      this.loading = false
    },
  },
}
</script>
