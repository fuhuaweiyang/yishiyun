import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, Alert, Modal } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import type { RootState } from '../../../store'; // 确保路径正确
import { togglePopup } from '../../../store/uiSlice'; // 导入新的action
import ContainerText from '../../../components/ContainerText';
import { useTheme } from '../../../hooks/useTheme';

const PopWindow = React.memo(() => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const navigation = useNavigation();

    // 使用类型化的useSelector获取状态
    const ifShowpop = useSelector((state: RootState) => state.ui.ifShowpop);

    const handleJump = (routeName?: string) => {
        if (routeName) {
            navigation.navigate(routeName as never);
        } else {
            Alert.alert('功能开发ing...');
        }
    };

    const handleClose = () => {
        dispatch(togglePopup());
    };
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={ifShowpop}
            onRequestClose={handleClose}
            style={styles.fullScreen}>
            <TouchableOpacity onPress={handleClose} style={styles.fullScreen}>
                <View style={styles.Mask}>
                </View>
            </TouchableOpacity>
            <View style={[styles.AddRoundedBox,{backgroundColor:theme.itemBackgroundColor}]}>
                <ContainerText style={styles.headerText}>请开启定位权限!</ContainerText>
                <View style={styles.popWindow}>
                    <Image source={require('./../../../assets/icons/icon_add_search_device.gif')} style={styles.img}></Image>
                    <ContainerText style={styles.contentText}>需要开启定位权限，用于获取附近的Wi-Fi信息完成设备联网</ContainerText>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity onPress={() => {
                        handleClose();
                        handleJump('AddDevice');
                    }}>
                        <ContainerText style={styles.buttonText}>继续添加</ContainerText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleClose}>
                        <ContainerText style={[styles.buttonText, { backgroundColor: '#4c9fff', color: '#fff' }]}>确定</ContainerText>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
});


const screenWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    AddRoundedBox: {
        width: screenWidth,
        height: screenWidth,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        padding: 20,
        zIndex: 1001,
    },
    Mask: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 10,
    },
    fullScreen: {
        position: 'relative',
        width: '100%',
        height: '100%',
        zIndex: 1000,
    },
    img: {
        width: 100,
        height: 100,
        marginBottom: 30,
    },
    popWindow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    buttonView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10,
    },
    headerText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#2d2d2d',
        marginBottom: 30,
    },
    contentText: {
        fontSize: 16,
        color: '#2d2d2d',
        width: screenWidth * 0.8,
        textAlign: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: '#2d2d2d',
        textAlign: 'center',
        textVerticalAlign: 'center',
        height: 50,
        width: 150,
        borderRadius: 20,
        backgroundColor: '#f5f5f5',
        margin: 10,
        padding: 10,
    }
});

export default PopWindow;
