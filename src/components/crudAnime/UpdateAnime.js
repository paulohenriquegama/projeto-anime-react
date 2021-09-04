import React, { useState, useContext } from 'react'
import { AnimeContext } from '../../contexts/animeContext'
import FormAnime from '../formAnimes/FormAnime'
import AnimeProvider from '../../contexts/animeContext'


export default function AddAnime() {
  const { updateAnime } = useContext(AnimeContext)
  const context = useContext(AnimeContext)
  const [anime, setAnime] = useState(context.animes)
  const [nome,setNome] = useState("")


  console.log("Dentro update", anime)
  function handleChangeNome(e) {
    setAnime({
      ...anime,
      nome: nome
      
    })
  }
  
  function handleChangeImg(ev) {
    setAnime({
      ...anime,
      img: ev.target.value
    })
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    updateAnime(anime)
  }

  return (
    <AnimeProvider>
      <div>
        {context.editando 
        ? 
        <form>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}></input>
        </form>
        : null}
      </div>
    </AnimeProvider>
  )
}
