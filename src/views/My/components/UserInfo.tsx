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
import { login } from "../../../action/authAction";

const UserInfo = ({ username }) => {
  const navigation = useNavigation()
  const handleToPersonHome = () => {
    navigation.replace('PersonDetail')
  };

  const screenWidth = Dimensions.get('window').width;

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
          <Text style={styles.text}>上次访问：2天前</Text>
        </View>
        <Text style={styles.text}>Hello, {username}</Text>
        <Pressable onPress={handleToPersonHome} style={styles.button}>
          <Text style={styles.buttonText}>个人资料</Text>
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
    color: 'white',
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

const mapStateToProps = (state) => ({
  username: state.auth.user ? state.auth.user.username : null,
});

export default connect(mapStateToProps)(UserInfo);
