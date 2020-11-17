<template>
  <TheSection bg-class="bg">
    <TheSectionTitle class="mb-4">{{ $t('Education') }}</TheSectionTitle>
    <v-row style="width: 100%" justify="center">
      <v-col cols="12" md="8" data-aos="fade-up" data-aos-once="true">
        <ExperienceTemplate
          :title="$t('experiences.insalyon.title')"
          enterprise-name="INSA Lyon"
          enterprise-link="https://www.insa-lyon.fr/"
          :date="`2012,  2017`"
          :button-name="$t('Details')"
          :chips="chips"
        >
          <template v-slot:header>
            <div>
              <v-img
                :lazy-src="require('~/assets/images/experiences/insalyon.png')"
                :src="require('~/assets/images/experiences/insalyon.png')"
                max-height="60px"
                contain
              ></v-img>
            </div>
          </template>
          <template v-slot:content>
            <div
              v-html="$md($t('experiences.insalyon.introduction'), 'inline')"
            ></div>
          </template>

          <template v-slot:details>
            <div
              v-for="index in 3"
              :key="index"
              class="d-flex align-start mb-3"
            >
              <v-icon small>mdi-chevron-right</v-icon>
              <div
                v-html="$md($t(`experiences.insalyon.task_${index}`), 'inline')"
              />
            </div>
          </template>
        </ExperienceTemplate>
      </v-col>
    </v-row>
  </TheSection>
</template>

<script>
export default {
  data() {
    return {
      chips: [
        this.$i18n.t('Computer Sciences'),
        this.$i18n.t('Physics'),
        this.$i18n.t('Mathematics'),
        this.$i18n.t('Mechanics'),
        this.$i18n.t('Chemistry'),
      ],
    }
  },
}
</script>
