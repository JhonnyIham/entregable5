import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import { useParams } from "react-router-dom"
import './styles/PokeIdPage.css'

const PokeIdPage = () => {

    const [ pokeData, getPokeData ] = useFetch()
    const param = useParams()

    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon/${param.id}`
        getPokeData(url)
    }, [])

  return (
    <div className="pokeId">
      <section className="section1">
        <div className="header__pokeID">
          <figure className="figure__pokeId">
            <img src={pokeData?.sprites.other['official-artwork'].front_default} alt="pokemon photo" />
          </figure>
          <div className={`backgoundHeader__pokeId ${pokeData?.types[0].type.name}`}></div>
          <h4 className={`${pokeData?.types[0].type.name}__color number__pokeId`}># {param.id}</h4>
        </div>
        <section className="nameDimensions__pokeId">
          <div className="name__pokeId">
            <h3 className={`${pokeData?.types[0].type.name}__color`}>{pokeData?.name}</h3>
          </div>
          <hr className="hr__name"/>
          <div className="dimensions">
            <p>Weight <span>{pokeData?.weight}</span></p>
            <p>Height <span>{pokeData?.height}</span></p>
          </div>
        </section>
        <section className="typeHabi__pokeId">
          <div>
            <h3>Tipo</h3>
            <ul>
              {
                pokeData?.types.map(type => (
                  <li key={type.type.url} className={`${type.type.name} li_color`}>{type.type.name}</li>
                ))
              }
            </ul>
          </div>
          <div>
            <h3>Habilidades</h3>
            <ul>
              {
                pokeData?.abilities.map(ability => (
                  <li key={ability.ability.url}>{ability.ability.name}</li>
                ))
              }
            </ul>
          </div>
        </section>
        <section className="stats__pokeId">
          <div className="stats__title">
            <h2>Stats</h2>
            <figure className="stats__figure">
              <img src='../public/assets/images/pokeball.webp'   alt="pokeball" />
            </figure>
          </div>
          <hr className="hr__stats"/>
          <ul className="ul__stats">
          {
            pokeData?.stats.map(stat =>(
              <div key={stat.stat.url}>
                <li>{stat.stat.name}: <span>{stat.base_stat}/150</span></li>
                <div className="stat__bar">
                  <div className="stat__barProgress" style={{ width: `${((stat.base_stat)/150)*100}%`}}></div>
                </div>
              </div>
            ))
          }
          </ul>
        </section>
      </section>
      <section className="section2">
        <div className="move__title">
          <h2>Movements</h2>
          <figure className="stats__figure">
              <img src='../public/assets/images/pokeball.webp'   alt="pokeball" />
          </figure>
        </div>
        <hr className="hr__move"/>
        
        <ul>
          {
            pokeData?.moves.map(move => (
              <li key={move.move.url}>{move.move.name}</li>
            ))
          }
        </ul>
      </section>
    </div>
  )
}
export default PokeIdPage