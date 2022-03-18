<template>
  <div class="mx-auto text-center text-ghostWhite">
    <h1 class="text-white text-5xl font-black" v-if="error.statusCode === 404">Page not found</h1>
    <h1 class="text-5xl font-black" v-else>An error occurred</h1>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style></style>
