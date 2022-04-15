import { expect, use } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import sinon from 'sinon'
import { todosController } from '../../../src/app/controllers'
import { todosService } from '../../../src/app/services'
import { todosValidator } from '../../../src/app/validators'
import { AddTodo, EditTodo, Todo } from '../../../src/types'

use(chaiAsPromised)

describe('app/controllers/todos.controller', () => {
  beforeEach(sinon.restore)

  describe('get', () => {
    it('should throw if todosValidator.paramsId throws', () => {
      sinon.stub(todosValidator, 'paramsId').rejects()
      expect(todosController.get({})).to.eventually.be.rejected
    })

    it('should throw if todosService.get throws', () => {
      sinon.stub(todosValidator, 'paramsId').resolves({ id: 1 })
      sinon.stub(todosService, 'get').rejects()
      expect(todosController.get({})).to.eventually.be.rejected
    })

    it('should return result', () => {
      sinon.stub(todosValidator, 'paramsId').resolves({ id: 1 })
      sinon.stub(todosService, 'get').resolves({ id: 1 } as Todo)
      expect(todosController.get({})).to.eventually.deep.equal({ id: 1 })
    })
  })

  describe('edit', () => {
    it('should throw if todosValidator.paramsId throws', () => {
      sinon.stub(todosValidator, 'paramsId').rejects()
      sinon.stub(todosValidator, 'bodyEdit').resolves({} as EditTodo)
      expect(todosController.edit({}, {})).to.eventually.be.rejected
    })

    it('should throw if todosValidator.bodyEdit throws', () => {
      sinon.stub(todosValidator, 'paramsId').resolves({ id: 1 })
      sinon.stub(todosValidator, 'bodyEdit').rejects()
      expect(todosController.edit({}, {})).to.eventually.be.rejected
    })

    it('should throw if todosService.edit throws', () => {
      sinon.stub(todosValidator, 'paramsId').resolves({ id: 1 })
      sinon.stub(todosValidator, 'bodyEdit').resolves({} as EditTodo)
      sinon.stub(todosService, 'edit').rejects()
      expect(todosController.edit({}, {})).to.eventually.be.rejected
    })

    it('should throw if todosService.get throws', () => {
      sinon.stub(todosValidator, 'paramsId').resolves({ id: 1 })
      sinon.stub(todosValidator, 'bodyEdit').resolves({} as EditTodo)
      sinon.stub(todosService, 'edit').resolves()
      sinon.stub(todosService, 'get').rejects()
      expect(todosController.edit({}, {})).to.eventually.be.rejected
    })

    it('should return result', () => {
      sinon.stub(todosValidator, 'paramsId').resolves({ id: 1 })
      sinon.stub(todosValidator, 'bodyEdit').resolves({} as EditTodo)
      sinon.stub(todosService, 'edit').resolves()
      sinon.stub(todosService, 'get').resolves({ id: 1 } as Todo)
      expect(todosController.edit({}, {})).to.eventually.deep.equal({ id: 1 })
    })
  })

  describe('remove', () => {
    it('should throw if todosValidator.paramsId throws', () => {
      sinon.stub(todosValidator, 'paramsId').rejects()
      expect(todosController.remove({})).to.eventually.be.rejected
    })

    it('should throw if todosService.remove throws', () => {
      sinon.stub(todosValidator, 'paramsId').resolves({ id: 1 })
      sinon.stub(todosService, 'remove').rejects()
      expect(todosController.remove({})).to.eventually.be.rejected
    })

    it('should return result', () => {
      sinon.stub(todosValidator, 'paramsId').resolves({ id: 1 })
      sinon.stub(todosService, 'remove').resolves()
      expect(todosController.remove({})).to.eventually.be.undefined
    })
  })

  describe('add', () => {
    it('should throw if todosValidator.bodyAdd throws', () => {
      sinon.stub(todosValidator, 'bodyAdd').rejects()
      expect(todosController.add({})).to.eventually.be.rejected
    })

    it('should throw if todosService.add throws', () => {
      sinon.stub(todosValidator, 'bodyAdd').resolves({} as AddTodo)
      sinon.stub(todosService, 'add').rejects()
      expect(todosController.add({})).to.eventually.be.rejected
    })

    it('should throw if todosService.get throws', () => {
      sinon.stub(todosValidator, 'bodyAdd').resolves({} as AddTodo)
      sinon.stub(todosService, 'add').resolves(1)
      sinon.stub(todosService, 'get').rejects()
      expect(todosController.add({})).to.eventually.be.rejected
    })

    it('should return result', () => {
      sinon.stub(todosValidator, 'bodyAdd').resolves({} as AddTodo)
      sinon.stub(todosService, 'add').resolves(1)
      sinon.stub(todosService, 'get').resolves({ id: 1 } as Todo)
      expect(todosController.add({})).to.eventually.deep.equal({ id: 1 })
    })
  })

  describe('list', () => {
    it('should throw if todosService.list throws', () => {
      sinon.stub(todosService, 'list').rejects()
      expect(todosController.list()).to.eventually.be.rejected
    })

    it('should return result', () => {
      sinon.stub(todosService, 'list').resolves([{ id: 1 }] as Todo[])
      expect(todosController.list()).to.eventually.deep.equal([{ id: 1 }])
    })
  })
})
