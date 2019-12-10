#!/usr/bin/env node
import { Command } from 'commander'
import { initNodehun, NodehunSpelling } from './spelling'

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
	const nodehun = await initNodehun()
	const spelling = new NodehunSpelling(nodehun)
	return rephrase(phrase, spelling)
}

main()
