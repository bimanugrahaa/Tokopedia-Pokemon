import { useQuery } from "@apollo/client";
import { GetPokemonDetail, GetPokemonList } from "../graphql/query";

function useGetPokemonList(Limit, Offset) {
    const [getPokemonList, {data: pokemonDataList, loading: pokemonDataLoading, error: pokemonDataerror}] = useQuery(GetPokemonList, {
        variables:{
            Limit,
            Offset
        }
    })

    return {
        getPokemonList,
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