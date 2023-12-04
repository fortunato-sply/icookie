import { AddCircle, AddCircleOutline, ArrowCircleLeft } from "@mui/icons-material";
import { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image, TextInput } from "react-native"
import * as ImagePicker from 'expo-image-picker';
import RecipeService from "../services/RecipeService";
import { useSelector } from "react-redux";

export default function NewRecipePage({ navigation }) {
    const { token, user } = useSelector((store) => store.auth);
    const [image, setImage] = useState(null);
    const [name, setName] = useState('');
    const [prepTime, setPrepTime] = useState(0);

    const renderImg = () => {
        if(image == null)
            return (
                <>
                    <AddCircle style={{ color: '#65D93D', width: 30, height: 30 }} />
                    <Text style={{ fontSize: 16, fontWeight: 600, fontFamily: 'Poppins', color: '#777' }} >Adicionar imagem</Text>
                </>
            )
        else
            return (
                <Image source={{ uri: image }} style={{ width: '100%', height: 200, resizeMode: 'cover', borderRadius: 12 }}  />
            )
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [16, 9],
            quality: 1,
        })

        if(!result.canceled)
            setImage(result.assets[0].uri);
    }

    const [ingredients, setIngredients] = useState([{
        ingredient: null
    }])

    const renderIngredients = () => {
        return ingredients.map((ing, i) => {
            return (
                <TextInput 
                    placeholderTextColor={'#bbb'} 
                    placeholder='1/2 xícara de leite' 
                    style={styles.input} 
                    value={ing.ingredient}
                    key={i}
                    onChange={(e) => ing.ingredient = e.target.value}
                />
            )
        })
    }

    const onHandleAddIngredient = () => {
        const newIngredients = [...ingredients, { ingredient: null }]
        setIngredients(newIngredients);
    }

    const [steps, setSteps] = useState([{
        step: null
    }])

    const renderSteps = () => {
        return steps.map((s, i) => {
            return (
                <TextInput 
                    placeholderTextColor={'#bbb'} 
                    placeholder='Em uma panela...' 
                    style={styles.input} 
                    value={s.step}
                    key={i}
                    onChange={(e) => s.step = e.target.value}
                />
            )
        })
    }

    const onHandleAddStep = () => {
        const newSteps = [...steps, { step: null }]
        setSteps(newSteps);
    }

    const onHandleNewRecipe = async () => {
        var recipe = {
            id: user.id,
            image: image,
            name: name,
            preparationTime: prepTime,
            ingredients: ingredients,
            steps: steps
        };

        const res = await RecipeService.newRecipe(recipe, token);
        if(res == 200)
            navigation.navigate('iCookie');

    }

    return (
        <View style={styles.container}>
            <View style={styles.upside}>
                <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate('iCookie')}>
                    <ArrowCircleLeft style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.textBold}>Nova receita</Text>
            </View>
            <View style={styles.pickerContainer}>
                <TouchableOpacity style={styles.picker} onPress={pickImage}>
                    {renderImg()}
                </TouchableOpacity>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
                    <Text style={styles.textBold}>Informações</Text>
                    <TextInput placeholderTextColor={'#bbb'} onChange={(e) => setName(e.target.value)} placeholder='Nome da receita' style={styles.input} />
                    <TextInput placeholderTextColor={'#bbb'} onChange={(e) => setPrepTime(e.target.value)} placeholder='Tempo de preparo em minutos' style={styles.input} />
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center', width: '100%' }}>
                    <Text style={styles.textBold}>Ingredientes</Text>
                    <View style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center', width: '100%' }}>
                        {renderIngredients()}
                        <TouchableOpacity 
                            style={styles.addBtn}
                            onPress={onHandleAddIngredient}
                        >
                            <AddCircle style={{ color: '#fff', width: 28, height: 28 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center', width: '100%' }}>
                    <Text style={styles.textBold}>Fases de Preparo</Text>
                    <View style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center', width: '100%' }}>
                        {renderSteps()}
                        <TouchableOpacity 
                            style={styles.addBtn}
                            onPress={onHandleAddStep}
                        >
                            <AddCircle style={{ color: '#fff', width: 28, height: 28 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ width: '20%', height: 2, backgroundColor: '#555', marginTop: 24 }}></View>
            <TouchableOpacity style={styles.createBtn} onPress={onHandleNewRecipe}>
                <Text style={{ fontSize: 24, fontWeight: 600, color: '#111', fontFamily: 'Poppins' }}>Criar</Text>
            </TouchableOpacity>
        </View>
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
    pickerContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 36,
        marginTop: 30,
    },
    picker: {
        backgroundColor: '#252525',
        width: '100%',
        height: 200,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4
    },
    input: {
        backgroundColor: '#252525',
        width: '100%',
        height: 70,
        paddingHorizontal: 16,
        fontSize: 18,
        fontWeight: 300,
        fontFamily: 'Poppins',
        color: '#eee',
        borderRadius: 12
    },
    addBtn: {
        width: '100%',
        backgroundColor: '#65D93D',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderRadius: 12
    },
    createBtn: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#FF7B50',
        padding: 16,
        borderRadius: 12,
        marginTop: 24
    }
});