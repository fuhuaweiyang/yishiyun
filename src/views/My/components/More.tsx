import React from 'react'
import { View, Image, Pressable, Alert } from 'react-native'
import ContainerView from '../../../components/ContainerView'
import ContainerText from '../../../components/ContainerText'
import styleSheet from '../../../utils/styleSheet'
import { useNavigation } from '@react-navigation/native'
const CreatorCenter = (props: any) => {
  const navigation = useNavigation()
  const handleJump = ({ routeName }: any) => {
    if (routeName) {
      navigation.navigate(routeName as never)
    } else {
      Alert.alert('功能开发中...')
    }
  }
  const tabs = [
    {
      title: '设置',
      routeName: 'Setting'
    },
    {
      title: '演示中心',
      routeName: 'Demo'
    },
    {
      title: '帮助与客服',
      routeName: 'Help'
    },
    {
      title: '系统权限设置',
      routeName: 'Permission'
    },
    {
      title: '隐私政策',
      routeName: 'Privacy'
    },
    {
      title: '个人信息收集清单',
      routeName: 'PersonalList'
    },
    {
      title: '第三方共享信息清单',
      routeName: 'ThirdList'
    },
    {
      title: '版本',
      routeName: 'Version'
    },
  ]
  return (
    <ContainerView
      style={[
        styles.container,
        {
          backgroundColor: props.isDark ? '#181818' : '#fff',
        },
      ]}>
      <View style={styles.navs}>
        {tabs.map((item, index) => {
          return (
            <Pressable
              style={styles.item}
              onPress={() => handleJump(item)}
              key={index}>
              <ContainerText style={styles.text}>{item.title}</ContainerText>
              <Image style={styles.icon} source={require('../../../assets/icons/anythink_browser_right_icon.png')} />
            </Pressable>
          )
        })}
      </View>
    </ContainerView>
  )
}
const styles = styleSheet.create({
  container: {
    borderRadius: 5,
    padding: 15,
    margin: 15,
    display: 'flex',
    height: 'auto',
  },

  navs: {
    display: 'flex',
    flexDirection: 'col',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  item: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItem: 'center',
    height: 40,
    marginLeft: 10,
  },
  text: {
    marginTop: 5,
    fontSize: 12,
    width: '90%',
  },
  icon: {
    display: 'flex',
    alignSelf: 'center',
    width: 15,
    height: 10,
    marginRight: 5,
  }
})
export default CreatorCenter
