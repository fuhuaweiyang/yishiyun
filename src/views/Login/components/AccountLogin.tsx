import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import { login } from '../../../action/authAction';
import { connect, useSelector, useDispatch } from 'react-redux';


const LoginPage = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('登录', username, password);
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: { username: username, password : password},
    })
    // login();
    navigation.replace('Index');
  };
  //   const handleLogin = () => {
  //   if (username === '' || password === '') {
  //     Alert.alert('错误', '请输入用户名和密码');
  //   } else {
  //     Alert.alert('登录成功', `用户名: ${username}`);
  //   }
  // };

  const handleRegister = () => {
    Alert.alert('注册', '跳转到注册页面');
  };

  const handleForgotPassword = () => {
    Alert.alert('忘记密码', '跳转到忘记密码页面');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="请输入账号"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="请输入密码"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* 水平排列“注册”和“忘记密码”文本标签 */}
      <View style={styles.linksContainer}>
        <Text style={styles.linkText} onPress={handleRegister}>
          注册
        </Text>
        <Text style={styles.linkText} onPress={handleForgotPassword}>
          忘记密码?
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>登录</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 50,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: 'transparent',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linksContainer: {
    flexDirection: 'row',  // 水平排列
    justifyContent: 'space-between',  // 让两个链接均匀分布
    width: '100%',
    marginBottom: 16,  // 给链接增加间距
  },
  linkText: {
    color: '#6c9ca7',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',  // 使文字居中
  },
});


const mapStateToProps = (state) => ({
  username: state.auth.user ? state.auth.user.username : null,
  isLoading: state.auth.isLoading,
  error: state.auth.error,
  user: state.auth.user,
});

// 将登录操作映射为 props
const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);