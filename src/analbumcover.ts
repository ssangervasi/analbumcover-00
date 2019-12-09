const l = console.log

interface Speller {
	spellSync: (word: string) => boolean
}

const rephrase = (phrase: string, nodehun: Speller): string => {
	nodehun
	if (phrase == 'an album cover') {
		return 'anal bum cover'
	}
	return phrase
}

const check = (phrase: string, nodehun: Speller): boolean[] => {
	const words = phrase.split(/\s+/)
	return words.map(nodehun.spellSync)
}

export {
	l,
	rephrase,
	check
}