import { StyleSheet, View } from 'react-native'

// Graphic Imports
import GraphicLight from '../../assets/images/img-page1-light.png'
import GraphicDark from '../../assets/images/img-page1-dark.png'

// Custom Themed Elements
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import { OnboardImage, ProgressBar, SetImageColor } from '../../components/ThemedElements';

const Onboard1 = () => {
  const graphic = SetImageColor(GraphicLight, GraphicDark)

  return (
    <ThemedView style={styles.container}>

      <View style={ {height: 475} }>
        <OnboardImage source={graphic}/>
        <ThemedText type='header'>Welcome to ReadingCorner, the online community for readers!</ThemedText>
      </View>
    
      <ProgressBar name1="circle" name2="circle-o" name3="circle-o"/>

    </ThemedView>
  )
}

export default Onboard1

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    padding: 40
  },
})