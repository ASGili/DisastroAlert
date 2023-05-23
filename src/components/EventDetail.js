import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const EventDetail = ({event}) => {


    let latAndLong
    if (event.geometry) {
        latAndLong = event.geometry[0].coordinates
    }

    let declareCategory 
    if (event.categories) {
        declareCategory = 
        <>
        <h3>{event.title}</h3>
        <p>This event is in the category of: {event.categories[0].title}</p>
        <p>Latest information on date - {(event.geometry[0].date).substr(0, 10)}</p>
        <MapContainer center={latAndLong} zoom={8} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={latAndLong}>
  </Marker>
</MapContainer>
        </>
    }

    return (
        <div>
            {declareCategory}
        </div>
    )
}



export default EventDetail