import { AccessTime } from "@mui/icons-material";
import { borderRadius } from "@mui/system";
import { View, StyleSheet, ImageBackground, Image, Text, TouchableOpacity } from "react-native";

export default function MainCard({ data }) {
    //todo: pegar data do card e direcionar para pagina da receita
    return (
        <TouchableOpacity style={styles.card}>
            <Image source={{ uri: data.img }} style={styles.background} />
            <View style={styles.info}>
                <Text style={styles.name}>{data.name}</Text>
                <View style={styles.prep}>
                    <AccessTime style={styles.icon} />
                    <Text style={styles.time}>{data.prepTime} min</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        marginTop: 76,
        width: '100%',
        height: 165,
        borderRadius: 16,
        backgroundColor: '#1B1B1B',
        position: 'relative'
    },
    background: {
        width: '100%',
        height: '100%',
        borderRadius: 16,
        resizeMode: 'cover',
        opacity: 0.5,
        position: 'absolute'
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 12,
        paddingVertical: 4
    },
    name: {
        fontFamily: 'Poppins',
        color: '#fff',
        fontWeight: 600,
        fontSize: 16
    },
    prep: {
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        height: 20
    },
    icon: {
        width: 18,
        height: 18,
        color: '#fff',
    },
    time: {
        color: '#fff',
        fontSize: 12,
        fontFamily: 'Poppins',
    }
});