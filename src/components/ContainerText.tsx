import React from 'react'
import { Text, TextProps } from 'react-native'
import {useTheme} from '../hooks/useTheme'
import { TextStyle } from 'react-native'
interface Props extends TextProps {
  style?: TextStyle | Array<TextStyle>;
  key?: any;
  children?: React.ReactNode;
}

const ContainerText: React.FC<Props> = (props) => {
  const { theme } = useTheme(); // 获取主题
  const { children, style = {}, key, ...restProps } = props;

  return (
    <Text
      ellipsizeMode="tail"
      key={key}
      {...restProps}
      style={[{ color: theme.TextColor }, style]}
    >
      {children}
    </Text>
  );
};

export default ContainerText;
