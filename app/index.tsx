import { ImageBackground, Pressable, Text,StyleSheet,View, Dimensions } from 'react-native'
import React from 'react'
import { router } from 'expo-router';
import {FontAwesome6} from "@expo/vector-icons";

const {width, height} = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/background.jpeg')}
        style={styles.backgroundImage}
      >

        <View style={{marginTop: height* 0.65, marginLeft: 20, width: width * 0.5}}>
          <Text style={{color: 'white', fontSize: 35}}>LOCATE THE NEAREST BARBERSHOP AROUND YOU</Text>
        </View>

        <Pressable 
          style={{backgroundColor: 'yellow', width: 100, height: 100, alignSelf: 'flex-end', borderTopLeftRadius: 30, borderBottomRightRadius: 30, marginRight: 10, alignItems:'center', justifyContent:'center'}}
          onPress={() => router.push('auth/signIn')}
          >
          <FontAwesome6 name='scissors' size={30} color='black'/>

        </Pressable>



      </ImageBackground>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        
    },
    backgroundImage: {
      width: width,
      height: height,
      resizeMode: 'cover'
    }
})