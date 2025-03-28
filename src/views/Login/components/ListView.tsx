import React, { memo, useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import AccountLogin from './AccountLogin'
import {StyleSheet} from 'react-native'
import PhoneLogin from './PhoneLogin'
import ClickLogin from './ClickLogin'

const Tab = createMaterialTopTabNavigator()

function ListView(): React.JSX.Element {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#1e80ff"
      inactiveColor="#bfbfbf"
    >
      <Tab.Screen
        name="phone"
        options={{
          tabBarLabel: '手机号登录'
        }}

        component={PhoneLogin}
      />
      <Tab.Screen
        name="account"
        options={{
          tabBarLabel: '账号登录',
        }}
        component={AccountLogin}
      />
      <Tab.Screen
        name="click"
        options={{
          tabBarLabel: '一键登录',
        }}
        component={ClickLogin}
      />
    </Tab.Navigator>
  )
}
const styles = StyleSheet.create({
})
export default memo(ListView)
