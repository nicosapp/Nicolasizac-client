<template>
  <TheSection bg-class="bg-second">
    <TheSectionTitle class="mb-8">{{ $t('Services') }}</TheSectionTitle>
    <div class="mb-4 mx-4 text-center text-justify font-weight-bold">
      {{ $t('services.introduction') }}
    </div>
    <v-row>
      <v-col cols="12" md="6" data-aos="fade-up">
        <v-card class="service-card first">
          <v-card-title>Frontend</v-card-title>
          <v-card-text>
            {{ $t('services.frontend.short') }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" data-aos="fade-up">
        <v-card class="service-card second">
          <v-card-title>Backend</v-card-title>
          <v-card-text>
            {{ $t('services.backend.short') }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" data-aos="fade-up">
        <v-card class="service-card third">
          <v-card-title>Mobile</v-card-title>
          <v-card-text>
            {{ $t('services.mobile.short') }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" data-aos="fade-up">
        <v-card class="service-card fourth">
          <v-card-title>CMS Integration</v-card-title>
          <v-card-text>
            {{ $t('services.cmsintegration.short') }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row style="width: 100%" data-aos="fade-up">
      <v-col cols="12" class="px-4 px-sm-0">
        <v-card class="service-card bg">
          <v-card-title class="d-flex justify-center mb-3">
            {{ $t('Skills') }}
          </v-card-title>
          <v-card-text
            class="d-flex justify-space-around flex-wrap flex-sm-nowrap"
          >
            <div class="techno-grid-wrapper">
              <v-img
                v-for="techno in technologies"
                :key="techno.name"
                class="ma-3 ma-sm-0"
                :alt="techno.name"
                :src="require(`~/assets/images/technologies/${techno.path}`)"
                :lazy-src="
                  require(`~/assets/images/technologies/${techno.path}`)
                "
                contain
                position="center"
                max-height="100"
                max-width="100"
              ></v-img>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-btn
      data-aos="fade-up"
      large
      depressed
      color="primary"
      class="mt-4 text-capitalize"
      style="font-size: 1.3rem"
      :to="{ name: 'services' }"
      >{{ $t('All services') }}
      <v-icon class="ml-2">mdi-chevron-right</v-icon>
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
        { name: 'ionic', path: 'ionic.png' },
        { name: 'angular', path: 'angular.png' },
        { name: 'laravel', path: 'laravel.png' },
        { name: 'symfony', path: 'symfony.png' },
        { name: 'docker', path: 'docker.png' },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.v-card__text {
  font-size: 1rem;
  text-align: justify;
  text-justify: inter-word;
  font-weight: 700;
}
.v-card__title {
  font-weight: 800;
  font-size: 2.2rem;
}
.service-card {
  padding: 1rem 1rem;
  border-radius: 1rem;
  height: 100%;
  &.first {
    // background: linear-gradient(180deg, #9013fe, #1e90ff);
    background: linear-gradient(#dcdcdc, #969696);
    // .v-card__text,
    // .v-card__title {
    //   color: white !important;
    // }
  }
  &.second {
    background: linear-gradient(180deg, #50e3c2, #1e90ff);
  }
  &.third {
    background: linear-gradient(180deg, #b8e986, #50e3c2);
  }
  &.fourth {
    // background: linear-gradient(180deg, #9013fe, #bd10e0);
    background: linear-gradient(180deg, #e8de6d, #ffae00);
    // .v-card__text,
    // .v-card__title {
    //   color: white !important;
    // }
  }
}
.techno-grid-wrapper {
  // display: grid;
  // grid-gap: 50px;
  // grid-template-columns: repeat(4, 1fr);
  // justify-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 10px;
}
// @import '~vuetify/src/styles/styles.sass';
// @media #{map-get($display-breakpoints,'md-and-down')} {
//   .techno-grid-wrapper {
//     display: grid;
//     grid-gap: 10px !important;
//     grid-template-columns: repeat(2, 1fr);
//     justify-items: center;
//   }
// }
</style>
