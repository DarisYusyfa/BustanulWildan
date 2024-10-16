<template>
  <section id="form-registrasi" class="bg-gray-100 py-16 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-4">
    <div class="container mx-auto text-center">
      <p class="mb-12 text-lg">Isi formulir di bawah ini untuk mendaftar ke pesantren kami. Kami akan segera menghubungi Anda!</p>

      <form class="max-w-xl mx-auto bg-white shadow-md rounded-lg p-8 dark:bg-gray-800" @submit="handleFormSubmit">
        <div class="mb-4">
          <label for="fullName" class="block text-left text-lg mb-2">Nama Lengkap</label>
          <input type="text" id="fullName" name="fullName" required class="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200" placeholder="Masukkan nama lengkap" />
        </div>

        <div class="mb-4">
          <label for="birthDate" class="block text-left text-lg mb-2">Tanggal Lahir</label>
          <input type="date" id="birthDate" name="birthDate" required class="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200" />
        </div>

        <div class="mb-4">
          <label for="address" class="block text-left text-lg mb-2">Alamat</label>
          <input type="text" id="address" name="address" required class="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200" placeholder="Masukkan alamat lengkap" />
        </div>

        <div class="mb-4">
          <label for="email" class="block text-left text-lg mb-2">Email</label>
          <input type="email" id="email" name="email" required class="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200" placeholder="Masukkan email" />
          <span v-if="emailError" class="text-red-500 text-sm">{{ emailError }}</span>
        </div>

        <div class="mb-4">
          <label for="phone" class="block text-left text-lg mb-2">Nomor Telepon</label>
          <input type="tel" id="phone" name="phone" required class="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200" placeholder="Masukkan nomor telepon" />
          <span v-if="phoneError" class="text-red-500 text-sm">{{ phoneError }}</span>
        </div>

        <div class="mb-4">
          <label for="jenisPeserta" class="block text-left text-lg mb-2">Jenis Peserta</label>
          <select id="jenisPeserta" name="jenisPeserta" required class="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200">
            <option value="Salafy">Salafy</option>
            <option value="Kuliah">Kuliah</option>
            <option value="SMA">SMA</option>
            <option value="SMP">SMP</option>
          </select>
        </div>

        <div class="mb-4">
          <label for="previousEducation" class="block text-left text-lg mb-2">Riwayat Pendidikan</label>
          <textarea id="previousEducation" name="previousEducation" rows="4" class="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200" placeholder="Masukkan riwayat pendidikan sebelumnya"></textarea>
        </div>

        <div class="mb-4">
          <label for="parentNameMother" class="block text-left text-lg mb-2">Nama Ibu</label>
          <input type="text" id="parentNameMother" name="parentNameMother" required class="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200" placeholder="Masukkan nama ibu" />
        </div>

        <div class="mb-4">
          <label for="parentPhoneMother" class="block text-left text-lg mb-2">Nomor Telepon Ibu</label>
          <input type="tel" id="parentPhoneMother" name="parentPhoneMother" required class="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200" placeholder="Masukkan nomor telepon ibu" />
        </div>

        <div class="mb-4">
          <label for="parentNameFather" class="block text-left text-lg mb-2">Nama Bapak</label>
          <input type="text" id="parentNameFather" name="parentNameFather" required class="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200" placeholder="Masukkan nama bapak" />
        </div>

        <div class="mb-4">
          <label for="parentPhoneFather" class="block text-left text-lg mb-2">Nomor Telepon Bapak</label>
          <input type="tel" id="parentPhoneFather" name="parentPhoneFather" required class="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200" placeholder="Masukkan nomor telepon bapak" />
        </div>

        <div class="mb-4">
          <label for="entryDate" class="block text-left text-lg mb-2">Tanggal Masuk Pesantren</label>
          <input type="date" id="entryDate" name="entryDate" required class="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200" />
        </div>

        <button type="submit" class="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-500 transition duration-300 w-full">Daftar Sekarang</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'; // Import SweetAlert2

const emailError = ref('');
const phoneError = ref('');

const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
};

const validatePhone = (phone) => {
  if (!phone.startsWith('62') && !phone.startsWith('+62')) {
    return false;
  }
  const re = /^\+?62\d{8,14}$/;
  return re.test(phone);
};

const handleFormSubmit = (e) => {
  e.preventDefault();

  const form = e.target;
  const email = form.email.value;
  const phone = form.phone.value;

  emailError.value = '';
  phoneError.value = '';

  if (!validateEmail(email)) {
    emailError.value = 'Format email tidak valid.';
    return;
  }

  if (!validatePhone(phone)) {
    phoneError.value = 'Nomor telepon harus diawali dengan 62 atau +62.';
    return;
  }

  emailjs
    .sendForm('service_w71c4ct', 'template_3rjr2xc', form, 'LJee1kFw8oJVWPCAH')
    .then((result) => {
      console.log('Email berhasil dikirim:', result.text);

      // Menampilkan SweetAlert
      Swal.fire({
        title: 'Pendaftaran Berhasil Dikirim!',
        text: 'Kami akan segera menghubungi Anda untuk proses lebih lanjut.',
        icon: 'success',
        confirmButtonText: 'Oke',
      });

      form.reset();
    })
    .catch((error) => {
      console.log('Gagal mengirim email:', error.text);

      // Menampilkan SweetAlert dengan pesan error
      Swal.fire({
        title: 'Gagal Mengirim Pendaftaran',
        text: 'Coba lagi nanti.',
        icon: 'error',
        confirmButtonText: 'Oke',
      });
    });
};
</script>

<style scoped>
/* Tambahkan styling tambahan jika diperlukan */
</style>
