<template>
  <ServiceTemplate :text-left="textLeft">
    <template v-slot:image>
      <v-img
        :lazy-src="require('~/assets/images/services/cmsintegration.svg')"
        :src="require('~/assets/images/services/cmsintegration.svg')"
        max-width="80%"
      >
      </v-img>
    </template>
    <template v-slot:description>
      <TheSectionTitle class="mb-8">CMS Integration</TheSectionTitle>
      <div class="text-justify">
        {{ $t('service_cmsintegration_description') }}
      </div>
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
