import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-web';

export default function BigCard({ data }) {
    const navigation = useNavigation();
    
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => navigation.navigate('Receita', { id: data.id })}
        >
            <View style={styles.imgContainer}>
                <Image source={{ uri: data.image }} style={styles.background} />
            </View>
            <Text style={styles.name}>{data.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 4,
        width: '100%'
    },
    imgContainer: {
        width: '100%',
        height: 165
    },
    background: {
        width: '100%',
        height: '100%',
        borderRadius: 16,
        resizeMode: 'cover',
        opacity: 1,
        position: 'absolute',
    },
    name: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Poppins',
        fontWeight: 500,
        maxWidth: '100%',
        overflow: 'hidden',
        flexWrap: 'wrap',
        display: 'flex',
        wordBreak: 'break',
        inlineSize: '40vw'
    },
});