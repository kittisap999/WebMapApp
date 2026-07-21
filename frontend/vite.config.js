import { defineConfig } from 'vite'
import { resolve } from 'path'
import cesium from 'vite-plugin-cesium'

export default defineConfig({
  plugins: [cesium()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        leaflet: resolve(__dirname, 'leaflet.html'),
        maplibre: resolve(__dirname, 'maplibre.html'),
        cesium: resolve(__dirname, 'cesium.html'),
      },
    },
  },
})
