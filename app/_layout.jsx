import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Slot, Stack } from 'expo-router'
import { Colors } from '../constants/Colors'

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    // <Stack screenOptions={ {
    //   headerStyle: { backgroundColor: theme.background },
    //   headerTitleStyle: { color: theme.text },
    //   headerTintColor: theme.text,
    //   contentStyle: { backgroundColor: theme.background }
    // } }>
    //   <Stack.Screen name="index" options={ {headerShown: false} }/>
    //   <Stack.Screen name="welcome2" options={ {headerShown: false} }/>
    //   <Stack.Screen name="welcome3" options={ {headerShown: false} }/>
    //   <Stack.Screen name="loginLanding" options={ {headerShown: false} }/>
    //   <Stack.Screen name="signIn" options={ {headerShown: false} }/>
    //   <Stack.Screen name="createAccount" options={ {headerShown: false} }/>
    // </Stack>
    <Slot />
  )
}

export default RootLayout

const styles = StyleSheet.create({})