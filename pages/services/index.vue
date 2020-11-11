<template>
  <div class="bg">
    <ThePageHeader :title="$t('Services')">
      <template v-slot:image> Image </template>
    </ThePageHeader>
    <v-container class="py-10">
      <ServiceFrontend />
      <v-divider class="bg-second" style="min-height: 3px"></v-divider>
      <ServiceBackend :reverse="true" />
      <v-divider class="bg-second" style="min-height: 3px"></v-divider>
      <ServiceMobile />
      <v-divider class="bg-second" style="min-height: 3px"></v-divider>
      <ServiceCmsIntegration :reverse="true" />
      <v-divider class="bg-second" style="min-height: 3px"></v-divider>
      <div class="d-flex justify-center py-16">
        <v-btn color="primary" class="text-capitalize"
          >{{ $t('Contact-me') }} <v-icon>mdi-arrow-right</v-icon></v-btn
        >
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: 'home',
}
</script>
