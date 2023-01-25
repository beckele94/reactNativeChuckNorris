import React from 'react';
import {useState, useEffect} from "react";
import {style} from '../styles/global'
import {
    Button,
    TextInput,
    View,
} from 'react-native';
import {div} from "react-native/Libraries/Animated/AnimatedWeb";

const SignIn = () => {
    const [login, setLogin] = useState({
        email: "",
        password: "",
    })

    const onChangeHandler = (value, name) => {
        setLogin({...login, [name]: value})
    }
    const onClickHandler = () => {
        //todo: verifier le lien
        const res = fetch("http://localhost:4500/api/login", {
            method: "POST",
            body: JSON.stringify(login),
            credentials: "include",
        })
    }

    return(
        <>
            <View>
                <TextInput
                    placeholder={"email"}
                    onChangeText={(value) => onChangeHandler(value, "email")}
                    value={login.email}
                />
                <Button title="login" onPress={onClickHandler}/>
            </View>
        </>
    )
};

export default SignIn;
