import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router';

/* Custom Themed Elements */
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import { ThemedLink  } from '../../components/ThemedElements';
import Spacer from '../../components/Spacer';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Home = () => {
  const headerRight = () => {
    return (
      <ThemedLink href='/new-post' text={
        <FontAwesome name="plus-square-o" size={30} />} 
      />
    )
  }


  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ headerRight }} />
      <ThemedText type='header'>Home</ThemedText>

      <Spacer height={15} />
      
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