<template>
  <div id="page-container" class="min-h-screen w-full flex flex-col index-bg-color-shades">
    <main
      class="min-h-screen w-full flex flex-col overflow-clip index-bg"
    >
      <Navbar class="flex-initial bg-transparent" />
      <Nuxt id="" class="flex-grow" />
      <AppFooter class="flex-initial" id="footer" />
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

.index-bg {
  background-image: url('~/assets/img/BackgroundBGY.png');
  background-size: 100% auto;
  background-repeat: repeat-y;
}
.index-bg-color-shades {
  background: rgb(3, 3, 7);
  background: linear-gradient(
    45deg,
    rgba(3, 3, 7, 1) 0%,
    rgba(18, 44, 47, 1) 70%,
    rgba(62, 94, 112, 1) 100%
  );
}
</style>
