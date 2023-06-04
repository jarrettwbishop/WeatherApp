import React from "react"
import { View, Text, SafeAreaView, StyleSheet} from "react-native"
import { Feather} from '@expo/vector-icons' // icons.expo.fyi

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
       <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feelsLike}>Feels like 5</Text>

        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8</Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>

        </View>

        <View style={styles.bodyWrapper}>
          <Text style={styles.description}>Its sunny outside</Text>
          <Text style={styles.mesasge}>Its perfect t-shirt weather</Text>
        </View>

    </SafeAreaView>
  )
}

// reactnative.dev/docs/view-style-props

const styles = StyleSheet.create({

  wrapper: {
    backgroundColor: 'lightgrey',
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