import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Map from "./map.js";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";


// const MyMapComponent = withScriptjs(withGoogleMap((props) =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: 37.786840, lng: -122.392240 }}
//   >
//     {props.isMarkerShown && <Marker position={{ lat:37.786840, lng: -122.392240 }} />}
//   </GoogleMap>
// ))



const MapComponent = withScriptjs(withGoogleMap(Map));

const IndexPage = () => (
  <Layout>
<div style={{ width: '100%', height: '80vh' }} >

<MapComponent
  googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${"AIzaSyDkgOjcI83-cYqzCZPWfQZhv8sadTCXOZk"}`}
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `100%` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>

</div>
  </Layout>
)

export default IndexPage
