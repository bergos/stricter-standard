#!/usr/bin/env node

import { cli } from 'standard-engine'
import opts from '../options.js'

async function main () {
  cli(await opts())
}

main()
