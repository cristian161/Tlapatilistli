import { StyleSheet, View, Text, Image, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import RegisterForm from '../components/Auth/RegisterForm';
import LoginForm from '../components/Auth/LoginForm';
import logo from "../../assets/tlapatilistli.png";
import { layoutStyle } from '../styles';

export default function Auth() {
    const [showLogin, setShowLogin] = useState(true)

    const changeForm = () => setShowLogin(!showLogin);

    return (
        <View style={layoutStyle.container}>
            <Image style={styles.logo} source={logo} />
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                { showLogin ? (
                    <LoginForm changeForm={changeForm}/>
                ) : (
                    <RegisterForm changeForm={changeForm} />
                )}
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: "100%",
        height: 85,
        resizeMode: "contain",
        marginBottom: 25,
    },
});