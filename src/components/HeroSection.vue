<template>
  <section id="home" :class="isDarkMode ? 'text-white dark' : 'text-black'" class="py-40 text-center relative overflow-hidden px-4 bg-gradient">
    <div class="container mx-auto relative z-10">
      <h2 class="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Pondok Pesantren Bustanul Wildan</h2>

      <p class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl arabic-font mb-10">مَعْھَدْ بُسْتَانُ الْوِلْدَانْ اَلْأِسْلَامِی</p>

      <!-- Tambahkan margin top lebih besar -->
      <p class="text-lg sm:text-xl md:text-2xl lg:text-xl mt-12">Jl. Tanjakansari No.24 Cileunyi Wetan, Bandung, Jawa Barat, Indonesia</p>
    </div>

    <!-- Background gradient -->
    <div class="absolute inset-0 gradient-background z-0"></div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Dark mode state
const isDarkMode = ref(true); // Set default to dark mode

// Set dark mode preference on mount
onMounted(() => {
  const savedMode = localStorage.getItem('isDarkMode');
  if (savedMode !== null) {
    isDarkMode.value = JSON.parse(savedMode);
  } else {
    isDarkMode.value = true; // Default to dark mode
  }
});

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode.value));
};
</script>

<style scoped>
/* Menerapkan font khusus untuk teks Arab */
.arabic-font {
  font-family: 'Amiri', serif;
}

/* Gradasi warna latar belakang */
.gradient-background {
  background: linear-gradient(135deg, #00b300, #ffffff, #0055ff);
  opacity: 0.8; /* Atur tingkat transparansi jika perlu */
}
</style>
