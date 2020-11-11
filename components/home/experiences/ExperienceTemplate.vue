<template>
  <v-card class="bg">
    <div class="pa-4 d-flex justify-center align-center">
      <slot name="header" />
    </div>
    <v-divider class="bg-second" style="min-height: 3px"></v-divider>
    <div class="pa-8">
      <div class="font-weight-medium accent--text">{{ date }}</div>
      <div class="font-weight-bold" style="font-size: 1.4rem">
        {{ title }}
      </div>
      <div v-if="enterpriseName">
        <a class="font-weight-bold" :href="enterpriseLink">
          @{{ enterpriseName }}
        </a>
      </div>

      <slot name="content" />

      <div v-if="buttonLink" class="d-flex justify-center mt-4">
        <v-btn
          class="text-capitalize"
          depressed
          rounded
          outlined
          :to="buttonLink"
        >
          {{ buttonName }} <v-icon class="ml-2">mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </div>
    <v-divider class="bg-second" style="min-height: 3px"></v-divider>
    <div class="pa-4 d-flex justify-center align-center">
      <slot name="bottom" />
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: false,
      default: null,
    },
    enterpriseName: {
      type: String,
      required: false,
      default: null,
    },
    enterpriseLink: {
      type: String,
      required: false,
      default: null,
    },
    buttonName: {
      type: String,
      required: false,
      default: null,
    },
    buttonLink: {
      type: String,
      required: false,
      default: null,
    },
  },
}
</script>

<style scoped>
.v-card {
  border-radius: 1rem !important;
}
</style>
