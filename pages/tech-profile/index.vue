<template>
  <div class="bg">
    <v-btn
      color="primary text-capitalize"
      style="position: fixed; left: 30px; margin-top: 30px; z-index: 10"
    >
      <v-icon class="mr-2">mdi-printer</v-icon> {{ $t('Print') }} / PDF
    </v-btn>
    <ThePageHeader :title="$t('Tech profile')" :reverse="true">
      <template v-slot:image> Image </template>
      <template v-slot:subtitle>
        <v-btn
          v-for="p in headerLinks"
          :key="p.link"
          rounded
          outlined
          depressed
          class="text-capitalize mx-3"
          @click="$vuetify.goTo($refs[p.link], options)"
          >{{ p.name }}</v-btn
        >
      </template>
    </ThePageHeader>
    <SectionMe ref="presentation" />
    <SectionExperiences ref="experiences" />
    <SectionServices ref="services" />
  </div>
</template>

<script>
export default {
  layout: 'home',
  data() {
    return {
      headerLinks: [
        { name: this.$i18n.t('Presentation'), link: 'presentation' },
        { name: this.$i18n.t('Experiences'), link: 'experiences' },
        { name: this.$i18n.t('Services'), link: 'services' },
      ],
    }
  },
  computed: {
    options() {
      return {
        duration: 1000,
        offset: 0,
        easing: 'easeOutCubic',
      }
    },
  },
}
</script>
