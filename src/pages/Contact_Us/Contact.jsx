import React from 'react'
import "./Contact.css"
import contactArrow from "../../Asset/pointer.svg"
import send from "../../Asset/send.svg"

const Contact = () => {
  return (
    <div>
  
        <img src={contactArrow} alt="" />
        <h3  className='contact_P' >Contact Us</h3>
        <div className='contact_us'>
            <div className='contact_addr'>
            <h3>Our Office</h3> 
            <ul>
                <li> <h4>Address</h4> 
        <p>4th Floor, Shobo House, Ewang Street, Abeokuta, Nigeria.</p></li>
                <li><h4>Phone Numbers</h4> 
         <p> +2348022235119, +23418880225, +2348055469754</p></li>
                <li><h4>Website</h4>
                <p>https://www.Empiretravelgroup.com</p></li>
                <li><h4>Email</h4>
                <p>info@empiretravelgroup.com</p></li>
                </ul>   
            </div>
            <div className='contact_form'>
                <h3>Contact</h3>
              <div className='contact_form'> <form action="">
                <div className='main-input'>
                <input type="text" placeholder='First Name'/>
                  </div>

                     <div className='main-input'>
                <input type="text" placeholder='Last Name'/>
                 </div>
               
               <div className='main-input'>
                <input type="email" name="" id="" placeholder='Email' />
                    </div>
                 <div className='main-input'>   
                <input type="number" name="" id=""  placeholder='Phone'/>
                    </div>

                    
                 <div className='main-input'> 
                <input type="text" placeholder='Subject' />
                   </div>
                   
               <div className='textarea'>
                <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea></div>
                
    
                </form>           <div className='send'> <img src= {send} alt="" /><input type="button" value="Send" /></div></div> 
            </div>
        </div>
       
    </div>
  )
}

export default Contact