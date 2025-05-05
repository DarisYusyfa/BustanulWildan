<template>
  <header :class="{ dark: isDarkMode }" class="bg-white text-black dark:text-white py-2 px-4 shadow-lg dark:bg-gray-900 sticky top-0 z-50">
    <nav class="container mx-auto flex justify-between items-center">
      <!-- Dark Mode Toggle Button (on mobile, move to left) -->
      <button @click="toggleDarkMode" class="md:hidden flex items-center relative">
        <span v-if="isDarkMode" class="text-gray-300 dark:text-yellow-400 text-2xl">🌞</span>
        <span v-else class="text-white text-2xl">🌙</span>
        <span class="absolute left-12 text-xs font-medium">{{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</span>
      </button>

      <!-- Logo (only visible on desktop) -->
      <div class="flex items-center space-x-2 md:flex">
        <img src="/images/main.png" class="h-12 w-12 md:h-14 md:w-14" alt="Logo Bustanul Wildan" />
        <div class="hidden md:block">
          <h1 class="text-2xl font-bold tracking-wide">Ponpes Bustanul Wildan</h1>
          <p class="text-sm text-black dark:text-white">Jl. Tanjakansari No.24 Cileunyi, Bandung</p>
        </div>
      </div>

      <!-- Navbar Links (Desktop) -->
      <ul class="hidden md:flex space-x-8 text-lg font-medium">
        <li><router-link to="/" class="transition duration-300 dark:hover:text-green-400">Beranda</router-link></li>

        <!-- Informasi Dropdown -->
        <li class="relative" v-click-outside="closeDropdown">
          <button @click="toggleDropdown" class="flex items-center transition duration-300 dark:hover:text-green-400">
            Informasi
            <!-- Ikon Dropdown Dinamis -->
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 transition-transform duration-300" :class="isDropdownOpen ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <!-- Dropdown Menu -->
          <transition name="fade">
            <ul v-if="isDropdownOpen" class="absolute left-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-md w-40">
              <li><router-link to="/ppdb" class="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600">PPDB</router-link></li>
              <li><router-link to="/pengajian" class="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600">Pengajian</router-link></li>
              <li><router-link to="/acaralain" class="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600">Acara Lainnya</router-link></li>
            </ul>
          </transition>
        </li>

        <li><router-link to="/profile" class="transition duration-300 dark:hover:text-green-400">Profile</router-link></li>
        <li><router-link to="/contact" class="transition duration-300 dark:hover:text-green-400">Kontak</router-link></li>
      </ul>

      <!-- Dark Mode Toggle Button (on desktop) -->
      <button @click="toggleDarkMode" class="hidden md:flex items-center">
        <span v-if="isDarkMode" class="text-gray-300 dark:text-yellow-400 text-2xl">🌞</span>
        <span v-else class="text-white text-2xl">🌙</span>
        <span class="ml-2 text-sm font-medium hidden lg:inline">{{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</span>
      </button>

      <!-- Mobile Menu Button (Hamburger or X) -->
      <button @click="toggleMenu" class="md:hidden">
        <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div v-if="isMenuOpen" class="absolute top-full left-0 right-0 bg-gray-800 text-white md:hidden transition-all duration-300 transform" :class="{ 'scale-y-100': isMenuOpen, 'scale-y-0': !isMenuOpen }">
        <ul class="flex flex-col space-y-2 p-4">
          <li><router-link to="/" @click="toggleMenu" class="hover:text-gray-300">Beranda</router-link></li>

          <!-- Informasi Dropdown (Mobile) -->
          <li class="relative" v-click-outside="closeDropdownMobile">
            <button @click="toggleDropdownMobile" class="flex justify-between items-center w-full text-left hover:text-gray-300">
              Informasi
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 transition-transform duration-300" :class="isDropdownMobileOpen ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Dropdown Menu untuk Mobile -->
            <transition name="fade">
              <ul v-if="isDropdownMobileOpen" class="bg-gray-700 rounded-md mt-1">
                <li><router-link to="/ppdb" @click="toggleMenu" class="block px-4 py-2 hover:bg-gray-600">PPDB</router-link></li>
                <li><router-link to="/pengajian" @click="toggleMenu" class="block px-4 py-2 hover:bg-gray-600">Pengajian</router-link></li>
                <li><router-link to="/acaralain" @click="toggleMenu" class="block px-4 py-2 hover:bg-gray-600">Acara Lainnya</router-link></li>
              </ul>
            </transition>
          </li>

          <li><router-link to="/contact" @click="toggleMenu" class="hover:text-gray-300">Kontak</router-link></li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Dark mode state
const isDarkMode = ref(false);
const isMenuOpen = ref(false);
const isDropdownOpen = ref(false);
const isDropdownMobileOpen = ref(false);

// Toggle functions
function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  document.body.classList.toggle('dark', isDarkMode.value);
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

function toggleDropdownMobile() {
  isDropdownMobileOpen.value = !isDropdownMobileOpen.value;
}

// Close dropdown function
function closeDropdown() {
  isDropdownOpen.value = false;
}

function closeDropdownMobile() {
  isDropdownMobileOpen.value = false;
}

// Directive for detecting outside clicks
const clickOutsideDirective = {
  beforeMount(el, binding) {
    el.clickOutsideEvent = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(); // Call the provided method
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
};

// Register the directive locally
onMounted(() => {
  // Adding the click outside directive for desktop dropdown
  const dropdownElement = document.querySelector('[v-click-outside]');
  if (dropdownElement) {
    clickOutsideDirective.beforeMount(dropdownElement, { value: closeDropdown });
  }

  // Adding the click outside directive for mobile dropdown
  const dropdownMobileElement = document.querySelector('[v-click-outside]');
  if (dropdownMobileElement) {
    clickOutsideDirective.beforeMount(dropdownMobileElement, { value: closeDropdownMobile });
  }
});

onBeforeUnmount(() => {
  // Cleanup
  const dropdownElement = document.querySelector('[v-click-outside]');
  if (dropdownElement) {
    clickOutsideDirective.unmounted(dropdownElement);
  }

  const dropdownMobileElement = document.querySelector('[v-click-outside]');
  if (dropdownMobileElement) {
    clickOutsideDirective.unmounted(dropdownMobileElement);
  }
});
</script>

<style scoped>
/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

/* Custom dark mode styles */
.dark {
  background-color: #1a1a1a;
}
</style>
