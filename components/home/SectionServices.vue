<template>
  <TheSection bg-class="bg-second">
    <TheSectionTitle class="mb-8">{{ $t('Services') }}</TheSectionTitle>
    <div class="mb-4 mx-4 text-center text-justify font-weight-bold">
      {{ $t('service_short_description') }}
    </div>
    <v-row>
      <v-col cols="12" md="6" data-aos="fade-up">
        <v-card class="service-card first">
          <v-card-title>Frontend</v-card-title>
          <v-card-text>
            {{ $t('service_frontend_description_short') }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" data-aos="fade-up">
        <v-card class="service-card second">
          <v-card-title>Backend</v-card-title>
          <v-card-text>
            {{ $t('service_backend_description_short') }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" data-aos="fade-up">
        <v-card class="service-card third">
          <v-card-title>Mobile</v-card-title>
          <v-card-text>
            {{ $t('service_mobile_description_short') }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" data-aos="fade-up">
        <v-card class="service-card fourth">
          <v-card-title>CMS Integration</v-card-title>
          <v-card-text>
            {{ $t('service_cmsintegration_description_short') }}
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
            <v-img
              v-for="techno in technologies"
              :key="techno.name"
              class="ma-3 ma-sm-0"
              :src="require(`~/assets/images/technologies/${techno.path}`)"
              :lazy-src="require(`~/assets/images/technologies/${techno.path}`)"
              contain
              position="center"
              max-height="80"
              max-width="80"
            ></v-img>
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
        { name: 'laravel', path: 'laravel.png' },
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
    background: linear-gradient(180deg, #9013fe, #1e90ff);
    .v-card__text,
    .v-card__title {
      color: white !important;
    }
  }
  &.second {
    background: linear-gradient(180deg, #50e3c2, #1e90ff);
  }
  &.third {
    background: linear-gradient(180deg, #b8e986, #50e3c2);
  }
  &.fourth {
    background: linear-gradient(180deg, #9013fe, #bd10e0);
    .v-card__text,
    .v-card__title {
      color: white !important;
    }
  }
}
</style>
