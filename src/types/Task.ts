export type LetterType = "vowels" | "consonants" | "mix"
export type SyllableType = "vowelFirst" | "consonantFirst" | "mix"
export type WordHeader = "three" | "four" | "five" | "six"
export type WordType = WordHeader | "mix"

export type TasksType = {
	letters: LetterType
	syllables: SyllableType
	words: WordType
}

export type TaskType = keyof TasksType

type Image = {
	pokemonId: number
	name: string
}

export type Task = {
	title: string
	img: Image
}

export type MainTask<T extends string = string> = Task & {
	subtasks: Record<T, Task>
}

export type Tasks = {
	[P in keyof TasksType]: MainTask<TasksType[P]>
}

export type ExerciseScore = {
	result: number
	action: "add" | "subtract"
	exercises: string[]
	index: number
}

export type TasksScore = {
	[P in keyof TasksType]: { [K in TasksType[P]]?: ExerciseScore }
}

export type WordsList = Record<WordHeader, string[]>
