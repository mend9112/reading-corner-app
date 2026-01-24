import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

/* Custom Themed Elements */
import { SetColorMode } from '../../components/ThemedElements'
import { Colors } from '../../constants/Colors'


const AuthLayout = () => {
  // const theme = SetColorMode();
  
  return (
    <>
      <StatusBar style="auto" />
      <Stack screenOptions={{
        headerStyle: { backgroundColor: Colors.navBackground },
        headerTintColor: Colors.iconColor,
        headerBackTitle: 'Back',
        headerTitle: '', 
        headerTransparent: true,
      }}>
        <Stack.Screen name="loginLanding" options={{}} />
        <Stack.Screen name="signIn" options={{}} />
      </Stack>
      
    </>
  )
}

export default AuthLayout
