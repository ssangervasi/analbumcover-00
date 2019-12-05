import { l } from './main'

describe('l', () => {
	test('logs', () => {
		expect(l).toBe(console.log)	
	})
})