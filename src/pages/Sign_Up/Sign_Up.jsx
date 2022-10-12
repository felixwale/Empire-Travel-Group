import React, { useEffect, useState } from 'react'
import "./Sign_Up.css"
import signUp from "../../Asset/signin.svg"
import signPointer from "../../Asset/pointer.svg"
import signlogo from "../../Asset/SignLogo.svg"
import facebook from "../../Asset/facebook.svg"
import google from "../../Asset/Google.svg"
import { Link } from 'react-router-dom'



const Sign_Up = () => {

  const initialValues = {email: "", password: "", lastName: "", firstName: "", confirmPassword: ""}
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false)
     
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]:value})
    console.log(formValues)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormErrors(validate(formValues))
    setIsSubmit(true)
  }

  useEffect(()=>{
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues)
    }
  }, [formErrors])
  const validate = (values) =>{

    const errors = {};
  const regex = / [a-z0-9]+@[a-z]/;
  const regexName = / /
  }


  return (
    <div>
      
      <div className='signHead'>
        <img src={signPointer}  alt="" />
        <div className='signHead2'> <img src={signlogo} alt="" />
        <h2>Empire Travel Group</h2></div>
      </div>


      <div className="main-form">
         <div className='formB'> 
        <form action="" method="get" id="form">
           <h3>Welcome Back!</h3>
           
        <div className='fb'>
        <span className='GG-logo'>  <img src={google} alt="" /> Sigin with Google</span>
        <span className='fb-logo'> <img src={facebook} alt="" />Sigin with Facebook</span> 
        </div>


            <div className="line1">
           <p class="line"></p> <span className="spn-txt" >or</span> <p className="line"></p>
            </div>
        

            <div class="form-control">
            <label for="loginEmail">Email</label><br />
            <input type="email" placeholder="Enter email address"  className="email" id="loginEmail" value= {data.email} />
            <small class="small active"></small>
            </div>


            <div className='form-control'>
            <label for="loginPassword">Paasword</label> <br />
            <input type="password" id="loginPassword" placeholder="**********" className="password" value= {data.password}/>
            <small class="small active"></small>
            </div>
            <div className='rememberTxt'>
              <div><input type="checkbox" name="" id="" />Remember me</div>
             <div className='forget'>Forgot Password?</div>
            </div>
         
            <div className='otherLOg'>
            <input type="submit" value="Login" className="loginTxt" id="login"/>
            </div>
            <p>Don’t have an account? <Link to="/Sign_In"> <span className='registerTxt'>Register</span></Link></p>
        </form>
     </div>
     <div className='sign_up_img'>
       <img src={signUp} alt="" />
     </div>
     </div>
    </div>

  )
}

export default Sign_Up