<template>
  <div>
    <HeroSection />
    <section class="py-10 bg-gray-100 dark:bg-gray-700"><OrderFlow /></section>

    <section class="py-10 bg-gray-100 dark:bg-gray-700">
      <h1 class="text-3xl font-bold text-center mb-8 text-gray-800 dark:bg-gray-700 dark:text-gray-200">Program Unggulan</h1>
      <ServiceCard />
    </section>
    <section class="py-10 bg-gray-100 dark:bg-gray-700"><Struktur /></section>

    <section class="py-10 bg-gray-100 dark:bg-gray-700">
      <h1 class="text-3xl font-bold text-center mb-8 text-gray-800 dark:bg-gray-700 dark:text-gray-200">Apa Kata Mereka</h1>
      <TestimonialSlide />
    </section>

    <section class="py-10 bg-gray-100 dark:bg-gray-700">
      <h1 class="text-3xl font-bold text-center mb-8 text-gray-800 dark:bg-gray-700 dark:text-gray-200">Artikel Terbaru</h1>
      <PriceList />
    </section>

    <div class="flex justify-center items-center mt-2 mb-2 px-3">
      <font-awesome-icon icon="volume-up" class="text-xl mr-2 dark:text-white text-darkblue"></font-awesome-icon>
      <div class="marquee">
        <p class="text-lg text-center text-white dark:text-gray-200">Ponpes Bustanul Wildan Membuka Pendafataran Bagi Santri/Santriawati Baru | Bagi Santri dan Alumni Dimohon Untuk Memberikan Kritik dan Saran Pada Web Official Ini</p>
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
import Struktur from '../components/Struktur.vue';
</script>

<style scoped>
.text-darkblue {
  color: black;
}

.marquee {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  margin: 0 20px;
}

.marquee p {
  display: inline-block;
  animation: marquee 12s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(100%); /* Mulai dari luar kanan */
  }
  100% {
    transform: translateX(-100%); /* Berhenti di luar kiri */
  }
}

.testimonial-section {
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
