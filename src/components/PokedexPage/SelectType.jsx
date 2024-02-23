import { useEffect, useRef } from "react"
import useFetch from "../../hooks/useFetch"
import { setPokemonName } from "../../store/slices/pokemonName.slice"
import { useDispatch } from "react-redux"
import './styles/SelectType.css'

const SelectType = ({ setSelecValue }) => {

    const [ types, getTypes] = useFetch()
    const dispatch = useDispatch()

    
    useEffect(() => {
      const url = 'https://pokeapi.co/api/v2/type'
      getTypes(url)
    }, [])

    const textSelect = useRef()
    
    const handleChange = () => {
      setSelecValue(textSelect.current.value)
      dispatch(setPokemonName(''))
    }

  return (
    <select onChange={handleChange} ref={textSelect} className="select__type">
        <option className="option__type" value="allPokemons">Todos los pokemones</option>
        {
          types?.results.map(type => (
            <option key={type.url} value={type.url}>{type.name}</option>
          ))
        }
    </select>
  )
}
export default SelectType