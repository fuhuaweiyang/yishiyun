import React from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity, Image, Dimensions, Alert, Modal } from 'react-native';
import { connect } from 'react-redux';
import { reversal } from "../../../action/index";
import { useNavigation } from '@react-navigation/native';

const PopWindow = ({ ifShowpop, reversal }) => {
    const navigation = useNavigation()
    const handleJump = ({ routeName }: any) => {
        if (routeName) {
            navigation.navigate(routeName as never)
        } else {
            Alert.alert('功能开发ing...')
        }
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={ifShowpop}
            onRequestClose={() => {
                reversal();
            }}
            style={styles.fullScreen}>
            <TouchableOpacity onPress={reversal} style={styles.fullScreen}>
                <View style={styles.Mask}>
                </View>
            </TouchableOpacity>
            <View style={styles.AddRoundedBox}>
                <Text style={styles.headerText}>请开启定位权限!</Text>
                <View style={styles.popWindow}>
                    <Image source={require('./../../../assets/icons/icon_add_search_device.gif')} style={styles.img}></Image>
                    <Text style={styles.contentText}>需要开启定位权限，用于获取附近的Wi-Fi信息完成设备联网</Text>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity onPress={()=>{
                        reversal()
                        handleJump({ routeName: 'AddDevice' })
                    }}>
                        <Text style={styles.buttonText}>继续添加</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={reversal}>
                        <Text style={[styles.buttonText, { backgroundColor: '#4c9fff', color: '#fff' }]}>确定</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const mapStateToProps = (state) => ({
    ifShowpop: state.ifShow.ifShowpop,
});

const mapDispatchToProps = {
    reversal
};


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

export default connect(mapStateToProps, mapDispatchToProps)(PopWindow);
