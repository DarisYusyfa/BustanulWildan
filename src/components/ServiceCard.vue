<template>
  <div>
    <!-- Layanan Kami Section -->
    <section id="layanan" class="bg-gray-100 py-16 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-4">
      <div class="container mx-auto text-center">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Service 1 with AOS -->
          <div data-aos="fade-up" data-aos-duration="500">
            <div class="bg-white shadow-md rounded-lg p-6 hover:bg-blue-600 hover:text-white hover:scale-105 transform transition duration-300 dark:bg-gray-800">
              <div class="flex justify-center mb-4">
                <BookOpenIcon class="h-12 w-12 text-blue-600" />
              </div>
              <h4 class="text-xl font-semibold mb-4">Pengajian Kitab Kuning</h4>
              <p>Mendalami kitab-kitab klasik untuk memahami ajaran Islam secara mendalam.</p>
            </div>
          </div>

          <!-- Service 2 with AOS -->
          <div data-aos="fade-up" data-aos-duration="700">
            <div class="bg-white shadow-md rounded-lg p-6 hover:bg-blue-600 hover:text-white hover:scale-105 transform transition duration-300 dark:bg-gray-800">
              <div class="flex justify-center mb-4">
                <AcademicCapIcon class="h-12 w-12 text-blue-600" />
              </div>
              <h4 class="text-xl font-semibold mb-4">Mubaligh/Ceramah</h4>
              <p>Program ini melatih mental santri untuk menyampaikan ilmu kepada masyarakat</p>
            </div>
          </div>

          <!-- Service 3 with AOS -->
          <div data-aos="fade-up" data-aos-duration="900">
            <div class="bg-white shadow-md rounded-lg p-6 hover:bg-blue-600 hover:text-white hover:scale-105 transform transition duration-300 dark:bg-gray-800">
              <div class="flex justify-center mb-4">
                <GlobeAltIcon class="h-12 w-12 text-blue-600" />
              </div>
              <h4 class="text-xl font-semibold mb-4">Pelatihan Bahasa Arab</h4>
              <p>Peningkatan kemampuan berbahasa Arab untuk komunikasi dan pemahaman kitab.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Running Text Multi-line Section -->
    <div class="multi-marquee-container bg-gray-300 dark:bg-gray-800 py-4">
      <div class="marquee-row">
        <div class="marquee-content">
          <div class="marquee-card">Pendidikan Berbasis Agama</div>
          <div class="marquee-card">Menguatkan Akhlak Santri</div>
          <div class="marquee-card">Kegiatan Keagamaan Rutin</div>
          <div class="marquee-card">Bimbingan Belajar Mandiri</div>
          <div class="marquee-card">Kualitas Pengajaran Terbaik</div>
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
import { BookOpenIcon, AcademicCapIcon, GlobeAltIcon } from '@heroicons/vue/24/outline'; // Mengimpor ikon

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
  border-radius: 20px; /* Sudut membulat */
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
