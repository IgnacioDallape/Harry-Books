import { getFirestore, getDocs, doc, collection } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

const firebaseConfig = { /*...configuración de Firebase...*/ };

const LibrosLista = () => {
  const { cart, precioTotal, addToCart, removeFromCart, clearCart, getTotalQuantity, getTotal } = useContext(CartContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const harryBooks = collection(db, 'items');
    getDocs(harryBooks).then((snapshot) => {
      setItems(snapshot.docs.map((item) => ({ id: item.id, ...item.data() })));
    });
  }, []);
  
  return (
    
    <div style={{display:'flex', gap:'8rem',flexWrap:'wrap', paddingTop:'4rem', justifyContent:'center'}}>
      {items && items.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.img} alt='' style={{width:'10rem', height:'15rem', borderRadius:'1rem'}}/>
            <div style={{ gap: '2rem', width: '10rem', display: 'flex', justifyContent: 'center', flexDirection: 'column',paddingTop:'1rem' }} className='nameBooks'>
              <h6 style={{ fontFamily: 'Cinzel Decorative', fontWeight: 'bold', width: '5rem', display: 'flex', justifyContent: 'flex-start' }}>{item.title.toUpperCase()}</h6>
              <h6 style={{ fontFamily: 'Cinzel Decorative', fontWeight: 'bold' }}>$ {item.price} </h6>
              <button onClick={() => addToCart(item, 1)} style={{ borderRadius: '1rem', backgroundColor: '#5C2B29', border: '2px solid #8B0000', color: 'yellow' }} className='aumentoImg'> Agregar al carrito</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LibrosLista;

