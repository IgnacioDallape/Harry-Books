import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../../Context/CartContext';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';


const Compra = () => {
    const {cart,clearCart,getTotalQuantity, getTotal} = useContext(CartContext)
    const [modal, setModal] = useState(false);
    const [name, setName] = useState()
    const [lastname, setLastname] = useState()
    const [email, setEmail] = useState()

    const openModal = () => {
    setModal(true);
};

const handleChangeName = (e) => {
    setName(e.target.value)
}
const handleChangeLastname = (e) => {
    setLastname(e.target.value)
}
const handleChangeMail = (e) => {
    setEmail(e.target.value)
}

const handleConfirm = (e)=>{
    e.preventDefault()

    const db = getFirestore()
    const orderCollection = collection(db,'orders')
    console.log(orderCollection)

    const order = {
        buyer:{
            nombre:name,
            apellido:lastname,
            mail:email,
        },

        items: cart,
        total: getTotal()
    }
    
    addDoc(orderCollection,order)
    clearCart()
    setName('')
    setLastname('')
    setEmail('')
    Swal.fire('Compra confirmada :)!')

    
}

const handleCancel = (e) => {
    setName('')
    setLastname('')
    setEmail('')
    
}



return (
    
    <div style={{display:'flex', justifyContent:'center', paddingTop:'2rem', paddingBottom:'5rem'}}>

        <div style={{ border:'solid black 3px', padding:'3rem', width:'50rem', backgroundColor:'#5C2B29', borderRadius:'1rem'}}>

            <h2 style={{display:'flex',justifyContent:'center', fontFamily: 'Cinzel Decorative', paddingBottom:'1rem', paddingTop:'3rem', color:'white'}}>Confirmando tu compra!</h2>
            <h5 style={{display:'flex',justifyContent:'center', fontFamily: 'Cinzel Decorative', paddingBottom:'1rem', paddingTop:'1rem', color:'white'}}>Tu carrito:</h5>

            <>
                            <div style={{display:'flex', flexDirection:'column',justifyContent:'center'}}>

                                {                                      
                                    cart.map((item) => (
                                        <div style={{display:'flex', justifyContent:'center'}}>
                                            <div style={{display:'flex', justifyContent:'center'}}>
                                                <li style={{color:'white' }}>
                                                    <span>{item.title} <br /> </span>
                                                    <span> Unidades: {item.quantity} <br /></span>
                                                    <span>Precio individual: $ {item.price} <br /></span>
                                                </li>
                                                
                                            </div>
                                        </div>
                                ))}  
                                <div style={{display:'flex', justifyContent:'center', paddingBottom:'3rem', paddingTop:'3rem'}}>

                                        <div style={{backgroundColor:'black', borderRadius:'1rem', border:'1px solid white' }}>
                                            <div style={{paddingTop:'1rem'}}>
                                                
                                                <span style={{color:'white', padding:'2rem'}}>Cantidad total de Libros: {getTotalQuantity()}  </span>
                                            </div>
                                            <div style={{paddingTop:'1rem'}}>
                                                <span style={{color:'yellow',padding:'2rem', fontSize:'1.5rem'}}>Precio Total: $ {getTotal()} </span>
                                            </div>
                                            
                                        </div> 
                                </div>
                            </div>
                                </>
                        <div style={{display:'flex', justifyContent:'center'}}>
                        <div >
                        <div style={{display:'flex', justifyContent:'flex-end'}}>


                                    <h3 style={{ fontFamily: 'Cinzel Decorative', paddingBottom:'1rem', paddingTop:'3rem', color:'white'}}>Completa los datos para que puedas abonar y nosotros contactarte!</h3> 
                            </div>

                        <div style={{display:'flex',justifyContent:'center', fontFamily: 'Cinzel Decorative'}}>
                        
                            <label htmlFor="name" style={{fontSize:'1rem', color:'white',paddingRight:'1rem'}}>Nombre</label>
                            <input type="text" name="name"  onChange={handleChangeName} value={name} required style={{fontSize:'0.7rem', fontWeight:'bold'}}  />
                        </div>
                        <br />
                        <div style={{display:'flex',justifyContent:'center', fontFamily: 'Cinzel Decorative'}}>
                            <label htmlFor="lastname" style={{fontSize:'1rem', color:'white', paddingRight:'1rem'}}>Apellido</label>
                            <input type="text" name="lastname"  onChange={handleChangeLastname} value={lastname} required style={{fontSize:'0.7rem', fontWeight:'bold'}} />
                        </div>
                        <br />
                        <div style={{display:'flex',justifyContent:'center', paddingLeft:'1rem', fontFamily: 'Cinzel Decorative'}}>
                            <label htmlFor="mail" style={{fontSize:'1rem', color:'white',paddingRight:'1.1rem'}}>E-mail</label>
                            <input type="email" name="mail"  onChange={handleChangeMail} value={email} required style={{fontSize:'0.7rem', fontWeight:'bold'}} />
                        </div>
                        </div>
                        
                            
                        </div>
        
                                <div style={{display:'flex',justifyContent:'center', paddingTop:'4rem', fontFamily: 'Cinzel Decorative', gap:'2rem'}}>
                                
                                <Link to='/'>
                                    <button type='button' style={{border:'2px black solid', borderRadius:'0.3rem', color:'#5C2B29'}} className='aumentoImg' onClick={() => { handleCancel(); clearCart() }}>
                                        Cancelar
                                    </button>
                                </Link>
                                        
                                    <button type="submit" style={{border:'2px black solid', borderRadius:'0.3rem', color:'#5C2B29'}} className='aumentoImg' onClick={handleConfirm}>
                                        Confirmar
                                    </button>
                                
                            </div>
                        </div>
                        
        </div>
    
    )
}

export default Compra