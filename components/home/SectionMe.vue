<template>
  <TheSection bg-class="bg">
    <v-row justify="center" align="center">
      <v-col cols="12" md="6" data-aos="fade-up">
        <p class="mb-8">
          Passionné depuis toujours par le secteur du web, je suis un
          développeur autodidacte.
          <br /><br />
          Après plusieurs expériences en start-up, je suis aujourd'hui
          développeur freelance, je partage mon temps entre les missions et les
          projets Open-Source. Spécialisé dans les langages et framework JS et
          Typescript, je suis expert en Front-End avec Vue.JS/Nuxt.JS et
          React.JS avec de solides compétences en Node.JS, Docker et bien
          d'autres. Je vous laisse voir mon parcours, mes projets et mes
          compétences ci-dessous.
        </p>
        <div class="d-flex justify-space-around">
          <v-btn depressed color="primary" dark>
            {{ $t('Voir les projets') }}
            <v-icon class="ml-1">mdi-arrow-right-thick</v-icon>
          </v-btn>
          <v-btn outlined
            >{{ $t('Profile technique') }}
            <v-icon class="ml-1">mdi-arrow-right-thick</v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="d-flex align-center pl-8">
        <ThePageTitle>{{ $t('Me concernant') }}</ThePageTitle>
      </v-col>
    </v-row>
  </TheSection>
</template>
