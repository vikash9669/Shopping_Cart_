import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import {useNavigate} from 'react-router-dom'
const Home = () => {
const navigate = useNavigate();
useEffect(()=>{
  const data = localStorage.getItem('formData')
  if(!data){
    navigate('signup')
  }
},[])
const handleGoToMenu=()=>{
navigate('/foodItems');
}
  return (
    <>
   
    <div className='container text-center p-10 w-[800px]'>
        <h1 className='text-6xl p-4'>Welcomw to Food's Kitchen</h1>
        <button type="button" onClick={handleGoToMenu} className="btn btn-primary mt-10">Go To Menu</button>
    </div>
    </>
  )
}

export default Home