<template>
  <v-container>Dashboard</v-container>
</template>

<script>
export default {
  middleware: ['verified'],
  mounted() {
    this.$store.dispatch('bottomBar/setActive', 'dashboard')
  },
}
</script>
