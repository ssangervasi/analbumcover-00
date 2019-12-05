import { l } from './main'

describe('l', () => {
	test('logs', () => {
		let logSpy = jest.spyOn(global.console, 'log')
		let called = false
		logSpy.mockImplementation(() => { called = true })
		
		l('some log')
		
		expect(called).toBe(true)
		logSpy.mockRestore()
	})
})