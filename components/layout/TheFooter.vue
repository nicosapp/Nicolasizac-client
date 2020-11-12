<template>
  <div v-if="!$vuetify.breakpoint.mobile" class="bg-second">
    <TheContainer>
      <v-row justify="center" align="center" class="pt-10 pb-3">
        <v-col cols="2" class="d-flex justify-center">
          <NavigationButton to="services" style="font-size: 1.1rem">{{
            $t('Services')
          }}</NavigationButton>
        </v-col>
        <v-col cols="2" class="d-flex justify-center">
          <NavigationButton to="projects" style="font-size: 1.1rem">{{
            $t('Projets')
          }}</NavigationButton>
        </v-col>
        <v-col cols="2" class="d-flex justify-center">
          <v-img src="/icon.png" max-height="70" max-width="70"></v-img>
        </v-col>
        <v-col cols="2" class="d-flex justify-center">
          <NavigationButton style="font-size: 1.1rem" to="tech-profile">{{
            $t('Profil technique')
          }}</NavigationButton>
        </v-col>
        <v-col cols="2" class="d-flex justify-center">
          <NavigationButton to="contact" style="font-size: 1.1rem">{{
            $t('Contact')
          }}</NavigationButton>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="pb-6">
        <v-col cols="4" md="3">
          <SocialIcons />
        </v-col>
      </v-row>
    </TheContainer>
  </div>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear()
    },
  },
}
</script>
