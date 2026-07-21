import './style.css'
import * as Cesium from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'

// No Cesium Ion account/token configured, so use OpenStreetMap imagery
// and skip Ion-hosted terrain/base layer picker.
const viewer = new Cesium.Viewer('map', {
  baseLayer: new Cesium.ImageryLayer(
    new Cesium.OpenStreetMapImageryProvider({
      url: 'https://tile.openstreetmap.org/',
    }),
  ),
  baseLayerPicker: false,
  geocoder: false,
  timeline: false,
  animation: false,
})

viewer.camera.flyTo({
  destination: Cesium.Cartesian3.fromDegrees(100.5018, 13.7563, 15000),
})
