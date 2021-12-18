import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const DistancePanel = ({ distance, setDistance }) => {

    const color1 = "#3993D6"
    const color2 = "white"
    const color3 = "white"
    const color4 = "black"
    const fontSize = 16

    return (
        <View style={s.outer}>
            <TouchableOpacity style={[s.first, s.distanceContainer, { backgroundColor: "transparent" }]}
                onPress={() => setDistance(25001)}>
                { distance === 25001 ? (
                    <Image
                        source={require("../../Images/newIcons/06.png")}
                        style={s.imgCard}
                    /> ) : (
                    <Image
                    source={require("../../Images/newIcons/01.png")}
                    style={s.imgCard}
                /> ) } 
            </TouchableOpacity>
            {((distance !== 25001) && (distance !== 25007))? <View style={s.palka} /> : <View style={s.palkaEmpty} />}
            <TouchableOpacity style={[s.distanceContainer, { backgroundColor: "transparent" }]}
                onPress={() => setDistance(25007)}>
                { distance === 25007 ? (
                    <Image
                        source={require("../../Images/newIcons/07.png")}
                        style={s.imgCard}
                    /> ) : (
                    <Image
                    source={require("../../Images/newIcons/02.png")}
                    style={s.imgCard}
                /> ) } 
            </TouchableOpacity>
            {((distance !== 25007) && (distance !== 25025)) ? <View style={s.palka} /> : <View style={s.palkaEmpty} />}
            <TouchableOpacity style={[s.distanceContainer, { backgroundColor: "transparent" }]}
                onPress={() => setDistance(25025)}>
                { distance === 25025 ? (
                    <Image
                        source={require("../../Images/newIcons/08.png")}
                        style={s.imgCard}
                    /> ) : (
                    <Image
                    source={require("../../Images/newIcons/03.png")}
                    style={s.imgCard}
                /> ) } 
            </TouchableOpacity>
            {((distance !== 25025) && (distance !== 25000)) ? <View style={s.palka} /> : <View style={s.palkaEmpty} />}
            <TouchableOpacity style={[s.last, s.distanceContainer, { backgroundColor: "transparent" }]}
                onPress={() => setDistance(25000)}>
                { distance === 25000 ? (
                    <Image
                        source={require("../../Images/newIcons/010.png")}
                        style={s.imgCard}
                    /> ) : (
                    <Image
                    source={require("../../Images/newIcons/05.png")}
                    style={s.imgCard}
                /> ) } 
            </TouchableOpacity>
        </View>
    )
}

export default DistancePanel

const s = StyleSheet.create({
    palka: {
        width: 2,
        height: '60%',
        backgroundColor: '#BCE0FD'
    },

    palkaEmpty: {
        width: 2,
        height: '60%',
        // backgroundColor: '#BCE0FD'
    },

    imgCard: {
        width: 60,
        height: 60,
        borderRadius: 10
    },


    first: {
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15
    },
    last: {
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15
    },

    outer: {
        width: '90%',
        height: 60,
        borderRadius: 15,
        backgroundColor: "ivory",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        overflow: 'hidden',
        borderWidth: 0,
        borderColor: "#243663"
    },

    distanceContainer: {
        width: "24.5%",
        height: "100%",
        backgroundColor: "pink",
        alignItems: "center",
        justifyContent: "center",
        //  borderWidth: 1,
        //  borderColor: "#243663"
    }
});