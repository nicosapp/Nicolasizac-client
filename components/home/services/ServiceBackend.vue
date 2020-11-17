<template>
  <ServiceTemplate :text-left="textLeft">
    <template v-slot:image>
      <v-img
        :lazy-src="require('~/assets/images/services/backend.svg')"
        :src="require('~/assets/images/services/backend.svg')"
        max-width="80%"
      >
      </v-img>
    </template>
    <template v-slot:description>
      <TheSectionTitle class="mb-8">Backend</TheSectionTitle>
      <div class="text-justify">{{ $t('services.backend.description') }}</div>
    </template>
  </ServiceTemplate>
</template>

<script>
export default {
  props: {
    textLeft: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
}
</script>
