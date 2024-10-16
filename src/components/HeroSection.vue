<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Video background -->
    <video class="absolute w-full h-full object-cover" autoplay loop muted playsinline>
      <source src="/images/bustan.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Overlay transparan untuk seluruh area -->
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>

    <!-- Container untuk teks, sekarang ada dalam area transparan -->
    <div class="relative z-10 text-center text-white px-4">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">Selamat Datang di Pondok Pesantren Bustanul Wildan</h1>

      <p class="text-xl md:text-2xl mb-8">Jl. Tanjakansari No.24 Cileunyi Wetan, Bandung, Jawa Barat, Indonesia</p>
      <a href="#daftar" class="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"> Daftar Sekarang </a>
    </div>

    <!-- Tombol mute/unmute -->
    <button @click="toggleMute" class="absolute bottom-4 right-4 bg-white bg-opacity-25 hover:bg-opacity-40 rounded-full p-2 transition duration-300 ease-in-out" aria-label="Toggle mute">
      <svg v-if="isMuted" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
        />
      </svg>
    </button>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const isMuted = ref(true);

const toggleMute = () => {
  const video = document.querySelector('video');
  if (video) {
    video.muted = !video.muted;
    isMuted.value = video.muted;
  }
};
</script>

<style scoped>
/* Tambahan styling jika diperlukan */
</style>
