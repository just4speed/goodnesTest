import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Alert
} from 'react-native';
import Modal from "@kalwani/react-native-modal";
import g from '../../styles/global';

import { Tip, showTip, closeTip } from "react-native-tip";

const medalsData = [
  {
    type: "platinum",
    title: "דרגת משתמש: פלטינה",
    description: "סטאטוס מתקבל במתן 50 מעשים טובים."
  },
  {
    type: "gold",
    title: "דרגת משתמש: זהב",
    description: "סטאטוס מתקבל במתן 20 מעשים טובים."
  },
  {
    type: "silver",
    title: "דרגת משתמש: כסף",
    description: "סטאטוס מתקבל במתן 10 מעשים טובים."
  },
  {
    type: "bronze",
    title: "דרגת משתמש: ברונזה",
    description: "דרגה התחלתית של המשתמש."
  },
]

const StatusPanel = ({ status }) => {
  const [modalInfo, setModalInfo] = React.useState("gold");

//  console.log(status)

  const statusDescription = type => {
    setModalInfo(type);
    showTip("mod");
    // setModal(true);
  }

  return (
    <>
    <Tip
        title={medalsData.find(m => m.type === modalInfo).title}
        body={medalsData.find(m => m.type === modalInfo).description}
        id="mod"
      >
    <View style={s.status2}>
      <TouchableOpacity onPress={() => statusDescription("platinum")} style={s.roll1}>
        <ImageBackground
          source={require('../../Images/MedalPlatinum.png')}
          style={s.imageBack}
        />
        <Text style={g.text12_600_blue}>פלטינה</Text>
        {status !== 'platinum' && <View style={s.plug}/>}
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => statusDescription("gold")} style={s.roll2}>
        <ImageBackground
          source={require('../../Images/MedalGold.png')}
          style={s.imageBack}
        />
        <Text style={g.text12_600_blue}>זהב</Text>
        {(status === 'bronze' || status === 'silver') && <View style={s.plug}/>}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => statusDescription("silver")}  style={s.roll3}>
        <ImageBackground
          source={require('../../Images/MedalSilver.png')}
          style={s.imageBack}
        />
        <Text style={g.text12_600_blue}>כסף</Text>
        {status === 'bronze' && <View style={s.plug}/>}
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => statusDescription("bronze")} style={s.roll4}>
        <ImageBackground
          source={require('../../Images/MedalBronze.png')}
          style={s.imageBack}
        />
        <Text style={g.text12_600_blue}>ארד</Text>
       {/*status !== 'bronze' && <View style={s.plug}/>*/}
      </TouchableOpacity>
    </View>
    </Tip>
    </>
  )
}

export default StatusPanel

const s = StyleSheet.create({
  plug: {
    width: '110%',
    height: '100%',
    backgroundColor: '#FFFFFFBB',
    position: 'absolute',
    borderTopLeftRadius: 1000,
    borderBottomLeftRadius: 1000
  },

  imageBack: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
    width: 28,
    height: 28,
    borderRadius: 1000,
    marginRight: 4
  },
  roll1: {
    height: '100%',
    width: 100,
    right: Dimensions.get('window').width * 0.88 * -0.18,
    backgroundColor: '#C7CDD3',
    borderTopLeftRadius: 1000,
    borderBottomLeftRadius: 1000,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 4,
    borderWidth: 3,
    borderColor: 'white',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    overflow: 'hidden'
  },

  roll2: {
    height: '100%',
    width: 100,
    right: Dimensions.get('window').width * 0.88 * -0.12,
    backgroundColor: '#F4C311',
    borderTopLeftRadius: 1000,
    borderBottomLeftRadius: 1000,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 4,
    borderWidth: 3,
    borderColor: 'white',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    overflow: 'hidden'
  },

  roll3: {
    height: '100%',
    width: 100,
    right: Dimensions.get('window').width * 0.88 * -0.06,
    backgroundColor: '#97C0DB',
    borderTopLeftRadius: 1000,
    borderBottomLeftRadius: 1000,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 4,
    borderWidth: 3,
    borderColor: 'white',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    overflow: 'hidden'
  },

  roll4: {
    height: '100%',
    width: 80,
    backgroundColor: '#D28B34',
    borderTopLeftRadius: 1000,
    borderBottomLeftRadius: 1000,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 3,
    borderWidth: 3,
    borderRightWidth: 0,
    borderColor: 'white',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    overflow: 'hidden'
  },

  status2: {
    width: '100%',
    marginVertical: 5,
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6
  }
})
