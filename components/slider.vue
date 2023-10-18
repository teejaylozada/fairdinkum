<template>
  <div class="p-4 text-center">
    <h1 class="text-3xl font-bold mb-4">Past Projects</h1>
    <div class="slider-container h-full">
      <div class="slider" :style="{ transform: 'translateX(' + -currentIndex * 12 + '%) skewX(-20deg)' }"> 
        <div v-for="(image, index) in images" :key="index" class="slider-item " @click="redirectToProject(image.redirect)">
          <div class="slider-image-container">
            <img :src="image.src" :alt="'Image ' + (index + 1)" class="slider-image">
          </div>
          <div class="slider-text-overlay">
            <h2 class="text-white text-xl font-semibold">{{ image.text.title }}</h2>
            <p class="text-white text-sm">{{ image.text.description }}</p>
          </div>
        </div>
      </div>
      <button v-if="showLeftArrow" @click="prevSlide" class="slider-button prev-button">&#10094;</button>
    <button v-if="showRightArrow" @click="nextSlide" class="slider-button next-button">&#10095;</button>
    </div>
  </div>
</template>

<script setup>
import companyOverviewImage from '~/assets/company-overview.png';
import { ref, onMounted, onUnmounted } from 'vue';

const images = [
{
    src: '/past-project-images/light-poles.png',
    text: {
      title: 'Light Poles',
    },
    redirect: '/project-four'
  },
  {
    src: '/past-project-images/roof-trusses-girders-purlins.png',
    text: {
      title: 'Roof Trusses, girders & purlins',
    },
    redirect: '/executive-summary'
  },
  {
    src: '/past-project-images/sheds-steel-frame.png',
    text: {
      title: 'Sheds & Steel Frames',
    },
    redirect: '/slider'
  },
  {
    src: '/past-project-images/stair-balconies.png',
    text: {
      title: 'Stair & Balconies',
    },
    redirect: '/project-three'
  },
  {
    src: '/past-project-images/light-poles.png',
    text: {
      title: 'Light Poles',
    },
    redirect: '/project-four'
  },
  {
    src: '/past-project-images/structural-steel.png',
    text: {
      title: 'Structural Steel',
    },
    redirect: '/project-five'
  },

  {
    src: '/past-project-images/stair-balconies.png',
    text: {
      title: 'Stair & Balconies',
    },
    redirect: '/project-three'
  },
 
  {
    src: '/past-project-images/sheds-steel-frame.png',
    text: {
      title: 'Sheds & Steel Frames',
    },
    redirect: '/slider'
  },
 
  {
    src: '/past-project-images/roof-trusses-girders-purlins.png',
    text: {
      title: 'Roof Trusses, girders & purlins',
    },
    redirect: '/executive-summary'
  },
  {
    src: '/past-project-images/structural-steel.png',
    text: {
      title: 'Structural Steel',
    },
    redirect: '/project-five'
  },
  {
    src: '/past-project-images/light-poles.png',
    text: {
      title: 'Light Poles',
    },
    redirect: '/project-four'
  },
  {
    src: '/past-project-images/stair-balconies.png',
    text: {
      title: 'Stair & Balconies',
    },
    redirect: '/project-three'
  },
];


const totalImages = images.length;
const currentIndex = ref(0);
let slideshowInterval;

function nextSlide() {
  clearInterval(slideshowInterval); // Clear the interval when manual navigation is triggered
  currentIndex.value += 5;
  if (currentIndex.value >= totalImages) {
    currentIndex.value = 0;
  }
  startSlideshow(); // Restart the slideshow after manual navigation
}

function prevSlide() {
  clearInterval(slideshowInterval); // Clear the interval when manual navigation is triggered
  currentIndex.value -= 5;
  if (currentIndex.value < 0) {
    currentIndex.value = totalImages + currentIndex.value;
  }
  startSlideshow(); // Restart the slideshow after manual navigation
}

function startSlideshow() {
  slideshowInterval = setInterval(nextSlide, 4500); 
}

function redirectToProject(route) {
  window.location.href = route;
}

onMounted(() => {
  startSlideshow();
});

onUnmounted(() => {
  clearInterval(slideshowInterval);
});

const showLeftArrow = computed(() => {
  return currentIndex.value > 0;
});

const showRightArrow = computed(() => {
  return currentIndex.value < totalImages - 6; // Assuming 6 images are visible at a time
});
</script>

<style scoped>
h1 {
  font-size: 2rem;
}

.slider-container {
  position: relative;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  overflow: hidden;
}

.slider {
  display: flex;
  transition: transform 0.3s ease-in-out;
}

.slider-item {
  position: relative;
  box-sizing: border-box;
  flex: 0 0 35%;
  margin: 0px;
  border: 4px solid #fff;
  overflow: hidden;
  width: 100%; /* Set width to 100% */
  height: 40vh; /* Set the fixed height for the images */
}

.slider-image {
  width: 100%;
  height: 50vh;
  object-fit: cover; /* Ensure the image covers the entire container while preserving aspect ratio */
  border: 4px solid black;
}

.slider-text-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 15vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  padding: 1rem;
  text-align: center;
}

.slider-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  background-color: #333; /* Background color for the circle */
  border: none;
  color: white; /* Text color for the arrows */
  cursor: pointer;
  outline: none;
  width: 3rem; /* Width and height for the circle */
  height: 3rem;
  border-radius: 50%; /* Makes the element a circle */
  display: flex;
  justify-content: center;
  align-items: center;
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}

.slider-image {
  cursor: auto;
  transition: cursor 0.2s; /* Add a smooth transition for the cursor */
}

.slider-image:hover {
  cursor: pointer; /* Change cursor on hover */
}
.dark-background {
  background-color: #333;
  color: #fff;
}
@media (min-width: 768px) {
  .slider-item {
    flex: 0 0 20%;
    height: 50vh; /* Set the fixed height for the images */
  }
}


@media (min-width: 1024px) {
  .slider-item {
    flex: 0 0 18%; /* Adjust the width for larger screens */
  }
}

</style>
