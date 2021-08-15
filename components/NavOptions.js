import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { selectOriginal } from '../slices/navSlice';

const data = [
    {
        id: "nav-1",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id: "nav-2",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen"
    },
];

const NavOptions = () => {

    const navigation = useNavigation();

    const origin = useSelector(selectOriginal);

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate(item.screen)}
                style={tw`pr-2 pl-6 pb-8 pt-4 m-2 bg-gray-200 flex-1`}
                disabled={!origin}
            >
                <View style={tw`${!origin && "opacity-20"}`}>
                    <Image
                        style={[styles.image]}
                        source={{ uri: item.image }}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon
                        style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                        name='arrowright'
                        type='antdesign'
                        color='white'
                    />
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <FlatList
            data={data}
            horizontal
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    )
}

export default NavOptions;

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    }
})
