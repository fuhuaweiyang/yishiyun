import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import PageView from '../../components/PageView'
import UserInfo from './components/UserInfo'
import FastNav from './components/FastNav'
import CreatorCenter from './components/CreatorCenter'
import More from './components/More'
import useTheme from '../../hooks/useTheme'

function My(): React.JSX.Element {

  return (
    <PageView
      style={{
        backgroundColor:'#f3f4f6',
        flex: 1,
      }}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}>
        <UserInfo />
        <FastNav/>
        <CreatorCenter />
        <More/>
      </ScrollView>
    </PageView>
  )
}

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingBottom: 20, // 防止内容贴边
  },
})

export default My

