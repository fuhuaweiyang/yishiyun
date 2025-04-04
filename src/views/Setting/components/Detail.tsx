import React from 'react'
import { View, Image, Pressable, Alert, Text, StyleSheet, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from '../../../hooks/useTheme'
import ContainerText from '../../../components/ContainerText'

const CreatorCenter = (props: any) => {
    const navigation = useNavigation()
    const { theme } = useTheme()
    const handleJump = () => {
        Alert.alert('功能开发ing...')
        // if (routeName) {
        //     navigation.navigate(routeName as never)
        // } else {
        //     Alert.alert('功能开发ing...')
        // }
    }
    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: theme.itemBackgroundColor,
                },
            ]}>
            <View style={styles.navs}>
                <Pressable
                    style={styles.item}
                    onPress={() => handleJump()}>
                    <View>
                        <View style={styles.textItem}>
                            <View style={styles.textView}>
                                <ContainerText style={[styles.textType,{color: theme.TextColor}]}>{props.title}</ContainerText>
                                {props.detail && <ContainerText style={styles.textDetail}>{props.detail}</ContainerText>}
                            </View>
                            <ContainerText style={[styles.textDetail,{color: theme.TextColor}]}>{props.value}</ContainerText>
                        </View>
                    </View>
                    <Image style={styles.icon} source={require('../../../assets/icons/anythink_browser_right_icon.png')} />
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
    textItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
    },
    textView: {
        width: screenWidth * 0.7,
    },
    textDetail: {
        fontSize: 13,
        textAlignVertical: 'center',
        color: '#c0c0c0',
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
    icon: {
        display: 'flex',
        alignSelf: 'center',
        width: 15,
        height: 10,
        marginLeft: 15,
    }
})
export default CreatorCenter
