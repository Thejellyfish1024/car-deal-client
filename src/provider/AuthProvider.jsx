/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { useEffect } from "react";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [displayName, setDisplayName] = useState(null);
    const [photoURL, setPhotoURL] = useState(null);
    const [myCarts, setMyCarts] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() =>{
        fetch('https://car-deal-website-server-qc5a8l7so-al-amin-rahims-projects.vercel.app/carts')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setMyCarts(data)
        })
    },[])

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }

    const handleUpdateProfile = (name, Url) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: Url
        })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user stat: ', currentUser);
            setUser(currentUser)
            setLoading(false)
            if (displayName) {
                currentUser.displayName = displayName;
                currentUser.photoURL = photoURL;
            }

        })
        return () => unSubscribe();
    }, [displayName, photoURL])

    const authInfo = {
        darkMode,
        setDarkMode,
        setMyCarts,
        myCarts,
        user,
        loading,
        createUser,
        signInUser,
        logOut,
        setDisplayName,
        setPhotoURL,
        photoURL,
        displayName,
        googleSignIn,
        handleUpdateProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;