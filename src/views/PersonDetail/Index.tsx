import React from 'react'; 
import Detail from './components/Detail'
import { ScrollView, Text, View, Image, Pressable, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import ContainerText from '../../components/ContainerText'

const PersonDetail = () => {
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
                <View style={{ marginTop: 40 }}>
                    <ContainerText style={[styles.titleText, { marginTop: 0 }]}>基本资料</ContainerText>
                    <Detail title="账号" />
                    <Detail title="邮箱" />
                    <Detail title="手机" />
                    <Detail title="微信" />
                    <ContainerText style={styles.titleText}>基本资料</ContainerText>
                    <Detail title="账号" />
                    <Detail title="邮箱" />
                    <ContainerText style={styles.titleText}>基本资料</ContainerText>
                    <Detail title="账号" />
                    <Detail title="邮箱" />
                </View>
                <TouchableOpacity onPress={loginOut}>
                    <Text style={[styles.buttonText]}>退出登录</Text>
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
        textVerticalAlign: 'center',
        height: 50,
        width: 200,
        borderRadius: 20,
        backgroundColor: '#fff',
        marginTop: 40,
        padding: 10,
    }
})
export default PersonDetail;