import React from 'react'
import "./Gallery.css"
import London from "../../Asset/London.jpg"
import Rwanda from "../../Asset/Rwanda.jpg"
import France from "../../Asset/Paris2.jpg"
import South from "../../Asset/South.jpg"
import America from "../../Asset/america.jpg"
import Ghana from "../../Asset/ghana.jpg"
import Italy from "../../Asset/italy.jpg"
import Egypt from "../../Asset/egypt.jpg"
import Dubia from "../../Asset/dubia.jpg"
import Austrialia from "../../Asset/austria.jpg"
import China from "../../Asset/china.jpg"
import Singapore from "../../Asset/signapore.jpg"
import Kenya from "../../Asset/kenya.jpg"
import Spain from "../../Asset/spain.jpg"
import Canada from "../../Asset/canada.jpg"
import Togo from "../../Asset/togo.jpg"
import logo from "../../Asset/ei_location.svg"
import Label from "../../Components/Label/Label"
import arrow from "../../Asset/pointer.svg"
import { Link } from 'react-router-dom'


const Gallery = () => {
   const picList = [
   {img : London, text : "London", logo : logo},
   {img : Rwanda, text : "Rwanda", logo : logo},
   {img : France, text : "France" , logo : logo},
   {img : South, text : "South Africa" ,  logo : logo},
   {img : America, text : "America", logo : logo},
   {img : Ghana, text : "Ghana", logo : logo},
   {img : Italy, text : "Italy", logo : logo},
   {img : Egypt, text : "Egypt", logo : logo},
   {img : Dubia, text : "Dubia", logo : logo},
   {img : Austrialia, text : "Australia", logo : logo},
   {img : China, text : "China", logo : logo},
   {img : Singapore, text : "Singapore", logo : logo},
   {img : Kenya, text : "Kenya", logo : logo},
   {img : Spain, text : "Spain", logo : logo},
   {img : Canada, text : "Canada", logo : logo},
   {img : Togo, text : "Togo", logo : logo},
   ]
   

  return (
    <div >
      <Link to="/SignIn"></Link>
      <div className='gaItem'> 
        <img src={arrow} alt="" />
      <h3 className='galText'> Destination</h3>
      </div>
      <div className='gallery'>
    {
     picList.map((item,i) => <Label 
     key = {i} img={item.img} logo = {item.logo} text={item.text}/>)
    }
     </div>   
    </div>
  )
}

export default Gallery