<template>
  <div class="min-h-screen bg-gray-700 dark:bg-gray-900">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
</script>

<style>
/* CSS global */
body {
  font-family: 'Poopins', sans-serif;
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Mencegah overflow horizontal */
}
</style>
