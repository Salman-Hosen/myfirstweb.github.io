import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useCookies } from 'react-cookie'


const Login = () => {
  // const [cookies, setCookie] = useCookies(['']);
  const navigate = useNavigate()

  const [user,setUser] = useState({email:'',password:''})

  const Changed = (e)=>{
    const getName = e.target.name
    const getValue = e.target.value
    setUser({...user, [getName]:getValue})
  }

  const Submitted = async(e)=>{
    e.preventDefault();
    const {email,password}= user

    try {
      const res = await fetch('/login',{
        method:"POST",
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          email,password
        })
      });
      const data = await res.json()
      // const {token,id} = data.tokens[1]
      // console.log(token)

  if(res.status === 420){
    window.alert("User Email does not exist")
  }
    else if( res.status === 200){
        window.alert("Login successful")
        // setCookie('name',token, { path: '/' });
        
        navigate('/');
      }
      else{
        window.alert("Invalid login details")
        
      }
    } catch (error) {
      
    }

  }

  return (
    <>
    <section className="vh-100 bg-image" style={{backgroundImage: `url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')`}}>
<div className="mask d-flex align-items-center h-100 gradient-custom-3 p-5 ">
 <div className="container h-100">
   <div className="row d-flex justify-content-center align-items-center h-100">
     <div className="col-12 col-md-9 col-lg-7 col-xl-6">
       <div className="card " style={{borderRadius: "15px",maxWidth: "480px"}}>
         <div className="card-body p-10">
           <h2 className=" text-center mb-5">Login </h2>

           <form onSubmit={Submitted}>

             <div className="form-outline mb-4">
               <input type="email" id="form3Example3cg" className="form-control form-control-lg" style={{maxWidth: "450px"}} onChange={Changed} 
               value={user.email} name="email" />
               <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
             </div>

             <div className="form-outline mb-4">
               <input type="password" id="form3Example4cg" className="form-control form-control-lg" style={{maxWidth: "450px"}} onChange={Changed} 
               name="password" value={user.password} />
               <label className="form-label" htmlFor="form3Example4cg">Password</label>
             </div>

    


             <div className="d-flex justify-content-center">
               <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Login</button>
             </div>

             <p className="text-center text-muted mt-2 mb-0">Don't have an account? <a href="#!" className="fw-bold text-body"><u>Signup here</u></a></p>

           </form>

         </div>
       </div>
     </div>
   </div>
 </div>
</div>
</section> 
 </>
  )
}

export default Login