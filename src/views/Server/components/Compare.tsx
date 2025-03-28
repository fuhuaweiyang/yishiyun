import React from "react";
import { Image, Alert, Pressable, View, Text, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from "../../../hooks/useTheme";

const Compare = () => {
    const { theme, isDarkMode } = useTheme();
    return (
        <View>
            <View style={styles.headerView}>
                <Text style={[styles.headerText,{color:theme.TextColor}]}>云存储</Text>
                <Image source={require('../../../assets/icons/VS.png')} style={styles.img}></Image>
                <Text style={[styles.headerText,{color:theme.TextColor}]}>卡存储</Text>
            </View>
            <View style={styles.CardAndCloudView}>
                <View>
                    <LinearGradient
                        colors={isDarkMode ? ['#574f44', '#332111']:['#f7e2c2', '#efaa6d']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={[styles.linearGradient]}
                    >
                        <Text style={[styles.cloudHeaderText]}>
                            云存储
                        </Text>
                    </LinearGradient>
                    <View style={[styles.storageBoxCloud,{backgroundColor:isDarkMode?"#46392e":"d3d3d3"}]}>
                        <Text style={styles.cloudContentText}>24h实时监测云端守护</Text>
                        <Text style={styles.cloudContentText}>云端存储随时回看</Text>
                        <Text style={styles.cloudContentText}>无限空间容量</Text>
                        <Text style={styles.cloudContentText}>高倍速播放</Text>
                        <Text style={styles.cloudContentText}>屏蔽第三方广告</Text>
                    </View>
                </View>
                <View style={styles.storageBoxCard}>
                    <View style={[styles.storageBoxCardHeader,{ backgroundColor: isDarkMode ? theme.itemBackgroundColor : '#fef8ef', borderTopRightRadius: 15}]}>
                        <Text style={[styles.cardText,{marginBottom:10,color:theme.TextColor}]}>卡存储</Text>
                    </View>
                    <View style={[styles.storageBoxCardHeader,{ backgroundColor: isDarkMode?'#303030':'#f0f1f4'}]}>
                        <Text style={[styles.cardText,{color:theme.TextColor}]}>仅支持本地录像</Text>
                        <Text style={[styles.cardText,{color:theme.TextColor}]}>掉线/卡损坏/无法回看</Text>
                        <Text style={[styles.cardText,{color:theme.TextColor}]}>有容量限制</Text>
                        <Text style={[styles.cardText,{color:theme.TextColor}]}>1倍速播放</Text>
                        <Text style={[styles.cardText,{color:theme.TextColor}]}>无屏蔽</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    headerText: {
        fontSize: 20
    },
    CardAndCloudView: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    headerView: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    cloudHeaderText: {
        color: '#fff',
        fontSize: 20,
    },
    cloudContentText: {
        color: '#efaa6d',
        marginTop: 10,
        marginTButtom: 10
    },
    cardText: {
        marginTop: 10,
        marginTButtom: 10,
        textAlign: 'center'
    },
    storageBoxCloud: {
        display: 'flex',
        alignItems: 'center',
        width: screenWidth * 0.45,
        padding: 10,
        marginBottom: 10,
    },
    storageBoxCard: {
        display: 'flex',
        alignItems: 'center',
        width: screenWidth * 0.45,
        padding: 10,
        borderTopRightRadius: 15,
    },
    storageBoxCardHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth * 0.45,
        padding: 10,
        backgroundColor: '#d3d3d3',
    },
    img: {
        width: screenWidth * 0.20,
        height: screenWidth * 0.20,
        margin: 10
    },
    linearGradient: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: screenWidth * 0.15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
})
export default Compare