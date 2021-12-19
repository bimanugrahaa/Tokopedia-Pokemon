import { useQuery } from "@apollo/client";
import { GetPokemonDetail, GetPokemonList } from "../graphql/query";

function useGetPokemonList(limit, offset) {
    const {data: pokemonDataList, loading: pokemonDataLoading, error: pokemonDataerror} = useQuery(GetPokemonList, {
        variables:{
            limit,
            offset
        }
    })

    return {
        pokemonDataList,
        pokemonDataLoading,
        pokemonDataerror
    }
}

function useGetPokemonDetail(name) {
    const {data: detailData, loading: detailLoading, error: detailError} = useQuery(GetPokemonDetail, {
        variables: {
            name
        }
    })

    return {
        detailData,
        detailLoading,
        detailError
    }
}

export { useGetPokemonList, useGetPokemonDetail }