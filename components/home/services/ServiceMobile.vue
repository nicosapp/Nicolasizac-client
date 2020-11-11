<template>
  <ServiceTemplate :reverse="reverse">
    <template v-slot:image> image </template>
    <template v-slot:description>
      <TheSectionTitle class="mb-8">Mobile</TheSectionTitle>
      {{ $t('service_mobile_description') }}
    </template>
  </ServiceTemplate>
</template>

<script>
export default {
  props: {
    reverse: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>
