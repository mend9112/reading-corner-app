import { StyleSheet, Text, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={ {height: 150} }>
        <Text style={styles.h1}>
          Welcome to ReadingCorner, the online community for readers!
        </Text>
      </View>
      

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
    marginTop: 275,
    padding: 40
  },
  h1: {
    fontSize: 28,
    textAlign: 'center'
  },
  progress: {
    flexDirection: 'row',
    width: 100,
    marginTop: 150
  },
  bubbles: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    justifyContent: 'space-between',
  }
})