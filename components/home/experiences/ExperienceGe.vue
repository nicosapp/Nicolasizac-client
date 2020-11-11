<template>
  <ExperienceTemplate
    :title="$t('Manufacturing Engineer')"
    enterprise-name="General Electric Healthcare"
    enterprise-link="https://www.gehealthcare.fr/"
    :date="`Nov 2018,  ${$t('Jul')} 2020`"
    :button-name="$t('Details')"
    button-link="/projects"
  >
    <template v-slot:header>
      <div>
        <v-img
          :lazy-src="require('~/assets/images/experiences/gehealthcare.png')"
          :src="require('~/assets/images/experiences/gehealthcare.png')"
          max-height="60px"
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
