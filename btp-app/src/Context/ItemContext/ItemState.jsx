import { useState } from "react";
import ItemContext from "./ItemContext";


const AuthState = (props) => {

    const url = "http://localhost:5000"


    const allProjects = async () => {
        const response = await fetch(`${url}/project/allprojects`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        
        const json = await response.json();
        console.log(json);
        // setUser(user.concat(json));
    }

    
    


    return (<ItemContext.Provider value={{allProjects}}>
        {props.children}
    </ItemContext.Provider>
    )
}

export default AuthState;





