import React from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity, Image, Dimensions, Pressable, Modal} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHelper } from "../../../store/uiSlice";
import type {RootState} from '../../../store/store'
import ContainerText from "../../../components/ContainerText";

const PopWindow = () => {
    const dispatch = useDispatch();
    const ifShowHelper = useSelector((state: RootState) => state.ui.ifShowHelper);
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={ifShowHelper}
            onRequestClose={() => {
                dispatch(toggleHelper())
            }}
            style={styles.fullScreen}>
            <TouchableOpacity onPress={()=>dispatch(toggleHelper())} style={styles.fullScreen}>
                <View style={styles.Mask}>
                </View>
            </TouchableOpacity>
            <View style={styles.helperWindow}>
                <ContainerText style={styles.helperHeader}>离线帮助</ContainerText>
                <Pressable onPress={()=>dispatch(toggleHelper())}>
                    <Image source={require('./../../../assets/icons/close.png')} style={styles.closeIcon}></Image>
                </Pressable>
                <View style={styles.helperItem}>
                    <View style={styles.helperIconView}>
                        <Image source={require('./../../../assets/icons/battery_empty2.png')} style={styles.helperIcon}></Image>
                    </View>
                    <View style={styles.helperTextView}>
                        <ContainerText style={styles.helperTextHeader}>1.设备是否已接通电源</ContainerText>
                        <ContainerText style={styles.helperTextContent}>检查设备指示灯，若未亮，请确认电源是否正常</ContainerText>
                    </View>
                </View>
                <View style={styles.helperItem}>
                    <View style={styles.helperIconView}>
                        <Image source={require('./../../../assets/icons/battery_empty2.png')} style={styles.helperIcon}></Image>
                    </View>
                    <View style={styles.helperTextView}>
                        <ContainerText style={styles.helperTextHeader}>2.SIM卡信号是否良好</ContainerText>
                        <ContainerText style={styles.helperTextContent}>若设备安装在信号不佳的区域(如地下室)，请将设备移动到信号好的地方安装</ContainerText>
                    </View>
                </View>
                <View style={styles.helperItem}>
                    <View style={styles.helperIconView}>
                        <Image source={require('./../../../assets/icons/battery_empty2.png')} style={styles.helperIcon}></Image>
                    </View>
                    <View style={styles.helperTextView}>
                        <ContainerText style={styles.helperTextHeader}>3.查看设备指示灯状态</ContainerText>
                        <ContainerText style={styles.helperTextContent}>快闪:将设备断开电源后重新通电，等待设备重启完成后再查看设备{'\n'}
                            慢闪:将设备断开电源，拨插或更换SIM卡后通电</ContainerText>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const screenWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    helperWindow: {
        width: screenWidth,
        height: screenWidth,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        padding: 10,
        zIndex: 1001,
        alignItems: 'center', // 添加这行
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
    },
    helperHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 5,
        marginTop: 10,
    },
    closeIcon: {
        width: 20,
        height: 20,
        position: 'absolute',
        bottom: 10,
        left: screenWidth * 0.5 - 50,
        zIndex: 1002,
    },
    helperItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
    },
    helperIconView: {
        width: 60,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 500,
        backgroundColor: '#d9ffea',
        margin: 10,
        marginRight: 20,
    },
    helperIcon: {
        width: 35,
        height: 35,
    },
    helperTextView: {
        width: screenWidth * 0.72,
    },
    helperTextHeader: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
    },
    helperTextContent: {

    },
});

export default PopWindow;
