import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet ,Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const DeviceListScreen = () => {
  const navigation = useNavigation();
  const handleJump = ({ routeName }: any) => {
    if (routeName) {
        navigation.navigate(routeName as never)
    } else {
        Alert.alert('功能开发ing...')
    }
}
  const devices = [
    { type: '网络摄像机', id: '123452301', hidden: true },
    { type: '网络摄像机', id: '7740996105', hidden: false },
    { type: '门铃室内机', id: '678900839', hidden: true },
  ];

  const formatId = (id:String, hidden:Boolean) => {
    if (hidden) {
      return `${'*'.repeat(5)}${id.slice(-4)}`;
    }
    return id;
  };

  return (
    <View style={styles.mainContainer}>
      {/* 顶部按钮 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}  onPress={() => handleJump({ routeName: 'Home' })}>
          <Text style={styles.headerButtonText}>取消</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerButtonText}>帮助</Text>
        </TouchableOpacity>
      </View>

      {/* 圆角内容容器 */}
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>发现附近设备</Text>
        <Text style={styles.titleLittle}>发现设备</Text>
        <ScrollView style={styles.container}>
          {/* 设备列表 */}
          {devices.map((device, index) => (
            <View key={index} style={styles.deviceItem}>
              <View style={styles.deviceInfo}>
                <Text style={styles.deviceType}>{device.type}</Text>
                <Text style={styles.deviceId}>ID: {formatId(device.id, device.hidden)}</Text>
              </View>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>添加</Text>
              </TouchableOpacity>
            </View>
          ))}

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>更多添加方式</Text>
            
            <TouchableOpacity style={styles.addMethod}>
              <Text style={styles.methodText}>扫一扫添加</Text>
              <Text style={styles.subText}>手机扫设备机身码添加</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.addMethod}>
              <Text style={styles.methodText}>摄像机扫码添加</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  headerButtonText: {
    color: '#1890ff',
    fontSize: 16,
  },
  title: {
    padding: 16,
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleLittle: {
    padding: 16,
    fontSize: 16,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden', // 确保圆角生效
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  deviceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#f8f9fa',
  },
  deviceInfo: {
    flex: 1,
    marginRight: 16,
  },
  deviceType: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  deviceId: {
    fontSize: 14,
    color: '#666',
  },
  addButton: {
    backgroundColor: '#1890ff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  section: {
    marginTop: 24,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 16,
  },
  addMethod: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  methodText: {
    fontSize: 16,
    color: '#333',
  },
  subText: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
});

export default DeviceListScreen;