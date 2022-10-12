import "./Label.css"



const Label = ({img, logo, text}) => {
  return (
    <div >
      <div className='card-container'>
        <img src={img} alt="" className='main_img'/>
        <div className='sub-container'>
            <img  src={logo} alt="" />
            <p>{text}</p>
        </div>
        </div>
    </div>
  )
}

export default Label