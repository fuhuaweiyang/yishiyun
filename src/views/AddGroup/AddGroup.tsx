import Detail from './components/Detail'
import { ScrollView, Text, View, Image, Pressable, TouchableOpacity, StyleSheet, Dimensions, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import ContainerText from '../../components/ContainerText'

const AddGroup = () => {
    const navigation = useNavigation()
    const handleClose = () => {
        navigation.navigate('Index');
    }
    const loginOut = () => {
        navigation.replace('Login')
    }
    return (
        <View >
            <Pressable onPress={handleClose} style={styles.close}>
                <Image style={styles.closeImg}
                    source={require('../../assets/login/close-light.png')}
                />
            </Pressable>
            <ScrollView
                contentContainerStyle={styles.scrollViewContent}
                showsVerticalScrollIndicator={false}>
                <ContainerText style={styles.headerText}>添加-分组</ContainerText>
                <View style={{ marginTop: 20 }}>
                    <ContainerText style={[styles.titleText, { marginTop: 0 }]}>分组名称</ContainerText>
                    <Detail title="我的分组" />
                    <ContainerText style={styles.titleText}>已选设备与通道</ContainerText>
                    <Detail title="卧室的摄像机" />
                    <Detail title="我书房的摄像机" />
                    <ContainerText style={styles.titleText}>不在此分组中的设备与通道</ContainerText>
                    <Detail title="账号" />
                    <Detail title="邮箱" />
                </View>
                <TouchableOpacity onPress={loginOut}>
                    <ContainerText style={[styles.buttonText]}>退出登录</ContainerText>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
};
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    scrollViewContent: {
        paddingBottom: 20, // 防止内容贴边
        display: 'flex',
        alignItems: 'center',
    },
    close: {
        position: 'absolute',
        marginTop: 15,
        marginLeft: 10,
        zIndex: 100,
    },
    closeImg: {
        width: 25,
        height: 25,
    },
    headerText: {
        fontSize: 20,
        fontWeight: '700',
        color: '#111',
        marginTop: 15,
    },
    titleText: {
        fontSize: 16,
        color: '#333',
        margin: 20,
    },
    contentText: {
        fontSize: 14,
        color: '#333',
    },
    button: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        fontSize: 16,
        color: '#f11212',
        textAlign: 'center',
        height: 50,
        width: 200,
        borderRadius: 20,
        backgroundColor: '#fff',
        marginTop: 40,
        padding: 10,
    }
})
export default AddGroup;