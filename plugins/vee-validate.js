import Vue from 'vue'
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  defineRule,
} from 'vee-validate'

import {
  required,
  email,
  alpha_spaces,
  oneOf,
  is,
} from 'vee-validate/dist/rules'

// Add the required rule
extend('required', {
  ...required,
  message: (field) => `${field} is required.`,
})

extend('alpha', {
  ...alpha_spaces,
  message: 'This field must only contain alphabetic characters',
})

extend('is', {
  ...is,
  message: 'This field must be the correct value',
})

// Add the email rule
extend('email', {
  ...email,
  message: 'Please enter a valid email address',
})

extend('oneOf ', {
  ...oneOf,
  message: 'Choose one',
})

// Add the phone rule
extend('phone', (value) => {
  if (!value || !value.length) {
    return true
  }

  // Check if email
  if (!/^[2-9]\d{2}[2-9]\d{2}\d{4}$/.test(value)) {
    return 'This field must be a valid phone number'
  }

  return true
})

// Add the phone rule
extend('minLength', (value, [limit]) => {
  // The field is empty so it should pass min:8
  if (!value || !value.length) {
    return true
  }

  if (value.length < limit) {
    return `This field must be at least ${limit} characters`
  }

  return true
})

// defineRule('confirmed', (value, [target], ctx) => {
//   // <Field name="password" rules="required" />
//   // <Field name="confirmation" rules="required|confirmed:password" />
//   if (value === ctx.form[target]) {
//     return true
//   }

//   return 'Passwords must match'
// })

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
