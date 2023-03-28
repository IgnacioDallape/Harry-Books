import React, {createContext, useState} from "react";


export const CartContext = createContext({

    cart: [],
    clearCart: () => {},
    isInCart: () => {},
    addToCart: () => {},
    removeFromCart: () => {},
    getTotalQuantity: () => {},
    getTotal: () => {}
    
}
)
const CartProvider = (props) => {
    // creamos estado que almacene al carrito
    const [cart, setCart] = useState([])
    const [precioTotal, setprecioTotal] = useState(0)

    // 1- vaciar carrito
    const clearCart =  () => {
        setCart([])
    }

    // 2- verificar si esta en el carrito
    const isInCart =  (id) => {
        return cart.find((items) => items.id == id ) ? true : false       
    }
    // 3- añadir un producto al carrito 
    const addToCart =  (item,quantity) => {     
        if (isInCart(item.id)) {
            setCart(cart.map( (cartItems) => {
                if(cartItems.id === item.id){
                    return{ ...cartItems,quantity : cartItems.quantity + quantity}
                } else
                return cartItems
            }))
            
        } else{
            setCart([...cart, { ...item, quantity }]); 
        }        
    }
    // 4- remover un producto del carrit
    const removeFromCart =  (id) => {
        const newCart = newCart.filter((item) => item.id !== id )
        setCart(newCart)
    }
    // 5- obtener la cantidad total de elementos de productos
    const getTotalQuantity =  () => {
        let q = 0
        cart.forEach(product => {
            q += product.quantity 
        });
        return q
    }
    // 6- obtener el total a pagar 
    const getTotal = () => {
        const total = cart.reduce((accumulator, item) => {
          return accumulator + (item.quantity * item.price)
        }, 0);
        return total;        
    }
return(
    <CartContext.Provider value={{cart,clearCart,isInCart,addToCart,removeFromCart,getTotalQuantity,getTotal}}>
        {props.children}
    </CartContext.Provider>
)}

export default CartProvider