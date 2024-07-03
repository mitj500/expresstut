
const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use(express.static('public')) // Serve static files from the 'public' folder



app.get('/', (req, res) => {
    res.sendFile()
    res.status(200)
  })
  app.get('/see', (req, res) => {
    res.send('Hello see World!')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
