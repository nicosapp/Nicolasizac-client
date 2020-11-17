<template>
  <ProjectTemplate
    title="Dokan Store Carousel"
    link-github-client="https://github.com/nicosapp/niz_dokansc"
    link-demo="https://fr.wordpress.org/plugins/niz-stores-carousel-for-dokan/"
    :bg-class="bgClass"
    :text-first="true"
  >
    {{ $t('projects.dokanstorecarousel.description') }}

    <template v-slot:images>
      <v-row class="fill-height">
        <v-col cols="12">
          <ProjectImage src="dokansc-1.JPG" :max-height="300" />
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
      chips: ['Wordpress', 'Dokan', 'jQuery', 'Owl'],
    }
  },
}
</script>
