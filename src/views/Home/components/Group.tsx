import React from 'react';
import { View, Image, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../../hooks/useTheme';
import { togglePopup } from '../../../store/uiSlice'; 

const CenteredImage = React.memo(() => {
  const { width, height } = Dimensions.get('window');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { width, height, backgroundColor: theme.backgroundColor }]}>
      <View style={[styles.AddRoundedBox, { backgroundColor: theme.itemBackgroundColor }]}>
        <TouchableOpacity onPress={() => dispatch(togglePopup())}>
          <Image 
            source={require('./../../../assets/icons/add_2png.png')} 
            style={styles.iconAdd} 
          />
        </TouchableOpacity>
        <Text style={[styles.addText, { color: theme.TextColor }]}>添加-分组</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  AddRoundedBox: {
    width: 340,
    height: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 60,
    marginBottom: 20,
  },
  iconAdd: {
    width: 50,
    height: 50,
    marginBottom: 0,
  },
  addText: {
    fontSize: 20,
    height: 60,
    textAlignVertical: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default CenteredImage;

