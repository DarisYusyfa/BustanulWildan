<template>
  <div class="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="mb-8">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Cari artikel..."
          class="w-full px-4 py-2 rounded-full border-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100"
        />
      </div>

      <!-- Grid layout responsive, 2 cols on mobile, 3 cols on desktop -->
      <div class="grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        <article v-for="article in visibleArticles" :key="article.id" class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 transform hover:scale-105">
          <div class="relative">
            <img :src="article.image" :alt="article.title" class="w-full h-36 sm:h-48 object-cover" />
            <div class="absolute top-0 left-0 bg-green-500 dark:bg-green-600 text-white text-xs font-bold px-2 py-1 m-2 rounded-full">
              {{ article.category }}
            </div>
          </div>
          <div class="p-4 sm:p-6">
            <!-- Responsif pada judul artikel -->
            <h2 class="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 line-clamp-2">{{ article.title }}</h2>
            <!-- Responsif pada teks artikel -->
            <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 hidden sm:block">{{ article.excerpt }}</p>
            <div class="flex items-center justify-between">
              <!-- Responsif pada informasi tanggal -->
              <span class="text-xs sm:text-sm text-green-600 dark:text-green-400 font-medium flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ article.date }}
              </span>
              <button
                @click="readMore(article.id)"
                class="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-bold py-2 px-3 sm:px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-110 flex items-center"
              >
                Baca
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </article>
      </div>

      <!-- Tombol Lihat Lebih Banyak -->
      <div v-if="articles.length > visibleArticles.length" class="text-center mt-6">
        <button @click="showMoreArticles" class="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full transition duration-300 ease-in-out">Lihat Lebih Banyak</button>
      </div>

      <!-- Pesan jika tidak ada artikel yang ditemukan -->
      <div v-if="filteredArticles.length === 0" class="text-center mt-12">
        <p class="text-2xl text-gray-600 dark:text-gray-400">Oops! Artikel tidak ditemukan.</p>
        <p class="text-gray-500 dark:text-gray-300 mt-2">Coba kata kunci lain atau lihat semua artikel kami.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const articles = [
  {
    id: 1,
    title: 'Mengenal Lebih Dekat: Kehidupan di Pesantren Modern',
    excerpt: 'Bagaimana rasanya belajar dan tinggal di pesantren modern? Simak cerita seru dari para santri!',
    image: '/placeholder.svg?height=300&width=400',
    date: '12 Mei 2023',
    category: 'Lifestyle',
  },
  {
    id: 2,
    title: "Tips Jitu Menghafal Al-Qur'an dengan Metode Fun",
    excerpt: "Menghafal Al-Qur'an bisa menyenangkan lho! Cek tips-tips kreatif dari para huffaz muda.",
    image: '/placeholder.svg?height=300&width=400',
    date: '5 Mei 2023',
    category: 'Pendidikan',
  },
  {
    id: 3,
    title: 'Santri Berprestasi: Dari Pesantren ke Panggung Internasional',
    excerpt: 'Kisah inspiratif santri yang berhasil meraih prestasi di kancah internasional. Kamu bisa jadi yang selanjutnya!',
    image: '/placeholder.svg?height=300&width=400',
    date: '28 April 2023',
    category: 'Inspirasi',
  },
  {
    id: 4,
    title: 'Ramadhan di Pesantren: Seru dan Penuh Berkah',
    excerpt: 'Bagaimana para santri menjalani bulan Ramadhan di pesantren? Yuk, intip keseruan dan keunikannya!',
    image: '/placeholder.svg?height=300&width=400',
    date: '15 April 2023',
    category: 'Spiritual',
  },
  {
    id: 5,
    title: 'Teknologi di Pesantren: Tradisi Bertemu Inovasi',
    excerpt: 'Pesantren kini semakin modern! Lihat bagaimana teknologi diintegrasikan dalam pembelajaran di pesantren.',
    image: '/placeholder.svg?height=300&width=400',
    date: '7 April 2023',
    category: 'Teknologi',
  },
  {
    id: 6,
    title: 'Olahraga Seru ala Santri: Sehat Jasmani, Rohani Berseri',
    excerpt: 'Bukan cuma ngaji, santri juga jago olahraga! Simak berbagai aktivitas seru yang bikin santri bugar dan ceria.',
    image: '/placeholder.svg?height=300&width=400',
    date: '1 April 2023',
    category: 'Kesehatan',
  },
];

const searchQuery = ref('');
const visibleCount = ref(2); // Default hanya tampilkan 2 artikel di mobile
const windowWidth = ref(window.innerWidth);

const filteredArticles = computed(() => {
  return articles.filter((article) => article.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || article.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase()));
});

const visibleArticles = computed(() => {
  // Periksa lebar layar dan tentukan jumlah artikel yang ditampilkan
  if (windowWidth.value >= 1024) {
    return filteredArticles.value.slice(0, 3); // Tampilkan 3 artikel di desktop
  } else {
    return filteredArticles.value.slice(0, visibleCount.value); // 2 artikel di mobile
  }
});

const showMoreArticles = () => {
  visibleCount.value = filteredArticles.value.length; // Menampilkan semua artikel yang ada
};

const readMore = (id) => {
  console.log(`Navigating to article with id: ${id}`);
};

// Mengupdate ukuran window jika terjadi perubahan ukuran layar
onMounted(() => {
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth;
  });
});
</script>
