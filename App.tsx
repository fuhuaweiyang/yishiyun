import React, { useEffect } from 'react'
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
import { ThemeProvider, useTheme } from './src/hooks/useTheme'

const Stack = createNativeStackNavigator()

// 新增包裹组件
function MainNavigator() {
  const { theme } = useTheme() // 正确在ThemeProvider内部调用

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Index" component={Index} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Server" component={Server} />
          <Stack.Screen name="PersonDetail" component={PersonDetail} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="Test" component={Test} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <ThemeProvider>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </ThemeProvider>
  )
}

export default App