import React ,{useState ,useContext , useEffect}from 'react';
//import { Children } from 'react';
import {auth} from '../firebase';

const AuthContext = React.createContext() //hooks

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser ,setCurrentUser] = useState()
    const [loading , setLoading] = useState(true) 
    

    function signup(email,password) {
        //const email= (String);
        return auth.createUserWithEmailAndPassword(email,password)  //builtin func on firebase
        
    }
    function login (email,passsword){
        return auth.signInWithEmailAndPassword(email,passsword)
    }


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user =>{
            setCurrentUser(user) //setting logged in user as current user
            setLoading(false)
        })
        return unsubscribe
    } ,[])
    const value ={
        currentUser,
        signup,
        login
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading &&  children}
        </AuthContext.Provider>
    )
    
    
    }