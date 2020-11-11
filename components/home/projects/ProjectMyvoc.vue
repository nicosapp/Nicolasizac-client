<template>
  <ProjectTemplate
    :bg-class="bgClass"
    :reverse="false"
    title="MyVoc"
    link-github-client="https://github.com/nicosapp/Myvoc-client"
    link-github-backend="https://github.com/nicosapp/Myvoc-api"
    link-demo="https://myvoc.space"
    :chips="chips"
  >
    {{ $t('project_myvoc_description') }}

    <template v-slot:images>
      <v-row class="fill-height">
        <v-col cols="12" md="6">
          <ProjectImage src="myvoc-1.JPG" />
        </v-col>
        <v-col cols="12" md="6" class="d-flex flex-column justify-space-around">
          <v-col class="pt-0">
            <ProjectImage src="myvoc-3.JPG" :max-height="150" />
          </v-col>
          <v-col class="pb-0">
            <ProjectImage src="myvoc-2.JPG" :max-height="150" />
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
        'Codemirror',
        'Markdown',
        'Lodash',
        'Deepdash',
        'MomentJS',
        'SortableJS',
        'Laravel',
      ],
    }
  },
}
</script>
