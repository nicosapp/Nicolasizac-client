<template>
  <v-app-bar class="bg" fixed app :height="height">
    <TheContainer>
      <div class="d-flex align-center">
        <nuxt-link to="/">
          <v-img
            src="/icon.png"
            :max-height="logoHeight"
            :max-width="logoHeight"
          >
          </v-img>
        </nuxt-link>

        <v-spacer />
        <MenuSwitcher />
        <template v-if="!$vuetify.breakpoint.mobile">
          <NavigationButton
            v-for="nav in navButton"
            :key="nav.to"
            :to="nav.to"
            class="mx-1"
          >
            {{ nav.name }}
          </NavigationButton>
        </template>

        <v-btn
          dark
          to="contact"
          class="text-capitalize bg-gradient-primary ml-2"
        >
          <v-icon class="mr-2">mdi-email</v-icon>
          {{ $t('Contact-me') }}
        </v-btn>
      </div>
    </TheContainer>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      logoHeight: 56,
      navButton: [
        { name: this.$i18n.t('Services'), to: 'services' },
        { name: this.$i18n.t('Projects'), to: 'projects' },
        { name: this.$i18n.t('Tech profile'), to: 'tech-profile' },
        // { name: this.$i18n.t('Blog'), to: 'blog' },
      ],
    }
  },
  computed: {
    height() {
      return this.$vuetify.breakpoint.mobile ? '72px' : null
    },
  },
}
</script>
