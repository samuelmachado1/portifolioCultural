import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/portifolioCultural/' : '/',
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: mode !== 'production',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 5174,
    host: true,
  },
  preview: {
    port: 4174,
    host: true,
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode),
  },
}));
