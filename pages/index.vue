<template>
  <div>
    <SectionPresentation />
    <SectionMe />
    <SectionServices />
    <SectionProjects />
    <SectionExperiences />
  </div>
</template>

<script>
export default {
  layout: 'home',
  head() {
    return {
      title: this.$i18n.t('pages.homepage.title'),
      meta: [
        {
          property: 'og:title',
          content: this.$i18n.t('pages.homepage.title'),
          hid: 'og:title',
        },
        {
          property: 'og:description',
          content: this.$i18n.t('pages.homepage.description'),
          hid: 'og:description',
        },
      ],
    }
  },
}
</script>
