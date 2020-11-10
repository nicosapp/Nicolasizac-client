<template>
  <div style="position: relative">
    <IconHexagone
      data-aos="zoom-in"
      class="grey--text text--lighten-2 icon filled"
      height="90"
      width="90"
      style="position: absolute; top: -2rem; left: -3rem"
      :fill="true"
    />
    <div style="position: relative; z-index: 1">
      <div class="title text-h3 font-weight-bold mb-3">
        <slot />
      </div>
      <div
        class="primary bottom-bar"
        style="height: 0.4rem; max-width: 150px; margin: auto"
      ></div>
    </div>
  </div>
</template>

<script>
import AOS from '@/plugins/aos'
export default {
  mounted() {
    AOS.init({})
  },
}
</script>
