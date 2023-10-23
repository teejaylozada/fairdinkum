<template>
  <div class="bg-gray-100">
    <div class="text-orange-500 p-4">
      <div class="container mx-auto">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3867.500537091069!2d121.109457!3d14.2239983!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd62e3ce3bbf47%3A0xdff686c49486a9c!2sSilangan%20Industrial%20Park-Calamba!5e0!3m2!1sen!2sph!4v1697365276678!5m2!1sen!2sph" width="100%" height="400" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <h1 class="text-3xl lg:text-5xl font-bold text-center mt-5">Contact Us</h1>
      </div>
    </div>

    <div class="container mx-auto mb-5">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
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
                <input type="text" id="name" v-model="form.name" class="mt-1 p-2 w-full border rounded" required>
              </div>
              <div>
                <label for="mobile" class="block text-sm font-medium text-gray-600">Your Mobile:</label>
                <input 
                    type="text" 
                    id="mobile" 
                    v-model="form.mobile_no" 
                    class="mt-1 p-2 w-full border rounded"
                    placeholder="09*********"
                    pattern="09\d{9}"
                    maxlength="11"
                    required
                    title="Must be 11 digits (e.g., 09123456789)"  
                    >
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-600">Your Email Address:</label>
                <input type="email" id="email" v-model="form.email_address" class="mt-1 p-2 w-full border rounded" >
              </div>
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-600" required>Subject:</label>
                <input type="text" id="subject" v-model="form.subject" class="mt-1 p-2 w-full border rounded">
              </div>
            </div>
            <div class="mb-4">
              <label for="message" class="block text-sm font-medium text-gray-600">Your Message:</label>
              <textarea id="message" v-model="form.message" class="mt-1 p-2 w-full border rounded"></textarea>
            </div>
            <div class="mb-4 flex justify-center">
            <button  type="submit" @click="submitForm" class="leading-7 bg-orange-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-1/2">
              Contact Us
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
  data() {
    return {
      form: {
        name: "",
        mobile_no: "",
        email_address: "",
        subject: "",
        message: ""
      },
      mobileError: null,
    };
  },

  methods: {
    submitForm() {
      // Check if all required fields are filled
      if (this.form.mobile_no && this.form.name && this.form.email_address && this.form.subject) {
        // All required fields are filled, show success toast
        toast("Form submitted successfully!", {
          autoClose: 2000,
          position: 'top-right',
          type: 'success'
        });
        this.sendEmail(); // Call sendEmail method here
      } else {
        // Not all required fields are filled, show an error toast or handle it as per your requirement
      }
    },

    sendEmail() {
      // Send email if mobile number is valid
      this.$mail.send({
        subject: this.form.subject,
        html: `
          <p>Name: ${this.form.name}</p>
          <p>Mobile No: ${this.form.mobile_no}</p>
          <p>Email Address: ${this.form.email_address}</p>
          <p>Message: ${this.form.message}</p>
        `
      });

      // Clear form fields after sending email
      this.form.name = "";
      this.form.mobile_no = "";
      this.form.email_address = "";
      this.form.subject = "";
      this.form.message = "";

      // Show success notification if needed
    },
  },
};
</script>


<style scoped>
</style>
