<template>
  <div class="text-ghostWhite-500 container px-6 py-4 mx-auto lg:h-128 lg:py-8">
    <h1 class="text-6xl font-black text-center pb-6">Recent Posts</h1>
    <hr class="pb-4" />
    <section class="py-4 flex flex-wrap min-h-80 w-full mb-8">
      <ContentCard
        v-for="(article, index) in articles"
        v-bind:key="index + article.title"
        :title="article.title"
        :description="article.description"
        :image="article.image"
        :imageAlt="article.imageAlt"
        :link="article.slug"
      />
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
