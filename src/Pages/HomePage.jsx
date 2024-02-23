import { useRef } from "react"
import { setTrainesName } from "../store/slices/trainerName.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import './styles/HomePage.css'

const HomePage = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()
    const textInput = useRef()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(setTrainesName(textInput.current.value.trim()))
        navigate('/pokedex')
    }

  return (
    <div className="Home">
      <figure>
        <img src='../public/assets/images/titlePoke.png' alt="titlePoke" />
      </figure>
      <div className="greeting">
        <h1>¡Hola entrenador!</h1>
        <h2>Para poder comenzar, dame tu nombre</h2>
      </div>
      <form onSubmit={handleSubmit}>
          <input type="text" ref={textInput} placeholder="Tu nombre..."/>
          <button>Comenzar</button>
      </form>
      <footer>
        <div className="circle1"></div>
        <div className="circle2"></div>
      </footer>
    </div>
  )
}
export default HomePage