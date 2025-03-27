import React from "react";
import { ScrollView, Text, View, Image, Pressable, StyleSheet, Dimensions } from "react-native";
import ListView from "./components/ListView";
import { useNavigation } from '@react-navigation/native';
import Compare from "./components/Compare";
import { useTheme } from "../../hooks/useTheme";
const Index = () => {
  const navigation = useNavigation();
  const handleClose = () => {
    navigation.replace('Index');
  };
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Pressable onPress={handleClose} style={styles.close}>
        <Image
          style={styles.closeImg}
          source={require('../../assets/login/close-light.png')}
        />
      </Pressable>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 标题文本应用主题色 */}
        <Text style={[styles.headerText, { color: theme.TextColor }]}>商城</Text>
        
        <Image
          source={require('../../assets/icons/guide_img_none.webp')}
          style={styles.headImg}
        />

        <View style={styles.serverItem}>
          {/* 子标题文本应用主题色 */}
          <Text style={[styles.serverItemHeaderText, { color: theme.TextColor }]}>
            服务优势
          </Text>
          <ListView />
          <Compare />
        </View>

        {/* 所有文本组件都需要添加颜色 */}
        {[
          {
            title: '空间无限',
            content: '云存储空间无上限，录多少存多少，无需再担心储存卡。空间不足，保留录像备份轻松无忧。',
            img: require('../../assets/itemImg/add_guide_img_basestation.webp'),
          },
          {
            title: '倍数播放',
            content: '录像视频倍速播放，支持快速浏览一天的录像回放，确保不错过任何细节，查看录像回放更加高效。',
            img: require('../../assets/itemImg/add_guide_img_bound.webp'),
          },
          {
            title: '离线观看',
            content: '设备无需依赖网络连接，您可在任何时候、任何地点自由观看录像，轻松回放监控画面，方便又快捷。',
            img: require('../../assets/itemImg/add_guide_img_doorbell.webp'),
          },
          {
            title: '故障备份',
            content: '自动备份录像，即使设备故障和存储卡损坏，您的重要信息依然安全保存，保障您的数据完整性和安全性，让您再也无需再担心数据丢失。',
            img: require('../../assets/itemImg/guide_img_scan.webp'),
          },
        ].map((item, index) => (
          <View key={index} style={styles.serverItem}>
            <Text style={[styles.serverItemHeaderText, { color: theme.TextColor }]}>
              {item.title}
            </Text>
            <Text style={[styles.serverItemContentText, { color: theme.TextColor }]}>
              {item.content}
            </Text>
            <Image source={item.img} style={styles.itemImg} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    paddingBottom: 20, // 防止内容贴边
    display: 'flex',
    alignItems: 'center',
  },
  headImg: {
    height: screenWidth * 0.6,
    width: screenWidth * 0.6,
  },
  itemImg: {
    width: screenWidth * 0.90,
    height: undefined,
    aspectRatio: 122/72, // 保持宽高比（替换为图片的实际宽高比）
    resizeMode: 'contain', // 图片缩放模式
  },
  close: {
    position: 'absolute',
    marginTop: 10,
    marginLeft: 10,
    zIndex: 100,
  },
  closeImg: {
    width: 25,
    height: 25,
  },
  headerText: {
    width: screenWidth * 0.8,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 20,
    color: '#000',
    textAlign: 'center',
  },
  serverItemContentText: {
    width: screenWidth * 0.90,
    marginBottom: '3%',
  },
  serverItemHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: '3%',
    color: '#000',
    alignSelf: 'flex-start',
  },
  serverItem: {
    width: '90%',
    display: 'flex',
    flexDirection: 'col',
    alignItems: 'center',
    margin: '3%',
  },
})
export default Index;