const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const chai = require('chai')
const { describe, it } = require('mocha')
const { getAll, returnByID, addNewTeam, newTeam } = require('../../controllers/teams')
const { allTeams, singleTeam } = require('../mocks/allTeams')
const models = require('../../models')

chai.use(sinonChai)
const { expect } = chai

describe('teams controllers tests', () => {
  describe('listOfTeams', () => {
    it('retrieves and displays all teams from nfl db using res.send method', async () => {
      // first argument
      const stubFindAll = sinon.stub(models.Teams, 'findAll').returns(allTeams)
      const stubSend = sinon.stub()
      const response = { send: stubSend }

      await getAll ({}, response)

      expect(stubSend).to.have.been.calledWith(allTeams)
      expect(stubFindAll).to.have.callCount(1)
    })
  })

  // Get by ID
  describe('getByTeamId', () => {
    it('retrieves team associated with id from db using res.send()', async () => {
      const request = { params: { id: 1 } }
      const stubSend = sinon.stub()
      const response = { send: stubSend }
      const stubFindOne = sinon.stub(models.Teams, 'findOne').returns(singleTeam)

      await returnByID(request, response)

      expect(stubFindOne).to.have.been.calledWith({ where: { id: 1 } })
      expect(stubSend).to.have.been.calledWith(singleTeam)
    })
  })

  describe('addNewTeam', () => {

    it('accepts new team details and saves them as a new team', async () => {const request = { body: newTeam }
    const stubSend = sinon.stub()
    const stubStatus = sinon.stub().returns({ send: stubSend })
    const response = { status: stubStatus }
    const stubCreate = sinon.stub(models.Teams, 'create').returns(newTeam)

    await addNewTeam(request, response)
    expect(stubCreate).to.have.been.calledWith(newTeam)
    expect(stubStatus).to.have.been.calledWith(201)
    expect(stubSend).to.have.been.calledWith(newTeam)

    })
  })
})