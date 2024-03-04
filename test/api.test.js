import { strictEqual } from 'assert'
import { basename, resolve } from 'path'
import { describe, it } from 'mocha'
import stricterStandard from '../index.js'
import examples from './support/examples.js'

describe('api', () => {
  for (const example of examples) {
    it(`should find error in example: ${basename(example.filename, '.example.js')}`, () => {
      stricterStandard.lintFiles([resolve('./test/support/', example.filename)], {}, (err, { results }) => {
        if (err) {
          throw err
        }

        const result = results[0]
        const message = result.messages[0]
        const line = message.line
        const text = message.message

        strictEqual(line, example.line)
        strictEqual(text, example.message)
      })
    })
  }
})
