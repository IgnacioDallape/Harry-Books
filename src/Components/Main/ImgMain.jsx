import React from 'react'
import { Link } from 'react-router-dom'


const ImgMain = () => {
  return (
    <>
    <div style={{display:'flex', justifyContent:'space-around'}}>
        
        <Link to={'/harrypotter'} >
          <img src="https://i.pinimg.com/564x/27/f4/14/27f41414578178dc18b8b5cf24bc0349.jpg" alt="Harry" className='aumentoImg' style={{display:'flex', justifyContent:'center', width:'20rem', height:'20rem'}}/>
        </Link>
        <Link to={'/hermione'}>
          <img src="https://i.pinimg.com/564x/62/24/b7/6224b722abcae5e1bf0fb69fef78eb63.jpg" alt="Hermione" className='aumentoImg' style={{display:'flex', justifyContent:'center', width:'20rem', height:'20rem'}}/>
        </Link>
        <Link to={'/ron'}>
          <img src="https://i.pinimg.com/736x/c9/53/d3/c953d36fa289f794537b094a6e12432c.jpg" alt="Ron" className='aumentoImg' style={{display:'flex', justifyContent:'center', width:'20rem', height:'20rem'}}/>
        </Link>
    </div>
  </>
  )
}

export default ImgMain