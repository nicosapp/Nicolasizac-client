<template>
  <TheSection color-class="bg-second">
    <TheSectionTitle class="mb-8">{{ $t('Services') }}</TheSectionTitle>
    <p>
      {{
        $t(
          "En tant que développeur Full Stack, je propose mes services pour la création d'un nouveau projet ou pour intervenir sur projets JS existants."
        )
      }}
    </p>
    <v-row>
      <v-col cols="12" md="6">
        <div class="service-card first">
          <h3>Frontend</h3>
          <p>
            {{
              $t(
                "Développement d'applications Front-End performantes et de features complexes. Avec Vue.JS, React.JS ou Nuxt.JS pour un Front-End SEO friendly."
              )
            }}
          </p>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="service-card second">
          <h3>Backend</h3>
          <p>
            {{
              $t(
                "À l'heure des projets dits 'API First', je mets en place des projets Node.JS que vos applications Front-End ou mobile puissent consommer."
              )
            }}
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <div class="service-card third">
          <h3>Mobile</h3>
          <p>
            {{
              $t(
                'Avec des technologies comme React Native ou Flutter, il est possible de développer des applications mobiles natives avec du JS.'
              )
            }}
          </p>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="service-card fourth">
          <h3>CMS integration</h3>
          <p>
            {{
              $t(
                'Vous souhaitez avoir la possibilité de modifier vous-même le contenu de votre site sans demander à un développeur ? Je mets en place un CMS Headless avec un Front-End.'
              )
            }}
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row style="width: 100%">
      <v-col cols="12" class="px-0">
        <div class="service-card bg">
          <h3 class="mb-4 text-center">{{ $t('Skills') }}</h3>
          <p class="d-flex justify-space-around">
            <v-img
              v-for="techno in technologies"
              :key="techno.name"
              :src="require(`~/assets/images/${techno.path}`)"
              contain
              position="center"
              max-height="80"
              max-width="80"
            ></v-img>
          </p>
        </div>
      </v-col>
    </v-row>
    <v-btn
      large
      depressed
      color="primary"
      class="mt-4 text-capitalize"
      style="font-size: 1.3rem"
      >{{ $t('All services') }}
      <v-icon>mdi-arrow-right-thick</v-icon>
    </v-btn>
  </TheSection>
</template>

<script>
export default {
  data() {
    return {
      technologies: [
        { name: 'vuejs', path: 'vuejs.png' },
        { name: 'nuxtjs', path: 'nuxtjs.png' },
        { name: 'vuetify', path: 'vuetify.png' },
        { name: 'react', path: 'react.png' },
        { name: 'laravel', path: 'laravel.png' },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
h3 {
  font-weight: 800;
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
}
.service-card {
  padding: 1rem 2rem;
  border-radius: 1rem;
  height: 100%;
  &.first {
    background: linear-gradient(180deg, #9013fe, #1e90ff);
    color: white;
  }
  &.second {
    background: linear-gradient(180deg, #50e3c2, #1e90ff);
  }
  &.third {
    background: linear-gradient(180deg, #b8e986, #50e3c2);
  }
  &.fourth {
    background: linear-gradient(180deg, #9013fe, #bd10e0);
    color: white;
  }
}
</style>
