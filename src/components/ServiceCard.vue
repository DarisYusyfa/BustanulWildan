<template>
  <div>
    <!-- Layanan Kami Section -->
    <section id="layanan" class="bg-gray-100 py-16 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-4">
      <div class="container mx-auto text-center">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Service 1 with AOS -->
          <div data-aos="fade-up" data-aos-duration="500">
            <div class="bg-white shadow-md rounded-lg p-6 hover:bg-blue-600 hover:text-white hover:scale-105 transform transition duration-300 dark:bg-gray-800">
              <h4 class="text-xl font-semibold mb-4">Pembuatan Makalah</h4>
              <p>Selesaikan makalah dengan struktur yang baik dan sumber terpercaya.</p>
            </div>
          </div>

          <!-- Service 2 with AOS -->
          <div data-aos="fade-up" data-aos-duration="700">
            <div class="bg-white shadow-md rounded-lg p-6 hover:bg-blue-600 hover:text-white hover:scale-105 transform transition duration-300 dark:bg-gray-800">
              <h4 class="text-xl font-semibold mb-4">Pembuatan Tugas Pemrograman</h4>
              <p>Codingan yang rapih dan output yang menarik serta bermanfaat.</p>
            </div>
          </div>

          <!-- Service 3 with AOS -->
          <div data-aos="fade-up" data-aos-duration="900">
            <div class="bg-white shadow-md rounded-lg p-6 hover:bg-blue-600 hover:text-white hover:scale-105 transform transition duration-300 dark:bg-gray-800">
              <h4 class="text-xl font-semibold mb-4">Pengerjaan Tugas Matapelajaran</h4>
              <p>Dapatkan solusi cepat dan akurat untuk tugas matapelajaran SMK kamu.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Running Text Multi-line Section -->
    <div class="multi-marquee-container bg-gray-300 dark:bg-gray-800 py-4">
      <div class="marquee-row">
        <div class="marquee-content">
          <div class="marquee-card">Jasa Joki Tugas SMK</div>
          <div class="marquee-card">Anti Plagiarisme</div>
          <div class="marquee-card">Aman & Terpercaya</div>
          <div class="marquee-card">Harga Terjangkau</div>
          <div class="marquee-card">Kualitas Terbaik</div>
          <div class="marquee-card">Jasa Joki Tugas SMK</div>
          <div class="marquee-card">Anti Plagiarisme</div>
          <div class="marquee-card">Aman & Terpercaya</div>
          <div class="marquee-card">Harga Terjangkau</div>
          <div class="marquee-card">Kualitas Terbaik</div>
        </div>
      </div>
      <div class="marquee-row">
        <div class="marquee-content reverse">
          <div class="marquee-card">Cepat & Tepat Waktu</div>
          <div class="marquee-card">Solusi Tugas Terbaik</div>
          <div class="marquee-card">Dikerjakan Ahli</div>
          <div class="marquee-card">Dukungan 24/7</div>
          <div class="marquee-card">Privasi Terjamin</div>
          <div class="marquee-card">Cepat & Tepat Waktu</div>
          <div class="marquee-card">Solusi Tugas Terbaik</div>
          <div class="marquee-card">Dikerjakan Ahli</div>
          <div class="marquee-card">Dukungan 24/7</div>
          <div class="marquee-card">Privasi Terjamin</div>
        </div>
      </div>
      <div class="marquee-row">
        <div class="marquee-content marquee-content-slow">
          <div class="marquee-card">Garansi Kualitas</div>
          <div class="marquee-card">Support 24 Jam</div>
          <div class="marquee-card">Pengiriman Tepat Waktu</div>
          <div class="marquee-card">Harga Kompetitif</div>
          <div class="marquee-card">Privasi Dijaga</div>
          <div class="marquee-card">Garansi Kualitas</div>
          <div class="marquee-card">Support 24 Jam</div>
          <div class="marquee-card">Pengiriman Tepat Waktu</div>
          <div class="marquee-card">Harga Kompetitif</div>
          <div class="marquee-card">Privasi Dijaga</div>
        </div>
      </div>
    </div>
  </div>
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
.multi-marquee-container {
  overflow: hidden;
}

.marquee-row {
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 1rem; /* Jarak antar baris */
}

.marquee-content {
  display: flex;
  animation: marquee 20s linear infinite; /* Kecepatan default */
}

.marquee-content.reverse {
  animation: marquee-reverse 20s linear infinite; /* Lintasan berlawanan arah */
}

.marquee-card {
  display: inline-block;
  background-color: #ffffff; /* Warna background card */
  padding: 10px 20px; /* Padding dalam card */
  border-radius: 10px; /* Sudut membulat */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Shadow untuk card */
  color: #333; /* Warna teks */
  font-size: 1rem; /* Ukuran teks */
  font-weight: 600;
  margin-right: 2rem; /* Jarak antar card */
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@keyframes marquee-reverse {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(50%);
  }
}
@keyframes marquee-slow {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.marquee-content-slow {
  animation: marquee-slow 35s linear infinite; /* Perpanjang durasi */
}
</style>
