<template>
  <article
    class="container mx-auto prose-lg lg:prose-xl dark:prose-invert px-6 py-8 my-8 mb-24 max-w-full xl:max-w-5xl text-ghostWhite bg-woodsmoke-700/30 rounded-xl content-container shadow-md shadow-secondary-300"
  >
    <nuxt-link
      to="/content"
      class="hidden sm:block text-secondary-100 no-underline"
    >
      <button
        class="inline-flex items-center py-2 px-4 rounded hover:bg-secondary-50 hover:text-secondary-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-4 w-4 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <span>BACK</span>
      </button>
    </nuxt-link>
    <!-- TAGS PLACEHOLDER -->
    <h1
      class="text-5xl font-extrabold tracking-tight sm:text-4xl text-center text-primary-100 mb-8 mt-4;"
    >
      {{ article.title }}
    </h1>
    <img
      v-if="imageSrc"
      :src="imageSrc"
      class="object-scale-down w-full h-96 bg-center rounded-lg my-8"
      :imageAlt="imageAlt"
    />

    <p class="text-md text-secondary-200 mb-4 leading-tight">
      {{ article.author }}
      <br />
      Article published: {{ formatDate(article.date) }}
    </p>
    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()
    return { article }
  },
  name: 'ArticleSlug',
  computed: {
    imageSrc() {
      if (this.article.image) {
        const imageName = this.article.image
        return require(`~/assets/${imageName}`)
      }
      else {
        return
      }
    },
    imageAlt() {
      return this.article.imageAlt
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.article.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.article.description,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://danmcdade.com/content/blog/${this.$route.params.slug}`,
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: `https://danmcdade.com/content/blog/${this.$route.params.slug}`,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `https://danmcdade.com/${this.article.image}`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://danmcdade.com/${this.article.image}`,
        },
        {
          property: 'article:published_time',
          content: this.article.createdAt,
        },
        {
          property: 'article:modified_time',
          content: this.article.updatedAt,
        },
        {
          property: 'article:tag',
          content: this.article.tags ? this.article.tags.toString() : '',
        },
        { name: 'twitter:label1', content: 'Written by' },
        { name: 'twitter:data1', content: this.article.author },
        // { name: 'twitter:label2', content: 'Filed under' },
        // {
        //   name: 'twitter:data2',
        //   content: this.article.tags ? this.article.tags.toString() : '',
        // },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://danmcdade.com/content/blog/${this.$route.params.slug}`,
        },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
.content-container {
  backdrop-filter: blur(30px);
}
a.nuxt-link-exact-active {
  @apply text-primary-500 hover:text-primary-700 font-bold border-b-0 border-primary-500 hover:border-primary-700 px-1 py-1 opacity-100;
}
a {
  @apply text-primary-500 hover:text-primary-700 underline;
}

</style>
