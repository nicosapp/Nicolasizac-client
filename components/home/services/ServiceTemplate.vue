<template>
  <v-row :class="{ 'flex-row-reverse': textLeft }" style="padding: 4rem 0">
    <v-col cols="12" md="6">
      <slot name="description" />
    </v-col>
    <v-col cols="12" md="6">
      <slot name="image" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    textLeft: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
}
</script>
