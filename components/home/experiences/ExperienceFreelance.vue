<template>
  <ExperienceTemplate
    :button-name="$t('Details')"
    button-link="/projects"
    title="Freelance Full Stack Developper"
    enterprise-name="Freelance"
    :date="`Oct 2019, ${$t('Now')}`"
  >
    <template v-slot:header>
      <v-icon large>mdi-email</v-icon>
    </template>
    <template v-slot:content> </template>
    <template v-slot:bottom>
      <v-chip-group column>
        <v-chip v-for="item in chips" :key="item" class="font-weight-medium">
          {{ item }}
        </v-chip>
      </v-chip-group>
    </template>
  </ExperienceTemplate>
</template>

<script>
export default {
  data() {
    return {
      chips: [
        'VueJS',
        'NuxtJS',
        'Vuetify',
        'Laravel',
        'MySQL',
        'ISPConfig',
        'Wordpress',
      ],
    }
  },
}
</script>
