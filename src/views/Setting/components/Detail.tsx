import React from 'react'
import { View, Image, Pressable, Alert, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
const CreatorCenter = (props: any) => {
    const navigation = useNavigation()
    const handleJump = () => {
        Alert.alert('功能开发中...')
        // if (routeName) {
        //     navigation.navigate(routeName as never)
        // } else {
        //     Alert.alert('功能开发中...')
        // }
    }
    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: '#fff',
                },
            ]}>
            <View style={styles.navs}>
                <Pressable
                    style={styles.item}
                    onPress={() => handleJump()}>
                    <View style={styles.textItem}>
                        <Text style={styles.textType}>{props.title}</Text>
                        <Text style={styles.textDetail}>{props.value}</Text>
                    </View>
                    <Image style={styles.icon} source={require('../../../assets/icons/anythink_browser_right_icon.png')} />
                </Pressable>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        padding: 15,
        display: 'flex',
        height: 'auto',
    },
    textItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
    },
    navs: {
        display: 'flex',
        flexDirection: 'col',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItem: 'center',
        justifyContent: 'center',
        height: 30,
    },
    textType: {
        fontSize: 16,
        width: '90%',
        textAlignVertical: 'center',
        color: '#000',
    },
    textDetail: {
        fontSize: 15,
        textAlignVertical: 'center',
        color: '#c0c0c0',
    },
    icon: {
        display: 'flex',
        alignSelf: 'center',
        width: 15,
        height: 10,
        marginLeft: 15,
    }
})
export default CreatorCenter
