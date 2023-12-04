import { Check } from "@mui/icons-material";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CheckBox({ isChecked, setIsChecked }) {

    const renderCheckBox = () => {
        if(isChecked)
            return <Check style={{ color: '#FF7B50' }} />
    }

    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => setIsChecked(!isChecked)}
        >
            <View style={styles.checkbox}>
                {renderCheckBox()}
            </View>
            <Text style={styles.text}>Receber notificações de novas receitas</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginTop: 30
    },
    text: {
        color: '#C9C9C9',
        fontFamily: 'Poppins',
        fontSize: 14
    },
    checkbox: {
        backgroundColor: '#1B1B1B',
        width: 30,
        height: 30,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
});