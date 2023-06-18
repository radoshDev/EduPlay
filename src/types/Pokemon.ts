export type Pokemon = {
	name: string
	id: number
}

export type Species = {
	evolution_chain: {
		url: string
	}
	evolves_from_species: {
		name: string
		url: string
	}
}

export interface EvolutionChainResponse {
	baby_trigger_item?: any
	chain: Chain
	id: number
}

export interface Chain {
	evolution_details: EvolutionDetail[]
	evolves_to: Chain[]
	is_baby: boolean
	species: Trigger
}

interface EvolutionDetail {
	gender?: any
	held_item?: any
	item?: any
	known_move?: any
	known_move_type?: any
	location?: any
	min_affection?: any
	min_beauty?: any
	min_happiness?: any
	min_level: number
	needs_overworld_rain: boolean
	party_species?: any
	party_type?: any
	relative_physical_stats?: any
	time_of_day: string
	trade_species?: any
	trigger: Trigger
	turn_upside_down: boolean
}

interface Trigger {
	name: string
	url: string
}
