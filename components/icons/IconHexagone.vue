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
    <defs>
      <linearGradient
        id="LinearGradient"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.0 20.67914061939489 -20.67914061939489 0.0 0.0 0.0)"
        spreadMethod="pad"
        x1="-3.6561588176929654"
        y1="-10.966227772630548"
        x2="10.966175218308527"
        y2="3.6561593134884562"
      >
        <stop offset="0.0" stop-color="#22c1c3" />
        <stop offset="1.0" stop-color="#ffae00" />
      </linearGradient>
    </defs>
    <g clip-path="url(#ga99375f275_0_0.0)">
      <path
        :fill="filled"
        :stroke="strokeFilled"
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
    gradient: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  computed: {
    gradientColor() {
      return 'url(#LinearGradient)'
    },
    filled() {
      return this.fill
        ? this.gradient
          ? this.gradientColor
          : 'currentColor'
        : 'none'
    },
    strokeFilled() {
      return this.gradient ? this.gradientColor : 'currentColor'
    },
  },
}
</script>
