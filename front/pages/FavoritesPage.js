import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useReducer } from "react";
import { View } from "react-native-animatable";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import { UserContext } from "../context/User";

export default function FavoritesPage() {
    const { token, user } = useSelector((store) => store.auth);
    const navigation = useNavigation();

    useEffect(() => {
        console.log(token);
        console.log(user);
        if(token == null)
            navigation.navigate('Login')
    }, [])


    return (
        <View style={{ width: '100vw', height: '100vh', backgroundColor: '#252525' }}>
            <Footer />
        </View>
    )
}