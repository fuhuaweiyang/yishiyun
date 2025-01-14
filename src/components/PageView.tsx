import React from 'react'
import { View, ViewProps, StatusBar } from 'react-native'
import useTheme from '../hooks/useTheme'
import { ViewStyle } from 'react-native'
interface Props extends ViewProps {
  style?: ViewStyle | Array<ViewStyle>
  key?: any
  children?: React.ReactNode
}
const PageView = (props: Props) => {
  const { backgroundColor } = useTheme()
  const { children, style = {}, key } = props
  return (
    <View {...props} key={key} style={[{ backgroundColor, flex: 1 }, style]}>
      <StatusBar
        backgroundColor={backgroundColor}
        barStyle={'light-content'}
      />
      {children}
    </View>
  )
}
export default PageView
