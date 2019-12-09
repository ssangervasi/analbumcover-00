// import { mocked } from 'ts-jest/utils'

import { l, rephrase, check } from './analbumcover'

test('l', () => {
	expect(l).toBe(console.log)
})

describe('check', () => {
	let dictWords = 'an album cover'.split(' ')
	let nodehun = {
		spellSync: (word: string): boolean => dictWords.includes(word)
	}

	test('an album cover', () => {
		expect(check('an album cover', nodehun))
			.toEqual([true, true, true])
	})

	test('xorx borx', () => {
		expect(check('xorx borx', nodehun))
			.toEqual([false, false])
	})
})

describe('rephrase', () => {

	test('an album cover', () => {
		let dictWords = 'anal bum cover an album cover'.split(' ')
		let nodehun = {
			spellSync: (word: string): boolean => dictWords.includes(word)
		}
		expect(rephrase('an album cover', nodehun))
			.toEqual('anal bum cover')
	})
})