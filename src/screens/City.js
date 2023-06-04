import React from 'react'
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View} from 'react-native'
import IconText from '../components/IconText'

const City = () => {
    const { container, cityName, cityText, stateName, populationWrapper, populationText, riseSetWrapper, riseSetText, rowLayout, imageLayout} = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/city.jpg')} style={imageLayout}>

                <Text style={[cityName, cityText]}>Orlando</Text>
                <Text style={[stateName,  cityText]}>FL</Text>

                <View style={[populationWrapper, rowLayout]}>
                    <IconText iconName={'user'} iconColor={'lightblue'} bodyText={'8000'} bodyTextStyles={populationText} />
                </View>

                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText iconName={'sunrise'} iconColor={'white'} bodyText={'6:38am'} bodyTextStyles={riseSetText} />
                    <IconText iconName={'sunset'} iconColor={'white'} bodyText={'7:42'} bodyTextStyles={riseSetText} />
                </View>

            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    imageLayout: {
        flex: 1
    },
    cityName: {
        fontSize: 40
    },
    stateName: {
        fontSize: 30
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'lightblue'
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: 'white'
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
export default City;