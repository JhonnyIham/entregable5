import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPokemonName } from "../store/slices/pokemonName.slice"
import useFetch from "../hooks/useFetch"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"
import './styles/PokedexPage.css'
import Pagination from "../components/PokedexPage/Pagination"

const PokedexPage = () => {

    const [selecValue, setSelecValue] = useState('allPokemons')
    const trainerName = useSelector(store => store.trainerName)
    const pokemonName = useSelector(store => store.pokemonName)
    const dispatch = useDispatch()
    const [pokemons, getPokemons, getPerType] = useFetch()
    const [pokemonsPerPage, setPokemonsPerPage] = useState(16)
    const [currentPage, setCurrentPage] = useState(1)

    const lastIndex = currentPage * pokemonsPerPage
    const firstIndex = lastIndex - pokemonsPerPage

    //1302
    
    useEffect(() => {
        if (selecValue === 'allPokemons') {
            const url = 'https://pokeapi.co/api/v2/pokemon/?limit=1302'
            getPokemons(url)
        } else {
            getPerType(selecValue)
        }
    }, [selecValue])
   
    const textInput = useRef()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(setPokemonName(textInput.current.value.trim().toLowerCase()))
        textInput.current.value = ''
    }

    const cbFilter = () => {
        if (pokemonName) {
            return pokemons?.results.filter(element => element.name.includes(pokemonName))
        } else {
            return pokemons?.results
        }
    }

    const totalPokemons = cbFilter()?.length
    
  return (
    <div className="pokedex">
        <section className="poke__header">
            <h3><span>Bienvenido {trainerName}, </span>aquí podrás encontrar tu pokemón favorito</h3>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" ref={textInput} placeholder="Busca un pokemon"/>
                    <button>Buscar</button>
                </form>
                <SelectType
                    setSelecValue = {setSelecValue}
                />
            </div>
        </section>
        <Pagination 
            pokemonsPerPage = {pokemonsPerPage}
            currentPage = {currentPage}
            setCurrentPage = {setCurrentPage}
            totalPokemons = {totalPokemons}
        />
        <section className="poke__container">
            {
                cbFilter()?.map(poke => (
                    <PokeCard 
                    key = {poke.url}
                    url = {poke.url}
                    />
                )).slice(firstIndex, lastIndex)
                }
        </section>
        <br />
        <Pagination 
            pokemonsPerPage = {pokemonsPerPage}
            currentPage = {currentPage}
            setCurrentPage = {setCurrentPage}
            totalPokemons = {totalPokemons}
        />
    </div>
  )
}
export default PokedexPage