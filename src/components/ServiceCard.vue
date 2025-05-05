<template>
  <div>
    <!-- Layanan Kami Section -->
    <section id="layanan" class="bg-gradient-to-r from-blue-400 to-indigo-500 py-16 text-black px-4">
      <div class="container mx-auto text-center">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Service 1 with AOS -->
          <div data-aos="fade-up" data-aos-duration="500">
            <div class="bg-white shadow-lg rounded-xl p-6 hover:bg-blue-600 hover:text-white hover:scale-105 transform transition duration-300 dark:bg-gray-800">
              <div class="flex justify-center mb-6">
                <BookOpenIcon class="h-16 w-16 text-blue-600 dark:text-blue-300" />
              </div>
              <h4 class="text-2xl font-semibold mb-4">Pengajian Kitab Kuning</h4>
              <p class="text-lg">Mendalami kitab-kitab klasik untuk memahami ajaran Islam secara mendalam.</p>
            </div>
          </div>

          <!-- Service 2 with AOS -->
          <div data-aos="fade-up" data-aos-duration="700">
            <div class="bg-white shadow-lg rounded-xl p-6 hover:bg-blue-600 hover:text-white hover:scale-105 transform transition duration-300 dark:bg-gray-800">
              <div class="flex justify-center mb-6">
                <AcademicCapIcon class="h-16 w-16 text-blue-600 dark:text-blue-300" />
              </div>
              <h4 class="text-2xl font-semibold mb-4">Mubaligh/Ceramah</h4>
              <p class="text-lg">Program ini melatih mental santri untuk menyampaikan ilmu kepada masyarakat.</p>
            </div>
          </div>

          <!-- Service 3 with AOS -->
          <div data-aos="fade-up" data-aos-duration="900">
            <div class="bg-white shadow-lg rounded-xl p-6 hover:bg-blue-600 hover:text-white hover:scale-105 transform transition duration-300 dark:bg-gray-800">
              <div class="flex justify-center mb-6">
                <GlobeAltIcon class="h-16 w-16 text-blue-600 dark:text-blue-300" />
              </div>
              <h4 class="text-2xl font-semibold mb-4">Ekstrakurikuler</h4>
              <p class="text-lg">Hadroh, Marawis, Gambus</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Running Text Multi-line Section -->
    <div class="multi-marquee-container py-4">
      <div class="marquee-row">
        <div class="marquee-content">
          <div class="marquee-card">Pendidikan Berbasis Agama</div>
          <div class="marquee-card">Menguatkan Akhlak Santri</div>
          <div class="marquee-card">Kegiatan Keagamaan Rutin</div>
          <div class="marquee-card">Bimbingan Belajar Mandiri</div>
          <div class="marquee-card">Kualitas Pengajaran Terbaik</div>
        </div>
      </div>
      <div class="marquee-row">
        <div class="marquee-content reverse">
          <div class="marquee-card">Kegiatan Sosial Santri</div>
          <div class="marquee-card">Kunjungan ke Panti Asuhan</div>
          <div class="marquee-card">Diskusi Keagamaan</div>
          <div class="marquee-card">Pengajian Malam</div>
          <div class="marquee-card">Seni dan Budaya Islam</div>
        </div>
      </div>
      <div class="marquee-row">
        <div class="marquee-content marquee-content-slow">
          <div class="marquee-card">Membangun Karakter Santri</div>
          <div class="marquee-card">Pengembangan Potensi Diri</div>
          <div class="marquee-card">Pembinaan Mental dan Spiritual</div>
          <div class="marquee-card">Kerjasama dengan Komunitas</div>
          <div class="marquee-card">Membangun Hubungan Baik</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BookOpenIcon, AcademicCapIcon, GlobeAltIcon } from '@heroicons/vue/24/solid'; // Mengimpor ikon solid

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
  padding: 12px 24px; /* Padding dalam card */
  border-radius: 30px; /* Sudut membulat lebih besar */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Shadow untuk card */
  color: #333; /* Warna teks */
  font-size: 1.125rem; /* Ukuran teks sedikit lebih besar */
  font-weight: 600;
  margin-right: 3rem; /* Jarak antar card */
  transition: transform 0.3s ease-in-out, background-color 0.3s;
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

.bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradientAnimation 6s ease infinite;
}

@keyframes gradientAnimation {
  0% {
    background-position: 100% 0%;
  }
  50% {
    background-position: 0% 100%;
  }
  100% {
    background-position: 100% 0%;
  }
}
</style>
