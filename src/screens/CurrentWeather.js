import React from "react"
import { View, Text, SafeAreaView, StyleSheet} from "react-native"
import { Feather} from '@expo/vector-icons' // icons.expo.fyi
import RowText from "../components/RowText"
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = () => {
  const { wrapper, container, temp, feelsLike, highLowWrapper, highLow, bodyWrapper, description, message } = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feelsLike}>Feels like 5</Text>

        <RowText 
          messageOne={'High: 8'} 
          messageTwo={'Low: 6'} 
          containerStyles={highLowWrapper} 
          messageOneStyles={highLow} 
          messageTwoStyles={highLow} 
        />
      </View>

      <RowText 
        messageOne={'Its Sunny Outside'} 
        messageTwo={weatherType['Mist'].message}
        containerStyles={bodyWrapper} 
        messageOneStyles={description} 
        messageTwoStyles={message} 
      />
    </SafeAreaView>
  )
}

// reactnative.dev/docs/view-style-props

const styles = StyleSheet.create({

  wrapper: {
    backgroundColor: 'lightblue',
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feelsLike: {
    color: 'black',
    fontSize: 30
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})
export default CurrentWeather;