<template>
  <ThePageTemplate class="bg">
    <template v-slot:header>
      <ThePageHeader :title="$t('Contact')">
        <!-- <template v-slot:image> Image </template> -->
      </ThePageHeader>
    </template>

    <template v-slot:default>
      <v-row class="py-16">
        <v-col cols="12" md="4">
          <p
            class="text-h4 font-weight-bold"
            :class="{ 'text-center': $vuetify.breakpoint.mobile }"
          >
            {{ $t('Contact info') }}
          </p>
          <v-list dense>
            <v-list-item>
              <v-list-item-icon
                ><v-icon>mdi-map-marker</v-icon></v-list-item-icon
              >
              <v-list-item-title
                class="font-weight-medium"
                style="font-size: 1rem"
                >Paris</v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-icon><v-icon>mdi-email</v-icon></v-list-item-icon>
              <v-list-item-title
                class="font-weight-medium"
                style="font-size: 1rem"
              >
                <nuxt-link :to="`mailto:${email}`">
                  {{ email }}
                </nuxt-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <SocialIcons style="width: 100%" />
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="8">
          <v-alert
            v-if="sent"
            border="left"
            type="primary"
            transition="scale-transition"
            icon="mdi-send-check"
            prominent
            >{{ $t('contact_message_sent_success') }}</v-alert
          >
          <v-form v-else ref="form" v-model="valid" @submit.prevent="send">
            <v-text-field
              v-model="form.name"
              filled
              prepend-inner-icon="mdi-account"
              :rules="[rules.required]"
              :label="$t('Name')"
              :error-messages="validation.name"
              @input="validation.name = null"
            ></v-text-field>
            <v-text-field
              v-model="form.enterprise"
              filled
              prepend-inner-icon="mdi-account"
              :label="$t('Enterprise')"
              :error-messages="validation.enterprise"
              @input="validation.enterprise = null"
            ></v-text-field>

            <niz-tel-text-field
              v-model="form.phone_number"
              :label="$t('Phone number')"
            >
            </niz-tel-text-field>
            <v-text-field
              v-model="form.email"
              filled
              prepend-inner-icon="mdi-email"
              :rules="[rules.required, rules.emailValid]"
              :label="$t('E-mail')"
              :error-messages="validation.email"
              @input="validation.email = null"
            ></v-text-field>
            <v-textarea
              v-model="form.message"
              :label="$t('Message')"
              :rules="[rules.required]"
              filled
              auto-grow
              prepend-inner-icon="mdi-message-text"
              :error-messages="validation.message"
              @input="validation.message = null"
            >
            </v-textarea>
            <v-btn
              large
              class="bg-gradient-primary text-capitalize"
              style="font-size: 1.2rem"
              dark
              type="submit"
              :disabled="!valid || loading"
              :loading="loading"
              @click="validate"
            >
              {{ $t('Engoyer') }} <v-icon class="ml-2">mdi-send</v-icon>
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </template>
  </ThePageTemplate>
</template>

<script>
import NizTelTextField from '@/components/FormInput/NizTelTextField/index'
import { rulesTextField as rules } from '@/plugins/formValidation'
export default {
  layout: 'home',
  components: {
    NizTelTextField,
  },
  data() {
    return {
      loading: false,
      valid: true,
      email: 'nicolas.izac.app@gmail.com',
      rules,
      validation: {},
      form: {
        name: '',
        enterprise: '',
        phone_number: '',
        email: '',
        message: '',
      },
      sent: false,
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    async send() {
      this.loading = true
      try {
        await this.$axios.$post('contact/me', this.form)
        this.sent = true
      } catch (e) {
        if (e.response) {
          if (e.response.status === 429)
            this.$notifier.warn({ message: 'Too many request' })
          else if (e.response.status === 429)
            this.validation = e.response.data.errors
          else this.$notifier.error500()
        } else this.$notifier.error500()
      }
      this.loading = false
    },
  },
  head() {
    return {
      title: this.$i18n.t('Contact'),
    }
  },
}
</script>
