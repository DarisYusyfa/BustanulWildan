<template>
  <div class="bg-gray-50 min-h-screen dark:bg-gray-700 dark:text-gray-200 py-10 px-4">
    <section class="text-center mb-10">
      <h1 class="text-3xl font-bold dark:bg-gray-700 dark:text-gray-200 text-green-700 mb-2">Struktur Pengurus Pondok Pesantren Bustanul Wildan</h1>
    </section>

    <div class="flex flex-col items-center space-y-12 relative">
      <!-- Baris 1: Pimpinan -->
      <div class="flex justify-center">
        <CardMini :foto="'/img/pengurus/ahmad-hasan.jpg'" nama="KH. Tajusubki" jabatan="Pendiri Pesantren" />
      </div>
      <div class="flex justify-center">
        <CardMini :foto="'/img/pengurus/ahmad-hasan.jpg'" nama="KH. Yazid Bustomi" jabatan="Sesepuh Pesantren" />
      </div>
      <div class="flex justify-center">
        <CardMini :foto="'/img/pengurus/ahmad-hasan.jpg'" nama="(Alm) KH. Agus Mastur Gufron" jabatan="Pimpinan Umum" />
      </div>

      <!-- Baris 2: Wakil & Sekretaris -->
      <div class="flex gap-10 justify-center">
        <CardMini :foto="'/img/pengurus/miftahuddin.jpg'" nama="Hj. Engkos " jabatan="Pengasuh/pengajar" />
        <CardMini :foto="'/img/pengurus/anwar-sadat.jpg'" nama="Hj. Ismat" jabatan="Pengasuh/pengajar" />
      </div>

      <!-- Baris 3: Pengasuh -->
      <div class="flex gap-10 justify-center">
        <CardMini :foto="'/img/pengurus/anwar-sadat.jpg'" nama="Hj. Henhen" jabatan="pengajar" />
        <CardMini :foto="'/img/pengurus/nisa.jpg'" nama="Hj. Nanang" jabatan="pengajar" />
      </div>
    </div>
  </div>
</template>

<script setup>
import CardMini from './CardMini.vue';
</script>
