import React from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { reversalHelper } from "../../../action/index";

const PopWindow = ({ reversalHelper }) => {
    return (
        <View style={styles.fullScreen}>
            <TouchableOpacity onPress={reversalHelper} style={styles.fullScreen}>
                <View style={styles.Mask}>
                </View>
            </TouchableOpacity>
            <View style={styles.AddRoundedBox}>
                
            </View>
        </View>
    );
};

const mapStateToProps = (state) => ({
    ifShowpop: state.ifShow.ifShowpop,
});

const mapDispatchToProps = {
    reversalHelper
};

const screenWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    AddRoundedBox: {
        width: screenWidth,
        height: screenWidth,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        padding: 20,
        zIndex: 1001,
    },
    Mask: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 10,
    },
    fullScreen: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    img: {
        width: 100,
        height: 100,
        marginBottom: 30,
    },
    popWindow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    buttonView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10,
    },
    headerText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#2d2d2d',
        marginBottom: 30,
    },
    contentText: {
        fontSize: 16,
        color: '#2d2d2d',
        width: screenWidth * 0.8,
        textAlign: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: '#2d2d2d',
        textAlign: 'center',
        textVerticalAlign: 'center',
        height: 50,
        width: 150,
        borderRadius: 20,
        backgroundColor: '#f5f5f5',
        margin: 10,
        padding: 10,
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PopWindow);
