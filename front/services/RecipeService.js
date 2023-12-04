import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import api from '../config/api';

class RecipeService {
    static getAll = async () => {
        try {
            const response = await api.get("http://localhost:8080/recipe")
                .then(res => {
                    console.log(res.data);
                    return res.data;
                });
            
            return response;
        } catch (err) {
            console.log(err.message);
            return null;
        }
    }

    static newRecipe = async (data, token) => {
        try {
            const response = await api.post("http://localhost:8080/recipe", data, {
                headers: {
                    "Authorization": "Bearer " + token 
                }
            })
                .then(res => {
                    
                });
            
            return 200;
        } catch (err) {
            console.log(err.message);
            return 400;
        }
    }

    static getById = async (id) => {
        try {
            const response = await api.get(`http://localhost:8080/recipe/${id}`)
                .then(res => {
                    console.log(res.data);
                    return res.data;
                });

            return response;
        } catch (err) {
            return null;
        }
    }
}

export default RecipeService;