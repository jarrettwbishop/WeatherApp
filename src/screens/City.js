import React from 'react'
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View} from 'react-native'
import { Feather } from '@expo/vector-icons'

const City = () => {

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/city.jpg')} style={styles.imageLayout}>

                <Text style={[styles.cityName, styles.cityText]}>Orlando</Text>
                <Text style={[styles.stateName,  styles.cityText]}>Florida</Text>

                <View style={styles.populationWrapper}>
                    <Feather name={'user'} size={50} color={'cyan'}/>
                    <Text style={styles.populationText}>8000</Text>
                </View>

                <View style={styles.riseSetWrapper}>
                    <Feather name={'sunrise'} size={50} color={'white'}/>
                    <Text style={styles.riseSetText}>6:38am</Text>
                    
                    <Feather name={'sunset'} size={50} color={'white'}/>
                    <Text style={styles.riseSetText}>7:42pm</Text>
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'cyan',
        fontWeight: 'bold'
    },
    riseSetWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
})
export default City;