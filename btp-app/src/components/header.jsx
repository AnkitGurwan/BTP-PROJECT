import React from 'react';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';


function Header(){
    return(
        <div>
            <header>
                <img className='headerimage' src='https://iitg.ac.in/mech/static/images/logo.png'></img>
                <div className='headerdiv'>
                <h1 className='headerh1'>
                Department of Mechanical Engineering
                </h1>
                <h3 className='headerh3'>Indian Institute of Technology Guwahati</h3>
                </div>
                <a href='https://iitg.ac.in/mech/academics/undergraduate/latest/sem-5/btp-phase-i/' className='headerspan2'>BTP Phase 1</a>
                <a href='https://iitg.ac.in/mech/academics/undergraduate/latest/sem-5/' className='headerspan2'>Sem 5</a>
                </header>
        </div>
    )
}


export default Header;