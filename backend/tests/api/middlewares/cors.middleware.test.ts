import { expect } from 'chai'
import sinon from 'sinon'
import { corsMiddleware } from '../../../src/api/middlewares'

describe('api/middlewares/cors.middleware.ts', () => {
  it('should return cors headers', () => {
    const res = { setHeader: sinon.stub() }
    corsMiddleware({} as any, res as any, sinon.stub() as any)
    const calls = res.setHeader.getCalls().flatMap(call => call.args)

    expect(calls.includes('access-control-allow-headers')).to.true
    expect(calls.includes('access-control-allow-methods')).to.true
    expect(calls.includes('access-control-allow-origin')).to.true
  })
})
