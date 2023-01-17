import React from 'react';
import {useState, useEffect} from "react";
import {style} from '../styles/global'
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const Chuck = () => {
    const [data, setData] = useState([]);

    const fetchJoke = async () => {
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            const jsonData = await response.json();
            setData(jsonData.value);
        } catch (err) {
            console.error(err);
        }
    }

    //affichage d'une fact au lancement
    useEffect(() => {
        fetchJoke();
    }, []);
    //affichage d'une fact lors de l'appui sur le bouton
    const actionButton = () => {
        fetchJoke();
    }

    return (
        <>
            <View>
                <TouchableOpacity onPress={actionButton}>
                    <Text style={style.text}>Click me</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text>{data}</Text>
            </View>
        </>
    );
};

export default Chuck;
