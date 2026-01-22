import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router';
import Logo from '../../assets/images/logo-forest-background.png'
import ThemedText from '../../components/ThemedText';
import { PrimaryBtn } from '../../components/ThemedElements';


const LoginLanding = () => {
  return (
    <View style={ {backgroundColor: '#505535', flex: 1} }>

      {/* Back Link
      <View style={styles.back}>
        <Link href="/welcome3" style={ {color: '#ECE7DF'} }>&#60; Back</Link>
      </View> */}
    
      {/* Main Content */}
      <View style={styles.container}>
        <Image source={Logo} style={styles.image}/>
        <ThemedText>Get started by siging in or creating a new account</ThemedText>

        {/* Buttons */}
        <View style={ {marginTop: 50} }>
          <PrimaryBtn href="/signIn" text="Sign In"/>
          <PrimaryBtn href="/createAccount" text="Create Account" style={ styles.button }/>
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
    backgroundColor: '#505535', 
    borderWidth: 2, 
    borderColor: '#ECE7DF',
    width: 300,
  },
})