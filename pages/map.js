import React, { useEffect, useState } from "react";
import GoogleMapReact from 'google-map-react';
import {
    HiLocationMarker
} from 'react-icons/hi';
const zoom = 8;
const items = [
    {
        place: 'pokhara',
        lat: 28.2096,
        long: 83.9856
    },
    {
        place: 'jhapa',
        lat: 26.5455,
        long: 87.8942
    },
    {
        place: 'kathmandu',
        lat: 27.7172,
        long: 85.3240
    },
    {
        place: 'Mt. Everest',
        lat: 27.9881,
        long: 86.9250
    },
]
export default function Map() {
    const [coordinates, setCoordinates] = useState({
        lat: 0,
        long: 0
    })
    const [data, setData] = useState(items)
    const [childClicked, setChildClicked] = useState(null)
    useEffect(() => {
        async function getAddress() {
            let pos = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject)
            })
            const { latitude, longitude } = pos.coords
            console.log('called here')
            setCoordinates({ lat: latitude, lng: longitude })
        }
        getAddress()
    }, [])
    console.log({ childClicked })
    return (
        <div style={{ height: '80vh', width: '100%' }}>
            <GoogleMapReact
                defaultCenter={coordinates}
                defaultZoom={zoom}
                bootstrapURLKeys={{ key: 'AIzaSyDh0mmKyaIeWxTS-oII7ugqKb91afj4ZQ8' }}
                center={coordinates}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng })
                }}
                onChildClick={(e) => {
                    setChildClicked(e)
                }}
            >
                {data &&
                    data.map((item) => (
                        <div
                            lat={item.lat}
                            lng={item.long}
                        >
                            <HiLocationMarker
                                className="text-red-500"
                                size={28}
                            />
                            <div className="w-fit rounded-lg bg-black p-1 text-white ">
                                {item?.place}
                            </div>

                        </div>
                    ))}
            </GoogleMapReact>
            <div
                className="h-[17vh] flex items-center  w-full bg-red-500"
            >
                <p className="text-white text-5xl ml-12">Some Famous Tourists Areas</p>
            </div>
        </div>
    );
}