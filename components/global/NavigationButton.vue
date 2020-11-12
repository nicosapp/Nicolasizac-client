<template>
  <v-btn
    text
    :dark="dark"
    active-class="nav-btn-active"
    class="text-capitalize"
    :to="to"
  >
    <div style="position: relative">
      <IconHexagone
        class="bg-icon"
        :height="height"
        :width="height"
        :fill="true"
        :gradient="true"
      />
      <div style="position: relative; z-index: 1">
        <slot />
      </div>
    </div>
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
  data() {
    return {
      height: 25,
    }
  },
}
</script>

<style scoped lang="scss">
.bg-icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}
.nav-btn-active {
  &::before {
    background: unset !important;
  }
  .bg-icon {
    opacity: 0.7;
  }
}
</style>
