<template>
  <div class="bg-gray-100">
    <div class="text-orange-500 p-4">
      <div class="container mx-auto">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3867.500537091069!2d121.109457!3d14.2239983!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd62e3ce3bbf47%3A0xdff686c49486a9c!2sSilangan%20Industrial%20Park-Calamba!5e0!3m2!1sen!2sph!4v1697365276678!5m2!1sen!2sph" width="100%" height="400" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <h1 class="text-3xl lg:text-5xl font-bold text-center leading-8">Contact Us</h1>
      </div>
    </div>

    <div class="container mx-auto py-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-3xl font-bold text-center text-blue-900 leading-7">Contact Details</h2>
          
          <p class="text-gray-700 text-center mt-4">
            HMR Environmental Compound, Silang Industrial Estate Canlubang, Calamba, Laguna, Philippines 4028
          </p>
          <p class="text-blue-900 text-center mt-4">info@fairdinkum.ph</p>
          <p class="text-lg font-semibold text-blue-900 text-center mt-4">+63 2 584 4061 (Local) | +63 2 584 4061 (Manila)</p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-3xl font-bold text-center text-blue-900 font-red-hat-display leading-7">Any Query?</h2>
          <form @submit.prevent="submitForm" class="mt-4">
            <div class="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-600">Your Name:</label>
                <input type="text" id="name" v-model="formData.name" class="mt-1 p-2 w-full border rounded">
              </div>
              <div>
                <label for="mobile" class="block text-sm font-medium text-gray-600">Your Mobile:</label>
                <input type="text" id="mobile" v-model="formData.mobile" class="mt-1 p-2 w-full border rounded">
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-600">Your Email Address:</label>
                <input type="email" id="email" v-model="formData.email" class="mt-1 p-2 w-full border rounded">
              </div>
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-600">Subject:</label>
                <input type="text" id="subject" v-model="formData.subject" class="mt-1 p-2 w-full border rounded">
              </div>
            </div>
            <div class="mb-4">
              <label for="message" class="block text-sm font-medium text-gray-600">Your Message:</label>
              <textarea id="message" v-model="formData.message" class="mt-1 p-2 w-full border rounded"></textarea>
            </div>
            <div class="mb-4 flex justify-center">
            <button type="submit" class="leading-7 bg-orange-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-1/2">
              Contact Us
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const formData = ref({
  name: '',
  mobile: '',
  email: '',
  subject: '',
  message: ''
});

const submitForm = () => {
  console.log('Form submitted with data:', formData.value);
};
</script>

<style scoped>
</style>
