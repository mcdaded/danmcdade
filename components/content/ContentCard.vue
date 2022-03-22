<template>
  <div class="w-full px-4">
    <div class="mx-auto mb-4">
      <div
        class="flex flex-col bg-woodsmoke-700/70 rounded shadow-md shadow-secondary-300 p-6 content-container"
      >
        <div class="flex-grow">
          <h3>
            <nuxt-link
              :to="contentLink"
              class="font-semibold text-xl sm:text-2xl lg:text-3xl mb-4 inline-block text-dark hover:text-primary"
            >
              {{ title }}
            </nuxt-link>
          </h3>
          <p class="text-base text-body-color">
            {{ description }}
          </p>
        </div>
        <div class="mt-6 flex justify-end">
          <nuxt-link
            :to="contentLink"
            class="inline-block px-8 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-primary-700 rounded-md hover:bg-primary-500 shadow-lg"
          >
            Read More
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'content-card',
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    link: {
      type: String,
    },
    image: {
      type: String,
    },
    imageAlt: {
      type: String,
    },
  },
  computed: {
    imageSrc() {
      if (this.image) {
        const imageName = this.image
        return require(`~/assets/${imageName}`)
      } else {
        return
      }
    },
    contentLink() {
      return '/content/' + this.link
    },
  },
}
</script>

<style scoped>
.content-container {
  backdrop-filter: blur(50px) saturate(1);
}
</style>
