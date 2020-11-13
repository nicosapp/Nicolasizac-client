<template>
  <ServiceTemplate :text-left="textLeft">
    <template v-slot:image> image </template>
    <template v-slot:description>
      <TheSectionTitle class="mb-8">Mobile</TheSectionTitle>
      <div class="text-justify">{{ $t('service_mobile_description') }}</div>
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
