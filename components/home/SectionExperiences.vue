<template>
  <TheSection bg-class="bg-second">
    <TheSectionTitle class="mb-4">{{ $t('Experiences') }}</TheSectionTitle>
    <v-row style="width: 100%" data-aos="fade-up">
      <v-col cols="12" md="6">
        <ExperienceFreelance />
      </v-col>
      <v-col cols="12" md="6">
        <ExperienceGe />
      </v-col>
    </v-row>
    <v-row style="width: 100%" data-aos="fade-up">
      <v-col cols="12" md="6">
        <ExperienceStaubli />
      </v-col>
      <v-col cols="12" md="6">
        <ExperienceBmw />
      </v-col>
    </v-row>
  </TheSection>
</template>
