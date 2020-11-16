<template>
  <TheSection bg-class="bg-second">
    <v-row justify="center" align="center" style="width: 100%">
      <v-col cols="12" md="6" style="position: relative; z-index: 1">
        <h1
          class="font-weight-bold mb-2"
          style="font-size: 4rem"
          data-aos="fade-up"
          data-aos-once="true"
        >
          Nicolas Izac
        </h1>
        <div
          class="font-weight-medium mb-8"
          data-aos="fade-up"
          data-aos-once="true"
          style="font-size: 2.5rem !important"
        >
          {{ $t('Freelance fullstack Js/PHP developper') }}
        </div>
        <div class="text-h5 mb-14" data-aos="fade-up" data-aos-once="true">
          {{ $t('Spécialisé front-end avec') }}

          <span class="font-weight-bold" :class="firstLineClass"
            >Vue.JS & Nuxt.JS</span
          >
          <br />
          {{ $t('et back-end avec') }}
          <span class="font-weight-bold" :class="secondLineClass">Laravel</span>
        </div>
        <v-btn
          data-aos="fade-up"
          data-aos-once="true"
          large
          dark
          class="bg-gradient-primary text-capitalize"
          style="font-size: 1.2rem"
        >
          {{ $t('Contact-me') }}
        </v-btn>
      </v-col>
      <v-col cols="6" style="position: relative" class="d-flex align-center">
        <div class="icon-wrapper">
          <div class="scroll-animation-wrapper" :style="scrollAnimationStyle">
            <IconHexagone
              data-aos="presentation-animation"
              class="bg-icon"
              height="400"
              width="400"
              :fill="true"
              :gradient="true"
            />
          </div>
        </div>
      </v-col>
    </v-row>
  </TheSection>
</template>

<script>
export default {
  data() {
    return {
      scaleValue: 1,
      rotateValue: 0,
    }
  },
  computed: {
    scrollAnimationStyle() {
      return {
        transform: `scale(${this.scaleValue}) rotate(${this.rotateValue}deg)`,
      }
    },
    firstLineClass() {
      if (this.$vuetify.breakpoint.mobile && this.scaleValue > 1.4)
        return 'white--text'
      return 'primary--text'
    },
    secondLineClass() {
      return this.$vuetify.breakpoint.mobile ? 'white--text' : 'primary--text'
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(e) {
      this.scaleValue = 1 + window.scrollY / 200
      this.rotateValue = -window.scrollY / 10
    },
  },
}
</script>

<style scoped lang="scss">
.icon-wrapper {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  .scroll-animation-wrapper {
    transition: all 0.3s linear;
  }
  .bg-icon {
    transition: all 2s ease-in-out;
    opacity: 0;
    transform: rotate(180deg) scale(0);
    &.aos-animate {
      opacity: 1;
      transform: rotate(0deg) scale(1);
    }
  }
}
</style>
