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
      title: this.$i18n.t('Home'),
    }
  },
}
</script>
