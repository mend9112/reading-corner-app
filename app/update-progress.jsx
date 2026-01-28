import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { router } from 'expo-router';

// Custom Themed Components
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import Spacer from '../components/Spacer';
import { BackBtn, ThemedTextArea  } from '../components/ThemedElements';


const UpdateProgress = () => {

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

      <ThemedTextArea text="Anything you'd like to share" />
      
    </ThemedView>
  )
}

export default UpdateProgress

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    padding: 40
  }
})