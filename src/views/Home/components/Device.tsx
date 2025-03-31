import React, { useState } from 'react';
import { View, Image, StyleSheet, Dimensions, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Video from "react-native-video";
import notifee from "@notifee/react-native";
import { useTheme } from '../../../hooks/useTheme';
import type { RootState } from '../../../store/store';
import { togglePopup, toggleShowMore, toggleOffline, toggleHelper } from '../../../store/uiSlice';

const CenteredImage = React.memo(() => {
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const { width, height } = Dimensions.get('window');
  const [isPlaying, setIsPlaying] = useState(false);
  
  // 从Redux获取状态
  const ifOffline  = useSelector((state: RootState) => state.ui.ifOffline);

  // 通知功能保持不变
  async function onDisplayNotification() {
    await notifee.requestPermission();
    const channelId = await notifee.createChannel({
      id: "default",
      name: "默认频道",
    });
    await notifee.displayNotification({
      title: "通知标题",
      body: "通知的主体内容",
      android: { channelId, pressAction: { id: "default" } },
    });
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor, width, height }]}>
      <View style={styles.roundedBox}>
        <View style={styles.containerVideo}>
          <View style={styles.stateIconView}>
            <Image source={require('./../../../assets/icons/battery_empty.png')} style={styles.bottomIcon} />
          </View>

          {!isPlaying ? (
            <View style={styles.thumbnailContainer}>
              <ImageBackground 
                source={require("./../../../assets/1.png")} 
                style={[styles.thumbnail]}>
                <View style={ifOffline && styles.thumbnailMask}></View>
              </ImageBackground>
              
              <TouchableOpacity
                onPress={() => !ifOffline && setIsPlaying(true)}
              >
                <Image
                  style={styles.playImg}
                  source={
                    ifOffline
                      ? require("./../../../assets/icons/offline.webp")
                      : require("./../../../assets/icons/adsail_player_center_play.png")
                  }
                />
              </TouchableOpacity>

              {ifOffline && (
                <>
                  <Text style={[styles.maskText, { fontSize: 16 }]}>设备离线了</Text>
                  <TouchableOpacity onPress={() => dispatch(toggleHelper())}>
                    <View style={styles.maskButton}>
                      <Text style={[styles.maskText, { fontSize: 14 }]}>查看帮助</Text>
                    </View>
                  </TouchableOpacity>
                </>
              )}
            </View>
          ) : (
            <Video
              source={require("./../../../assets/fireFly.mp4")}
              style={styles.video}
              resizeMode="cover"
              controls={true}
              onEnd={() => setIsPlaying(false)}
            />
          )}
        </View>

        <View style={[styles.bottonView, { backgroundColor: theme.itemBackgroundColor }]}>
          <Text style={[styles.text, { color: theme.TextColor }]}>我的摄像机</Text>
          <View style={styles.bottonIconView}>
            <TouchableOpacity>
              <Image source={require('./../../../assets/icons/phoneCard.png')} style={styles.bottomIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onDisplayNotification}>
              <Image source={require('./../../../assets/icons/bell.png')} style={styles.bottomIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch(toggleShowMore())}>
              <Image source={require('./../../../assets/icons/commet-light.png')} style={styles.bottomIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={[styles.AddRoundedBox, { backgroundColor: theme.itemBackgroundColor }]}>
        <TouchableOpacity onPress={() => dispatch(togglePopup())}>
          <Image source={require('./../../../assets/icons/add_2png.png')} style={styles.iconAdd} />
        </TouchableOpacity>
        <Text style={[styles.addText, { color: theme.TextColor }]}>添加摄像机</Text>
      </View>
    </View>
  );
});

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
  thumbnailMask: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // 半透明黑色遮罩
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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
  maskText: {
    color: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  maskButton: {
    borderRadius: 100,
    backgroundColor: '#4c9fff99',
    width: 90,
    height: 30,
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
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

export default CenteredImage;