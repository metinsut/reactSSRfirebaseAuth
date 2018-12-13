export const login_user = (data,callback) => {
    return async (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        try {
            await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
            callback();
        } catch (error) {
            console.log(error);
        }
    }
}