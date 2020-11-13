<template>
  <div v-if="!$vuetify.breakpoint.mobile" class="bg">
    <TheContainer>
      <v-row justify="center" align="center">
        <v-col
          cols="12"
          class="d-flex justify-end font-weight-bold pa-2"
          style="font-size: 0.8rem"
        >
          © {{ year }} | Nicolas Izac | {{ $t('Site web réalisé avec') }} VueJS,
          NuxtJS, Laravel & MySQL
        </v-col>
      </v-row>
    </TheContainer>
  </div>
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
