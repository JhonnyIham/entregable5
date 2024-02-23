import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import './styles/PokeCard.css'

const PokeCard = ({ url }) => {

    const [ pokemon, getPokemon ] = useFetch()

    const navigate = useNavigate()

    const urls = `poke__card`

    useEffect(() => {
        getPokemon(url)
    }, [])
    
    const handleClick = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }
    
  return (
    <article onClick={handleClick} className={`poke__card ${pokemon?.types[0].type.name}__border`}>
      <div className={pokemon?.types[0].type.name}></div>
      <figure>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemonphoto" />
      </figure>
      <h3 className={`${pokemon?.types[0].type.name}__color`}>{pokemon?.name}</h3>
      <ul className="poke__types"> 
        {
          pokemon?.types.map(type => (
            <li key={type.type.url} className={`slote${type.slot}`}> {type.type.name}</li>
          ))
        }
      </ul>
      <p>type</p>
      <hr />
      <ul className="poke__stats">
        {
          pokemon?.stats.map(stat =>(
            !stat.stat.name.includes('special')&&
            <li key={stat.stat.url}>{stat.stat.name} <span className={`${pokemon?.types[0].type.name}__color`}>{stat.base_stat}</span></li>
          ))
        }
      </ul>
    </article>
  )
}
export default PokeCard