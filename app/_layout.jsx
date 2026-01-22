import { Text, View } from 'react-native'
import { Slot, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

/* Custom Themed Elements */
import { SetColorMode } from '../components/ThemedElements'
import { Colors } from '../constants/Colors'

const RootLayout = () => {
  const theme = SetColorMode();

  return (
    <>
      <StatusBar style="auto" />
      <Stack screenOptions={{
        headerStyle: { backgroundColor: Colors.navBackground },
        // headerTitleStyle: { color: Colors.iconColor },
        headerTintColor: Colors.iconColor,
        contentStyle: { backgroundColor: theme.background }
      }}>
        <Stack.Screen name="(onboarding)" options={{ headerShown: false, animation: 'none' }} />
        <Stack.Screen name="index" options={{ headerShown: false, animation: 'none' }} />

      </Stack>
    </>
  )
}

export default RootLayout