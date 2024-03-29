import React from 'react'
import { View, StyleSheet, Text } from 'react-native' 

const Card = props => {
    return(
        <View style={{...styles.gameBox, ...props.style}}>{props.children}</View>
    )
};

const styles = StyleSheet.create({
    gameBox: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: "white",
        elevation: 5,
        padding: 10,
        borderRadius: 10,
    },
})

export default Card