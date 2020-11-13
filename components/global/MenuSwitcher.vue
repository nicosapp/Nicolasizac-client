<template>
  <v-menu
    open-on-hover
    offset-y
    left
    min-width="170px"
    z-index="9999"
    transition="scroll-y-transition"
  >
    <template v-slot:activator="{ on, attrs, value }">
      <v-btn v-bind="attrs" text v-on="on">
        <v-icon color="icon-active">mdi-cog</v-icon>
        <v-icon
          class="ml-1 menu-chevron"
          color="icon-active"
          :class="{ open: value }"
          small
          >mdi-chevron-down</v-icon
        >
      </v-btn>
    </template>

    <v-list>
      <v-list-item>
        <v-checkbox
          v-model="darkMode"
          class="mt-0"
          hide-details
          color="primary"
          small
          inset
          label="Dark mode"
        ></v-checkbox>
      </v-list-item>
      <v-subheader class="bg-second font-weight-medium">Langue</v-subheader>
      <v-list-item @click.prevent="switchLanguage('fr')">
        <v-list-item-title class="text-capitalize d-flex align-center">
          <IconFlagFr height="20" width="20" class="mr-2" />
          {{ $t('français') }}
        </v-list-item-title>
      </v-list-item>

      <v-list-item @click.prevent="switchLanguage('en')">
        <v-list-item-title class="text-capitalize d-flex align-center">
          <IconFlagEn height="20" width="20" class="mr-2" />{{ $t('Anglais') }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false,
    }
  },
  watch: {
    darkMode(dark) {
      this.$vuetify.theme.dark = dark
    },
  },
  methods: {
    switchLanguage(code) {
      this.$i18n.setLocale(code)
    },
  },
}
</script>

<style scoped>
.menu-chevron {
  transition: all 0.4s ease-in-out;
}
.menu-chevron.open {
  transform: rotate(-180deg);
}
</style>
