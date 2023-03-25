import React, {useContext,useState} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'


const NavBar = () => {

    const {cart, getTotal, getTotalQuantity} = useContext(CartContext)
    const [openCart, setopenCart] = useState(false)
    
    const handleMouseEnter = () => {
      setopenCart(true)  
    }

    const handleMouseLeave  = () => {
        setopenCart(false)
    }

    return (
        <nav style={{display:'flex', justifyContent:'center'}} className='backgroundImg'>
            
            
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
            
                <div  className="cart-dropdown-wrapper aumentoImg" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-cart" viewBox="0 0 16 16" style={{backgroundColor:'black', borderRadius:'0.2rem'}}>
                            <path   d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            
                        </svg>
                        <div>
                            <span style={{color:'green'}}>Cantidad de items: {getTotalQuantity()}  </span>
                            <br />
                            <span style={{color:'green'}}>$ {getTotal()} </span>
                        </div>
                </div>
                
                
            </div>

                            
        </nav>
        
    )
}

export default NavBar