import { expect, use } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { Model } from 'sequelize'
import sinon from 'sinon'
import { todosModel } from '../../../src/app/models'
import { todosDAO } from '../../../src/db'
import { AddTodo, Todo } from '../../../src/types'

use(chaiAsPromised)

describe('app/models/todos.model', () => {
  beforeEach(sinon.restore)

  describe('get', () => {
    it('should throw if todoDAO.findOne throws', () => {
      sinon.stub(todosDAO, 'findOne').rejects()
      expect(todosModel.get(1)).to.eventually.be.rejected
    })

    it('should return result', () => {
      sinon.stub(todosDAO, 'findOne').resolves({ id: 1 } as unknown as Model<Todo>)
      expect(todosModel.get(1)).to.eventually.deep.equal({ id: 1 })
    })
  })

  describe('exists', () => {
    it('should throw if todoDAO.count throws', () => {
      sinon.stub(todosDAO, 'count').rejects()
      expect(todosModel.exists(1)).to.eventually.be.rejected
    })

    it('should return result', () => {
      sinon.stub(todosDAO, 'count').resolves(1)
      expect(todosModel.exists(1)).to.eventually.be.equal(1)
    })
  })

  describe('edit', () => {
    it('should throw if todoDAO.update throws', () => {
      sinon.stub(todosDAO, 'update').rejects()
      expect(todosModel.edit(1, {})).to.eventually.be.rejected
    })

    it('should return result', () => {
      sinon.stub(todosDAO, 'update').resolves()
      expect(todosModel.edit(1, {})).to.eventually.be.undefined
    })
  })

  describe('remove', () => {
    it('should throw if todoDAO.destroy throws', () => {
      sinon.stub(todosDAO, 'destroy').rejects()
      expect(todosModel.remove(1)).to.eventually.be.rejected
    })

    it('should return result', () => {
      sinon.stub(todosDAO, 'destroy').resolves()
      expect(todosModel.remove(1)).to.eventually.be.undefined
    })
  })

  describe('add', () => {
    it('should throw if todoDAO.create throws', () => {
      sinon.stub(todosDAO, 'create').rejects()
      expect(todosModel.add({} as AddTodo)).to.eventually.be.rejected
    })

    it('should return result', () => {
      sinon.stub(todosDAO, 'create').resolves()
      expect(todosModel.add({} as AddTodo)).to.eventually.be.undefined
    })
  })

  describe('list', () => {
    it('should throw if todoDAO.findAll throws', () => {
      sinon.stub(todosDAO, 'findAll').rejects()
      expect(todosModel.list()).to.eventually.be.rejected
    })

    it('should return result', () => {
      sinon.stub(todosDAO, 'findAll').resolves([{ id: 1 }] as unknown as Model<Todo>[])
      expect(todosModel.list()).to.eventually.deep.equal([{ id: 1 }])
    })
  })
})
