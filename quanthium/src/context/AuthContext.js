import createDataContext from "./createDataContext";
import trackerAPI from '../api/tracker';

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
const signup = (dispatch) => {
    return (async ({email, password}) => {
        // Try to sign in.
        try {
            const response = await trackerAPI.post('/signup', { email, password});
            console.log(response.data);
        } catch (err) {
            console.log(err.message);
        }
        // Handle success by updating state.

        // Handle error by showing error.
    })
};

const signin = (dispatch) => {
    return (async ({email, password}) => {
        // Try to sign in.
        try {
            const response = await trackerAPI.post('/signin', { email, password});
            console.log(response.data);
        } catch (err) {
            console.log(err.message);
        }
        // Handle success by updating state.

        // Handle error by showing error.
    })
};

export const {Provider, Context} = createDataContext(
    authReducer,
    { signup, signin },
    { isSignedIn: false}
);

