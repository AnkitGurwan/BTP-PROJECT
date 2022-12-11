import React from 'react';

function createaccount(){
    return(
<div class="center">
    <br/>
        <h1>Create account</h1>
        <form method="post">
    <div class="text_field">
        <input className='body2input'  placeholder="Name" required/>
        <span></span>
      </div><br/>
<div class="text_field">
        <input className='body2input' type='email' placeholder="Email" required/>
        <span></span>
        </div><br/><br/>
    <input className='signupbutton' type="submit" value="Signup"/>
    <div className='divnote'>NOTE:Once you "Signup" you will receive a mail on this Email account.</div>
</form>
</div>
)

}
export default createaccount;