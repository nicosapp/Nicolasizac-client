<template>
  <ProjectTemplate
    :bg-class="bgClass"
    :reverse="true"
    title="MesPetitsHabits"
    link-demo="https://mespetitshabits.fr"
    :chips="chips"
  >
    {{ $t('project_mespetitshabits_description') }}

    <template v-slot:images>
      <v-row class="fill-height">
        <v-col cols="12" md="6">
          <ProjectImage src="mespetitshabits-1.JPG" />
        </v-col>
        <v-col cols="12" md="6" class="d-flex flex-column justify-space-around">
          <v-col class="pt-0">
            <ProjectImage src="mespetitshabits-3.JPG" :max-height="150" />
          </v-col>
          <v-col class="pb-0">
            <ProjectImage src="mespetitshabits-2.JPG" :max-height="150" />
          </v-col>
        </v-col>
      </v-row>
    </template>
  </ProjectTemplate>
</template>

<script>
export default {
  props: {
    bgClass: {
      required: false,
      type: String,
      default: 'bg',
    },
  },
  data() {
    return {
      chips: [
        'Wordpress',
        'Woocommerce',
        'Dokan',
        'Leaflet',
        'Google Analytics',
        'Stripe',
      ],
    }
  },
}
</script>
