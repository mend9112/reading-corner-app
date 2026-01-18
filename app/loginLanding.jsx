import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router';
import Logo from '../assets/images/logo-forest-background.png'


const LoginLanding = () => {
  return (
    <View style={ {backgroundColor: '#505535', flex: 1} }>

      {/* Back Link */}
      <View style={styles.back}>
        <Link href="/welcome3" style={ {color: '#ECE7DF'} }>&#60; Back</Link>
      </View>
    
      {/* Main Content */}
      <View style={styles.container}>
        <Image source={Logo} style={styles.image}/>
        <Text style={ {color: '#ECE7DF'} }>Get started by siging in or creating a new account</Text>

        {/* Buttons */}
        <View style={ {marginTop: 50} }>
          <View style={ [ styles.button , {backgroundColor: '#C67D43'} ] }>
            <Link href="/signIn" style={ {fontSize: 20, color: '#ECE7DF'} }>Sign In</Link>
          </View>

          <View style={ [ styles.button , {backgroundColor: '#505535', borderWidth: 2, borderColor: '#ECE7DF'} ] }>
            <Link href="/createAccount" style={ {fontSize: 20, color: '#ECE7DF'} }>Create Account</Link>
          </View>
        </View>
  
      </View>
    </View>
  )
}

export default LoginLanding

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
    padding: 40
  },
  back: {
    marginTop: 100,
    marginLeft: 40
  },
  image: {
    width: 350,
    height: 65,
    marginTop: 100,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  button: {
    marginTop: 30,
    width: 300,
    padding: 15,
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    borderRadius: 25
  },
})