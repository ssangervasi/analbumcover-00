// import { mocked } from 'ts-jest/utils'

import { rephrase } from './analbumcover'

describe('rephrase', () => {
	let dictWords: string[]
	beforeEach(() => { dictWords = [] })

	let nodehun = {
		isCorrect: (word: string): boolean => dictWords.includes(word)
	}

	test('an album cover => anal bum cover', () => {
		dictWords = 'anal bum cover an album cover'.split(' ')
		expect(rephrase('an album cover', nodehun))
			.toEqual('anal bum cover')
	})

	test('horsehorsehorse => horse horse horse', () => {
		dictWords = 'horse cow'.split(' ')
		expect(rephrase('horsehorsehorse', nodehun))
			.toEqual('horse horse horse')
	})

	test('when no rephrasing is valid it return null', () => {
		dictWords = 'horse cow'.split(' ')
		expect(rephrase('an album cover', nodehun))
			.toEqual(null)
	})
})