import React, { useState } from 'react'
import { View, Image, Pressable, Alert, Text, Dimensions, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

type ButtonDetailProps = {
    title: string;
    detail: string;
    changeFun: () => void; 
};

const ButtonDetail = (props: ButtonDetailProps) => {
    const navigation = useNavigation()
    const [on, setOn] = useState(false)

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: '#fff',
                },
            ]}>
            <View style={styles.navs}>
                <View style={styles.textView}>
                    <Text style={styles.textType}>{props.title}</Text>
                    <Text style={styles.textDetail}>{props.detail}</Text>
                </View>
                <Pressable
                    onPress={() => {
                        setOn(!on);       // 切换开关状态
                        props.changeFun(); // 调用父组件传递的 toggleTheme 方法
                      }}>
                    <View style={on ? styles.roundViewOn : styles.roundViewOff}>
                        {!on && <View style={styles.round}></View>}
                        {on && <View style={[styles.round, { marginLeft: 29 }]}></View>}
                    </View>
                </Pressable>
            </View>
        </View>
    )
}
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        padding: 15,
        display: 'flex',
        height: 'auto',
    },
    navs: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textView: {
        width: screenWidth * 0.65,
        marginRight: screenWidth * 0.05
    },
    textType: {
        fontSize: 16,
        width: screenWidth * 0.7,
        textAlignVertical: 'center',
        color: '#000',
    },
    textDetail: {
        fontSize: 13,
        textAlignVertical: 'center',
        color: '#c0c0c0',
    },
    round: {
        backgroundColor: '#fff',
        borderRadius: 30,
        width: 30,
        height: 30,
        marginLeft: 1,
    },
    roundViewOn: {
        borderRadius: 40,
        backgroundColor: '#67bfe5',
        height: 32,
        width: 60,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    roundViewOff: {
        borderRadius: 40,
        backgroundColor: '#b5b5b5',
        height: 32,
        width: 60,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
})
export default ButtonDetail