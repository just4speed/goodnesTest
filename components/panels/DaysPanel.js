import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'

const DaysPanel = ({ days, setDays, textFont }) => {
  const handleClick = day => {
    let newDays = [...days]
    newDays[day] = !newDays[day]
    setDays(newDays)
  }

  const color1 = '#3993D6'
  const color2 = 'white'
  const color3 = 'white'
  const color4 = 'black'

  return (
    <View style={s.outer}>
      <TouchableOpacity
        style={[s.dayContainer, { backgroundColor: "transparent", borderTopLeftRadius: 50, borderBottomLeftRadius: 50 }]}
        onPress={() => handleClick(6)}
      >
        {days[6] ? (
          <Image
            source={require("../../Images/newIcons/days/7.png")}
            style={{ width: 40, height: 40 }}
          />
        ) : (
          <Image
            source={require("../../Images/newIcons/days/7а.png")}
            style={{ width: 40, height: 40 }}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={[s.dayContainer, { backgroundColor: "transparent" }]}
        onPress={() => handleClick(5)}
      >
        {days[5] ? (
          <Image
            source={require("../../Images/newIcons/days/6.png")}
            style={{ width: 40, height: 40 }}
          />
        ) : (
          <Image
            source={require("../../Images/newIcons/days/6а.png")}
            style={{ width: 40, height: 40 }}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={[s.dayContainer, { backgroundColor: "transparent" }]}
        onPress={() => handleClick(4)}
      >
        {days[4] ? (
          <Image
            source={require("../../Images/newIcons/days/5.png")}
            style={{ width: 40, height: 40 }}
          />
        ) : (
          <Image
            source={require("../../Images/newIcons/days/5а.png")}
            style={{ width: 40, height: 40 }}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={[s.dayContainer, { backgroundColor: "transparent" }]}
        onPress={() => handleClick(3)}
      >
        {days[3] ? (
          <Image
            source={require("../../Images/newIcons/days/4.png")}
            style={{ width: 40, height: 40 }}
          />
        ) : (
          <Image
            source={require("../../Images/newIcons/days/4а.png")}
            style={{ width: 40, height: 40 }}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={[s.dayContainer, { backgroundColor: "transparent" }]}
        onPress={() => handleClick(2)}
      >
        {days[2] ? (
          <Image
            source={require("../../Images/newIcons/days/3.png")}
            style={{ width: 40, height: 40 }}
          />
        ) : (
          <Image
            source={require("../../Images/newIcons/days/3а.png")}
            style={{ width: 40, height: 40 }}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={[s.dayContainer, { backgroundColor: "transparent" }]}
        onPress={() => handleClick(1)}
      >
        {days[1] ? (
          <Image
            source={require("../../Images/newIcons/days/2.png")}
            style={{ width: 40, height: 40 }}
          />
        ) : (
          <Image
            source={require("../../Images/newIcons/days/2а.png")}
            style={{ width: 40, height: 40 }}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={[s.dayContainer, { backgroundColor: "transparent", borderTopRightRadius: 50, borderBottomRightRadius: 50 }]}
        onPress={() => handleClick(0)}
      >
        {days[0] ? (
          <Image
            source={require("../../Images/newIcons/days/1.png")}
            style={{ width: 40, height: 40 }}
          />
        ) : (
          <Image
            source={require("../../Images/newIcons/days/1а.png")}
            style={{ width: 40, height: 40  }}
          />
        )}
      </TouchableOpacity>
    </View>
  )
}

export default DaysPanel

const s = StyleSheet.create({

  palka: {
    width: 2,
    height: '100%',
    backgroundColor: '#243663'
  },

  outer: {
    width: '100%',
    height: "100%",
    borderRadius: 1000,
    overflow: 'hidden',
  //  backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    borderColor: '#243663'
  },

  dayContainer: {
    width: '13.8%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',  
    paddingTop: 5
  }
})
