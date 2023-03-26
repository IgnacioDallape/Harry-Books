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
    <>
      
      {/* <ul>
        {
          cart.map((item) => (
            <li>
              <span>
                  {item.name} - {item.quantity} x {item.price} 
              </span>
            </li>
          ))
        }
      </ul> */}
      

      <ul style={{ margin: 0, padding: '3rem' }}>
        {api.length > 0 && (
          <>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap:'wrap', justifyContent:'space-evenly', padding:'2rem', gap:'3rem'}} className='backgroundBooks'>
              {data.map((item, index) => {
                const thumbnail = item?.volumeInfo?.imageLinks?.thumbnail;
                return (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem',flexWrap:'wrap' }} className='aumentoImg'>
                    <div style={{paddingBottom:'2rem', paddingLeft:'3rem'}} >
                      {thumbnail ? (
                        <>
                        <img src={thumbnail} alt={`Imagen ${index}`} style={{ width: '150px', height: 'auto', marginRight: '2rem',borderRadius:'0.5rem', gap:'1rem'}} />
                        <li to={`/api/${index}`} style={{ gap: '2rem', width:'10rem', display:'flex',justifyContent:'center', flexDirection:'column' }} className='nameBooks'>

                          <h6 style={{fontFamily: 'Cinzel Decorative', fontWeight:'bold',width:'5rem',display:'flex', justifyContent:'flex-start'}}>{json[index].name.toUpperCase()}</h6>
                          <h6 style={{fontFamily: 'Cinzel Decorative', fontWeight:'bold'}}>{json[index].price} </h6>
                          
                          <button onClick={() => addToCart(item,1)} style={{borderRadius:'1rem'}}> Agregar al carrito</button>

                        </li>
                        
                        </>
                      ) : (
                        <>
                        <img src={'https://i.pinimg.com/564x/ab/db/2c/abdb2cbc5ccf686576cd9a4a1b1bf8dc.jpg  '} alt={`Imagen ${index}`} style={{ width: '150px', height: 'auto', marginRight: '2rem',borderRadius:'0.5rem', gap:'1rem'}} />
                        <li to={`/api/${index}`} style={{ gap: '2rem', width:'10rem', display:'flex',justifyContent:'center', flexDirection:'column' }} className='nameBooks'>

                          <h6 style={{fontFamily: 'Cinzel Decorative', fontWeight:'bold',width:'5rem',display:'flex', justifyContent:'flex-start'}}>{json[index].name.toUpperCase()}</h6>
                          <h6 style={{fontFamily: 'Cinzel Decorative', fontWeight:'bold'}}>{json[index].price} </h6>
                          <button onClick={() => addToCart(item,1)} style={{borderRadius:'1rem',backgroundColor:'#5C2B29',border: '2px solid #8B0000', color:'yellow'}}> Agregar al carrito</button>
                          
                        </li>
                        </>
                      )}
                      
                      
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </ul>
      
    </>
  )
}

export default LibrosLista
