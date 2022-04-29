import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Salmanimg from '../images/salman.jpg'
import '../Aboutcard.css'

const About = () => {

    const navigate = useNavigate();
    const [user,setUser] = useState({});
    
    const callAbout = async()=>{
        try {
            const res = await fetch('/about',{
                method:"GET",
                headers:{
                    'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  },
                  credentials:"include"
            })
        
            const auser = await res.json();
            // console.log(auser.name)
             if(res.status === 200){
                 setUser(auser)

            }
        } catch (error) {
            console.log("Please login first")
            navigate('/login')
        }

    }

    useEffect(()=>{
        callAbout();
    },[])
    
    console.log(user)
  return (
    <>
  
   <div class="container emp-profile">
            <form method="GET">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src={Salmanimg} alt=""/>
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h2>
                                       {user.name}
                                    </h2>
                                    <h6>
                                        Web Developer and Designer
                                    </h6>
                                    <p class="proile-rating">RANKINGS : <span>8/10</span></p>
                                    <p class="profilepara">
                                        Hello...This is Salman Farshi from Bangaldeshi. I am graduated from Rajshahi University of Engineering and Technology. I am graduated in Electrical and Electronic Engineering.
                                    </p>

                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Information</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                                    </li>
                                
                                </ul>

                        </div>
                    </div>
                    <div class="col-md-2">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>


                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                            <p>WORK LINK</p>
                            <a href="https://www.facebook.com/salman.farshi.18294053" target="black">Facebook</a><br/>
                           
                            <p>SKILLS</p>
                            <a href="3">Web Designer</a><br/>
                            
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                           
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div class="row">
                                            <div class="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{user.name}</p>
                                            </div>
                                            <div class="col-md-6">
                                                <label>Roll</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>1901065</p>
                                            </div>
                                            <div class="col-md-6">
                                                <label>Subject</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Electrical and Electronic Engineering</p>
                                            </div>
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{user.email}</p>
                                            </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                 <div class="row">
                                            <div class="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Web Developer and Designer</p>
                                            </div>

                                            <div class="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                            <div class="col-md-6">
                                                <label>Word</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>EEE Engineer</p>
                                            </div>
                                </div>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
            </form>           
        </div>
        
        
    </>
  )
}

export default About