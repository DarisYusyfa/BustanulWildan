<template>
  <div>
    <HeroSection />
    <section class="py-10 bg-gray-100 dark:bg-gray-700"><OrderFlow /></section>

    <!-- Layanan Kami Section -->
    <section class="py-10 bg-gray-100 dark:bg-gray-700">
      <h3 class="text-3xl font-bold text-center mb-8 text-gray-800 dark:bg-gray-700 dark:text-gray-200">Program Unggulan</h3>
      <ServiceCard />
    </section>

    <!-- Apa Kata Mereka Section -->
    <section class="py-10 bg-gray-100 dark:bg-gray-700">
      <h3 class="text-3xl font-bold text-center mb-8 text-gray-800 dark:bg-gray-700 dark:text-gray-200">Apa Kata Mereka</h3>
      <TestimonialSlide />
    </section>

    <PriceList />

    <FormOrder />

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