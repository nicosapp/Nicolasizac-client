<template>
  <v-dialog
    v-model="isOpen"
    scrollable
    max-width="800"
    :fullscreen="$vuetify.breakpoint.mobile"
  >
    <template v-slot:activator="{ on, attrs }">
      <a v-bind="attrs" v-on="on">
        <slot />
      </a>
    </template>

    <v-card>
      <v-card-title class="pa-0">
        <v-toolbar dark dense color="primary">
          <div style>Privacy Policy</div>
          <v-spacer></v-spacer>
          <v-btn icon @click.prevent="isOpen = false"
            ><v-icon>mdi-close</v-icon></v-btn
          >
        </v-toolbar>
      </v-card-title>
      <v-card-text class="py-4">
        <div class="text-h4">Cookies</div>
        <p>
          Cookies are small text files that are placed on your comuter by
          websites that you visit. They are widely used in order to make
          websites work, or work more efficiently, as well as to provie
          information to the owners of the site. If you choose to opt in, I will
          use the following Google Analytics cookies to collect information on
          how you are using my site:
        </p>

        <ul class="mb-4">
          <li>_ga</li>
          <li>_gid</li>
        </ul>
        <p>
          The information collected using these cookies will allow me to see
          which articles are resonating with my readers and enabled me to
          improve the site and write better, more useful content.
        </p>
        <p>
          You can read an overview of Google's privacy overview and data
          safeguarding article <a href="https://policies.google.com/">here</a>
        </p>
        <p>
          You can also download a
          <a href="https://tools.google.com/dlpage/gaoptout">browser add-on</a>
          from Google to opt out of Google Analytics entirely
        </p>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      required: false,
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  watch: {
    isOpen() {
      this.$emit('input', this.isOpen)
    },
  },
}
</script>
