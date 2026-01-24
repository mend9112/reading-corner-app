import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

/* Custom Themed Elements */
import { SetColorMode } from '../../components/ThemedElements'

const AuthLayout = () => {
  // const theme = SetColorMode();
  
  return (
    <>
      <StatusBar style="auto" />
      <Stack screenOptions={{
        headerShown: false,
        // contentStyle: { backgroundColor: theme.background }
      }}>
.      </Stack>
      
    </>
  )
}

export default AuthLayout
