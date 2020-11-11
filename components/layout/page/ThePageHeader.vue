<template>
  <div class="bg-second">
    <v-container style="padding: 6rem 0">
      <v-row :class="{ 'mb-16': $slots.subtitle }" :style="flexStyle">
        <v-col
          cols="12"
          md="7"
          class="d-flex"
          :class="[
            { 'justify-center': !reverse },
            { 'justify-start': reverse },
          ]"
        >
          <ThePageTitle>
            {{ title }}
          </ThePageTitle>
        </v-col>
        <v-col
          cols="12"
          md="5"
          class="d-flex"
          :class="[
            { 'justify-center': reverse },
            { 'justify-start': !reverse },
          ]"
        >
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
    reverse: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    flexStyle() {
      return {
        'flex-direction': this.reverse ? 'row-reverse' : 'row',
      }
    },
  },
}
</script>
