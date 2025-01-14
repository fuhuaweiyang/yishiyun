import Detail from './components/Detail'
import { ScrollView, Text, View, Image, Pressable, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import ButtonDetail from './components/ButtonDetail';

const PersonDetail = () => {
    const navigation = useNavigation()
    const handleClose = () => {
        navigation.replace('Index')
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
                <Text style={styles.headerText}>设置</Text>
                <View style={[styles.settingView]}>
                    <ButtonDetail title="硬编码" value="很硬很硬"></ButtonDetail>
                    <Detail title="预览模式" value="实时" />
                    <ButtonDetail title="消息通知横幅" value="很硬很硬"></ButtonDetail>
                    <ButtonDetail title="屏幕亮度开关" value="很硬很硬"></ButtonDetail>
                    <ButtonDetail title="震动效果" value="很硬很硬"></ButtonDetail>
                    <Detail title="上传崩溃文件" value="1.02G" />
                    <Detail title="清除缓存" value="1.02G" />
                    <ButtonDetail title="广告个性化" value="很硬很硬"></ButtonDetail>
                    <Detail title="注销账号" value="1.02G" />
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
        paddingBottom: 20, // 防止内容贴边111
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
    settingView: {
        backgroundColor: '#fff',
        borderRadius: 30,
        width: screenWidth - 20,
        marginTop: 20,
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