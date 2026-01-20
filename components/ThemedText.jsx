import { StyleSheet, Text, useColorScheme } from 'react-native'
import PropTypes from 'prop-types'

import { Colors } from '../constants/Colors'

const ThemedText = ( { style, type = 'body', ...props} ) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  // const textColor = title ? theme.title : theme.text

  const textColor = type === 'header' ? theme.header :
                    type === 'subheader' ? theme.subheader :
                    theme.text

  return (
    <Text 
      style={ [ 
        { color: textColor },
        type === 'header' ? styles.header : undefined,
        type === 'subheader' ? styles.subheader : undefined,
        type === 'body' ? styles.body : undefined,
        style 
      ] } 
      {...props} 
    />
  )
}

ThemedText.propTypes = {
  type: PropTypes.oneOf (['header', 'subheader', 'body']),
};

export default ThemedText

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  subheader: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '600'
  },
  body: {
    // fontSize: 16,
    // textAlign: 'center'
  }
})