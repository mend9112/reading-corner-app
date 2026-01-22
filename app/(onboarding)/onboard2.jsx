import { StyleSheet, View } from 'react-native'

// Graphic Imports
import GraphicLight from '../../assets/images/img-page2-light.png'
import GraphicDark from '../../assets/images/img-page2-dark.png'

// Custom Themed Elements
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import { OnboardImage, ProgressBar, SetImageColor } from '../../components/ThemedElements';

const Onboard2 = () => {
  const graphic = SetImageColor(GraphicLight, GraphicDark)

  return (
    <ThemedView style={styles.container}>

      <View style={ {height: 475} }>
        <OnboardImage source={graphic}/>

        <ThemedText type='header'>Discover a community of readers</ThemedText>
        <ThemedText type='ul'>• Social profiles and posts to connect with fellow readers and authors</ThemedText>
        <ThemedText type='ul'>• Groups for your book clubs and buddy-reads</ThemedText>
      </View>

      <ProgressBar name1="circle" name2="circle" name3="circle-o"/>

    </ThemedView>
  )
}

export default Onboard2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    padding: 40
  },
})