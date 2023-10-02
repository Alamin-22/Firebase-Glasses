import { createContext, useEffect, useState, } from "react";
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import PropTypes from 'prop-types'; // ES6





// 
export const AuthContext = createContext(null);
// 



const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});

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
    // logout
    const LogOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
    }, [])


    // useEffect(() => {
    //    const unsubscribe= onAuthStateChanged(auth, (user) => {
    //         setUser(user);
    //     });

    //     return ()=>{
    //         unsubscribe()
    //     }
    // }, [])

    console.log(user)

    const AuthValue = {
        handleGoogleLogin,
        handleEmailCreateUser,
        handleSingIn,
        LogOut,
        user,
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