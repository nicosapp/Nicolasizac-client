<template>
  <v-btn text :dark="dark" class="text-capitalize" :to="to">
    <slot />
  </v-btn>
</template>

<script>
export default {
  props: {
    to: {
      type: [Object, String],
      required: false,
      default: '/',
    },
    dark: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>
