import React, { useEffect, useState } from 'react'
import '../Homepage.css'

const Home = () => {
  
  const [user,setUser] = useState({});
  const [check,setCheck] = useState(false)
  
  const callHome = async()=>{
      try {
          const res = await fetch('/',{
              method:"GET",
              headers:{
                  'Accept': 'application/json',
                'Content-Type': 'application/json',
                },
                credentials:"include"
          })
      
          const huser = await res.json()
          console.log(huser)

           if(res.status === 200){
               setCheck(true)
               setUser(huser)
              //  console.log(check)
               console.log(huser)

          }
      } catch (error) {
          console.log(error)
         
      }

  }

  useEffect(()=>{
    callHome();
},[])

  return (
    <div className="home">
       <section className="vh-100 bg-image" style={{backgroundImage: `linear-gradient(to right ,rgb(228, 226, 226) 48%,black 4%, white 48%)`}}>
       <h3>Welcome</h3>
       <h1>{check? "How are you "+ user.name+"?" : "This is your best choice"}</h1>
       </section>
    </div>
  )
}



export default Home