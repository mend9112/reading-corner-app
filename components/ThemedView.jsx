import { View, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedView = ( {style, ...props} ) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    // // Sets the Background color for all Themed Views w/ Light/Dark Mode color scheme
    // <View style={ [{backgroundColor: theme.background}, style ] } {...props} /> 
    <View style={  style  } {...props} />
  )
}

export default ThemedView