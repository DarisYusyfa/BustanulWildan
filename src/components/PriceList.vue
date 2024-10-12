<template>
  <section id="pricelist" class="bg-gray-100 py-16 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-4">
    <div class="container mx-auto text-center">
      <h3 class="text-3xl font-semibold mb-8" data-aos="fade-up">Daftar Harga</h3>
      <p class="mb-12 text-lg" data-aos="fade-up" data-aos-delay="200">Pilih paket yang sesuai dengan kebutuhan kamu. Semua layanan kami dirancang untuk membantu kamu menyelesaikan tugas dengan hasil terbaik!</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Paket 1 -->
        <div class="bg-white shadow-md rounded-lg p-6 hover:scale-105 transform transition duration-300 dark:bg-gray-800" data-aos="fade-right">
          <h4 class="text-xl font-semibold mb-4">Paket Basic</h4>
          <p class="text-lg font-bold text-blue-600 mb-4 dark:text-blue-400">Rp 4000-8000</p>
          <ul class="text-left space-y-2 mb-6">
            <li>- Jasa Tulis Tugas dan Gambar</li>
            <li>- Tugas Matapelajaran Teori</li>
          </ul>
          <a href="https://wa.me/6285860639317?text=Saya%20ingin%20pesan%20Paket%20Basic%20untuk%20joki%20tugas" target="_blank" rel="noopener noreferrer">
            <button class="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-500 transition duration-300">Pesan Sekarang</button>
          </a>
        </div>

        <!-- Paket 2 -->
        <div class="bg-white shadow-md rounded-lg p-6 hover:scale-105 transform transition duration-300 dark:bg-gray-800" data-aos="fade-right" data-aos-delay="200">
          <h4 class="text-xl font-semibold mb-4">Paket Standard</h4>
          <p class="text-lg font-bold text-blue-600 mb-2 dark:text-blue-400">Rp 5000-10.000</p>
          <p class="text-sm line-through text-gray-500 dark:text-gray-400">Rp 6000-12.000</p>
          <span class="text-lg font-bold text-red-600 mb-4 dark:text-red-400">Diskon 20%!</span>
          <ul class="text-left space-y-2 mb-6">
            <li>- Perbaikan Tugas Codingan</li>
            <li>- Tugas Pemrograman Dasar</li>
            <li>- Revisi 1 Kali</li>
          </ul>
          <a href="https://wa.me/6285860639317?text=Saya%20ingin%20pesan%20Paket%20Standard%20untuk%20joki%20tugas" target="_blank" rel="noopener noreferrer">
            <button class="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-500 transition duration-300">Pesan Sekarang</button>
          </a>
        </div>

        <!-- Paket 3 -->
        <div class="bg-white shadow-md rounded-lg p-6 hover:scale-105 transform transition duration-300 dark:bg-gray-800" data-aos="fade-left" data-aos-delay="400">
          <h4 class="text-xl font-semibold mb-4">Paket Premium</h4>
          <p class="text-lg font-bold text-blue-600 mb-4 dark:text-blue-400">Rp 13.000-15.000</p>
          <ul class="text-left space-y-2 mb-6">
            <li>- Terima Jadi Tugas Codingan</li>
            <li>- Tugas Pemrograman Lanjutan/Expert</li>
            <li>- Revisi Tak Terbatas</li>
          </ul>
          <a href="https://wa.me/6285860639317?text=Saya%20ingin%20pesan%20Paket%20Premium%20untuk%20joki%20tugas" target="_blank" rel="noopener noreferrer">
            <button class="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-500 transition duration-300">Pesan Sekarang</button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.init({
    duration: 800,
  });
});
</script>

<style scoped>
/* Styling tambahan jika diperlukan */
</style>
