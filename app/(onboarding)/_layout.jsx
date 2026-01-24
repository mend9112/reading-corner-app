import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

/* Custom Themed Elements */
import { SetColorMode } from '../../components/ThemedElements'

const OnboardingLayout = () => {
  const theme = SetColorMode(); 

  return (
    <>
      <StatusBar style="auto" />
      {/* <Stack screenOptions={{
        headerShown: false,
        animation: 'none',
        contentStyle: { backgroundColor: theme.background }
      }}/> */}
      <Slot/>
    </>
  )
}

export default OnboardingLayout