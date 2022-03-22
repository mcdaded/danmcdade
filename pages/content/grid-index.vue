<template>
  <div class="text-ghostWhite-500 container px-6 py-4 mx-auto lg:h-128 lg:py-8">
    <h1 class="text-6xl font-black text-center pb-6">Recent Posts</h1>
    <hr class="pb-10" />
    <section class="py-4 flex flex-wrap min-h-80 w-full mb-8">
      <div class="rounded overflow-hidden mx-0 sm:mx-4 w-full sm:w-1/2">
        <img
          src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-03.jpg"
          alt="image"
          class="w-full"
        />
      </div>
      <div
        class="w-full sm:flex-1 flex flex-col px-4 mx-0 sm:mx-4 bg-woodsmoke-700/70 rounded shadow-md shadow-secondary-300 p-6 about-container"
      >
        <div class="flex-grow">
          <h3>
            <nuxt-link
              to="/content/hello"
              class="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary"
            >
              The no-fuss guide to upselling and cross selling
            </nuxt-link>
          </h3>
          <p class="text-base text-body-color">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div class="mt-6 flex justify-end">
          <nuxt-link
            to="/content/1"
            class="inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-primary-500 rounded-md hover:bg-primary-300 shadow-lg"
          >
            Read More
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="py-4">
      <div class="flex flex-wrap -mx-4">
        <ContentCard
          v-for="(article, index) in articles"
          v-bind:key="index + article.title"
          :title="article.title"
          :description="article.description"
          :image="article.image"
          :imageAlt="article.imageAlt"
          :link="article.slug"
        />
      </div>
    </section>
  </div>
</template>

<script>
import ContentCard from '~/components/content/ContentCard.vue'
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('blog', params.slug)
      .where({ published: true })
      .only(['title', 'description', 'image', 'slug', 'author', 'date'])
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      articles,
    }
  },
  components: { ContentCard },
}
</script>

<style></style>
