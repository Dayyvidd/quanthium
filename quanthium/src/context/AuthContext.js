import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from "../navigationRef";
import { AsyncStorage } from '@react-native-async-storage/async-storage';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signup':
            return { errorMessage: '', token: action.payload};
        case 'signin':
            return { errorMessage: '', token: action.payload};
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

        navigate('Profile');
    } catch (err) {
        console.log(err.response.data);
    }
};
    // Handle success by updating state
    // Handle failure by showing error message (somehow)


const signout = dispatch => {
    return () => {
        // somehow sign out!!!
    };
};

const lend = dispatch => async ({ amount, borrower }) => {
    try {
        console.log("AMOUNT PASSED IN: " + amount);
        const response = await trackerApi.post('/lend', { amount, borrower });
        console.log(response.data);
        console.log("LEND SUCCESSFUL");

    } catch (err) {
        console.log("FAILED");
        console.log(err.response.data);
    }
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, lend },
    { token: null, errorMessage: '' }
);
