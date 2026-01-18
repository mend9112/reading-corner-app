import { StyleSheet, Text, View, Image } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';
import Graphic from '../assets/images/img-page3.png'

const Welcome3 = () => {
  return (
    <View style={styles.container}>

      {/* Image and Text */}
      <View style={ {height: 450} }>

        <Image source={Graphic} style={styles.image}/>

        <Text style={styles.h1}>Track your reading journey</Text>
        <Text style={styles.ul}>• Book tracking and reading progress</Text>
        <Text style={styles.ul}>• Custom shelves and statistics</Text>
        <Text style={styles.ul}>• Book recommmendations based on your shelved books</Text>

        <View style={styles.button}>
          <Link href="/loginLanding" style={ {fontSize: 20} }>Get Started!</Link>
        </View>
      </View>

      {/* Progress Bar */}
      <View style={styles.progress}>
        <View style={styles.bubbles}>
          <Link href="/"><FontAwesome name="circle" size={20} color="black" /></Link>
          <Link href="/welcome2"><FontAwesome name="circle" size={20} color="black" /></Link>
          <FontAwesome name="circle" size={20} color="black" />
        </View>

        <Link href="/loginLanding" style={ {marginLeft: 70} }>Skip</Link>
      </View>

    </View>
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
    backgroundColor: '#DDDDDD',
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