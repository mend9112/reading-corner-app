import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'

/* Image Imports */
import Logomark from '../../assets/images/logomark-forest.png'

/* Custom Themed Elements */
import ThemedView from '../../components/ThemedView'
import { DisplayLogo, PrimaryBtn, ThemedTextInput, ThemedLink } from '../../components/ThemedElements'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { useSQLiteContext } from 'expo-sqlite'
import { router } from 'expo-router'

const CreateAccount = () => {
  const [name, setUName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const database = useSQLiteContext();

  const handleCreateAccount = async () => {
    database.runAsync(
      'INSERT INTO Users (name, email, password) VALUES (?, ?, ?);',
      [name, email, password]
    );
    router.push('/home');
  }


  return (
    <ThemedView style={styles.container}>

      <Spacer height={150}/>
      <DisplayLogo source={Logomark} />
      <Spacer height={15}/>

      <ThemedText type={'header'}>Let's Get Started!</ThemedText>
      <Spacer height={50}/>

      <ThemedTextInput text="Username" onChangeText={(text) => setUName(text)}/>
      <ThemedTextInput text="Email" onChangeText={(text) => setEmail(text)}/>
      <ThemedTextInput text="Password" onChangeText={(text) => setPassword(text)}/>
      <ThemedTextInput text="Confirm Password"/>

      <TouchableOpacity onPress={async () => handleCreateAccount()}>
        <PrimaryBtn href='/home' text='Create Account' />
      </TouchableOpacity>
      {/* <PrimaryBtn href='/home' text='Create Account' /> */}

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