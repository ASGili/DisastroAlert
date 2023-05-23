import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const EventDetail = ({event}) => {


    let longAndLat;
    let latAndLong;
    if (event.geometry) {
        longAndLat = event.geometry[0].coordinates
        latAndLong = [longAndLat[1],longAndLat[0]];
    } 

    const MapChange = ()=>{
        const map = useMap()
        map.setView(latAndLong)
      }

    let declareCategory 
    if (event.categories) {
        declareCategory = 
        <>
        <h3>{event.title}</h3>
        <p>This event is in the category of: {event.categories[0].title}</p>
        <p>Latest information on date - {(event.geometry[0].date).substr(0, 10)}</p>
        <MapContainer center={latAndLong} zoom={6} scrollWheelZoom={false}>
        <MapChange center={latAndLong}/>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
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