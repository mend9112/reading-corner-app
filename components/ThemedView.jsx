import { View, StyleSheet } from 'react-native'
import { Colors } from '../constants/Colors'
import { SetColorMode } from '../components/ThemedElements'

const ThemedView = ( {style, ...props} ) => {
  const theme = SetColorMode()

  return (
    // // Sets the Background color for all Themed Views w/ Light/Dark Mode color scheme
    // <View style={ [{backgroundColor: theme.background}, style ] } {...props} /> 
    <View style={ [styles.container, style ] } {...props} />
  )
}

export default ThemedView

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    padding: 40
  },
})