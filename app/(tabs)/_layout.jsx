import { Stack, Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

/* Icon Imports */
import Octicons from '@expo/vector-icons/Octicons';
import Ionicons from '@expo/vector-icons/Ionicons';

/* Custom Themed Elements */
import { Colors } from '../../constants/Colors'
import { SetColorMode } from '../../components/ThemedElements'

const TabsLayout = () => {
  const theme = SetColorMode();

  return (
    <>
      {/* <StatusBar style="auto" /> */}
      {/* <Stack screenOptions={{
        headerStyle: { backgroundColor: Colors.navBackground },
        headerTintColor: Colors.iconColor,
        headerBackTitle: 'Back',
        headerTitle: '', 
        headerTransparent: true,
      }}>
        <Stack.Screen name="home" options={{}} />
        <Stack.Screen name="discover" options={{}} />
      </Stack> */}

      <Tabs
        screenOptions={{
          headerStyle: { backgroundColor: Colors.navBackground },
          headerTintColor: Colors.iconColor,
          headerShow: false, 
          tabBarStyle: {
            backgroundColor: Colors.navBackground
          },
          tabBarActiveTintColor: theme.iconColorFocused,
          tabBarInactiveTintColor: theme.iconColor
        }}>

        <Tabs.Screen name='home' options={ {title:'', tabBarIcon: ( {focused} ) => (
          <Ionicons size={30} 
          name={focused ? 'home' : 'home-outline'}
          color={Colors.iconColor} />
        )}} />
        <Tabs.Screen name='myBooks' options={ {title:'', headerTitle:'My Books', tabBarIcon: ( {focused} ) => (
          <Ionicons size={30} 
          name={focused ? 'book' : 'book-outline'}
          color={Colors.iconColor} />
        )}} />
        <Tabs.Screen name='discover' options={ {title:'', headerTitle:'Discover', tabBarIcon: ( {focused} ) => (
          <Ionicons size={30} 
          name={focused ? 'search' : 'search-outline'}
          color={Colors.iconColor} />
        )}} />
        <Tabs.Screen name='notifications' options={ {title:'', headerTitle:'Notifications', tabBarIcon: ( {focused} ) => (
          <Ionicons size={30} 
          name={focused ? 'notifications' : 'notifications-outline'}
          color={Colors.iconColor} />
        )}} />
        <Tabs.Screen name='profile' options={ {title:'', tabBarIcon: ( {focused} ) => (
          <Ionicons size={30} 
          name={focused ? 'person' : 'person-outline'}
          color={Colors.iconColor} />
        )}} />
      </Tabs>

      
    </>
  )
}

export default TabsLayout