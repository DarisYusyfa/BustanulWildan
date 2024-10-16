<template>
  <div>
    <!-- Layanan Kami Section -->
    <section class="py-10 bg-gray-100 dark:bg-gray-700">
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
