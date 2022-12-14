import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar } from "react-native-paper";
import colors from "../../styles/colors";

export default function Search() {
  return (
    <View style={styles.container}>
        <Searchbar 
            placeholder="Busca tu producto..." 
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        zIndex: 1,
    },
});