import React, { useState } from 'react';
import { View, Image, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {  reversalIsShowMore, reversal } from "../../../action/index";
import Video from "react-native-video";
import Icon from "react-native-vector-icons/MaterialIcons";
import MoreFunc from './MoreFunc';

const CenteredImage = ({ isShowMore, reversalIsShowMore, reversal,  }) => {
  const { width, height } = Dimensions.get('window');
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <View style={[styles.container, { width, height }]}>
      <View style={styles.roundedBox}>
        <View style={styles.containerVideo}>
          <View style={styles.stateIconView}>
            <Image source={require('./../../../assets/icons/battery_empty.png')} style={styles.bottomIcon}></Image>
            {/* <Image source={require('./../../../assets/icons/battery_empty.png')} style={styles.bottomIcon}></Image> */}
          </View>
          {!isPlaying ? (
            <View style={styles.thumbnailContainer}>
              <Image source={require("./../../../assets/1.png")} style={styles.thumbnail} />
              <TouchableOpacity
                // style={styles.playButton}
                onPress={() => setIsPlaying(true)}
              >
                <Image style={styles.playImg} source={require("./../../../assets/icons/adsail_player_center_play.png")}></Image>
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
        <View style={styles.bottonView}>
          <Text style={styles.text}>我的摄像机</Text>
          <View style={styles.bottonIconView}>
            <TouchableOpacity>
              <Image source={require('./../../../assets/icons/phoneCard.png')} style={styles.bottomIcon}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./../../../assets/icons/bell.png')} style={styles.bottomIcon}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={reversalIsShowMore}>
              <Image source={require('./../../../assets/icons/commet-light.png')} style={styles.bottomIcon}></Image>
            </TouchableOpacity>
          </View>
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
  isShowMore: state.ifShow.isShowMore,
});

const mapDispatchToProps = {
  reversalIsShowMore,
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
  bottomIcon: {
    width: 30,
    height: 30,
    marginBottom: 0,
    marginRight: 10,

  },
  bottonView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottonIconView: {
    position: 'absolute', // 使用绝对定位
    right: 10,            // 距离右边10px
    flexDirection: 'row', // 横向排列
    alignItems: 'center', // 垂直居中
  },
  stateIconView: {
    position: 'absolute', // 使用绝对定位
    right: 10,            // 距离右边10px
    top: 10,
    flexDirection: 'row', // 横向排列
    zIndex: 1,
  },
  iconAdd: {
    width: 50,
    height: 50,
    marginBottom: 0,
  },
  text: {
    color: '#505859',
    fontSize: 20,
    height: 50,
    borderBottomLeftRadius: 20, // 左下角无圆角
    borderBottomRightRadius: 20,
    textAlignVertical: 'center', // 垂直居中
    marginLeft: 10,
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
    height: VideoHeight + 50,
    backgroundColor: '#ffffff',
    borderRadius: 20, // 设置圆角半径
    marginTop: 50,
    marginBottom: 20,
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
    borderTopLeftRadius: 20, // 左上角圆角
    borderTopRightRadius: 20, // 右上角圆角
    borderBottomLeftRadius: 0, // 左下角无圆角
    borderBottomRightRadius: 0, // 右下角无圆角
    overflow: "hidden",
  },
  thumbnailContainer: {
    width: VideoWidth,
    height: VideoHeight,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden", // 确保父容器隐藏溢出部分

  },
  thumbnail: {
    width: VideoWidth,
    height: VideoHeight,
    position: "absolute",
    borderTopLeftRadius: 20, // 左上角圆角
    borderTopRightRadius: 20, // 右上角圆角
    borderBottomLeftRadius: 0, // 左下角无圆角
    borderBottomRightRadius: 0, // 右下角无圆角
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
    borderTopLeftRadius: 20, // 左上角圆角
    borderTopRightRadius: 20, // 右上角圆角
    borderBottomLeftRadius: 0, // 左下角无圆角
    borderBottomRightRadius: 0, // 右下角无圆角
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CenteredImage);
