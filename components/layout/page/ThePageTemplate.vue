<template>
  <div>
    <TheContainer>
      <slot name="header" />
    </TheContainer>
    <TheContainer v-if="container">
      <slot />
    </TheContainer>
    <div v-else>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    container: {
      required: false,
      default: true,
      type: Boolean,
    },
  },
}
</script>
