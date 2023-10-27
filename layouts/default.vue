<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen min-w-screen flex flex-col relative">
    <!-- <div
      class="min-h-screen w-full absolute z-50 bg-white/30 flex flex-col items-center justify-center backdrop-opacity-30 backdrop-blur-3xl"
      v-if="showLoading"
    >
      <LoadingSpinner class="text-black" />
    </div> -->
    <!-- <Transition
      enter-active-class="duration-300 ease-out opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-to-class="opacity-0"
    >
      <BannerStatus v-if="showBanner" />
    </Transition> -->
    <main class="min-h-screen min-w-screen flex flex-col">
      <Navbar class="w-screen bg-gray-200 grow-0" />
      <slot class="grow mx-auto min-h-max" />
      <!-- <AppFooter class="grow-0" /> -->
    </main>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
#page-container {
  position: relative;
}
#content-wrap {
  /* padding-top: 100px; */
  padding-bottom: 150px; /* Footer height */
}
/* .fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-300 ease-out;
}
.fade-enter,
.fade-leave-active {
  @apply opacity-0;
} */
</style>
