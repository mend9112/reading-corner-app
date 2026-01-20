import { StyleSheet, Text, View, Image, useColorScheme } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';

// Graphic Imports
import GraphicLight from '../assets/images/img-page3-light.png'
import GraphicDark from '../assets/images/img-page3-dark.png'
import { Colors } from '../constants/Colors';

// Custom Themed View
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';

const Welcome3 = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  const bubblesColors = theme.bubble
  const btnColor = theme.btnPrimary
      
  const graphic = colorScheme === 'dark' ? GraphicDark : GraphicLight

  return (
    <ThemedView style={styles.container}>

      {/* Image and Text */}
      <View style={ {height: 450} }>

        <Image source={graphic} style={styles.image}/>

        <ThemedText type='header'>Track your reading journey</ThemedText>
        <ThemedText type='body' style={styles.ul}>• Book tracking and reading progress</ThemedText>
        <ThemedText type='body' style={styles.ul}>• Custom shelves and statistics</ThemedText>
        <ThemedText type='body' style={styles.ul}>• Book recommmendations based on your shelved books</ThemedText>

        {/* Button */}
        <View style={ [styles.button, {backgroundColor: btnColor}] }>
          <Link href="/loginLanding" style={ {fontSize: 20} }>Get Started!</Link>
        </View>
      </View>

      {/* Progress Bar */}
      <View style={styles.progress}>
        <View style={styles.bubbles}>
          <Link href="/"><FontAwesome name="circle" size={20} color={bubblesColors} /></Link>
          <Link href="/welcome2"><FontAwesome name="circle" size={20} color={bubblesColors} /></Link>
          <FontAwesome name="circle" size={20} color={bubblesColors} />
        </View>

        <Link href="/loginLanding" style={ {marginLeft: 65, color: bubblesColors, fontWeight: 'bold'} }>Skip</Link>
      </View>

    </ThemedView>
  )
}

export default Welcome3

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    padding: 40
  },
  h1: {
    fontSize: 28,
    textAlign: 'center'
  },
  ul: {
    fontSize: 16,
    marginTop: 10
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
    marginBottom: 20,
    alignSelf: 'center'
  },
  button: {
    marginTop: 40,
    padding: 15,
    alignItems: 'center',
    borderRadius: 25
  },
  progress: {
    flexDirection: 'row',
    width: 100,
    marginTop: 200
  },
  bubbles: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    justifyContent: 'space-between',
  }
})