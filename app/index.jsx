import { StyleSheet, Text, View, Image } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';
import Graphic from '../assets/images/img-page1.png'

const Home = () => {
  return (
    <View style={styles.container}>

      {/* Image and Text */}
      <View style={ {height: 450} }>

        <Image source={Graphic} style={styles.image}/>

        <Text style={styles.h1}>
          Welcome to ReadingCorner, the online community for readers!
        </Text>
      </View>
      
      {/* Progress Bar */}
      <View style={styles.progress}>
        <View style={styles.bubbles}>
          <FontAwesome name="circle" size={20} color="black" />
          <Link href="/welcome2"><FontAwesome name="circle-o" size={20} color="black" /></Link>
          <Link href="/welcome3"><FontAwesome name="circle-o" size={20} color="black" /></Link>
        </View>

        <Link href="/loginLanding" style={ {marginLeft: 70} }>Skip</Link>
      </View>
    </View>
  )
}

export default Home

export const styles = StyleSheet.create({
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