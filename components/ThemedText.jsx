import { StyleSheet, Text, useColorScheme } from 'react-native'
import { useFonts, Lato_400Regular, Lato_900Black } from '@expo-google-fonts/lato';
import { SetColorMode } from './ThemedElements'
import { Colors } from '../constants/Colors'

const ThemedText = ( { style, type = 'body', mode = '', ...props} ) => {
  
  let theme = SetColorMode()
  if (mode != '') {
    theme = Colors[mode]
  }

  const [loaded] = useFonts({
    Lato_400Regular,
    Lato_900Black,
    'Panel-Sans-Black': require('../assets/fonts/Panel-Sans-Black.otf'),
    'Panel-Sans-Bold': require('../assets/fonts/Panel-Sans-Bold.otf')
  });

  const textColor = type === 'header' ? theme.header :
                    type === 'subheader' ? theme.subheader :
                    type === 'btn-primary' ? theme.btnPrimaryText :
                    theme.text

  return (
    <Text 
      style={ [ 
        { color: textColor },
        type === 'header' ? styles.header : undefined,
        type === 'subheader' ? styles.subheader : undefined,
        type === 'body' ? styles.body : undefined,
        type === 'ul' ? styles.ul : undefined,
        type === 'btn-primary' ? styles.btnPrimaryText : undefined,
        type === 'other' ? styles.other : undefined,
        style 
      ] } 
      {...props} 
    />
  )
}

export default ThemedText

const styles = StyleSheet.create({
  header: {
    fontFamily: 'Panel-Sans-Black',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  subheader: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '600'
  },
  body: {
    fontFamily: 'Lato_400Regular',
    fontSize: 15
  },
  ul: {
    fontFamily: 'Lato_400Regular',
    fontSize: 16,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  },
  btnPrimaryText: {
    fontFamily: 'Lato_900Black',
    fontSize: 20,
  },
  other: {
    fontFamily: 'Lato_900Black',
  }
})