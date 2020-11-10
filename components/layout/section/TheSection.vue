<template>
  <div style="overflow: hidden" :class="`${colorClass}`">
    <v-container
      style="padding: 6rem 0"
      class="d-flex flex-column align-center"
    >
      <slot />
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    colorClass: {
      type: String,
      required: false,
      default: 'bg',
    },
  },
}
</script>
