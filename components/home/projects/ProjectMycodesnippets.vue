<template>
  <ProjectTemplate
    :bg-class="bgClass"
    :reverse="true"
    title="MyCodeSnippets"
    link-github-client="https://github.com/nicosapp/Mycodesnippets-client"
    link-github-backend="https://github.com/nicosapp/Mycodesnippets-api"
    link-demo="https://mycodesnippets.tech"
    :chips="chips"
  >
    {{ $t('project_mycodesnippets_description') }}

    <template v-slot:images>
      <v-row class="fill-height">
        <v-col cols="12" md="6">
          <ProjectImage src="mycodesnippets-1.JPG" />
        </v-col>
        <v-col cols="12" md="6" class="d-flex flex-column justify-space-around">
          <v-col class="pt-0">
            <ProjectImage src="mycodesnippets-3.JPG" />
          </v-col>
          <v-col class="pb-0">
            <ProjectImage src="mycodesnippets-2.JPG" />
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
        'MomentJS',
        'SortableJS',
        'Laravel',
      ],
    }
  },
}
</script>
