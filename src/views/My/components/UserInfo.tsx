import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { connect } from 'react-redux';
import { useTheme } from '../../../hooks/useTheme';
import ContainerText from '../../../components/ContainerText';

const UserInfo = ({ username }) => {
  const navigation = useNavigation()
  const handleToPersonHome = () => {
    navigation.replace('PersonDetail')
  };

  const screenWidth = Dimensions.get('window').width;

  const { theme } = useTheme()

  return (
    <View style={styles.container}>
      {/* 图片背景 */}
      <Image
        source={require('../../../assets/publicImg/background.png')}
        style={[styles.itemImg, { width: screenWidth, height: screenWidth * 0.5 }]}
      />
      {/* 文字叠加层 */}
      <View style={styles.overlay}>
        <View>
          <ContainerText style={styles.text}>上次访问：2天前</ContainerText>
        </View>
        <ContainerText style={styles.text}>Hello, {username}</ContainerText>
        <Pressable onPress={handleToPersonHome} style={[styles.button,{backgroundColor:theme.itemBackgroundColor}]}>
          <ContainerText style={[styles.buttonText,{color:theme.TextColor}]}>个人资料</ContainerText>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  itemImg: {
    width: '100%',
    height: '50%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // 半透明背景（可选）
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'black',
  },
});

const mapStateToProps = (state: any) => ({
  username: state.auth.user ? state.auth.user.username : null,
});

export default connect(mapStateToProps)(UserInfo);
