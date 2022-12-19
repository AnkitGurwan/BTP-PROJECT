import React, { useContext } from 'react';
import ItemContext from '../Context/ItemContext/ItemContext';

function Body(){
    // const {allProjects} = useContext(ItemContext);
    // const submit = (e)=>{
    //     e.preventDefault();
    //     allProjects();
    // }

    
    return(
        <div className='bodymaindiv'>
            <div className='bodydiv1'><a href="/login" className='bodya'>Professor</a></div>
            <div className='bodydiv2'><a href="/studentlogin" className='bodya'>Student</a></div>
        </div> 
    )
}


export default Body;