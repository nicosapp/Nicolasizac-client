<template>
  <ThePageTemplate class="bg">
    <template v-slot:header>
      <ThePageHeader :title="$t('Services')">
        <!-- <template v-slot:image> Image </template> -->
      </ThePageHeader>
    </template>

    <template v-slot:default>
      <div class="pt-8">
        <ServiceFrontend />
        <v-divider class="bg-second" style="min-height: 3px"></v-divider>
        <ServiceBackend :text-left="false" />
        <v-divider class="bg-second" style="min-height: 3px"></v-divider>
        <ServiceMobile />
        <v-divider class="bg-second" style="min-height: 3px"></v-divider>
        <ServiceCmsIntegration :text-left="false" />
        <v-divider class="bg-second" style="min-height: 3px"></v-divider>
        <div class="d-flex justify-center py-16">
          <v-btn
            style="font-size: 1.2rem"
            class="text-capitalize bg-gradient-primary"
            large
            dark
            to="contact"
            >{{ $t('Contact-me') }}
            <v-icon class="mr-2">mdi-arrow-right-thick</v-icon></v-btn
          >
        </div>
      </div>
    </template>
  </ThePageTemplate>
</template>

<script>
export default {
  layout: 'home',
  head() {
    return {
      title: this.$i18n.t('pages.services.title'),
      meta: [
        {
          property: 'og:title',
          content: this.$i18n.t('pages.services.title'),
          hid: 'og:title',
        },
        {
          property: 'og:description',
          content: this.$i18n.t('pages.services.description'),
          hid: 'og:description',
        },
      ],
    }
  },
}
</script>
