<template>
  <div class="bg-white rounded-xl shadow w-40 p-3 text-center border border-gray-200">
    <img :src="foto" alt="Foto" class="w-16 h-16 mx-auto rounded-full object-cover mb-2 border" />
    <h3 class="text-sm font-semibold text-gray-800">{{ nama }}</h3>
    <p class="text-xs text-gray-500">{{ jabatan }}</p>
  </div>
</template>

<script setup>
defineProps({
  foto: String,
  nama: String,
  jabatan: String,
});
</script>
