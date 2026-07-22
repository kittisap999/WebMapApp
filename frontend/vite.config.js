import { defineConfig } from 'vite'
import { resolve } from 'path'
import cesium from 'vite-plugin-cesium'

export default defineConfig(({ mode }) => {
  const isGhPages = mode === 'gh-pages'

  return {
    base: isGhPages ? '/WebMapApp/' : '/',
    plugins: [cesium()],
    build: {
      outDir: isGhPages
        ? resolve(__dirname, 'dist')
        : resolve(__dirname, '../backend/static'),
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          leaflet: resolve(__dirname, 'leaflet.html'),
          maplibre: resolve(__dirname, 'maplibre.html'),
          cesium: resolve(__dirname, 'cesium.html'),
        },
      },
    },
  }
})
