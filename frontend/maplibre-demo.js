import './style.css'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

const map = new maplibregl.Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/style.json',
  center: [100.5018, 13.7563],
  zoom: 10,
})

map.addControl(new maplibregl.NavigationControl())

new maplibregl.Marker().setLngLat([100.5018, 13.7563]).addTo(map)
