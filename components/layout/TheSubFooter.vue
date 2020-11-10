<template>
  <v-row class="bg" justify="center" align="center">
    <v-col
      cols="9"
      class="d-flex justify-end font-weight-bold pa-2"
      style="font-size: 0.8rem"
    >
      © {{ year }} | Nicolas Izac | Site web réalisé avec VueJS, NuxtJS, Laravel
      & MySQL
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear()
    },
  },
}
</script>
