<template>
  <TheSection bg-class="bg-second">
    <v-row
      justify="center"
      align="stretch"
      style="width: 100%; margin: -6rem 0 !important"
    >
      <v-col
        cols="12"
        md="6"
        class="col-text"
        style="
          position: relative;
          z-index: 1;
          padding-top: 6rem;
          padding-bottom: 6rem;
        "
      >
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
          {{ $t('Freelance fullstack Js/PHP developer') }}
        </div>
        <div class="text-h5 mb-14" data-aos="fade-up" data-aos-once="true">
          {{ $t('Front-end expert with') }}

          <span class="font-weight-bold" :class="firstLineClass"
            >Vue.JS & Nuxt.JS</span
          >
          <br />
          {{ $t('and Back-end with') }}
          <span class="font-weight-bold" :class="firstLineClass"
            >Laravel & Symfony
          </span>
        </div>
        <v-btn
          data-aos="fade-up"
          data-aos-once="true"
          large
          dark
          class="bg-gradient-primary text-capitalize"
          style="font-size: 1.2rem"
          :to="{ name: 'contact' }"
        >
          {{ $t('Contact-me') }}
        </v-btn>
      </v-col>
      <v-col
        cols="12"
        md="6"
        style="position: relative"
        class="col-image d-flex align-center"
      >
        <v-img
          id="profile-image"
          :src="require(`~/assets/images/profile-full-body.png`)"
          :lazy-src="require(`~/assets/images/profile-full-body.png`)"
          contain
          alt="Nicolas Izac"
          position="center"
        ></v-img>
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
      if (this.$vuetify.breakpoint.mobile && this.scaleValue > 1.6)
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
@import '~vuetify/src/styles/styles.sass';
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
@media #{map-get($display-breakpoints,'md-and-down')} {
  .col-text {
    padding-bottom: 0 !important;
  }
  .col-image {
    padding-bottom: 0;
    #profile-image {
      position: relative;
    }
  }
}
#profile-image {
  z-index: 1;
  position: absolute;
  max-height: 100%;
}
</style>
