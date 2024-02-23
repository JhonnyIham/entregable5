import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import PokedexPage from './Pages/PokedexPage'
import PokeIdPage from './Pages/PokeIdPage'
import ProtectedRoutes from './Pages/ProtectedRoutes'

function App() {



  return (
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<PokedexPage />}/>
          <Route path='/pokedex/:id' element={<PokeIdPage />}/>
        </Route>
      </Routes>
  )
}

export default App
