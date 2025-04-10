import React, { useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { fetchDevices, addDevice } from '../../store/deviceSlice';
import ContainerText from '../../components/ContainerText';
import {useTheme} from '../../hooks/useTheme'

const DeviceListScreen = () => {
  const { theme } = useTheme()
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const { deviceList, devicesSeacrch, loading, error } = useSelector((state: RootState) => state.devices);

  // 初始化设备
  useEffect(() => {
    dispatch(fetchDevices());
  }, [dispatch]);

  const handleJump = ({ routeName }: { routeName?: string }) => {
    if (routeName) {
      navigation.navigate(routeName as never);
    } else {
      Alert.alert('功能开发ing...');
    }
  };

  const formatId = (id: string, hidden: boolean) => {
    if (hidden) {
      return `${'*'.repeat(5)}${id.slice(-4)}`;
    }
    return id;
  };

  // 加载状态处理
  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#1890ff" />
      </View>
    );
  }

  // 错误状态处理
  if (error) {
    return (
      <View >
        <ContainerText >{error}</ContainerText>
      </View>
    );
  }

  return (
    <View style={[styles.mainContainer, { backgroundColor: theme.backgroundColor }]}>
      {/* 顶部按钮 */}
      <View style={[styles.header, { backgroundColor: theme.backgroundColor }]}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => handleJump({ routeName: 'Home' })}
        >
          <ContainerText style={styles.headerButtonText}>取消</ContainerText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => handleJump({ routeName: 'Help' })}
        >
          <ContainerText style={styles.headerButtonText}>帮助</ContainerText>
        </TouchableOpacity>
      </View>

      <View style={styles.contentWrapper}>
        <ContainerText style={styles.title}>发现附近设备</ContainerText>
        <ContainerText style={styles.titleLittle}>发现设备</ContainerText>
        <ScrollView style={styles.container}>
          {devicesSeacrch.map((device, index) => (
            <View key={index} style={[styles.deviceItem,{backgroundColor: theme.itemBackgroundColor}]}>
              <View style={styles.deviceInfo}>
                <ContainerText style={styles.deviceType}>{device.type}</ContainerText>
                <ContainerText style={styles.deviceId}>
                  ID: {formatId(device.id, device.hidden)}
                </ContainerText>
              </View>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => {
                  dispatch(addDevice(device))
                  console.log('设备已添加：')
                  console.log(deviceList)
                }}
              >
                <ContainerText style={styles.addButtonText}>添加</ContainerText>
              </TouchableOpacity>
            </View>
          ))}

          <View style={styles.section}>
            <ContainerText style={styles.sectionTitle}>更多添加方式</ContainerText>

            <TouchableOpacity
              style={styles.addMethod}
              onPress={() => handleJump({ routeName: 'QRScanner' })}
            >
              <ContainerText style={styles.methodText}>扫一扫添加</ContainerText>
              <ContainerText style={styles.subText}>手机扫设备机身码添加</ContainerText>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.addMethod}
              onPress={() => handleJump({ routeName: 'CameraScan' })}
            >
              <ContainerText style={styles.methodText}>摄像机扫码添加</ContainerText>
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
    padding: 16,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f2f5',
  },
  errorText: {
    color: '#ff4d4f',
    fontSize: 16,
    padding: 20,
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