<template>
  <v-expand-transition>
    <TheContainer
      v-if="visible"
      class="cookie-container elevation-6 white py-4"
      :class="{ 'px-4': $vuetify.breakpoint.mobile }"
      transition="slide-y-transition"
    >
      <div class="d-flex align-center">
        <div>
          <v-icon large color="brown lighten-1" height="20" width="20"
            >mdi-cookie</v-icon
          >
        </div>
        <div class="flex-grow-1 text-justify px-3">
          <div
            class="d-flex justify-space-between align-center"
            :class="{ 'flex-column': $vuetify.breakpoint.mobile }"
          >
            <div>
              {{ $t('cookies.sentence.before') }}
              <PrivacyDialog>
                {{ $t('cookies.privacy_policy_link') }}</PrivacyDialog
              >
              {{ $t('cookies.sentence.after') }}
            </div>
            <div
              class="text-center"
              :class="{ 'mt-2': $vuetify.breakpoint.mobile }"
            >
              <v-btn color="primary" @click="accept">
                {{ $t('accept') }}
              </v-btn>
              <v-btn text @click="refuse"> {{ $t('refuse') }} </v-btn>
            </div>
          </div>
        </div>
      </div>
    </TheContainer>
  </v-expand-transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { bootstrap } from 'vue-gtag'

export default {
  computed: {
    ...mapGetters({
      visibleValue: 'cookies/visible',
    }),
    visible: {
      get() {
        return this.visibleValue
      },
      set(newValue) {
        this.setVisible(newValue)
      },
    },
  },
  created() {
    if (!!this.getGDPR() === true) {
      this.visible = false
    }
  },
  methods: {
    ...mapActions({
      setVisible: 'cookies/setVisible',
    }),
    refuse() {
      this.visible = false
      if (process.browser) {
        localStorage.setItem('GDPR:accepted', false)
      }
    },
    accept() {
      if (process.browser) {
        bootstrap().then((gtag) => {
          this.visible = false
          localStorage.setItem('GDPR:accepted', true)
          location.reload()
        })
      }
    },
    getGDPR() {
      if (process.browser) {
        return localStorage.getItem('GDPR:accepted', true)
      }
    },
  },
}
</script>

<style scoped lang="scss">
.cookie-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99999999;
}
</style>
