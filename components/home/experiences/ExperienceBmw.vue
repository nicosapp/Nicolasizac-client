<template>
  <ExperienceTemplate
    :title="$t('R&D Engineer')"
    enterprise-name="BMW"
    enterprise-link="https://www.bmw.fr/fr/accueil.html"
    :date="`${$t('Feb')} 2018, ${$t('Aug')} 2018`"
    :chips="chips"
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
    <template v-slot:content>
      <div v-html="$md($t('experience_bmw_introduction'), 'inline')"></div>
    </template>
    <template v-slot:bottom> </template>
  </ExperienceTemplate>
</template>

<script>
export default {
  data() {
    return {
      chips: [
        this.$i18n.t('Research & Development'),
        this.$i18n.t('Acoustics'),
        this.$i18n.t('Matlab'),
        this.$i18n.t('Reporting'),
      ],
    }
  },
}
</script>
