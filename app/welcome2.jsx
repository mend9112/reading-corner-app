import { StyleSheet, Text, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';

const Welcome2 = () => {
  return (
    <View style={styles.container}>

      <View style={ {height: 150} }>
        <Text style={styles.h1}>Discover a community of readers</Text>
        <Text style={styles.ul}>• Social profiles and posts to connect with fellow readers and authors</Text>
        <Text style={styles.ul}>• Groups for your book clubs and buddy-reads</Text>
      </View>

      <View style={styles.progress}>
        <View style={styles.bubbles}>
          <Link href="/"><FontAwesome name="circle" size={20} color="black" /></Link>
          <FontAwesome name="circle" size={20} color="black" />
          <Link href="/welcome3"><FontAwesome name="circle-o" size={20} color="black" /></Link>
        </View>

        <Link href="/loginLanding" style={ {marginLeft: 70} }>Skip</Link>
      </View>

    </View>
  )
}

export default Welcome2

const styles = StyleSheet.create({
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
  ul: {
    fontSize: 16,
    marginTop: 10
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