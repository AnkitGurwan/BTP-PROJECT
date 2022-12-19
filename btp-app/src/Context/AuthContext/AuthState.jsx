import { useState } from "react";
import AuthContext from "./AuthContext";


const AuthState = (props) => {

    const url = "http://localhost:5000"


    const registerUser = async (name, email) => {
        const response = await fetch(`${url}/user/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email })
        });
        
        const json = await response.json();
        console.log(response.status);
        // setUser(user.concat(json));
    }

    const loginUser = async (email,password) => {
        const response = await fetch(`${url}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });
        
        const json = await response.json();
        localStorage.setItem('token', json.token);
        return response.status;
        // setUser(user.concat(json));
    }

    const confirmEmail = async (password,token) => {
        const response = await fetch(`${url}/user/confirm-email/${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password })
        });
        
        const json = await response.json();
        console.log(json);
        // setUser(user.concat(json));
    }


    return (<AuthContext.Provider value={{registerUser,loginUser,confirmEmail}}>
        {props.children}
    </AuthContext.Provider>
    )
}

export default AuthState;





