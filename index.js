import { linter as Linter } from 'standard-engine'
import opts from './options.js'

async function init () {
  return new Linter(await opts())
}

export default init
