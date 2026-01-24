import { StyleSheet, View } from 'react-native'

/* Image Imports */
import Logomark from '../../assets/images/logomark-forest.png'

/* Custom Themed Elements */
import ThemedView from '../../components/ThemedView'
import { DisplayLogo, PrimaryBtn, ThemedTextInput, ThemedLink } from '../../components/ThemedElements'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'

const CreateAccount = () => {
  return (
    <ThemedView style={styles.container}>

      <Spacer height={150}/>
      <DisplayLogo source={Logomark} />
      <Spacer height={15}/>

      <ThemedText type={'header'}>Let's Get Started!</ThemedText>
      <Spacer height={50}/>

      <ThemedTextInput text="Username"/>
      <ThemedTextInput text="Email"/>
      <ThemedTextInput text="Password"/>
      <ThemedTextInput text="Confirm Password"/>

      <PrimaryBtn href='/home' text='Create Account' />

      <Spacer height={15}/>
      <ThemedText>Are you an author 
        <ThemedLink href='/' text=' Request Verification!'/>
      </ThemedText>
      
    </ThemedView>
  )
}

export default CreateAccount

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    padding: 40
  },
})