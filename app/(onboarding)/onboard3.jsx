import { StyleSheet, View } from 'react-native'

// Graphic Imports
import GraphicLight from '../../assets/images/img-page3-light.png'
import GraphicDark from '../../assets/images/img-page3-dark.png'

// Custom Themed Elements
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import { OnboardImage, PrimaryBtn, ProgressBar, SetImageColor } from '../../components/ThemedElements';

const Onboard3 = () => {
  const graphic = SetImageColor(GraphicLight, GraphicDark)

  return (
    <ThemedView style={styles.container}>

      <View style={ {height: 475} }>

        <OnboardImage source={graphic}/>

        <ThemedText type='header'>Track your reading journey</ThemedText>
        <ThemedText type='ul'>• Book tracking and reading progress</ThemedText>
        <ThemedText type='ul'>• Custom shelves and statistics</ThemedText>
        <ThemedText type='ul'>• Book recommmendations based on your shelved books</ThemedText>

        <PrimaryBtn href="/loginLanding" text="Get Started!"/>
      </View>

      <ProgressBar name1="circle" name2="circle" name3="circle"/>

    </ThemedView>
  )
}

export default Onboard3

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    padding: 40
  },
})