import React from 'react';

function Body2(){
    return(
<div class="center">
    <br/>
        <h1>Reset Password</h1>
        <form method="post">
    <div class="text_field">
        <input className='body2input' type="password" placeholder="Current password" required/>
      </div><br/>
    <div class="text_field">
        <input className='body2input' type="password" placeholder="New password" required/>
      </div><br/>
<div class="text_field">
        <input className='body2input' type="password" placeholder="Confirm password" required/>
        </div><br/><br/>
    <input className='signupbutton' type="submit" value="confirm"/>
    <div className='divnote'>Use new password to login in to your account.</div>
</form>
</div>

)
}
export default Body2;