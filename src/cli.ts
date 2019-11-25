#!/usr/bin/env node
import { Command } from 'commander';

import { l, demo } from './main';

const main = () => {
  const program = new Command()
  program
    .arguments('<PHRASE>')
    .description('An album cover')
    .action(analbumcoverAction)
  program
    .command('tick <TICKS>')
    .description('Tick every second for TICKS seconds.')
    .action(tickAction)
  program.parse(process.argv)
}

const tickAction = (rawTicks: string) => {
  const ticks: number = parseInt(rawTicks) || 0
  let tickCount = 0
  let tickTimeout: ReturnType<typeof setTimeout> | null = null;
  const onInterval = () => {
    if (!tickTimeout) { return }
    if (tickCount >= ticks) {
      clearInterval(tickTimeout)
      return
    }
    tickCount += 1
    l(`Tick! ${tickCount}`)
  }
  tickTimeout = setInterval(onInterval, 1_000)
}

const analbumcoverAction = (phrase: string) => {
  l(phrase)
  l('TODO')
}

main()
