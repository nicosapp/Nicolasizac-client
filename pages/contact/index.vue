<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <p class="text-h4 font-weight-bold">{{ $t('Contact info') }}</p>
        <v-list>
          <v-list-item>
            <v-list-item-icon><v-icon>mdi-map-marker</v-icon></v-list-item-icon>
            <v-list-item-title>Paris</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon><v-icon>mdi-email</v-icon></v-list-item-icon>
            <v-list-item-title>
              <nuxt-link :to="`mailto:${email}`">
                {{ email }}
              </nuxt-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-iem>
            <SocialIcons />
          </v-list-iem>
        </v-list>
      </v-col>
      <v-col cols="12" md="8">
        <v-form ref="form" v-model="valid" @submit.prevent="send">
          <v-text-field
            v-model="form.firstname"
            filled
            prepend-inner-icon="mdi-account"
            :rules="[rules.required]"
            :label="$t('Prénom')"
          ></v-text-field>
          <v-text-field
            v-model="form.lastname"
            filled
            prepend-inner-icon="mdi-account"
            :rules="[rules.required]"
            :label="$t('Nom')"
          ></v-text-field>
          <v-text-field
            v-model="form.phone"
            type="number"
            filled
            prepend-inner-icon="mdi-phone"
            :rules="[rules.required]"
            :label="$t('N° de téléphone')"
          ></v-text-field>
          <v-text-field
            v-model="form.email"
            filled
            prepend-inner-icon="mdi-email"
            :rules="[rules.required, rules.emailValid]"
            :label="$t('E-mail')"
          ></v-text-field>
          <v-textarea
            v-model="form.message"
            :label="$t('Message')"
            :rules="[rules.required]"
            filled
            prepend-inner-icon="mdi-message-text"
          >
          </v-textarea>
          <v-btn
            large
            class="text-capitalize"
            style="font-size: 1.2rem"
            color="primary"
            dark
            :disabled="!valid || loading"
            :loading="loading"
          >
            {{ $t('Engoyer') }} <v-icon class="ml-2">mdi-send</v-icon>
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { rulesTextField as rules } from '@/plugins/formValidation'
export default {
  data() {
    return {
      loading: false,
      valid: true,
      email: 'nicolas.izac.app@gmail.com',
      rules,
      form: {
        firstname: '',
        lastname: '',
        phone_number: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    send() {
      this.loading = true
      console.log(this.form)
    },
  },
}
</script>
