// import { mocked } from 'ts-jest/utils'

import { rephrase } from './analbumcover'

describe('rephrase', () => {
	let dictWords: string

	let nodehun = {
		isCorrect: (word: string): boolean => dictWords.split(' ').includes(word)
	}

	describe('the classic', () => {
		beforeAll(() => { dictWords = 'anal bum cover an album cover' })

		test('an album cover => anal bum cover', () => {
			expect(rephrase('an album cover', nodehun))
				.toEqual('anal bum cover')
		})
	})

	describe('horses and cows', () => {
		beforeAll(() => { dictWords = 'horse cow' })

		test('horsehorsehorse => horse horse horse', () => {
			expect(rephrase('horsehorsehorse', nodehun))
				.toEqual('horse horse horse')
		})

		test('when no rephrasing is valid it returns null', () => {
			expect(rephrase('mouse cheese', nodehun))
				.toBeNull()
		})
	})

	describe('with a minimum word length', () => {
		beforeAll(() => { dictWords = 'a b c' })

		test('of 1', () => {
			expect(rephrase('abc', nodehun, 1))
				.toEqual('a b c')
		})

		test('of 2', () => {
			expect(rephrase('abc', nodehun, 2))
				.toBeNull()
		})
	})

	describe('with capital letters and symbols', () => {
		beforeAll(() => { dictWords = 'poor attack poo rat tack' })

		test('lowercases and removes symbols', () => {
			expect(rephrase('Poor attack!', nodehun))
				.toEqual('poo rat tack')
		})
	})
})
