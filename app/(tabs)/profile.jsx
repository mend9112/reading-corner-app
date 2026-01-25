import { StyleSheet, Text, View } from 'react-native'

// Custom Themed Components
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import { ThemedLink  } from '../../components/ThemedElements';

const Profile = () => {
  

  return (
    <ThemedView style={styles.container}>
      <ThemedText type='header'>Profile</ThemedText>

      <Spacer height={15} />

      <ThemedLink href='/settings' text='Settings'/>
      <ThemedLink href='/new-post' text='New Post'/>
      <ThemedLink href='/shelf' text='View Shelves'/>
      <ThemedLink href='/stat' text='My Stats'/>
    </ThemedView>
  )
}

export default Profile

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    padding: 40
  }
})