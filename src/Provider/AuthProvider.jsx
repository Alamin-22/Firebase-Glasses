import { createContext } from "react";
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import PropTypes from 'prop-types'; // ES6





// 
export const AuthContext = createContext(null);
// 



const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    // google login
    const handleGoogleLogin = () => {
        return signInWithPopup(auth, GoogleProvider)
    }
    // create user with Email And Password 
    const handleEmailCreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // singIn user

    const handleSingIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }







    const AuthValue = {
        handleGoogleLogin,
        handleEmailCreateUser,
        handleSingIn,
    }

    return (
        <AuthContext.Provider value={AuthValue}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;