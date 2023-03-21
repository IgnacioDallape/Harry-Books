import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Nosotros = () => {
  return (
    <>
    <div>
    <h2 style={{display:'flex',justifyContent:'center', paddingTop:'2rem', fontFamily: 'Cinzel Decorative', fontWeight:'bold'}}> ¿Y nosotros quiénes somos? </h2>

        <div style={{display:'flex',justifyContent:'center', paddingTop:'2rem'}}>
            <img src="https://i.pinimg.com/564x/ad/5a/db/ad5adbd993fcb8d4301b223377dac39a.jpg" alt="" style={{border:'solid black 4px',borderRadius:'1rem'}}/>
        </div>


        <div style={{display:'flex',justifyContent:'center', paddingTop:'2rem', width:'50%'}} className='container'>
            <h6 className='container' style={{fontFamily: 'Cinzel Decorative', fontWeight:'bold'}}>La verdad que un simple fan de la saga de películas, que la sigue desde que se estrenó, me he leído todos los libros y quiero compartir este gran mundo con gente que se que puede llegar a disfrutarlo tanto como yo.</h6>

        </div>
    </div>
  
    </>
  )
}

export default Nosotros