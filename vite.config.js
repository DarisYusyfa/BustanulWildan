import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Menambahkan pengaturan untuk mengecualikan elemen kustom
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag === 'dotlottie-player', // Mengizinkan 'dotlottie-player' sebagai elemen kustom
      },
    },
  },
});
