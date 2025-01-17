import React, { useState, memo } from 'react'
import useTheme from '../../../hooks/useTheme'
import { View, Text, Image, Alert, TouchableOpacity, StyleSheet } from 'react-native'
import Device from './Device'
import Group from './Group'
import MoreFunc from './MoreFunc'
import PopWindow from './PopWindow'
import PopHelper from './PopHelper'
import { connect } from 'react-redux'
import {  reversalIsShowMore, reversal, reversalHelper } from "../../../action/index";


const mapStateToProps = (state) => ({
  ifShowpop: state.ifShow.ifShowpop,
  isShowMore: state.ifShow.isShowMore,
  ifShowHelper: state.ifShow.ifShowHelper,
});

const mapDispatchToProps = {
  reversal
};
const ListView = ({ ifShowpop, reversal, isShowMore, ifShowHelper }) => {
  const { backgroundColor, color } = useTheme()
  const [activeTab, setActiveTab] = useState('system')

  const handleTabSwitch = (tab) => {
    setActiveTab(tab)
  }

  const changePop = () => {
    reversal()
  }

  return (
    <View style={{ flex: 1, backgroundColor: backgroundColor }}>
      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => handleTabSwitch('system')} style={styles.tabItem}>
          <Text style={[styles.tabLabel, activeTab === 'system' && styles.activeTab]}>
            设备
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabSwitch('warn')} style={styles.tabItem}>
          <Text style={[styles.tabLabel, activeTab === 'warn' && styles.activeTab]}>
            分组
          </Text>
        </TouchableOpacity>
      </View>
      {activeTab === 'system' && <Device />}
      {activeTab === 'warn' && <Group />}

      <View style={styles.headerRight}>
        {/* <Image source={require('./../../../assets/icons/more.png')} style={styles.img} /> */}
        <TouchableOpacity onPress={() => changePop()} >
          <Image source={require('./../../../assets/icons/add.png')} style={styles.img} />
        </TouchableOpacity>
      </View>
      {ifShowpop === true && <PopWindow></PopWindow>}
      {isShowMore && <MoreFunc/>}
      {ifShowHelper && <PopHelper/>}
    </View >
  )
}

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

export default connect(mapStateToProps, mapDispatchToProps)(ListView)
