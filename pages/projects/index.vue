<template>
  <div>
    <ThePageHeader :title="$t('Projects')">
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
    <v-container>
      <ProjectMycodesnippets ref="mycodesnippets" bg="bg" class="mb-4" />
      <ProjectMyvoc ref="myvoc" bg="bg" class="mb-4" />
      <ProjectMespetitshabits ref="mespetitshabits" bg="bg" class="mb-4" />
      <ProjectWpDokanStoreCarousel
        ref="dokanstorecarousel"
        bg="bg"
        class="mb-4"
      />
      <ProjectMemocards ref="memocards" bg="bg" class="mb-4" />
    </v-container>
  </div>
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
