<template>
  <v-card class="bg">
    <div class="pa-4 d-flex justify-center align-center">
      <slot name="header" />
    </div>
    <v-divider class="bg-second" style="min-height: 3px"></v-divider>
    <div class="pa-8">
      <div class="font-weight-medium lightgrey-text">{{ date }}</div>
      <div class="font-weight-bold" style="font-size: 1.4rem">
        {{ title }}
      </div>
      <div v-if="enterpriseName">
        <a class="font-weight-bold" :href="enterpriseLink">
          @{{ enterpriseName }}
        </a>
      </div>

      <div style="font-size: 0.8rem" class="mt-2 lightgrey-text">
        <slot name="content" />
      </div>

      <div v-if="buttonName" class="d-flex justify-center mt-4">
        <v-btn
          class="text-capitalize btn-details"
          :class="{ open: open }"
          depressed
          outlined
          small
          rounded
          :to="buttonLink"
          @click.prevent="open = !open"
        >
          {{ buttonName }}
          <v-icon class="ml-2 icon">mdi-chevron-up</v-icon>
        </v-btn>
      </div>

      <div
        v-if="$slots.details"
        style="font-size: 0.8rem"
        class="lightgrey-text details-container"
        :class="[{ open: open }, { 'mt-4': open }]"
      >
        <slot name="details" />
      </div>
    </div>
    <v-divider class="bg-second" style="min-height: 3px"></v-divider>
    <div class="pa-4 d-flex justify-center align-center">
      <slot name="bottom" />
      <div v-if="chips">
        <v-btn
          v-for="item in chips"
          :key="item"
          rounded
          small
          color="primary"
          depressed
          class="text-capitalize elevation-1 font-weight-medium mr-2 mb-2"
        >
          {{ item }}
        </v-btn>
      </div>
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
    chips: {
      type: Array,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      open: false,
    }
  },
}
</script>

<style scoped lang="scss">
.v-card {
  border-radius: 1rem !important;
}
.lightgrey-text {
  color: var(--v-icon-active-base);
}

.icon {
  transition: transform 0.5s ease-in-out;
}

.details-container {
  transition: all 0.5s ease-in-out;
  max-height: 0;
  opacity: 0;
  &.open {
    max-height: 500px;
    opacity: 1;
  }
}

.btn-details {
  border-color: var(--v-icon-inactive-base);
  &:hover {
    border-color: transparent;
    color: #fff;
    background: var(--v-primary-base);
  }
  &.open .icon {
    transform: rotate(180deg);
  }
}
</style>
