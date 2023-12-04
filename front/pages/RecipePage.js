import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import Footer from "../components/Footer";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { AccessTime } from "@mui/icons-material";
import { useEffect, useState } from "react";
import FavoriteButton from "../components/FavoriteButton";
import RecipeService from "../services/RecipeService";

export default function RecipePage({ route, navigation }) {
    const id = route.params.id;
    console.log(id);
    const [isFavorite, setIsFavorite] = useState(false);

    const [loading, setLoading] = useState(true);

    const [elements, setElements] = useState({
        image: '',
        ingredients: [],
        name: '',
        preparationTime: 0,
        steps: []
    });
    const getRecipeElements = async () => {
        var elem = await RecipeService.getById(id);
        setElements(elem);
        setLoading(false);
    }

    useEffect(() => {
        getRecipeElements();
    }, [])

    const renderIngredients = () => {
        return elements.ingredients.map((ing, i) => {
            return <Text style={styles.ingredient} key={i}>{ing.ingredient}</Text>
        })
    }

    const renderSteps = () => {
        return elements.steps.map((step, i) => {
            return (
                <View style={styles.step}>
                    <View style={styles.circle}>
                        <Text style={{ fontWeight: 700, fontFamily: 'Poppins', color: '#111', fontSize: 24 }}>{i + 1}</Text>
                    </View>
                    <Text style={styles.recipeText}>{step.step}</Text>
                </View>
            )
        })
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.upside}>
                    <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate('iCookie')}>
                        <ArrowCircleLeftIcon style={styles.icon} />
                    </TouchableOpacity>
                    <Text style={styles.textBold}>{elements.name}</Text>
                </View>
                <View style={styles.imgContainer}>
                    <Image source={{ uri: elements.image }} style={styles.background} />
                </View>
                <View style={styles.info}>
                    <View style={styles.time}>
                        <AccessTime style={styles.timeIcon} />
                        <Text style={styles.timetxt}>{elements.preparationTime} min</Text>
                    </View>
                    <FavoriteButton isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
                </View>
                <View style={styles.ingredientContainer}>
                    <Text style={styles.ingredientTxt}>Ingredientes</Text>
                    <View style={styles.ingredients}>
                        {renderIngredients()}
                    </View>
                </View>
                <View style={styles.ingredientContainer}>
                    <Text style={styles.ingredientTxt}>Modo de Preparo</Text>
                    <View style={styles.steps}>
                        {renderSteps()}
                    </View>
                </View>
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
        alignItems: 'center',
        paddingBottom: 78,
        paddingTop: 46
    },
    upside: {
        backgroundColor: '#1b1b1b',
        width: '100%',
        height: '60px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '2px',
        position: 'fixed',
        top: 0,
        zIndex: 3,
    },
    icon: {
        color: '#FF7B50',
        width: 30,
        height: 30,
        position: 'absolute',
        left: 12
    },
    timeIcon: {
        width: 28,
        height: 28,
        color: '#fff',
    },
    iconBtn: {
        position: 'absolute',
        left: 5,
        width: 50,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBold: {
        fontWeight: '700',
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Poppins'
    },
    imgContainer: {
        marginTop: 24,
        width: '100%',
        height: 190,
    },
    background: {
        width: '100%',
        height: '100%',
        borderRadius: 16,
        resizeMode: 'cover',
        opacity: 1,
        position: 'absolute',
    },
    info: {
        display: 'flex',
        alignItems: 'center',
        width: '80%',
        justifyContent: 'space-between',
        marginTop: 20,
        flexDirection: 'row'
    },
    time: {
        alignItems: 'center'
    },
    timetxt: {
        fontFamily: 'Poppins',
        color: '#fff',
        fontSize: 16
    },
    ingredientContainer: {
        width: '100%',
        marginTop: 40,
        display: 'flex',
        alignItems: 'center'
    },
    ingredientTxt: {
        fontWeight: 600,
        color: '#fff',
        fontFamily: 'Poppins',
        fontSize: 20
    },
    ingredients: {
        display: 'flex',
        width: '90%',
        gap: 8,
        marginTop: 20
    },
    ingredient: {
        fontSize: 16,
        fontWeight: 300,
        color: '#fff',
        fontFamily: 'Poppins'
    },
    steps: {
        display: 'flex',
        width: '100%',
        gap: 24,
        marginTop: 20,
        paddingBottom: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    step: {
        width: '90%',
        minHeight: 80,
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center'
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 99,
        backgroundColor: '#FF7B50',
        alignItems: 'center',
        justifyContent: 'center'
    },
    recipeText: {
        color: '#fff',
        fontWeight: 300,
        fontFamily: 'Poppins',
        fontSize: 14
    }
});