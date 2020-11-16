<template>
  <ThePageTemplate :container="false">
    <template v-slot:header>
      <ThePageHeader
        :title="$t('Tech profile')"
        :title-left="false"
        :chips="headerLinks"
        :references="$refs"
      >
        <!-- <template v-slot:image> Image </template> -->
      </ThePageHeader>
    </template>

    <template v-slot:default>
      <v-btn
        v-if="false"
        color="primary text-capitalize"
        style="position: fixed; left: 30px; top: 100px; z-index: 10"
      >
        <v-icon class="mr-2">mdi-printer</v-icon> {{ $t('Print') }} / PDF
      </v-btn>
      <SectionMe ref="presentation" />
      <SectionExperiences ref="experiences" />
      <SectionEducation ref="education" />
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
        { name: this.$i18n.t('Education'), link: 'education' },
        { name: this.$i18n.t('Services'), link: 'services' },
      ],
    }
  },
  head() {
    return {
      title: this.$i18n.t('pages.tech_profile.title'),
      meta: [
        {
          property: 'og:title',
          content: this.$i18n.t('pages.tech_profile.title'),
          hid: 'og:title',
        },
        {
          property: 'og:description',
          content: this.$i18n.t('pages.tech_profile.description'),
          hid: 'og:description',
        },
      ],
    }
  },
}
</script>
