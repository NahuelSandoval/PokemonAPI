import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import CardPokemon from '../components/CardPokemon'
import { PokemonContext } from '../context/PokemonContext'

const SearchPage = () => {

const location = useLocation()

const {globalPokemon} = useContext(PokemonContext)
//Filter por todo lo que incluya el termino de busqueda
const filteredPokemon = globalPokemon.filter(pokemon=> pokemon.name.includes(location.state.toLowerCase()))

  return (
    <div className='container'>
      <p className='p-search'>
        Se encontraron <span> {filteredPokemon.length} </span>
      </p>
<div className='card-list-pokemon container'>
{filteredPokemon.map(pokemon => <CardPokemon pokemon={pokemon} key={pokemon.id} />)}
</div>

    </div>
  )
}

export default SearchPage