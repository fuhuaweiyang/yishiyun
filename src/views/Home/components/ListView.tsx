import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '../../../hooks/useTheme';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Device from './Device';
import Group from './Group';
import MoreFunc from './MoreFunc';
import PopWindow from './PopWindow';
import PopHelper from './PopHelper';
import { togglePopup, toggleShowMore, toggleHelper } from '../../../store/uiSlice';
import type { RootState } from '../../../store/store';
import ContainerText from '../../../components/ContainerText';

const ListView = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('system');
  const dispatch = useDispatch();


  const ifShowpop = useSelector((state: RootState) => state.ui.ifShowpop);
  const isShowMore = useSelector((state: RootState) => state.ui.isShowMore);
  const ifShowHelper = useSelector((state: RootState) => state.ui.ifShowHelper);


  const handleTabSwitch = (tab: string) => {
    setActiveTab(tab);
  };

  const changePop = () => {
    dispatch(togglePopup());
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.itemBackgroundColor }}>
      <View style={styles.tabBar}>
        <TouchableOpacity
          onPress={() => handleTabSwitch('system')}
          style={styles.tabItem}
          activeOpacity={0.7}>
          <ContainerText style={[styles.tabLabel, activeTab === 'system' && styles.activeTab]}>
            设备
          </ContainerText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTabSwitch('warn')}
          style={styles.tabItem}
          activeOpacity={0.7}>
          <ContainerText style={[styles.tabLabel, activeTab === 'warn' && styles.activeTab]}>
            分组
          </ContainerText>
        </TouchableOpacity>
      </View>

      {activeTab === 'system' && <Device />}
      {activeTab === 'warn' && <Group />}

      <View style={styles.headerRight}>
        <TouchableOpacity onPress={changePop} activeOpacity={0.7}>
          <Image
            source={require('./../../../assets/icons/add.png')}
            style={[styles.img]}
          />
        </TouchableOpacity>
      </View>

      {ifShowpop && <PopWindow />}
      {isShowMore && <MoreFunc />}
      {ifShowHelper && <PopHelper />}
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 30,
    height: 30,
    marginBottom: 3,
    marginRight: 10,
  },
  popoverImg: {
    width: 27,
    height: 27,
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

export default ListView