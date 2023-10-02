import { createContext, useEffect, useState, } from "react";
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GithubAuthProvider, updateProfile, } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import PropTypes from 'prop-types'; // ES6





// 
export const AuthContext = createContext(null);
// 



const GoogleProvider = new GoogleAuthProvider();
const GitHubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    // google login
    const handleGoogleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider)
    }
    // GitHub login
    const handleGitHubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, GitHubProvider)
    }

    // create user with Email And Password 
    const handleEmailCreateUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // singIn user

    const handleSingIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update Profile
    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }


    // logout
    const LogOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        })
    }, [])


    // useEffect(() => {
    //    const unsubscribe= onAuthStateChanged(auth, (user) => {
    //         setUser(user);
    // setLoading(true);
    //     });

    //     return ()=>{
    //         unsubscribe()
    //     }
    // }, [])

    // console.log(user)

    const AuthValue = {
        handleGoogleLogin,
        handleEmailCreateUser,
        handleSingIn,
        LogOut,
        handleGitHubLogin,
        handleUpdateProfile,
        user,
        loading,
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