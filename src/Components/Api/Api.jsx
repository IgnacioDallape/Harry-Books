import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Api = () => {

    const [api, setApi] = useState([])

    const handleApi = () => {
        fetch('https://www.googleapis.com/books/v1/volumes?q=Harry%20Potter')
            .then((results) => results.json())
            .then((resultsApi) => {
                setApi(resultsApi.items)
                console.log(resultsApi)
            })
    }
    const eliminarDatos = () => {
        setApi([])
    }


  return (
    <>

        <div style={{padding:'1rem', display: 'flex',justifyContent:'center'}}>
            <button style={{border:'black 1px solid',padding:'1rem'}} onClick={handleApi}>
                Clickeame   
            </button>
            <button style={{border:'black 1px solid',padding:'1rem'}} onClick={eliminarDatos}>
                eliminar   
            </button>
        </div>
        <div>
            <ul style={{ margin: 0, padding: '3rem' }}>
                {
                api.length > 0 && (api.map((item, index) => {
                    return (
                        <li>
                    <Link to = {`/api/${index} `} style={{ gap: '2rem' }}>
                        {item.volumeInfo.title.toUpperCase()} 
                    </Link>
                    </li>
                    )

                    
                }))
                }
            </ul>
        </div>
                    
    </>
  )
}

export default Api