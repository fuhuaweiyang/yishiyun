import React from 'react';
import { Image, Alert, Pressable, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FastNav = (props: any) => {
  const navigation = useNavigation();
  const handleJump = ({ routeName }: any) => {
    if (routeName) {
      navigation.navigate(routeName as never);
    } else {
      Alert.alert('功能开发ing...');
    }
  };

  const tabs = [
    {
      title: '我的商城',
      icon: require('../../../assets/icons/shop.png'),
    },
    {
      title: '我的订单',
      icon: require('../../../assets/icons/account.png'),
    },
    {
      title: '我的分享',
      icon: require('../../../assets/icons/share.png'),
    },
    {
      title: '截图录像',
      icon: require('../../../assets/icons/Screenshot.png'),
    },
  ];

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: '#fff',
        },
      ]}>
      {tabs.map((item, index) => {
        return (
          <Pressable
            key={index}
            style={styles.item}
            onPress={() => handleJump(item)}>
            <View style={styles.iconContainer}>
              <Image style={styles.icon} source={item.icon} />
            </View>
            <Text style={styles.text}>{item.title}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 5,
    padding: 15,
    marginBottom: 0,
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
  },
  iconContainer: {
    backgroundColor: '#f7f9f9', // 灰色背景
    borderRadius: 25, // 确保容器为圆形
    width: 50, // 圆形容器的宽度
    height: 50, // 圆形容器的高度
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
  },
  text: {
    marginTop: 5,
    fontSize: 12,
  },
});

export default FastNav;
