import React from 'react'

const Hermione = () => {
  return (
    <div>
        <h1 style={{display:'flex',justifyContent:'center', paddingTop:'3rem', fontFamily: 'Cinzel Decorative', fontWeight:'bold'}}>Hermione</h1>
        <div style={{display:'flex',justifyContent:'center', paddingTop:'3rem' , height:'29rem'}}>
            <img src="https://i.pinimg.com/564x/77/32/d7/7732d7e03a23b9b09978892646f55cac.jpg" alt="" style={{width:'20rem', borderRadius:'1rem'}}/>
        </div>
        <div style={{display:'flex',justifyContent:'center', paddingTop:'3rem', width:'305em'}} className='container'>

            <h5 style={{fontFamily: 'Cinzel Decorative', fontWeight:'bold'}}>
            Hermione Granger es uno de los personajes principales de la serie de libros y películas de Harry Potter. Es una inteligente y decidida estudiante de magia en Hogwarts, quien se hace amiga cercana de Harry y Ron. Hermione es conocida por ser muy estudiosa y por tener un gran conocimiento sobre magia y hechicería. También es una defensora de los derechos de los elfos domésticos y otras criaturas mágicas, y lucha por la igualdad y la justicia en el mundo mágico.
            </h5>
        </div>
    </div>
  )
}

export default Hermione