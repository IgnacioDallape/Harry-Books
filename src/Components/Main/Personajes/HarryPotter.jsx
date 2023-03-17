import React from 'react'

const HarryPotter = () => {
  return (
    <div>
        <h1 style={{display:'flex',justifyContent:'center', paddingTop:'3rem'}}>Harry Potter</h1>
        <div style={{display:'flex',justifyContent:'center', paddingTop:'3rem', height:'28rem'}}>
            <img src="https://i.pinimg.com/736x/87/9a/b1/879ab1302c31cf1892c4cde5cd5493b1.jpg" alt="" style={{width:'20rem', borderRadius:'1rem'}}/>
        </div>
        <div style={{display:'flex',justifyContent:'center', paddingTop:'3rem', width:'305em'}} className='container'>

            <h5 >
            Harry Potter es el personaje principal de la saga de libros y películas que llevan su nombre. Es un joven mago que estudia en la escuela de magia y hechicería de Hogwarts, donde se enfrenta a numerosos desafíos y aventuras junto a sus amigos Ron Weasley y Hermione Granger. Harry es conocido por su valentía y astucia, así como por su famosa cicatriz en forma de rayo en la frente.
            </h5>
        </div>
    </div>
  )
}

export default HarryPotter