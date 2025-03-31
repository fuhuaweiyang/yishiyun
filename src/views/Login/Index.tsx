import React, { useState, useEffect } from 'react'
import { Image, Pressable, StyleSheet, TextInput } from 'react-native'
import PageView from '../../components/PageView'
import ContainerView from '../../components/ContainerView'
import ContainerText from '../../components/ContainerText'
import { useNavigation } from '@react-navigation/native'
import ListView from './components/ListView'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/authSlice'
import type { RootState } from '../../../store/store';

const Login = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);
  const iflogin = useSelector((state: RootState) => state.auth.iflogin);
  const error = useSelector((state: RootState) => state.auth.error);
  const user = useSelector((state: RootState) => state.auth.user);  const [otherLogin, setOtherLogin] = useState(false)
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  // 自动跳转逻辑
  useEffect(() => {
    if (iflogin) {
      navigation.replace('Index')
    }
  }, [user,login, navigation])

  const handleLogin = () => {
    if (!credentials.username || !credentials.password) {
      return
    }
    console.log('登录', credentials)
    dispatch(login(credentials))
  }

  const handleClose = () => {
    navigation.goBack()
  }

  const handleInputChange = (field: keyof typeof credentials, value: string) => {
    setCredentials(prev => ({
      ...prev,
      [field]: value
    }))
  }

  if (!otherLogin) {
    return (
      <PageView style={styles.container}>
        <Pressable onPress={handleClose}>
          <Image
            source={require('../../assets/login/close-light.png')}
            style={styles.close}
          />
        </Pressable>

        <ContainerView style={styles.userInfo}>
          <ContainerText style={styles.title}>欢迎使用易视云</ContainerText>
          <ContainerText style={styles.label}>登录体验精彩</ContainerText>

          <TextInput
            style={styles.input}
            placeholder="用户名"
            value={credentials.username}
            onChangeText={(text) => handleInputChange('username', text)}
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="密码"
            value={credentials.password}
            onChangeText={(text) => handleInputChange('password', text)}
            secureTextEntry
          />

          {error && (
            <ContainerText style={styles.errorText}>{error}</ContainerText>
          )}
        </ContainerView>

        <Pressable
          onPress={handleLogin}
          disabled={isLoading}
          style={({ pressed }) => [
            styles.loginBtn,
            {
              backgroundColor: pressed ? '#1171ee' : '#3d8afe',
              opacity: isLoading ? 0.7 : 1
            }
          ]}>
          <ContainerText style={styles.loginText}>
            {isLoading ? '登录中...' : '登录'}
          </ContainerText>
        </Pressable>

        <Pressable
          onPress={() => setOtherLogin(true)}
          style={({ pressed }) => [
            styles.loginBtn,
            {
              backgroundColor: pressed ? '#1171ee' : '#3d8afe'
            }
          ]}>
          <ContainerText style={styles.loginText}>其他方式登录</ContainerText>
        </Pressable>
      </PageView>
    )
  }

  return (
    <PageView style={styles.container}>
      <Pressable onPress={handleClose}>
        <Image
          source={require('../../assets/login/close-light.png')}
          style={styles.close}
        />
      </Pressable>
      <ContainerView style={styles.userInfo}>
        <ContainerText style={styles.title}>欢迎使用易视云</ContainerText>
      </ContainerView>
      <ListView />
    </PageView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    marginTop: 20,
    fontWeight: '600',
    fontSize: 25,
    textAlign: 'center',
    color: '#0e8fff'
  },
  close: {
    width: 25,
    height: 25,
    marginTop: 10,
    marginLeft: 10,
  },
  userInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
    width: '100%',
  },
  label: {
    marginTop: 20,
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 8,
    marginVertical: 10,
  },
  loginBtn: {
    width: '90%',
    height: 40,
    borderRadius: 5,
    margin: '5%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    fontSize: 14,
  }
})

export default Login