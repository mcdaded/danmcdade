<template>
  <div>
    <div
      class="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 max-w-7xl"
    >
      <div
        class="flex w-full items-center justify-around my-4 lg:w-1/2 lg:mx-4"
      >
        <div
          class="bg-woodsmoke-700/60 rounded-xl shadow-md shadow-secondary-300 p-6 content-container"
        >
          <subtitle class="dark:text-primary-50 text-lg">
            Hello! Thanks for checking out my site.
          </subtitle>
          <h1
            class="text-secondary-50 leading-none my-2 font-extrabold text-6xl tracking-tight"
          >
            I'm Dan McDade
          </h1>
          <subtitle
            class="dark:text-goldenFizz-50 leading-none text-xs font-mono tracking-tighter"
          >
            Entrepreneur | Investor | Data Scientist | Engineer | Product Leader
          </subtitle>
          <p class="dark:text-primary-50 leading-normal mt-4 text-lg">
            I am an experienced and passionate entrepreneur, data scientist,
            investor, and product leader. I am a driven, analytical, and have a
            passion for solving complex problems.
          </p>
          <div class="mt-6 flex justify-end">
            <nuxt-link
              to="/content"
              class="inline-block px-8 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-primary-700 rounded-md hover:bg-primary-500 shadow-lg"
            >
              READ MORE
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="flex w-full items-center justify-center my-4 lg:w-1/2">
        <img
          class="object-contain w-full max-w-2xl rounded-2xl lg:h-full shadow-lg shadow-secondary-300"
          src="~/assets/img/alaska-kayak.jpeg"
          alt="dan photo"
        />
      </div>
    </div>
    <div class="w-screen py-2 bg-ghostWhite/10 content-container">
      <div class="container mx-auto px-4 py-2">
        <div
          class="flex flex-col justify-between text-center items-baseline lg:text-left my-4 px-4 w-full"
        >
          <div
            class="flex flex-wrap justify-center text-center items-baseline lg:text-left px-4 w-full"
          >
            <div class="w-full sm:w-1/4 m-2 p-2">
              <LogosRipple />
            </div>
            <div class="w-full sm:w-1/4 m-2 p-2">
              <LogosPropheto />
            </div>
            <div class="w-full sm:w-1/4 m-2 p-2">
              <LogosHackademic />
            </div>
            <div class="w-full sm:w-1/4 m-2 p-2">
              <LogosPillar />
            </div>
            <div class="w-full sm:w-1/4 m-2 p-2">
              <LogosInsightSquared />
            </div>
            <div class="w-full sm:w-1/4 m-2 p-2">
              <LogosBraintree />
            </div>
        
            <div class="w-full sm:w-1/4 m-2 p-2">
              <LogosAccenture />
            </div>
          </div>
          <div
            class="flex flex-wrap justify-center text-center items-baseline lg:text-left py-4 px-4 w-full"
          >
            <div class="w-full sm:w-1/3 m-2 p-2">
              <LogosCarnegieMellon />
            </div>
            <div class="w-full sm:w-1/3 m-2 p-2">
              <LogosBU />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index-page',
}
</script>

<style scoped>
.content-container {
  backdrop-filter: blur(20px) saturate(2);
}
</style>
