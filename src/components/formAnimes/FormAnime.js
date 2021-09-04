import React, { useState, useContext } from 'react'
// import Animes from '../../services/Animes'
import './formAnime.css'
// import { AnimeContext } from '../../contexts/animeContext'

export default function FormAnime(props) {
  // const {saveAnime} = useContext(AnimeContext)
  const [nome,setNome] = useState("")

  function limpar() {
    document.getElementById('form').reset()
  }

  return (
    <div className="bloco-form">
      <form onSubmit={props.onsubmit} id="form">
        <label>Nome:</label>
        <br />
        <input
          type="text"
          id="nome"
          
          onChange={props.onchangeNome}
        ></input>
        <br />
        <label>Imagem URL:</label>
        <br />

        <input type="text" id="img" onChange={props.onchangeImg}></input>
        <br />
        <button className="btn-padrao" onClick={limpar}>
          Salvar
        </button>
      </form>
    </div>
  )
}
