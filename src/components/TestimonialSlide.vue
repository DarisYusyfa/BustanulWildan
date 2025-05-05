<template>
  <section class="py-16 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 overflow-hidden">
    <div class="mx-auto px-4 max-w-6xl">
      <div class="relative h-[380px] overflow-hidden">
        <div ref="scrollContainer" class="absolute top-0 left-0 right-0">
          <!-- Baris pertama -->
          <div class="flex flex-wrap justify-center gap-6 mb-6">
            <div v-for="(testimoni, index) in testimoniList" :key="`original-${index}`" class="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 w-[260px] text-sm transition-all duration-300 hover:shadow-lg">
              <div class="flex items-center mb-3">
                <img :src="testimoni.avatar" :alt="testimoni.name" class="w-12 h-12 rounded-full object-cover mr-3" />
                <div>
                  <h3 class="text-base font-semibold text-gray-800 dark:text-white">{{ testimoni.name }}</h3>
                  <p class="text-xs text-gray-600 dark:text-gray-300">{{ testimoni.occupation }}</p>
                </div>
              </div>
              <p class="text-gray-700 dark:text-gray-200 italic leading-snug">"{{ testimoni.quote }}"</p>
            </div>
          </div>

          <!-- Duplikasi untuk animasi loop -->
          <div class="flex flex-wrap justify-center gap-6">
            <div v-for="(testimoni, index) in testimoniList" :key="`duplicate-${index}`" class="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 w-[260px] text-sm transition-all duration-300 hover:shadow-lg">
              <div class="flex items-center mb-3">
                <img :src="testimoni.avatar" :alt="testimoni.name" class="w-12 h-12 rounded-full object-cover mr-3" />
                <div>
                  <h3 class="text-base font-semibold text-gray-800 dark:text-white">{{ testimoni.name }}</h3>
                  <p class="text-xs text-gray-600 dark:text-gray-300">{{ testimoni.occupation }}</p>
                </div>
              </div>
              <p class="text-gray-700 dark:text-gray-200 italic leading-snug">"{{ testimoni.quote }}"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const testimoniList = [
  {
    name: 'Ahmad Fauzi',
    occupation: 'Dosen Universitas Indonesia',
    quote: 'Pendidikan di pesantren ini telah membentuk karakter dan intelektual saya, mempersiapkan saya untuk menghadapi tantangan di dunia akademis.',
    avatar: '/placeholder.svg?height=200&width=200',
  },
  {
    name: 'Siti Aminah',
    occupation: 'Pengusaha Sukses',
    quote: 'Nilai-nilai kepemimpinan dan kewirausahaan yang saya pelajari di pesantren menjadi fondasi kesuksesan bisnis saya hari ini.',
    avatar: '/placeholder.svg?height=200&width=200',
  },
  {
    name: 'Muhammad Rizki',
    occupation: "Hafiz Qur'an & Motivator",
    quote: "Program tahfidz di pesantren ini luar biasa. Saya bisa menghafal Al-Qur'an sambil tetap mendapatkan pendidikan umum yang berkualitas.",
    avatar: '/placeholder.svg?height=200&width=200',
  },
  {
    name: 'Aisyah Putri',
    occupation: 'Dokter',
    quote: 'Pesantren ini tidak hanya mengajarkan ilmu agama, tapi juga mendorong santri untuk berprestasi dalam bidang sains dan teknologi.',
    avatar: '/placeholder.svg?height=200&width=200',
  },
  {
    name: 'Umar Hidayat',
    occupation: 'Diplomat',
    quote: 'Kemampuan bahasa Arab dan Inggris yang saya peroleh di pesantren sangat membantu karir saya di dunia internasional.',
    avatar: '/placeholder.svg?height=200&width=200',
  },
  {
    name: 'Fatimah Azzahra',
    occupation: 'Aktivis Sosial',
    quote: 'Pesantren ini mengajarkan saya pentingnya berkontribusi pada masyarakat. Ini menjadi motivasi saya dalam pekerjaan sosial.',
    avatar: '/placeholder.svg?height=200&width=200',
  },
];

const scrollContainer = ref(null);

const startScrolling = () => {
  const container = scrollContainer.value;
  let scrollAmount = 0;
  const scrollSpeed = 0.5;

  const scrollStep = () => {
    scrollAmount += scrollSpeed;
    if (scrollAmount >= container.scrollHeight / 2) {
      scrollAmount = 0;
    }
    container.style.transform = `translateY(-${scrollAmount}px)`;
    requestAnimationFrame(scrollStep);
  };

  scrollStep();
};

onMounted(() => {
  startScrolling();
});
</script>

<style scoped>
/* Warna dan gaya tambahan tetap sama */
</style>
