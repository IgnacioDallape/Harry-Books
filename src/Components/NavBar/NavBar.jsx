import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart/Cart'


const NavBar = () => {
    return (
        <div style={{display:'flex', justifyContent:'center'}} className='backgroundImg'>
            
                <nav className="navbar navbar-expand-lg navbar-light container-fluid " style={{display:'flex', justifyContent:'center'}} >
                    <div className="navbar-collapse" style={{display:'flex', justifyContent:'flex-start'}}>
                        <div style={{ display:'flex',justifyContent:'flex-start'}}>
                            <Link to="/">
                                <img src="https://i.pinimg.com/564x/a4/58/18/a45818319b8af134a917e664c08bff92.jpg" alt=""  className='aumentoImg' style={{width:'8rem'}}/>
                            </Link>
                        </div>
                        <div >
                            <div style={{padding:'1rem', paddingLeft:'20rem',display:'flex', justifyContent:'center', gap:'8rem ', maxWidth:'minContent'}}>

                                <li  className='aumentoImg'>
                                    
                                    <Link to={'/'} className='button1 ' style={{fontFamily: 'Cinzel Decorative'}}>Inicio </Link>
                                </li>
                                <li className="nav-item active aumentoImg"  >
                                    <Link to={'/LibrosLista'} className='button2' style={{fontFamily: 'Cinzel Decorative'}}>Libros </Link>
                                </li>
                                <li className="nav-item aumentoImg" >
                                    <Link to={'/Nosotros'} className='button3' style={{fontFamily: 'Cinzel Decorative'}}>Sobre Nosotros </Link>
                                </li>
                            </div>
                        </div>
                    </div>
                </nav>
            <div className='flexEnd' style={{position:'relative', right:'2rem', top:'2rem', maxWidth:'fit-content'}}>
                <Cart  />  
            </div>    
        </div>
    )
}

export default NavBar