<template>
  <div class="bg-gray-50 min-h-screen py-10 px-4">
    <!-- Hero Section -->
    <section class="text-center mb-10">
      <h1 class="text-4xl font-bold text-indigo-700 mb-4">Pengajian Rutin Pesantren</h1>
      <p class="text-gray-700 text-lg max-w-2xl mx-auto">Kegiatan pengajian mingguan bersama warga sekitar, alumni, dan para bapak-bapak. Terbuka untuk umum.</p>
    </section>

    <!-- Jadwal Pengajian -->
    <section class="bg-white shadow rounded-xl p-6 max-w-4xl mx-auto mb-8">
      <h2 class="text-2xl font-semibold text-indigo-600 mb-4">Jadwal Rutin</h2>
      <ul class="space-y-2 text-gray-700 list-disc list-inside">
        <li><strong>Hari:</strong> Setiap Ahad (Minggu)</li>
        <li><strong>Waktu:</strong> Pukul 07.00 - 09.00 WIB</li>
        <li><strong>Tempat:</strong> Aula Pesantren / Masjid</li>
        <li><strong>Pemateri:</strong> Bergilir dari asatidz dan alumni</li>
      </ul>
    </section>

    <!-- Daftar Materi / Tema -->
    <section class="bg-white shadow rounded-xl p-6 max-w-4xl mx-auto mb-8">
      <h2 class="text-2xl font-semibold text-indigo-600 mb-4">Tema Pengajian Terbaru</h2>
      <ul class="divide-y divide-gray-200">
        <li v-for="tema in daftarTema" :key="tema.id" class="py-3">
          <h3 class="text-lg font-bold text-gray-800">{{ tema.judul }}</h3>
          <p class="text-sm text-gray-600">Oleh: {{ tema.pemateri }} - {{ tema.tanggal }}</p>
        </li>
      </ul>
    </section>

    <!-- Ajakan Bergabung -->
    <section class="text-center text-gray-700 mt-10 max-w-xl mx-auto">
      <p class="text-lg">Mari bergabung dalam majelis ilmu ini. Terbuka untuk semua kalangan, baik warga sekitar, alumni, maupun masyarakat umum.</p>
      <p class="mt-2">Informasi lebih lanjut: <strong>+62 813-4567-8910</strong></p>
    </section>
  </div>
</template>

<script setup>
const daftarTema = [
  {
    id: 1,
    judul: 'Keutamaan Shalat Berjamaah',
    pemateri: 'Ust. Ahmad Fauzi, Lc',
    tanggal: 'Minggu, 4 Mei 2025',
  },
  {
    id: 2,
    judul: 'Menjaga Ukhuwah Islamiyah di Tengah Masyarakat',
    pemateri: 'KH. Mahmud Abdullah',
    tanggal: 'Minggu, 27 April 2025',
  },
  {
    id: 3,
    judul: 'Adab Menuntut Ilmu',
    pemateri: 'Ust. Riza Maulana, M.Ag',
    tanggal: 'Minggu, 20 April 2025',
  },
];
</script>
