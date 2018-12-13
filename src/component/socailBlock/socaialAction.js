export const socialLogin = (selectedProvider, callback) => (
    async (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        try {
            let user = await firebase.login({
                provider: selectedProvider,
                type: "popup"
            })
            if (user.additionalUserInfo.isNewUser) {
                await firestore.set({ collection: 'users', doc: user.user.uid }, {
                    displayName: user.profile.displayName,
                    photoURL: user.profile.avatarUrl,
                    createdAt: firestore.FieldValue.serverTimestamp()
                })
            }
            callback()
        } catch (error) {
            console.log(error)
        }
    }
)