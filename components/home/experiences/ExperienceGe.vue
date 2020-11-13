<template>
  <ExperienceTemplate
    :title="$t('Manufacturing Engineer')"
    enterprise-name="General Electric Healthcare"
    enterprise-link="https://www.gehealthcare.fr/"
    :date="`Nov 2018,  ${$t('Jul')} 2020`"
    :button-name="$t('Details')"
    :chips="chips"
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
    <template v-slot:content>
      <div v-html="$md($t('experience_ge_introduction'), 'inline')"></div>
    </template>
    <template v-slot:details>
      <div v-for="index in 4" :key="index" class="d-flex align-start mb-3">
        <v-icon small>mdi-chevron-right</v-icon>
        <div v-html="$md($t(`experience_ge_task_${index}`), 'inline')" />
      </div>
    </template>
    <template v-slot:bottom> </template>
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
