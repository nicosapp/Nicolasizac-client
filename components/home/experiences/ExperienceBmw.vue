<template>
  <ExperienceTemplate
    :title="$t('R&D Engineer')"
    enterprise-name="BMW"
    enterprise-link="https://www.bmw.fr/fr/accueil.html"
    :date="`${$t('Feb')} 2018, ${$t('Aug')} 2018`"
    :button-name="$t('Details')"
    button-link="/projects"
  >
    <template v-slot:header>
      <div>
        <v-img
          :lazy-src="require('~/assets/images/experiences/bmw.png')"
          :src="require('~/assets/images/experiences/bmw.png')"
          max-height="60px"
          min-height="60px"
          contain
        ></v-img>
      </div>
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
        'Work',
        'Home Improvement',
        'Vacation',
        'Food',
        'Drawers',
        'Shopping',
        'Art',
        'Tech',
        'Creative Writing',
      ],
    }
  },
}
</script>
