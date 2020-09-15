import React, { useState } from "react"
import { GoogleMap, Marker, InfoWindow } from "react-google-maps";
import * as Data from "./data.json"


const Map = (props) => {

  const [icon, setIcon] = useState("https://storage.googleapis.com/support-kms-prod/SNP_2752125_en_v0");

  const [infoWindow, setInfoWindow] = useState(false);

  const iconChange = () => {
    setIcon("https://storage.googleapis.com/support-kms-prod/SNP_2752129_en_v0");
  }


  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 37.786840, lng: -122.392240 }}
    >
      {Data.features.map((Data) => (
        <Marker
        key={Data.properties.ID}
          icon={{
            url: icon, scaleSize: new window.google.maps.Size(15, 15)
          }}
          onMouseOver={() => {
            iconChange()
            setInfoWindow(true)
          }
          }
          onClick={() => props.setModal(true)}
          position={{ lat: Data.geometry.coordinates[0], lng: Data.geometry.coordinates[1] }}
        />


      ))}

      {infoWindow ? <InfoWindow
        position={{ lat: 37.786840, lng: -122.392240 }}>
        <h1>InfoWindow</h1>
      </InfoWindow> : null}
    </GoogleMap>

  )
}

export default Map;