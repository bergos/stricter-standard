import { readFile } from 'fs'
import { promisify } from 'util'

async function opts () {
  const pkg = JSON.parse(await promisify(readFile)('./package.json'))

  return {
    // cmd, homepage, bugs all pulled from package.json
    cmd: 'stricter-standard',
    version: pkg.version,
    homepage: pkg.homepage,
    bugs: pkg.bugs.url,
    tagline: 'Stricter Standard',
    eslint: await import('eslint'),
    eslintConfig: {
      overrideConfigFile: (new URL('eslintrc.json', import.meta.url)).pathname
    }
  }
}

export default opts
