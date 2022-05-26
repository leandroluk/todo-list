import { runSchema } from '$/app/validators'
import { expect, use } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import Joi, { ValidationError } from 'joi'
import sinon from 'sinon'

use(chaiAsPromised)

describe('app/validators/_validators', () => {
  beforeEach(sinon.restore)

  const schema = Joi.object()

  describe('runSchema', () => {
    it('should throw if schema throws', () => {
      sinon.stub(schema, 'validate').returns({
        error: { details: [{ message: '' }] } as ValidationError,
        value: undefined
      })
      expect(runSchema(schema)()).to.eventually.be.rejected
    })

    it('should return value', () => {
      sinon.stub(schema, 'validate').returns({ error: undefined, value: {} })
      expect(runSchema(schema)()).to.eventually.be.ok
    })
  })
})
