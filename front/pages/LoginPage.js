import { Link } from "@react-navigation/native";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from "react-native-web";
import Footer from "../components/Footer";
import { authSlice } from "../redux/authSlice";
import { useState } from "react";
import UserService from "../services/UserService";
import { useDispatch } from "react-redux";

const logo = require('../assets/stencilLogo.png')

export default function LoginPage({ navigation }) {
    const { setAuth } = authSlice.actions;
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onHandleLogin = async () => {
        const user = {
            email: email,
            password: password
        }
        
        const res = await UserService.login(user);
        if(res != null){
            dispatch(setAuth(res));
            navigation.navigate('iCookie');
        }
        else
            setError(true);
    }

    const [error, setError] = useState(false);
    const renderError = () => {
        if(error)
            return (
                <Text style={{ color: '#B22222', fontSize: 16, marginTop: 8, fontWeight: 600 }}>E-mail ou senha incorretos.</Text>
            )
    }

    return (
        <>
            <View style={styles.container}>
                <Image style={styles.img} source={logo} />
                <View style={styles.inputs}>
                    <TextInput style={styles.input} onChange={(e) => { setError(false); setEmail(e.target.value) }} placeholderTextColor='#DFDFDF' placeholder='E-mail'></TextInput>
                    <TextInput style={styles.input} onChange={(e) => { setError(false); setPassword(e.target.value) }} placeholderTextColor='#DFDFDF' placeholder='Senha' secureTextEntry></TextInput>
                </View>
                {renderError()} 
                <TouchableOpacity style={styles.btn} onPress={() => onHandleLogin()}>
                    <Text style={{ color: '#000', fontSize: 24, fontFamily:'Poppins', fontWeight: 600 }}>Entrar</Text>
                </TouchableOpacity>
                <Text style={{ color: '#808080', fontSize: 16, fontFamily: 'Poppins', marginTop: 20 }}>ou</Text>
                <TouchableOpacity 
                    style={styles.register}
                    onPress={() => navigation.navigate('Cadastro')}
                >
                    <Text style={styles.registerTxt}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
            <Footer />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1b1b1b',
        width: '100vw',
        minHeight: '100vh',
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '600',
        marginTop: 20
    },
    cards: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        flexWrap: 'wrap',
        rowGap: 8
    },
    img: {
        marginTop: 140,
        width: 280,
        height: 90
    },
    inputs: {
        gap: 14,
        width: '100%',
        marginTop: 80
    },
    input: {
        backgroundColor: '#252525',
        width: '100%',
        height: 70,
        paddingHorizontal: 16,
        fontSize: 18,
        fontWeight: 400,
        fontFamily: 'Poppins',
        color: '#fff',
        borderRadius: 12
    },
    btn: {
        width: '100%',
        backgroundColor: '#FF7B50',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        borderRadius: 12,
        marginTop: 80
    },
    register: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    registerTxt: {
        color: '#DCDCDC',
        textDecorationLine: 'underline',
        fontFamily: 'Poppins',
        fontSize: 18
    }
});