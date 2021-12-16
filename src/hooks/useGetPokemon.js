import { useQuery } from "@apollo/client";
import { GetPokemonDetail, GetPokemonList } from "../graphql/query";

function useGetPokemonList(limit, offset) {
    const {data: pokemonDataList, loading: pokemonDataLoading, error: pokemonDataerror} = useQuery(GetPokemonList, {
        variables:{
            limit,
            offset
        }
    })

    // console.log("limit", Limit)
    // console.log("offset", Offset)

    return {
        pokemonDataList,
        pokemonDataLoading,
        pokemonDataerror
    }
}

function useGetPokemonDetail(Name) {
    const {data: detailData, loading: detailLoading, error: detailError} = useQuery(GetPokemonDetail, {
        variables: {Name}
    })

    return {
        detailData,
        detailLoading,
        detailError
    }
}

export { useGetPokemonList, useGetPokemonDetail }