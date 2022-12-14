import { View, Text } from 'react-native';
import React from 'react';
import { TextInput, Button } from "react-native-paper";
import { formStyle } from "../../styles";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function RegisterForm(props) {
    const {changeForm} = props;

    const formik = useFormik({
        initialValues: initialValues(),
        onSubmit: (formData) => {
            console.log("Registro de usuario enviado");
            console.log(formData);
        }
    })


    return (
        <View>
            
            <TextInput
                label="Nombre de usuario"
                style={formStyle.input}
                onChangeText={(text) => formik.setFieldValue("username", text)}
                
            />
            <TextInput
                label="Correo electronico"
                style={formStyle.input}
                onChangeText={(text) => formik.setFieldValue("email", text)}
            />
            <TextInput
                label="Contraseña"
                style={formStyle.input}
                onChangeText={(text) => formik.setFieldValue("password", text)}
                secureTextEntry
            />
            <TextInput
                label="Confirmar contraseña"
                style={formStyle.input}
                onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
                secureTextEntry
            />
            <Button
                mode="contained"
                style={formStyle.btnSucces}
                onPress={formik.handleSubmit}

            >
                Registrarse
            </Button>
            <Button
                mode="text"
                style={formStyle.btnText}
                labelStyle={formStyle.btnTextLabel}
                onPress={changeForm}
            >
                Iniciar Sesión
            </Button>

        </View>
    );
}

function initialValues(){
    return{
        username: "",
        email: "",
        password: "",
        repeatPassword: "", 
    };
}