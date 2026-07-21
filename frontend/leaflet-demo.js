import './style.css'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { thailandProvinces } from './thailand-provinces.js'

const map = L.map('map').setView([13.7563, 100.5018], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
}).addTo(map)

const select = document.querySelector('#province-select')
for (const province of thailandProvinces) {
  const option = document.createElement('option')
  option.value = province.name
  option.textContent = province.name
  select.appendChild(option)
}

select.addEventListener('change', () => {
  const province = thailandProvinces.find((p) => p.name === select.value)
  if (!province) return
  map.flyTo([province.lat, province.lng], province.zoom)
})
