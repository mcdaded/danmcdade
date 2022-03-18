<template>
  <div class="w-full md:w-1/2 lg:w-1/3 px-4">
    <div class="max-w-[370px] mx-auto mb-10">
      <div class="rounded overflow-hidden -mb-1">
        <img
          v-if="imageSrc"
          :src="imageSrc"
          class="object-scale-down rounded-lg"
          :alt="imageAlt"
        />
      </div>
      <div
        class="flex flex-col bg-woodsmoke-700/70 rounded shadow-md shadow-secondary-300 p-6 about-container"
      >
        <div class="flex-grow">
          <h3>
            <a
              href="javascript:void(0)"
              class="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary"
            >
              {{ title }}
            </a>
          </h3>
          <p class="text-base text-body-color">
            {{ description }}
          </p>
        </div>
        <div class="mt-6 flex justify-end">
          <nuxt-link
            :to="contentLink"
            class="inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-primary-500 rounded-md hover:bg-primary-300 shadow-lg"
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

<style></style>
