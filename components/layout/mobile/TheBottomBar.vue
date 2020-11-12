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
      shift
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

        <v-icon>{{ nav.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      model: 'index',
      items: [
        { name: this.$i18n.t('Home'), to: 'index', icon: 'mdi-home-outline' },
        {
          name: this.$i18n.t('Services'),
          to: 'services',
          icon: 'mdi-handshake-outline',
        },
        {
          name: this.$i18n.t('Projects'),
          to: 'projects',
          icon: 'mdi-book-education-outline',
        },
        {
          name: this.$i18n.t('Profile'),
          to: 'tech-profile',
          icon: 'mdi-account-tie-outline',
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      activeValue: 'bottomBar/active',
    }),
    verified() {
      return this.$auth.loggedIn && this.$auth.user.is_verified
    },
    active: {
      get() {
        return this.activeValue
      },
      set(activeValue) {
        this.setActive(activeValue)
      },
    },
  },

  methods: {
    ...mapActions({
      setActive: 'bottomBar/setActive',
    }),

    pushRoute(active, route) {
      this.setActive(active)
      this.$router.push({
        name: route,
      })
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
