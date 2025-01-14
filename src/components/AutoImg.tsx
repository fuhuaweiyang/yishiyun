import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';

var dimensions = { width: 0, height: 0 };
const AutoImg = ({ imageSource }) => {
    // const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (imageSource) {
          const { width, height } = Image.resolveAssetSource(imageSource);
        //   setDimensions({ width, height });
        dimensions = { width:Math.floor(width), height:Math.floor(height) };
        }
      }, [imageSource]);
    
      return (
        <View style={styles.container}>
          <ImageBackground
            source={imageSource}
            style={styles.itemImg}
          >
            <Text>图片宽高：{dimensions.width} x {dimensions.height}</Text>
          </ImageBackground>
        </View>
      );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImg: {
    width: screenWidth * 0.90,
    height: undefined,
    aspectRatio: dimensions.width/dimensions.height, // 保持宽高比（替换为图片的实际宽高比）
    resizeMode: 'contain', // 图片缩放模式
  },
});

export default AutoImg;
