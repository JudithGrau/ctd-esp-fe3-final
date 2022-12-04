import React from 'react'
import Card from '../Components/Card'
import Navbar from '../Components/Navbar'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  return (
    <main className="" >
      <h1>Home</h1>
      <Navbar />
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home