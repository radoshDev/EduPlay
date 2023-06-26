import type { Pokemon, Chain, EvolutionChainResponse, Species } from "@/types/Pokemon"
import axios from "axios"

type PokemonsResponse = {
	data: {
		pokemons: {
			results: Pokemon[]
		}
	}
}

const POKEMONS_AMOUNT = 630

const g_url = "https://graphql-pokeapi.graphcdn.app/"

export const getPokemons = async (): Promise<Pokemon[]> => {
	const result = await axios.post<PokemonsResponse>(g_url, {
		query: `query getPokemons {
			pokemons(limit: ${POKEMONS_AMOUNT}, offset: 0) {
				results{
					id
					name
				}
			}
		}`,
	})
	return result.data.data.pokemons.results
}

export const getPokemonSpecies = async (id: Pokemon["id"]): Promise<Species> => {
	const result = await axios.get<Species>(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
	return result.data
}

export const getEvolutionChain = async (url: string): Promise<Chain> => {
	const result = await axios.get<EvolutionChainResponse>(url)
	return result.data.chain
}
