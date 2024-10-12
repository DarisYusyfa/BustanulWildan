<template>
  <div class="container mx-auto my-10 flex flex-col items-center lg:flex-row lg:items-start">
    <!-- Card untuk menampung Lottie dan diagram alur pemesanan -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center lg:flex-row lg:items-start lg:p-10 w-full lg:w-[80%] relative">
      <!-- Elemen untuk animasi Lottie -->
      <dotlottie-player src="/images/animation.json" background="transparent" speed="1" class="w-64 h-64 lg:w-[600px] lg:h-[600px]" loop autoplay></dotlottie-player>

      <!-- Diagram alur pemesanan -->
      <div class="ml-0 lg:ml-40 mt-10 lg:mt-32 flex flex-col items-center lg:items-start relative">
        <div class="step-wrapper">
          <div class="step">
            <div class="step-number">1</div>
            <span class="step-text dark:text-gray-200">Chat WA Admin/Isi Form</span>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <span class="step-text dark:text-gray-200">Konsultasi</span>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <span class="step-text dark:text-gray-200">Pembayaran</span>
          </div>
          <div class="step">
            <div class="step-number">4</div>
            <span class="step-text dark:text-gray-200">Proses Pengerjaan</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Tidak ada script yang diperlukan di sini
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  position: relative;
}

.step-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
}

.step {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
}

.step-number {
  background-color: #2563eb; /* bg-blue-600 */
  color: white;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem; /* text-lg */
  position: relative;
}

.step-text {
  margin-left: 2.5rem; /* ml-10 */
  font-size: 1.125rem; /* text-lg */
  color: #1f2937; /* text-gray-800 */
}

/* Garis penghubung antara step */
.step::before {
  content: '';
  position: absolute;
  left: 1.5rem; /* Agar posisinya di tengah nomor */
  top: 3rem; /* Mulai dari bawah lingkaran */
  width: 2px;
  height: 4rem; /* Panjang garis antar step */
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(37, 99, 235, 0.7));
  background-size: 200% 200%;
  animation: gradient-animation 3s linear infinite;
}

.step:last-child::before {
  display: none; /* Hilangkan garis pada step terakhir */
}

/* Animasi light gradient running */
@keyframes gradient-animation {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 0% 100%;
  }
}
</style>
