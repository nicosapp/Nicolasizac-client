<template>
  <v-app-bar class="bg" :clipped-left="false" fixed app>
    <nuxt-link to="/">
      <v-img src="/icon.png" :max-height="logoHeight" :max-width="logoHeight">
      </v-img>
    </nuxt-link>

    <v-spacer />
    <MenuSwitcher />
    <NavigationButton to="services">{{ $t('Services') }}</NavigationButton>
    <NavigationButton to="projects">{{ $t('Projects') }}</NavigationButton>
    <NavigationButton to="tech-profile">
      {{ $t('Tech profile') }}
    </NavigationButton>
    <NavigationButton to="blog">{{ $t('Blog') }}</NavigationButton>
    <NavigationButton to="contact" class="bg-gradient-primary" :dark="true">
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
    }
  },
}
</script>
