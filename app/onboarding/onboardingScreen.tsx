import { StyleSheet, Text, View, Dimensions, ImageBackground,Image } from 'react-native'
// import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { BlurView } from 'expo-blur';


interface OnboardingPage {
    backgroundColor: string;
    image: React.ReactElement;
    title: string;
    subtitle: string;
}

const {width, height} = Dimensions.get('window');

const OnboardingScreen: React.FC = () => {
  const myPages: OnboardingPage[] = [
    {
      backgroundColor: 'black',
      image: (
        <ImageBackground
          source={require('../../assets/onboarding-images/barber-1.jpeg')}
          style={styles.backgroundImage}
        >
          <View style={styles.content}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Find near by saloons</Text>
              <Text style={styles.subtitle}>In Tema</Text>
            </View>
            <BlurView
              style={{width: '100%', height: 100}}
              intensity={10}
              tint='dark'
            />
          </View>
        </ImageBackground>
      ),
      title: "1",
      subtitle: "One"

    },
    {
      backgroundColor: 'black',
      image: (
        <Image
        
          source={require('../../assets/onboarding-images/barber-3.jpeg')}
          style={{width: 150, height: 150}}
        />
      ),
      title: "1",
      subtitle: "One"

    },
    {
      backgroundColor: 'black',
      image: (
        <Image
        
          source={require('../../assets/onboarding-images/barber-4.jpeg')}
          style={{width: 150, height: 150}}
        />
      ),
      title: "1",
      subtitle: "One"

    },
    {
      backgroundColor: 'black',
      image: (
        <Image
        
          source={require('../../assets/onboarding-images/barber-5.jpeg')}
          style={{width: 150, height: 150}}
        />
      ),
      title: "1",
      subtitle: "One"

    },
  ];

  const handleDone = () => {
    console.log('handle done')
  }

  return (
    <View style={styles.container}>
      <Onboarding
        pages={myPages}
        onDone={handleDone}
        onSkip={handleDone}
        showDone={true}
        showSkip={true}
        showNext={true}
        bottomBarHighlight={false}
        titleStyles={styles.title}
        imageContainerStyles={styles.imageContainer}
        subTitleStyles={styles.subtitle}
      />
    </View>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: width,
    height: height * 0.75,
    resizeMode: 'cover', // Adjust as needed: 'cover', 'contain', 'stretch'
    
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textContainer: {
    paddingBottom: 20
  },
  overlayImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
 
  imageContainer: {
    flex: 1, // Let ImageBackground handle the size
    // marginBottom: 40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Adjust for visibility over background
  },
  subtitle: {
    fontSize: 16,
    color: 'white', // Adjust for visibility over background
    textAlign: 'center',
  },
})