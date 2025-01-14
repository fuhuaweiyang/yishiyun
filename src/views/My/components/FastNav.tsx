import React from 'react'
import { Image, Alert, Pressable } from 'react-native'
import ContainerView from '../../../components/ContainerView'
import ContainerText from '../../../components/ContainerText'
import styleSheet from '../../../utils/styleSheet'
import { useNavigation } from '@react-navigation/native'
const FastNav = (props: any) => {
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
      title: '我的商城',
      icon: require('../../../assets/publicImg/sign.png'),
    },
    {
      title: '我的订单',
      icon: require('../../../assets/publicImg/luck.png'),
    },
    {
      title: '我的分享',
      icon: require('../../../assets/publicImg/bug.png'),
    },
    {
      title: '截图录像',
      icon: require('../../../assets/publicImg/weal.png'),
      routeName: 'Weal',
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
      {tabs.map((item, index) => {
        return (
          <Pressable
            key={index}
            style={styles.item}
            onPress={() => handleJump(item)}>
            <Image style={styles.icon} source={item.icon} />
            <ContainerText style={styles.text}>{item.title}</ContainerText>
          </Pressable>
        )
      })}
    </ContainerView>
  )
}
const styles = styleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 5,
    margin: 15,
    padding: 15,
    marginBottom: 0,
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
  },
  icon: {
    width: 25,
    height: 25,
  },
  text: {
    marginTop: 5,
    fontSize: 12,
  },
})
export default FastNav