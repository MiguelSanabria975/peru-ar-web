import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const Map = () => (
  <MapContainer
    center={[-13.53195, -71.96746]}
    zoom={15}
    zoomControl={false}
    scrollWheelZoom={false}
    style={{ height: '100vh', width: '100vw' }}
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </MapContainer>
)

export default Map
