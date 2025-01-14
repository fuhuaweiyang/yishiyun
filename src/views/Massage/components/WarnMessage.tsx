import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const CenteredImage = () => {
  const { width, height } = Dimensions.get('window');

  return (
    <View style={[styles.container, { width, height }]}>
      <Image source={require('./../../../assets/icons/popup_img_ipplay.webp')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  image: {
    width: 200, // 根据需要调整图片的宽度
    height: 200, // 根据需要调整图片的高度
  },
});

export default CenteredImage;
