import engine from 'standard-engine'
import opts from './options.js'

async function init () {
  return new engine.StandardEngine(await opts())
}

export default init
