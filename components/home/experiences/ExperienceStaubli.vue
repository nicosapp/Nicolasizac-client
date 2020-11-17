<template>
  <ExperienceTemplate
    :title="$t('experiences.staubli.title')"
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
      <div v-html="$md($t('experiences.staubli.introduction'), 'inline')"></div>
    </template>
    <template v-slot:details>
      <div v-for="index in 2" :key="index" class="d-flex align-start mb-3">
        <v-icon small>mdi-chevron-right</v-icon>
        <div v-html="$md($t(`experiences.staubli.task_${index}`), 'inline')" />
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
        this.$i18n.t('Manufacturing'),
        this.$i18n.t('Mechanical engineering'),
        this.$i18n.t('Mechanical design'),
        this.$i18n.t('Catia V5'),
        this.$i18n.t('Supplier Management'),
        this.$i18n.t('Risk management'),
        this.$i18n.t('Priority management'),
        this.$i18n.t('Reporting'),
      ],
    }
  },
}
</script>
