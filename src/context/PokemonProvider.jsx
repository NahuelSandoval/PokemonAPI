import React from 'react'
import { PokemonContext } from './PokemonContext'
import { useState, useEffect, } from 'react'
import { useForm } from '../Hooks/UseForm'

const PokemonProvider = ({ children }) => {

    const [globalPokemon, setGlobalPokemon] = useState([])
    const [allPokemon, setAllPokemon] = useState([])
    const [offset, setOffset] = useState(0)

    //Se usa CustomHook = useForm
    //Se desestructura entre los corchetes
    const { valueSearch, onInputChange, onResetForm } = useForm({
        valueSearch: ""
    })

    //Estados simples

    const [loading, setLoading] = useState(true)
    //Arranca activo por que arranca cargando
    const [active, setActive] = useState(false)
    //Para el estado de filtrado. Arranca oculto

    //LLamar con una funcion a 50 pokemones

    const getAllPokemon = async (limit = 50) => {

        const baseURL = "https://pokeapi.co/api/v2/"
        // Con esta constante se va buscar la API y me devuelve la data toda
        const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`)
        const data = await res.json();
        // Con esta funcion se va a buscar el array de pokemones (results)
        const promises = data.results.map(async pokemon => {
            const res = await fetch(pokemon.url)
            const data = await res.json();
            return data
        })
        // Como queda como una promesa se tiene que usar la clase Promise para traer las promesas
        const results = await Promise.all(promises)

        setAllPokemon([
            //Esparcimos con el operador spread (...), sumamos el array de allPokemon con el results
            ...allPokemon,
            ...results
        ])

        setLoading(false)
        //Cuando termina de cargar se vuelve false
    }

    //Funcion para llamar a todos los pokemones
    const getGlobalPokemon = async () => {

        const baseURL = "https://pokeapi.co/api/v2/"
        // Con esta constante se va buscar la API y me devuelve la data toda
        const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`)
        const data = await res.json();
        // Con esta funcion se va a buscar el array de pokemones (results)
        const promises = data.results.map(async pokemon => {
            const res = await fetch(pokemon.url)
            const data = await res.json();
            return data
        })
        // Como queda como una promesa se tiene que usar la clase Promise para traer las promesas
        const results = await Promise.all(promises)

        setGlobalPokemon(results)
        setLoading(false)
        //Cuando termina de cargar se vuelve false
    }

    // Llamar a un pokemon por el ID

    const getPokemonByID = async (id) => {
        // se va a buscar a la URL al pokemon por id
        const baseURL = "https://pokeapi.co/api/v2/"
        const res = await fetch(`${baseURL}pokemon/${id}`)
        const data = await res.json()
        return data
        //solo data por que es solo un pokemon
    }


    useEffect(() => {
        getAllPokemon()
    }, [offset])

    useEffect(() => {
        getGlobalPokemon()
    }, [])

    // aca se hace la funcion del boton cargar mas

    const onClickLoadMore = () => {
        setOffset(offset + 50)
    }

    // funcion de filtrado de checkbox

    const [typeSelected, setTypeSelected] = useState({
        grass: false,
        normal: false,
        fighting: false,
        flying: false,
        poison: false,
        ground: false,
        rock: false,
        bug: false,
        ghost: false,
        steel: false,
        fire: false,
        water: false,
        electric: false,
        psychic: false,
        ice: false,
        dragon: false,
        dark: false,
        fairy: false,
        unknow: false,
        shadow: false,
    })

    const [filteredPokemon, setFilteredPokemon] = useState([])

    const handleCheckBox = e => {

        setTypeSelected({
            ...typeSelected,
            [e.target.name]: e.target.checked
        })

        if (e.target.checked) {
            const filteredResults = globalPokemon.filter(pokemon =>
                pokemon.types
                    .map(type => type.type.name)
                    .includes(e.target.name));

            setFilteredPokemon([...filteredPokemon, ...filteredResults])
        } else {
            const filteredResults = filteredPokemon.filter(pokemon =>
                !pokemon.types
                    .map(type => type.type.name)
                    .includes(e.target.name))

            setFilteredPokemon([...filteredResults])
        }
    };

    return (
        <PokemonContext.Provider
            value={{
                valueSearch,   //Se trae lo de useForm
                onInputChange, //
                onResetForm,   //
                allPokemon,
                globalPokemon,
                getPokemonByID,
                onClickLoadMore,
                //esto es para el loading
                loading,
                setLoading,
                //esto es para el filter
                active,
                setActive,
                // filter para el contenedor de los checkbox
                handleCheckBox,
                filteredPokemon
            }}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider