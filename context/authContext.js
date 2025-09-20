import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../FirebaseConfig";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(undefined);
    const [isNewUser,setIsNewUser]=useState(false);


    useEffect(() => {
        //on authstateChanged
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
                setUser(null);
                
            }
        });
        return unsub;
    }, [])

    const register = async (email, password, username) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            setIsNewUser(true);
            return { success: true, data: response?.user };
        } catch (e) {
            let msg = e.message;
            if (msg.includes('(auth/invalid-email)')) msg = 'Invalid Email';
            if (msg.includes('(auth/email-already-in-use)')) msg = 'Email Already In Use';
            return { success: false, msg };

        }
    }
    const login = async (email, password) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            setIsNewUser(false);
            return { success: true }
        } catch (e) {
            let msg = e.message;
            if (msg.includes('(auth/invalid-email)')) msg = 'Invalid Email';
            if (msg.includes('(auth/invalid-credential)')) msg = 'Wrong Email/Password';
            return { success: false, msg };
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, register, login,isNewUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const value = useContext(AuthContext);

    if (!value) {
        throw new Error("useAuth must be wrapped inside AuthContextProvider");
    } return value;
}