<template>
  <v-app-bar class="bg" :clipped-left="false" fixed app>
    <nuxt-link to="/">
      <v-img src="/icon.png" :max-height="logoHeight" :max-width="logoHeight">
      </v-img>
    </nuxt-link>

    <v-spacer />
    <MenuSwitcher />
    <NavigationButton
      v-for="nav in navButton"
      :key="nav.to"
      :to="nav.to"
      class="mx-1"
    >
      {{ nav.name }}
    </NavigationButton>

    <!-- <NavigationButton to="blog">{{ $t('Blog') }}</NavigationButton> -->
    <NavigationButton
      to="contact"
      class="bg-gradient-primary ml-2"
      :dark="true"
    >
      <v-icon class="mr-2">mdi-email</v-icon>
      {{ $t('Contact-me') }}
    </NavigationButton>
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
      ],
    }
  },
}
</script>
