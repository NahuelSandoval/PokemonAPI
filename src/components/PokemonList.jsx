import React from 'react'
import { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import CardPokemon from './CardPokemon'
import Loader from './Loader'

const PokemonList = () => {

  const { allPokemon, loading, filteredPokemon  } = useContext(PokemonContext)

  return (
    <>
      {
        loading ? (
          <Loader />
        ) : (
          <div className="card-list-pokemon container">
            {
              filteredPokemon.length ? (
                <>
                  {filteredPokemon.map(pokemon => <CardPokemon pokemon={pokemon} key={pokemon.id} />)}
                </>
              ) : (
                <>
                  {allPokemon.map(pokemon => <CardPokemon pokemon={pokemon} key={pokemon.id} />)}
                </>
              )
            }
          </div>
        )
      }
    </>
  )
}

export default PokemonList