import { StyleSheet, View } from 'react-native'

// Graphic Imports
import GraphicLight from '../assets/images/img-page1-light.png'
import GraphicDark from '../assets/images/img-page1-dark.png'

// Custom Themed View
import ThemedView from '../components/ThemedView';
import { OnboardImage, SetImageColor, PrimaryBtn  } from '../components/ThemedElements';

const Home = () => {
  const graphic = SetImageColor(GraphicLight, GraphicDark)

  return (
    <ThemedView style={styles.container}>
      <View style={ {height: 475, alignItems: 'center'} }>
        <OnboardImage source={graphic}/>
        <View>
          <PrimaryBtn href="/onboard1" text="START APP"/>
        </View>

        <PrimaryBtn href='/home' text='SKIP LOGIN' />
        
      </View>
    </ThemedView>
  )
}

export default Home

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    padding: 40
  }
})