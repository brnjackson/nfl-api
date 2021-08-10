const express = require('express')
const teams = require('./teams')
const app = express()

// create app get req that returns list of team data

app.get('/', (request, response) => {
  return response.send('Hello World')
})

app.get('/teams', (request, response) => {
  return response.send({ teams })
})

// GET /teams/ID - Returns the team associated with that
// ID, where ID is a number (ex. `/teams/12`) 

app.get('/teams/:id', (request, response) => {
// run through each object in teams array
// return team that matches param from request
  const teamObject = teams.filter(team => team.id == request.params.id)

  return response.send(teamObject)
})


app.listen(1337, () => {
  console.log('my brain has too many tabs open') // eslint-disable-line no-console
})
