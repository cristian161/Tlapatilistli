import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Account(){
    return(
        <View style={styles.container}>
            <Text>Estas en tu cuenta</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});