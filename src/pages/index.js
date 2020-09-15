import React, { useState } from "react"
import { Link } from "gatsby"
import Modal from 'react-responsive-modal';
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

export default function IndexPage() {

  const [modal, setModal] = useState(false);

  return (
    <Layout>
      <div style={{ width: '100%', height: '80vh' }} >

        <MapComponent
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${"AIzaSyDkgOjcI83-cYqzCZPWfQZhv8sadTCXOZk"}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          setModal={setModal}
        />

      </div>

      <Modal
        open={modal}
        onClose={() => setModal(false)}>
        <h1>Modal</h1>
        <p>Window</p>
      </Modal>

    </Layout>
  )
}

// export default IndexPage
