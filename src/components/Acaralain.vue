<template>
  <div class="bg-gray-50 min-h-screen py-10 px-4">
    <!-- Hero Section -->
    <section class="text-center mb-10">
      <h1 class="text-4xl font-bold text-amber-700 mb-4">Agenda & Acara Spesial Pesantren</h1>
      <p class="text-gray-700 text-lg max-w-2xl mx-auto">Berikut adalah agenda dan perayaan penting yang dilaksanakan di lingkungan pesantren sepanjang tahun.</p>
    </section>

    <!-- Daftar Acara -->
    <section class="grid gap-6 max-w-5xl mx-auto md:grid-cols-2">
      <div v-for="acara in daftarAcara" :key="acara.id" class="bg-white shadow-md rounded-xl p-5 border-l-4" :class="acara.warna">
        <h2 class="text-xl font-bold text-gray-800 mb-1">{{ acara.nama }}</h2>
        <p class="text-sm text-gray-600 mb-1">{{ acara.tanggal }}</p>
        <p class="text-gray-700">{{ acara.deskripsi }}</p>
      </div>
    </section>

    <!-- Catatan atau Ajakan -->
    <section class="text-center text-gray-700 mt-10 max-w-xl mx-auto">
      <p class="text-lg">Mari bersama-sama meramaikan acara keagamaan dan kebangsaan sebagai bentuk cinta terhadap agama dan tanah air.</p>
      <p class="mt-2">Hubungi panitia: <strong>+62 812-9876-5432</strong></p>
    </section>
  </div>
</template>

<script setup>
const daftarAcara = [
  {
    id: 1,
    nama: 'Maulid Nabi Muhammad SAW',
    tanggal: "12 Rabi'ul Awwal 1447 H",
    deskripsi: 'Peringatan kelahiran Rasulullah dengan pembacaan maulid, ceramah, dan shalawat bersama.',
    warna: 'border-amber-500',
  },
  {
    id: 2,
    nama: '1 Muharram / Tahun Baru Islam',
    tanggal: '1 Muharram 1447 H',
    deskripsi: 'Pawai obor, tausiyah malam tahun baru, dan doa bersama menyambut tahun hijriyah.',
    warna: 'border-indigo-500',
  },
  {
    id: 3,
    nama: 'Masa Orientasi Santri Baru (MOSBA)',
    tanggal: '10 - 15 Juli 2025',
    deskripsi: 'Kegiatan pengenalan lingkungan pesantren dan pembinaan karakter santri baru.',
    warna: 'border-green-500',
  },
  {
    id: 4,
    nama: 'HUT RI ke-80',
    tanggal: '17 Agustus 2025',
    deskripsi: 'Upacara bendera, lomba-lomba, dan doa untuk bangsa.',
    warna: 'border-red-500',
  },
  {
    id: 5,
    nama: 'Hari Santri Nasional',
    tanggal: '22 Oktober 2025',
    deskripsi: 'Upacara, kirab santri, dan pengajian umum untuk memperingati semangat perjuangan santri.',
    warna: 'border-purple-500',
  },
  {
    id: 5,
    nama: 'Acara Tahunan Haol Dan Reuni Alumni',
    tanggal: '22 Oktober 2025',
    deskripsi: 'Upacara, kirab santri, dan pengajian umum untuk memperingati semangat perjuangan santri.',
    warna: 'border-purple-500',
  },
];
</script>
