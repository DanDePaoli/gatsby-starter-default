import React, { useState } from "react"
import { Link } from "gatsby"
import Modal from 'react-responsive-modal';
import Layout from "../components/layout"
import Map from "./map.js";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import * as Data from "./data.json"

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
  const [data, setData] = useState(null);

  return (
    <Layout>
      <div className="flex">
        <div className="w-1/2 mb-4 ml-2 shadow-lg">
          <div className="" style={{ width: '100%', height: '100vh' }} >

            <MapComponent
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${"AIzaSyDkgOjcI83-cYqzCZPWfQZhv8sadTCXOZk"}`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              setModal={setModal}
              setData={setData}
            />

          </div>

          {data ? <Modal
            open={modal}
            onClose={() => setModal(false)}>
            <div className="flex">
              <div className="w-full">

                <img src={data.properties.Name} style={{ height: `100px`, width: '100px' }} />
              </div>
              <div className="w-full ml-3">
                <h1>{data.properties.NAME}</h1>
                <p>{data.properties.DESCRIPTION}</p>
              </div>
            </div>
          </Modal>

            : null}

        </div>
      </div>

    </Layout>
  )
}

// export default IndexPage
