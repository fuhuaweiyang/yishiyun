import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../store/authSlice';  // 从 slice 导入
import type { RootState } from '../../../store/store';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);
  const error = useSelector((state: RootState) => state.auth.error);
  const user = useSelector((state: RootState) => state.auth.user);  
  const navigation = useNavigation();
  
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  // 登录成功自动跳转
  useEffect(() => {
    if (user?.username) {
      navigation.replace('Index');
    }
  }, [user, navigation]);

  // 错误提示处理
  useEffect(() => {
    if (error) {
      Alert.alert('登录失败', error);
    }
  }, [error]);

  const handleLogin = () => {
    if (!credentials.username || !credentials.password) {
      Alert.alert('错误', '请输入用户名和密码');
      return;
    }
    dispatch(login(credentials));
  };

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
        value={credentials.username}
        onChangeText={(text) => setCredentials(prev => ({...prev, username: text}))}
      />

      <TextInput
        style={styles.input}
        placeholder="请输入密码"
        value={credentials.password}
        onChangeText={(text) => setCredentials(prev => ({...prev, password: text}))}
        secureTextEntry
      />

      <View style={styles.linksContainer}>
        <Text style={styles.linkText} onPress={handleRegister}>
          注册
        </Text>
        <Text style={styles.linkText} onPress={handleForgotPassword}>
          忘记密码?
        </Text>
      </View>

      <TouchableOpacity 
        style={[styles.button, isLoading && styles.disabledButton]} 
        onPress={handleLogin}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>
          {isLoading ? '登录中...' : '登录'}
        </Text>
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
  disabledButton: {
    backgroundColor: '#99c2ff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
  },
  linkText: {
    color: '#6c9ca7',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LoginPage;