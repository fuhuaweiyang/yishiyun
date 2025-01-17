import React from "react";
import { StyleSheet, View, TouchableOpacity, Dimensions, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient'; // 引入 LinearGradient
import SpliteLine from "../../../components/SpliteLine";
import PopDetail from "./PopDetail";
import { reversalIsShowMore } from "../../../action/index";

const MoreFunc = ({ isShowMore, reversalIsShowMore }) => {
    return (
        <View style={styles.fullScreen}>
            <TouchableOpacity onPress={reversalIsShowMore} style={styles.fullScreen}>
                <View style={styles.Mask}></View>
            </TouchableOpacity>
            <View style={styles.popWindow}>
                <LinearGradient
                    colors={['#ebf9ff', '#ffffff']} // 渐变颜色从淡蓝到白色
                    style={styles.linearGradient}
                >
                    <Text style={styles.headerText}>摄像机</Text>
                    <View style={styles.HeaderListView}>
                        <Image style={styles.HeaderListViewImg} source={require('./../../../assets/icons/share-light.png')}></Image>
                        <Image style={styles.HeaderListViewImg} source={require('./../../../assets/icons/share-light.png')}></Image>
                    </View>
                </LinearGradient>
                <SpliteLine lineHeight={2} color="#ccc" style={styles.spliteLine} />
                <View style={[{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }]}>
                    <PopDetail title="流量充值" />
                    <PopDetail title="告警信息" />
                    <PopDetail title="录像回放" />
                    <PopDetail title="设备设置" />
                    <PopDetail title="设备分享" />
                    <TouchableOpacity onPress={reversalIsShowMore}>
                        <PopDetail title="删除设备" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const mapStateToProps = (state) => ({
    isShowMore: state.ifShow.isShowMore,
});

const mapDispatchToProps = {
    reversalIsShowMore
};

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const HeaderWidth = screenWidth * 0.85;
const styles = StyleSheet.create({
    Mask: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: screenWidth,
        height: screenHeight,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 2,
    },
    fullScreen: {
        position: 'relative',
        width: screenWidth,
        height: screenHeight,
        zIndex: 1,
    },
    popWindow: {
        width: HeaderWidth,
        height: screenWidth,
        position: 'absolute',
        bottom: screenWidth * 0.7,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        zIndex: 3, // 保持遮罩层上方
        alignSelf: 'center',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        overflow: 'hidden',
    },
    linearGradient: {
        width: HeaderWidth,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        height: 50,
        marginLeft: 18,
        color: '#333',
        textAlignVertical: 'center',
    },
    HeaderListView: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute', // 使 HeaderListView 相对于其父容器定位
        right: 20, // 距离右边框 10px
        alignSelf: 'center',
    },
    HeaderListViewImg: {
        width: 30,
        height: 30,
        alignSelf: 'center',
        margin: 5,
    },
    spliteLine: {
        marginVertical: 0, // 分割线上下留白
        padding: 10,
        width: HeaderWidth * 0.9,
        alignSelf: 'center',
    },

});

export default connect(mapStateToProps, mapDispatchToProps)(MoreFunc);

