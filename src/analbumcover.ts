import { Spelling } from './spelling'

const rephrase = (
	phrase: string,
	spelling: Spelling,
	minWordLength: number = 1
): string | null => {
	const queue: Rephrasing[] = [initialRephrasing(phrase)]
	while (queue.length > 0) {
		let { usedWords, unusedChars } = (queue.shift() as Rephrasing)

		if (unusedChars.length == 0) {
			let finalPhrase = usedWords.join(' ')
			if (finalPhrase != phrase) { return finalPhrase }
		}

		unusedChars.forEach((_, i) => {
			const nextWord = unusedChars.slice(0, i + 1).join('')

			const isTooShort = nextWord.length < minWordLength
			if (isTooShort) { return }

			const isMisspelled = !spelling.isCorrect(nextWord)
			if (isMisspelled) { return }

			queue.push({
				usedWords: [...usedWords, nextWord],
				unusedChars: unusedChars.slice(i + 1)
			})
		})
	}
	return null
}

interface Rephrasing {
	unusedChars: string[]
	usedWords: string[]
}

const initialRephrasing = (phrase: string): Rephrasing => {
	const cleanedChars = phrase.split('').filter(c => /[a-zA-Z]/.test(c))
	return {
		unusedChars: cleanedChars,
		usedWords: []
	}
}

export {
	rephrase
}