#!/usr/bin/env node
import * as commander from 'commander';
import { l, dank } from './main';

const program = new commander.Command();

program
  .arguments('[things...]')
  .action((things: Array<String>) => {
    l('things', JSON.stringify(things))
  })
program.parse(process.argv);

dank()