import React from 'react';
import { View, Image, StyleSheet, Dimensions, Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { reversal } from "../../../action/index";
import { useNavigation } from '@react-navigation/native'
import { useTheme } from '../../../hooks/useTheme';

const CenteredImage = ({ reversal }) => {
  const { width, height } = Dimensions.get('window');
  const navigation = useNavigation()

  const { theme } = useTheme();
  const goToAddGroup = () => {
    navigation.replace('AddGroup')
  };
  return (
    <View style={[styles.container, { width, height, backgroundColor: theme.backgroundColor }]}>
      <View style={[styles.AddRoundedBox,{backgroundColor:theme.itemBackgroundColor}]}>
        <TouchableOpacity onPress={goToAddGroup}>
          <Image source={require('./../../../assets/icons/add_2png.png')} style={styles.iconAdd} />
        </TouchableOpacity>
        <Text style={styles.addText}>添加-分组</Text>
      </View>
    </View>
  );
};
const mapStateToProps = (state) => ({
  ifShowpop: state.ifShow.ifShowpop,
});

const mapDispatchToProps = {
  reversal
};

const styles = StyleSheet.create({
  image: {
    width: 340,
    height: 200,
    borderTopLeftRadius: 20, // 左上角圆角
    borderTopRightRadius: 20, // 右上角圆角
    borderBottomLeftRadius: 0, // 左下角无圆角
    borderBottomRightRadius: 0, // 右下角无圆角
  },
  iconAdd: {
    width: 50,
    height: 50,
    marginBottom: 0,
  },
  text: {
    color: '#505859',
    fontSize: 20,
    height: 60,
    backgroundColor: '#edf4f3',
    textAlignVertical: 'center',
    borderBottomLeftRadius: 20, // 左下角无圆角
    borderBottomRightRadius: 20,
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
    width: 340, // 根据需要调整图片的宽度
    height: 200,
    backgroundColor: '#ffffff',
    borderRadius: 20, // 设置圆角半径
    marginTop: 30,
    marginBottom: 20,
  },
  AddRoundedBox: {
    width: 340, // 根据需要调整图片的宽度
    height: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 20, // 设置圆角半径
    marginTop: 60,
    marginBottom: 20,
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(CenteredImage);


