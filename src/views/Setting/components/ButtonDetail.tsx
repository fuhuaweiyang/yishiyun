import React, { useState } from 'react'
import { View, Image, Pressable, Alert, Text, Dimensions, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
const ButtonDetail = (props: any) => {
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
                </View>
                <Pressable
                    onPress={() => setOn(!on)}>
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
        
    },
    textType: {
        fontSize: 16,
        width: screenWidth * 0.7,
        textAlignVertical: 'center',
        color: '#000',
    },
    textDetail: {
        fontSize: 15,
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