import React from 'react';

function Body2(){
    return(
<div class="center">
    <br/>
        <h1>Create Password for your account</h1>
        <form method="post">
    <div class="text_field">
        <input className='body2input' type="password" placeholder="password" required/>
      </div><br/>
<div class="text_field">
        <input className='body2input' type="password" placeholder="confirm password" required/>
        </div><br/><br/>
    <input className='signupbutton' type="submit" value="confirm"/>
    <div className='divnote'>Use this password to login in to your account on BTP portal.</div>
</form>
</div>
)

}
export default Body2;