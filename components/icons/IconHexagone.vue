<template>
  <svg
    version="1.1"
    viewBox="0.0 0.0 453.54330708661416 453.54330708661416"
    fill="none"
    stroke="none"
    stroke-linecap="square"
    stroke-miterlimit="10"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#ga99375f275_0_0.0)">
      <path
        :fill="filled"
        stroke="currentColor"
        stroke-width="40"
        stroke-linejoin="round"
        stroke-linecap="butt"
        d="m226.77165 16.771654l180.86607 90.433075l0 239.13387l-180.86607 90.433075l-180.86606 -90.433075l0 -239.13387z"
        fill-rule="evenodd"
      />
    </g>
  </svg>
</template>
<script>
export default {
  props: {
    fill: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  computed: {
    filled() {
      return this.fill ? 'currentColor' : 'none'
    },
  },
}
</script>
