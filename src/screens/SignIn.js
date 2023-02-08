import React from 'react';
import {useState, useEffect} from "react";
import {style} from '../styles/global'
import {
    Button,
    TextInput,
    View,
} from 'react-native';
import {login} from "../services/students";

const SignIn = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const onClickHandler = async () => {
        const res = await login({
            email,
            password,
        });
        //http://10.7.18.159:4500/api/login
    }

    return(
        <>
            <View>
                <TextInput
                    placeholder={"E-mail"}
                    onChangeText={setEmail}
                    value={email}
                />
                <TextInput
                    placeholder={"Mot de passe"}
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    value={password}
                />
                <Button title="login" onPress={onClickHandler}/>
            </View>
        </>
    )
};

export default SignIn;
