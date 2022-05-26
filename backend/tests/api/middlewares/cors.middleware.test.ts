import { cors } from '$/api/middlewares'
import { expect } from 'chai'
import sinon from 'sinon'

describe('api/middlewares/cors.middleware.ts', () => {
  it('should return cors headers', () => {
    const res = { setHeader: sinon.stub() }
    cors({} as any, res as any, sinon.stub() as any)
    const calls = res.setHeader.getCalls().flatMap(call => call.args)

    expect(calls.includes('access-control-allow-headers')).to.true
    expect(calls.includes('access-control-allow-methods')).to.true
    expect(calls.includes('access-control-allow-origin')).to.true
  })
})
