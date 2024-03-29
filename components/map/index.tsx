import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

let styles = {
    mapContainer: {
        width: "100%",
        height: "50vh"
    }
}

export function Map({}) : React.ReactElement {

    return (
        <MapContainer center={[48.864716, 2.349014]} zoom={13} scrollWheelZoom={false} style={styles.mapContainer} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[48.864716, 2.349014]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}
