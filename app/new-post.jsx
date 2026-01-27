import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

// Custom Themed Components
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import { router } from 'expo-router';
import Spacer from '../components/Spacer';
import { BackBtn, ThemedTextArea  } from '../components/ThemedElements';


const NewPost = () => {

  return (
    <ThemedView style={styles.container}>
      <View style={ {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: '100%', 
        alignItems: 'center'} }
      >
        <TouchableOpacity onPress={() => router.back()}>
          <ThemedText type='body' style={ {fontSize: 20} }>Cancel</ThemedText>
        </TouchableOpacity>

        <BackBtn text='Share' />
      </View>

      <Spacer height={20} />

      <ThemedTextArea text='What would you like to share?' />
      
    </ThemedView>
  )
}

export default NewPost

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    padding: 40
  }
})