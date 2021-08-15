import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { selectDestination, selectOriginal } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_API_KEY } from "@env";

const Map = () => {
    const origin = useSelector(selectOriginal);
    const destination = useSelector(selectDestination);
    const mapRef = useRef(null);

    useEffect(() => {
        if (!origin | !destination) return;
        mapRef.current.fitToSuppliedMarker(["origin", "destination"],{edgePadding:{top:50, right:50, bottom:50}, left:50})
    }, [origin, destination])

    return (
        <View>
            <MapView
                ref={mapRef}
                style={tw`h-full`}
                mapType={'mutedStandard'}
                region={{
                    latitude: origin.location.lat,
                    longitude: origin.location.lng,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
            >
                {origin && destination && (
                    <MapViewDirections
                        origin={origin.location}
                        destination={destination.location}
                        apikey={GOOGLE_MAPS_API_KEY}
                        strokeWidth={3}
                        strokeColor="black"
                    />
                )}
                {origin?.location && (
                    <Marker
                        coordinate={{
                            latitude: origin.location.lat,
                            longitude: origin.location.lng,
                        }}
                        title="Origin"
                        description={origin.description}
                        identifier="origin"
                    />
                )}
                                {destination?.location && (
                    <Marker
                        coordinate={{
                            latitude: destination.location.lat,
                            longitude: destination.location.lng,
                        }}
                        title="Destination"
                        description={destination.description}
                        identifier="destination"
                    />
                )}
            </MapView>
        </View >
    )
}

export default Map;