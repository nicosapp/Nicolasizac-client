<template>
  <v-row :class="{ 'flex-row-reverse': textLeft }" style="padding: 4rem 0">
    <v-col cols="12" md="6" class="font-weight-bold">
      <slot name="description" />
    </v-col>
    <v-col cols="12" md="6" class="d-flex justify-center">
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
