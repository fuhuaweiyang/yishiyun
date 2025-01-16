import React, { useState }  from 'react';
import { View, Image, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { reversal } from "../../../action/index";
import Video from "react-native-video";
import Icon from "react-native-vector-icons/MaterialIcons";

const CenteredImage = ({ ifshowpop, reversal }) => {
  const { width, height } = Dimensions.get('window');
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <View style={[styles.container, { width, height }]}>
      <View style={styles.roundedBox}>
        <View style={styles.containerVideo}>
          {!isPlaying ? (
            <View style={styles.thumbnailContainer}>
              <Image source={require("./../../../assets/1.png")} style={styles.thumbnail} />
              <TouchableOpacity
                // style={styles.playButton}
                onPress={() => setIsPlaying(true)}
              >
                <Image style={styles.playImg} source={require("./../../../assets/icons/adsail_player_center_play.png") }></Image>
              </TouchableOpacity>
            </View>
          ) : (
            <Video
              source={require("./../../../assets/fireFly.mp4")}
              style={styles.video}
              resizeMode="cover"
              controls={true}
              onEnd={() => setIsPlaying(false)} // 视频结束后返回初始状态
            />
          )}
        </View>
      </View>
      <View style={styles.AddRoundedBox}>
        <TouchableOpacity onPress={reversal}>
          <Image source={require('./../../../assets/icons/add_2png.png')} style={styles.iconAdd} />
        </TouchableOpacity>
        <Text style={styles.addText}>添加摄像机</Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  ifshowpop: state.ifShow.ifshowpop,
});

const mapDispatchToProps = {
  reversal
};
const screenWidth = Dimensions.get('window').width;

const VideoWidth = screenWidth * 0.9
const VideoHeight = screenWidth * 0.6
const styles = StyleSheet.create({
  image: {
    width: 340,
    height: 200,
    borderTopLeftRadius: 20, // 左上角圆角
    borderTopRightRadius: 20, // 右上角圆角
    borderBottomLeftRadius: 0, // 左下角无圆角
    borderBottomRightRadius: 0, // 右下角无圆角
  },
  iconAdd: {
    width: 50,
    height: 50,
    marginBottom: 0,
  },
  text: {
    color: '#505859',
    fontSize: 20,
    height: 60,
    backgroundColor: '#edf4f3',
    textAlignVertical: 'center',
    borderBottomLeftRadius: 20, // 左下角无圆角
    borderBottomRightRadius: 20,
  },
  addText: {
    color: '#505859',
    fontSize: 20,
    height: 60,
    textAlignVertical: 'center',
    borderBottomLeftRadius: 20, // 左下角无圆角
    borderBottomRightRadius: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  roundedBox: {
    width: VideoWidth, // 根据需要调整图片的宽度
    height: VideoHeight,
    backgroundColor: '#ffffff',
    borderRadius: 20, // 设置圆角半径
    marginTop: 50,
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  AddRoundedBox: {
    width: VideoWidth, // 根据需要调整图片的宽度
    height: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 20, // 设置圆角半径
    marginTop: 20,
    marginBottom: 20,
  },
  containerVideo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: VideoWidth,
    height: VideoHeight,
    borderRadius: 15,
    overflow: "hidden",
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
  // playButton: {
  //   width: 70,
  //   height: 70,
  //   borderRadius: 35,
  //   backgroundColor: "rgba(0, 0, 0, 0.6)",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  playImg: {
    width: 70,
    height: 70,
  },
  video: {
    width: VideoWidth,
    height: VideoHeight,
    overflow: "hidden", // 确保父容器隐藏溢出部分
    borderRadius: 15, // 圆角
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CenteredImage);
