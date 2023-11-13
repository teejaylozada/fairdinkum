<template>
    <div class="our-affiliate-background text-center h-80 my-5">
    <h1 class="our-affiliate-heading text-3xl text-white font-bold mb-4">Our Affiliation</h1>
    <p class="our-affiliate-paragraph text-sm text-white text-gray-700 mb-4">Fairdinkum is affiliated to, and works in conjunction with:HMR Group, HMR Philippines, HMR EnvirocycleSDW Holdings (Construction Division)</p>
    <div class="our-affiliate-grid grid grid-cols-3 gap-10 relative">
      <img src="~/assets/our-affiliation.png" alt="Project 1" class="our-affiliate-image mt-5 mx-10">
      <img src="~/assets/our-affiliation2.png" alt="Project 2" class="our-affiliate-image">
      <img src="~/assets/our-affiliation3.png" alt="Project 3" class="our-affiliate-image">
    </div>
  </div>
</template>

<script setup>

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

.our-affiliate-heading {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.our-affiliate-paragraph {
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.our-affiliate-grid {
  margin-top: 20px;
}

.our-affiliate-image {
  max-width: 70%;
  height: auto;
}
</style>