import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const myPokemon = [{
    index: 0,
    id: 0,
    name: "",
    nickname: "",
    image: ""
}]

export const Data = createSlice({
    name: "myPokemon",
    initialState: {
        myPokemon: myPokemon
    },
    reducers: {
        addMyPokemon: (state, action) => {
            const newPokemon = {
                ...action.payload,
            }
            state.myPokemon = [...state.myPokemon, newPokemon]
        },
        deleteMyPokemon: (state, action) => {
            state.myPokemon = state.myPokemon.filter((pokemon) => {
                return pokemon.index !== action.payload
            })
        }
    }
})

export const { addMyPokemon, deleteMyPokemon } = Data.actions;
export default Data.reducer