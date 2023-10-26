export default function Navbar() {
  return (
    <>
      <nav class="flex items-center justify-between px-2 pb-2 pt-2 md:py-4 container mx-auto max-w-7xl">
        {/* NAV LOGO */}
        <a
          href="/"
          class="block lg:inline-block text-primary-600 mr-10 border-b-0 border-none"
        >
          <div class="h-10 text-white">
            <svg
              viewBox="0 0 968 211"
              fill="none"
              class="text-white h-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2.5"
                y="2.5"
                width="397"
                height="206"
                stroke="currentColor"
                stroke-width="5"
              />
              <path
                d="M96.2449 156V53.76H135.557C146.885 53.76 156.341 56.064 163.925 60.672C171.605 65.184 177.365 71.328 181.205 79.104C185.141 86.784 187.109 95.328 187.109 104.736C187.109 115.104 184.949 124.128 180.629 131.808C176.405 139.488 170.405 145.44 162.629 149.664C154.949 153.888 145.925 156 135.557 156H96.2449ZM158.597 104.736C158.597 96.768 156.533 90.384 152.405 85.584C148.373 80.688 142.757 78.24 135.557 78.24H124.325V131.52H135.557C142.949 131.52 148.613 128.976 152.549 123.888C156.581 118.8 158.597 112.416 158.597 104.736Z"
                fill="currentColor"
              />
              <path
                d="M275.659 156V102.144L258.523 140.016H243.547L226.411 102.144V156H198.331V53.76H229.003L251.035 101.856L273.211 53.76H303.739V156H275.659Z"
                fill="currentColor"
                stroke="currentColor"
              />
              <path
                d="M440.104 83V14.84H464.872C472.296 14.84 478.504 16.376 483.496 19.448C488.488 22.456 492.232 26.552 494.728 31.736C497.224 36.856 498.472 42.552 498.472 48.824C498.472 55.736 497.096 61.752 494.344 66.872C491.592 71.992 487.688 75.96 482.632 78.776C477.576 81.592 471.656 83 464.872 83H440.104ZM485.128 48.824C485.128 44.408 484.328 40.536 482.728 37.208C481.128 33.816 478.824 31.192 475.816 29.336C472.808 27.416 469.16 26.456 464.872 26.456H453.352V71.384H464.872C469.224 71.384 472.904 70.424 475.912 68.504C478.92 66.52 481.192 63.832 482.728 60.44C484.328 56.984 485.128 53.112 485.128 48.824ZM524.726 14.84H538.166L563.222 83H549.59L543.254 66.008H519.446L513.206 83H499.574L524.726 14.84ZM540.854 56.696L531.446 28.568L521.654 56.696H540.854ZM583.946 39.224V83H570.698V14.84H581.258L616.49 59.768V14.936H629.738V83H618.698L583.946 39.224ZM495.688 196V151.264L478.216 184.576H470.824L453.352 151.264V196H440.104V127.84H454.312L474.472 166.624L494.824 127.84H508.936V196H495.688ZM519.039 161.44C519.039 157.28 519.775 153.184 521.247 149.152C522.783 145.12 524.991 141.472 527.871 138.208C530.751 134.944 534.271 132.352 538.431 130.432C542.591 128.448 547.327 127.456 552.639 127.456C558.847 127.456 564.255 128.832 568.863 131.584C573.471 134.336 576.895 137.92 579.135 142.336L568.958 149.344C567.807 146.784 566.303 144.768 564.447 143.296C562.591 141.824 560.575 140.768 558.399 140.128C556.287 139.488 554.239 139.168 552.255 139.168C548.927 139.168 546.015 139.84 543.519 141.184C541.087 142.528 539.039 144.288 537.375 146.464C535.711 148.64 534.463 151.072 533.631 153.76C532.863 156.448 532.479 159.136 532.479 161.824C532.479 165.856 533.311 169.632 534.975 173.152C536.639 176.608 538.975 179.424 541.983 181.6C544.991 183.776 548.479 184.864 552.447 184.864C554.495 184.864 556.607 184.512 558.783 183.808C561.023 183.104 563.071 181.984 564.927 180.448C566.783 178.912 568.223 176.928 569.247 174.496L580.095 180.736C578.687 184.128 576.479 187.008 573.471 189.376C570.463 191.68 567.071 193.472 563.295 194.752C559.519 195.968 555.775 196.576 552.063 196.576C547.199 196.576 542.751 195.584 538.719 193.6C534.751 191.552 531.295 188.864 528.351 185.536C525.407 182.144 523.103 178.368 521.439 174.208C519.839 169.984 519.039 165.728 519.039 161.44ZM588.979 196V127.84H613.747C621.171 127.84 627.379 129.376 632.371 132.448C637.363 135.456 641.107 139.552 643.603 144.736C646.099 149.856 647.347 155.552 647.347 161.824C647.347 168.736 645.971 174.752 643.219 179.872C640.467 184.992 636.563 188.96 631.507 191.776C626.451 194.592 620.531 196 613.747 196H588.979ZM634.003 161.824C634.003 157.408 633.203 153.536 631.603 150.208C630.003 146.816 627.699 144.192 624.691 142.336C621.683 140.416 618.035 139.456 613.747 139.456H602.227V184.384H613.747C618.099 184.384 621.779 183.424 624.787 181.504C627.795 179.52 630.067 176.832 631.603 173.44C633.203 169.984 634.003 166.112 634.003 161.824ZM673.601 127.84H687.041L712.097 196H698.465L692.129 179.008H668.321L662.081 196H648.449L673.601 127.84ZM689.729 169.696L680.321 141.568L670.529 169.696H689.729ZM719.573 196V127.84H744.341C751.765 127.84 757.973 129.376 762.965 132.448C767.957 135.456 771.701 139.552 774.197 144.736C776.693 149.856 777.941 155.552 777.941 161.824C777.941 168.736 776.565 174.752 773.813 179.872C771.061 184.992 767.157 188.96 762.101 191.776C757.045 194.592 751.125 196 744.341 196H719.573ZM764.597 161.824C764.597 157.408 763.797 153.536 762.197 150.208C760.597 146.816 758.293 144.192 755.285 142.336C752.277 140.416 748.629 139.456 744.341 139.456H732.821V184.384H744.341C748.693 184.384 752.373 183.424 755.381 181.504C758.389 179.52 760.661 176.832 762.197 173.44C763.797 169.984 764.597 166.112 764.597 161.824ZM835.62 184.384V196H788.292V127.84H834.756V139.456H801.54V155.872H830.244V166.624H801.54V184.384H835.62Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </a>
        {/* DESKTOP NAV */}
        <div class="text-md text-gray-600 hidden lg:flex items-center">
          <div class="px-6">
            <a
              href="/"
              class="block mt-4 lg:inline-block text-primary-50 hover:text-primary-100 lg:mt-0 mx-3 font-semibold"
            >
              HOME
            </a>
            <a
              href="/about"
              class="block mt-4 lg:inline-block text-primary-50 hover:text-primary-100 lg:mt-0 mx-3 font-semibold"
            >
              ABOUT
            </a>
            <a
              href="/contact"
              class="block mt-4 lg:inline-block text-primary-50 hover:text-primary-100 lg:mt-0 mx-3 font-semibold"
            >
              CONTACT
            </a>
            <a
              href="/blog"
              class="block mt-4 lg:inline-block text-primary-50 hover:text-primary-100 lg:mt-0 mx-3 font-semibold"
            >
              BLOG
            </a>
          </div>
        </div>
        {/* MOBILE NAV */}
        <div class="lg:hidden">
          <div class="block lg:hidden">
            <div class="-mr-2 flex items-center lg:hidden">
              <button
                type="button"
                class="bg-transparent rounded-md p-2 mr-2 inline-flex items-center justify-center text-secondary-200 hover:text-secondary-400 hover:bg-secondary-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                id="main-menu"
                aria-haspopup="true"
                //   @click="menuShow = !menuShow"
              >
                <title>Menu</title>
                <span class="sr-only">Open main menu</span>
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

// export default function Navbar() {
//   return (
//     <div class="">
//       <nav class="flex items-center justify-between px-2 pb-2 pt-2 md:py-4 container mx-auto max-w-7xl">

//           {/* <!-- MENU --> */}
//           <div
//             v-bind:class="{ hidden: !menuShow }"
//             class="absolute top-0 inset-x-0 z-40 p-2 transition duration-500 ease-in-out transform origin-top-right lg:hidden"
//           >
//             <div class="rounded-lg shadow-lg bg-woodsmoke-900 ring-1 ring-black ring-opacity-5 overflow-hidden">
//               <div class="px-4 pt-3 flex items-center justify-between">
//                 <div class="h-8">
//                   <img src="~static/LogoWhite.svg" class="h-6" />
//                 </div>
//                 <div class="-mr-2">
//                   <button
//                     type="button"
//                     class="rounded-lg p-2 inline-flex items-center justify-center text-primary-700 hover:text-primary-500 hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
//                     //   @click="menuShow = false"
//                   >
//                     <span class="sr-only">Close main menu</span>
//                     {/* <!-- Heroicon name: x --> */}
//                     <svg
//                       class="h-6 w-6"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M6 18L18 6M6 6l12 12"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>

//               <div
//                 role="menu"
//                 aria-orientation="vertical"
//                 aria-labelledby="main-menu"
//               >
//                 <div class="px-2 pt-6 pb-2 space-y-1" role="none">
//                   <a
//                     href="/"
//                     class="block px-3 py-2 rounded-md text-base font-medium text-secondary-300 hover:text-gray-200"
//                     role="menuitem"
//                     //   @click.native="menuShow = false"
//                   >
//                     Home
//                   </a>
//                   <a
//                     href="/about"
//                     class="block px-3 py-2 rounded-md text-base font-medium text-secondary-300 hover:text-gray-200"
//                     role="menuitem"
//                     //   @click.native="menuShow = false"
//                   >
//                     About
//                   </a>
//                   <a
//                     href="/contact"
//                     class="block px-3 py-2 rounded-md text-base font-medium text-secondary-300 hover:text-gray-200"
//                     role="menuitem"
//                     //   @click.native="menuShow = false"
//                   >
//                     Contact
//                   </a>
//                   <a
//                     href="/content"
//                     class="block px-3 py-2 rounded-md text-base font-medium text-secondary-300 hover:text-gray-200"
//                     role="menuitem"
//                     //   @click.native="menuShow = false"
//                   >
//                     Blog
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }
