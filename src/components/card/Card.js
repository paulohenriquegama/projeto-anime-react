import './card.css'
import React, { useContext } from 'react'
import { AnimeContext } from '../../contexts/animeContext'
import AnimeProvider from '../../contexts/animeContext'


const Card = props => {
  const {editarOn} = useContext(AnimeContext)
  

  return (
    <AnimeProvider>
      <div className="card">
        <div className="card-titulo">
          <h3>{props.titulo}</h3>
        </div>
        <div className="card-img">
          <img src={props.img} alt={props.titulo} />

        </div>
        <div className="card-button">
          <button onClick={editarOn}>Editar</button>
        </div>
      </div>
    </AnimeProvider>
  )
}

export default Card
