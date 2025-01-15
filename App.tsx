import React, { useEffect } from 'react'
import useTheme from './src/hooks/useTheme'
import PageView from './src/components/PageView'
import Index from './src/views/Index/Index'
import Login from './src/views/Login/Index'
import Server from './src/views/Server/Index'
import PersonDetail from './src/views/PersonDetail/Index'
import Setting from './src/views/Setting/Setting'
import Test from './src/views/Test'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux'
import { SafeAreaView } from 'react-native'
import store from './src/store'

const Stack = createNativeStackNavigator()

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  const { backgroundColor } = useTheme()
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, backgroundColor: backgroundColor }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Index"
            screenOptions={{
              navigationBarColor: backgroundColor,
              headerShown: false,
            }}>
            <Stack.Screen name="Index" component={Index} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Server" component={Server} />
            <Stack.Screen name="PersonDetail" component={PersonDetail} />
            <Stack.Screen name="Setting" component={Test} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  )
}
export default App
