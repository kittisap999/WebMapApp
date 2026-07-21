import './style.css'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const map = L.map('map').setView([13.7563, 100.5018], 12)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
}).addTo(map)

L.marker([13.7563, 100.5018]).addTo(map).bindPopup('Bangkok').openPopup()
