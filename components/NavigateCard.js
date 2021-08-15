import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, SafeAreaView, View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useDispatch } from 'react-redux'
import tw from 'tailwind-react-native-classnames'

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>
                coucou
            </Text>
            <View style={tw`border-t border-gray-200 flex-shrink-0`}>
                <GooglePlacesAutocomplete
                    placeholder="Where to?"
                    debounce={200}
                    styles={inputStyles}
                    enablePoweredByContainer={false}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    onPress={(data, details = null) => {
                        dispatch(setDestination({
                            location: details.geometry.location,
                            description: data.description
                        }))
                        navigation.navigate('RideOptionsCard')
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const inputStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0
    },
    textInput: {
        backgroundColor: '#dddddf',
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
})
