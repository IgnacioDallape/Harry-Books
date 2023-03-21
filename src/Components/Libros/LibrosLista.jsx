import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../Libros/Json/data.json';



const LibrosLista = () => {
  const [api, setApi] = useState([])
  const [json, setJson] = useState(data)

  useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=Harry%20Potter')
      .then((results) => results.json())
      .then((resultsApi) => {
        setApi(resultsApi.items)
        console.log(resultsApi)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])
    
  return (
    <>
      <ul style={{ margin: 0, padding: '3rem' }}>
        {api.length > 0 && (
          <>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap:'wrap', justifyContent:'space-evenly', padding:'3rem', gap:'4rem'}} className='backgroundBooks'>
              {api.map((item, index) => {
                const thumbnail = item?.volumeInfo?.imageLinks?.thumbnail;
                return (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem',flexWrap:'wrap' }} className='aumentoImg'>
                    <div style={{paddingBottom:'2rem', paddingLeft:'3rem'}} >
                      {thumbnail ? (
                        <>
                        <img src={thumbnail} alt={`Imagen ${index}`} style={{ width: '250px', height: 'auto', marginRight: '2rem',borderRadius:'0.5rem', gap:'1rem'}} />
                        <li to={`/api/${index}`} style={{ gap: '2rem', width:'10rem', display:'flex',justifyContent:'center', flexDirection:'column' }} className='nameBooks'>

                          <h6 style={{fontFamily: 'Cinzel Decorative', fontWeight:'bold',width:'5rem',display:'flex', justifyContent:'flex-start'}}>{item.volumeInfo.title.toUpperCase()}</h6>
                          <h6 style={{fontFamily: 'Cinzel Decorative', fontWeight:'bold'}}>{json[index].price} </h6>
                        </li>
                        
                        </>
                      ) : (
                        <div/>
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
