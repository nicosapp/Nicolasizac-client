<template>
  <div class="bg-second">
    <v-container style="padding: 6rem 0">
      <v-row :class="{ 'mb-16': $slots.subtitle }" :style="flexStyle">
        <v-col cols="12" md="7" class="d-flex" :class="[justifyTitle]">
          <ThePageTitle>
            {{ title }}
          </ThePageTitle>
        </v-col>
        <v-col cols="12" md="5" class="d-flex" :class="[justifyImage]">
          <slot name="image" />
        </v-col>
      </v-row>
      <div class="d-flex justify-center">
        <slot name="subtitle" />
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    titleLeft: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  computed: {
    flexStyle() {
      return {
        'flex-direction': this.titleLeft ? 'row-reverse' : 'row',
      }
    },
    justifyTitle() {
      if (this.titleLeft && !this.$vuetify.breakpoint.mobile)
        return 'justify-center'
      return 'justify-start'
    },
    justifyImage() {
      if (this.titleLeft && !this.$vuetify.breakpoint.mobile)
        return 'justify-start'
      return 'justify-center'
    },
  },
}
</script>
