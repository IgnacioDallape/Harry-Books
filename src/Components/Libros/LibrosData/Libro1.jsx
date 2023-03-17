import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Libro1 = (props) => {   //recibe el index de la api
    const id = useParams()
    const [params, setParams] = useState([])

    useEffect(() => {
      fetch('https://www.googleapis.com/books/v1/volumes?q=Harry%20Potter')
      .then(res => res.json())
      .then(res => setParams(res.title))
      console.log(setParams)
    }, [id])
    


  return (
    <>  
    
    
    </>
  )
}

export default Libro1