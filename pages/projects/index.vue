<template>
  <ThePageTemplate>
    <template v-slot:header>
      <ThePageHeader :title="$t('Projects')">
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
              >{{ p.name }}
            </v-btn>
          </div>
        </template>
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
