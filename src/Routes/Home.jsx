import {React, useContext} from 'react'
import Card from '../Components/Card'

import { ContextGlobal } from '../Components/utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = ( ) => {

  const {state } = useContext(ContextGlobal)
  const data = state.data;
 


  return (
    <main className="card-container" >
      <div className='card-grid'>
        {
          data.map( (user) => ( 
            <Card name={user.name} username={user.username} id={user.id} key={user.id}  />
          ))
        }

        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home