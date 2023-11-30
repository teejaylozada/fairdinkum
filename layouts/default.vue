<template>
  <div>
    <!-- Header -->
    <header class="bg-gray-900 text-white py-4 md:py-6">
      <div class="container mx-auto flex justify-between items-center px-4 md:px-6">
        <!-- Logo -->
        <div class="ml-4 md:ml-0">
          <img src="~/assets/logo.png" alt="Logo" class="h-12 w-16 md:h-16 md:w-20" />
        </div>

        <div class="md:hidden relative" ref="dropdownContainer">
          <!-- Burger Menu Button -->
          <button @click="toggleMenu" class="text-white p-2 focus:outline-none">
            <!-- Burger Icon SVG or any other icon goes here -->
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>

          <!-- Dropdown Menu (Visible when the menu is open) -->
          <div v-if="isMenuOpen" ref="dropdownMenu" class="absolute right-0 mt-2 py-2 w-48 bg-gray-800 rounded shadow-lg z-10">
            <NuxtLink to="/" class="block px-4 py-2 text-white hover:bg-gray-700">Home</NuxtLink>
            <NuxtLink to="/executive-summary" class="block px-4 py-2 text-white hover:bg-gray-700">Executive Summary</NuxtLink>
            <NuxtLink to="/company-overview" class="block px-4 py-2 text-white hover:bg-gray-700">Company Overview</NuxtLink>
            <NuxtLink to="/our-services" class="block px-4 py-2 text-white hover:bg-gray-700">Services</NuxtLink>
            <NuxtLink to="/contact-us" class="block px-4 py-2 text-white hover:bg-gray-700">Contact Us</NuxtLink>
          </div>
        </div>

        <!-- Navigation Links -->
        <ul class="hidden md:flex space-x-6 text-sm">
          <li><NuxtLink to="/" class="nav-link">Home</NuxtLink></li>
          <li><NuxtLink to="/executive-summary" class="nav-link">Executive Summary</NuxtLink></li>
          <li><NuxtLink to="/company-overview" class="nav-link">Company Overview</NuxtLink></li>
          <li><NuxtLink to="/our-services" class="nav-link">Services</NuxtLink></li>
          <li><NuxtLink to="/contact-us" class="nav-link">Contact Us</NuxtLink></li>
        </ul>
      </div>
    </header>

    <!-- Main Content Slot -->
    <div>
      <slot />
    </div>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white p-10 text-base flex flex-col footer-background">
      <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-10 md:px-6">
        <!-- Column 1: About Fairdinkum -->
        <div class="text-left">
          <h1 class="text-xl font-bold mb-4">About Fairdinkum</h1>
          <p class="text-gray-300 leading-loose">
            FAIRDINKUM FABRICATORS INC (Formally HMR Fabricators) was established in Angono in 1985 initally to refurbish and fabricate shelving and Pallet Racking for HMR Philippines. 
          </p>
        </div>

        <!-- Column 2: FDF Services -->
        <div class="text-left">
          <h1 class="text-xl font-bold mb-4">FDF Services</h1>
            <p>Mechanical Engineering</p>
            <p>Structural Design and Fabrication</p>
            <p>Construction Services</p>
            <p>Material Procurement</p>
            <p>Project Management</p>
            <p>CAD Services and Design</p>   
        </div>

        <!-- Column 3: Website Links -->
        <div class="text-left">
          <h1 class="text-xl font-bold mb-4">Website Links</h1>
          <p>Home</p>
          <p>Executive Summary</p>
          <p>Company Overview</p>
          <p>Services</p>
          <p>Gallery</p>
          <p>Contact Us</p>        
        </div>

        <!-- Column 4: Address and Logo -->
        <OurMiniMap />
      </div>
    </footer>
  </div>
</template>

<script setup>
import '@fortawesome/fontawesome-free/css/all.css';
import OurMiniMap from "@/components/our-mini-map.vue"
import { ref, onUnmounted } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;

  if (isMenuOpen.value) {
    // Attach global click event listener to close the menu when clicking outside
    document.addEventListener('click', closeMenu);
  } else {
    // Remove the global click event listener when the menu is closed
    document.removeEventListener('click', closeMenu);
  }
}

function closeMenu(event) {
  const dropdownContainer = document.querySelector('.md\\:hidden'); // Select the dropdown menu element
  if (dropdownContainer && !dropdownContainer.contains(event.target)) {
    // Click occurred outside the dropdown, close the menu
    isMenuOpen.value = false;
  }
}

// Remove the global click event listener when the component is unmounted
onUnmounted(() => {
  document.removeEventListener('click', closeMenu);
});
</script>

<style scoped>
.footer-background {
  background: url('~/assets/growth-drive.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  mix-blend-mode: multiply; 
}

.footer-background::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(13, 65, 103, 0.8); 
  z-index: -1;
}


/* Header Styles */
.header {
  background: linear-gradient(to bottom, #333, #000); /* Subtle gradient background */
}

.header .logo img {
  border-radius: 50%; /* Rounded logo */
}

.header .nav-link {
  font-size: 18px; /* Increase font size */
  padding: 10px 20px; /* Add padding to navigation links */
  color: #fff; /* Default font color */
  transition: color 0.3s; /* Smooth color transition */
}

.header .nav-link:hover {
  color: #12b488; /* Hover font color */
}

/* Dropdown Menu Styles */
.dropdown-menu {
  background-color: #fff; /* Lighter background color */
  border-radius: 5px; /* Subtle border radius */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Slight shadow */
}

.dropdown-menu .nav-link:hover {
  background-color: #f0f0f0; /* Hover background color */
}
/* Footer Styles */
.footer {
  position: relative;
}

.footer .background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(13, 65, 103, 0.6); /* Subtle overlay color */
  z-index: -1;
}

.footer .footer-column {
  margin-bottom: 20px; /* Increase spacing between items */
  text-align: center; /* Center-align text */
}

.footer p {
  font-size: 16px; /* Slightly larger font size */
}

.text-custom-orange {
    color: orange; /* or any other color you prefer */
}

.font-semibold {
    font-weight: 600; /* or any other value for semi-bold font */
}
</style>