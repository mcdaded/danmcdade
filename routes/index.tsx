export default function Home() {
  return (
    <div>
      <div class="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 max-w-7xl">
        <div class="flex w-full items-center justify-around my-4 lg:w-1/2 lg:mx-4">
          <div class="bg-woodsmoke-700 rounded-xl shadow-md shadow-secondary-300 p-6 content-container bg-opacity-60">
            <p class="dark:text-primary-50 text-lg">
              Hello! Thanks for checking out my site.
            </p>
            <h1 class="text-secondary-50 leading-none my-2 font-extrabold text-6xl tracking-tight">
              I'm Dan McDade
            </h1>
            <p class="dark:text-goldenFizz-50 leading-none text-xs font-mono tracking-tighter">
              Entrepreneur | Investor | Data Scientist | Engineer | Product
              Leader
            </p>
            <p class="dark:text-primary-50 leading-normal mt-4 text-lg">
              I am an experienced and passionate entrepreneur, data scientist,
              investor, and product leader. I am driven, analytical, and have
              a passion for solving complex problems.
            </p>
            <div class="mt-6 flex justify-end">
              <a
                href="/blog"
                class="inline-block px-8 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-primary-700 rounded-md hover:bg-primary-500 shadow-lg"
              >
                READ MORE
              </a>
            </div>
          </div>
        </div>
        <div class="flex w-full items-center justify-center my-4 lg:w-1/2">
          <img
            class="object-contain w-full max-w-2xl rounded-2xl lg:h-full shadow-lg shadow-secondary-300"
            src="@/assets/img/alaska-kayak.jpeg"
            alt="dan photo"
          />
        </div>
      </div>
    </div>
    // <div class="px-4 py-8 mx-auto index-bg w-full">
    //   TEST
    // </div>
  );
}
