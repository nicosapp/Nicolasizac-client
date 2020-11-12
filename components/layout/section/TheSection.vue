<template>
  <div style="overflow: hidden" :class="`${bgClass}`">
    <TheContainer>
      <v-container
        style="padding: 6rem 0"
        class="d-flex flex-column align-center"
      >
        <slot />
      </v-container>
    </TheContainer>
  </div>
</template>

<script>
export default {
  props: {
    bgClass: {
      type: String,
      required: false,
      default: 'bg',
    },
  },
}
</script>
