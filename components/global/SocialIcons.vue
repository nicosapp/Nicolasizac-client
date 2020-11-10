<template>
  <div class="d-flex justify-space-around">
    <v-btn icon :href="link.github" target="_blank">
      <v-icon large>mdi-github</v-icon>
    </v-btn>
    <v-btn icon :href="link.linkedin" target="_blank">
      <v-icon large>mdi-linkedin</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: {
        linkedin: 'https://www.linkedin.com/in/nicolas-izac-pro',
        github: 'https://github.com/nicosapp/',
      },
    }
  },
}
</script>
