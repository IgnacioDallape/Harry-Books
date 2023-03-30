import React, {useContext,useState} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

const NavBar = () => {

    const {cart, name, lastname, email, getTotal, getTotalQuantity,clearCart, handleChangeName,handleChangeLastname, handleChangeMail, openModal} = useContext(CartContext)
    const [openCart, setopenCart] = useState(false)
    
    
    
    const AbrirCarrito = (boolean) => {
        setopenCart(!openCart)
    }
    
    const handleMouseEnter = () => {
        setopenCart(true)  
    } 
    const handleMouseLeave  = () => {
        setopenCart(false)
    }

    
    return (
        //IMAGEN IZQUIERDA Y BOTONERA PRINCIPAL
        <nav style={{display:'flex', justifyContent:'center', overflowX:'hidden'}} className='backgroundImg'>
            


        <div className="navbar navbar-expand-lg navbar-light container-fluid " style={{display:'flex', justifyContent:'center'}} >
            <div className="navbar-collapse" style={{display:'flex', justifyContent:'flex-start'}}>
                <div style={{ display:'flex',justifyContent:'flex-start'}}>
                    <Link to="/">
                        <img src="https://i.pinimg.com/564x/a4/58/18/a45818319b8af134a917e664c08bff92.jpg" alt=""  className='aumentoImg' style={{width:'8rem'}}/>
                    </Link>
                </div>
                <div >
                    <div style={{padding:'1rem', paddingLeft:'20rem',display:'flex', justifyContent:'center', gap:'8rem ', maxWidth:'minContent'}}>

                        <div  className='aumentoImg' style={{backgroundColor:'#5C2B29', borderRadius:'0.5rem', border:'1px #ab9d35 solid'}}>
                            
                            <Link to={'/'} className='button ' style={{fontFamily: 'Cinzel Decorative', borderRadius:'0.5rem'}}>Inicio </Link>
                        </div>
                        <div className="nav-item active aumentoImg" style={{backgroundColor:'#5C2B29', borderRadius:'0.5rem', border:'1px #ab9d35 solid'}}  >
                            <Link to={'/LibrosLista'} className='button' style={{fontFamily: 'Cinzel Decorative', borderRadius:'0.5rem'}}>Libros </Link>
                        </div>
                        <div className="nav-item aumentoImg"  style={{backgroundColor:'#5C2B29', borderRadius:'0.5rem', border:'1px #ab9d35 solid'}}>
                            <Link to={'/Nosotros'} className='button' style={{fontFamily: 'Cinzel Decorative', borderRadius:'0.5rem'}}>Sobre Nosotros </Link>
                        </div>
                    </div>
                </div>
            </div>            
        </div>

//CARRITO
    
        <div   onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{display:'flex',flexDirection:'column',justifyContent:'center',position:'absolute', right:'1rem', top:'2rem', width:'18rem', cursor:'pointer'}}>
        
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-cart" viewBox="0 0 16 16" style={{backgroundColor:'black', borderRadius:'0.2rem', position:'relative', left:'2rem'}}>
                    <path   d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>                
                </svg>
                <span className="badge badge-pill badge-danger ml-1" style={{position:'relative',left:'1rem  ',width:'1rem',backgroundColor:'#5C2B29',borderRadius: "50%",padding: "4px 4px",color: "yellow"}}>
                    {getTotalQuantity()}
                </span>
        
        <div className='cart-dropdown' style={{width:'370px', backgroundColor:'#5C2B29', borderRadius:'1rem',position:'relative',top:'2rem', width:'18rem'}}>
            { openCart &&  
                <div>

                    <span  onClick={clearCart} style={{paddingBottom:'15px'}}> <button style={{ borderRadius:'1rem', backgroundColor:'black', color:'yellow', border:'1px white solid'}}>  Vaciar carrito </button> </span>
                        <div> 
                            <>
                                { openCart &&                                              
                                    cart.map((item) => (
                                        <div style={{color:'white'}}>
                                            {item.title} - {item.quantity} Unidades - Precio individual: {item.price}
                                            <br />
                                            -----------------------------------------
                                            <br />
                                        </div>
                                ))}  
                                        <div>
                                            <br />
                                            <span style={{color:'white'}}>Cantidad de Libros: {getTotalQuantity()}  </span>
                                            <br />
                                            <span style={{color:'white'}}>Precio Total: $ {getTotal()} </span>
                                            <br />
                                            
                                            
                                            
                                        </div> 
                                        <Link to='/compra' style={{paddingBottom:'15px'}}> <button style={{ borderRadius:'1rem', backgroundColor:'black', color:'yellow', border:'1px white solid'}}>  Ir a Pagar </button></Link>
                                </>
                        </div>
                </div>  
            }
        </div>                       
    </div>                   
</nav>
        
    )
}

export default NavBar

