<template>
  <!-- Row1 -->
  <div class="px-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
  <div class="px-10 lg:p-10 flex flex-col justify-center lg:text-left">
    <h3 class="text-orange-500 text-lg font-semibold mb-2">Growth & Drive</h3>
    <h1 class="text-xl lg:text-3xl font-bold mb-4">Sculpting Growth: Our Precision, Your Advantage.</h1>
    <p class="our-vision-paragraph text-sm lg:text-base mb-4">
      Our Vision is to grow the team and equipment as the work requirements dictate. Fairdinkum currently has a small team of fabricators, each with a particular skillset in a varying range of Fabrication nuances, i.e. Heavy Construction, Heavy Equipment, Stainless Steel, Oil & Gas, and general Roof Trusses.
    </p>
    <!-- mobile -->
    <div class="relative p-4 lg:p-10 flex justify-center items-center lg:hidden">
      <div class="w-full h-auto border-white border-4 rounded-lg overflow-hidden ml-auto">
        <img src="~/assets/growth-drive.png" alt="Image 1" class="w-full sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-full h-auto object-cover mx-auto">
        <img src="~/assets/growth-drive2.png" alt="Image 2" class="w-1/3 h-auto border-white border-4 absolute top-0 lg:top-20 left-0 lg:left-0 transform translate-x-0 translate-y-1/5 z-20">
        <img src="~/assets/growth-drive3.png" alt="Image 3" class="w-1/3 h-auto border-white border-4 absolute bottom-0 lg:bottom-20 right-0 lg:right-0 transform translate-x-0 -translate-y-1/5 z-20">
      </div>
    </div>

    <p class="our-vision-paragraph text-sm lg:text-base">
      Our team also consists of Painters, carpenters, electricians, plumbers, and cabinet makers. FDF endeavours to utilise these qualified personnel to train and introduce new experienced workers into the market.
    </p>
  </div>
  <!-- Desktop -->
    <div class="relative p-4 lg:p-10 flex justify-center items-center hidden lg:block">
      <div class="w-full h-auto border-white border-4 rounded-lg overflow-hidden ml-auto">
        <img src="~/assets/growth-drive.png" alt="Image 1" class="w-full sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-full h-auto object-cover mx-auto">
        <img src="~/assets/growth-drive2.png" alt="Image 2" class="w-1/3 h-auto border-white border-4 absolute top-0 lg:top-20 left-0 lg:left-0 transform translate-x-0 translate-y-1/5 z-20">
        <img src="~/assets/growth-drive3.png" alt="Image 3" class="w-1/3 h-auto border-white border-4 absolute bottom-0 lg:bottom-20 right-0 lg:right-0 transform translate-x-0 -translate-y-1/5 z-20">
      </div>
    </div>
</div>

<!-- Row2 -->
<OurAffiliate />

<!-- Row3 -->
  <div class="px-10 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
    <div class="relative p-4 lg:p-10 flex justify-center items-center hidden lg:block">
      <div class="w-full h-auto border-white border-4 rounded-lg overflow-hidden ml-auto">
        <img src="~/assets/company-overview.png" alt="Image 1" class="w-full sm:w-3/4 md:w-2/3 lg:w-3/4 h-auto object-cover mx-auto">
      </div>
    </div>


    <div class="px-10 flex flex-col lg:text-left">
      <h3 class="text-orange-500 text-lg font-semibold mb-2">Our Vision</h3>
        <h1 class="text-xl lg:text-3xl font-bold mb-2 lg:mb-4">To provide quality services at Fair Dinkum prices within project critical timelines.</h1>
        <div class="relative p-4 lg:p-10 flex justify-center items-center lg:hidden">
          <div class="w-full h-auto border-white border-4 rounded-lg overflow-hidden ml-auto">
            <img src="~/assets/company-overview.png" alt="Image 1" class="w-full sm:w-3/4 md:w-2/3 lg:w-3/4 h-auto object-cover mx-auto">
          </div>
        </div>
        <p class="text-sm lg:text-base leading-6 mb-4">
          Our primary focus is to source quality materials, and utilising technology, machinery, tools, equipment and skilled welders and Fabricators to produce a quality finished product. 
          Fairdinkum Fabricators endeavour to train, teach and elevate the employment opportunities for as many as possible nonskilled workers, by providing job opportunities and in house training to elevate these workers to skilled positions.
        </p>
    </div>
  </div>

<!-- Row4 -->
<div class="bg-gray-800 text-white p-1 text-base flex flex-col growth-drive-background h-full lg:h-96">
    <div class="container mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
      <div class="text-left bg-white text-black p-2 rounded">
        <h1 class="text-2xl font-bold mb-2">GROWTH & DRIVE</h1>
        <p class="mb-2">Our Vision is to grow the team and equipment as the work requirements dictate. Fairdinkum currently have a small team of fabricators, each with a particular skillset in a varying range of Fabrication nuances, i.e. Heavy Construction, Heavy Equipment, Stainless Steel, Oil & Gas and general Roof Trusses. Our team also consists of Painters, carpenters, electricians, plumbers and cabinet makers. FDF endeavours to utilise these qualified personnel to train and introduce new experienced workers into the market.</p>
      </div>
      </div>
  </div>

</template>

<script setup lang="ts">
import OurAffiliate from "@/components/our-affiliation.vue"
</script>

<style scoped>



.our-affiliate-background {
  background: linear-gradient(90deg, rgba(197, 72, 31, 0.842) 10%, rgba(47, 1, 255, 0) 90.37%, rgba(43, 0, 124, 0.2) 90.42%, rgba(0, 92, 172, 0) 10.43%),url('~/assets/our-affiliation-bg.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover; /* Ensure the image covers the entire background area */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  mix-blend-mode: multiply;
}




.growth-drive-background {
  background: linear-gradient(90deg, rgba(254, 91, 22, 0.70) 1.8%, rgba(254, 91, 22, 0.70) 47.37%, rgba(1, 7, 11, 0.08) 98.42%, rgba(0, 7, 13, 0.00) 98.43%), url('~/assets/executive-summary.png'), lightgray 50% / cover no-repeat;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover; /* Ensure the image covers the entire background area */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  mix-blend-mode: multiply; 
}





</style>