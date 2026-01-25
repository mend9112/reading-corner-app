import { StyleSheet, Text, View } from 'react-native'

// Custom Themed Components
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import { ThemedLink  } from '../../components/ThemedElements';

const MyBooks = () => {
  

  return (
    <ThemedView style={styles.container}>
      <ThemedText type='header'>My Books</ThemedText>

      <Spacer height={15} />
      <ThemedText type='subheader'>Currently Reading</ThemedText>
      <ThemedLink href='/update-progress' text='Update Progress'/>
      {/* Show Progress Bar */}

      <Spacer height={15} />
      <ThemedText type='subheader'>My Shelves</ThemedText>
      {/* Plus Icon */}
      <ThemedLink href='/shelf' text='Want to Read'/>
      <ThemedLink href='/shelf' text='5 Star Reads'/>
      <ThemedLink href='/shelf' text='More Shelves'/>
      
      <Spacer height={15} />
      <ThemedText type='subheader'>My Stats</ThemedText>
      {/* Stats Section */}
    </ThemedView>
  )
}

export default MyBooks

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    padding: 40
  }
})