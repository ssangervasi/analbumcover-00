#!/usr/bin/env node

new Promise(resolve => {
  console.log('Gonna do it!')
  setTimeout(resolve, 20_000)
})
.then(() => { console.log('We did it!') })

// import * as commander from 'commander';

// import { l, demo } from './main';

// const program = new commander.Command();

// program
// 	.arguments('[things...]')
// 	.action((things: Array<String>) => {
// 		l('things', JSON.stringify(things))
// 	})
// program.parse(process.argv);

// demo()