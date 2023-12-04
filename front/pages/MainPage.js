import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import BigCard from '../components/BigCard';
import Card from '../components/Card';
import Footer from "../components/Footer";
import MainCard from "../components/MainCard";
import CustomizedModal from "../components/CustomizedModal";
import TopBar from "../components/TopBar";
import { PreferencesContext } from '../context/Preferences';
import Modal from 'react-native-modal';
import { useSelector } from 'react-redux';
import { modalSlice } from '../redux/modalSlice';
import { useState } from 'react';
import { useEffect } from 'react';
import RecipeService from '../services/RecipeService';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';

export default function MainPage() {
    const { state } = useSelector((store) => store.preferencesModal);
    const mainCardData = {
        img: "https://static.itdg.com.br/images/360-240/16dea8c3e7084abc502ee2793a583a5f/332854-original.jpg",
        name: 'Strogonoff de Frango',
        prepTime: 40
    }

    const [loading, setLoading] = useState(true);
    const renderLoad = () => {
        if(loading)
            return (
                <Text style={{ fontSize: 36, color: '#fff', fontFamily: 'Poppins', fontWeight: 600 }}>Carregando...</Text>
            )
    }

    const [cards, setCards] = useState([]);
    const getCards = async () => {
        setLoading(true);
        const newCards = await RecipeService.getAll();
        setCards(newCards);
        setLoading(false);
    }

    useFocusEffect(
        React.useCallback(() => {
            getCards();
        }, [])
    )

    // const cards = [
    //     {
    //         id: 1,
    //         img: "https://www.divinho.com.br/blog/wp-content/uploads/2022/05/Torta-Banoffee.jpg",
    //         name: 'Banoffee'
    //     },
    //     {
    //         id: 2,
    //         img: "https://www.comidaereceitas.com.br/wp-content/uploads/2021/02/costelinhaa.jpg",
    //         name: 'Costelinha Suína'
    //     },
    //     {
    //         id: 3,
    //         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8CdWiRQLsxIUjAZiSSb3QJYoRK_U6fQRnSg&usqp=CAU",
    //         name: 'Sorvete Belga'
    //     },
    //     {
    //         id: 4,
    //         img: "https://img.freepik.com/fotos-gratis/cachorro-quente-de-carne-grelhada-com-lanche-de-ketchup-ia-generativa_188544-7829.jpg?w=2000",
    //         name: 'Cachorro Quente'
    //     },
    //     {
    //         id: 4,
    //         img: "https://img.freepik.com/fotos-gratis/cachorro-quente-de-carne-grelhada-com-lanche-de-ketchup-ia-generativa_188544-7829.jpg?w=2000",
    //         name: 'Cachorro Quente'
    //     },
    //     {
    //         id: 4,
    //         img: "https://img.freepik.com/fotos-gratis/cachorro-quente-de-carne-grelhada-com-lanche-de-ketchup-ia-generativa_188544-7829.jpg?w=2000",
    //         name: 'Cachorro Quente'
    //     },
    // ]

    const renderCards = (cards) => {
        return cards.map((card, i) => {
            if (i % 5 == 0)
                return <BigCard data={card} key={i} />

            return <Card data={card} key={i} />
        })
    }

    return (
        <>
            <View style={styles.container}>
                <TopBar />
                <MainCard data={mainCardData} />
                <Text style={styles.title}>As mais amadas</Text>
                {renderLoad()}
                <View style={styles.cards}>
                    {renderCards(cards)}
                    <View style={{ width: '100%', height: 100 }}></View>
                </View>
            </View>
            <Modal 
                    isVisible={state}
                    style={{ marginLeft: 0 }}
                    animationIn={'slideInRight'}
                    animationOut={'slideOutRight'}
            >
                <CustomizedModal />
            </Modal>
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
});