const express = require('express')
const app = express()
const { serverSetup, getAll, postRequest, returnByID } = require('./controllers/teams')

// create app get req that returns list of team data

app.get('/', serverSetup)

app.use(express.json())

app.get('/teams', getAll)

app.post('/teams', postRequest)

// GET /teams/ID - Returns the team associated with that
// ID, where ID is a number (ex. `/teams/12`) 

app.get('/teams/:id', returnByID)


app.listen(1337, () => {
  console.log('my brain has too many tabs open') // eslint-disable-line no-console
})
