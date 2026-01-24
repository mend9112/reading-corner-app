import { StyleSheet, View } from 'react-native'

/* Image Imports */
import Logomark from '../../assets/images/logomark-forest.png'

/* Custom Themed Elements */
import ThemedView from '../../components/ThemedView'
import { DisplayLogo, PrimaryBtn, ThemedTextInput, ThemedLink } from '../../components/ThemedElements'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'

const SignIn = () => {
  return (
    <ThemedView style={styles.container}>

      <Spacer height={150}/>
      <DisplayLogo source={Logomark} />
      <Spacer height={15}/>

      <ThemedText type={'header'}>Welcome Back!</ThemedText>
      <Spacer height={50}/>

      <ThemedTextInput text="Email or Username"/>
      <ThemedTextInput text="Password"/>
      <ThemedText>Forgot Password?</ThemedText>

      <PrimaryBtn href='/home' text='Sign In' />

      <Spacer height={15}/>
      <ThemedText>Don't have an account? 
        <ThemedLink href='/createAccount' text=' Create Account'/>
      </ThemedText>
      
    </ThemedView>
  )
}

export default SignIn

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    padding: 40
  },
})