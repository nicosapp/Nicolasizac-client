<template>
  <v-expand-transition>
    <div
      v-if="visible"
      class="cookie-container elevation-6 white px-6 py-4"
      transition="slide-y-transition"
    >
      <div class="d-flex align-center">
        <div class="px-6">
          <v-icon large color="brown lighten-1" height="20" width="20"
            >mdi-cookie</v-icon
          >
        </div>
        <div class="flex-grow-1">Cookies text!</div>
        <div>
          <v-btn color="primary" @click="visible = false"> Accept </v-btn>
          <v-btn color="primary" @click="visible = false"> Refuse </v-btn>
        </div>
      </div>
    </div>
  </v-expand-transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
  methods: {
    ...mapActions({
      setVisible: 'cookies/setVisible',
    }),
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
