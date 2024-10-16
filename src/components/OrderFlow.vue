<template>
  <div class="container mx-auto my-10 px-4 lg:px-0 flex flex-col items-center lg:flex-row lg:items-start">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 lg:p-10 mx-4 lg:mx-0 flex flex-col items-center lg:flex-row lg:items-start w-full lg:w-[80%] relative">
      <!-- Elemen untuk foto pimpinan pesantren tanpa bingkai -->
      <div class="w-64 h-64 lg:w-[300px] lg:h-[300px] transition-all duration-1000" :class="{ 'blur-md': isBlurring }">
        <img :src="leaders[currentLeader].image" alt="Foto Pimpinan Pesantren" class="object-cover w-full h-full">
      </div>

      <!-- Quote dari pimpinan pesantren -->
      <div class="ml-0 lg:ml-40 mt-10 lg:mt-32 flex flex-col items-center lg:items-start relative">
        <blockquote class="text-lg sm:text-xl md:text-2xl lg:text-xl dark:text-gray-200 italic break-words">
          {{ leaders[currentLeader].quote }}
        </blockquote> <br><br>
        <p class="mt-4 text-center lg:text-right text-sm sm:text-base lg:text-lg dark:text-gray-200 lg:mr-8 break-words">
          - {{ leaders[currentLeader].name }}
          <span class="block lg:inline">, {{ leaders[currentLeader].title }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const leaders = ref([
  {
    image: '/images/kganom.png',
    quote: '“Pendidikan adalah kunci untuk membuka pintu keberhasilan, dan iman adalah cahaya yang akan menuntun kita di jalan yang benar.”',
    name: 'Alm.KH. Agus Mastur',
    title: 'Pimpinan Ponpes Bustanul Wildan'
  },
  {
    image: '/images/kgsepuh.png',
    quote: '“Kebijaksanaan adalah hasil dari pengalaman dan pembelajaran yang terus menerus.”',
    name: 'KH. Yazid Bustomi',
    title: 'Pimpinan Ponpes BUstanul Wildan'
  }
]);

const currentLeader = ref(0);
const isBlurring = ref(false);

function nextLeader() {
  isBlurring.value = true;
  setTimeout(() => {
    currentLeader.value = (currentLeader.value + 1) % leaders.value.length;
    isBlurring.value = false;
  }, 1000); // Durasi transisi blur lebih lama
}

onMounted(() => {
  const interval = setInterval(nextLeader, 5000); // Ubah setiap 5 detik
  onUnmounted(() => clearInterval(interval));
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  position: relative;
}

img {
  object-fit: cover;
}

.blur-md {
  filter: blur(4px);
  transition: filter 1s ease; /* Transisi yang lebih smooth */
}
</style>