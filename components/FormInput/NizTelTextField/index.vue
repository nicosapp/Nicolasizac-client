<template>
  <div class="niz-tel-text-field d-flex align-center">
    <v-select
      v-model="dialCode"
      style="flex: 0 1"
      :items="countries"
      :label="$t('Country code')"
      filled
      item-value="dialCode"
      item-text="name"
      :menu-props="menuProps"
    >
      <template v-slot:selection="{ item }">
        <div class="d-flex align-center">
          <div
            class="mr-2"
            :class="['niz__flag', item.iso2.toLowerCase()]"
          ></div>
          <div class="niz__country-code">+{{ item.dialCode }}</div>
        </div>
      </template>

      <template v-slot:item="{ item }">
        <div class="d-flex align-center">
          <div
            class="mr-2"
            :class="['niz__flag', item.iso2.toLowerCase()]"
          ></div>
          <div class="niz__country-code">{{ item.name }}</div>
        </div>
      </template>
    </v-select>

    <v-text-field
      ref="phoneNumber"
      v-model="phoneNumber"
      type="number"
      filled
      prepend-inner-icon="mdi-phone"
      :rules="rulesValidation"
      :label="label"
      :disabled="disabled"
    ></v-text-field>
  </div>
</template>

<script>
import { rulesTextField } from '@/plugins/formValidation'
import countries from './assets/all-countries'
export default {
  props: {
    value: {
      type: [Number, String],
      required: true,
    },
    label: {
      required: false,
      type: String,
      default: '',
    },
    rules: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      phoneNumber: this.value,
      dialCode: '33',
      countries,
    }
  },
  computed: {
    rulesValidation() {
      return [
        ...this.rules,
        rulesTextField.min(9, this.phoneNumber),
        rulesTextField.max(14, this.phoneNumber),
        rulesTextField.numeric,
      ]
    },
    menuProps() {
      return { 'max-width': 200 }
    },
    disabled() {
      return !this.dialCode
    },
    fullPhoneNumber() {
      return `+${this.dialCode}${this.phoneNumber}`
    },
  },
  watch: {
    phoneNumber() {
      this.input()
    },
    async dialCode() {
      this.input()
      await this.$nextTick()
      this.$refs.phoneNumber.focus()
    },
  },
  methods: {
    input() {
      this.$emit('input', this.fullPhoneNumber)
    },
  },
}
</script>

<style lang="scss">
@import './assets/sprite.css';
@import '~vuetify/src/styles/styles.sass';

.niz-tel-text-field {
  .v-select .v-input__slot {
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    border-right: solid 1px #{map-get(
        map-get($material-light, 'icons'),
        'inactive'
      )} !important;
  }
  .v-text-field .v-input__slot {
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
  }
}
</style>
