<template>
  <v-row :class="{ 'flex-row-reverse': reverse }" style="padding: 4rem 0">
    <v-col cols="12" md="6">
      <slot name="image" />
    </v-col>
    <v-col cols="12" md="6">
      <slot name="description" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    reverse: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>
