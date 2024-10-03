import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
export default function Home() {
    const [inputId, setInputId] = useState();
    const [username, setUsername] = useState();
    const navigate = useNavigate();
    const handlesubmit=()=>{
        if(!inputId||!username){
            toast.error('Please fill the details');
            return ;
        }
        toast.success('Created a new room');
        navigate(`/editor/${inputId}`, {
            state: { username }, // Pass username as state
        });
    };

    const handleInputEnter=(e)=>{
    if(e.code==='Enter'){
        handlesubmit();
    }
    }
    return (
        <div className='Homepagewrapper'>
            <div className='Pagewrapper'>
                <img src='image.png' alt='codesphere logo' />
                <h4 className='lab'>Please enter your credentials</h4>
                <div className='inputfield'>
                    <input className='ide' placeholder='user_id' type='text' value={inputId} onChange={(e) => { setInputId(e.target.value) }} 
                     onKeyUp={handleInputEnter}/>
                    <input className='name' placeholder='user_name' type='text' value={username} onChange={(e) => { setUsername(e.target.value) }} 
                     onKeyUp={handleInputEnter}/>
                    <button className='btn' onClick={handlesubmit}>Join</button>
                </div>
            </div>
        </div>
    )
}

