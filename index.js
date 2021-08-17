const express = require('express')
const teams = require('./teams')
const app = express()

// create app get req that returns list of team data

app.get('/', (request, response) => {
  return response.send('Hello World')
})

app.use(express.json())

app.get('/teams', (request, response) => {
  return response.send({ teams })
})

app.post('/teams', (request, response) => {
  // eslint-disable-next-line no-console
  console.log(request.body)
  const {
    location, mascot, abbreviation, conference, division
  } = request.body

  // check response body for all fields - if missing fields, return error 400
  if (!location || !mascot || !abbreviation || !conference || !division) {
    return response.status(400).send('missing fields')
  }
  // if all fields complete, get id of last team and add 1
  const newTeamId = teams[teams.length - 1].id + 1
  // if not, create a new team from the data provided
  const newTeamObject = {
    id: newTeamId,
    location: location,
    mascot: mascot,
    abbreviation: abbreviation,
    conference: conference,
    division: division
  }
  // add new team object to the teams array

  teams.push(newTeamObject)
  // respond with the newly created team
  response.send(newTeamObject)
})

// GET /teams/ID - Returns the team associated with that
// ID, where ID is a number (ex. `/teams/12`) 

app.get('/teams/:id', (request, response) => {
// run through each object in teams array
// return team that matches param from request
  // eslint-disable-next-line eqeqeq
  const teamObject = teams.filter(team => team.id == request.params.id)

  return response.send(teamObject)
})


app.listen(1337, () => {
  console.log('my brain has too many tabs open') // eslint-disable-line no-console
})
