import React from 'react';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Main from './pages/main';
import Mainlogin from './pages/mainlogin';
import Studentlogin from './pages/studentloginpage';
import Accountpage from './pages/accountpage';
import Createpassword from './pages/createpasswordpage';
import Resetpassword from './pages/resetpasswordpage';

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/login' element={<Mainlogin/>}/>
                <Route path='/studentlogin' element={<Studentlogin/>}/>
                <Route path='/createaccount' element={<Accountpage/>}/>
                <Route path='/createpassword' element={<Createpassword/>}/>
                <Route path='/resetpassword' element={<Resetpassword/>}/>
            </Routes>
        </BrowserRouter>  
        )}
export default App;