import { expect, use } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { todosValidator } from '../../../src/app/validators'

use(chaiAsPromised)

describe('app/validators/todos.validator', () => {
  describe('paramsId', () => {
    it('should throw if value is invalid', () => {
      expect(todosValidator.paramsId('')).to.eventually.be.rejected
    })

    it('should parse if ok', () => {
      expect(todosValidator.paramsId({ id: 1 })).
        to.eventually.deep.equal({ id: 1 })
    })
  })

  describe('bodyAdd', () => {
    it('should throw if value is invalid', () => {
      expect(todosValidator.bodyAdd('')).to.eventually.be.rejected
    })

    it('should parse if ok', () => {
      expect(todosValidator.bodyAdd({ description: 'a' })).
        to.eventually.deep.equal({ description: 'a' })
    })
  })

  describe('bodyEdit', () => {
    it('should throw if value is invalid', () => {
      expect(todosValidator.bodyEdit('')).to.eventually.be.rejected
    })

    it('should parse if ok', () => {
      expect(todosValidator.bodyEdit({})).
        to.eventually.deep.equal({})
    })
  })
})
