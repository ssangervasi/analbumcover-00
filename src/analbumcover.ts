import { Spelling } from './spelling'

interface Rephrasing {
	unusedChars: string[]
	usedWords: string[]
}

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

		eachSlice(unusedChars, (nextSlice, charsRemaining) => {
			const nextWord = nextSlice.join('')

			const isTooShort = nextWord.length < minWordLength
			if (isTooShort) { return }

			const isMisspelled = !spelling.isCorrect(nextWord)
			if (isMisspelled) { return }

			queue.push({
				usedWords: [...usedWords, nextWord],
				unusedChars: charsRemaining
			})
		})
	}
	return null
}

const initialRephrasing = (phrase: string): Rephrasing => {
	const cleanedChars = phrase.split('').filter(c => /[a-zA-Z]/.test(c))
	return {
		unusedChars: cleanedChars,
		usedWords: []
	}
}

type SliceCallback<T> = (slice: Array<T>, remaining: Array<T>) => void
const eachSlice = <T>(items: Array<T>, callback: SliceCallback<T>): void => {
	items.forEach((_, i) => {
		const nextSlice = items.slice(0, i + 1)
		const itemsRemaining = items.slice(i + 1)
		callback(nextSlice, itemsRemaining)
	})
}

export {
	Rephrasing,
	rephrase,
	initialRephrasing
}