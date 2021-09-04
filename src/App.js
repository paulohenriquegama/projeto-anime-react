import { useContext, useState } from 'react'
import './App.css'
// import FormAnime from './components/formAnimes/FormAnime'
import AddAnime from './components/crudAnime/AddAnime'
import UpdateAnime from './components/crudAnime/UpdateAnime'
// import animes from './services/Animes'
import ListarAnimes from './components/listarAnimes/ListarAnimes'
import AnimeProvider from './contexts/animeContext'
import { AnimeContext } from './contexts/animeContext'

function App() {
  const [showForm,setShowForm] = useState(false)
  const context = useContext(AnimeContext)

  return (
    <div className="App">
      <AnimeProvider>
        <header>
          <h1>Animes</h1>
          <button className="btn-show"onClick={() => setShowForm(!showForm)}>{showForm ?"-" :"+"}</button>
          {showForm ? <AddAnime />: null}


        </header>
          <UpdateAnime/>
        <div className="bloco-card">
          <ListarAnimes />
        </div>
      </AnimeProvider>
    </div>
  )
}

export default App
