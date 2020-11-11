<template>
  <TheSection>
    <TheSectionTitle class="mb-4">{{ $t('Projects') }}</TheSectionTitle>
    <v-tabs v-model="tab" background-color="transparent">
      <v-tab v-for="item in items" :key="item.name">
        {{ item.name }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab" style="width: 100%" class="mt-3">
      <v-tab-item v-for="item in items" :key="item.name">
        <component :is="`project-${item.component}`" bg-class="bg-second" />
      </v-tab-item>
    </v-tabs-items>
  </TheSection>
</template>

<script>
import ProjectMycodesnippets from '@/components/home/projects/ProjectMycodesnippets'
import ProjectMemocards from '@/components/home/projects/ProjectMemocards'
import ProjectMyvoc from '@/components/home/projects/ProjectMyvoc'
import ProjectMespetitshabits from '@/components/home/projects/ProjectMespetitshabits'
export default {
  components: {
    ProjectMycodesnippets,
    ProjectMemocards,
    ProjectMyvoc,
    ProjectMespetitshabits,
  },
  data() {
    return {
      tab: null,
      items: [
        { name: 'MyCodeSnippets', component: 'mycodesnippets' },
        { name: 'MyVoc', component: 'myvoc' },
        { name: 'Memocards', component: 'memocards' },
        { name: 'MesPetitsHabits', component: 'mespetitshabits' },
      ],
    }
  },
}
</script>
