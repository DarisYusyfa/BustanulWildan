<template>
  <section id="testimoni" class="bg-white dark:bg-gray-800 rounded-lg shadow-lg py-16 text-white px-4">
    <div class="container mx-auto text-center">
      <div class="flex space-x-4 overflow-x-scroll">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-gray-700 shadow-md rounded-lg p-6 flex-shrink-0 w-72 hover:shadow-lg transition duration-300">
          <p class="mb-4">{{ testimonial.quote }}</p>
          <p class="font-semibold">- {{ testimonial.author }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    quote: 'Sangat membantu! Tugas saya selesai tepat waktu dengan hasil memuaskan.',
    author: 'Siswa SMK Kelas 10',
  },
  {
    quote: 'Pelayanan sangat baik dan responsif. Terima kasih!',
    author: 'Siswa SMK Kelas 11',
  },
  {
    quote: 'Hasilnya lebih dari yang saya harapkan. Luar biasa!',
    author: 'Siswa SMK Kelas 12',
  },
  {
    quote: 'Hasilnya lebih dari yang saya harapkan. Luar biasa!',
    author: 'Siswa SMK Jurusan PPLG',
  },
  {
    quote: 'Hasilnya lebih dari yang saya harapkan. Luar biasa!',
    author: 'Siswa SMK Jurusan APHP',
  },
  {
    quote: 'Hasilnya lebih dari yang saya harapkan. Luar biasa!',
    author: 'Siswa SMK Jurusan BBDP',
  },
  {
    quote: 'Hasilnya lebih dari yang saya harapkan. Luar biasa!',
    author: 'Siswa SMK Jurusan TKRO',
  },
];
</script>

<style scoped>
.container {
  display: flex; /* Flex untuk menyusun testimoni */
  justify-content: center; /* Centering konten */
}
</style>
