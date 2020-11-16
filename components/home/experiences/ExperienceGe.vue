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
        this.$i18n.t('Manufacturing'),
        this.$i18n.t('Medical System'),
        this.$i18n.t('Quality'),
        this.$i18n.t('Supplier Management'),
        this.$i18n.t('Risk management'),
        this.$i18n.t('Priority management'),
        this.$i18n.t('Reporting'),
        this.$i18n.t('Team coordination'),
        this.$i18n.t('Customer &  Goal oriented'),
        this.$i18n.t('Deadline driven'),
      ],
    }
  },
}
</script>
