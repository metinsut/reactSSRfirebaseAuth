// import { getFirestore } from "redux-firestore";

// import firebase from "firebase";

// firebase.auth().createUserWithEmailAndPassword();

export const signUp_user = (data, callback) => (
    async (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        try {
            await firebase
                .auth()
                .createUserWithEmailAndPassword(data.email, data.password);

            let currentUser = await firebase.auth().currentUser;

            await currentUser.updateProfile({
                displayName: data.username
            })

            let newUser = {
                displayName: data.username,
                email: data.email,
                createdAt: firestore.FieldValue.serverTimestamp()
            }

            await firestore.set({ collection: 'users', doc: currentUser.uid }, { ...newUser })

            callback()

        } catch (error) {
            console.log(error);
        }
    }
)