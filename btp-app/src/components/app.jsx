import React from 'react';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Main from './pages/main';
import Mainlogin from './pages/mainlogin';
import Studentlogin from './pages/studentloginpage';
import Accountpage from './pages/accountpage';
import Createpassword from './pages/createpasswordpage';
import Resetpassword from './pages/resetpasswordpage';
import AuthState from '../Context/AuthContext/AuthState';
import ItemState from "../Context/ItemContext/ItemState"

function App(){
    return(
        <AuthState>
            <ItemState>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/login' element={<Mainlogin/>}/>
                    <Route path='/studentlogin' element={<Studentlogin/>}/>
                    <Route path='/createaccount' element={<Accountpage/>}/>
                    <Route path='/createpassword/:token' element={<Createpassword/>}/>
                    <Route path='/resetpassword' element={<Resetpassword/>}/>
                </Routes>
            </BrowserRouter>  
            </ItemState>
        </AuthState>
        )}
export default App;