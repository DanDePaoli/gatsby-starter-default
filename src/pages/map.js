import React, { useState } from "react"
import { GoogleMap, Marker, InfoWindow } from "react-google-maps";


const Map = () => {

  const [ icon, setIcon ] = useState("https://storage.googleapis.com/support-kms-prod/SNP_2752125_en_v0");

  const [ infoWindow, setInfoWindow ] = useState(false);

  const iconChange = () => {
    setIcon( "https://storage.googleapis.com/support-kms-prod/SNP_2752129_en_v0");
  }


  return(
<GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 37.786840, lng: -122.392240 }}
  >
<Marker
icon={{
  url:icon, scaleSize:new window.google.maps.Size(15, 15)
}}
onMouseOver={() => {
  iconChange()
setInfoWindow(true)}
}
position={{ lat: 37.786840, lng: -122.392240 }}
/>
{ infoWindow ? <InfoWindow
position={{ lat: 37.786840, lng: -122.392240 }}>
  <h1>InfoWindow</h1>
  </InfoWindow> :null}
  </GoogleMap>

  )
}

export default Map;