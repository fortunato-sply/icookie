import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import api from '../config/api';

class UserService {
    static login = async (data) => {
        console.log(this.props);
        try {
            const response = await api.post("http://localhost:8080/auth/login", data)
                .then(res => {
                    const auth = {
                        token: res.data.token,
                        user: res.data.user
                    }

                    return auth;
                });
            
            return response;
        } catch (err) {
            console.log(err.message);
            return null;
        }
    }

    static logout() {

    }

    static register = async (data) => {
        try {
            const response = await api.post("http://localhost:8080/user/register", data)
                .then(res => {
                    console.log(res.data);
                });
            
            return 200;
        } catch (err) {
            console.log(err.message);
            return 400;
        }
    }
}

export default UserService;