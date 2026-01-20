import { StyleSheet, Text, View, Image, useColorScheme } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';

// Graphic Imports
import GraphicLight from '../assets/images/img-page2-light.png'
import GraphicDark from '../assets/images/img-page2-dark.png'
import { Colors } from '../constants/Colors';

// Custom Themed View
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';

const Welcome2 = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  const bubblesColors = theme.bubble

  const graphic = colorScheme === 'dark' ? GraphicDark : GraphicLight

  return (
    <ThemedView style={styles.container}>

      {/* Image and Text */}
      <View style={ {height: 450} }>

        <Image source={graphic} style={styles.image}/>

        <ThemedText type='header'>Discover a community of readers</ThemedText>
        <ThemedText type='body' style={styles.ul}>• Social profiles and posts to connect with fellow readers and authors</ThemedText>
        <ThemedText type='body' style={styles.ul}>• Groups for your book clubs and buddy-reads</ThemedText>
      </View>

      {/* Progress Bar */}
      <View style={styles.progress}>
        <View style={styles.bubbles}>
          <Link href="/"><FontAwesome name="circle" size={20} color={bubblesColors} /></Link>
          <FontAwesome name="circle" size={20} color={bubblesColors} />
          <Link href="/welcome3"><FontAwesome name="circle-o" size={20} color={bubblesColors} /></Link>
        </View>

        <Link href="/loginLanding" style={ {marginLeft: 65, color: bubblesColors, fontWeight: 'bold'} }>Skip</Link>
      </View>

    </ThemedView>
  )
}

export default Welcome2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    padding: 40
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