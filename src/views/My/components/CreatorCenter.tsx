import React from 'react'
import { View, Image, Alert, Pressable, StyleSheet } from 'react-native'
import ContainerView from '../../../components/ContainerView'
import ContainerText from '../../../components/ContainerText'
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
      title: '云存储',
      darkIcon: require('../../../assets/my/data-dark.png'),
      lightIcon: require('../../../assets/my/data-light.png'),
      routeName: 'ContentData',
    },
    {
      title: 'AI智能告警',
      darkIcon: require('../../../assets/my/fans-dark.png'),
      lightIcon: require('../../../assets/my/fans-light.png'),
    },
    {
      title: '4G流量',
      darkIcon: require('../../../assets/my/edit-dark.png'),
      lightIcon: require('../../../assets/my/edit-light.png'),
    }
  ]
  return (
    <ContainerView
      style={[
        styles.container,
        {
          backgroundColor: '#fff',
        },
      ]}>
      <View style={styles.title}>
        <ContainerText>增值服务</ContainerText>
      </View>
      <View style={styles.navs}>
        {tabs.map((item, index) => {
          return (
            <Pressable
              style={styles.item}
              onPress={() => handleJump(item)}
              key={index}>
              <Image
                style={styles.icon}
                source={item.lightIcon}
              />
              <ContainerText style={styles.text}>{item.title}</ContainerText>
            </Pressable>
          )
        })}
      </View>
    </ContainerView>
  )
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  navs: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    height: 40,
    verticalAlign: 'middle',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backHome: {
    fontSize: 12,
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '33%',
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
export default CreatorCenter
