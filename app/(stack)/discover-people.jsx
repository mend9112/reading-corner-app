import { StyleSheet, Text, View } from 'react-native'

// Custom Themed Components
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import { ThemedLink  } from '../../components/ThemedElements';

const DiscoverPeople = () => {
  

  return (
    <ThemedView style={styles.container}>
      <ThemedText type='header'>Discover</ThemedText>

      <Spacer height={15} />

      <ThemedLink href='/discover' text='Titles'/>
      <ThemedLink href='/discover-people' text='People'/>

      <Spacer height={15} />

      <ThemedText type='subheader'>Suggested People</ThemedText>
      {/* <ThemedLink href='/shelf' text='View Trending Shelf'/> */}

      <ThemedText type='subheader'>Posts for You</ThemedText>

      <View>
        <ThemedLink href='/other-profile' text='Other - Post 1'/>
        <ThemedLink href='/other-profile' text='Other - Post 2'/>
        <ThemedLink href='/other-profile' text='Other - Post 3'/>
        <ThemedLink href='/other-profile' text='Other - Post 4'/>
      </View>

      <Spacer height={15} />

    </ThemedView>
  )
}

export default DiscoverPeople

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    padding: 40
  }
})