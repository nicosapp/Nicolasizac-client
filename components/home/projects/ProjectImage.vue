<template>
  <div>
    <v-hover v-slot="{ hover }">
      <v-card
        :elevation="hover ? 12 : 2"
        :class="{ 'on-hover': hover }"
        class="fill-height"
      >
        <div class="overlay d-flex align-center justify-center">
          <v-btn fab small dark color="primary" @click.prevent="overlay = true"
            ><v-icon>mdi-eye</v-icon></v-btn
          >
        </div>
        <v-img
          contain
          :src="require(`~/assets/images/projects/${src}`)"
          :lazy-src="require(`~/assets/images/projects/${src}`)"
          :min-height="!maxHeight ? '100%' : null"
          :max-height="maxHeight"
        >
          <div class="fill-height gradient"></div>
        </v-img>
      </v-card>
    </v-hover>
    <v-overlay :z-index="10" :value="overlay" :opacity="0.6">
      <div class="d-flex justify-center mb-3">
        <v-btn fab light small @click.prevent="overlay = false">
          <v-icon>mdi-close </v-icon>
        </v-btn>
      </div>
      <v-card max-width="70vw" max-height="80vh" style="overflow: scroll">
        <v-img
          contain
          :src="require(`~/assets/images/projects/${src}`)"
          :lazy-src="require(`~/assets/images/projects/${src}`)"
        ></v-img>
      </v-card>
    </v-overlay>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    maxHeight: {
      type: Number,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      overlay: false,
    }
  },
}
</script>

<style scoped lang="scss">
.gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    transparent 72px
  );
}
.overlay {
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  opacity: 0;
}
.v-card,
.overlay,
.v-image {
  transition: all 0.4s ease-in-out;
}
.v-card.on-hover {
  .v-image {
    filter: blur(2px);
  }
  .overlay {
    opacity: 1;
  }
}
</style>
