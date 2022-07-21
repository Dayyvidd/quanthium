import { useState } from 'react';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from "../navigationRef";
import AsyncStorage from '@react-native-async-storage/async-storage';

let currentUser;


const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signup':
            return { errorMessage: '', token: action.payload};
        case 'signin':
            return { ...state, attr: action.payload};
        default:
            return state;
    }
};

const signup = dispatch => {
    return async ({ email, password }) => { 
        try {
            const response = await trackerApi.post('/signup', { email, password });
            await AsyncStorage.setItem('token', response.data.token);

            dispatch({type: 'signup', payload: response.data.token});
            console.log(response.data);
        } catch (err) {
            //console.log(err.response.data);
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign up.'});
        }
    };
};

const signin = dispatch => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signin', { email, password });
        console.log(response.data);
        console.log("SIGNED IN");
        currentUser = email;


        navigate('mainFlow');

        dispatch({type: 'signin', payload: {token: response.data.token, email: response.data.email, balance: response.data.balance}});
    } catch (err) {
        console.log(err.response.data);
    }

};


const signout = dispatch => {

};

const lend = dispatch => async ({ amount, borrower}) => {
    try {

        console.log("AMOUNT PASSED IN: " + amount);
        const response = await trackerApi.post('/lend', { amount, borrower, currentUser});
        console.log(response.data);
        console.log("LEND SUCCESSFUL");

    } catch (err) {
        console.log("FAILED");
        console.log(err.response.data);
    }
};


export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, lend},
    { token: null, errorMessage: '', email: '' }
);

