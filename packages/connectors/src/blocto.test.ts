import { config } from '@wagmi/test'
import { expect, test } from 'vitest'

import { blocto } from './blocto.js'

test('setup', () => {
  const connectorFn = blocto()
  const connector = config._internal.connectors.setup(connectorFn)
  expect(connector.name).toEqual('Blocto')
})
