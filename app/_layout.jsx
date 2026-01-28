import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

/* Custom Themed Elements */
import { SetColorMode } from '../components/ThemedElements'
import { Colors } from '../constants/Colors'
import { SQLiteDatabase, SQLiteProvider } from 'expo-sqlite'

const RootLayout = () => {
  const theme = SetColorMode();

  const createDBIfNeeded = async (db) => {
    await db.execAsync(
      `CREATE TABLE IF NOT EXISTS Users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT,
        email TEXT UNIQUE
      );`
    )
  }

  return (
    <SQLiteProvider databaseName="app_database.db" onInit={createDBIfNeeded}>

      <StatusBar style="auto" />
      <Stack screenOptions={{
        headerStyle: { backgroundColor: Colors.navBackground },
        // headerTitleStyle: { color: Colors.iconColor },
        headerTintColor: Colors.iconColor,
        contentStyle: { backgroundColor: theme.background }
      }}>
        <Stack.Screen name="(onboarding)" options={{ headerShown: false, animation: 'none' }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false, animation: 'none' }} />

        <Stack.Screen name="new-post" options={{ title: 'New Post', presentation: 'modal' }} />

      </Stack>
    </SQLiteProvider>
  )
}

export default RootLayout