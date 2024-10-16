<template>
  <section class="py-16 bg-gray-100 py-16 text-gray-800 dark:bg-gray-700 dark:text-gray-200 overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="relative h-[400px] overflow-hidden">
        <div ref="scrollContainer" class="absolute top-0 left-0 right-0">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div v-for="(testimoni, index) in testimoniList" :key="`original-${index}`" class="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
              <div class="flex items-center mb-4">
                <img :src="testimoni.avatar" :alt="testimoni.name" class="w-16 h-16 rounded-full object-cover mr-4" />
                <div>
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-white">{{ testimoni.name }}</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300">{{ testimoni.occupation }}</p>
                </div>
              </div>
              <p class="text-gray-700 dark:text-gray-200 italic">"{{ testimoni.quote }}"</p>
            </div>
          </div>
          <!-- Duplikasi untuk animasi tanpa henti -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(testimoni, index) in testimoniList" :key="`duplicate-${index}`" class="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
              <div class="flex items-center mb-4">
                <img :src="testimoni.avatar" :alt="testimoni.name" class="w-16 h-16 rounded-full object-cover mr-4" />
                <div>
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-white">{{ testimoni.name }}</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300">{{ testimoni.occupation }}</p>
                </div>
              </div>
              <p class="text-gray-700 dark:text-gray-200 italic">"{{ testimoni.quote }}"</p>
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

  const scrollSpeed = 0.5; // Kecepatan scroll
  const scrollStep = () => {
    scrollAmount += scrollSpeed;
    if (scrollAmount >= container.scrollHeight / 2) {
      scrollAmount = 0; // Reset posisi scroll
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
.bg-white {
  background-color: #ffffff;
}

.bg-gray-100 {
  background-color: #f3f4f6;
}

.bg-gray-700 {
  background-color: #374151;
}

.dark .bg-gray-700 {
  background-color: #1f2937;
}

.dark .bg-white {
  background-color: #1f2937;
}

.text-gray-800 {
  color: #1f2937;
}

.text-gray-600 {
  color: #4b5563;
}

.dark .text-gray-800 {
  color: #d1d5db;
}

.dark .text-gray-600 {
  color: #9ca3af;
}

.text-gray-700 {
  color: #374151;
}

.dark .text-gray-200 {
  color: #e5e7eb;
}
</style>
