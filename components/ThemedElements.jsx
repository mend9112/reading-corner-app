import { StyleSheet, useColorScheme, Image, View } from 'react-native'
import { Link } from 'expo-router'

import FontAwesome from '@expo/vector-icons/FontAwesome';

/* Custom Themed Elements */
import ThemedText from './ThemedText'
import { Colors } from '../constants/Colors'

/* ***************************************************************************
Function:   SetColorMode

Purpose:    Determines the current color scheme (light or dark) and returns 
            the corresponding theme colors.

Parameters: None

Returns:    An object containing the theme colors based on the current color 
            scheme.
*************************************************************************** */
const SetColorMode = (mode = '') => {
  const colorScheme = useColorScheme()
  let theme = Colors[colorScheme] ?? Colors.light

  if (mode != '') {
    theme = Colors.mode
  }

  return theme
}

export { SetColorMode }

/* ***************************************************************************
Function:   SetImageColor

Purpose:    Selects the appropriate image based on the current color scheme 
            (light or dark).

Parameters: lightImage - The image to use in light mode.
            darkImage  - The image to use in dark mode.

Returns:    The image corresponding to the current color scheme.
*************************************************************************** */
const SetImageColor = (lightImage, darkImage) => {
  const colorScheme = useColorScheme()
  const graphic = colorScheme === 'dark' ? darkImage : lightImage

  return graphic
}

export { SetImageColor }

/* ***************************************************************************
Function:   OnboardImage

Purpose:    Renders an image for the onboarding screens.

Parameters: source - The source of the image to be displayed.

Returns:    An Image component displaying the specified image.
*************************************************************************** */
const OnboardImage = ( {source} ) => {
  return (
    <Image source={source} style={styles.image}/>
  )
}

export { OnboardImage }

/* ***************************************************************************
Function:   Logo

Purpose:    Renders the app logo.

Parameters: source - The source of the logo image to be displayed.
            style  - Additional styles to apply to the logo image.

Returns:    An Image component displaying the logo.
*************************************************************************** */
const DisplayLogo = ( {source, style} ) => {
  return (
    <Image source={source} style={ [ styles.logo, style] }/>
  )
}

export { DisplayLogo }

/* ***************************************************************************
Function:   SkipButton

Purpose:    Renders a "Skip" button that navigates to the login landing page

Parameters: None

Returns:    A Link component styled as a "Skip" button.
*************************************************************************** */
const SkipButton = () => {
  const theme = SetColorMode()

  return (
    <Link href="/loginLanding" style={{
      marginLeft: 50
    }}>
      <ThemedText type='other' style={{
        color: theme.bubble,
        fontSize: 15}}
      >Skip</ThemedText>
    </Link>
  )
}

export { SkipButton }

/* ***************************************************************************
Function:   Bubbles

Purpose:    Renders the progress indicator bubbles for the onboarding screens.

Parameters: name1, name2, name3 - The names of the FontAwesome icons to use
            for each bubble.

Returns:    A View component containing the progress indicator bubbles.
*************************************************************************** */
const Bubbles = ( {name1="circle", name2="circle", name3="circle"}) => {
  const theme = SetColorMode()

  return (
    <View style={styles.bubbles}>
      
      <Link href="/onboard1">
        <FontAwesome name={name1} size={20} color={theme.bubble} />
      </Link>
      <Link href="/onboard2">
        <FontAwesome name={name2} size={20} color={theme.bubble} />
      </Link>
      <Link href="/onboard3">
        <FontAwesome name={name3} size={20} color={theme.bubble} />
      </Link>

    </View>
  )
}

export { Bubbles }

/* ***************************************************************************
Function:   ProgressBar

Purpose:    Renders the progress bar for the onboarding screens, including the
            bubbles and the skip button.

Parameters: name1, name2, name3 - The names of the FontAwesome icons to use
            for each bubble.

Returns:    A View component containing the progress bar.
*************************************************************************** */
const ProgressBar = ( {name1="circle", name2="circle", name3="circle"}) => {
  return (
    <View style={styles.progress}>
      <Bubbles name1={name1} name2={name2} name3={name3}/>
      <SkipButton/>
    </View>
  )
}

export { ProgressBar }

/* ***************************************************************************
Function:   PrimaryBtn

Purpose:    Renders a primary button with customizable text and link.

Parameters: href  - The URL to navigate to when the button is pressed.
            text  - The text to display on the button (default is "Button").
            style - Additional styles to apply to the button.

Returns:    A View component styled as a primary button containing a Link.
*************************************************************************** */
const PrimaryBtn = ( {href, text="Button", style, ...props} ) => {
  const theme = SetColorMode()

  return (
    <View style={ [
      styles.button, 
      {backgroundColor: theme.btnPrimary},
      style
    ]} {...props}>
      <Link href={href}>
        <ThemedText type='btn-primary'>{text}</ThemedText>
      </Link>
    </View>
  )
}

export { PrimaryBtn }

/* Stylesheet for ThemedElement components */
const styles = StyleSheet.create({
  bubbles: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    justifyContent: 'space-between',
  },
  progress: {
    flexDirection: 'row',
    width: 100,
    marginTop: 200
  },
  button: {
    marginTop: 40,
    padding: 15,
    alignItems: 'center',
    borderRadius: 25
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
    marginBottom: 20,
    alignSelf: 'center'
  },
  logo: {
    width: 350,
    height: 65,
    resizeMode: 'contain',
    alignSelf: 'center'
  }
})