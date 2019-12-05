import { initNSpell } from './enspell'

const l = console.log
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