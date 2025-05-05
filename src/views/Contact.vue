<template>
  <div>
    <!-- Kontak Section -->
    <section id="kontak" class="bg-gradient-to-r from-blue-500 to-teal-500 py-16 text-white px-4">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-semibold mb-6">Kontak Kami</h2>
        <p class="text-lg mb-8">Jika Anda memiliki pertanyaan atau ingin berkomunikasi dengan kami, silakan hubungi melalui formulir di bawah ini atau menggunakan informasi yang tercantum.</p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Formulir Kontak -->
          <div class="bg-white rounded-lg p-8 shadow-xl dark:bg-gray-800">
            <h3 class="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Kirim Pesan</h3>
            <form @submit.prevent="submitForm">
              <div class="mb-4">
                <input type="text" v-model="form.name" placeholder="Nama Anda" class="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" required />
              </div>
              <div class="mb-4">
                <input type="email" v-model="form.email" placeholder="Email Anda" class="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" required />
              </div>
              <div class="mb-4">
                <textarea v-model="form.message" placeholder="Pesan Anda" rows="4" class="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" required></textarea>
              </div>
              <button type="submit" class="w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">Kirim Pesan</button>
            </form>
          </div>

          <!-- Informasi Kontak -->
          <div class="text-left bg-white rounded-lg p-8 shadow-xl dark:bg-gray-800">
            <h3 class="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Informasi Kontak</h3>
            <div class="mb-4 flex items-center">
              <PhoneIcon class="h-6 w-6 text-blue-600 mr-4" />
              <p class="text-lg">+62 812 3456 7890</p>
            </div>
            <div class="mb-4 flex items-center">
              <MailIcon class="h-6 w-6 text-blue-600 mr-4" />
              <p class="text-lg">info@domain.com</p>
            </div>
            <div class="mb-4 flex items-center">
              <LocationMarkerIcon class="h-6 w-6 text-blue-600 mr-4" />
              <p class="text-lg">Jl. Raya No. 123, Kota Bandung</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Peta Lokasi -->
    <section id="peta" class="py-16 px-4">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-semibold text-gray-800 dark:text-white mb-6">Lokasi Kami</h2>
        <div class="w-full h-96">
          <!-- Google Maps Embed -->
          <iframe
            class="w-full h-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126593.39799334788!2d107.58836680905013!3d-6.951150926459428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68aef9b171bf5d%3A0x41a517139c92f823!2sPesantren%20Bustanul%20Wildan!5e0!3m2!1sid!2sid!4v1624604583230!5m2!1sid!2sid"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: '',
});

const submitForm = () => {
  console.log('Form Submitted', form.value);
  // Implement logic for sending the form (e.g., email service or API call)
};
</script>

<style scoped>
/* Menambahkan animasi transisi dan efek untuk form */
input,
textarea {
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: #3490dc;
  box-shadow: 0 0 0 3px rgba(52, 144, 220, 0.3);
}

button {
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #1d4ed8;
}
</style>
