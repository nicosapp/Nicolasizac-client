<template>
  <div>
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
      <div
        v-if="$slots.subtitle || chips"
        class="subtitle d-flex justify-center pt-16"
      >
        <div>
          <div
            v-if="chips"
            class="d-flex"
            :class="[{ 'flex-column': $vuetify.breakpoint.mobile }]"
          >
            <v-btn
              v-for="p in chips"
              :key="p.link"
              rounded
              outlined
              depressed
              class="header-link text-capitalize mx-3"
              :class="[{ 'mb-2': $vuetify.breakpoint.mobile }]"
              @click="goTo(p.link)"
              >{{ p.name }}
            </v-btn>
          </div>
          <slot name="subtitle" />
        </div>
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
    chips: {
      type: Array,
      required: false,
      default: null,
    },
    references: {
      type: Object,
      required: false,
      default: null,
    },
  },
  computed: {
    options() {
      return {
        duration: 1000,
        offset: 0,
        easing: 'easeOutCubic',
      }
    },
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
  methods: {
    goTo(link) {
      if (this.references) {
        this.$vuetify.goTo(this.references[link], this.options)
      }
    },
  },
}
</script>

<style scoped lang="scss">
.header-link {
  border-color: var(--v-icon-inactive-base);
}
.header-link:hover {
  border-color: transparent;
  color: #fff;
  background: var(--v-primary-base);
}
</style>
