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
                    <ButtonDetail title="硬编码"></ButtonDetail>
                    <Detail title="预览模式" value="实时" />
                    <ButtonDetail title="消息通知横幅" detail="关闭后APP内将不再推送警报消息横幅通知"></ButtonDetail>
                    <ButtonDetail title="屏幕亮度开关" detail="开启后进入设备预览回放界面时屏幕亮度自动调高"></ButtonDetail>
                    <ButtonDetail title="震动效果" detail="开启后点按云台按钮有震动反馈"></ButtonDetail>
                    <Detail title="上传崩溃文件"/>
                    <Detail title="清除缓存" value="1.02G" />
                    <ButtonDetail title="广告个性化" detail="关闭后看到的广告数量不变但相关度会降低，建议不要关闭"></ButtonDetail>
                    <Detail title="注销账号" detail="注销后该账号将会被销毁，不再有效"/>
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
        borderRadius: 10,
        width: screenWidth - 20,
        marginTop: 20,
        paddingBottom: 20,
        paddingTop: 5,
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