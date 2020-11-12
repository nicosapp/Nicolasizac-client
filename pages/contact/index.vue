<template>
  <div class="bg">
    <ThePageHeader :title="$t('Contact')">
      <template v-slot:image> Image </template>
    </ThePageHeader>
    <v-container class="py-10">
      <v-row>
        <v-col cols="12" md="4">
          <p class="text-h4 font-weight-bold">{{ $t('Contact info') }}</p>
          <v-list>
            <v-list-item>
              <v-list-item-icon
                ><v-icon>mdi-map-marker</v-icon></v-list-item-icon
              >
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
            <v-list-item>
              <SocialIcons style="width: 100%" />
            </v-list-item>
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

            <niz-tel-text-field
              v-model="form.phone"
              :rules="[rules.required]"
              :label="$t('N° de téléphone')"
            >
            </niz-tel-text-field>
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
    </v-container>
  </div>
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
      form: {
        firstname: '',
        lastname: '',
        phone: '',
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
      try {
        console.log(this.form)
      } catch (e) {}
      this.loading = false
    },
  },
}
</script>
