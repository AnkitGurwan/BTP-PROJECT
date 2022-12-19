import React,{useState, useContext} from 'react';
import {Link} from 'react-router-dom'
import AuthContext from '../Context/AuthContext/AuthContext';

const Body2 = ()=>{

    const {loginUser} = useContext(AuthContext);

    const [user,setUser] = useState({email:"", password:""});

    const submit = async (e)=>{
        e.preventDefault();
        const x = await loginUser(user.email,user.password);
        console.log("x = ",x);
        if(x === 200){
            console.log("Login Successfully");
            setUser({email:"", password:""})
        }
    }

    const detectChange = (e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    return(
    <div class="center">
        <h1>Welcome to the Professor Login Page</h1>
        
    <form method="post">
    
    <div class="text_field">
        <input type="email" required placeholder='User email' className='body2input' name="email" value={user.email} onChange={detectChange}/>
    </div>

    <div class="text_field">
        <input type="password" required placeholder='Password' className='body2input' name="password" value={user.password} onChange={detectChange}/>

    </div>
    <br/>
    
    <div class="pass">Forgot password?</div>
    <input type="submit" value="Login" onClick={submit} />
    <br/>
    

    <div class="signup_link"> Not a member?  <Link to="/createaccount">Signup</Link>
    </div>
    </form>
    </div>

    )
}
export default Body2;