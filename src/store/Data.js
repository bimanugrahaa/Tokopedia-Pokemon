import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const myPokemon = [{
    myID: uuidv4(),
    id: "",
    name: "",
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
                myID: uuidv4(),
                ...action.payload,
            }

            state.myPokemon = [...state.myPokemon, newPokemon]
        }
    }
})

export const { addMyPokemon } = Data.actions;
export default Data.reducer