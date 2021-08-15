import React from 'react'
import { Image, SafeAreaView, StyleSheet, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';

const HomeScreen = () => {
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5 flex`}>
                <Image
                    style={[tw``, styles.logo]}
                    source={{
                        uri: 'https://links.papareact.com/gzs',
                    }}
                />
                <GooglePlacesAutocomplete
                    placeholder='Where From?'
                    styles={googleMapStyles}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                    query={{
                        key: GOOGLE_MAPS_API_KEY,
                        language: 'en',
                    }}
                    minLength={2}
                    enablePoweredByContainer={false}
                    onPress={(data, details = null) => {
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description
                        }));
                        dispatch(setDestination(null))
                    }}
                    returnKeyType={"search"}
                    fetchDetails={true}
                    onFail={(error) => console.error(error)}
                />
                <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    }
})
const googleMapStyles = {
    container: { flex: 0 },
    textInput: {
        fontSize: 18,
    }
}