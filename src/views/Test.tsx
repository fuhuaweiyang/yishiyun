import React, { useState } from "react";
import { View, TouchableOpacity,SafeAreaView, StyleSheet, Image, Dimensions } from "react-native";
import Video from "react-native-video";
import Icon from "react-native-vector-icons/MaterialIcons";
const Test = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
      <View style={styles.container}>
        {!isPlaying ? (
          <View style={styles.thumbnailContainer}>
            <Image source={require("../assets/88544965_p0.png")} style={styles.thumbnail} />
            <TouchableOpacity
              style={styles.playButton}
              onPress={() => setIsPlaying(true)}
            >
              <Icon name="play-arrow" size={50} color="#fff" />
            </TouchableOpacity>
          </View>
        ) : (
          <Video
            source={require("../assets/fireFly.mp4")}
            style={styles.video}
            resizeMode="cover"
            controls={true}
            onEnd={() => setIsPlaying(false)} // 视频结束后返回初始状态
          />
        )}
      </View>
  );
};
const screenWidth = Dimensions.get('window').width;

const VideoWidth = screenWidth
const VideoHeight = screenWidth * 0.7
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: VideoWidth,
    height: VideoHeight,
    borderRadius: 15,
  },
  thumbnailContainer: {
    width: VideoWidth,
    height: VideoHeight,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden", // 确保父容器隐藏溢出部分
    borderRadius: 15, // 圆角
  },
  thumbnail: {
    width: VideoWidth,
    height: VideoHeight,
    position: "absolute",
    borderRadius: 15, // 圆角
    overflow: "hidden",
  },
  
  playButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    width: VideoWidth,
    height: VideoHeight,
  },
});

export default Test;
