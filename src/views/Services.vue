<template>
  <div>
    <!-- Layanan Kami Section -->
    <section class="py-10 bg-gray-100 dark:bg-gray-700">
      <h3 class="text-3xl font-bold text-center mb-8 text-gray-800 dark:bg-gray-700 dark:text-gray-200">Layanan Kami</h3>
      <ServiceCard />
    </section>
    <PriceList />
    <FormOrder />
  </div>
</template>

<script setup>
import ServiceCard from '../components/ServiceCard.vue';
import PriceList from '../components/PriceList.vue';
import FormOrder from '../components/FormOrder.vue';
</script>

<style scoped></style>
