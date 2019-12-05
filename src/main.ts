import { initNSpell } from './enspell'

const l = (...args) => {console.log(...args)}
// const isCorrect = (word: string) => enspell.correct(word)
const demo = () => {
	initNSpell().then(() => {
		l(`
			wat
		`)
	})
}

export {
	demo,
	l
}