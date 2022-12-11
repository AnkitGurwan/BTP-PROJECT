import React from 'react';

function Body2(){
    return(
        
    <div class="center">
        <h1>Welcome to the Professor Login Page</h1>
        
    <form method="post">
    
    <div class="text_field">
        <input type="email" required placeholder='User email' className='body2input'/>
    </div>

    <div class="text_field">
        <input type="password" required placeholder='Password' className='body2input'/>

    </div>
    <br/>
    
    <div class="pass">Forgot password?</div>
    <input type="submit" value="Login" />
    <br/>
    

    <div class="signup_link"> Not a member?  <a href="/createaccount">Signup</a>
    </div>
    </form>
    </div>

    )
}
export default Body2;