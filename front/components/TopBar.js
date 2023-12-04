import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useContext } from "react";
import { PreferencesContext } from "../context/Preferences";
import { modalSlice } from "../redux/modalSlice";
import { useDispatch } from "react-redux";
const logo = require('../assets/whitelogo.png')

export default function TopBar() {
    const { toggleModal } = modalSlice.actions;
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Image  style={styles.img} source={logo} />
            <TouchableOpacity style={styles.iconBtn} onPress={() => dispatch(toggleModal())}>
                <MoreVertIcon style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90vw',
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '8px',
        position: 'fixed',
        backgroundColor: '#1B1B1B',
        zIndex: 3
    },
    img: {
        width: '140px',
        height: '100%'
    },
    icon: {
        color: '#fff',
        width: 25,
        height: 25
    },
    iconBtn: {
        position: 'fixed',
        right: 10,
        width: 25,
        height: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})