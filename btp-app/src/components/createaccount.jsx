import React,{useState, useContext} from 'react';
import AuthContext from '../Context/AuthContext/AuthContext';

const Createaccount = ()=>{

    const {registerUser} = useContext(AuthContext);

    const [user, setUser] = useState({ name: "", email: "" });

    const detectChanges = (e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }

    const submit = async (e)=>{
        e.preventDefault();
        registerUser(user.name, user.email);
    }

    return(
    <div class="center">
        <br/>
            <h1>Create account</h1>
            <form method="post">
        <div class="text_field">
            <input className='body2input'  placeholder="Name" required name='name' value={user.name} onChange={detectChanges}/>
            <span></span>
        </div><br/>
    <div class="text_field">
            <input className='body2input' type='email' placeholder="Email" required name="email" value={user.email} onChange={detectChanges}/>
            <span></span>
            </div><br/><br/>
        <input className='signupbutton' type="submit" value="Signup" onClick={submit}/>
        <div className='divnote'>NOTE:Once you "Signup" you will receive a mail on this Email account.</div>
    </form>
    </div>
)

}
export default Createaccount;