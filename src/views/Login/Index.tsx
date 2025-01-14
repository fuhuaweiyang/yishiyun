import React,{useState} from 'react'
import { Image, Pressable,StyleSheet } from 'react-native'
import PageView from '../../components/PageView'
import ContainerView from '../../components/ContainerView'
import ContainerText from '../../components/ContainerText'
import useTheme from '../../hooks/useTheme'
import { useNavigation } from '@react-navigation/native'
import ListView from './components/ListView'
import { login } from '../../action/authAction';
import { connect } from 'react-redux';


const Login = () => {
  const navigation = useNavigation()
  const handleLogin = () => {
    
    navigation.replace('Index')

  }
  const handleClose = () => {
    navigation.goBack()
  }
  const [otherLogin, setOtherLogin] = useState(false);
  if (!otherLogin) {
    return (
      <PageView style={styles.container}>
        <Pressable onPress={handleLogin}>
          <Image
            source={require('../../assets/login/close-light.png')}
            style={styles.close}
          />
        </Pressable>
        <ContainerView style={styles.userInfo}>
          <ContainerText style={styles.title}>欢迎使用易视云</ContainerText>
          <ContainerText style={styles.label}>登录体验精彩</ContainerText>
          <ContainerText style={styles.phone}>181****6084</ContainerText>
          <ContainerText style={styles.hint}>
            认证服务由中国移动提供
          </ContainerText>
        </ContainerView>
        <Pressable
          onPress={handleLogin}
          style={({ pressed }) => [
            styles.loginBtn,
            {
              backgroundColor: pressed ? '#1171ee' : '#3d8afe',
            },
          ]}>
          <ContainerText style={styles.loginText}>一键登录</ContainerText>
        </Pressable>
        <Pressable
          onPress={()=>setOtherLogin(true)}
          style={({ pressed }) => [
            styles.loginBtn,
            {
              backgroundColor: pressed ? '#1171ee' : '#3d8afe',
            },
          ]}>
          <ContainerText style={styles.loginText}>其他方式登录</ContainerText>
        </Pressable>
      </PageView>
    )
  }else{
    return (
      <PageView style={styles.container}>
        <Pressable onPress={handleClose}>
          <Image
            source={ require('../../assets/login/close-light.png')
            }
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
}
const styles = StyleSheet.create({
  container: {},
  title: {
    marginTop: 20,
    fontWeight: 600,
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
  },
  logo: {
    marginTop: 40,
    width: 50,
    height: 50,
    borderRadius: 3,
  },
  label: {
    marginTop: 20,
    fontWeight: 600,
    fontSize: 18,
    textAlign: 'center',
  },
  phone: {
    marginTop: 20,
    fontSize: 24,
    textAlign: 'center',
  },
  hint: {
    marginTop: 20,
    textAlign: 'center',
  },
  loginBtn: {
    width: '90%',
    height: 40,
    borderRadius: 5,
    margin: '5%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#3d8afe',
  },
  loginText: {
    color: '#ffffff',
    fontSize: 16,
  },
})

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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
