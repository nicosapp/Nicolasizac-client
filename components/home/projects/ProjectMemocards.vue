<template>
  <ProjectTemplate
    title="Memocards"
    link-github-client="https://github.com/nicosapp/Memocards-client"
    link-github-backend="https://github.com/nicosapp/Memocards-api"
    link-demo="https://memocards.tech"
    :bg-class="bgClass"
    :chips="chips"
  >
    {{ $t('project_memocards_description') }}

    <template v-slot:images>
      <v-row class="fill-height">
        <v-col cols="12" md="6">
          <ProjectImage src="memocards-1.JPG" />
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="d-flex flex-column justify-space-around"
          :class="{ 'px-0': $vuetify.breakpoint.mobile }"
        >
          <v-col class="pt-0">
            <ProjectImage src="memocards-3.JPG" :max-height="150" />
          </v-col>
          <v-col class="pb-0">
            <ProjectImage src="memocards-2.JPG" :max-height="150" />
          </v-col>
        </v-col>
      </v-row>
    </template>
  </ProjectTemplate>
</template>

<script>
export default {
  props: {
    bgClass: {
      required: false,
      type: String,
      default: 'bg',
    },
  },
  data() {
    return {
      chips: [
        'NuxtJS',
        'VueJS',
        'Tinymce',
        'Lodash',
        'MomentJS',
        'SortableJS',
        'Sass',
        'TailwindCSS',
        'Laravel',
      ],
    }
  },
}
</script>
