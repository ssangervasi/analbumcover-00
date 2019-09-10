#!/usr/bin/env node
import * as commander from 'commander';

const program = new commander.Command();

program
  .arguments('[things...]')
  .action((things: Array<String>) => {
    console.log('things', JSON.stringify(things))
  })


program.parse(process.argv);