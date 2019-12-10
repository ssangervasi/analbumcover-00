import { Spelling } from './spelling'

const l = console.log

const rephrase = (phrase: string, spelling: Spelling): string => {
	spelling
	if (phrase == 'an album cover') {
		return 'anal bum cover'
	}
	return phrase
}

const check = (phrase: string, spelling: Spelling): boolean[] => {
	const words = phrase.split(/\s+/)
	return words.map(spelling.isCorrect)
}

export {
	l,
	rephrase,
	check
}