<template>
  <div>
    <div :class="`${bgHeader}`">
      <TheContainer>
        <slot name="header" />
      </TheContainer>
    </div>
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
    bgHeader: {
      required: false,
      type: String,
      default: 'bg-second',
    },
  },
}
</script>
