<template>
 <div class="p-4 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 m-4 lg:m-10">
    <div class="lg:hidden">
      <h3 class="text-orange-500 text-lg font-semibold mb-2">Executive Summary</h3>
      <h1 class="text-2xl lg:text-3xl font-bold mb-4">Experience and Innovation in Metal Fabrication</h1>
      <img src="~/assets/our-services.png" alt="Operational Staff" class="w-full h-auto object-cover mx-auto my-5">
      <h1 class="text-2xl lg:text-3xl font-bold mb-4 text-center">MECHANICAL ENGINEERING AND DESIGN</h1>
      <p class="text-base text-gray-700 mb-4 text-center">
        FAIRDINKUM FABRICATORS INC (Formally HMR Fabricators) was established in Angono in 1985 initially to refurbish and fabricate shelving and Pallet Racking for HMR Philippines. In 2011, the operations were expanded to provide services to the Construction, Geological, Exploration, and Mining industries, leading to the development of Fairdinkum Fabricators.
      </p>
    </div>

    <!-- <div>
      <div class="flex flex-wrap justify-center lg:justify-start lg:flex-col items-center lg:items-start lg:w-full bg-gray-200 rounded p-10 ">
        <div class="button bg-white hover:bg-orange-500 ">MECHANICAL ENGINEERING AND DESIGN</div>
        <div class="button bg-white hover:bg-orange-500 ">STRUCTURAL DESIGN AND FABRICATION</div>
        <div class="button bg-white hover:bg-orange-500 ">CONSTRUCTION SERVICES</div>
        <div class="button bg-white hover:bg-orange-500 ">MATERIALS PROCUREMENT</div>
        <div class="button bg-white hover:bg-orange-500 ">PROJECT MANAGEMENT</div>
        <div class="button bg-white hover:bg-orange-500 ">CAD SERVICES AND DESIGN</div>
      </div>
    </div> -->
    <div>
    <div class="flex flex-wrap justify-center lg:justify-start lg:flex-col items-center lg:items-start lg:w-full bg-gray-200 rounded p-10 ">
      <div class="button bg-white hover:bg-orange-500 relative">
        MECHANICAL ENGINEERING AND DESIGN
        <span class="arrow"></span>
      </div>

      <div class="button bg-white hover:bg-orange-500 relative">
        STRUCTURAL DESIGN AND FABRICATION
        <span class="arrow"></span>
      </div>
      <div class="button bg-white hover:bg-orange-500 relative">
          CONSTRUCTION SERVICES
        <span class="arrow"></span>
      </div>

      <div class="button bg-white hover:bg-orange-500 relative">
        MATERIALS PROCUREMENT
        <span class="arrow"></span>
      </div>

      <div class="button bg-white hover:bg-orange-500 relative">
        PROJECT MANAGEMENT
        <span class="arrow"></span>
      </div>

      <div class="button bg-white hover:bg-orange-500 relative">
        CAD SERVICES AND DESIGN
        <span class="arrow"></span>
      </div>
    </div>
  </div>

    <div class="lg:flex lg:flex-col lg:justify-center lg:items-center hidden">
      <h3 class="text-orange-500 text-lg font-semibold mb-2">Executive Summary</h3>
      <h1 class="text-2xl lg:text-3xl font-bold mb-4">Experience and Innovation in Metal Fabrication</h1>
      <img src="~/assets/our-services.png" alt="Operational Staff" class="w-full sm:w-3/4 md:w-2/3 lg:w-3/4 h-auto object-cover mx-auto my-5">
      <h1 class="text-2xl lg:text-3xl font-bold mb-4 text-center">MECHANICAL ENGINEERING AND DESIGN</h1>
      <p class="text-base text-gray-700 mb-4 text-center">
        FAIRDINKUM FABRICATORS INC (Formally HMR Fabricators) was established in Angono in 1985 initially to refurbish and fabricate shelving and Pallet Racking for HMR Philippines. In 2011, the operations were expanded to provide services to the Construction, Geological, Exploration, and Mining industries, leading to the development of Fairdinkum Fabricators.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.button {
    background-color: #ffffff;
    padding: 2rem;
    margin-bottom: 1rem;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    width: 100%;
    height: 7vh;
    align-items: center; /* Center content vertically */
    display: flex;
}

.button:hover, .button:focus  {
    background-color: #ff6f00; /* Orange color */
    outline: none; /* Remove the default focus outline */
}

.button .arrow::after {
  content: "";
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 8px solid #000000; /* Default arrow color */
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  transition: border-left-color 0.3s ease; /* Transition arrow color */
}

.button:hover .arrow::after {
  border-left-color: #ff6f00; /* Change arrow color to orange on hover */
}

</style>
