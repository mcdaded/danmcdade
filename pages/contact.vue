<template>
  <div
    class="bg-woodsmoke-700/30 rounded-xl my-0 pt-2 md:pt-4 md:my-4 mx-auto px-2 sm:px-8 shadow-md shadow-secondary-300 content-container"
  >
    <section class="py-6 px-4 text-center">
      <h1
        class="text-6xl mb-4 leading-tight font-black font-heading text-ghostWhite"
      >
        Get in touch
      </h1>
      <p class="max-w-2xl mx-auto mb-2 text-gray-300 text-lg">
        I am excited to hear from you! Please fill in the information below and
        I will get back to you as soon as possible
      </p>
      <p class="max-w-2xl mx-auto mb-2 text-gray-200 italic">
        Fields marked with an asterisk (*) are required.
      </p>
    </section>
    <section class="py-2">
      <div class="w-full max-w-2xl mx-auto px-6 md:px-0">
        <ValidationObserver ref="form">
          <form>
            <ValidationProvider
              rules="required|minLength:2"
              v-slot="{ errors }"
              vid="name"
              :persist="true"
              mode="lazy"
            >
              <div class="mb-4">
                <p class="w-full mx-auto mb-0 text-secondary-300">Your name*</p>
                <input
                  class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 rounded focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500"
                  :class="{
                    'ring-2 ring-red-200 border-red-500': hasErrors(errors),
                  }"
                  type="text"
                  placeholder="Name"
                  autocomplete="off"
                  v-model="form.name"
                />
                <transition name="error-fade">
                  <span
                    v-if="hasErrors(errors)"
                    class="text-sm text-red-500 absolute"
                  >
                    This field is required
                  </span>
                </transition>
              </div>
            </ValidationProvider>

            <ValidationProvider
              rules="required|email"
              v-slot="{ errors }"
              vid="email"
              :persist="true"
              mode="lazy"
            >
              <div class="mb-4">
                <label class="w-full mx-auto mb-0 text-secondary-300">
                  Email address*
                </label>
                <input
                  class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 rounded focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500"
                  :class="{
                    'ring-2 ring-red-200 border-red-500': hasErrors(errors),
                  }"
                  type="text"
                  placeholder="Email"
                  autocomplete="off"
                  v-model="form.email"
                />
                <transition name="error-fade">
                  <span
                    v-if="hasErrors(errors)"
                    class="text-sm text-red-500 absolute"
                  >
                    This field is required
                  </span>
                </transition>
              </div>
            </ValidationProvider>
            <ValidationProvider
              rules="required|minLength:2"
              v-slot="{ errors }"
              vid="message"
              :persist="true"
              mode="lazy"
            >
              <div class="mb-3">
                <div class="relative w-full mb-0">
                  <label
                    class="w-full mx-auto mb-0 text-secondary-300"
                    htmlFor="message"
                  >
                    Message*
                  </label>
                  <textarea
                    rows="6"
                    cols="80"
                    class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-gray-50 rounded boarder border border-gray-200 focus:outline-none w-full focus:border-primary-500 focus:ring-2 focus:ring-primary-500"
                    :class="{
                      'ring-2 ring-red-200 border-red-500': hasErrors(errors),
                    }"
                    placeholder="Type a message..."
                    v-model="form.message"
                  />
                </div>
                <transition name="error-fade">
                  <span
                    v-if="hasErrors(errors)"
                    class="text-sm text-red-500 absolute"
                  >
                    This field is required
                  </span>
                </transition>
              </div>
            </ValidationProvider>

            <div class="mb-12 mt-3 text-center">
              <span
                class="w-full md:w-auto md:inline-flex rounded-md shadow-sm"
              >
                <button
                  type="button"
                  class="w-full text-center items-center mt-4 sm:py-3 sm:mt-6 px-16 py-4 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-500 hover:bg-primary-700 focus:border-primary-700 focus:outline-none active:bg-primary-700 transition ease-in-out duration-150"
                  @click.prevent="onSubmit()"
                >
                  <span v-show="!showProcessing">SEND MESSAGE</span>
                  <span
                    v-show="showProcessing"
                    class="w-full inline-flex items-center justify-around"
                  >
                    <svg
                      class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    PROCESSING
                  </span>
                </button>
              </span>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </section>
    <div v-if="showSpinner">
      <LoadingSpinner />
    </div>
    <div v-else-if="notification.show">
      <AlertComponent
        :type="notification.type"
        :title="notification.title"
        :message="notification.message"
        @closeNotification="closeNotification"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuexfire'
import AlertComponent from '~/components/AlertComponent.vue'

export default {
  name: 'contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
      showProcessing: false,
      showSpinner: false,
      notification: {
        show: false,
        title: '',
        message: '',
        type: '',
      },
    }
  },
  methods: {
    cancel() {
      this.form = { name: '', email: '', message: '' }
      this.showSpinner = false
      this.closeNotification()
      this.$refs.form.reset()
    },
    closeNotification() {
      this.notification = {
        show: false,
        message: '',
        type: '',
        title: '',
      }
    },
    onSubmit() {
      this.showSpinner = true
      this.$refs.form.validate().then((success) => {
        if (!success) {
          this.showSpinner = false
          return
        }
        // this.saveContactForm()
        this.sendEmail()
        this.closeNotification()
        this.onReset()
      })
    },
    onReset() {
      this.cancel()
    },
    hasErrors(errors) {
      return errors.length > 0
    },
    saveContactForm() {
      this.$store
        .dispatch('createContactForm', this.form)
        .then(() => {
          this.showSpinner = false
          this.notification = {
            type: 'success',
            title: 'Success',
            message:
              'Your message was sent successfully. Someone from our team will get back to your shortly.',
            show: true,
          }
          setTimeout(() => {
            this.closeNotification()
          }, 2500)
        })
        .catch((error) => {
          console.error('Error adding document: ', error)
          this.showSpinner = false
          this.notification = {
            type: 'error',
            title: 'Error',
            message:
              'It appears that something went wrong. Please try again later.',
            show: true,
          }
          setTimeout(() => {
            this.closeNotification()
          }, 2500)
        })
      this.sendEmail(this.form)
    },
    sendEmail: async function (formData) {
      // https://e8g535.deta.dev/send-email
      await this.$axios
        .post('https://e8g535.deta.dev/send-email', {
          subject: this.form.name,
          sender_email: this.form.email,
          email_message: this.form.message,
        })
        .then(() => {
          this.showSpinner = false
          this.notification = {
            type: 'success',
            title: 'Success',
            message:
              'Your message was sent successfully. Someone from our team will get back to your shortly.',
            show: true,
          }
          setTimeout(() => {
            this.closeNotification()
          }, 2500)
        })
        .catch((error) => {
          console.error('Error adding document: ', error)
          this.showSpinner = false
          this.notification = {
            type: 'error',
            title: 'Error',
            message:
              'It appears that something went wrong. Please try again later.',
            show: true,
          }
          setTimeout(() => {
            this.closeNotification()
          }, 4000)
        })
      //
    },
  },
  components: { AlertComponent },
}
</script>

<style lang="postcss" scoped>
.content-container {
  backdrop-filter: blur(30px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.notifications {
  position: fixed;
  width: calc(100% - 2rem);
  z-index: var(--notifications-zindex);
  top: calc(1rem + var(--navigation-height));
  right: 1rem;
  left: 1rem;
}
@screen md {
  .notifications {
    max-width: 400px;
    width: 40vw;
    left: auto;
  }
}
/* purgecss start ignore */
.notifications-enter-active,
.notifications-leave-active {
  transition: opacity 0.9s ease, transform 0.9s ease;
}
.notifications-enter,
.notifications-leave-to {
  opacity: 0;
  transform: translateX(2rem);
}
.message-enter-active,
.message-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.message-enter,
.message-leave-to {
  opacity: 0;
  transform: translateY(-3rem);
}

.error-fade-enter-active,
.error-fade-leave-active {
  transition: opacity 0.6s;
}
.error-fade-enter, .error-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/* purgecss end ignore */
</style>
