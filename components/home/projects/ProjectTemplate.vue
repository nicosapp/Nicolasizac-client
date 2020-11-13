<template>
  <v-card class="py-4 px-3 px-sm-8 mx-4 mx-sm-0" :class="`${bgClass}`">
    <v-row :class="{ 'flex-row-reverse': reverse }">
      <v-col cols="12" md="5">
        <div class="font-weight-bold mb-4" style="font-size: 2rem">
          {{ title }}
        </div>
        <div class="text-justify">
          <slot />
        </div>

        <div class="mt-4 font-weight-bold">
          <div v-if="linkGithubBackend || linkGithubClient" class="mb-2">
            <template v-if="linkGithubBackend && linkGithubClient">
              <a
                v-if="linkGithubClient"
                target="_blank"
                :href="linkGithubClient"
              >
                Github Client
              </a>
              /
              <a
                v-if="linkGithubBackend"
                target="_blank"
                :href="linkGithubBackend"
              >
                Github Backend
              </a>
            </template>
            <a
              v-else-if="linkGithubClient"
              target="_blank"
              :href="linkGithubClient"
            >
              Github
            </a>
          </div>

          <a v-if="linkDemo" target="_blank" class="d-block" :href="linkDemo">
            Demo / Documentation
          </a>
          <div v-if="chips.length" class="mt-4">
            <v-btn
              v-for="(chip, index) in chips"
              :key="index"
              color="primary"
              rounded
              small
              class="mb-2 mr-2 text-capitalize"
            >
              {{ chip }}
            </v-btn>
          </div>
        </div>
      </v-col>

      <v-col cols="12" md="7">
        <slot name="images" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    bgClass: {
      required: false,
      type: String,
      default: 'bg',
    },
    textFirst: {
      type: Boolean,
      required: false,
      default: true,
    },
    title: {
      required: true,
      type: String,
    },
    linkGithubClient: {
      required: false,
      type: String,
      default: null,
    },
    linkGithubBackend: {
      required: false,
      type: String,
      default: null,
    },
    linkDemo: {
      required: false,
      type: String,
      default: null,
    },
    chips: {
      required: false,
      type: Array,
      default: () => [],
    },
  },
  computed: {
    reverse() {
      return this.$vuetify.breakpoint.mobile ? false : !this.textFirst
    },
  },
}
</script>
<style scoped>
.v-card {
  border-radius: 1rem !important;
}
</style>
