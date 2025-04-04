import React from 'react'
import { View, ViewProps, StatusBar } from 'react-native'
import {useTheme} from '../hooks/useTheme'
import { ViewStyle } from 'react-native'
interface Props extends ViewProps {
  style?: ViewStyle | Array<ViewStyle>
  key?: any
  children?: React.ReactNode
}
const PageView = (props: Props) => {
  const { theme } = useTheme()
  const { children, style = {}, key } = props
  return (
    <View {...props} key={key} style={[{ backgroundColor:theme.backgroundColor, flex: 1 }, style]}>
      <StatusBar
        backgroundColor="rgba(1, 1, 1, 0.5)"
        translucent={false}
        barStyle={'light-content'}
      />
      {children}
    </View>
  )
}
export default PageView
