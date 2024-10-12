<template>
  <div>
    <HeroSection />
    <section class="py-10 bg-gray-100 dark:bg-gray-700"><OrderFlow /></section>

    <!-- Layanan Kami Section -->
    <section class="py-10 bg-gray-100 dark:bg-gray-700">
      <h3 class="text-3xl font-bold text-center mb-8 text-gray-800 dark:bg-gray-700 dark:text-gray-200">Layanan Kami</h3>
      <ServiceCard />
    </section>

    <!-- Apa Kata Mereka Section -->
    <section class="py-10 bg-gray-100 dark:bg-gray-700">
      <h3 class="text-3xl font-bold text-center mb-8 text-gray-800 dark:bg-gray-700 dark:text-gray-200">Apa Kata Mereka</h3>
      <TestimonialSlide />
    </section>

    <!-- Daftar Harga Section -->
    <PriceList />

    <!-- Form Pemesanan Section -->
    <FormOrder />

    <!-- Peringatan Bergabung -->
    <div class="flex justify-center items-center mt-8 px-3">
      <font-awesome-icon icon="volume-up" class="text-2xl mr-2 dark:text-white text-darkblue"></font-awesome-icon>
      <div class="marquee">
        <p class="text-xl text-center text-white dark:text-gray-200">Bagi Yang Ingin Bergabung Dengan Kami Sebagai Worker Silahkan Isi Form dan Deskripsi</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue';
import ServiceCard from '../components/ServiceCard.vue';
import TestimonialSlide from '../components/TestimonialSlide.vue';
import OrderFlow from '../components/OrderFlow.vue';
import PriceList from '../components/PriceList.vue';
import FormOrder from '../components/FormOrder.vue';
</script>

<style scoped>
.text-darkblue {
  color: black; /* Ganti dengan kode warna biru gelap yang Anda inginkan */
}

/* Styling untuk marquee */
.marquee {
  overflow: hidden;
  white-space: nowrap;
  width: 100%; /* Lebar penuh untuk tampilan yang lebih baik */
  margin: 0 20px; /* Tambahkan margin untuk ruang di kedua sisi */
}

.marquee p {
  display: inline-block;
  animation: marquee 12s linear infinite; /* Durasi animasi dan pengulangan */
}

@keyframes marquee {
  0% {
    transform: translateX(100%); /* Mulai dari luar kanan */
  }
  100% {
    transform: translateX(-100%); /* Berhenti di luar kiri */
  }
}
</style>
