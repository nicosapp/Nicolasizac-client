<template>
  <div>
    <v-bottom-navigation
      v-if="$vuetify.breakpoint.mobile"
      grow
      app
      fixed
      class="bottomBar"
      color="primary"
      :min-width="0"
    >
      <v-btn
        v-for="nav in items"
        :key="nav.to"
        exact
        class="text-capitalize"
        :value="nav.to"
        :to="{ name: nav.to }"
      >
        <span>{{ nav.name }}</span>

        <v-icon>{{
          `${nav.icon}${isActive(nav.to) ? '' : '-outline'}`
        }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: this.$i18n.t('Home'), to: 'index', icon: 'mdi-home' },
        {
          name: this.$i18n.t('Services'),
          to: 'services',
          icon: 'mdi-handshake',
        },
        {
          name: this.$i18n.t('Projects'),
          to: 'projects',
          icon: 'mdi-book-education',
        },
        {
          name: this.$i18n.t('Profile'),
          to: 'tech-profile',
          icon: 'mdi-account-tie',
        },
      ],
    }
  },

  methods: {
    isActive(name) {
      return this.$route.name === name
    },
  },
}
</script>

<style scoped lang="scss">
.v-btn {
  min-width: 10px !important;
  padding: 0 !important;
}
</style>
