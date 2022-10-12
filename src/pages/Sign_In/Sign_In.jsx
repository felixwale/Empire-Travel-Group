import React from 'react'
import   "./Sign_In.css"
import signPointer from "../../Asset/pointer.svg"
import signlogo from "../../Asset/SignLogo.svg"
import signPix from "../../Asset/Signup.svg"
import { Link } from 'react-router-dom'

const Sign_In = () => {
  return (
    <div>
       <div className='signHead'>
        <img src={signPointer}  alt="" />
        <div className='signHead2'> <img src={signlogo} alt="" />
        <h2>Empire Travel Group</h2></div>
      </div>
     <div className='sign_in_container'>
        <div className='signup_form'>
         <h4>Get Started</h4>


            <form action="" className='signUp_form'>

              
              <div className='other '>
              <label htmlFor="txtInput">Fullname *</label> <br />
             <input type="text" id='txtInput' className='txt1'/>
             <p>text msg</p>
             </div>


               <div className='other '>
              <label htmlFor="txtSch">Name of school</label> <br />
             <input type="text" id='txtSch' placeholder='optional' className='txt1'/>
             <p>text msg</p>
             </div>


               <div className='other '>
              <label htmlFor="txtEmail">Email *</label> <br />
             <input type="email" name="email" id="txtEmail" className='txt1' placeholder='********'/>
             <p>text msg</p>
             </div>


               <div className='other '>
              <label htmlFor="pwd">Password *</label><br />
             <input type="password" name="email" id="pwd" className='txt1' placeholder='********' />
             <p>text msg</p>
             </div>


               <div className='other '>
              <label htmlFor="pwdConfirm">Confirm password *</label> <br />
              <input type="password" name="" id="pwdConfirm" className='txt1' placeholder='********'/>
             <p>text msg</p>
             </div>
              <div className='Sign_in_check'>
              <input type="checkbox" name="check" id="" />
              <span>Accept the terms and policies</span>  
              </div>
              <button className='signUp_btn'>Register</button>
              <p className='editP'>Already have an account?<Link to='/Sign_Up'> <span className='editTxt'>Signin</span> </Link></p>
            </form>
        </div>
        <div><img src={signPix} alt="" /></div>
        </div>
    </div>
  )
}

export default Sign_In