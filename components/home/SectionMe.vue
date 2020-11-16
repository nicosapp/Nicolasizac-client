<template>
  <TheSection bg-class="bg">
    <v-row justify="center" align="center" :style="flexStyle">
      <v-col cols="12" md="6" data-aos="fade-up">
        <p class="mb-8 mx-2 mx-sm-0 text-justify">
          {{ $t('section_me_firstline') }}
          <br /><br />
          {{ $t('section_me_description') }}
        </p>
        <div
          class="d-flex justify-space-around align-center"
          :class="{ 'flex-column': $vuetify.breakpoint.mobile }"
        >
          <div>
            <v-btn
              color="primary"
              :class="{ 'mb-8': $vuetify.breakpoint.mobile }"
              dark
            >
              {{ $t('Go to projects') }}
              <v-icon class="ml-1">mdi-arrow-right-thick</v-icon>
            </v-btn>
          </div>
          <div>
            <v-btn color="secondary"
              >{{ $t('Tech profile') }}
              <v-icon class="ml-1">mdi-arrow-right-thick</v-icon>
            </v-btn>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="d-flex align-center pl-8 mb-8">
        <ThePageTitle>{{ $t('Me concernant') }}</ThePageTitle>
      </v-col>
    </v-row>
  </TheSection>
</template>

<script>
export default {
  computed: {
    flexStyle() {
      return this.$vuetify.breakpoint.mobile
        ? {
            'flex-direction': 'column-reverse',
          }
        : ''
    },
  },
}
</script>
