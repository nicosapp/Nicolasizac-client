<template>
  <TheSection bg-class="bg-second">
    <TheSectionTitle class="mb-4">{{ $t('Experiences') }}</TheSectionTitle>
    <v-row style="width: 100%">
      <v-col cols="12" md="6" data-aos="fade-up" data-aos-once="true">
        <ExperienceFreelance />
      </v-col>
      <v-col cols="12" md="6" data-aos="fade-up" data-aos-once="true">
        <ExperienceGe />
      </v-col>
    </v-row>
    <v-row style="width: 100%">
      <v-col cols="12" md="6" data-aos="fade-up" data-aos-once="true">
        <ExperienceStaubli />
      </v-col>
      <v-col cols="12" md="6" data-aos="fade-up" data-aos-once="true">
        <ExperienceBmw />
      </v-col>
    </v-row>
  </TheSection>
</template>
