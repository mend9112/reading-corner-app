import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

/* Custom Themed Elements */
import { SetColorMode } from '../../components/ThemedElements'

const AuthLayout = () => {
  const theme = SetColorMode();
  
  return (
    <>
      <Stack screenOptions={{
        headerBackTitle: 'Back',
        animation: 'none',
        contentStyle: { backgroundColor: theme.background }
      }}/>
    </>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})