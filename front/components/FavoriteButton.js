import { Favorite } from "@mui/icons-material";
import { View, StyleSheet, ImageBackground, Image, Text, TouchableOpacity } from "react-native";

export default function FavoriteButton({ id, isFavorite, setIsFavorite }) {
    const renderButton = () => {
        if (isFavorite)
            return (
                <>
                    <Favorite style={{ width: 28, height: 28, color: '#FF7B50' }} />
                    <Text style={{ fontFamily: 'Poppins', fontSize: 18, color: '#FF7B50', fontWeight: 600 }}>Favorita</Text>
                </>
            )

        return (
            <>
                <Favorite style={{ width: 28, height: 28, color: '#fff' }} />
                <Text style={{ fontFamily: 'Poppins', fontSize: 18, color: '#fff', fontWeight: 600 }}>Favoritar</Text>
            </>
        )
    }

    const onHandleFavorite = () => {
        setIsFavorite(!isFavorite)
        // TODO req to make changes in database with id
    }

    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={onHandleFavorite}    
        >
            {renderButton()}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        backgroundColor: '#252525',
        height: '100%',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
})