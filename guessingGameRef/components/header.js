import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText} >{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        backgroundColor: '#f7287b',
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerText: {
        fontSize: 18
    }
})

export default Header