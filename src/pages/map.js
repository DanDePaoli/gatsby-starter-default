import React, { useState } from 'react'

import { GoogleMap, Marker, InfoWindow } from 'react-google-maps'

import * as Data from './data.json'


const Map = (props) => {

  const [icon, setIcon] = useState(null);
  const [infoWindow, setInfoWindow] = useState(null)

  const iconChange = (data) => {
    if (icon && data.properties.ID == icon.properties.ID) {
      return "https://storage.googleapis.com/support-kms-prod/SNP_2752129_en_v0"
    } else {
      return "https://storage.googleapis.com/support-kms-prod/SNP_2752125_en_v0"
    }
  }

  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{
        lat: 37.788601,
        lng: -122.393478
      }}
    >

      {Data.features.map((Data) => (
        <Marker
          key={Data.properties.ID}
          icon={{
            url: iconChange(Data),
            scaleSize: new window.google.maps.Size(25, 25)
          }}
          onMouseOver={() => {
            setIcon(Data)
            setInfoWindow(Data)
          }}
          onClick={() => {
            props.setmodal(true)
            props.setData(Data)
          }}
          position={{
            lat: Data.geometry.coordinates[0],
            lng: Data.geometry.coordinates[1]
          }}
        />

      )
      )}
      {infoWindow ?
        <InfoWindow
          key={infoWindow.properties.ID}
          position={{
            lat: infoWindow.geometry.coordinates[0]+.001,
            lng: infoWindow.geometry.coordinates[1]
          }}
          onCloseClick={() => setInfoWindow(null)}
        >
          <div>
            <img className="w-15 h-12 mb-2" src={infoWindow.properties.Image} style={{ width: '100px', height: '100px' }} />
            <h2 className="text-sm mb-3" style={{ fontFamily: "coustard" }}>{infoWindow.properties.NAME}</h2>
            <p className="text-sm" style={{ fontFamily: 'Gentium Basic' }}>{infoWindow.properties.DESCRIPTION}</p>
            <p className="text-sm" style={{ fontFamily: 'Gentium Basic' }}>Zestimate: ${infoWindow.properties.Zestimate}M</p>
            <p className="text-sm" style={{ fontFamily: 'Gentium Basic' }}>{infoWindow.properties.Bedroom} Bds | {infoWindow.properties.Bathroom} Ba | {infoWindow.properties.SquareFeet} sqft</p>
            <p className="text-sm" style={{ fontFamily: 'Gentium Basic' }}>Pricer Per Foot: ${infoWindow.properties.PricePerFoot}/square foot</p>

            <p className="text-sm" style={{ fontFamily: 'Gentium Basic' }}>Zestimate History {infoWindow.properties.OneYr}% 1Yr | {infoWindow.properties.FiveYr}% 5Yr | {infoWindow.properties.TenYr}% 10Yr</p>

            <p className="text-sm" style={{ fontFamily: 'Gentium Basic' }}>Neigborhood Avg {infoWindow.properties.OneYrN}% 1Yr | {infoWindow.properties.FiveYrN}% 5Yr | {infoWindow.properties.TenYrN}% 10Yr</p>

            <p className="text-sm" style={{ fontFamily: 'Gentium Basic' }}>City/Township Avg {infoWindow.properties.OneYrC}% 1Yr | {infoWindow.properties.FiveYrC}% 5Yr | {infoWindow.properties.TenYrC}% 10Yr</p>

          </div>
        </InfoWindow>
        : null}
    </GoogleMap>
  )
}

export default Map;
