<template>
  <div>
    <v-divider class="my-4"></v-divider>
    <div class="d-flex align-items-center justify-space-between">
      <v-btn
        v-if="showSocialBtn('google')"
        type="button"
        height="3rem"
        class="mb-3"
        @click="signin('google')"
      >
        <v-img
          :src="require('~/assets/images/icon-google.png')"
          height="20"
          width="20"
        />
        Google
      </v-btn>
      <v-btn
        v-if="showSocialBtn('github')"
        type="button"
        class="black white--text"
        height="3rem"
        @click="signin('github')"
      >
        <v-icon>mdi-github</v-icon>
        GitHub
      </v-btn>
      <v-btn
        v-if="showSocialBtn('facebook')"
        type="button"
        class="blue darken-2 white--text"
        height="3rem"
        @click="signin('facebook')"
      >
        <v-icon>mdi-facebook</v-icon>
        Facebook
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    login: {
      type: Boolean,
      default: true,
      required: false,
    },
    socials: {
      type: Array,
      required: false,
      default: () => ['google'],
    },
  },
  methods: {
    showSocialBtn(social) {
      return this.socials.includes(social)
    },
    async signin(provider) {
      try {
        const response = await this.$axios.$get(
          `${process.env.appUrl}/login/${provider}`
        )
        console.log(response)
        window.location = response.data.url
      } catch (e) {
        if (e.response && e.response.status === 422) {
          this.$notifier.error({ message: e.response.data.message })
          return
        }
        this.$notifier.error500()
      }
    },
  },
}
</script>

<style scoped lang="scss">
.v-btn {
  .v-icon,
  .v-image {
    margin-right: 10px;
  }
}
</style>
