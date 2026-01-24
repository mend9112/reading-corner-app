import { StyleSheet, Text, View, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar';

/* Image Imports */
import Logo from '../../assets/images/logo-forest-background.png'

/* Custom Themed Elements */
import ThemedText from '../../components/ThemedText';
import { PrimaryBtn, DisplayLogo, SetColorMode } from '../../components/ThemedElements';
import Spacer from '../../components/Spacer'


const LoginLanding = () => {
  return (
    <>
      <StatusBar style='light'/>
    
      <View style={ {backgroundColor: '#505535', flex: 1} }>

        {/* Main Content */}
        <View style={styles.container}>
          <Spacer height={250} />
          <DisplayLogo source={Logo} />
          <ThemedText type={'body'} mode={'dark'}>Get started by siging in or creating a new account</ThemedText>

          {/* Buttons */}
          <Spacer height={50} />
          <PrimaryBtn href="/signIn" text="Sign In"/>
          <PrimaryBtn href="/createAccount" text="Create Account" style={ styles.button }/>
    
        </View>
      </View>
    </>
  )
}

export default LoginLanding

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
    padding: 40
  },
  button: {
    backgroundColor: '#505535', 
    borderWidth: 2, 
    borderColor: '#ECE7DF'
  },
})