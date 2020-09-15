import React from "react"
import { GoogleMap, Marker } from "react-google-maps";


const Map = () => {



  return(
<GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 37.786840, lng: -122.392240 }}
  >
<Marker
position={{ lat: 37.786840, lng: -122.392240 }}
/>
  </GoogleMap>

  )
}

export default Map;