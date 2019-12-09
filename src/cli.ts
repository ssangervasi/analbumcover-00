#!/usr/bin/env node
import { Command } from 'commander'
import { initNodehun } from './enspell'

import {
	rephrase
} from './analbumcover'

const main = () => {
	const program = new Command()
	program
		.arguments('<PHRASE>')
		.description('An album cover')
		.action(analbumcoverAction)
	program.parse(process.argv)
}

const analbumcoverAction = async (phrase: string): Promise<string> => {
	let nodehun = await initNodehun()
	return rephrase(phrase, nodehun)
}

main()
