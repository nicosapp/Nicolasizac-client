<template>
  <v-alert
    v-model="visible"
    text
    dismissible
    border="left"
    :type="type"
    transition="scale-transition"
  >
    {{ message }}
  </v-alert>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      visibleValue: 'alert/visible',
      type: 'alert/type',
      message: 'alert/message',
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
      setVisible: 'alert/setVisible',
    }),
  },
}
</script>
