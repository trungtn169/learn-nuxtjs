<template>
  <v-row justify="center" align="start">
    <v-col cols="12" class="mt-10">
      <h2 class="text-center primary--text text-uppercase">Sign Up</h2>
    </v-col>
    <v-col cols="6" class="mx-auto">
      <validation-observer ref="observer">
        <form>
          <validation-provider
            v-slot="{ errors }"
            name="Your name"
            rules="required|max:20"
          >
            <v-text-field
              v-model="name"
              :counter="20"
              :error-messages="errors"
              placeholder="Full Name"
              required
            ></v-text-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="Email"
            rules="required|email"
          >
            <v-text-field
              v-model="email"
              :error-messages="errors"
              placeholder="E-mail"
              required
            ></v-text-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="User name"
            rules="required|max:10"
          >
            <v-text-field
              v-model="userName"
              :counter="10"
              :error-messages="errors"
              placeholder="User Name"
              required
            ></v-text-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="Password"
            rules="required|min:6|max:12"
          >
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show1 = !show1"
              :error-messages="errors"
              placeholder="Password"
              :type="show1 ? 'text' : 'password'"
              required
            ></v-text-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="Confirm password"
            rules="confirm:@password"
          >
            <v-text-field
              v-model="confirm"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show2 = !show2"
              :error-messages="errors"
              placeholder="Confirm your password"
              :type="show2 ? 'text' : 'password'"
            ></v-text-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            rules="required"
            name="Terms, policy and conditions"
          >
            <v-checkbox
              v-model="checkbox"
              :error-messages="errors"
              value="1"
              type="checkbox"
              required
            >
              <div slot="label">
                Agree with our
                <nuxt-link to="/terms">Terms and Condition</nuxt-link>
              </div>
            </v-checkbox>
          </validation-provider>

          <div class="text-center">
            <v-btn class="mt-10" @click="submit" color="primary">
              submit
            </v-btn>
          </div>
        </form>
      </validation-observer>
    </v-col>
  </v-row>
</template>

<script>
import { required, email, max, min } from 'vee-validate/dist/rules'
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from 'vee-validate'

setInteractionMode('eager')
extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})
extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
})
extend('min', {
  ...min,
  message: '{_field_} may not be less than {length} characters',
})
extend('email', {
  ...email,
  message: 'Email must be valid',
})
extend('confirm', {
  params: ['target'],
  validate(value, { target }) {
    return value === target
  },
  message: 'Password confirmation does not match',
})
export default {
  name: 'SignupPage',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  layout: 'homepage',
  data() {
    return {
      name: '',
      email: '',
      userName: '',
      password: '',
      confirm: '',
      checkbox: null,
      show1: false,
      show2: false,
    }
  },
  methods: {
    async submit() {
      const valid = await this.$refs.observer.validate()
      console.log(valid)
      this.$refs.observer.$el.querySelector('.error--text input').focus()
    },
    clear() {
      this.name = ''
      this.email = ''
      this.userName = ''
      this.password = ''
      this.confirm = ''
      this.checkbox = null
      this.$refs.observer.reset()
    },
  },
  head() {
    return {
      title: 'Signup',
    }
  },
}
</script>
