import React, { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


const Logout = () => {

    const navigate = useNavigate();
    
    
    const callLogout = async()=>{
        try {
            const res = await fetch('/logout',{
                method:"GET",
                headers:{
                    'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  },
                  credentials:"include"
            })
        
            
             if(res.status === 200){
              navigate('/login')

            }
        } catch (error) {
            console.log("Please login first")
            
        }

    }

    useEffect(()=>{
        callLogout();
    },[])
    
    
  return (
    <>
  
   
        
        
    </>
  )
}

export default Logout