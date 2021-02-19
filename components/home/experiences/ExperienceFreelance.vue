<template>
  <ExperienceTemplate
    :button-name="$t('Projects')"
    :title="$t('experiences.freelance.title')"
    enterprise-name="Freelance (Malt)"
    enterprise-link="https://www.malt.fr/profile/nicolasizac"
    :date="`Oct 2019, ${$t('Now')}`"
    :chips="chips"
  >
    <template v-slot:header>
      <v-img
        lazy-src="/icon.png"
        src="/icon.png"
        max-height="60px"
        contain
      ></v-img>
    </template>
    <template v-slot:content>
      <div
        v-html="$md($t('experiences.freelance.introduction'), 'inline')"
      ></div>
    </template>
    <template v-slot:details>
      <div
        v-for="index in 6"
        :key="index"
        class="mb-3"
        v-html="$md($t(`experiences.freelance.task_${index}`), 'inline')"
      ></div>
    </template>
    <template v-slot:bottom> </template>
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
        'TailwindCSS',
        'Sass',
        'Laravel',
        'MySQL',
        'ISPConfig',
        'Wordpress',
        'Figma',
        'Blender',
      ],
    }
  },
}
</script>
