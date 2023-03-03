import React from 'react'
import { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'

const FilterBar = () => {

  const { active, handleCheckbox } = useContext(PokemonContext)


  return (
    <div className={`container-filters ${active ? "active" : ""}`}>
      <div className='filter-by-type'>
        <span>
          Tippo
        </span>

        <div className="group-type">
          <input onChange={handleCheckbox} type="checkbox" name="grass" id="grass" />
          <label htmlfor="grass">Planta</label>
        </div>
        <div className="group-type">
          <input onChange={handleCheckbox} type="checkbox" name="fire" id="fire" />
          <label htmlfor="fire">Fuego</label>
        </div>
        <div className="group-type">
          <input onChange={handleCheckbox} type="checkbox" name="bug" id="bug" />
          <label htmlfor="bug">Bicho</label>
        </div>
        <div className="group-type">
          <input onChange={handleCheckbox} type="checkbox" name="fairy" id="fairy" />
          <label htmlfor="fairy">Hada</label>
        </div>
        <div className="group-type">
          <input onChange={handleCheckbox} type="checkbox" name="dragon" id="dragon" />
          <label htmlfor="dragon">Dragón</label>
        </div>
        <div className="group-type">
          <input onChange={handleCheckbox} type="checkbox" name="shadow" id="shadow" />
          <label htmlfor="shadow">Fantasma</label>
        </div>
        <div className="group-type">
          <input onChange={handleCheckbox} type="checkbox" name="ground" id="ground" />
          <label htmlfor="ground">Tierra</label>
        </div>
        <div className="group-type">
          <input onChange={handleCheckbox} type="checkbox" name="normal" id="normal" />
          <label htmlfor="normal">Normal</label>
        </div>
        <div className="group-type">
          <input onChange={handleCheckbox} type="checkbox" name="psychic" id="psychic" />
          <label htmlfor="psychic">Psíquico</label>
        </div>
        <div className="group-type">
          <input onChange={handleCheckbox} type="checkbox" name="steel" id="steel" />
          <label htmlfor="steel">Acero</label>
        </div>
        <div className="group-type">
          <input onChange={handleCheckbox} type="checkbox" name="dark" id="dark" />
          <label htmlfor="dark">Siniestro</label>
        </div>
        <div className="group-type">
          <input onChange={handleCheckbox} type="checkbox" name="electric" id="electric" />
          <label htmlfor="electric">Eléctrico</label>
        </div>
        <div className="group-type">
          <input onChange={handleCheckbox} type="checkbox" name="fighting" id="fighting" />
          <label htmlfor="fighting">Lucha</label>
        </div>
        <div className="group-type">
          <input onChange={handleCheckbox} type="checkbox" name="flying" id="flying" />
          <label htmlfor="flying">Volador</label>
        </div>
        <div className="group-type">
          <input onChange={handleCheckbox} type="checkbox" name="ice" id="ice" />
          <label htmlfor="ice">Hielo</label>
        </div>
        <div className="group-type">
          <input onChange={handleCheckbox} type="checkbox" name="poison" id="poison" />
          <label htmlfor="poison">Veneno</label>
        </div>
        <div className="group-type">
          <input onChange={handleCheckbox} type="checkbox" name="rock" id="rock" />
          <label htmlfor="rock">Roca</label>
        </div>
        <div className="group-type">
          <input onChange={handleCheckbox} type="checkbox" name="water" id="water" />
          <label htmlfor="water">Agua</label>
        </div>
      </div>
    </div>
  )
}

export default FilterBar