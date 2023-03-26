import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext';

import data from '../Libros/Json/data.json';



const LibrosLista = () => {
  const {cart,precioTotal,addToCart,removeFromCart,clearCart,getTotalQuantity,getTotal} = useContext(CartContext)

  const [api, setApi] = useState([])
  const [json, setJson] = useState(data)
  const [all, setAll] = useState([]);


  useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=Harry%20Potter')
      .then((results) => results.json())
      .then((resultsApi) => {
        setApi(resultsApi.items)
      }) 
  }, [])

    
  return (
    <ul style={{ margin: 0, padding: '3rem' }}>
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', padding: '2rem', gap: '3rem' }} className='backgroundBooks'>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <img src={'https://i.pinimg.com/564x/3b/5c/31/3b5c314ae9f7ba99b20b451bf2aeb81b.jpg'} alt={`Imagen ${index}`} style={{ width: '200px', height: 'auto', marginRight: '2rem', borderRadius: '0.5rem', gap: '1rem' }} />
          <div style={{ gap: '2rem', width: '10rem', display: 'flex', justifyContent: 'center', flexDirection: 'column' }} className='nameBooks'>
            <h6 style={{ fontFamily: 'Cinzel Decorative', fontWeight: 'bold', width: '5rem', display: 'flex', justifyContent: 'flex-start' }}>{item.name.toUpperCase()}</h6>
            <h6 style={{ fontFamily: 'Cinzel Decorative', fontWeight: 'bold' }}>{item.price} </h6>
            <button onClick={() => addToCart(item, 1)} style={{ borderRadius: '1rem', backgroundColor: '#5C2B29', border: '2px solid #8B0000', color: 'yellow' }}> Agregar al carrito</button>
          </div>
        </React.Fragment>
      ))}
    </div>
  </ul>
  
      
  )
}

export default LibrosLista
