import { StyleSheet, Text, View } from 'react-native'

// Custom Themed Components
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import { ThemedLink  } from '../../components/ThemedElements';

const Notifications = () => {
  

  return (
    <ThemedView style={styles.container}>
      <ThemedText type='header'>Notifications</ThemedText>

      <Spacer height={15} />

      <ThemedText type='subheader'>Follow Requests</ThemedText>
      <ThemedLink href='/activity' text='Follow Requests'/>

      <Spacer height={15} />

      <ThemedText type='subheader'>Activity</ThemedText>
      <ThemedLink href='/activity' text='Activity'/>

      <Spacer height={15} />

      <ThemedText type='subheader'>Groups</ThemedText>
      <ThemedLink href='/group-profile' text='Book Club'/>
      <ThemedLink href='/group-profile' text='PJO Re-Readathon'/>

      <Spacer height={15} />

      <ThemedText type='subheader'>Direct Messages</ThemedText>
      <ThemedLink href='/chat' text='schooledinbooks'/>
      <ThemedLink href='/chat' text='john121'/>
      <ThemedLink href='/chat' text='readsbyjay'/>
      <ThemedLink href='/chat' text='jazzyc'/>
      <ThemedLink href='/chat' text='books_by_daylight'/>
      <ThemedLink href='/chat' text='trustthebooks'/>
      <ThemedLink href='/chat' text='foreverbooked'/>
      <ThemedLink href='/chat' text='torrey.story'/>
      
    </ThemedView>
  )
}

export default Notifications

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    padding: 40
  }
})