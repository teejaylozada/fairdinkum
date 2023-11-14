<template>
    <!--HOME -->
  <div class="mastering-metal h-screen flex flex-col items-center justify-center text-white text-center px-0 sm:px-10  md:px-12 lg:px-16">
    <h1 class="mb-4 text-5xl sm:text-6xl lg:text-7xl sm:px-14 lg:px-32 xl:px-40 2xl:px-72 font-extrabold shadow-text font-display" style="
  
          ">
        Mastering Metal, Crafting Quality
    </h1>
    <p class="text-sm md:text-base justify-center text-center mb-10 px-10 sm:px-14 lg:px-32 xl:px-40 2xl:px-72">
        At Fair Dinkum Fabricators, we breathe life into metal, transforming it into durable and precise creations. Elevate your projects with our unparalleled craftsmanship and cutting-edge technology, ensuring excellence in every piece we fabricate.
    </p>
    <!-- <button class="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 md:px-8 rounded transition duration-300 ease-in-out">
        Explore Services
    </button> -->
  </div>

  <!-- row1 -->
  <ExecutiveSumarry />

  <!-- row2 -->
  <OperationalStaff />

  <!-- row3 -->
  <OurAffiliate />

  <!-- row4 -->
  <GrowthDrive  />
    
  <!-- slide row -->
    <SLIDER />
    
  <!-- row5 -->
  <OurServices />

</template>
<script setup>
import SLIDER from "@/components/slider.vue"
import ExecutiveSumarry from "@/components/home/executive-summary.vue"
import OperationalStaff from "@/components/home/operational-staff.vue"
import OurAffiliate from "@/components/our-affiliation.vue"
import GrowthDrive from "@/components/home/growth-drive.vue"
import OurServices from "@/components/home/our-services.vue"
</script>

<style scoped>
html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.mastering-metal {
    background: url('~/assets/steptodown.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }







</style>

<!-- .gallery {
  display: flex;
  justify-content: center;
}

.slanted-wrapper {
  position: relative;
  width: 250px; 
  height: 400px; 
  overflow: hidden;
  margin: 0 15px; 
  transform: skewX(-16deg); 
}

.slanted-wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: -5px; 
  width: calc(100% + 10px); 
  height: 100%;
  transform: skewX(16deg); 
  z-index: -1;
}
.custom-button-container {
  border: 2px solid #E2E8F0; /* Border color #E2E8F0 */
  padding: 0.5rem 1rem; /* Equivalent to p-2 in Tailwind */
  text-align: center; /* Equivalent to text-center in Tailwind */
  border-radius: 0.25rem; /* Equivalent to rounded in Tailwind */
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease; /* Equivalent to transition classes in Tailwind */
  background-color: #fff;
}

.custom-button-container:hover {
  background-color: #FE5B16; /* Hover background color #FE5B16 */
  color: #FFF; /* Hover text color #FFF */
}

.slanted-image {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.slanted-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slanted-image {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out; 
}

.slanted-image:hover {
  transform: scale(1.10); 
}

.our-vision-paragraph {
  color: #414040;
  font-family: 'Raleway', sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 1rem; /* Adjust the margin-bottom as needed */
}


-->