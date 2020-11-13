<template>
  <ThePageTemplate :container="false">
    <template v-slot:header>
      <ThePageHeader :title="$t('Tech profile')" :title-left="false">
        <!-- <template v-slot:image> Image </template> -->
        <template v-slot:subtitle>
          <div
            class="d-flex"
            :class="[{ 'flex-column': $vuetify.breakpoint.mobile }]"
          >
            <v-btn
              v-for="p in headerLinks"
              :key="p.link"
              rounded
              outlined
              depressed
              class="text-capitalize mx-3"
              :class="[{ 'mb-2': $vuetify.breakpoint.mobile }]"
              @click="$vuetify.goTo($refs[p.link], options)"
              >{{ p.name }}</v-btn
            >
          </div>
        </template>
      </ThePageHeader>
    </template>

    <template v-slot:default>
      <v-btn
        color="primary text-capitalize"
        style="position: fixed; left: 30px; top: 100px; z-index: 10"
      >
        <v-icon class="mr-2">mdi-printer</v-icon> {{ $t('Print') }} / PDF
      </v-btn>
      <SectionMe ref="presentation" />
      <SectionExperiences ref="experiences" />
      <SectionServices ref="services" />
    </template>
  </ThePageTemplate>
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
