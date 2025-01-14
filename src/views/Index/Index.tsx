import React from 'react'
import { Image, TouchableOpacity, Alert, Text } from 'react-native'
import styleSheet from '../../utils/styleSheet'
import Home from '../Home/Index'
import Massage from '../Massage/Index'
import My from '../My/Index'
import Server from '../Server/Index'
import useTheme from '../../hooks/useTheme'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { useNavigation } from '@react-navigation/native'

const Tab = createMaterialBottomTabNavigator()


const Index = () => {
  const navigation = useNavigation()
  const handleTabPress = () => {
    Alert.alert('错误', '请输入用户名和密码');
    // 在这里处理点击事件逻辑
  };
  const { backgroundColor, isDark } = useTheme()
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#1e80ff"
      inactiveColor="#bfbfbf"
      activeIndicatorStyle={{
        backgroundColor,
      }}
      barStyle={{ backgroundColor }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: '设备',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                style={styles.img}
                source={require('../../assets/icons/home-selected.png')}
              />
            ) : (
              <Image
                style={styles.img}
                source={require('../../assets/icons/home-light.png')}
              />
            ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Massage"
        options={{
          tabBarLabel: '信息',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                style={styles.img}
                source={require('../../assets/icons/curriculum-selected.png')}
              />
            ) : (
              <Image
                style={styles.img}
                source={require('../../assets/icons/curriculum-light.png')
                }
              />
            ),
        }}
        component={Massage}
      />
      <Tab.Screen
        name="Server"
        options={{
          tabBarLabel: '服务',
          tabBarIcon: ({ focused }) => {
            return focused ? (
                <Image
                  style={styles.img}
                  source={require('../../assets/icons/discover-selected.png')}
                />
            ) : (
              <Image
                style={styles.img}
                source={require('../../assets/icons/discover-light.png')}
              />
            )
          },
        }}
        listeners={({ navigation}) => ({
          tabPress: (e) => {
            e.preventDefault()
            navigation.replace('Server')
          },
        })}
        component={Server}
      />
      <Tab.Screen
        name="My"
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                style={styles.img}
                source={require('../../assets/icons/my-selected.png')}
              />
            ) : (
              <Image
                style={styles.img}
                source={require('../../assets/icons/my-light.png')
                }
              />
            ),
        }}
        component={My}
      />
    </Tab.Navigator>
  )
}
const styles = styleSheet.create({
  index: {
    paddingBottom: 80,
  },
  img: {
    width: 25,
    height: 25,
    marginBottom: 3,
  },
})
export default Index
