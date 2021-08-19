const models = require('../models')


const serverSetup = (request, response) => {
  return response.send('Hello World')
}
const getAll = async (request, response) => {
  const teams = await models.Teams.findAll()

  return response.send(teams)
}
const postRequest = async (request, response) => {
  const {
    location, mascot, abbreviation, conference, division
  } = request.body

  // check response body for all fields - if missing fields, return error 400
  if (!location || !mascot || !abbreviation || !conference || !division) {
    return response.status(400).send('missing fields')
  }
  // if all fields complete, get id of last team and add 1
  const newTeamId = await models.Teams.create({
    location, mascot, abbreviation, conference, division
  })

  // if not, create a new team from the data provide
  // add new team object to the teams array
  // respond with the newly created team
  response.send(newTeamId)
}
const returnByID = async (request, response) => {
  // run through each object in teams array
  // return team that matches param from request
  // eslint-disable-next-line eqeqeq
  const { id } = request.params
  const returnByID = await models.Teams.findOne({ where: { id } })

  return response.send(returnByID)
}

module.exports = { serverSetup, getAll, postRequest, returnByID }

