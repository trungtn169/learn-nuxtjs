<template>
  <v-row justify="center" align="start">
    <v-col cols="12" class="mt-10">
      <h2 class="text-center primary--text text-uppercase">Login</h2>
    </v-col>
    <v-col cols="6" class="mx-auto">
      <validation-observer ref="observer">
        <form>
          <validation-provider
            v-slot="{ errors }"
            name="User name"
            rules="required"
          >
            <v-text-field
              v-model="userName"
              :error-messages="errors"
              placeholder="User Name"
              required
            ></v-text-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="Password"
            vid="password"
            rules="required"
          >
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :error-messages="errors"
              placeholder="Password"
              :type="show1 ? 'text' : 'password'"
              required
              @click:append="show1 = !show1"
            ></v-text-field>
          </validation-provider>
          <div class="text-center">
            <v-btn class="mt-10" color="primary" @click="submit">Login</v-btn>
          </div>
        </form>
      </validation-observer>
    </v-col>
  </v-row>
</template>

<script>
import { required } from 'vee-validate/dist/rules'
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from 'vee-validate'
import { mapActions, mapState } from 'vuex'
setInteractionMode('eager')
extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})
export default {
  name: 'LoginPage',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  layout: 'homepage',
  data() {
    return {
      userName: '',
      password: '',
      show1: false,
    }
  },
  head() {
    return {
      title: 'Login',
    }
  },
  computed: {
    ...mapState('modules/user', ['userLogged']),
  },
  watch: {
    userLogged(value) {
      if (value !== '') {
        this.$router.push('/')
      }
    },
  },
  methods: {
    ...mapActions('modules/user', ['getUserLogin']),
    async submit() {
      const valid = await this.$refs.observer.validate()
      if (!valid) {
        this.$refs.observer.$el.querySelector('.error--text input').focus()
      } else {
        this.getUserLogin({
          userName: this.userName,
          password: this.password,
        })
      }
    },
    clear() {
      this.userName = ''
      this.password = ''
      this.$refs.observer.reset()
    },
  },
}
</script>
