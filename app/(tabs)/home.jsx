import { StyleSheet, Text, View } from 'react-native'

// Custom Themed Components
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import { ThemedLink  } from '../../components/ThemedElements';

const Home = () => {
  

  return (
    <ThemedView style={styles.container}>
      <ThemedText type='header'>Home</ThemedText>

      <Spacer height={15} />

      <ThemedLink href='/new-post' text='New Post'/>
      
      {/* View of Dynamic Posts */}
      <View>
        <ThemedLink href='/other-profile' text='Friend - Progress Update'/>
        <ThemedLink href='/other-profile' text='Friend - Post'/>
        <ThemedLink href='/other-profile' text='Friend - Review'/>
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