import { StyleSheet, Image, useColorScheme } from 'react-native'

// Logo Imports
import DarkLogo from '../assets/images/logo-forest-background.png'
import LightLogo from '../assets/images/logo-caramel-transparent.png'

const ThemedLogo = ( {...props} ) => {
  const colorScheme = useColorScheme()

const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

  return (
    <Image source={logo} style={styles.logo} {...props} />
  )
}

export default ThemedLogo

const styles = StyleSheet.create ({
  logo: {
    width: 200,
    height: 60,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20
  }
})