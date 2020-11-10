<template>
  <TheSection color-class="bg-second">
    <v-row justify="center" align="center" style="width: 100%">
      <v-col cols="6" style="position: relative; z-index: 1">
        <h1 class="text-h1 mb-2" data-aos="fade-up">Nicolas Izac</h1>
        <p class="text-h3" data-aos="fade-up">
          {{ $t('Freelance fullstack Js/PHP développeur') }}
        </p>
        <p class="text-h5" data-aos="fade-up">
          {{ $t('Spécialisé font-end avec') }}

          <span class="font-weight-bold primary--text">Vue.JS & Nuxt.JS</span>
        </p>
        <p class="text-h5" data-aos="fade-up">
          {{ $t('et back-end avec') }}
          <span class="font-weight-bold primary--text">Laravel</span>
        </p>
        <v-btn
          data-aos="fade-up"
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
              class="bg-icon grey--text text--lighten-2"
              height="400"
              width="400"
              :fill="true"
            />
          </div>
        </div>
      </v-col>
    </v-row>
  </TheSection>
</template>

<script>
import AOS from '@/plugins/aos'
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
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    AOS.init({
      once: true,
    })
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(e) {
      this.scaleValue = 1 + window.scrollY / 200
      this.rotateValue = window.scrollY / 10
    },
  },
}
</script>

<style scoped lang="scss">
.icon-wrapper {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
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
