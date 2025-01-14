import React, { useState, memo } from 'react'
import Calendar from './Calendar'
import useTheme from '../../../hooks/useTheme'
import styleSheet from '../../../utils/styleSheet'
import { View, Text, Image, Alert, TouchableOpacity } from 'react-native'
import SystemMessage from './SystemMessage'
import WarnMessage from './WarnMessage'
import Popover from 'react-native-popover-view';


const ListView = () => {
  const { backgroundColor, color } = useTheme()
  const [activeTab, setActiveTab] = useState('system')

  const handleTabSwitch = (tab) => {
    setActiveTab(tab)
  }

  return (
    <View style={{ flex: 1, backgroundColor: backgroundColor }}>
      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => handleTabSwitch('system')} style={styles.tabItem}>
          <Text style={[styles.tabLabel, activeTab === 'system' && styles.activeTab]}>
            系统通知
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabSwitch('warn')} style={styles.tabItem}>
          <Text style={[styles.tabLabel, activeTab === 'warn' && styles.activeTab]}>
            警报消息
          </Text>
        </TouchableOpacity>
      </View>
      <Calendar></Calendar>
      {activeTab === 'system' && <SystemMessage />}
      {activeTab === 'warn' && <WarnMessage />}

      <View style={styles.headerRight}>
        {/* <Image source={require('./../../../assets/icons/more.png')} style={styles.img} /> */}
        <Popover
          from={(
            <TouchableOpacity>
              <Image source={require('./../../../assets/icons/more.png')} style={styles.img} />
            </TouchableOpacity>
          )}
          backgroundStyle={styles.popoverBackground}
          popoverStyle={styles.popover}
          showArrow={false}
        >
          <View style={styles.popoverItem}>
            <Image source={require('./../../../assets/icons/setting_audio_ic_delete.webp')} style={styles.popoverImg} />
            <Text style={styles.popoverText}>清除未读</Text>
          </View>
          <View style={styles.popoverItem}>
            <Image source={require('./../../../assets/icons/setting_audio_ic_rename.webp')} style={styles.popoverImg} />
            <Text style={styles.popoverText}>筛选</Text>
          </View>
        </Popover>
      </View>
    </View >
  )
}

const styles = styleSheet.create({
  img: {
    width: 30,
    height: 25,
    marginBottom: 3,
    marginRight: 10,
  },
  popoverImg: {
    width: 30,
    height: 30,
    marginBottom: 3,
    marginRight: 10,
  },
  popoverText: {
    fontSize: 18,
    // fontWeight: "bold", 
  },
  popoverItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 40,
    color: '#990000',
    margin: 10,
    
  },
  navigator: {
    width: '100%',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '65%',
    borderColor: '#ccc',
  },
  tabItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tabLabel: {
    fontSize: 20,
    color: '#666',
  },
  activeTab: {
    color: '#1e80ff',  // Active tab color
  },
  headerRight: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  popoverBackground: {
    backgroundColor: 'transparent',
  },
  popover: {
    backgroundColor: "#edf6f7",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // 用于 Android 的阴影
  },
})

export default memo(ListView)
