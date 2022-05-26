import { errorHandler } from '$/api/middlewares'
import { NotFoundError } from '$/app/errors'
import { expect } from 'chai'
import sinon from 'sinon'

const makeRes = () => {
  const res: Record<string, sinon.SinonStub> = {
    status: sinon.stub().callsFake(() => res),
    json: sinon.stub().callsFake(() => res),
    sendStatus: sinon.stub().callsFake(() => res)
  }
  return res
}

describe('api/middlewares/error-handler.middleware.ts', () => {
  beforeEach(sinon.restore)

  it('should return 400 if throw validation error', () => {
    const res = makeRes()
    const err = new Error('message')
    err.name = 'ValidationError'
    errorHandler(err, {} as any, res as any, sinon.stub() as any)
    expect(res.status.getCall(0).args[0]).to.equal(400)
    expect(res.json.getCall(0).args[0]).deep.equal({ message: 'message' })
  })

  it('should return 404 if throw not found error', () => {
    const res = makeRes()
    const err = new NotFoundError()
    errorHandler(err, {} as any, res as any, sinon.stub() as any)
    expect(res.status.getCall(0).args[0]).to.equal(404)
  })

  it('should return 500 if throw untracked error', () => {
    const res = makeRes()
    const err = new Error()
    errorHandler(err, {} as any, res as any, sinon.stub() as any)
    expect(res.sendStatus.getCall(0).args[0]).to.equal(500)
  })
})
