<template>
  <button
    @click="toggleDarkMode"
    class="flex items-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
    :class="{
      'bg-gray-200 dark:bg-gray-700': !isDarkMode,
      'bg-gray-800 dark:bg-gray-300': isDarkMode,
    }"
    aria-label="Toggle dark mode"
  >
    <svg v-if="!isDarkMode" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-800 dark:text-gray-200">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1.5M12 19.5V21m8.25-9.75h-1.5M3.75 12h-1.5m16.312-6.75l-1.06 1.06m-12.62 0L6.438 6.75m12.62 12l-1.06-1.06M6.438 17.25l-1.06 1.06" />
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-800 dark:text-gray-200">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1.5M12 19.5V21m8.25-9.75h-1.5M3.75 12h-1.5m16.312-6.75l-1.06 1.06m-12.62 0L6.438 6.75m12.62 12l-1.06-1.06M6.438 17.25l-1.06 1.06" />
    </svg>
  </button>
</template>

<script setup>
import { ref } from 'vue';

// State untuk menyimpan status dark mode
const isDarkMode = ref(false);

// Fungsi untuk toggle dark mode
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};
</script>

<style scoped>
/* Tambahkan styling tambahan jika diperlukan */
</style>
