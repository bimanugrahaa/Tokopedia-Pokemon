import { gql } from "@apollo/client";

const GetPokemonList = gql`
query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      nextOffset
      prevOffset
      status
      message
      results {
        url
        name
        image
      }
    }
}
`

const GetPokemonDetail = gql`
query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
      stats {
        stat {
          name
        }
        base_stat
      }
    }
}
`

export { GetPokemonList, GetPokemonDetail}