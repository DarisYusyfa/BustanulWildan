<template>
  <div class="bg-gray-50 min-h-screen py-10 px-4">
    <!-- Hero Section -->
    <section class="text-center mb-10">
      <h1 class="text-4xl font-bold text-green-700 mb-4">Penerimaan Santri Baru</h1>
      <p class="text-gray-700 text-lg max-w-2xl mx-auto">Selamat datang di halaman resmi PPDB Pesantren. Daftarkan putra-putri Anda untuk menjadi bagian dari keluarga besar pesantren kami.</p>
    </section>

    <!-- Informasi PPDB -->
    <section class="bg-white shadow rounded-xl p-6 max-w-4xl mx-auto mb-8">
      <h2 class="text-2xl font-semibold text-green-600 mb-4">Informasi Pendaftaran</h2>
      <ul class="space-y-2 text-gray-700 list-disc list-inside">
        <li>Mengisi form pendaftaran</li>
        <li>Datang langsung ke pesantren</li>
        <li>Konfirmasi Pendaftaran ke panitia</li>
      </ul>
    </section>

    <!-- Formulir Pendaftaran -->
    <section class="bg-white shadow rounded-xl p-6 max-w-4xl mx-auto mb-8">
      <h2 class="text-2xl font-semibold text-green-600 mb-4">Formulir Pendaftaran</h2>
      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label class="block mb-1 font-medium text-gray-700">Nama Lengkap</label>
          <input v-model="form.nama" type="text" required class="w-full border border-gray-300 rounded p-2" />
        </div>
        <div>
          <label class="block mb-1 font-medium text-gray-700">Tempat, Tanggal Lahir</label>
          <input v-model="form.ttl" type="text" required class="w-full border border-gray-300 rounded p-2" />
        </div>
        <div>
          <label class="block mb-1 font-medium text-gray-700">Asal Sekolah</label>
          <input v-model="form.asalSekolah" type="text" required class="w-full border border-gray-300 rounded p-2" />
        </div>
        <div>
          <label class="block mb-1 font-medium text-gray-700">Nomor HP Orang Tua/Wali</label>
          <input v-model="form.hp" type="tel" required class="w-full border border-gray-300 rounded p-2" />
        </div>
        <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Daftar Sekarang</button>
      </form>
    </section>

    <!-- Kontak -->
    <section class="text-center text-gray-600 mt-10">
      <p>Untuk pertanyaan lebih lanjut, silakan hubungi admin PPDB di <strong>+62 812-3456-7890</strong></p>
    </section>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const form = reactive({
  nama: '',
  ttl: '',
  asalSekolah: '',
  hp: '',
});

const submitForm = () => {
  // Di sini kamu bisa kirim data ke API atau tampilkan alert
  alert(`Terima kasih ${form.nama}, pendaftaranmu sudah kami terima!`);
  // Reset form (opsional)
  form.nama = '';
  form.ttl = '';
  form.asalSekolah = '';
  form.hp = '';
};
</script>
