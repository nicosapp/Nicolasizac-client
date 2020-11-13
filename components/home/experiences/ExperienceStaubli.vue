<template>
  <ExperienceTemplate
    :title="$t('Manufacturing Engineer')"
    enterprise-name="Stäubli Textile"
    enterprise-link="https://www.staubli.com/fr-fr/textile/"
    :date="`${$t('Feb')} 2018, ${$t('Aug')} 2018`"
    :button-name="$t('Details')"
    :chips="chips"
  >
    <template v-slot:header>
      <div>
        <v-img
          :lazy-src="require('~/assets/images/experiences/staubli.png')"
          :src="require('~/assets/images/experiences/staubli.png')"
          max-height="60px"
          contain
        ></v-img>
      </div>
    </template>
    <template v-slot:content>
      <div v-html="$md($t('experience_staubli_introduction'), 'inline')"></div>
    </template>
    <template v-slot:details>
      <div v-for="index in 2" :key="index" class="d-flex align-start mb-3">
        <v-icon small>mdi-chevron-right</v-icon>
        <div v-html="$md($t(`experience_staubli_task_${index}`), 'inline')" />
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
