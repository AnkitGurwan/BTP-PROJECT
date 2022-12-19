import React,{useState, useContext} from 'react';
import { useParams } from 'react-router-dom';
import AuthContext from '../Context/AuthContext/AuthContext';


function Body2(){

    const {confirmEmail} = useContext(AuthContext);
    const params = useParams();
    const token = params.token;
    

    const [user, setUser] = useState({ password: "", repassword: "" });

    const detectChanges = (e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }

    const submit = async (e)=>{
        e.preventDefault();
        confirmEmail(user.password,token);
    } 

    return(
    <div class="center">
        <br/>
            <h1>Create Password for your account</h1>
            <form method="post">
        <div class="text_field">
            <input className='body2input' type="password" placeholder="password" required name="password" value={user.password} onChange={detectChanges}/>
        </div><br/>
    <div class="text_field">
            <input className='body2input' type="password" placeholder="confirm password" required name={user.repassword} onChange={detectChanges}/>
            </div><br/><br/>
        <input className='signupbutton' type="submit" value="confirm" onClick = {submit}/>
        <div className='divnote'>Use this password to login in to your account on BTP portal.</div>
    </form>
    </div>
)

}
export default Body2;