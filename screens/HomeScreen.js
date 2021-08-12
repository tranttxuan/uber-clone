import React from 'react'
import { Image, SafeAreaView, StyleSheet, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={[tw``, styles.logo]}
                    source={{
                        uri: 'https://links.papareact.com/gzs',
                    }}
                />
            </View>
            <NavOptions />
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
        resizeMode:'contain',
    }
})
