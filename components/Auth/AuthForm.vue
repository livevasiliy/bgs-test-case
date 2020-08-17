<template>
  <v-card-text>
    <v-form>
      <v-text-field
        label="Login"
        name="username"
        prepend-icon="mdi-account"
        type="text"
        v-model.trim="username"
        :error-messages="usernameErrors"
        required
        @input="$v.username.$touch()"
        @blur="$v.username.$touch()"
      ></v-text-field>

      <v-text-field
        id="password"
        label="Password"
        name="password"
        prepend-icon="mdi-lock"
        type="password"
        v-model.trim="password"
        :error-messages="passwordErrors"
        :counter="10"
        required
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
      ></v-text-field>
      <AuthFormAction :submit-handle="submit"/>
    </v-form>
  </v-card-text>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, minLength } from 'vuelidate/lib/validators'
  import AuthFormAction from './AuthFormAction'
  export default {
    name: 'AuthForm',
    components: { AuthFormAction },
    mixins: [validationMixin],
    validations: {
      username: { required },
      password: { required, minLength: minLength(6), maxLength: maxLength(10) },
    },
    data: () => ({
      username: '',
      password: '',
    }),
    methods: {
      async submit () {
        this.$v.$touch()
        const user = await this.getUserByAuthCredentials(this.$v.username.$model)
        if (user.length > 0) {
          if (user[0].password === this.$v.password.$model) {
            this.$store.dispatch('login')
            await this.$router.push(`/users/${+user[0].id}`)
          } else {
            this.$store.dispatch('setError', 'Not correct login or password')
          }
        }
        if (user.length === 0) {
          this.$store.dispatch('setError', 'User not exist with this auth credentials')
        }
      },
      async getUserByAuthCredentials (username) {
        return await this.$axios.get(`users?username=${username}`).
          then((response) => {
            return response.data
          }).
          catch((error) => {
            return error.response.data
          })
      },
    },
    computed: {
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.minLength && errors.push('Password must be at less at 6 characters long')
        !this.$v.password.maxLength && errors.push('Password must be at most 10 characters long')
        !this.$v.password.required && errors.push('Password is required.')
        return errors
      },
      usernameErrors () {
        const errors = []
        if (!this.$v.username.$dirty) return errors
        !this.$v.username.required && errors.push('Username is required')
        return errors
      },
    },
  }
</script>

<style scoped></style>
