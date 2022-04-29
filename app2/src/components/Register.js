import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



const Register = () => {
  let navigate = useNavigate();
 
  const [user,setUser] = useState({
    name:'',email:'',password:'',cpassword:''
  })

  const handleInput = (e)=>{
    
    const getName = e.target.name
    const getValue = e.target.value

    setUser({...user, [getName]:getValue})

  }

  const Submitted = async (e)=>{
    e.preventDefault();
    try {
      const {name,email,password,cpassword} = user;
   const res = await fetch('/register',{
      method:"POST",
      headers:{
        'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        name,email,password,cpassword
      })
  })
  const data = await res.json()
  console.log(data)

  if(res.status === 420){
    window.alert("Please fill up all")
  }
 else if(res.status === 421){
    window.alert("Your email already exist")
  }
  else if(res.status === 422){
    window.alert("Please confirm your password correctly")
  }else{
    window.alert("Your data is registered succesfull")
    navigate('/')
  }
  

    } catch (error) {
      console.log(error)
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
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>

              <form onSubmit={Submitted}>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg" style={{maxWidth: "450px"}} name="name" value={user.name} onChange={handleInput} />
                  <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3cg" className="form-control form-control-lg" style={{maxWidth: "450px"}} name="email" value={user.email} onChange={handleInput} />
                  <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4cg" className="form-control form-control-lg" style={{maxWidth: "450px"}} name="password" value={user.password} onChange={handleInput} />
                  <label className="form-label" htmlFor="form3Example4cg">Password</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4cdg" className="form-control form-control-lg" style={{maxWidth: "450px"}} name="cpassword" value={user.cpassword} onChange={handleInput} />
                  <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                </div>


                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>

                {/* <p className="text-center text-muted mt-3 mb-0">Have already an account? <a href="/login"  className="fw-bold text-body"><u>Login here</u></a></p> */}

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

export default Register