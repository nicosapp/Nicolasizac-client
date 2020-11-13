<template>
  <ThePageTemplate>
    <template v-slot:header>
      <ThePageHeader
        :title="$t('Projects')"
        :chips="headerLinks"
        :references="$refs"
      >
        <!-- <template v-slot:image> Image </template> -->
      </ThePageHeader>
    </template>
    <template v-slot:default>
      <ProjectMycodesnippets ref="mycodesnippets" bg="bg" class="mb-4" />
      <ProjectMyvoc ref="myvoc" bg="bg" class="mb-4" />
      <ProjectMespetitshabits ref="mespetitshabits" bg="bg" class="mb-4" />
      <ProjectWpDokanStoreCarousel
        ref="dokanstorecarousel"
        bg="bg"
        class="mb-4"
      />
      <ProjectMemocards ref="memocards" bg="bg" class="mb-4" />
    </template>
  </ThePageTemplate>
</template>

<script>
export default {
  layout: 'home',
  data() {
    return {
      headerLinks: [
        { name: 'MyCodeSnippets', link: 'mycodesnippets' },
        { name: 'MyVoc', link: 'myvoc' },
        { name: 'MesPetitsHabits', link: 'mespetitshabits' },
        { name: 'Dokan Store Carousel', link: 'dokanstorecarousel' },
        { name: 'Memocards', link: 'memocards' },
      ],
    }
  },
  head() {
    return {
      title: this.$i18n.t('Projects'),
    }
  },
}
</script>
