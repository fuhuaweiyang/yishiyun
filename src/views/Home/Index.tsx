import React from 'react'
import { Image, Pressable,StyleSheet } from 'react-native'
import PageView from '../../components/PageView'
import ContainerView from '../../components/ContainerView'
import ListView from './components/ListView'
import { useNavigation } from '@react-navigation/native'
const Home = () => {
  const navigation = useNavigation()
  const handleSearch = () => {
    navigation.navigate('Search' as never)
  }
  return (
    <PageView style={styles.container}>

      <ListView />
    </PageView>
  )
}
const styles = StyleSheet.create({
  container: {
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchView: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginRight: 10,
  },
})
export default Home
