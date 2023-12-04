import { Favorite, Home, ManageSearch } from '@mui/icons-material';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function Footer() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate('iCookie')}
            >
                <Home style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate('Pesquisar')}
            >
                <ManageSearch style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate('Favoritos')}
                >
                <Favorite style={{width: 30, height: 30, color:'#FF7B50'}}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#252525',
        width: '100vw',
        height: 78,
        position: 'fixed',
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 24,
        zIndex: 3
    },
    icon: {
        width: 36,
        height: 36,
        color: '#FF7B50'
    },
    btn: {
        width: 36,
        height: 36,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});