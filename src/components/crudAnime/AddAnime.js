import React, { useState, useContext } from 'react'
import { AnimeContext } from '../../contexts/animeContext'
import FormAnime from '../formAnimes/FormAnime'

export default function AddAnime() {
  const { saveAnime } = useContext(AnimeContext)
  const [anime, setAnime] = useState()

  
  function handleChangeNome(e) {
    setAnime({
      ...anime,
      nome: e.target.value
      
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
    saveAnime(anime)
  }

  return (
    <div>
      <FormAnime onsubmit={handleSubmit} onchangeNome={handleChangeNome} onchangeImg={handleChangeImg} />
    </div>
  )
}
